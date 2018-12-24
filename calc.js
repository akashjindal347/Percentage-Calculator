var valueX=document.getElementById('valueX');
var valueY=document.getElementById('valueY');
var result1=document.getElementById('result1');
var result2=document.getElementById('result2');
var result3=document.getElementById('result3');
var result4=document.getElementById('result4');
var result5=document.getElementById('result5');
var result6=document.getElementById('result6');
var form1=document.getElementById('form1');

var calculatePercentage= function(event){
	var x = parseFloat(valueX.value);
	var y = parseFloat(valueY.value);
	var percentage = (x/y)*100;
	var invPercentage=(y/x)*100;
	var percentage3 = (y/100)*x;
	var percentage4 = (x*100)/y;
	var percentage5 = (y*100)/x;
	var percentage6 = (y*100)/x
	result1.innerText = `Answer is ${percentage}%`;
	result2.innerText =`Answer is ${invPercentage}%`;
	result3.innerText = `Answer is ${percentage3}`;
	result4.innerText = `Answer is ${percentage4}`;
	result5.innerText = `Answer is ${percentage5}%`;
	result6.innerText = `Answer is ${percentage6}`;
	event.preventDefault();
}

form1.addEventListener('submit',calculatePercentage);
