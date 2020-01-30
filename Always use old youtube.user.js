// ==UserScript==
// @version         1
// @name            Always use old youtube
// @description     For when you wanna run it in incognito without tryna do a buncha wacky shit every time
// @compatible      firefox
// @compatible      opera
// @match           https://www.youtube.com/*
// @exclude         *://www.youtube.com/tv*
// @exclude         *://www.youtube.com/embed/*
// @exclude         *://www.youtube.com/live_chat*
// @exclude         *://www.youtube.com/feed/history*
// @exclude         *://www.youtube.com/user*
// @exclude         *://www.youtube.com/channel*
// @run-at          document-start
// @grant           GM_getValue
// @grant           GM_setValue
// @noframes
// ==/UserScript==

// If the script doesn't work you might just need to update the cookie expiry date (probably not when it's set to 2030 tho)

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}

var myCookie = getCookie("PREF");
//Check if the cookie is equal to the old youtube preference, if it is then just print to console, if it isn't then change the value and reload the page
if (myCookie == "f5=30030&f1=50000000&f6=43418&al=en&cvdm=grid") {
console.log('PREF cookie is correctly set \(old youtube script\)')
} else {
document.cookie = 'PREF=f5=30030&f1=50000000&f6=43418&al=en&cvdm=grid; expires=19 May 2030 20:31:51 UTC; domain=.youtube.com'
window.location.reload(true)
console.log('PREF cookie is not correctly set \(old youtube script\)')
}
