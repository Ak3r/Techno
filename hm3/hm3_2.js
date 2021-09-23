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
        return this.mailReg.test(this.mail);
    }

    isUrkainianPhoneNumber() {
        return this.phoneReg.test(this.phone);
    }

    isDate() {
        return this.dateReg.test(this.date);
    }
}

let test = new Validator('a@gmail.com', '+380955556677', '2020-02-20');