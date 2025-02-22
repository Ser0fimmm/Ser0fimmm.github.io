const fs = require(`fs`)
const path = require(`path`)
const User = require(`./models/user`)
const Auto = require(`./models/auto`)
const Owner = require(`./models/owner`)

const users = [
    new User(1, "Иван", "Иванов", "+79204512238", "ivanov@example.com", "Москва"),
    new User(2, "Павел", "Павлов", "+79201234567", "pavlov@example.com", "Санкт-Петербург")
]
const autos = [
    new Auto(1, "Toyota", "Corolla", "Синий", "В004КО"),
    new Auto(2, "KIA", "Sportage", "Черный", "В777ОР")
]
const owners = [
    new Owner(1, 1, "20.04.2020", "20.04.2024"),
    new Owner(2, 2, "31.03.2019", "31.03.2023")
]

function SaveToCSV(data, fileName) {
    const header = Object.keys(data[0].toJSON()).join(`,`);
    const rows = data.map(item => item.toCSV()).join(`\n`);
    const content =`${header}\n${rows}`;

    fs.writeFileSync(path.join(__dirname, `data`, fileName),content, `utf-8`);
    console.log(`Данные сохранены в ${fileName}`)
}
function SaveToJSON(data, fileName) {
    const content = JSON.stringify(data.map(item => item.toJSON()), null, 2);

    fs.writeFileSync(path.join(__dirname, `data`, fileName),content, `utf-8`);
    console.log(`Данные сохранены в ${fileName}`)
}
SaveToCSV(users, `user.csv`)
SaveToCSV(autos, `auto.csv`)
SaveToCSV(owners, `owner.csv`)

SaveToJSON(users, `user.csv`)
SaveToJSON(autos, `auto.csv`)
SaveToJSON(owners, `owner.csv`)