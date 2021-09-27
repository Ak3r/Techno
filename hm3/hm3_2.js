// 2) Реализуйте класс Validator, который будет иметь 
// методы isEmail, isUrkainianPhoneNumber и isDate, 
// которые будут возвращать true, если переданная 
// строка является имейлом(включает в себя @ и домен), 
// датой(в формате YYYY-MM-DD), номером телефона 
// (включает в себя код Украины +38 и номер из 10 цифр)

class Validator {
    constructor(mail, phone , date) {
        this.mail = mail;
        this.phone = phone;
        this.date = date;
    }

    mailReg = /[a-z]\@gmail.com$/;
    phoneReg = /^\+38\d{10}$/;
    dateReg = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    isEmail() {
        try {
            if (this.mail === '') {
                throw 'You need to enter an e-mail address.';
            } else if (this.mail.indexOf('@') === -1) {
                throw 'Email should have "@" symbol.';
            } else if (!(/gmail.com$/).test(this.mail)) {
                throw 'Email should ending like: "...gmail.com".';
            }
            else {
                return this.mailReg.test(this.mail);
            }
        } catch(err) {
            console.log(err);
        }
    }

    isUrkainianPhoneNumber() {
        try {
            if (this.phone === '') {
                throw 'You need to enter an phone number.';
            } else if (!(/^\+38/).test(this.phone)) {
                throw 'Phone number should begining with "+38".';
            } else if (this.mail.length !== 13) {
                throw 'Type correct phone number.';
            } else {
                return this.phoneReg.test(this.phone);
            }
        } catch(err) {
            console.log(err);
        }
    }

    isDate() {
        try {
            if (this.date === '') {
                throw 'You need to enter a date'
            } else if (!this.dateReg.test(this.date)) {
                throw 'Type a date in YYYY-MM-DD format.'
            } else {
                return this.dateReg.test(this.date);
            }
        } catch(err) {
            console.log(err);
        }
    }
}

let test = new Validator('a@gmail.com', '+380955556677', '2020-02-20');