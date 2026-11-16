const mysql = require('mysql2/promise');
const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, '..', '.env')
});

const recipes =
    require('../data/recipes');


async function seedRecipes() {

    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });


    try {

        for (
            const [slug, recipe]
            of Object.entries(recipes)
        ) {

            await pool.query(
                `
                INSERT INTO recipes (
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
                )

                VALUES (
                    ?, ?, ?, ?, ?, ?, ?,
                    ?, ?, ?, ?, ?, ?
                )

                ON DUPLICATE KEY UPDATE
                    category = VALUES(category),
                    is_quick_easy = VALUES(is_quick_easy),
                    title = VALUES(title),
                    english = VALUES(english),
                    image = VALUES(image),
                    description = VALUES(description),
                    time_text = VALUES(time_text),
                    difficulty = VALUES(difficulty),
                    serves = VALUES(serves),
                    ingredients = VALUES(ingredients),
                    steps = VALUES(steps),
                    tip = VALUES(tip)
                `,
                [
                    slug,

                    recipe.category,

                    recipe.isQuickEasy
                        ? 1
                        : 0,

                    recipe.title,
                    recipe.english,
                    recipe.image,
                    recipe.description,
                    recipe.time,
                    recipe.difficulty,
                    recipe.serves,

                    JSON.stringify(
                        recipe.ingredients
                    ),

                    JSON.stringify(
                        recipe.steps
                    ),

                    recipe.tip
                ]
            );

            console.log(
                `Seeded: ${slug}`
            );
        }


        console.log(
            'All recipes seeded successfully.'
        );


    } catch (error) {

        console.error(
            'Seed error:',
            error
        );

    } finally {

        await pool.end();
    }
}


seedRecipes();