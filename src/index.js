const express = require('express');const express 
= require('express'); const app = express(); 
const port = 3000; const app = express();// 
Middleware برای پردازش JSON 
app.use(express.json()); const port = 3000;// 
مسیر برای دریافت همه
// وظایف
app.get('/', (req, res) => {app.get('/tasks', 
    (req, res) => { res.send('Task list will be 
    displayed here.'); res.send('سرور به 
    درستی کار می‌کند!');});
});// مسیر برای ایجاد
// وظیفه جدید
app.listen(port, () => {app.post('/tasks', (req, 
    res) => { const task = req.body; 
    res.send(`New task added: 
    ${JSON.stringify(task)}`); 
    console.log(`سرور در حال اجرا 
    روی http://localhost:${port}`);});
});// اجرای سرور
app.listen(port, () => { console.log(`سرور 
    در حال اجرا روی 
    http://localhost:${port}`);
});
