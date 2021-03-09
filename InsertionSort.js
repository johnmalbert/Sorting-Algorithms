//   https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
//const nums = [2,5,3,1,7,9,8,4,6]
function insertionSort(nums) {
    for(let i = 1; i < nums.length; i++){
        let temp = nums[i]; 
        var index = i-1; 
        while(temp < nums[index] && index >= 0){ 
            [nums[index], nums[index+1]] = [nums[index+1], nums[index]]
            index--;
        }
    }
    return nums;
}
  
const nums = [2,5,3,1,7,9,8,4,6]
insertionSort(nums);
console.log(nums);
  