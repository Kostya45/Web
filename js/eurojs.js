"use strict";

// скрывание всех блоков
function hideAll() {
	var x = document.querySelectorAll(".show");
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

// списки клики
document.getElementById("host").onclick = hostView;
document.getElementById("stadium").onclick = stadiumView;
document.getElementById("group").onclick = groupView;
document.getElementById("country").onclick = countryView;

document.getElementById("create-pro").onclick = showCreativProfile;
document.getElementById('info').onclick = info;

function hostView() {
	hideAll();
	var deleted = document.getElementById("hostv");
	if (!deleted) {
		document.getElementById("del").style.display = "block";
	}
	else {
		document.getElementById("hostv").style.display = "block";
	}
}

function stadiumView() {
	hideAll();
	var deleted = document.getElementById("block-stadium-show");
	if (!deleted) {
		document.getElementById("del").style.display = "block";
	} 
	else { 
		document.getElementById("block-stadium-show").style.display = "block";
	}
}

function groupView() {
	hideAll();
	var x = document.querySelectorAll('.rez');
	for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
	}
}

function countryView() {
	hideAll();
	var deleted = document.getElementById("countryv");
	if (!deleted) {
		document.getElementById("del").style.display = "block";
	} 
	else {
		document.getElementById("countryv").style.display = "block";
	}
}

function showCreativProfile() {
	hideAll();
	document.getElementById('creat-profile').style.display = 'block';
}

function info() {
	var date = Date();
	var info = navigator.userAgent;
	var all = date + '\n' + info;
	alert(all);
}
// конец

// кнопки сохранения/отмены в блоке профиль
document.getElementById("cancel").onclick = cancel;
document.getElementById("save").onclick = save;

function save() {
	var name_user = document.Profile.Name.value;
	if (name_user === "") {
		alert("No name");
		document.getElementsByName("Name").style.borderColor = "red";
	}
	else {
	var check = document.getElementsByName('gender');
	for (var i = 0; i < check.length; i++) {
		if(check[i].type == "radio" && check[i].checked) {
			document.getElementById('gender-profile').innerHTML = '<font color="red">Gender:</font> ' +check[i].value+ '';
		}
	}

	var checkbox = document.getElementsByName('team');
	var checked = [];
	for(i = 0; i < checkbox.length; i++) {
		if(checkbox[i].type == 'checkbox') {
        	if(checkbox[i].checked) checked.push(checkbox[i].value);
    	}
	}
	document.getElementById('creat-profile').style.display = 'none';
	alert('Your profile is saved.');
	document.getElementById('name').innerHTML = 'Hi, ' +name_user+ '!';
	document.getElementById('team-reg').innerHTML = '<font color="blue">Favorite team(s):</font> ' +checked+ '.';
	}
}

function cancel() {
	document.getElementById('creat-profile').style.display = 'none';
	alert('Not saved');
}
// конец

// фоны на страницы
document.getElementById("stan").onclick = standart;
document.getElementById("red").onclick = red;
document.getElementById("euro").onclick = euro;

function standart() {
	document.body.style.backgroundImage = "url('style/image/back/back.jpg')";
}

function red() {
	document.body.style.backgroundImage = 'url("style/image/back/redh.jpg")';
}

function euro() {
	document.body.style.backgroundImage = 'url("style/image/back/euroh.jpg")';
}
// конец

// Клики сортировки начало
document.getElementById("sorta").onclick = sortA;
document.getElementById("sortz").onclick = sortZ;
document.getElementById("sorte").onclick = sortE;
document.getElementById("sortq").onclick = sortQ;

function sortA() {
	var myArray = [];
	var list = document.querySelectorAll('.li1');
	for(var i = 0; i < list.length; i++) {
		myArray[i] = list[i].innerHTML;
	}
	myArray.sort();
	for(i = 0; i < myArray.length; i++) {
		list[i].innerHTML = myArray[i];
	}
}
// Сортировка инверсия алфавиту
function sortZ() {
	var myArray = [];
	var list = document.querySelectorAll('.li1');
	for(var i = 0; i < list.length; i++) {
		myArray[i] = list[i].innerHTML;
	}
	myArray.sort();
	myArray.reverse();
	for(i = 0; i < myArray.length;i++) {
		list[i].innerHTML = myArray[i];
	}
}
// Сортировка чисел
function sortE() {
	var myArray = [];
	var list = document.querySelectorAll('.li2')
	for(var i = 0; i < list.length; i++) {
		myArray[i] = list[i].innerHTML;
	}
	myArray.sort(function(a,b){return a-b;});
	for(i = 0; i < myArray.length; i++) {
		list[i].innerHTML = myArray[i];
	}
}

// Сортировка инверсия 
function sortQ() {
	var myArray = [];
	var list = document.querySelectorAll('.li2')
	for(var i = 0; i < list.length;i++) {
		myArray[i] = list[i].innerHTML;
	}
	myArray.sort(function(a,b){return a-b;});
	myArray.reverse();
	for(var i = 0; i < myArray.length; i++) {
		list[i].innerHTML = myArray[i];
	}
}
// конец

// открытие слайдера
$(function(){
    $('.slide-out-div').tabSlideOut({
        tabHandle: '.handle',							   //класс элемента вкладки
        pathToTabImage: 'style/image/others/setting.png',  //путь к изображению *required*
        imageHeight: '40px',                               //высота  *required*
        imageWidth: '40px',                                //width of tab image *required*    
        tabLocation: 'left',                               //side of screen where tab lives, top, right, bottom, or left
        speed: 1000,                                       //speed of animation
        action: 'click',                                   //options: 'click' or 'hover', action to trigger animation
        topPos: '20%',                                     //position from the top
        fixedPosition: true                                //options: true makes it stick(fixed position) on scroll
    });
});
// конец

// подъём на верх
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} 
		else {
			$('.scrollup').fadeOut();
		}
	});

$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});
// конец

// удаление блока
$('#close').click(function(){
  	$("div#footer").remove();
});
// конец

$(".close").click(function(){
  $('div').toggleClass("expand");
});
