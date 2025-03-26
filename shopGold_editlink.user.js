// ==UserScript==
// @name         Edycja produktu na ED i ORNO

// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Zamienia numer katalogowy na link do edycji produktu
// @author       Pa-Jong
// @match        https://elektronikadomowa.pl/*-p-*.html
// @match        https://elektrone.pl/*-p-*.html
// @require      https://pa-jong.github.io/shopGold_editlink/shopGold_editlink.user.js
// @updateURL    https://pa-jong.github.io/shopGold_editlink/update.json
// @downloadURL  https://pa-jong.github.io/shopGold_editlink/shopGold_editlink.user.js
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    let url = window.location.href;
    let match = url.match(/-p-(\d+)\.html/);
    if(match){
        let id_poz = match[1];
        let nrElem = document.getElementById("NrKatalogowy");
        if(nrElem) {
            let nrText = nrElem.querySelector("strong[itemprop='mpn']").innerText;
            // Wybór domeny na podstawie aktualnego hosta
            let host = window.location.host;
            let baseDomain = host.includes("electrone.pl") ? "https://electrone.pl" : "https://elektronikadomowa.pl";
            let editUrl = baseDomain + "/zarzadzanie/produkty/produkty_edytuj.php?id_poz=" + id_poz;
            nrElem.innerHTML = '<span>Numer katalogowy:</span> <a href="'+ editUrl +'" target="_blank"><strong itemprop="mpn">' + nrText + '</strong></a>';
        }
    }
})();
