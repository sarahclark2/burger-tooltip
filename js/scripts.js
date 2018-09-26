console.log('scripts loaded');

var burger = document.getElementById('burger'); //hamburger button
var mobileNav = document.getElementById('offscreen_nav'); //nav list
var closeNav = document.getElementById('nav_close'); //close button for the haburger menu
var contentBlur = document.getElementById('blur');
var redWord = document.getElementById('more-info');
var tooltip = document.getElementById('tool-tip');

burger.addEventListener('click', function(){
  console.log('btn clicked');
  mobileNav.style.width = '100%'
  mobileNav.style.transition = '.5s ease';
  contentBlur.style.opacity = '.3';
});

closeNav.addEventListener('click', function(){
  console.log('close clicked');
  mobileNav.style.width = '0%'
  mobileNav.style.transition = '.5s ease';
  contentBlur.style.opacity = '1';
});

redWord.addEventListener('mouseover', function(){
  tooltip.style.opacity = '1';
  var x = event.screenX;
  var y = event.screenY;
  console.log(x);
  tooltip.style.left = (x-20) + 'px';
  tooltip.style.top = (y-75)+ 'px';
  arrow.style.opacity = '1';
  tooltip.style.left = x + 'px';
  tooltip.style.top = y+ 'px';
});
redWord.addEventListener('mouseleave', function(){
  tooltip.style.opacity = '0';
  arrow.style.opacity = '0';

});
