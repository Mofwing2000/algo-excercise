// var startTime = performance.now();
const arr = [1, 3, 3, 3, 4, 5, 5, 5, 8, 8];

const count = {};

//1

// let max1 = Number.MIN_VALUE;
// let max2 = Number.MIN_VALUE;

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


//2
for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in count)) count[arr[i]] = 1;
    else {
        count[arr[i]]++;
    }
}



console.log(Object.keys(count)[Object.keys(count).length-2], count[Object.keys(count).length-2])

// var endTime = performance.now()
// console.log(endTime - startTime);
