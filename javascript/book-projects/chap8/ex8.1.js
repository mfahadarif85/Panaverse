let str1 = "How's%20it%20going%3F";
let str2 = "How's it going?";
console.log(decodeURIComponent(str1));
console.log(encodeURIComponent(str2));

let webURI = "http://www.basescripts.com?=Hello World";
console.log(encodeURIComponent(webURI));
