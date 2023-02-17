let myString = function(str1,length){
    if ((str1.constructor == String)&&(length >= 0)){
        return str1.substr(0,length)
    }
}
console.log(myString("Kiela Amari", 4))