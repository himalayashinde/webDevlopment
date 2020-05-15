// alert("connected");

// var ans=prompt("Are we there yet");
// alert("you are in whhile loop" );
// while(ans!="yes" && ans!="yeah" )
// {
// 	// prompt("Try again...!!")
// 	var ans=prompt("Are we there yet");
// };


// alert("exited while loop We made it ...!!!");



//Version 2
alert("connected");

var ans=prompt("Are we there yet");
alert("you are in whhile loop" );
while(ans.indexOf("yes") === -1)
{
	// prompt("Try again...!!")
	var ans=prompt("Are we there yet");
};


alert("exited while loop We made it ...!!!");