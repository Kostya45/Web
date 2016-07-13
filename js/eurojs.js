"use strict";
//работает
hideAll();
team();
//Выпадающее меню клики
document.getElementById("click-team").onclick = team;
document.getElementById("show").onclick = showAll;
document.getElementById("hide").onclick = hideAll;
document.getElementById("s-img").onclick = imgShow;
document.getElementById("h-img").onclick = imgHide;
document.getElementById("create-pro").onclick = showCreativProfile;
document.getElementById("profile-show").onclick = profile;
document.getElementById("out").onclick = closeWindow;
//Профиль клики
document.getElementById("cancel").onclick = cancel;
document.getElementById("save").onclick = save;
document.getElementById("edit-profile").onclick = showCreativProfile;
//Блоки клики показа блока
document.getElementById("show-host").onclick = showHost;
document.getElementById("hide-host").onclick = noneHost;
document.getElementById("show-stadium").onclick = blockShowStadium;
document.getElementById("hide-stadium").onclick = blockNoneStadium;
document.getElementById("sort-block").onclick = aboutTeamShow;
document.getElementById("sort-hide").onclick = aboutTeamNone;
document.getElementById("show-table").onclick = showGroup;
document.getElementById("hide-table").onclick = noneGroup;

document.getElementById("show-fav").onclick = aboutTeamShow
document.getElementById("hide-fav").onclick = aboutTeamNone;

//Сортировка клики
document.getElementById("sorta").onclick = sortA;
document.getElementById("sortz").onclick = sortZ;
document.getElementById("sorte").onclick = sortE;
document.getElementById("sortq").onclick = sortQ;

function team() {
  	var name_team = prompt("Hello guest! You favorite team?","Germany");
  	var mass = ["Germany","Spain","England","Belgium","Italy","Russia","Austria","Creatia",
  	"Ukraine","Sweden","Poland","Romania","Slovakia","Hungary","Turkey","Iceland","Wales",
  	"Albania","Switzerland","Czech Republic","Republic of Ireland","Northern Ireland","France"];
  	var positiveArr = mass.filter(function(string) {
   		return string === name_team;
  	});
  	if (positiveArr == name_team) {
   	 	document.getElementById('fteam').innerHTML = 'Your favorite team is ' +positiveArr+ '!';
    	document.getElementById('favteam').innerHTML = '' +positiveArr+ '!';
    	aboutTeamNone();
	}
  	else{
		document.getElementById('fteam').innerHTML = 'Favorite team not founded.';
		document.getElementById('favteam').innerHTML = 'Favorite team not founded.';
		document.getElementById('about-team').style.display = 'none';
  	}
}

function showHost() {
	hideAll();
    document.getElementById('host').style.display='block';
}

function noneHost() {
    document.getElementById('host').style.display='none';
}

function blockShowStadium() {
	hideAll();
    document.getElementById('block-stadium-show').style.display='block';
}

function blockNoneStadium(){
    document.getElementById('block-stadium-show').style.display='none';
}

function showGroup() {
	hideAll();
	var x = document.querySelectorAll('.rez');
	for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
    }
}

function noneGroup() {
	var x = document.querySelectorAll('.rez');
	for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
}

function aboutTeamShow() {
	document.getElementById('about-team').style.display = 'block';
	
}

function aboutTeamNone() {
	document.getElementById('about-team').style.display = 'none';
}

// Показывает все блоки
function showAll() {
	var x = document.querySelectorAll('.show-all');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
    }
}

// Скрывает все блоки
function hideAll() {
	var x = document.querySelectorAll('.show-all');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
}

function showCreativProfile() {
	hideAll();
	document.getElementById('creat-profile').style.display = 'block';
}

function showTeamSort() {
	document.getElementById('about-team').style.display = 'block';
}

function hideTeamSort() {
	document.getElementById('about-team').style.display = 'none';
}

function save() {
	hideAll();
	
	var name_user = document.Profile.Name.value;
	var check = document.getElementsByName('gender');
	for (var i = 0; i < check.length; i++) {
		if(check[i].type == "radio" && check[i].checked) {
			document.getElementById('gender-profile').innerHTML = 'Gender: ' +check[i].value+ '';
		}
	}
	
	var checkbox = document.getElementsByName('team');
	var checked = [];
	for(var ii = 0; ii < checkbox.length; ii++) {
		if(checkbox[ii].type == 'checkbox') {
        	if(checkbox[ii].checked) checked.push(checkbox[ii].value);
    	}
	}
	alert('Your profile is saved.');
	document.getElementById('name').innerHTML = 'Hi, ' +name_user+ '!';
	document.getElementById('team-reg').innerHTML = 'Favorite team(s): ' +checked+ '';
}

function cancel() {
	hideAll();
	alert('Not saved');
}

function profile() {
	document.getElementById('profile').style.display = 'block';
}

// Sorty
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
// Скрывание картинок
function imgHide() {
	var x = document.querySelectorAll('.image');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
}

function imgShow() {
	var x = document.querySelectorAll('.image');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
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

//мелочь
function closeWindow() {
	alert('YOU WILL NOT LEAVE! HAHAHAHHA');
}
//задачки
// отказ от onclick();
// перевод в модули

//проблемы 
//не ищет ид после изминение позиций блока
//onclick удаления не могу пока подключить через js файл