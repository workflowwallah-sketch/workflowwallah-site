document.documentElement.classList.remove("no-js");
(function(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els=document.querySelectorAll('.reveal');
  if(reduce||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});}
  else{var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}})},{threshold:.12});els.forEach(function(e){io.observe(e)});}
  var r=document.querySelector('.rotate');if(!r||reduce)return;
  var words=r.getAttribute('data-words').split('|'),w=0,i=words[0].length,del=true;
  function tick(){var word=words[w];
    if(del){i--;r.textContent=word.slice(0,i);if(i===0){del=false;w=(w+1)%words.length;}setTimeout(tick,45);}
    else{i++;r.textContent=words[w].slice(0,i);if(i===words[w].length){del=true;setTimeout(tick,1800);}else setTimeout(tick,85);}}
  setTimeout(tick,1800);
})();
