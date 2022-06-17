'use strict'

//スマホの時だけ電話番号有効化
//スムーススクロール

$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

/***************** MENU ******************/

$(function() {
  $(".navbar-toggler").click(function() {
    $("#Navbar").slideToggle(200);
    $(".icon-bar").toggleClass("closeup");
    return false;
  });
});

//スマホのメニューをタップしたら閉じる

$(document).ready(function () {
	$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").removeClass('show');
	});
});


// // ページトップのタイトルを設定する
// $(document).ready(function() {
// 	var page_title = document.querySelector('title').innerText;		// title タグの中身を取り出して変数 page_title に代入
// 	page_title = page_title.replace('オープンキャンパス2022 学生企画 ', '');		// page_title の中身の'オープンキャンパス2022 学生企画 'を削除
// 	// トップページ以外のページでタイトルを設定する
// 	if (page_title !== 'トップページ') {
// 		var page_title_element = document.getElementById('page_title_in_body');		// page_title_in_body という属性名を取得
// 		page_title_element.innerHTML = page_title;		// 取得した属性をもつhtmlの中身を page_title に書き換え
// 	}
// });