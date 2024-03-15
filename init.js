const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [
    {
        from: "aditi",
        to: "anuj",
        msg: "how are you",
        created_at: new Date()
    },
    {
        from: "aditi",
        to: "aai",
        msg: "hii",
        created_at: new Date()
    },
    {
        from: "anuj",
        to: "baba",
        msg: "How much money",
        created_at: new Date()
    },
    {
        from: "inej",
        to: "kaz",
        msg: "any job",
        created_at: new Date()
    }
]
Chat.insertMany(allChats);

