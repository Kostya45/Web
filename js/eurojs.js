"use strict";

document.getElementById("create-pro").onclick = showCreativProfile;
//profile
document.getElementById("cancel").onclick = cancel;
document.getElementById("save").onclick = save;
//fom
document.getElementById("stan").onclick = standart;
document.getElementById("red").onclick = red;
document.getElementById("euro").onclick = euro;

// View
document.getElementById("host").onclick = host_view;
document.getElementById("stadium").onclick = stadium_view;
document.getElementById("group").onclick = group_view;
document.getElementById("country").onclick = country_view;
document.getElementById('info').onclick = info;


//Сортировка клики
document.getElementById("sorta").onclick = sortA;
document.getElementById("sortz").onclick = sortZ;
document.getElementById("sorte").onclick = sortE;
document.getElementById("sortq").onclick = sortQ;

function showCreativProfile() {
	document.getElementById('creat-profile').style.display = 'block';
}

function save() {
	var name_user = document.Profile.Name.value;
	var check = document.getElementsByName('gender');
	for (var i = 0; i < check.length; i++) {
		if(check[i].type == "radio" && check[i].checked) {
			document.getElementById('gender-profile').innerHTML = '<font color="red">Gender:</font> ' +check[i].value+ '';
		}
	}
	
	var checkbox = document.getElementsByName('team');
	var checked = [];
	for(var ii = 0; ii < checkbox.length; ii++) {
		if(checkbox[ii].type == 'checkbox') {
        	if(checkbox[ii].checked) checked.push(checkbox[ii].value);
    	}
	}
	document.getElementById('creat-profile').style.display = 'none';
	alert('Your profile is saved.');
	document.getElementById('name').innerHTML = 'Hi, ' +name_user+ '!';
	document.getElementById('team-reg').innerHTML = '<font color="blue">Favorite team(s):</font> ' +checked+ '';
}

function cancel() {
	document.getElementById('creat-profile').style.display = 'none';
	alert('Not saved');
}

function standart() {
	document.body.style.backgroundImage = "url('style/back/back.jpg')";
}

function red() {
	document.body.style.backgroundImage = 'url("style/back/redh.jpg")';
}

function euro() {
	document.body.style.backgroundImage = 'url("style/back/euroh.jpg")';
}

function host_view() {
	document.getElementById("hostv").style.display = "block";
}

function stadium_view() {
	document.getElementById("block-stadium-show").style.display = "block";
}

function group_view() {
	var x = document.querySelectorAll('.rez');
	for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
	}
}

function info() {
	alert(Date());
}

function country_view() {
	document.getElementById("countryv").style.display = "block";
}

function sortA() {
	var myar = new Array();
	var li1 = document.querySelectorAll('.li1');
	for(var li2 = 0; li2 < li1.length; li2++) {
		myar[li2] = li1[li2].innerHTML;
	}
	myar.sort();
	for(var li3 = 0; li3 < myar.length; li3++) {
		li1[li3].innerHTML = myar[li3];
	}
}
//Сортировка инверсия алфавиту
function sortZ() {
	var myar = new Array();
	var li1 = document.querySelectorAll('.li1');
	for(var li2 = 0; li2 < li1.length; li2++) {
		myar[li2] = li1[li2].innerHTML;
	}
	myar.sort();
	myar.reverse();
	for(var li3 = 0; li3 < myar.length;li3++) {
		li1[li3].innerHTML = myar[li3];
	}
}

function sortE() {
	var newarr = new Array();
	var sp1 = document.querySelectorAll('.li2')
	for(var sp2 = 0; sp2 < sp1.length; sp2++) {
		newarr[sp2] = sp1[sp2].innerHTML;
	}
	newarr.sort(function(a,b){return a-b;});
	for(var sp3 = 0; sp3 < newarr.length; sp3++) {
		sp1[sp3].innerHTML = newarr[sp3];
	}
}

function sortQ() {
	var newarr = new Array();
	var sp1 = document.querySelectorAll('.li2')
	for(var sp2 = 0; sp2 < sp1.length;sp2++) {
		newarr[sp2] = sp1[sp2].innerHTML;
	}
	newarr.sort(function(a,b){return a-b;});
	newarr.reverse();
	for(var sp3 = 0; sp3 < newarr.length; sp3++) {
		sp1[sp3].innerHTML = newarr[sp3];
	}
}