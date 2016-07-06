"use strict";
//работает
about_team_none();
team();
hide_all();
var name_team;
// бред
// name_team = prompt('Hello guest! You favorite team?','');
// function team(mass,name_team) {
// 	var mass = ['Germany', 'Spain', 'England', 'Belgium', 'Italy','Russia','Austria','Creatia',
// 	'Ukraine','Sweden','Poland','Romania','Slovakia','Hungary','Turkey','Iceland','Wales','Albania',
// 	'Switzerland','Czech Republic','Republic of Ireland','Northern Ireland','France'];
//   	for (var i = 0; i < mass.length; i++) {
//     	if (mass[i] === name_team) return i;{
//     	document.getElementById('fteam').innerHTML = 'Your favorite team is ' +name_team+ '!';
//     }
//   	}
//  	return -1;
//   	document.getElementById('fteam').innerHTML = 'Your favorite team is ' +name_team+ '!';
// }

function team() {
	name_team = prompt('Hello guest! You favorite team?','Germany');
	if(name_team == 'Germany' || name_team == 'Spain'
		|| name_team == 'England' || name_team == 'Portugal'
		|| name_team == 'Belgium' || name_team == 'Italy'
		|| name_team == 'Russia' || name_team == 'Austria'
		|| name_team == 'Creatia' || name_team == 'Ukraine'
		|| name_team == 'Sweden' || name_team == 'Poland'
		|| name_team == 'Romania' || name_team == 'Slovakia'
		|| name_team == 'Hungary' || name_team == 'Turkey'
		|| name_team == 'Iceland' || name_team == 'Wales'
		|| name_team == 'Albania' || name_team == 'Switzerland'
		|| name_team == 'Czech Republic' || name_team == 'Republic of Ireland'
		|| name_team == 'Northern Ireland' || name_team == 'France'){
		document.getElementById('fteam').innerHTML = 'Your favorite team is ' +name_team+ '!';
		document.getElementById('favteam').innerHTML = '' +name_team+ '!';
		about_team_none();
	}
	else {
		document.getElementById('fteam').innerHTML = 'Favorite team not founded';
		document.getElementById('favteam').innerHTML = 'Favorite team not founded.';
		document.getElementById('show_about_team_all').innerHTML = '<a href="#" onclick="team();">Chose team</a>';
		document.getElementById('about_team').style.display = 'none';
	}	
}

function block_show_about(){
    document.getElementById('host').style.display='block';
    document.getElementById('block_about').innerHTML = '<a href="#" onclick="block_none_about();">Hide</a>';
	block_none_stadium();
	block_none_group();
}
function block_none_about(){
    document.getElementById('host').style.display='none';
    document.getElementById('block_about').innerHTML = '<a href="#" onclick="block_show_about();">Learn more...</a>';
}

function block_show_stadium(){
    document.getElementById('block_stadium_show').style.display='block';
    document.getElementById('block_stadium').innerHTML = '<a href="#" onclick="block_none_stadium();">Hide</a>';
    block_none_about();
    block_none_group();
}
function block_none_stadium(){
    document.getElementById('block_stadium_show').style.display='none';
    document.getElementById('block_stadium').innerHTML = '<a href="#" onclick="block_show_stadium();">Learn more...</a>';
}

function block_show_group() {
	document.getElementById('block_group1').style.display = 'block';
	document.getElementById('block_group2').style.display = 'block';
	document.getElementById('block_group3').style.display = 'block';
	document.getElementById('block_group4').style.display = 'block';
	document.getElementById('block_group5').style.display = 'block';
	document.getElementById('block_group6').style.display = 'block';
	document.getElementById('group_stage').innerHTML = '<a href="#" onclick="block_none_group();">Hide</a>';
	block_none_about();
	block_none_stadium();
}

function block_none_group() {
	document.getElementById('block_group1').style.display = 'none';
	document.getElementById('block_group2').style.display = 'none';
	document.getElementById('block_group3').style.display = 'none';
	document.getElementById('block_group4').style.display = 'none';
	document.getElementById('block_group5').style.display = 'none';
	document.getElementById('block_group6').style.display = 'none';
	document.getElementById('group_stage').innerHTML = '<a href="#" onclick="block_show_group();">Learn more...</a>';
}

function about_team_ger() {
	document.getElementById('about_team_ger').style.display = 'block';
}

function about_team_ger_none() {
	document.getElementById('about_team_ger').style.display = 'none';
}

function about_team_show() {
	document.getElementById('about_team').style.display = 'block';
	document.getElementById('show_about_team_all').innerHTML = '<a href="#" onclick="about_team_none();">Hide</a>';
}

function about_team_none() {
	document.getElementById('about_team').style.display = 'none';
	document.getElementById('show_about_team_all').innerHTML = '<a href="#" onclick="about_team_show();">Learn more...</a>';
}

function close_window() {
	alert('YOU WILL NOT LEAVE! HAHAHAHHA');
}
// Показывает все блоки(почти все)
function show_all() {
	var x = document.querySelectorAll('.show_all');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
    }
}
// Скрывает все блоки
function hide_all() {
	var x = document.querySelectorAll('.show_all');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
	hide_profile();
}

function show_creativ_profile() {
	hide_all();
	document.getElementById('creat_profile').style.display = 'block';
}

function hide_creativ_profile() {
	document.getElementById('creat_profile').style.display = 'none';
}

function show_team_sort() {
	document.getElementById('sort_team').style.display = 'block';
	document.getElementById('sort_block').innerHTML = '<a href="#" onclick="hide_team_sort();">Hide</a>';
}

function hide_team_sort() {
	document.getElementById('sort_team').style.display = 'none';
	document.getElementById('sort_block').innerHTML = '<a href="#" onclick="show_team_sort();">Learn more...</a>';
}

function save() {
	alert('Your profile is saved.');
}

var name_user;

function btnclick() {
	name_user = document.Profile.Name.value;
}

function profile_name() {
	document.getElementById('profile').style.display = 'block';
	document.getElementById('name').innerHTML = 'Hi, ' +name_user+ '!';
}

function hide_profile() {
	document.getElementById('profile').style.display = 'none';
}

var check = document.getElementsByName('gender');

function checked() {
	for (var i = 0; i < check.length; i++) {
		if(check[i].type == "radio" && check[i].checked) {
			document.getElementById('gender_profile').innerHTML = 'Gender: ' +check[i].value+ '';
		}
	}
}

//через модули
// var myObj = (function(){

// 	var name_user;

// 	function btnclick() {
// 		name_user = document.Profile.Name.value;
// 	}
// 	function profile_name() {
// 		document.getElementById('profile').style.display = 'block';
// 		document.getElementById('name').innerHTML = 'Hi, ' +name_user+ '!';
// 	}

// 	return btnclick;
// 	return profile_name;
// })();


// Sorty

function sorta() {
	for(var li2=0;li2<li1.length;li2++) {
		myar[li2]=li1[li2].innerHTML;
	}
	myar.sort();
	for(var li3=0;li3<myar.length;li3++) {
		li1[li3].innerHTML=myar[li3];
	}
}

function sortz() {
	for(var li2=0;li2<li1.length;li2++) {
		myar[li2]=li1[li2].innerHTML;
	}
	myar.sort();
	myar.reverse();
	for(var li3=0;li3<myar.length;li3++) {
		li1[li3].innerHTML=myar[li3];
	}
}
// Скрывание картинок
function img_hide() {
	var x = document.querySelectorAll('.image');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
}
 
function img_show() {
	var x = document.querySelectorAll('.image');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
    }
}

function sorta() {
	for(var li2=0;li2<li1.length;li2++) {
		myar[li2]=li1[li2].innerHTML;
	}
	myar.sort();
	for(var li3=0;li3<myar.length;li3++) {
		li1[li3].innerHTML=myar[li3];
	}
}
var myar = new Array();
var li1 = document.querySelectorAll('.li1');

// var li_1 = document.querySelectorAll('.li_1');
// function sorte() {
// 	var myar = new Array();
//     var arr1 = []; // массив для нечетных
//     var arr2 = []; // массив для четных
//    for (var i in li1) {
//         //проверка на четность 
//        if (li_1[i] % 2 == 0) {
//            arr2.push(li_1[i]);
//            myar[li2]=li1[li2].innerHTML;
//        } 
//        else {
//            arr1.push(li_1[i]);
//            li1[li3].innerHTML=myar[li3];
//        }
	// }
// }
var newarr = new Array();
var sp1 = document.querySelectorAll('.li2')

function sorte() {
	for(var sp2=0;sp2<sp1.length;sp2++) {
		newarr[sp2]=sp1[sp2].innerHTML;
	}
	newarr.sort(function(a,b){return a-b;});
	for(var sp3=0;sp3<newarr.length;sp3++) {
		sp1[sp3].innerHTML=newarr[sp3];
	}
}

function sortq() {
	for(var sp2=0;sp2<sp1.length;sp2++) {
		newarr[sp2]=sp1[sp2].innerHTML;
	}
	newarr.sort(function(a,b){return a-b;});
	newarr.reverse();
	for(var sp3=0;sp3<newarr.length;sp3++) {
		sp1[sp3].innerHTML=newarr[sp3];
	}
}


//задачки
// отказ от onclick();
// перевод в модули
// проверка в массиве