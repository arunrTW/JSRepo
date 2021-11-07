const hasFiveChars = (str) => str.length >= 5;
const doesItContactOnlyDigits = (str) => new RegExp(/[0-9]\d{9}/).test(str);

const nameCheck = (str) => {
    if(!hasFiveChars(str)) {
        throw new Error("5 characters is must");
    }
}

const phoneNumberCheck = (str) => {
    if(!str || str.length === 0) {
        throw new Error("Phone number can not be null");
    }
    if(!doesItContactOnlyDigits(str)) {
        throw new Error("Phone number should contain only digits of length 10");
    }
}

module.exports =  {
    nameCheck,
    phoneNumberCheck
};