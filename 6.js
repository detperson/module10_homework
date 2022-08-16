let arr = [1, 1, 3, 3];

let a = true;

let arr1 = arr[0];


for(let item of arr){
  
  if (item != arr1){
    a = false;
  }  
 console.log(a)
}