const recipes = {

    "matcha-tiramisu": {
        title: "มัทฉะทีรามิสุ",
        english: "MATCHA TIRAMISU",
        image: "assets/images/matcha-tiramisu.jpg",
        description:
            "ทีรามิสุเนื้อนุ่ม หอมมัทฉะ เข้มกำลังดี หวานน้อย เหมาะสำหรับคนที่อยากลองทำของหวานแบบไม่ต้องอบ",
        time: "30 นาที",
        difficulty: "ง่าย",
        serves: "4 ที่",
        category: "desserts",
        isQuickEasy: false,
        ingredients: [
            "มาสคาร์โปเนชีส 250 กรัม",
            "วิปปิงครีม 200 มล.",
            "ผงมัทฉะ 2 ช้อนโต๊ะ",
            "เลดี้ฟิงเกอร์ 12 ชิ้น",
            "น้ำตาล 50 กรัม",
            "นมสด 100 มล."
        ],
        steps: [
            "ตีวิปปิงครีมกับน้ำตาลจนขึ้นฟูนุ่ม",
            "ใส่มาสคาร์โปเน แล้วคนให้ส่วนผสมเนียนเข้ากัน",
            "ผสมมัทฉะกับนมอุ่น คนจนไม่มีเม็ดผงมัทฉะ",
            "จุ่มเลดี้ฟิงเกอร์ลงในมัทฉะนม แล้วเรียงลงในภาชนะ",
            "สลับชั้นครีมและเลดี้ฟิงเกอร์จนเต็ม",
            "แช่เย็นอย่างน้อย 3 ชั่วโมง แล้วโรยมัทฉะก่อนเสิร์ฟ"
        ],
        tip:
            "อย่าจุ่มเลดี้ฟิงเกอร์ในนมนานเกินไป เพราะเนื้อขนมจะนิ่มจนเสียรูป"
    },


    "creamy-truffle-pasta": {
        title: "ครีมมี่ทรัฟเฟิลพาสต้า",
        english: "CREAMY TRUFFLE PASTA",
        image: "assets/images/creamy-truffle-pasta.jpg",
        description:
            "พาสต้าเนื้อครีมละมุน หอมเห็ดและทรัฟเฟิลออยล์ ทำง่ายแต่ดูเหมือนเมนูจากร้านอาหาร",
        time: "25 นาที",
        difficulty: "ง่าย",
        serves: "2 ที่",
        category: "main-dishes",
        isQuickEasy: false,
        ingredients: [
            "เส้นพาสต้า 180 กรัม",
            "เห็ดแชมปิญอง 100 กรัม",
            "วิปปิงครีม 150 มล.",
            "พาร์เมซานชีส 30 กรัม",
            "ทรัฟเฟิลออยล์ 1 ช้อนชา",
            "เกลือและพริกไทย"
        ],
        steps: [
            "ต้มเส้นพาสต้าจนสุกระดับอัลเดนเต้",
            "ผัดเห็ดจนหอมและสีเริ่มสวย",
            "เติมวิปปิงครีมและพาร์เมซาน คนจนซอสข้น",
            "ใส่เส้นลงคลุกกับซอส",
            "ปิดไฟแล้วหยดทรัฟเฟิลออยล์ก่อนเสิร์ฟ"
        ],
        tip:
            "ใส่ทรัฟเฟิลออยล์หลังปิดไฟ กลิ่นจะชัดและหอมกว่า"
    },


    "strawberry-french-toast": {
        title: "สตรอว์เบอร์รีเฟรนช์โทสต์",
        english: "STRAWBERRY FRENCH TOAST",
        image: "assets/images/strawberry-french-toast.jpg",
        description:
            "เฟรนช์โทสต์หอมเนย เนื้อนุ่ม เสิร์ฟพร้อมสตรอว์เบอร์รีสดและครีม",
        time: "15 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 ที่",
        category: "desserts",
        isQuickEasy: true,
        ingredients: [
            "ขนมปัง 2 แผ่น",
            "ไข่ไก่ 1 ฟอง",
            "นมสด 80 มล.",
            "เนย 1 ช้อนโต๊ะ",
            "สตรอว์เบอร์รี 5 ลูก"
        ],
        steps: [
            "ตีไข่กับนมให้เข้ากัน",
            "นำขนมปังชุบส่วนผสมไข่",
            "ละลายเนยในกระทะ",
            "ทอดขนมปังทั้งสองด้านจนเหลือง",
            "เสิร์ฟพร้อมสตรอว์เบอร์รี"
        ],
        tip:
            "ใช้ขนมปังหนาจะได้เนื้อด้านในนุ่มและไม่เละง่าย"
    },


    "yuzu-honey-soda": {
        title: "ยูซุน้ำผึ้งโซดา",
        english: "YUZU HONEY SODA",
        image: "assets/images/yuzu-honey-soda.jpg",
        description:
            "เครื่องดื่มเปรี้ยวหวานสดชื่น หอมยูซุและน้ำผึ้ง ทำง่ายในไม่กี่นาที",
        time: "5 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 แก้ว",
        category: "drinks",
        isQuickEasy: true,
        ingredients: [
            "น้ำยูซุ 30 มล.",
            "น้ำผึ้ง 1 ช้อนโต๊ะ",
            "โซดา 150 มล.",
            "น้ำแข็ง"
        ],
        steps: [
            "ผสมน้ำยูซุกับน้ำผึ้ง",
            "ใส่น้ำแข็งลงในแก้ว",
            "เทส่วนผสมยูซุลงไป",
            "เติมโซดาและคนเบา ๆ"
        ],
        tip:
            "แช่โซดาให้เย็นจัดก่อนใช้ จะทำให้เครื่องดื่มซ่าสดชื่นกว่า"
    },


    "salmon-teriyaki-bowl": {
        title: "ข้าวหน้าแซลมอนเทอริยากิ",
        english: "SALMON TERIYAKI BOWL",
        image: "assets/images/salmon-teriyaki-bowl.jpg",
        description:
            "แซลมอนย่างซอสเทอริยากิหวานเค็มกำลังดี เสิร์ฟบนข้าวร้อน ๆ",
        time: "30 นาที",
        difficulty: "ปานกลาง",
        serves: "1 ที่",
        category: "main-dishes",
        isQuickEasy: false,
        ingredients: [
            "ปลาแซลมอน 150 กรัม",
            "ข้าวญี่ปุ่น 1 ถ้วย",
            "ซอสเทอริยากิ 3 ช้อนโต๊ะ",
            "งาขาว",
            "ต้นหอม"
        ],
        steps: [
            "ย่างปลาแซลมอนจนเกือบสุก",
            "ใส่ซอสเทอริยากิลงเคลือบปลา",
            "ตักข้าวใส่ชาม",
            "วางแซลมอนด้านบน",
            "โรยงาและต้นหอม"
        ],
        tip:
            "อย่ากลับปลาไปมาหลายครั้ง เนื้อปลาจะแตกง่าย"
    },


    "kimchi-fried-rice": {
        title: "ข้าวผัดกิมชีไข่ดาว",
        english: "KIMCHI FRIED RICE",
        image: "assets/images/kimchi-fried-rice.jpg",
        description:
            "ข้าวผัดกิมชีรสเข้มข้น เปรี้ยวเผ็ดกำลังดี เพิ่มไข่ดาวด้านบนให้อิ่มครบมื้อ",
        time: "20 นาที",
        difficulty: "ง่าย",
        serves: "1 ที่",
        category: "main-dishes",
        isQuickEasy: false,
        ingredients: [
            "ข้าวสวย 1 ถ้วย",
            "กิมชี 100 กรัม",
            "โคชูจัง 1 ช้อนชา",
            "น้ำมันงา 1 ช้อนชา",
            "ไข่ไก่ 1 ฟอง"
        ],
        steps: [
            "ผัดกิมชีจนหอม",
            "ใส่ข้าวและโคชูจังลงผัด",
            "เติมน้ำมันงา",
            "ทอดไข่ดาวแยกต่างหาก",
            "วางไข่ดาวบนข้าวก่อนเสิร์ฟ"
        ],
        tip:
            "ใช้ข้าวเย็นจะทำให้เม็ดข้าวร่วนและผัดง่ายกว่า"
    },


    "garlic-butter-chicken": {
        title: "ไก่กระเทียมเนย",
        english: "GARLIC BUTTER CHICKEN",
        image: "assets/images/garlic-butter-chicken.jpg",
        description:
            "ไก่นุ่มชุ่มเนย หอมกระเทียม เหมาะกับข้าวหรือมันบด",
        time: "25 นาที",
        difficulty: "ง่าย",
        serves: "2 ที่",
        category: "main-dishes",
        isQuickEasy: false,
        ingredients: [
            "อกไก่ 250 กรัม",
            "เนย 2 ช้อนโต๊ะ",
            "กระเทียมสับ 1 ช้อนโต๊ะ",
            "เกลือ",
            "พริกไทย"
        ],
        steps: [
            "ปรุงไก่ด้วยเกลือและพริกไทย",
            "ย่างไก่จนสุกทั้งสองด้าน",
            "ใส่เนยและกระเทียม",
            "ตักเนยราดบนไก่จนหอม"
        ],
        tip:
            "พักไก่ 3–5 นาทีก่อนหั่น จะช่วยเก็บน้ำในเนื้อไก่"
    },


    "pesto-tomato-pasta": {
        title: "เพสโต้โทเมโทพาสต้า",
        english: "PESTO TOMATO PASTA",
        image: "assets/images/pesto-tomato-pasta.jpg",
        description:
            "พาสต้าเพสโต้หอมใบโหระพา ตัดรสด้วยมะเขือเทศสด",
        time: "20 นาที",
        difficulty: "ง่าย",
        serves: "2 ที่",
        category: "main-dishes",
        isQuickEasy: false,
        ingredients: [
            "เส้นพาสต้า 180 กรัม",
            "ซอสเพสโต้ 3 ช้อนโต๊ะ",
            "มะเขือเทศเชอร์รี",
            "พาร์เมซาน",
            "น้ำมันมะกอก"
        ],
        steps: [
            "ต้มเส้นจนสุก",
            "ผ่ามะเขือเทศครึ่งลูก",
            "คลุกเส้นกับซอสเพสโต้",
            "ใส่มะเขือเทศ",
            "โรยพาร์เมซานก่อนเสิร์ฟ"
        ],
        tip:
            "เติมน้ำต้มพาสต้าหนึ่งช้อนช่วยให้ซอสเคลือบเส้นได้ดีขึ้น"
    },


    "egg-mayo-croissant": {
        title: "ครัวซองต์ไข่มายองเนส",
        english: "EGG MAYO CROISSANT",
        image: "assets/images/egg-mayo-croissant.jpg",
        description:
            "ครัวซองต์กรอบนอกนุ่มในกับไส้ไข่มายองเนสเนื้อครีม",
        time: "15 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 ที่",
        category: "main-dishes",
        isQuickEasy: true,
        ingredients: [
            "ครัวซองต์ 1 ชิ้น",
            "ไข่ต้ม 2 ฟอง",
            "มายองเนส 1 ช้อนโต๊ะ",
            "พริกไทย",
            "ผักสลัด"
        ],
        steps: [
            "บดไข่ต้ม",
            "ผสมมายองเนสและพริกไทย",
            "ผ่าครัวซองต์",
            "ใส่ผักและไข่มายองเนส"
        ],
        tip:
            "อุ่นครัวซองต์ก่อนประกอบ จะได้ผิวกรอบหอมเนย"
    },


    "avocado-egg-toast": {
        title: "อโวคาโดเอ้กโทสต์",
        english: "AVOCADO EGG TOAST",
        image: "assets/images/avocado-egg-toast.jpg",
        description:
            "ขนมปังกรอบกับอโวคาโดบดและไข่ เหมาะเป็นมื้อเช้าง่าย ๆ",
        time: "10 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 ที่",
        category: "main-dishes",
        isQuickEasy: true,
        ingredients: [
            "ขนมปัง 1 แผ่น",
            "อโวคาโดครึ่งลูก",
            "ไข่ 1 ฟอง",
            "เกลือ",
            "พริกไทย"
        ],
        steps: [
            "ปิ้งขนมปังให้กรอบ",
            "บดอโวคาโด",
            "ทอดหรือโปชไข่ตามชอบ",
            "วางอโวคาโดและไข่บนขนมปัง"
        ],
        tip:
            "บีบเลมอนเล็กน้อยลงในอโวคาโดจะช่วยเพิ่มรสและลดการคล้ำ"
    },


    "biscoff-cheesecake": {
        title: "บิสคอฟชีสเค้ก",
        english: "BISCOFF CHEESECAKE",
        image: "assets/images/biscoff-cheesecake.jpg",
        description:
            "ชีสเค้กเนื้อครีมเข้มข้นกับความหอมคาราเมลของบิสคอฟ",
        time: "45 นาที",
        difficulty: "ปานกลาง",
        serves: "6 ที่",
        category: "desserts",
        isQuickEasy: false,
        ingredients: [
            "คุกกี้บิสคอฟ",
            "ครีมชีส",
            "วิปปิงครีม",
            "น้ำตาล",
            "บิสคอฟสเปรด"
        ],
        steps: [
            "บดคุกกี้ทำฐาน",
            "ตีครีมชีสกับน้ำตาล",
            "ใส่วิปปิงครีม",
            "เทบนฐานคุกกี้",
            "แช่เย็นจนเซ็ตตัว"
        ],
        tip:
            "นำครีมชีสออกมาพักให้นิ่มก่อนตี เนื้อจะเนียนกว่า"
    },


    "strawberry-shortcake-cup": {
        title: "สตรอว์เบอร์รีชอร์ตเค้กคัพ",
        english: "STRAWBERRY SHORTCAKE CUP",
        image: "assets/images/strawberry-shortcake-cup.jpg",
        description:
            "เค้กเนื้อนุ่มสลับชั้นกับครีมและสตรอว์เบอร์รีสดในแก้ว",
        time: "25 นาที",
        difficulty: "ง่าย",
        serves: "2 ที่",
        category: "desserts",
        isQuickEasy: false,
        ingredients: [
            "สปันจ์เค้ก",
            "สตรอว์เบอร์รี",
            "วิปครีม",
            "น้ำตาล",
            "วานิลลา"
        ],
        steps: [
            "หั่นเค้กเป็นชิ้นเล็ก",
            "ตีวิปครีม",
            "หั่นสตรอว์เบอร์รี",
            "เรียงเค้ก ครีม และผลไม้สลับกันในแก้ว"
        ],
        tip:
            "แช่เย็นก่อนเสิร์ฟประมาณ 30 นาที รสชาติจะเข้ากันมากขึ้น"
    },


    "earl-grey-panna-cotta": {
        title: "เอิร์ลเกรย์พานาคอตต้า",
        english: "EARL GREY PANNA COTTA",
        image: "assets/images/earl-grey-panna-cotta.jpg",
        description:
            "พานาคอตต้าเนียนนุ่ม หอมชาเอิร์ลเกรย์แบบละมุน",
        time: "30 นาที",
        difficulty: "ง่าย",
        serves: "3 ที่",
        category: "desserts",
        isQuickEasy: false,
        ingredients: [
            "วิปปิงครีม",
            "นมสด",
            "ชาเอิร์ลเกรย์",
            "น้ำตาล",
            "เจลาติน"
        ],
        steps: [
            "อุ่นครีมและนม",
            "แช่ชาเอิร์ลเกรย์",
            "เติมน้ำตาล",
            "ใส่เจลาติน",
            "เทลงแก้วและแช่เย็น"
        ],
        tip:
            "อย่าต้มครีมเดือดจัด เพราะจะทำให้เนื้อพานาคอตต้าไม่เนียน"
    },


    "banana-caramel-toast": {
        title: "บานาน่าคาราเมลโทสต์",
        english: "BANANA CARAMEL TOAST",
        image: "assets/images/banana-caramel-toast.jpg",
        description:
            "โทสต์หอมเนย เสิร์ฟกับกล้วยและซอสคาราเมลหวานหอม",
        time: "15 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 ที่",
        category: "desserts",
        isQuickEasy: true,
        ingredients: [
            "ขนมปัง",
            "กล้วย",
            "เนย",
            "น้ำตาลทรายแดง",
            "วิปครีม"
        ],
        steps: [
            "ปิ้งขนมปังกับเนย",
            "ผัดกล้วยกับน้ำตาลทรายแดง",
            "วางกล้วยบนโทสต์",
            "ราดคาราเมลและเสิร์ฟ"
        ],
        tip:
            "ใช้กล้วยที่สุกพอดี จะหวานหอมและไม่เละเกินไป"
    },


    "lemon-madeleine": {
        title: "เลมอนมาเดอลีน",
        english: "LEMON MADELEINE",
        image: "assets/images/lemon-madeleine.jpg",
        description:
            "มาเดอลีนเนื้อนุ่ม หอมเนยและผิวเลมอน",
        time: "35 นาที",
        difficulty: "ปานกลาง",
        serves: "8 ชิ้น",
        category: "desserts",
        isQuickEasy: false,
        ingredients: [
            "แป้งเค้ก",
            "ไข่",
            "น้ำตาล",
            "เนย",
            "ผิวเลมอน"
        ],
        steps: [
            "ตีไข่กับน้ำตาล",
            "ร่อนแป้งใส่",
            "เติมเนยละลาย",
            "ใส่ผิวเลมอน",
            "อบจนเหลือง"
        ],
        tip:
            "พักแป้งในตู้เย็นก่อนอบจะช่วยให้ได้ทรงนูนสวย"
    },


    "chocolate-mousse": {
        title: "ช็อกโกแลตมูส",
        english: "CHOCOLATE MOUSSE",
        image: "assets/images/chocolate-mousse.jpg",
        description:
            "ช็อกโกแลตมูสเข้มข้นแต่เนื้อเบานุ่ม ละลายในปาก",
        time: "20 นาที",
        difficulty: "ง่าย",
        serves: "2 ที่",
        category: "desserts",
        isQuickEasy: false,
        ingredients: [
            "ดาร์กช็อกโกแลต",
            "วิปปิงครีม",
            "น้ำตาล",
            "โกโก้",
            "เกลือเล็กน้อย"
        ],
        steps: [
            "ละลายช็อกโกแลต",
            "ตีวิปครีมจนตั้งยอดอ่อน",
            "ตะล่อมช็อกโกแลตกับครีม",
            "แช่เย็นก่อนเสิร์ฟ"
        ],
        tip:
            "รอให้ช็อกโกแลตอุ่นลงก่อนผสมกับครีม เพื่อไม่ให้ครีมละลาย"
    },


    "caramel-milk-pudding": {
        title: "พุดดิ้งนมสดคาราเมล",
        english: "CARAMEL MILK PUDDING",
        image: "assets/images/caramel-milk-pudding.jpg",
        description:
            "พุดดิ้งนมเนื้อเด้งนุ่มกับคาราเมลหอมหวาน",
        time: "25 นาที",
        difficulty: "ง่าย",
        serves: "3 ที่",
        category: "desserts",
        isQuickEasy: false,
        ingredients: [
            "นมสด",
            "ไข่",
            "น้ำตาล",
            "วานิลลา",
            "น้ำสำหรับคาราเมล"
        ],
        steps: [
            "ทำน้ำตาลคาราเมล",
            "ผสมนมกับไข่",
            "กรองส่วนผสม",
            "เทใส่ถ้วย",
            "นึ่งหรืออบจนเซ็ตตัว"
        ],
        tip:
            "กรองส่วนผสมก่อนเทลงพิมพ์ จะช่วยให้พุดดิ้งเนียน"
    },


    "strawberry-cream-croffle": {
        title: "ครอฟเฟิลสตรอว์เบอร์รีครีม",
        english: "STRAWBERRY CREAM CROFFLE",
        image: "assets/images/strawberry-cream-croffle.jpg",
        description:
            "ครอฟเฟิลกรอบนอกนุ่มใน เสิร์ฟกับครีมและสตรอว์เบอร์รีสด",
        time: "15 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 ที่",
        category: "desserts",
        isQuickEasy: true,
        ingredients: [
            "ครัวซองต์โดว์",
            "สตรอว์เบอร์รี",
            "วิปครีม",
            "น้ำตาล",
            "น้ำผึ้ง"
        ],
        steps: [
            "นำโดว์ลงเครื่องวาฟเฟิล",
            "อบจนกรอบ",
            "ตีวิปครีม",
            "ตกแต่งด้วยสตรอว์เบอร์รี",
            "ราดน้ำผึ้ง"
        ],
        tip:
            "อย่ากดเครื่องวาฟเฟิลแรงเกินไป เพื่อให้ครอฟเฟิลยังมีชั้นแป้ง"
    },


    "strawberry-matcha-latte": {
        title: "สตรอว์เบอร์รีมัทฉะลาเต้",
        english: "STRAWBERRY MATCHA LATTE",
        image: "assets/images/strawberry-matcha-latte.jpg",
        description:
            "มัทฉะลาเต้สีสวยกับซอสสตรอว์เบอร์รีหวานอมเปรี้ยว",
        time: "10 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 แก้ว",
        category: "drinks",
        isQuickEasy: true,
        ingredients: [
            "ผงมัทฉะ",
            "นมสด",
            "สตรอว์เบอร์รี",
            "น้ำตาล",
            "น้ำแข็ง"
        ],
        steps: [
            "บดสตรอว์เบอร์รีกับน้ำตาล",
            "ใส่ซอสลงก้นแก้ว",
            "เติมน้ำแข็งและนม",
            "ตีมัทฉะกับน้ำ",
            "เทมัทฉะด้านบน"
        ],
        tip:
            "เทมัทฉะช้า ๆ จะช่วยให้ชั้นสีแยกกันสวย"
    },


    "peach-iced-tea": {
        title: "พีชไอซ์ที",
        english: "PEACH ICED TEA",
        image: "assets/images/peach-iced-tea.jpg",
        description:
            "ชาดำเย็นหอมพีช สดชื่นและทำง่าย",
        time: "10 นาที",
        difficulty: "ง่าย",
        serves: "1 แก้ว",
        category: "drinks",
        isQuickEasy: true,
        ingredients: [
            "ชาดำ",
            "ไซรัปพีช",
            "พีชสด",
            "น้ำแข็ง"
        ],
        steps: [
            "ชงชาดำ",
            "พักให้เย็น",
            "เติมไซรัปพีช",
            "ใส่น้ำแข็งและพีชสด"
        ],
        tip:
            "ชงชาให้เข้มกว่าปกติเล็กน้อย เพราะน้ำแข็งจะทำให้รสอ่อนลง"
    },


    "cocoa-cream-cloud": {
        title: "โกโก้ครีมคลาวด์",
        english: "COCOA CREAM CLOUD",
        image: "assets/images/cocoa-cream-cloud.jpg",
        description:
            "โกโก้เข้มข้นกับครีมนุ่มด้านบน หวานมันกำลังดี",
        time: "10 นาที",
        difficulty: "ง่าย",
        serves: "1 แก้ว",
        category: "drinks",
        isQuickEasy: true,
        ingredients: [
            "ผงโกโก้",
            "นมสด",
            "น้ำตาล",
            "วิปครีม",
            "น้ำแข็ง"
        ],
        steps: [
            "ละลายโกโก้กับน้ำร้อน",
            "เติมน้ำตาล",
            "ใส่นมและน้ำแข็ง",
            "ท็อปด้วยวิปครีม"
        ],
        tip:
            "ใช้โกโก้เข้มข้นจะช่วยให้รสไม่จางเมื่อใส่น้ำแข็ง"
    },


    "espresso-tonic": {
        title: "เอสเพรสโซโทนิก",
        english: "ESPRESSO TONIC",
        image: "assets/images/espresso-tonic.jpg",
        description:
            "กาแฟเอสเพรสโซเข้มตัดกับโทนิกซ่าสดชื่น",
        time: "5 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 แก้ว",
        category: "drinks",
        isQuickEasy: true,
        ingredients: [
            "เอสเพรสโซ 1 ช็อต",
            "โทนิกวอเตอร์",
            "น้ำแข็ง",
            "เลมอน"
        ],
        steps: [
            "ใส่น้ำแข็งลงแก้ว",
            "เติมโทนิกวอเตอร์",
            "ค่อย ๆ เทเอสเพรสโซ",
            "ตกแต่งด้วยเลมอน"
        ],
        tip:
            "เทกาแฟผ่านหลังช้อนเบา ๆ จะช่วยให้ชั้นกาแฟสวยขึ้น"
    },


    "coconut-matcha": {
        title: "โคโคนัทมัทฉะ",
        english: "COCONUT MATCHA",
        image: "assets/images/coconut-matcha.jpg",
        description:
            "มัทฉะหอมเข้มกับน้ำมะพร้าวและนมมะพร้าวที่สดชื่น",
        time: "10 นาที",
        difficulty: "ง่าย",
        serves: "1 แก้ว",
        category: "drinks",
        isQuickEasy: true,
        ingredients: [
            "ผงมัทฉะ",
            "น้ำมะพร้าว",
            "นมมะพร้าว",
            "น้ำแข็ง"
        ],
        steps: [
            "ตีมัทฉะกับน้ำอุ่น",
            "เติมน้ำแข็งลงแก้ว",
            "เทน้ำมะพร้าวและนมมะพร้าว",
            "เทมัทฉะด้านบน"
        ],
        tip:
            "เลือกน้ำมะพร้าวที่หวานธรรมชาติ จะไม่ต้องเติมน้ำตาลเพิ่ม"
    },


    "strawberry-yogurt-smoothie": {
        title: "สตรอว์เบอร์รีโยเกิร์ตสมูทตี้",
        english: "STRAWBERRY YOGURT SMOOTHIE",
        image: "assets/images/strawberry-yogurt-smoothie.jpg",
        description:
            "สมูทตี้สตรอว์เบอร์รีเนื้อเนียน รสเปรี้ยวหวานสดชื่น",
        time: "5 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 แก้ว",
        category: "drinks",
        isQuickEasy: true,
        ingredients: [
            "สตรอว์เบอร์รี",
            "โยเกิร์ต",
            "นมสด",
            "น้ำผึ้ง",
            "น้ำแข็ง"
        ],
        steps: [
            "ใส่ทุกอย่างลงเครื่องปั่น",
            "ปั่นจนเนียน",
            "ชิมรส",
            "เทใส่แก้ว"
        ],
        tip:
            "ใช้สตรอว์เบอร์รีแช่แข็ง จะได้สมูทตี้ข้นโดยไม่ต้องใส่น้ำแข็งมาก"
    },


    "honey-lemon-tea": {
        title: "เลมอนทีน้ำผึ้ง",
        english: "HONEY LEMON TEA",
        image: "assets/images/honey-lemon-tea.jpg",
        description:
            "ชาหอม ๆ กับเลมอนและน้ำผึ้ง เปรี้ยวหวานสดชื่น",
        time: "5 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 แก้ว",
        category: "drinks",
        isQuickEasy: true,
        ingredients: [
            "ชา",
            "เลมอน",
            "น้ำผึ้ง",
            "น้ำแข็ง"
        ],
        steps: [
            "ชงชา",
            "เติมน้ำผึ้ง",
            "บีบน้ำเลมอน",
            "ใส่น้ำแข็ง"
        ],
        tip:
            "เติมน้ำผึ้งตอนชายังอุ่น จะละลายง่ายกว่า"
    },


    "vanilla-iced-latte": {
        title: "วานิลลาไอซ์ลาเต้",
        english: "VANILLA ICED LATTE",
        image: "assets/images/vanilla-iced-latte.jpg",
        description:
            "ลาเต้เย็นหอมวานิลลา รสนุ่มดื่มง่าย",
        time: "5 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 แก้ว",
        category: "drinks",
        isQuickEasy: true,
        ingredients: [
            "เอสเพรสโซ",
            "นมสด",
            "วานิลลาไซรัป",
            "น้ำแข็ง"
        ],
        steps: [
            "ใส่วานิลลาไซรัปลงแก้ว",
            "เติมน้ำแข็ง",
            "เทนมสด",
            "เทเอสเพรสโซด้านบน"
        ],
        tip:
            "ใช้นมเย็นจัดเพื่อให้เครื่องดื่มสดชื่นและชั้นสีสวย"
    },


    "cheese-egg-toast": {
        title: "ชีสเอ้กโทสต์",
        english: "CHEESE EGG TOAST",
        image: "assets/images/cheese-egg-toast.jpg",
        description:
            "โทสต์ไข่ชีสเมนูเร็ว ทำง่ายและอิ่มอยู่ท้อง",
        time: "10 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 ที่",
        category: "main-dishes",
        isQuickEasy: true,
        ingredients: [
            "ขนมปัง",
            "ไข่",
            "ชีส",
            "เนย",
            "พริกไทย"
        ],
        steps: [
            "เจาะกลางขนมปังเล็กน้อย",
            "วางบนกระทะที่ทาเนย",
            "ตอกไข่",
            "โรยชีส",
            "ปิดฝาจนไข่สุก"
        ],
        tip:
            "ใช้ไฟอ่อนเพื่อให้ไข่สุกพร้อมกับชีสโดยที่ขนมปังไม่ไหม้"
    },


    "yogurt-granola-fruit-bowl": {
        title: "โยเกิร์ตกราโนล่าฟรุตโบวล์",
        english: "YOGURT GRANOLA FRUIT BOWL",
        image: "assets/images/yogurt-granola-fruit-bowl.jpg",
        description:
            "โยเกิร์ตโบวล์สดชื่นกับกราโนล่าและผลไม้ เหมาะสำหรับมื้อเช้า",
        time: "5 นาที",
        difficulty: "ง่ายมาก",
        serves: "1 ที่",
        category: "main-dishes",
        isQuickEasy: true,
        ingredients: [
            "โยเกิร์ต",
            "กราโนล่า",
            "ผลไม้สด",
            "น้ำผึ้ง"
        ],
        steps: [
            "ตักโยเกิร์ตลงชาม",
            "ใส่กราโนล่า",
            "วางผลไม้ด้านบน",
            "ราดน้ำผึ้งเล็กน้อย"
        ],
        tip:
            "ใส่กราโนล่าก่อนกินไม่นาน เพื่อให้ยังกรอบอยู่"
    },

    "korean-chicken-rice-bowl": {
    title: "ข้าวหน้าไก่เกาหลี",
    english: "KOREAN CHICKEN RICE BOWL",
    image: "assets/images/korean-chicken-rice-bowl.jpg",
    description:
        "ข้าวร้อน ๆ เสิร์ฟคู่ไก่ซอสเกาหลีรสหวานเผ็ด กลมกล่อม โรยงาและต้นหอม อิ่มง่ายในจานเดียว",
    time: "25 นาที",
    difficulty: "ง่าย",
    serves: "1 ที่",
    category: "main-dishes",
    isQuickEasy: false,
    ingredients: [
        "เนื้อไก่ 180 กรัม",
        "ข้าวสวย 1 ถ้วย",
        "โคชูจัง 1 ช้อนโต๊ะ",
        "ซีอิ๊วขาว 1 ช้อนโต๊ะ",
        "น้ำผึ้ง 1 ช้อนชา",
        "กระเทียมสับ 1 ช้อนชา",
        "น้ำมันงา 1 ช้อนชา",
        "งาขาว",
        "ต้นหอม"
    ],
    steps: [
        "หั่นเนื้อไก่เป็นชิ้นพอดีคำ",
        "ผสมโคชูจัง ซีอิ๊วขาว น้ำผึ้ง กระเทียม และน้ำมันงาเข้าด้วยกัน",
        "นำไก่ลงผัดในกระทะจนเกือบสุก",
        "เติมซอสที่ผสมไว้แล้วผัดต่อจนซอสเคลือบไก่",
        "ตักข้าวใส่ชามแล้ววางไก่เกาหลีด้านบน",
        "โรยงาขาวและต้นหอมก่อนเสิร์ฟ"
    ],
    tip:
        "ใช้ไฟกลางตอนผัดซอสเพื่อป้องกันน้ำผึ้งและซอสไหม้ติดกระทะ"
    },


    "creamy-mushroom-omelette": {
    title: "ออมเล็ตเห็ดครีมมี่",
    english: "CREAMY MUSHROOM OMELETTE",
    image: "assets/images/creamy-mushroom-omelette.jpg",
    description:
        "ออมเล็ตเนื้อนุ่มสอดไส้เห็ดผัดครีมหอม ๆ ทำง่าย เหมาะสำหรับมื้อเช้าหรือมื้อเบา ๆ",
    time: "15 นาที",
    difficulty: "ง่าย",
    serves: "1 ที่",
    category: "main-dishes",
    isQuickEasy: true,
    ingredients: [
        "ไข่ไก่ 2 ฟอง",
        "เห็ดแชมปิญอง 80 กรัม",
        "นมสด 2 ช้อนโต๊ะ",
        "วิปปิงครีม 2 ช้อนโต๊ะ",
        "เนย 1 ช้อนโต๊ะ",
        "เกลือ",
        "พริกไทย",
        "พาร์เมซานชีสเล็กน้อย"
    ],
    steps: [
        "หั่นเห็ดเป็นชิ้นบาง ๆ",
        "ละลายเนยครึ่งหนึ่งในกระทะแล้วผัดเห็ดจนหอม",
        "เติมวิปปิงครีม ปรุงด้วยเกลือและพริกไทย แล้วพักไว้",
        "ตีไข่กับนมสดให้เข้ากัน",
        "ใส่เนยที่เหลือลงกระทะ แล้วเทไข่ลงไป",
        "เมื่อไข่เริ่มเซ็ตตัว ใส่เห็ดครีมมี่และพับออมเล็ตครึ่งหนึ่ง",
        "โรยพาร์เมซานเล็กน้อยก่อนเสิร์ฟ"
    ],
    tip:
        "ใช้ไฟอ่อนถึงกลางตอนทำออมเล็ต จะช่วยให้ไข่นุ่มและไม่แห้งเกินไป"
    },

};

//import ให้ seed-recipes.js
module.exports = recipes;