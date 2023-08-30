let operator ="";
let firstnumber="";
let secondnumber="";
function Appendnumber(num){
	if(operator===""){
		firstnumber+=num;
		document.getElementById("result").value=firstnumber;

	}
	else{
		secondnumber+=num;
		document.getElementById("result").value=secondnumber;
	}
}
function Setoperator(op){
	operator=op;
}
function calculate(){
	let result;
	switch(operator){
		case '+':
		result=parseInt(firstnumber)+parseInt(secondnumber);
		break;
		case '-':
		result=parseInt(firstnumber)-parseInt(secondnumber);
		break;
		case '*':
		result=parseInt(firstnumber)*parseInt(secondnumber);
		break;
		case '/':
		result=parseInt(firstnumber)/parseInt(secondnumber);
		break;
	}
	document.getElementById("result").value=result;

}
function clearresult(){
	operator="";
	firstnumber="";
	secondnumber="";
	document.getElementById("result").value="";
}