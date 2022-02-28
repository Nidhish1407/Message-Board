const express = require('express');
const app = express()
const router = express.Router();
const data = require('../mock.json')


const array = data.map(details=>{
    return { ...details, date: new Date()};
})

const title = "Message Board";
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        date: new Date()
    },
    ...array
];

router.get('/',(req,res)=>{
    res.render('index',{title,messages});
});


module.exports = {
    router,
    addMessage: (arg) => {messages.unshift(arg)}
}; 