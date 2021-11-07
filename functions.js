const { default: axios } = require("axios");

const functions = {
    add: (num1, num2) => num1+num2,
    isNull: () => null,
    createUser: () => {
        return {
            firstName: 'Brad',
            lastName: 'Media'
        }
    },
    fetchUser: () => {
        return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    }
}

module.exports = functions;