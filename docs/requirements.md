# โครงสร้างระบบเดิม
-HTML
-CSS
-Bootstrap
-JavaScript
-Mock recipe data (ใน js/script.js)

# โครงสร้างระบบใหม่
-HTML / EJS
-CSS / Bootstrap
-JavaScript
-Node.js
-Express
-MySQL
-bcrypt
-Session
-Authentication	: Register,Login,Session,Logout
-Authorization
-Favorites
-Database relationship

# User flow
-คนที่ ยังไม่ล็อกอิน:
หน้าแรก
→ อาหารจานหลัก / ของหวาน / เครื่องดื่ม / ทำง่าย
→ เปิดรายละเอียดสูตรได้
→ เห็นปุ่ม ♡ บันทึกสูตร
→ ถ้ากด จะพาไป Login

-คนที่ ล็อกอินแล้ว:
หน้าเว็บเหมือนเดิม
→ กด ♡ บันทึกสูตร
→ สูตรถูกเก็บเป็น Favorite ของบัญชีนั้น
→ ไปหน้า “สูตรที่บันทึกไว้”
→ ดู / เอาออกจาก Favorite ได้

-Guest ดูสูตรได้เหมือนเดิม → Member ได้สิทธิ์เพิ่ม Favorite
-Navbar เปลี่ยน
-ใน MySQL แค่เก็บว่า user คนไหน favorite recipe id อะไร
-หน้า Favorites ใช้ EJS เพราะข้อมูลขึ้นกับ user ที่ login อยู่
-แยก recipe data ออกเป็นไฟล์กลาง → data/recipes.js

## Authentication:
POST /register
↓
validate
↓
bcrypt.hash(password)
↓
INSERT accounts
↓
redirect /login

## Login:
POST /auth
↓
หา username ใน MySQL
↓
bcrypt.compare()
↓
ถูก
↓
สร้าง session
↓
req.session.loggedin = true
req.session.userId = ...
req.session.username = ...
↓
redirect /

## Logout:
POST /signout
↓
destroy session
↓
กลับหน้า Home


