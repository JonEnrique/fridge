/* MUSIC PLAYER (Shankar, B. (2020))--> */

var a=0.2;
function start() {
  document.getElementById('song').volume=a;
  document.getElementById('song').play();
}
function stop() {
  document.getElementById('song').pause();
}
function up() {
  if(window.a>0.9)
    window.a=0.9;
  window.a+=0.1;
  document.getElementById('song').volume=a;
}
function down() {
  if(window.a<0.1)
    window.a=0.1;
  window.a-=0.1;
  document.getElementById('song').volume=a;
}