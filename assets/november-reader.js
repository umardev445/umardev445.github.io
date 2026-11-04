document.addEventListener('DOMContentLoaded',()=>{
 const ur=document.documentElement.lang.startsWith('ur');
 document.querySelectorAll('[data-reader-toggle]').forEach(button=>{
  const kind=button.dataset.readerToggle;
  const items=[...document.querySelectorAll(kind==='meaning'?'[data-reader-meaning]':'[data-reader-translit]')];
  button.addEventListener('click',()=>{
   const shown=button.getAttribute('aria-pressed')==='true';items.forEach(item=>item.hidden=shown);
   button.setAttribute('aria-pressed',String(!shown));
   button.textContent=ur?(kind==='meaning'?(shown?'مفہوم دکھائیں':'مفہوم چھپائیں'):(shown?'رومن مدد دکھائیں':'رومن مدد چھپائیں')):(shown?'Show ':'Hide ')+(kind==='meaning'?'meanings':'transliteration');
  });
 });
 let printState=[];
 window.addEventListener('beforeprint',()=>{printState=[...document.querySelectorAll('details')].map(item=>[item,item.open]);printState.forEach(([item])=>item.open=true);});
 window.addEventListener('afterprint',()=>{printState.forEach(([item,open])=>item.open=open);printState=[];});
});
