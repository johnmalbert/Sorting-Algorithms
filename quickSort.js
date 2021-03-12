function partition(nums, left = 0, right = nums.length - 1) {
//   console.log("Left is " + left);
//   console.log("right is " + right);
    var pivot = nums[Math.floor(Math.random()*(right - left)) + left];
    let pIdx = left;
    for (let i = left; i < right; i++) {
    if (nums[i] < pivot) {
        [nums[i], nums[pIdx]] = [nums[pIdx], nums[i]];
        pIdx++;
    }
    }
    [nums[pIdx], nums[right]] = [nums[right], nums[pIdx]];
//   console.log("Nums is now " + nums);
    return pIdx;
}
// var nums = [6,2,1,7,9,8,3,5,4] => 3, [2,1,3....] [...9,8,6,5,7] ... [2]

function quickSort(nums, left = 0, right = nums.length - 1) {
  //establish a base case
    if (left < right) {
    // nums, 1,1
    //call the partition function
    let pIdx = partition(nums, left, right);
    quickSort(nums, 0, pIdx - 1);
    quickSort(nums, pIdx + 1, right);
    }
    return nums;
}

var nums = [6, 2, 1, 7, 9, 8, 3, 5, 4];
console.log(nums);
quickSort(nums);
console.log(nums);
