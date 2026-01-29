var Timer = new Date("Feb 30, 2026 12:00:00").getTime();
var Timerfunction = setInterval(function() {
var heute = new Date().getTime();
var diff = Timer - heute;
var d = Math.floor(diff / (1000*60*60*24));
var h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
var m = Math.floor((diff % (1000*60*60)) / (1000*60));
var s = Math.floor((diff % (1000*60)) / (1000));
if (document.getElementById('d')) document.getElementById('d').innerText = d;
if (document.getElementById('h')) document.getElementById('h').innerText = h;
if (document.getElementById('m')) document.getElementById('m').innerText = m;
if (document.getElementById('s')) document.getElementById('s').innerText = s;
if (diff < 0) {
clearInterval(Timerfunction);
if (document.getElementById('d')) document.getElementById('d').innerText = 0;
if (document.getElementById('h')) document.getElementById('h').innerText = 0;
if (document.getElementById('m')) document.getElementById('m').innerText = 0;
if (document.getElementById('s')) document.getElementById('s').innerText = 0;
}}, 1000)