/* Marielle V2.1 — reversible static demo improvements */
(function(){
'use strict';
function init(){
document.querySelectorAll('#services .mar-service-number').forEach(function(el){el.remove();});
var hero=document.querySelector('[data-mar-slider]');
if(hero){
var controls=hero.querySelector('.mar-hero-controls');
var dots=controls?Array.from(controls.querySelectorAll('button[data-mar-to]')):[];
if(controls&&dots.length>1&&!controls.querySelector('.mar-arrow')){
var prev=document.createElement('button');prev.type='button';prev.className='mar-arrow mar-arrow-prev';prev.textContent='←';prev.setAttribute('aria-label','Previous hero slide');
var next=document.createElement('button');next.type='button';next.className='mar-arrow mar-arrow-next';next.textContent='→';next.setAttribute('aria-label','Next hero slide');
controls.insertBefore(prev,dots[0]);controls.appendChild(next);
function go(d){var n=dots.findIndex(function(b){return b.getAttribute('aria-pressed')==='true';});dots[(Math.max(0,n)+d+dots.length)%dots.length].click();}
prev.addEventListener('click',function(){go(-1);});
next.addEventListener('click',function(){go(1);});
hero.addEventListener('keydown',function(e){if(!controls.contains(document.activeElement))return;if(e.key==='ArrowRight'){e.preventDefault();go(1);}else if(e.key==='ArrowLeft'){e.preventDefault();go(-1);}});
}}
function strip(words,reverse,dark,label){
var el=document.createElement('section');
el.className='mar-motion-strip'+(reverse?' mar-motion-reverse':'')+(dark?' mar-motion-dark':'');
var sr=document.createElement('span');sr.className='screen-reader-text';sr.textContent=label;el.appendChild(sr);
var track=document.createElement('div');track.className='mar-motion-track';track.setAttribute('aria-hidden','true');
for(var i=0;i<2;i++){var part=document.createElement('span');part.textContent=words;track.appendChild(part);}
el.appendChild(track);return el;
}
var principles=document.querySelector('.mar-principles');
if(principles&&!document.querySelector('.mar-motion-strip'))principles.insertAdjacentElement('afterend',strip('CREATE WITH INTENTION  ·  MAKE YOUR MARK  ·  ',false,false,'Create with intention. Make your mark.'));
var quote=document.querySelector('.mar-quote');
if(quote&&document.querySelectorAll('.mar-motion-strip').length<2)quote.insertAdjacentElement('afterend',strip('A DISTINCTIVE POINT OF VIEW  ·  DESIGNED TO INSPIRE  ·  ',true,true,'A distinctive point of view. Designed to inspire.'));
var foot=document.querySelector('.mar-footer-upper');
if(foot&&!foot.classList.contains('mar-footer-refined')){
foot.classList.add('mar-footer-refined');var cols=Array.from(foot.children);
if(cols.length>=4){
function add(ul,label,to){if(!ul||Array.from(ul.querySelectorAll('a')).some(function(a){return a.textContent.trim()===label;}))return;var li=document.createElement('li'),a=document.createElement('a');a.href=to;a.textContent=label;li.appendChild(a);ul.appendChild(li);}
var explore=cols[1].querySelector('ul');add(explore,'Journal','#journal');add(explore,'Contact','#contact');
var more=cols[2],heading=more.querySelector('h3');if(heading)heading.textContent='DISCOVER MORE';
var ul=more.querySelector('ul');if(ul){ul.innerHTML='';add(ul,'Brand strategy','#services');add(ul,'Website design','#services');add(ul,'Creative direction','#services');add(ul,'Latest stories','#journal');}
var details=cols[3],ext=document.createElement('div');ext.className='mar-footer-extra';
[['Our story','#about'],['Featured work','#portfolio'],['Back to top ↑','#top']].forEach(function(pair){var a=document.createElement('a');a.href=pair[1];a.textContent=pair[0];ext.appendChild(a);});details.appendChild(ext);
}}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();