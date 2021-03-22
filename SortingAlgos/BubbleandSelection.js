/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    
    Time Complexity
        - Best:     O(n) linear when array is already sorted
        - Average:  O(n^2) quadratic
        - Worst:    O(n^2) quadratic when the array is reverse sorted
    Space: O(1) constant
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/
// var nums = [2,4,7,3,9,10,5,1]
function bubbleSort(nums){
    var sorted = false;
    var counter = 0;
    while(!sorted){
      sorted = true;
      for(var i = 0; i < nums.length; i++){
        if(nums[i]>nums[i+1]){
          temp = nums[i]
          nums[i]=nums[i+1]
          nums[i+1]=temp
          sorted = false;        
        }
        counter++;
      }
    }
    console.log("Function ran this many times: " + counter);
    return nums;
  }
  
  function bubbleRec(nums){
      for(let i = 0; i < nums.length; i++){
          if(nums[i] > nums[i+1]){
            let temp = nums[i]
            nums[i]=nums[i+1]
            nums[i+1]=temp
          }
      }
      for (let i = 0; i < nums.length; i++) {
          if(nums[i] > nums[i+1]){
              return bubbleRec(nums);
          }
      }
      return nums;
  }
  
  /* 
      https://visualgo.net/en/sorting
          
      Selection sort works by iterating through the list, finding the minimum
      value, and moving it to the beginning of the list. Then, ignoring the first
      position, which is now sorted, iterate through the list again to find the
      next minimum value and move it to index 1. This continues until all values
      are sorted.
      Unstable sort.
      
      Time Complexity
          - Best: O(n^2) quadratic.
          - Average: O(n^2) quadratic.
          - Worst: O(n^2) quadratic.
      Space: O(1) constant.
      Selection sort is one of the slower sorts.
      - ideal for: pagination, where page 1 displays 10 records for example,
          you run selection sort for 10 iterations only to display the first 10
          sorted items.
  */
  //nums =  [2,4,7,3,9,10,5,1]
  function selectionSort(nums){
    var counter = 0;
    for(var i = 0; i < nums.length; i++){
      var min = nums[i];
      var minIndex = i;
      for(var j = 0+i; j < nums.length; j++){
        if(min > nums[j]){
          min = nums[j];
          minIndex = j;
          console.log("min is now " + min);
        }
        counter++;
      }
      nums[minIndex] = nums[i];
      nums[i] = min;
    }
    console.log("Function ran this many times: " + counter);
    return nums;
  }

  function selectionSort2(nums){
      for (let index = 0; index < nums.length; index++) {
          var min = index;
          for (let j = index+1; j < nums.length; j++) {
              if(nums[min] > nums[j]){
                  min = j;
              }
          }
          [nums[index], nums[min]] = [nums[min], nums[index]];
      }
      return nums;
  }
  
  var nums = [2,4,7,3,9,10]
  console.log(bubbleSort(nums));
  console.log(bubbleRec(nums));
  
  console.log(selectionSort(nums));
  console.log(selectionSort2(nums));