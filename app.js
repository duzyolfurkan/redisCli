//Create redis client
const redis = require("redis");
const client = redis.createClient();

//Redis' errors displaying
client.on("error", (error) => {
    console.error(error);
});

//Set methods creating
client.set("user_name", "TEST", (error, message) => {
    if(error){
        console.log(error);
    };

    console.log("Set Message: ", message);
});

//Get methods creating
client.get("user_name", (error,message) => {
    if(error){
        console.log(error);
    };

    console.log("Get Message: ", message);
});

//Exists methods creating
client.exists("user_name", (error, message) => {
    if(error){
        console.log(error);
    };
    console.log("Exists Message: ", message);
});