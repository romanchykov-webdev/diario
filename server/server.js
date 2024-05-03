const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3500;
const {getOneUser}=require('./request/index');

// Разрешить все запросы с любых доменов
app.use(cors())
app.use(express.json());

app.listen(port,() => console.log(`Server started on port ${port}`));

// //get to db
app.get("/", async (req, res) => {
    try{
        const getUser=await getOneUser('roman@gmail.com')

        res.json(getUser)
    }catch(err){
        console.error("Ошибка при получении категорий:", err);
        res.status(500).send("Внутренняя ошибка сервера");
    }
})


