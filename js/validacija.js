function validacija()
{		
		//provera radio buttona
		var pom = proveriradio(document.forms[0].gender)
		if (pom == null)
		{ 
			alert('Select your gender!');
			return false;
		}
		
		//provera text polja
		if (document.forms[0].username.value=='')
		{
			alert("Enter your username!");
			document.forms[0].username.focus();
			return false;
		}
		
		if (document.forms[0].pass.value=='')
		{
			alert("Enter your password!");
			document.forms[0].pass.focus();
			return false;
		}
		
		if (document.forms[0].mail.value=='')
		{
			alert("Enter your e-mail!");
			document.forms[0].mail.focus();
			return false;
		}
		
		if(document.forms[0].mail.value.indexOf('@') == -1)
		{
			alert("E-mail you've entered isn't in the right form!");
			document.forms[0].mail.focus();
			return false;
		}

	

}
	
function proveriradio(buttons) 
{
	var br = -1;
    for (var i=buttons.length-1; i > -1; i--) 
	{
    	if (buttons[i].checked) 
		{
			br = i; 
			i = -1;
		}
    }
    if (br > -1) return buttons[br].value;
    else return null;
}

	

