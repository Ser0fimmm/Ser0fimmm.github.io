class Car {
    brand = ``;
    model = ``;
    MaxFuel = 0;
    fuel = 0;
    color = ``;
    
    constructor(марка, модель, ОбъемТоплива,Сейчас_Топлива, цвет) {
        this.brand = марка;
        this.model = модель;
        this.maxfuel = ОбъемТоплива;
        this.fuel = Сейчас_Топлива;
        this.color = цвет;
    }

    show() {
      console.log(`Машина бренда ${this.brand}, модели ${this.model}, цвета ${this.color}, объемом бака ${this.maxfuel}л. и ${this.fuel}л. в нем`)
    }

    fuelUp(x) {
        let y = this.maxfuel - this.fuel;
        if (y >= x){
            this.fuel += x;
            console.log(`Заправлено! Топлива сейчас ${this.fuel}л.`)
        }
        else {
            console.log(`объем заполняемого топлива больше полного бака. Заправлено до полного бака (${this.maxfuel}л.).`)
            this.fuel += y;
        }
    }

    ChangeColor(NewColor) {
        this.color = NewColor;
    }
}

let mycar = new Car("Kia", "Soul", 30, 12, "Черный")

mycar.show()
mycar.fuelUp(13)
mycar.fuelUp(13)

class pharmacy {
    name = ``;
    healings_list = [];
    healings_pricelist = [];

    constructor(Назввание) {
        this.name = Назввание;
    }
   /**
    * Метод добавления лекарства в ассортимент аптеки
    * @param {*} x название лекарства
    * @param {*} q цена лекарства
    */
    add_healing(x, q){
    this.healings_list.push(x);
    this.healings_pricelist.push(q);
    }
    /*  
    * Показать информаию об аптеке
    */
    show() {
        console.log(`Аптека ${this.name}`)
        for (let i = 0; i < this.healings_list.length; i++) {
            console.log(`${this.healings_list[i]} по ${this.healings_pricelist[i]}руб.`)
        }
    }
    
    

}
let Stolichki = new pharmacy("Столички")
Stolichki.add_healing("Терафлю", 230)
Stolichki.add_healing("Эргоферон", 350)
Stolichki.show()