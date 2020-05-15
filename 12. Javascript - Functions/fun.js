alert("connected");


function isEven(num){

	if(num%2 == 0){

		// console.log("The number is even i.e = "+num);
		return true;
	}else{

		// console.log("The number is Odd i.e = "+num);
		return false;
	};
};


function factorial(num){
	var fact=1;

	for(var i=num; i>=2 ; i--)
	{
		 fact= fact*i;
			 
	}
	 return fact;
	// console.log("factorial of "+num+" "+ fact);

	if (num == 0) {

		return 1;
	};
};


function kebabtosnake(str){

	var newStr=str.replace(/-/g,"_");
	return newStr;

}
   // function Factorial(n) { 
   //          var ans=1; 
              
   //          for (var i = 2; i <= n; i++) 
   //              ans = ans * i; 
   //          return ans; 
   //      } 


// var num=prompt("Enter number");
// isEven(num);
// isEven(4);
// isEven(21);
// isEven(68);
// isEven(333);

// factorial(5);
// factorial(0);
// factorial(1);
// factorial(10);
