var i; //row
var j; //column
for (i = 1;i <= 9;i++){ //9rows
	for(j = 1;j <= i;j++){ //j <= i 9column
	//output the result
		document.write(j + "*" + i + "=" + i*j + "&nbsp;&nbsp;&nbsp;");	    }
	document.write("<br/>"); // line feed
}
