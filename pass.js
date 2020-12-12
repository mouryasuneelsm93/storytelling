function passvalue()
{
	var a;
	a=document.getElementById("tiger").value;
	localStorage.setItem("tig",a);
	b=document.getElementById("animal").value;
	localStorage.setItem("ani",b);
	c=document.getElementById("adjective").value;
	localStorage.setItem("adj",c);
	d=document.getElementById("verb").value;
	localStorage.setItem("ver",d);
	e=document.getElementById("number").value;
	localStorage.setItem("num",e);
	
	g=document.getElementById("motive").value;
	localStorage.setItem("moti",g);
	ms=document.getElementById("msg").value;
	localStorage.setItem("mseg",ms);
	
	i=document.getElementById("anima").value;
	localStorage.setItem("anim",i);
	localStorage.setItem('radio', document.querySelector("input[name='radio']:checked").value);
	localStorage.setItem('speed', document.querySelector("select[name='speed']").value);
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	console.log(e);
	
	console.log(g);
	console.log(h);
	console.log(i);
	console.log(radio12);
}
function ret()
{
		
		var obj1=document.querySelectorAll(".result1");
		for (var i = 0; i < obj1.length; i++) {
		 	obj1[i].innerHTML=localStorage.getItem("tig");
		 } 
		 var obj2=document.querySelectorAll(".result3");
		for (var i = 0; i < obj2.length; i++) {
		 	obj2[i].innerHTML=localStorage.getItem("adj");
		 } 
		 var obj3=document.querySelectorAll(".result10");
		for (var i = 0; i < obj3.length; i++) {
		 	obj3[i].innerHTML=localStorage.getItem("anim");
		 } 
		  var obj4=document.querySelectorAll(".result2");
		for (var i = 0; i < obj4.length; i++) {
		 	obj4[i].innerHTML=localStorage.getItem("ani");
		 } 
		  var obj5=document.querySelectorAll(".result7");
		for (var i = 0; i < obj5.length; i++) {
		 	obj5[i].innerHTML=localStorage.getItem("moti");
		 } 
		  var obj6=document.querySelectorAll(".result6");
		for (var i = 0; i < obj6.length; i++) {
		 	obj6[i].innerHTML=localStorage.getItem("spee");
		 } 
document.getElementById("radio1").innerHTML = localStorage.getItem("radio");
document.getElementById("speed1").innerHTML = localStorage.getItem("speed");

document.getElementById("message").innerHTML = localStorage.getItem("mseg");
	
		//document.getElementById("result1").innerHTML=localStorage.getItem("tig");
		//document.getElementById("result2").innerHTML=localStorage.getItem("ani");
		//document.getElementById("result3").innerHTML=localStorage.getItem("adj");
		// document.getElementById("result4").innerHTML=localStorage.getItem("ver");
		// document.getElementById("result5").innerHTML=localStorage.getItem("num");
		// document.getElementById("result6").innerHTML=localStorage.getItem("spee");
		// document.getElementById("result7").innerHTML=localStorage.getItem("moti");
		// document.getElementById("result8").innerHTML=localStorage.getItem("mes");
		//document.getElementById("result10").innerHTML=localStorage.getItem("anim");
}
		