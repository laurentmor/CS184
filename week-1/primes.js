#!/usr/bin/env node
var fs = require('fs');

 primes=function(){ 

var start=2;
 var arr=[];
 var k=100;
 var i=0;
 var current=start;

 while(i<k){
  if(isPrime(current)){
    arr.push(current);
     current++;
	 i++;
	 
  }
  else{
    current++;
  }
}

var res=arr.join(",");
fs.writeFileSync("primes.txt",res);

};

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
primes();
