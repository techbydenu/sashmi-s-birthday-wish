const btn=document.getElementById('openBtn');
const letter=document.getElementById('letter');

btn.addEventListener('click',()=>{
  letter.classList.remove('hidden');
  btn.textContent='🤍 Happy Birthday Manikha 🤍';
  btn.disabled=true;
  for(let i=0;i<28;i++) setTimeout(createHeart,i*90);
});

function createHeart(){
 const h=document.createElement('div');
 h.className='heart';
 h.textContent=['🤍','💗','✨','🎈'][Math.floor(Math.random()*4)];
 h.style.left=Math.random()*100+'vw';
 h.style.animationDuration=(4+Math.random()*4)+'s';
 h.style.fontSize=(14+Math.random()*18)+'px';
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),8500);
}
setInterval(createHeart,1200);
