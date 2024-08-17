objt = {};

objt1 = {username: "garf", password: "fat"};
objt2 = {username: "odie", password: "dog"};
objt3 = {username: "jon", password: "smile"};


objt.people = [objt1, objt2, objt3];

console.log(objt);

objtJsonString = JSON.stringify(objt);
console.log(objtJsonString);

objtStr = JSON.parse(objtJsonString);
console.log(objtStr);


