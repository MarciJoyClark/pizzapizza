<script>

function getReceipt() {
	text1="";
	text2="";
	var runningTotal=0;
	var SizeTotal=0;
	var sizeArray = document.getElementsByClassName("size");

	for(var i = 0; i < sizeArray.length; i++) {
	
		if(sizeArray[i].checked)
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+
			break;
		}
}
if 
	selectedSize =="ExtraL" {sizeTotal==16;
	text2=text2+sizeTotal+"<br>";}
else if
	selectedSize=="Large" {sizeTotal==14;
	text2=text2+sizeTotal+"<br>";}
else if
	selectedSize=="Medium" {sizeTotal==10;
	text2=text2+sizeTotal+"<br>";}
else if
	selectedSize"Personal" {sizeTotal==6;
	text2=text2+sizeTotal+"<br>";}

	runningTotal = sizeTotal;
	getCrust(runningTotal,text1,text2);	
};

function getCrust(runningTotal,text1,text2) {
var crustTotal = 0;
var selectedCrust;
var crustArray = document.getElementsByClassName("crust");

for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese-Stuffed") {
			crustTotal = 3;
		}
}	runningTotal = (runningTotal + crustTotal);
	getSauce(runningTotal,text1,text2);	
};
	
function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
		selectedSauce = sauceArray[j].value;
		text1 = text1 + selectedSauce +"<br>";}
	}
		text2 = text2 + 0 + "<br>";
		getCheese(runningTotal,text1,text2)
};

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;}
		if (selectedCheese === "ExCheese") {
			cheeseTotal = 3;}
	}
	text2 = text2+cheeseTotal+"<br>";
	text1 = text1+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	getMeat(runningTotal,text1,text2);
};

function getMeat(runningTotal,text1,text2) {
	var runningTotal = runningTotal;
	var meatTotal=0;
	var meat-price=[];
	var meatArray = document.getElementsByClassName("meat");
	
for(var j = 0; j < meatArray.length; j++) {
		if(meatArray[j].checked)
			meat-price.push(meatArray[j].value);
	}
}			
	var MeatCount = meat-price.length;
		if MeatCount >1) {
			meatTotal=(MeatCount -1);}
		else {
			meatCount = 0;
	}
runningTotal = (runningTotal+meatTotal);
for (var j = 0; j < meat-price.length; j++) {
		text1 = text1+meat-price[j]+"<br>";
		if (meatCount <= 1) {
				text2 = text2 + 0 + "<br>";
				meatCount = meatCount - 1;} 
		else if (meatCount == 2) {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;}
		else {	text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			}
	}
	getVeg(runningTotal,text1,text2);
};

function getVeg(runningTotal,text1,text2) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veg");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount >= 2) {
			veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	for (var j = 0; j < selectedVeggie.length; j++) {
			text1 = text1+selectedVeggie[j]+"<br>";
			if (veggieCount <= 1) {
				text2 = text2 + 0 + "<br>";
				veggieCount = veggieCount - 1;
			} else if (veggieCount == 2) {
				text2 = text2 + 1 + "<br>";
				veggieCount = veggieCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				veggieCount = veggieCount - 1;
			}
	}
	runningTotal = (runningTotal,text1,text2);
	text2 = text2 + runningTotal + "<br>";
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};
</script>