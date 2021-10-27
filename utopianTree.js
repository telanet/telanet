function utopianTree(arr) {
    // Write your code here
    let myTreeHeight = 1, arrOfGrowth = [];
    arrOfGrowth.push(myTreeHeight);
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] % 2 === 0) myTreeHeight *= 2;
        else myTreeHeight += 1;
        arrOfGrowth.push(myTreeHeight);
    }
    arrOfGrowth[arrOfGrowth.length] = 0;
    for(let j = 0; j < arrOfGrowth.length-1; j++) {
        arrOfGrowth[arrOfGrowth.length-1] += arrOfGrowth[j];
    } 
    return arrOfGrowth;

}

console.log(utopianTree([0, 1, 4]));
