// var startTime = performance.now();
const arr = [1, 3, 3, 3, 4, 5, 5, 5, 8, 8];

const count = {};

for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in count)) count[arr[i]] = 1;
    else {
        count[arr[i]]++;
    }
}

console.log(Object.keys(count)[Object.keys(count).length-2], count[Object.keys(count).length-2])

// var endTime = performance.now()
// console.log(endTime - startTime);
