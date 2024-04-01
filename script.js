//! 1 Programs in anonymous function & IIFE

//! 1(a) Odd numbers in an array (anonymous funtion)

const oddnumber=function (){
    let number=[1,2,3,4,5,6,7,8,9,10];
    for(i=0;i<number.length;i++){
         if(number[i]%2!==0){
       console.log(number[i]);
    } }
};
oddnumber();

//! 1(a) Odd numbers in an array (IIFE)

(function (){
    let number=[1,2,3,4,5,6,7,8,9,10];
    for(i=0;i<number.length;i++){
        if(number[i]%2!==0){
       console.log(number[i]);
    } }
}) ();

//! 1(b) Convert all the strings to title caps in a string array (anonymous funtion)

function titleCase() {
    let str=("hello world".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
}
titleCase();

//! 1(b) Convert all the strings to title caps in a string array (IIFE)

(function(){
    let str=("hello world".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
 })();

//! 1(c) Sum of all numbers in an array (anonymous function)

/* function sum() {
    let str=[50,45,78];
    let sum=0;
  for (let i = 0; i < str.length; i++) {
    sum +=str[i];
  }
 console.log(sum);
}
sum();
*/

//! 1(c) Sum of all numbers in an array (IIFE)

/* (function(){
    let str=[50,45,78];
   let sum=0;
 for (let i = 0; i < str.length; i++) {
   sum +=str[i];
 }
console.log(sum);
})();
*/

//! 1(d) Return all the prime numbers in an array (anonymous function)

const primenumber=function(){
    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(numArray);
    };
    primenumber();

    //! 1(d) Return all the prime numbers in an array (IIFE)

(function(){
    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(numArray);
    })();

//! 1(e) Return all the palindromes in an array (anonymous function)

    const palindrome=function(){
        var myArray = ['mom', 'mustang', 'honda', 'deified', 'racecar'];   
       var b = myArray.filter(function(c,d,f){
       var Cur = c.split('').reverse().join('');
       if(c == Cur){
       console.log( myArray[d] );
       }
       });
       }; palindrome();
       

//! 1(e)Return all the palindromes in an array (IFE)

    (function(){
        var myArray = ['mom', 'mustang', 'honda', 'deified', 'racecar'];   
       var b = myArray.filter(function(c,d,f){
       var Cur = c.split('').reverse().join('');
       if(c == Cur){
       console.log( myArray[d] );
       }
       });
       
       })();

//! 1(f) Return median of two sorted arrays of the same size (anonymous function)

const median= function(){
    function getMedian(ar1, ar2, n)
       {
         let j = 0;
         let i = n - 1;
         while (ar1[i] > ar2[j] && j < n && i > -1)
         {
           let temp = ar1[i];
           ar1[i] = ar2[j];
           ar2[j] = temp;
           i--; j++;
         }
         ar1.sort(function(a, b){return a - b});
         ar2.sort(function(a, b){return a - b});
         return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
       }
        
       let ar1 = [ 1, 12, 15, 2, 38 ];
       let ar2 = [ 2, 13, 17, 30, 45 ];
     
       let n1 = 5;
       let n2 = 5;
       if (n1 == n2)
         console.log(getMedian(ar1, ar2, n1));
       
   };median();

//! 1(f) Return median of two sorted arrays of the same size (IIFE)

(function(){
    function getMedian(ar1, ar2, n)
       {
         let j = 0;
         let i = n - 1;
         while (ar1[i] > ar2[j] && j < n && i > -1)
         {
           let temp = ar1[i];
           ar1[i] = ar2[j];
           ar2[j] = temp;
           i--; j++;
         }
         ar1.sort(function(a, b){return a - b});
         ar2.sort(function(a, b){return a - b});
         return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
       }
        
       let ar1 = [ 1, 12, 15, 2, 38 ];
       let ar2 = [ 2, 13, 17, 30, 45 ];
     
       let n1 = 5;
       let n2 = 5;
       if (n1 == n2)
         console.log(getMedian(ar1, ar2, n1));
       
   })();

//! 1(g) Remove duplicates from an array (anonymous function)

const remove=   function(){
    let chars = [1,2,3,1,5,5];
    let uniqueChars = [...new Set(chars)];
    
    console.log(uniqueChars);
    };
    remove();

//! 1(g) Remove duplicates from an array (IIFE)

(function(){
   
    let chars = [1,2,3,1,5,5];
    let uniqueChars = [...new Set(chars)];
    console.log(uniqueChars);
        
    })();

//! 1(h) Rotate an array by k times (anonymous function)

var rotate = function() {
    let nums=[1,2,3,6];
     let k=2;
   for (let i = 0; i < k; i++) {
       nums.unshift(nums.pop()) ;
   }
  console.log(nums);
};rotate();

//! Rotate an array by k times (IIFE)

(function(){
    let nums=[1,2,3,6];
     let k=2;
   for (let i = 0; i < k; i++) {
       nums.unshift(nums.pop()) ;
   }
 console.log(nums);
})();

//! 2 Programs in arrow function 

//! 2(a) Print odd numbers in an array

const odd=() =>{
    let number=[1,2,3,4,5,6,7,8,9,10];
        for(i=0;i<number.length;i++){
             if(number[i]%2!==0){
           console.log(number[i]);
        } 
        }
    };
        odd();

//! 2(b) Convert all the strings to title caps in a string array

const tittlecaps=()=>{
    let str=("hello world".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
 }; 
 tittlecaps();

//! 2(c) Sum of all numbers in an array

const sum=()=>{
    let str=[50,45,78];
       let sum=0;
     for (let i = 0; i < str.length; i++) {
       sum +=str[i];
     }
    console.log(sum);
    };
    sum();


//! 2(d) Return all the prime numbers in an array

const prime=()=>{
    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
       
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   };
   prime(); 

//! 2(e) Return all the palindromes in an array

const ask=() =>{
    var myArray = ['mom', 'mustang', 'honda', 'deified', 'racecar'];   
   var b = myArray.filter(function(c,d,f){
   var Cur = c.split('').reverse().join('');
   if(c == Cur){
   console.log( myArray[d] );
   }
   });
   
 };ask();



       