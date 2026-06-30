(function(){
  function tick(){var n=new Date();var t=n.toLocaleTimeString('tr-TR',{hour:'2-digit',minute:'2-digit',timeZone:'Europe/Istanbul'});var e=document.getElementById('clock');if(e)e.textContent=t;}
  tick();setInterval(tick,15000);
  var mb=document.getElementById('menuBtn'),mn=document.getElementById('mobnav');
  if(mb&&mn)mb.addEventListener('click',function(){
    var open=mn.classList.toggle('open');
    mb.setAttribute('aria-expanded',open?'true':'false');
  });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  }else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});}
})();
