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

//Delete methods creating
client.del("user_name", (error, message) => {
    if(error){
        console.log(error);
    };
    console.log("Delete Message: ", message);
});

//Exists methods creating
client.exists("user_name", (error, message) => {
    if(error){
        console.log(error);
    };
    console.log("Exists Message: ", message);
});

//Append methods creating
client.append("last_name", "TEST", (error, message) => {
    if(error){
        console.log(error);
    };
    console.log("Append Message:", message);

    //Append visualization test
    client.get("last_name", (err, msg) => {
        if(err){
            console.log(err);
        };
        console.log("Appent Get Message: ", msg);
    });
})