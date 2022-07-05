const string = "[4,5,6,23,34,55,55,5,6]";

const arr = string.substring(1,string.length-1).split(',');
var max = arr[0];
for(var i=1; i<arr.length; i++){
    if(arr[i]>max)  max=+arr[i];
}
console.log(max);