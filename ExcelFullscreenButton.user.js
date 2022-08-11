// ==UserScript==
// @name         Excel Fullscreen button
// @version      1.0
// @description
// @author       DC
// @match        https://conceptav.sharepoint.com/*
// @grant        none
// ==/UserScript==

let topGap = 175 + 32 + 23.4
let sideGap = 36.674
let firstButton = 'Fullscreen'
let secondButton = 'reset'

var newHTML = document.createElement ('div');
newHTML.innerHTML = '<button id="dc_button">' + firstButton + '</button>';

addGlobalStyle(".dc_hide {margin-top:-" + topGap + "px; margin-left:-" + sideGap + "px}")
addGlobalStyle("#dc_button:hover {opacity:100%}")
addGlobalStyle(".dc_button_hidden {opacity:10%}")
addGlobalStyle('#dc_button {position:absolute; bottom:30px; padding:2px; background-color:#fff; cursor:pointer;}')

document.body.appendChild (newHTML);
document.getElementById("dc_button").addEventListener (
   "click", toggleLad, false
);

document.getElementById("dc_button").classList.add('dc_button_hidden');

window.addEventListener('resize', function(event) {
    var innerTxt = document.getElementById("dc_button").innerText

    if (innerTxt == secondButton) {
        document.getElementById("WebApplicationFrame").style.height = (window.innerHeight + topGap + 54 + 15 + 'px');
        document.getElementById("WebApplicationFrame").style.width = (window.innerWidth + sideGap + 15 + 'px');
        document.getElementById("WebApplicationFrame").classList.add('dc_hide');
    } else {
        document.getElementById("WebApplicationFrame").style.height = window.innerHeight + 'px';
        document.getElementById("WebApplicationFrame").style.width = (window.innerWidth + 'px');
        document.getElementById("WebApplicationFrame").classList.remove('dc_hide');
    }
}, true);

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css.replace(/;/g, ' !important;');
    head.appendChild(style);
}

function toggleLad(value) {
    var innerTxt = document.getElementById("dc_button").innerText

    if (innerTxt == firstButton) {
        document.getElementById("dc_button").innerText = secondButton
        document.getElementById("WebApplicationFrame").style.height = (window.innerHeight + topGap + 54 + 15 + 'px');
        document.getElementById("WebApplicationFrame").style.width = (window.innerWidth + sideGap + 15 + 'px');
        document.getElementById("WebApplicationFrame").classList.add('dc_hide');
    } else {
        document.getElementById("dc_button").innerText = firstButton
        document.getElementById("WebApplicationFrame").style.height = window.innerHeight + 'px';
        document.getElementById("WebApplicationFrame").style.width = (window.innerWidth + 'px');
        document.getElementById("WebApplicationFrame").classList.remove('dc_hide');
    }
}