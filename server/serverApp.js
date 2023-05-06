require('dotenv').config()
const express          = require('express');
const fileUpload       = require('express-fileupload');
const cors             = require('cors');
const path             = require('path');
const sequelize        = require('./dbConnect');
const router           = require('./routes/index');
const PORT             = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/api', router);

// Запуск сервера
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync(); // Сверяет состояние БД со схемой данных
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start()