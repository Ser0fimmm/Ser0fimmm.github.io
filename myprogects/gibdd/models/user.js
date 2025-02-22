class User {
    constructor(id, FirstName, LastName, phone, email, city){
        this.id = id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.phone = phone;
        this.email = email;
        this.city = city;
    }

    toCSV() {
        return `${this.id},${this.FirstName},${this.LastName},${this.phone},${this.email},${this.city}`;
    };
    
    toJSON() {
        return {
            id: this.id,
            FirstName: this.FirstName,
            LastName: this.LastName,
            phone: this.phone,
            email: this.email,
            city: this.city,
        };
    }
}
module.exports = User