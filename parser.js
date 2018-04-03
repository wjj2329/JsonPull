var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var req = new XMLHttpRequest(); 
req.open('GET', 'http://gmc.lingotek.com/language', false);   
req.send(null);  
if(req.status == 200)
{  
   var obj = JSON.parse(req.responseText);
   for (var key in obj)
   {
   console.log(obj[key].language);
    }
}
else
{
   console.log("error");
}
