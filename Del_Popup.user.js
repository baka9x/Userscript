// ==UserScript==
// @name         Del_Popup
// @namespace    http://facebook.com/dangofficial
// @version      0.1
// @description  Del popup to use everfilter
// @author       Dang Hai
// @icon         http://static0.everfilter.me/e3570ac87e047eace9ce1b265b197797.png
// @copyright    2016+, Baka
// @match        http://everfilter.me/
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @grant        none
// ==/UserScript==

$(".popup.popup-jp.popup-suspend").replaceWith(function(){
   return '<div class="none-popup" style="display:none!important">';
});
