// print all number between 10 to 19
var a=10;
			while(a<=19)
			{	

				console.log("Your number is ="+a);
				a++;	

			};


//print all even nunmber between 10 to 40

var b=10;
while (b<=40)
{
	if(b%2==0)
	console.log("even nunmber= "+b);
	b++;
};

// print all odd numbers between 300 and 333

var c=300;
while (c<=333)
{
	if(c%2!=0)
	console.log("odd nunmber= "+c);
	c++;
};

//print all number divisible by 5 and 3 between 5 and 50

var d=5;

while(d<=50)
{
	if(d%5 === 0 && d%3 ===0)
	{
		console.log("Number is divisible by both 5 and 3= "+d);
		// d++;
	}
	d++;
}