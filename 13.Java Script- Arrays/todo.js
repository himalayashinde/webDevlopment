alert("connected");


var todos=["gym"];

var input=prompt("What you are gona do today");

while(input!= "quit")
{

		if (input == "list") {

		  console.log(todos);

		} else if (input == "new") {
			
			var input1=prompt("Enter new about what u gona do today");
			todos.push(input1);
			console.log("Value added to your todos list check it");
		};

	input=prompt("What you are gona do today"); 	

}

console.log("Ok you quit the app");	