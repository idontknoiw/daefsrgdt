// ==UserScript==
// @name         Hakie Auto-Follow Script 2021
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto Follow for site Hakie.net
// @author       Someone
// @match        https://hakie.net/bots/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var id = '196151057';
var amt = 10;

process()
function process(){
        let inp = document.querySelectorAll("input")[0];

for (var i = 0; i < amt; i++){

inp.value=id;
var fbtn = document.querySelector('[name="follower-submit"]');

    fbtn.click()
}


}
    
})();
