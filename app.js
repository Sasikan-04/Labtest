const express = require('express');
const path = require('path');
require('dotenv').config();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const session = require('express-session');
//สร้างแอปพลิเคชันฝั่ง Backend
const app = express();

const PORT = process.env.PORT || 9000;

//connection ที่ Node.js จะใช้คุยกับ MySQL
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//ฟังก์ชั่นตรวจข้อมูล
function validateAccountInput(username, password, email) {

    if (!username || !password || !email) {
        return 'กรุณากรอกข้อมูลให้ครบทุกช่อง';
    }

    if (username.length < 3) {
        return 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร';
    }

    if (username.length > 50) {
        return 'ชื่อผู้ใช้ต้องไม่เกิน 50 ตัวอักษร';
    }

    if (password.length < 8) {
        return 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร';
    }

    if (email.length > 255) {
        return 'อีเมลยาวเกินกำหนด';
    }

    return null;
}

//Embedded JavaScript Templates EJS ช่วยให้เพิ่มข้อมูลจาก Backend ได้
app.set('view engine', 'ejs');

app.set(
    'views',
    path.join(__dirname, 'views')
);

//บอกExpressว่า ให้ browser เข้าถึง css, js และรูปใน public 
app.use(
    express.static(
        path.join(__dirname, 'public')
    )
);

//ใช้รับข้อมูลที่ส่งมาจาก HTML Form แบบ URL-encoded, Express จะอ่านข้อมูลแล้วนำไปไว้ใน req.body
app.use(
    express.urlencoded({
        extended: true
    })
);

//รับ JSON (สำหรับเพิ่ม Favorite)
app.use(express.json());

//Session Middleware
app.use(
    session({
        name: 'mellowbite.sid',
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,  //คนที่ยังไม่ login ไม่ต้องสร้าง session เปล่า
        cookie: {
            httpOnly: true,    //JavaScript ฝั่ง browser อ่าน cookie นี้ไม่ได้
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 24   //1วันร
        }
    })
);

//ทุกหน้า EJS จะรู้เลยว่า currentUser = null ถ้ายังไม่ Login
app.use((req, res, next) => {
    res.locals.currentUser =
        req.session.loggedin
            ? {
                id: req.session.userId,
                username: req.session.username
            }
            : null;
    res.locals.currentPath = req.path;
    next();
});

//Authorization
function requireLogin(req, res, next) {
    if (
        req.session.loggedin &&
        req.session.userId
    ) {
        return next();
    }
    return res.redirect('/login');
}

//เพิ่มเฮ้วเปอร์   ---------Visitor Counter--------
function getBangkokDateTime() {     //บังคับวันเวลาให้เป็น Asia/Bangkok

    const now = new Date();

    const parts =
        new Intl.DateTimeFormat(
            'en-GB',
            {
                timeZone: 'Asia/Bangkok',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hourCycle: 'h23'
            }
        ).formatToParts(now);


    const getPart = (type) =>
        parts.find(
            part => part.type === type
        ).value;


    const year = getPart('year');
    const month = getPart('month');
    const day = getPart('day');

    const hour = getPart('hour');
    const minute = getPart('minute');
    const second = getPart('second');


    return {
        date: `${year}-${month}-${day}`,

        dateTime:
            `${year}-${month}-${day} ` +
            `${hour}:${minute}:${second}`
    };
}

//จัดรูป IP ให้เรียบร้อย
function normalizeIp(ip) {

    if (
        ip &&
        ip.startsWith('::ffff:')
    ) {
        return ip.substring(7);
    }

    return ip;
}






//-------------Routes (สั่งเซิฟเว่อ)---------------

app.get( ['/', '/index.html'],                           //นำไฟล์ views/index.ejs มาสร้าง HTML ส่งกลับ
    async (req, res) => {

        try {

            const ipAddress =
                normalizeIp(req.ip);

            const bangkok =
                getBangkokDateTime();


            const [visitorResult] = await pool.query(
                `
                INSERT INTO home_visitors (
                    ip_address,
                    visit_date,
                    first_visit_at,
                    last_visit_at
                )
                VALUES (?, ?, ?, ?)

                ON DUPLICATE KEY UPDATE
                    last_visit_at = ?
                `,
                [
                    ipAddress,
                    bangkok.date,
                    bangkok.dateTime,
                    bangkok.dateTime,
                    bangkok.dateTime
                ]
            );

            console.log('Visitor IP:', ipAddress);
            console.log('Bangkok date:', bangkok.date);
            console.log('Insert result:', visitorResult);


            /* นับ Visitor ทั้งหมด */

            const [totalRows] =
                await pool.query(
                    `
                    SELECT COUNT(*) AS total
                    FROM home_visitors
                    `
                );


            /* นับ Visitor วันนี้ */

            const [todayRows] =
                await pool.query(
                    `
                    SELECT COUNT(*) AS total
                    FROM home_visitors
                    WHERE visit_date = ?
                    `,
                    [bangkok.date]
                );


            return res.render(
                'index',
                {
                    visitorCount:
                        totalRows[0].total,

                    todayVisitorCount:
                        todayRows[0].total
                }
            );


        } catch (error) {

            console.error(
                'Visitor counter error:',
                error
            );


            return res.render(
                'index',
                {
                    visitorCount: 0,
                    todayVisitorCount: 0
                }
            );

        }

    }
);


//เอาสูตรทั้งหมดในcategory ที่เป็น main-dishes จาก Database แล้วส่งไปให้ main-dishes.ejs ในตัวแปรชื่อ recipes
app.get(['/main-dishes', '/main-dishes.html'],
    async (req, res) => {

        try {

            const [recipes] =
                await pool.query(
                    `
                    SELECT
                        slug,
                        title,
                        english,
                        image,
                        description,
                        time_text,
                        difficulty
                    FROM recipes
                    WHERE category = ?
                    ORDER BY id
                    `,
                    ['main-dishes']
                );


            return res.render(
                'main-dishes',
                {
                    recipes
                }
            );


        } catch (error) {

            console.error(
                'Load main dishes error:',
                error
            );

            return res
                .status(500)
                .send('ไม่สามารถโหลดเมนูอาหารได้');

        }

    }
);

app.get(['/desserts', '/desserts.html'],
    async (req, res) => {

        try {

            const [recipes] =
                await pool.query(
                    `
                    SELECT
                        slug,
                        title,
                        english,
                        image,
                        description,
                        time_text,
                        difficulty
                    FROM recipes
                    WHERE category = ?
                    ORDER BY id
                    `,
                    ['desserts']
                );


            return res.render(
                'desserts',
                {
                    recipes
                }
            );


        } catch (error) {

            console.error(
                'Load desserts error:',
                error
            );

            return res
                .status(500)
                .send('ไม่สามารถโหลดเมนูของหวานได้');

        }

    }
);

app.get(['/drinks', '/drinks.html'],
    async (req, res) => {

        try {

            const [recipes] =
                await pool.query(
                    `
                    SELECT
                        slug,
                        title,
                        english,
                        image,
                        description,
                        time_text,
                        difficulty
                    FROM recipes
                    WHERE category = ?
                    ORDER BY id
                    `,
                    ['drinks']
                );


            return res.render(
                'drinks',
                {
                    recipes
                }
            );


        } catch (error) {

            console.error(
                'Load drinks error:',
                error
            );

            return res
                .status(500)
                .send('ไม่สามารถโหลดเครื่องดื่มได้');

        }

    }
);
//ดูว่า is_quick_easy = 1
app.get(['/quick-easy', '/quick-easy.html'],
    async (req, res) => {

        try {

            const [recipes] =
                await pool.query(
                    `
                    SELECT
                        slug,
                        title,
                        english,
                        image,
                        description,
                        time_text,
                        difficulty
                    FROM recipes
                    WHERE is_quick_easy = 1
                    ORDER BY id
                    `
                );


            return res.render(
                'quick-easy',
                {
                    recipes
                }
            );


        } catch (error) {

            console.error(
                'Load quick easy error:',
                error
            );

            return res
                .status(500)
                .send('ไม่สามารถโหลดเมนูทำง่ายได้');

        }

    }
);

app.get(['/recipe', '/recipe.html'],
    async (req, res) => {

        try {

            const slug = req.query.id;

            if (!slug) {
                return res.redirect('/');
            }


            const [rows] = await pool.query(
                `
                SELECT
                    slug,
                    category,
                    is_quick_easy,
                    title,
                    english,
                    image,
                    description,
                    time_text,
                    difficulty,
                    serves,
                    ingredients,
                    steps,
                    tip
                FROM recipes
                WHERE slug = ?
                LIMIT 1
                `,
                [slug]
            );


            if (rows.length === 0) {
                return res
                    .status(404)
                    .send('ไม่พบสูตรอาหาร');
            }


            const recipe = rows[0];


            if (typeof recipe.ingredients === 'string') {
                recipe.ingredients =
                    JSON.parse(recipe.ingredients);
            }

            if (typeof recipe.steps === 'string') {
                recipe.steps =
                    JSON.parse(recipe.steps);
            }

            //ถ้ายังไม่ล็อกอินคือเฟ้าส์ ล็อกอินแล้วค่อยคิวรี่
            let isFavorite = false;


            if (
                req.session.loggedin &&
                req.session.userId
            ) {

                const [favoriteRows] =
                    await pool.query(
                        `
                        SELECT id
                        FROM favorites
                        WHERE user_id = ?
                        AND recipe_slug = ?
                        LIMIT 1
                        `,
                        [
                            req.session.userId,
                            recipe.slug
                        ]
                    );


                isFavorite =
                    favoriteRows.length > 0;

            }


            return res.render(
                'recipe',
                {
                    recipe,
                    isFavorite
                }
            );


        } catch (error) {

            console.error(
                'Load recipe error:',
                error
            );


            return res
                .status(500)
                .send(
                    'ไม่สามารถโหลดสูตรอาหารได้'
                );

        }

    }
);

app.get('/register', (req, res) => {

    res.render('register', {
        error: null,

        values: {
            username: '',
            email: ''
        }
    });

});

app.post('/register', async (req, res) => {
    try {
        let {
            username,
            email,
            password
        } = req.body;
        username = username?.trim();
        email = email?.trim().toLowerCase();

        const validationError =
            validateAccountInput(
                username,
                password,
                email
            );
        if (validationError) {
            return res.status(400).render(
                'register',
                {
                    error: validationError,
                    values: {
                        username: username || '',
                        email: email || ''
                    }
                }
            );
        }
        const [existingAccounts] =
            await pool.query(
                `
                SELECT id
                FROM accounts
                WHERE username = ?
                OR email = ?
                LIMIT 1
                `,
                [username, email]
            );
        if (existingAccounts.length > 0) {
            return res.status(409).render(
                'register',
                {
                    error:
                        'ชื่อผู้ใช้หรืออีเมลนี้ถูกใช้งานแล้ว',
                    values: {
                        username,
                        email
                    }
                }
            );
        }

        const passwordHash =
            await bcrypt.hash(password, 12);

        await pool.query(
            `
            INSERT INTO accounts
                (username, password, email)
            VALUES
                (?, ?, ?)
            `,
            [
                username,
                passwordHash,
                email
            ]
        );

        console.log(
            `New account registered: ${username}`
        );

        /* Login ยังไม่เสร็จ
           เดี๋ยวขั้นต่อไปเราจะสร้าง route นี้ */

        return res.redirect(
            '/login?registered=1'
        );

    } catch (error) {
        console.error(
            'Register error:',
            error
        );
        return res.status(500).render(
            'register',
            {
                error:
                    'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
                values: {
                    username:
                        req.body.username || '',
                    email:
                        req.body.email || ''
                }
            }
        );
    }
});

app.get('/login', (req, res) => {
    res.render('login', {
        registered:
            req.query.registered === '1',
        error: null,
        username: ''
    });
});

app.post('/auth', async (req, res) => {
    try {
        let {
            username,
            password
        } = req.body;

        username = username?.trim();

        if (!username || !password) {
            return res.status(400).render(
                'login',
                {
                    registered: false,

                    error:
                        'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน',

                    username:
                        username || ''
                }
            );
        }

        const [accounts] =
            await pool.query(
                `
                SELECT
                    id,
                    username,
                    password,
                    email
                FROM accounts
                WHERE username = ?
                LIMIT 1
                `,
                [username]
            );

        if (accounts.length === 0) {
            return res.status(401).render(
                'login',
                {
                    registered: false,
                    error:
                        'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
                    username
                }
            );
        }

        const account = accounts[0];

        const passwordMatched =
            await bcrypt.compare(     //ตรวจว่ารหัสนี้ตรงกับแฮชไหม ใช้การเปรียบเทียบ
                password,
                account.password
            );

        if (!passwordMatched) {
            return res.status(401).render(
                'login',
                {
                    registered: false,

                    error:
                        'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
                    username
                }
            );

        }

// CREATE NEW SESSION (ถ้าถูก)
        await new Promise(
            (resolve, reject) => {
                req.session.regenerate(
                    (error) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve();
                        }
                    }
                );
            }
        );


        req.session.loggedin = true;
        req.session.userId = account.id;
        req.session.username = account.username;


        //บันทึก session ก่อน redirect
        await new Promise(
            (resolve, reject) => {
                req.session.save(     //เวลากด Favorite เราก็รู้ว่า: คนที่กำลังกดคือ userId = 1
                    (error) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve();
                        }
                    }
                );
            }
        );

        console.log(
            `Login successful: ${account.username}`
        );

        return res.redirect('/');

    } catch (error) {
        console.error(
            'Login error:',
            error
        );
        return res.status(500).render(
            'login',
            {
                registered: false,
                error:
                    'เกิดข้อผิดพลาด กรุณาลองใหม่',
                username:
                    req.body.username || ''
            }
        );
    }
});

app.post('/signout', (req, res) => {
    req.session.destroy((error) => {     //destroy session
        if (error) {
            console.error(
                'Signout error:',
                error
            );
            return res.status(500).send(
                'ไม่สามารถออกจากระบบได้'
            );
        }

        res.clearCookie(       //ล้าง cookie

            'mellowbite.sid'
        );

        return res.redirect('/');     //กลับโฮม
    });
});

app.get('/favorites',requireLogin,
    async (req, res) => {

        try {

            const [recipes] =
                await pool.query(
                    `
                    SELECT
                        r.slug,
                        r.title,
                        r.english,
                        r.image,
                        r.description,
                        r.time_text,
                        r.difficulty,
                        f.created_at

                    FROM favorites f

                    INNER JOIN recipes r
                        ON r.slug =
                        f.recipe_slug

                    WHERE f.user_id = ?

                    ORDER BY
                        f.created_at DESC
                    `,
                    [
                        req.session.userId
                    ]
                );


            return res.render(
                'favorites',
                {
                    recipes
                }
            );


        } catch (error) {

            console.error(
                'Load favorites error:',
                error
            );


            return res
                .status(500)
                .send(
                    'ไม่สามารถโหลดสูตรที่บันทึกได้'
                );

        }

    }
);

app.post('/favorites/toggle',requireLogin,
    async (req, res) => {

        try {

            const recipeSlug =
                req.body.recipeSlug;


            if (
                !recipeSlug ||
                !/^[a-z0-9-]+$/.test(recipeSlug)
            ) {

                return res
                    .status(400)
                    .send(
                        'Recipe slug ไม่ถูกต้อง'
                    );

            }

            const [recipeRows] =
                await pool.query(
                    `
                    SELECT slug
                    FROM recipes
                    WHERE slug = ?
                    LIMIT 1
                    `,
                    [recipeSlug]
                );


            if (recipeRows.length === 0) {

                return res
                    .status(404)
                    .send(
                        'ไม่พบสูตรอาหาร'
                    );

            }

            const [favoriteRows] =
                await pool.query(
                    `
                    SELECT id
                    FROM favorites
                    WHERE user_id = ?
                    AND recipe_slug = ?
                    LIMIT 1
                    `,
                    [
                        req.session.userId,
                        recipeSlug
                    ]
                );

                //เพิ่มท็อกเกิล
            if (favoriteRows.length > 0) {

                /* มีอยู่แล้ว → ลบ */

                await pool.query(
                    `
                    DELETE FROM favorites
                    WHERE user_id = ?
                    AND recipe_slug = ?
                    `,
                    [
                        req.session.userId,
                        recipeSlug
                    ]
                );

            } else {

                /* ยังไม่มี → เพิ่ม */

                await pool.query(
                    `
                    INSERT INTO favorites
                        (user_id, recipe_slug)
                    VALUES
                        (?, ?)
                    `,
                    [
                        req.session.userId,
                        recipeSlug
                    ]
                );

            }


            return res.redirect(
                `/recipe?id=${encodeURIComponent(
                    recipeSlug
                )}`
            );


        } catch (error) {

            console.error(
                'Toggle favorite error:',
                error
            );


            return res
                .status(500)
                .send(
                    'ไม่สามารถแก้ไข Favorite ได้'
                );

        }

    }
);



app.get('/session-test', (req, res) => {

    res.json({
        loggedin:
            req.session.loggedin || false,

        userId:
            req.session.userId || null,

        username:
            req.session.username || null
    });

});

async function startServer() {
    try {
        const connection = await pool.getConnection();

        console.log('MySQL connected successfully.');

        connection.release();

        app.listen(PORT, () => {
            console.log(
                `Labtest server running at http://localhost:${PORT}`
            );
        });

    } catch (error) {
        console.error(
            'Unable to connect to MySQL:',
            error.message
        );

        process.exit(1);
    }
}

startServer();