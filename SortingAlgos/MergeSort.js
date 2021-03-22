/* 
    MERGE SORT
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
    EXAMPLE: merge([1,4,5], [2,3,6]) will return [1,2,3,4,5,6]
*/
//var nums = [2,5,6,3,1,4]


function merge(nums1, nums2){
    let arr = [];
      while(nums1.length || nums2.length) {
        if (nums1[0] < nums2[0]) {
          arr.push(nums1.shift())
        } else if(nums2[0] < nums1[0]){ // THIS WAS OUR MISTAKE! 
          arr.push(nums2.shift())
        }
        //if one of the nums is empty, run this code:
        if(nums1.length && !nums2.length){
          arr.push(nums1.shift());
        }
        if(nums2.length && !nums1.length){
          arr.push(nums2.shift());
        }
        console.log("New array is now " + arr);
      }
      
    return arr;
  }
  
  /*
          2. create mergeSort function to sort the provided array
          - split the array in half and recursively merge the halves using the
              previously created merge function.
          - splitting of arrays stops when array can no longer be split.
          - an array of 1 item is by definition sorted, so two arrays of 1 item
              can therefore be merged into a sorted array.
  */
  //var nums = [2,5,6,3,1,4] => [2,5,6],[3,1,4] => [2], [5,6]
  //var array = [6,4,9,2,7,1,5,8,3];
  function mergeSort(nums,arr=[]){
    // const half = arr.length /2
    //BASE CASE
    if(nums.length <= 1){
      return nums;
    }
    let middle = Math.floor(nums.length/2);
    //split the array at the middle point
    let arr1 = nums.slice(0, middle);
    // console.log(arr1);
    let arr2 = nums.slice(middle, nums.length);
    // console.log(arr2);
    //RECURSIVE CALL
    return merge(mergeSort(arr1),mergeSort(arr2));
  }
  
  var nums = [2,5,6,3,1,7,0]
  mergeSort(nums);
  

function MS2(nums){
    if(nums.length <= 1){
        return nums;
    }
    let nums2 =[]
    let nums3 =[]
    for (let i = 0; i < nums.length; i++) {
        if(i < nums.length/2){
            nums2.push(nums[i]);
        }else{
            nums3.push(nums[i]);
        }
    }
    nums2 = MS2(nums2);
    nums3 = MS2(nums3);
    return merge(nums2, nums3);
}

console.log(MS2([3,2,5,8,1,6,7]));
