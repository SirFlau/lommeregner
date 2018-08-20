$(document).ready(function()
{
var firstPress=true;
var text ="";
var firstNum = "";
var secondNum = "";
var opr ="";

$(".num").click(function(){
  if(firstPress)
  {
  firstNum = firstNum + this.id;
  text = firstNum;
  }
  else
  {
	secondNum = secondNum + this.id;
	text = text +this.id;
  }
  $("#calculation").html(text);
});

$(".opr").click(function(){
	opr=this.id;
	text=firstNum + this.id;
	firstPress=false;
	$("#calculation").html(text);
});

$("#equals").click(function(){
	var result = "= ";
	switch(opr){
		case "+":
		  result = result + plus(parseInt(firstNum, 10),parseInt(secondNum, 10));
		  break;
		case "-":
		  result = result + minus(firstNum, secondNum);
		  break;
		case "*":
		  result = result + multiply(firstNum, secondNum);
		  break;
		case "/":
		  result = result + divide(firstNum, secondNum);
		  break;
	}
	$("#result").html(result);
});

$("#C").click(function(){
  firstPress=true;
  text ="";
  firstNum = "";
  secondNum = "";
  opr ="";
  $("#result").html("= ");
  $("#calculation").html("");
	
});

	function plus(a,b)
  {
	return(a+b);
  }

function minus(a,b)
  {
	return(a-b);
  }

function multiply(a,b)
  {
	return(a*b);
  }

function divide(a,b)
  {
	if (b==0)
	{alert("cannot divide by zero")
    return("error")}
	return(a/b);
  }	
});