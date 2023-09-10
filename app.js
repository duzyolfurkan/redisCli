//Create redis client
const redis = require("redis");
const client = redis.createClient();

//Redis' errors displaying
client.on("error", (error) => {
    console.error(error);
});

//Set methods creating
client.set("user_name", "gokhan", (error, message) => {
    if(error){
        console.log(error);
    };

    console.log("Message", message);
});