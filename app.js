(function(){
'use strict';
const root=document.documentElement;
const theme=document.getElementById('theme');
const language=document.getElementById('lang');
const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
const get=(key)=>{try{return localStorage.getItem(key)}catch{return null}};
const save=(key,value)=>{try{localStorage.setItem(key,value)}catch{}};
function setTheme(value){
 const light=value==='light';root.dataset.theme=light?'light':'dark';
 theme.textContent=light?'☾':'☀';theme.setAttribute('aria-pressed',String(light));
 theme.setAttribute('aria-label',light?'Ativar modo escuro':'Ativar modo claro');
 save('magnum-theme',light?'light':'dark');
}
function setLanguage(value){
 const en=value==='en';root.lang=en?'en':'pt-BR';
 document.querySelectorAll('[data-en]').forEach(el=>{
  if(!el.hasAttribute('data-pt'))el.setAttribute('data-pt',el.textContent);
  el.textContent=en?el.getAttribute('data-en'):el.getAttribute('data-pt');
 });
 language.textContent=en?'PT':'EN';
 language.setAttribute('aria-label',en?'Mudar para português':'Switch to English');
 document.title=en?'Magnum Benevides — Development, Data & Technology':'Magnum Benevides — Desenvolvimento, Dados & Tecnologia';
 save('magnum-language',en?'en':'pt');
}
setTheme(get('magnum-theme')==='light'?'light':'dark');
setLanguage(get('magnum-language')==='en'?'en':'pt');
theme.addEventListener('click',()=>setTheme(root.dataset.theme==='light'?'dark':'light'));
language.addEventListener('click',()=>setLanguage(root.lang==='en'?'pt':'en'));
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 const filter=button.dataset.filter;
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 document.querySelectorAll('.project').forEach(card=>{card.hidden=filter!=='all'&&!card.dataset.category.split(' ').includes(filter)});
}));
document.getElementById('copy').addEventListener('click',async()=>{
 const status=document.getElementById('copy-status');
 try{if(!navigator.clipboard)throw Error('clipboard unavailable');await navigator.clipboard.writeText('magnumbenevides@gmail.com');status.textContent=root.lang==='en'?'Email copied!':'E-mail copiado!'}
 catch{status.textContent=root.lang==='en'?'Copy the email address above manually.':'Copie manualmente o endereço de e-mail acima.'}
});
document.getElementById('year').textContent=new Date().getFullYear();
})();
