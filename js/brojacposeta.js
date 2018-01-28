// JavaScript Document
				var novikuki = document.cookie;
				var delovikukija = novikuki.split("=");
				var imekukija = delovikukija[0];
				var vrednostkukija = unescape(delovikukija[1]);
				var prethodnavrednost = vrednostkukija;
					
				if (imekukija != "brojac" || vrednostkukija == null) 
				{
					prethodnavrednost = 0;
				}
					
				var novavrednost = parseInt(prethodnavrednost) + 1;
				var newDate = new Date();
				newDate.setTime(newDate.getTime() + 2592000000);
				document.cookie = " brojac=" + novavrednost + ";expires=" + newDate.toGMTString();