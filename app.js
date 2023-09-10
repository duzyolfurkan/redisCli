//Create redis client
const redis = require("redis");
const client = redis.createClient();

//Redis' errors displaying
client.on("error", (error) => {
    console.error(error);
});