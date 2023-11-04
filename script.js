// Do the below programs in anonymous function & IIFE
// Question1:Print odd numbers in an array in anonymous function
//1.Print odd numbers in an array 
// var arr =[1,2,3,4,5,6,7,8,9];
// function odd(arr){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(odd(arr));
//in anonymous function: 
var result = [];
var a = function (arr){
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
        
    }
    return result;
}
    console.log(a([1,2,3,4,5,6,7,8,9,10]));


 //IIFE
  var result = [];
(function (arr){
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
        
    }
    console.log(result);
})([1,2,3,4,5,6,7,8,9]);

//arrow functions(ES6): 

var result = [];
var odd=(arr)=>{
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
        
    }
    return result;
}
console.log(odd([15,16,17,18,19,20]));
// 2.Convert all the strings to title caps in a string array
// 
// function titleCase(arr){
//     var result = arr.toString();
//     var data = result.toLowerCase().split(" ");
//     for(var i=0;i<data.length;i++){
//         data[i]=data[i].charAt(0).toUpperCase() + data[i].slice(1);
//     }
//     return data.join(' ');

// }
// console.log(titleCase(["tHis IS jAvaScRiPt"]));   
//anonymous
var c = function(arr){ 
    var result=[];
    for(var i =0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        result.push(arr[i]);
     }
     return result;
    }
    console.log(c(["ram","dinesh","nivi"]));
// IIFE
(function(arr){ 
    var result=[];
    for(var i =0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        result.push(arr[i]);
     }
     console.log(result);
    })(["ram","nivi","dinesh"]);

// Arrow
    var result=[];
    var title =(arr)=>{
    for(var i =0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        result.push(arr[i]);
     }
     return result;
    }
    console.log(title(["ram","dinesh","nivi"]));
//IIFE
//3.Sum of all numbers in an array
//anonymous
var s = function sum(arr){
    var result =0;
    for(var i=0;i<arr.length;i++){
        result += arr[i];
    }
    return result;
}
console.log(s([10,20,30,40,50]));
//IIFE
var result = 0;
(function (arr){
    for(var i=0;i<arr.length;i++){
        result += +arr[i];
    }
    console.log(result);
})([10,20,30,40,50]);

//Arrow
var result =0;
var sum =(arr)=>{
    for(var i=0;i<arr.length;i++){
        result += +arr[i];
    }
    return result;

}
console.log(sum([10,20,30,40,50]));
// 4.Return all the prime numbers in an array
//Anonymous
var g = function prime(arr){
    var result =[];
    for(var i=0;i<arr.length;i++){
        var check = true;
        for(var j=2;j<arr.length;j++){
            if(+arr[i]%j===0){
                var check = false;
            }
        }
        if(check){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(g([8,19,16,5,42,23,9,7,32]));
//IIFE

(function (arr){
    var result =[];
    for(var i=0;i<arr.length;i++){
        var check = true;
        for(var j=2;j<arr.length;j++){
            if(+arr[i]%j===0){
                check = false;
             }
        }
        if(check){
            result.push(arr[i]);
        }
    }
    console.log(result);
})([8,19,16,5,42,23,9,7,32]);
// arrow
var result =[];
var h = (arr)=>{
    var result =[];
    for(var i=0;i<arr.length;i++){
        var check = true;
        for(var j=2;j<arr.length;j++){
            if(+arr[i]%j===0){
            check = false;
        }
    }
    if(check){
        result.push(arr[i]);
    }
}
  return result;
}
console.log(h([8,19,16,5,42,23,9,7,32]));
//5 .Return all the palindromes in an array
 //Anonymous
var k = function pal(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        var temp = arr[i].split("").reverse().join("");
        if(arr[i]==temp){
            result.push(arr[i]);

        }
    }
    return result;
}
 
console.log(k(["dad","mom","hello"]));
 
//IIFE

var result = [];
(function (arr){
    for(var i=0;i<arr.length;i++){
        var temp = arr[i].split("").reverse().join("");
        if(arr[i]==temp){
            result.push(arr[i]);

        }
    }
    console.log(result);
})(["dad","hello","mom"]);

//arrow
var result = [];
var pal=(arr)=>{
    for(var i=0;i<arr.length;i++){
        var temp = arr[i].split("").reverse().join("");
        if(arr[i]==temp){
            result.push(arr[i]);

        }
    }
    return result;
}
    console.log(pal(["mom","dad","hello"]));
// 6.Return median of two sorted arrays of the same size
//Anonymous
const arr1 = [1,2,3,4];
const arr2 = [2,4,6];
function toFindMedian(arr1,arr2){
    let arr =[...arr1,...arr2];
     arr.sort((a,b)=>a-b);
    let n = arr.length;
    if(n%2==0){
        return((arr[n/2]+arr[n/2-1])/2);
    }
    else{
        return arr[Math.floor(n/2)];
        }
    }
    console.log(toFindMedian(arr1,arr2));
//IIFE
(function (arr1,arr2){
    var temp = arr1.concat(arr2);
    temp1 = temp.sort((a,b)=>a-b);
    var len = temp1.length;
    if(len%2 === 0){
        console.log((temp1[len/2]+temp1[(len/2)-1])/2);
    }
    else{
        console.log(temp[Math.floor(len/2)]);
    }
})([2,4,5,6,7,8],[2,46,78,96,44]);
//7.Remove duplicates from an array
//Anonymous
var i = function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(i(["apple","mango","orange","lemon","mango","orange"]));
//IIFE
(function (arr){
    console.log([...new Set(arr)]);
})(["apple","mango","orange","lemon","mango","orange"]);

// 8.Rotate an array by k times

//Anonymous
var s = function(arr,k){
    for(var i=0;i<k.length;i++){
        arr.push(arr.shift());
    }
    return arr;
}
console.log(s(["ram","dinesh","jeno","rupan"],4));

//IIFE
(function (arr,k){
    for(var i=0;i<k.length;i++){
        arr.push(arr.shift());

    }
    console.log(arr);
})([5,4,3,2,1],3);

//arrow
var result=[]; 
var array=(arr,k)=>{
    for(var i=0;i<k.length;i++){
        arr.push(arr.shift());
    }
    return arr;
}
console.log(array(["ram","dinesh","jeno","rupan"],4));