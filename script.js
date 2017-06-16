$(document).ready(function(){
	var testNumLength = function(number) {
		var isDecimal = number.indexOf(".");
		if ((isDecimal !== -1) && (number.length > 9)){
            totaldiv.text(number.substr(0,9));
			if(number.slice(0, isDecimal) > 8){
				number = "";
				totaldiv.text("Err");
			}
		} else if ((number.indexOf(".") === -1) && (number.length > 9)){
			number = "";
			totaldiv.text("Err");
		}
         
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
        
    $("#numbers a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    
    $("#operators a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
	});
    
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    
    $("#equals").click(function(){
		if (operator === "+"){
			number = (parseFloat(number) + parseFloat(newnumber)).toString(10);
		} else if (operator === "-"){
			number = (parseFloat(newnumber) - parseFloat(number)).toString(10);
		} else if (operator === "/"){
			number = (parseFloat(newnumber) / parseFloat(number)).toString(10);
		} else if (operator === "*"){
			number = (parseFloat(newnumber) * parseFloat(number)).toString(10);
		}
		totaldiv.text(number);
		testNumLength(number);
		number = "";
		newnumber = "";
    });
});