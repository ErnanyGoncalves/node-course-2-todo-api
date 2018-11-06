const {SHA256} = require("crypto-js");

/* var message = "I am user 6";

var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};


var token = {
    data,
    hash: SHA256(JSON.stringify(data)+ "johnyjohny").toString()
}


token.data.id = 666;
token.hash = SHA256(JSON.stringify(token.data)).toString();


var resultHash = SHA256(JSON.stringify(token.data)+"johnyjohny").toString();

if(resultHash === token.hash){
    console.log("Data was not changed");
}else{
    console.log("Data was changed. Dont trust!");
} */

const jwt = require("jsonwebtoken");

var data = {
    id: 24
};

var token = jwt.sign(data, "t33m0");
console.log(token);
var decoded = jwt.verify(token,"t33m0");
console.log("decoded", decoded);