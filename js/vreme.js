// JavaScript Document
var today=new Date()
var h=today.getHours()
var m=today.getMinutes()
var s=today.getSeconds()
// dodati 0 ispred brojeva manjih od 10
m=checkTime(m)
s=checkTime(s)

function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i
}

function prikaziVreme()
{
	document.write("<p>"+h+":"+m+":"+s+"</p>");
}
