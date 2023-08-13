function calculateAverage() {
    // you can change the values of array
   let array = [5, 1, 1, 1, 5]
   let i = 0
   let sum = 0
   let len = array.length;
   let result = 0
    
    // loop for calculate sum of array values
    while (i < len) {
        sum = sum + array[i++];
    }
      result = sum / length;
    // simply shows the result in alert box
    alert("Average of ("+array+") is :  "+result);
}