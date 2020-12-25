const name = "Jaeyoung Heo",age = 28,gender = "male"


const sayHi = (name:string, age:Number, gender:String):String => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
}

console.log(sayHi("Jaeyong", 1234, "Male"));
export {};