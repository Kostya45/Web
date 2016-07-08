"use strict";
//работает
about_team_none();
hide_all();
team();
document.getElementById('click_team').onclick = team;

function team() {
	var name_team = prompt('Hello guest! You favorite team?','Germany');
	var mass = new Array ();
	var mass = ['Germany','Spain','England','Belgium','Italy','Russia','Austria','Creatia',
	'Ukraine','Sweden','Poland','Romania','Slovakia','Hungary','Turkey','Iceland','Wales',
	'Albania','Switzerland','Czech Republic','Republic of Ireland','Northern Ireland','France'];
	var positiveArr = mass.filter(function(string) {
  		return string === name_team;
	});
	if (positiveArr == name_team) {
  		document.getElementById('fteam').innerHTML = 'Your favorite team is ' +positiveArr+ '!';
		document.getElementById('favteam').innerHTML = '' +positiveArr+ '!';
		about_team_none();
  	}
  	else{
		document.getElementById('fteam').innerHTML = 'Favorite team not founded.';
		document.getElementById('favteam').innerHTML = 'Favorite team not founded.';
		document.getElementById('show_about_team_all').innerHTML = '<a href="#" onclick="team();">Chose team</a>';
		document.getElementById('about_team').style.display = 'none';
  	}
}

function block_show_about(){
	hide_all();
    document.getElementById('host').style.display='block';
    document.getElementById('block_about').innerHTML = '<a href="#" onclick="block_none_about();">Hide</a>';
}

function block_none_about(){
    document.getElementById('host').style.display='none';
    document.getElementById('block_about').innerHTML = '<a href="#" onclick="block_show_about();">Learn more...</a>';
}

function block_show_stadium(){
	hide_all();
    document.getElementById('block_stadium_show').style.display='block';
    document.getElementById('block_stadium').innerHTML = '<a href="#" onclick="block_none_stadium();">Hide</a>';
}

function block_none_stadium(){
    document.getElementById('block_stadium_show').style.display='none';
    document.getElementById('block_stadium').innerHTML = '<a href="#" onclick="block_show_stadium();">Learn more...</a>';
}

function block_show_group() {
	hide_all();
	var x = document.querySelectorAll('.rez');
	for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
    }
	document.getElementById('group_stage').innerHTML = '<a href="#" onclick="block_none_group();">Hide</a>';
}

function block_none_group() {
	var x = document.querySelectorAll('.rez');
	for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
	document.getElementById('group_stage').innerHTML = '<a href="#" onclick="block_show_group();">Learn more...</a>';
}

function about_team_show() {
	document.getElementById('about_team').style.display = 'block';
	document.getElementById('show_about_team_all').innerHTML = '<a href="#" onclick="about_team_none();">Hide</a>';
}

function about_team_none() {
	document.getElementById('about_team').style.display = 'none';
	document.getElementById('show_about_team_all').innerHTML = '<a href="#" onclick="about_team_show();">Learn more...</a>';
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
}

function show_creativ_profile() {
	hide_all();
	document.getElementById('creat_profile').style.display = 'block';
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
	hide_all();
	var name_user = document.Profile.Name.value;
	var check = document.getElementsByName('gender');
	for (var i = 0; i < check.length; i++) {
		if(check[i].type == "radio" && check[i].checked) {
			document.getElementById('gender_profile').innerHTML = 'Gender: ' +check[i].value+ '';
		}
	}
	var checkbox = document.getElementsByName('team');
	var checked = [];
	for(var i = 0; i < checkbox.length; i++) {
		if(checkbox[i].type == 'checkbox') {
        	if(checkbox[i].checked) checked.push(checkbox[i].value);
    	}
	}
	alert('Your profile is saved.');
	document.getElementById('name').innerHTML = 'Hi, ' +name_user+ '!';
	document.getElementById('team_reg').innerHTML = 'Favorite team: ' +checked+ '';
}

function profile_name() {
	document.getElementById('profile').style.display = 'block';
}

// Sorty
sorta.onclick = function sorta() {
	var myar = new Array();
	var li1 = document.querySelectorAll('.li1');
	for(var li2=0;li2<li1.length;li2++) {
		myar[li2]=li1[li2].innerHTML;
	}
	myar.sort();
	for(var li3=0;li3<myar.length;li3++) {
		li1[li3].innerHTML=myar[li3];
	}
}

sortz.onclick = function sortz() {
	var myar = new Array();
	var li1 = document.querySelectorAll('.li1');
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
h_img.onclick = function img_hide() {
	var x = document.querySelectorAll('.image');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
}
 
s_img.onclick = function img_show() {
	var x = document.querySelectorAll('.image');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
    }
}

sorte.onclick = function sorte() {
	var newarr = new Array();
	var sp1 = document.querySelectorAll('.li2')
	for(var sp2=0;sp2<sp1.length;sp2++) {
		newarr[sp2]=sp1[sp2].innerHTML;
	}
	newarr.sort(function(a,b){return a-b;});
	for(var sp3=0;sp3<newarr.length;sp3++) {
		sp1[sp3].innerHTML=newarr[sp3];
	}
}

sortq.onclick = function sortq() {
	var newarr = new Array();
	var sp1 = document.querySelectorAll('.li2')
	for(var sp2=0;sp2<sp1.length;sp2++) {
		newarr[sp2]=sp1[sp2].innerHTML;
	}
	newarr.sort(function(a,b){return a-b;});
	newarr.reverse();
	for(var sp3=0;sp3<newarr.length;sp3++) {
		sp1[sp3].innerHTML=newarr[sp3];
	}
}

//мелочь
close_window.onclick = function close_window() {
	alert('YOU WILL NOT LEAVE! HAHAHAHHA');
}
//задачки
// отказ от onclick();
// перевод в модули