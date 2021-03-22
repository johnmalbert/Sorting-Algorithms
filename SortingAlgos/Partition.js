/* 
    Params: nums, left, right
        - left and right are indexes, for now, left will be 0, and right will be
            the last idx.
        - later these params will be used to specify a sub section of the array to
            partition.
    Steps:
    1. Pick an number out of the arr to be your pivot value
        - usually the middle idx, left idx, or right idx
        - can also be a random index if you wanna go crazy
    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).
    3. return: new idx of the pivot value or the index where the left section of
        smaller items ends.
    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/
function partition(nums, left=0, right=nums.length-1){
    var pivot = nums[Math.floor(Math.random()*nums.length)]
    // console.log("Pivot is " + pivot)
    while(left<right){
      // console.log("left is " + nums[left])
      // console.log("right is " + nums[right])
      while(nums[left]<pivot){
        left++
      }
      while(nums[right]>pivot){
        right--
      }  
      [nums[left], nums[right]] = [nums[right], nums[left]]
    }
    // console.log(pivot);
    console.log(nums);
    // console.log("left: " + left);
    // console.log("right: " + right);
    return(left);
}
var nums = [8,10,3,7,6,1,14]
partition(nums)