// var startTime = performance.now();
const arr = [1, 3, 3, 3, 4, 5, 5, 5, 8, 8];

const count = {};

//Cach 1: Fix loi chieu qua

// let max1 = arr[0];
// let max2 = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] in count)) count[arr[i]] = 1;
//     else {
//         count[arr[i]]++;
//     }

//     if(arr[i]>max1){
//         max2 = max1;
//         max1 = arr[i];
//     }
//     else if(arr[i]>max2 && arr[i]<max1){
//         max2 = arr[i];
//     }
// }
// console.log(max2, count[max2]);


//Cach 2: 
for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in count)) count[arr[i]] = 1;
    else {
        count[arr[i]]++;
    }
}



console.log(Object.keys(count)[Object.keys(count).length-2], count[Object.keys(count).length-2])

// var endTime = performance.now()
// console.log(endTime - startTime);
