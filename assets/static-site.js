document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.menu-trigger').forEach(button=>{
    const header=button.closest('header');
    if(!header)return;
    let panel=header.querySelector('.static-mobile-nav');
    if(!panel){
      panel=document.createElement('div');
      panel.className='static-mobile-nav';
      panel.hidden=true;
      const urdu=document.documentElement.lang.toLowerCase().startsWith('ur');
      panel.innerHTML=urdu
        ? '<nav aria-label="موبائل رہنمائی" dir="rtl"><a href="/ur/courses/">کورسز</a><a href="/tutors/">اساتذہ</a><a href="/pricing/">فیس</a><a href="/ur/resources/">رہنمائی</a><a href="/child-safety/">بچوں کا تحفظ</a><a href="/ur/contact/">رابطہ</a><a class="button" href="/ur/contact/">مفت جائزہ</a></nav>'
        : '<nav aria-label="Mobile navigation"><a href="/courses/">Courses</a><a href="/tutors/">Tutors</a><a href="/pricing/">Pricing</a><a href="/locations/">Locations</a><a href="/resources/">Resources</a><a href="/blog/">Blog</a><a href="/about/">About</a><a class="button" href="/free-assessment/">Free assessment</a></nav>';
      header.appendChild(panel);
    }
    button.addEventListener('click',()=>{
      const opening=panel.hidden;
      panel.hidden=!opening;
      button.setAttribute('aria-expanded',String(opening));
      button.setAttribute('aria-label',opening?'Close menu':'Open menu');
    });
  });
  document.querySelectorAll('[data-slot="accordion-trigger"]').forEach(button=>{
    const item=button.closest('[data-slot="accordion-item"]');
    const content=item&&item.querySelector('[data-slot="accordion-content"]');
    if(!content)return;
    content.hidden=true;
    content.style.display='none';
    button.addEventListener('click',()=>{
      const opening=content.hidden;
      content.hidden=!opening;
      content.style.display=opening?'block':'none';
      button.setAttribute('aria-expanded',String(opening));
      button.dataset.state=opening?'open':'closed';
      content.dataset.state=opening?'open':'closed';
    });
  });
});
