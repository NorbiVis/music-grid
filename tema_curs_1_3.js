let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i <= arr.length; i++) {
    let num = arr[i]
    let calc = x => x * 15 + x
    console.log(calc(num));
    // console.log(`${arr[i]}` * 15 + arr[i]);
}

