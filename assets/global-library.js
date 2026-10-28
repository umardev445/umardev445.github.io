document.addEventListener('DOMContentLoaded',()=>{
 const ur=document.documentElement.lang.startsWith('ur');
 const search=document.querySelector('[data-library-search]');
 const category=document.querySelector('[data-library-category]');
 const cards=[...document.querySelectorAll('[data-library-item]')];
 if(search){
  const normalize=s=>s.toLocaleLowerCase().normalize('NFKC').replace(/[\u064B-\u065F\u0670]/g,'').replaceAll('ي','ی').replaceAll('ك','ک').trim();
  const filter=()=>{const q=normalize(search.value),cat=category?.value||'all';let count=0;
   for(const card of cards){const show=(!q||normalize(card.dataset.keywords+' '+card.textContent).includes(q))&&(cat==='all'||card.dataset.category===cat);card.hidden=!show;if(show)count++;}
   const status=document.querySelector('[data-library-count]'),empty=document.querySelector('[data-library-empty]');
   if(status)status.textContent=`${count} ${ur?'موضوعات':'topics'}`;if(empty)empty.hidden=count!==0;
  };search.addEventListener('input',filter);category?.addEventListener('change',filter);filter();
 }
 document.querySelectorAll('[data-library-print]').forEach(b=>b.addEventListener('click',()=>window.print()));
 let size=32;
 document.querySelectorAll('[data-arabic-size]').forEach(b=>b.addEventListener('click',()=>{size=Math.max(24,Math.min(48,size+Number(b.dataset.arabicSize)*2));document.documentElement.style.setProperty('--arabic-size',size+'px');}));
 const checks=[...document.querySelectorAll('[data-study-check]')],status=document.querySelector('[data-study-status]');
 const progress=()=>{if(status)status.textContent=`${checks.filter(c=>c.checked).length} / ${checks.length} ${ur?'مکمل':'completed'}`;};
 checks.forEach(c=>c.addEventListener('change',progress));
 document.querySelector('[data-study-reset]')?.addEventListener('click',()=>{checks.forEach(c=>c.checked=false);progress();});progress();
 document.querySelectorAll('.library-article table').forEach(t=>{if(t.parentElement.classList.contains('table-scroll'))return;const wrap=document.createElement('div');wrap.className='table-scroll';wrap.tabIndex=0;wrap.setAttribute('role','region');wrap.setAttribute('aria-label',t.caption?.textContent||(ur?'جدول':'Table'));t.parentNode.insertBefore(wrap,t);wrap.appendChild(t);});
});
