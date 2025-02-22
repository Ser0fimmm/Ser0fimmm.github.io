class Owner {
    constructor(userid, autoid, RegDate, DeregDate) {
        this.userid = userid;
        this.autoid = autoid;
        this.RegDate = RegDate;
        this.DeregDate = DeregDate;
    }

    toCSV() {
        return `${this.userid},${this.autoid},${this.RegDate},${this.DeregDate}`;
    };

    toJSON() {
        return {
            userid: this.userid,
            autoid: this.autoid,
            RegDate: this.RegDate,
            DeregDate: this.DeregDate,
        };
    }
}
module.exports = Owner