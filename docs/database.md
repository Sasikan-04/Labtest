# Database Design — ระบบ Favorite สูตรอาหาร

## 1. ตารางที่ต้องเพิ่ม: `favorites`

**วัตถุประสงค์:** จัดเก็บข้อมูลสูตรอาหารที่ผู้ใช้แต่ละคนกด Favorite เพื่อให้สามารถกลับมาดูสูตรอาหารที่บันทึกไว้ได้หลังจากเข้าสู่ระบบ

### โครงสร้างตาราง

Column              | Data Type             | Description 
| `id`              | INT                   | Primary Key ของรายการ Favorite |
| `user_id`         | INT                   | รหัสผู้ใช้ที่กด Favorite |
| `recipe_id`       | VARCHAR(100)          | รหัสสูตรอาหารที่ถูก Favorite |
| `created_at`      | TIMESTAMP             | วันและเวลาที่บันทึกรายการ |

### SQL สำหรับสร้างตาราง

```sql
CREATE TABLE favorites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    recipe_id VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE (user_id, recipe_id),

    FOREIGN KEY (user_id)
        REFERENCES accounts(id)
        ON DELETE CASCADE
);
```

## 2. ความสัมพันธ์ระหว่างตาราง

ตาราง `accounts` และ `favorites` มีความสัมพันธ์แบบ **One-to-Many (1:N)**
- ผู้ใช้ 1 คน สามารถ Favorite สูตรอาหารได้หลายสูตร
- Favorite 1 รายการเป็นของผู้ใช้เพียง 1 คน
- ใช้ `user_id` เป็น Foreign Key อ้างอิง `accounts.id`

## 3. ข้อกำหนดของฐานข้อมูล (Database Constraints)

### UNIQUE (user_id, recipe_id)

กำหนดให้คู่ข้อมูลระหว่างผู้ใช้และสูตรอาหารต้องไม่ซ้ำกัน

**ตัวอย่าง:** ผู้ใช้ ID = 1 กด Favorite สูตรอาหาร ID = `recipe_101` แล้ว จะไม่สามารถเพิ่มรายการเดิมซ้ำได้อีก

แต่ผู้ใช้อีกคนยังสามารถ Favorite สูตร `recipe_101` ได้ตามปกติ

### FOREIGN KEY (user_id)

ใช้เชื่อมโยงรายการ Favorite กับบัญชีผู้ใช้ที่มีอยู่จริงในตาราง `accounts` เพื่อรักษาความถูกต้องของข้อมูล

### ON DELETE CASCADE

เมื่อมีการลบบัญชีผู้ใช้ออกจากตาราง `accounts` ระบบฐานข้อมูลจะลบรายการ Favorite ทั้งหมดของผู้ใช้นั้นโดยอัตโนมัติ เพื่อป้องกันข้อมูลที่ไม่มีเจ้าของหลงเหลืออยู่

## 4. การทำงานร่วมกับระบบ Authentication

- ผู้ใช้ที่ยังไม่ได้ Login สามารถดูสูตรอาหารได้ตามปกติ แต่ไม่สามารถกด Favorite
- ผู้ใช้ที่ Login แล้วสามารถเพิ่ม ลบ และดูรายการ Favorite ของตนเองได้
- Backend ต้องตรวจสอบตัวตนจาก Session หรือ Authentication Token ก่อนดำเนินการกับข้อมูล Favorite
- Backend ต้องใช้ ID ของผู้ใช้ที่ผ่านการยืนยันตัวตน ไม่เชื่อถือ `user_id` ที่ส่งมาจาก Frontend โดยตรง

## 5. การทำงานแบบ CRUD

| Operation | การทำงาน |
| Create    | เพิ่มสูตรอาหารลงใน Favorite |
| Read      | ดึงรายการสูตรอาหารที่ผู้ใช้ Favorite |
| Delete    | นำสูตรอาหารออกจาก Favorite |
| Update    | ไม่จำเป็นในฟีเจอร์นี้ เนื่องจากเป็นการเพิ่มหรือลบความสัมพันธ์ระหว่างผู้ใช้กับสูตรอาหาร |

**หมายเหตุ:** ฟีเจอร์ Favorite จึงไม่จำเป็นต้องมี CRUD ครบทั้ง 4 ประเภท เพราะไม่มีข้อมูลในรายการ Favorite ที่ต้องแก้ไข

## 6. ข้อควรตรวจสอบก่อนพัฒนา

- `accounts.id` ต้องมีชนิดข้อมูลที่เข้ากันได้กับ `favorites.user_id`
- `recipe_id` ต้องใช้รหัสสูตรอาหารที่มีความแน่นอนและไม่เปลี่ยนเมื่อโหลดข้อมูลใหม่
- หากสูตรอาหารมาจาก API ภายนอก ไม่จำเป็นต้องสร้างตาราง `recipes` เพิ่มเพื่อใช้ Favorite เพียงอย่างเดียว ตราบใดที่สามารถใช้ `recipe_id` ดึงรายละเอียดสูตรเดิมได้
- ต้องตรวจสอบว่าระบบ Authentication และฐานข้อมูลใช้ร่วมกันได้ก่อนเริ่มพัฒนาฟีเจอร์