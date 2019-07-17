
			$(function(){
				$(".city").click(function(){
					$(".select_city").fadeIn();
				})
				$(".return-btn").click(function(){
					$(".select_city").fadeOut();
				})
			})
		$(function(){
			$(".screening").click(function(){
				$(this).addClass("fix-screening");
			})
		})
	$(function(){
			$(".list-input").click(function(){
				$(".search-none").fadeIn();
				$(".house-list").hide();
			})
			$("#return").click(function(){
				$(".search-none").fadeOut();
				$(".house-list").show()
			})
	});
	/*经纪人下拉框模拟*/
var $$ = function (id) { 
return document.getElementById(id); 
} 
window.onload = function () { 
var btnSelect = $$("btn_select"); 
var curSelect = btnSelect.getElementsByTagName("span")[0]; 
var oSelect = btnSelect.getElementsByTagName("select")[0]; 
var aOption = btnSelect.getElementsByTagName("option"); 
oSelect.onchange = function () { 
var text=oSelect.options[oSelect.selectedIndex].text; 
curSelect.innerHTML = text; 
} 
} 