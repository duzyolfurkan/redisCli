//Create redis client
const redis = require("redis");
const client = redis.createClient();

//Redis' errors displaying
client.on("error", (error) => {
    console.error(error);
});

//publisher area
client.publish("testkanali", "app üzerinden gönderilen", (err, num) => {
    console.log(` Mesaj ${num} kişiye gönderildi.`);
});