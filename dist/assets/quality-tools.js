document.addEventListener('DOMContentLoaded',()=>{
  const levelForm=document.querySelector('[data-level-checker]');
  if(levelForm){
    levelForm.addEventListener('submit',event=>{
      event.preventDefault();
      const data=new FormData(levelForm);
      const result=levelForm.querySelector('[data-tool-result]');
      const letters=data.get('letters');
      const joining=data.get('joining');
      const mushaf=data.get('mushaf');
      const focus=data.get('focus');
      let title='Start with a live reading assessment';
      let copy='Your answers do not create a reliable level yet. A tutor should listen to a short reading sample before recommending a course.';
      let link='/free-assessment/';
      let linkText='Book the free assessment';
      if(letters==='no'){
        title='Suggested starting point: Noorani Qaida foundation';
        copy='Begin with Arabic letter recognition, sounds, short vowels and simple joining. The tutor can skip skills you already control.';
        link='/courses/noorani-qaida/';linkText='Review the Noorani Qaida course';
      }else if(joining==='no'||mushaf==='no'){
        title='Suggested starting point: Qaida review or guided Quran reading';
        copy='You may need a short joining and vowel review before regular Mushaf reading. A live assessment will show whether a full Qaida course is necessary.';
        link='/courses/quran-reading/';linkText='Review Quran reading classes';
      }else if(focus==='tajweed'){
        title='Suggested starting point: practical Tajweed correction';
        copy='You appear ready to read from the Mushaf. The next useful step may be live correction of makharij, common rules, stopping and repeated recitation errors.';
        link='/courses/tajweed/';linkText='Review Tajweed classes';
      }else if(focus==='hifz'){
        title='Suggested starting point: memorization readiness assessment';
        copy='A tutor should first check reading accuracy, current memorized portions and revision strength before setting Sabaq, Sabaqi and Manzil amounts.';
        link='/courses/quran-memorization/';linkText='Review the Hifz course';
      }else{
        title='Suggested starting point: guided Quran reading and fluency';
        copy='Your answers suggest that regular reading practice with live correction may be more useful than restarting from the alphabet.';
        link='/courses/quran-reading/';linkText='Review Quran reading classes';
      }
      result.innerHTML=`<h3>${title}</h3><p>${copy}</p><p><a href="${link}">${linkText}</a></p><p class="planner-note">This private self-check stays in your browser and is educational guidance, not a formal placement result.</p>`;
      result.dataset.visible='true';
      result.focus();
    });
  }

  const practiceForm=document.querySelector('[data-practice-planner]');
  if(practiceForm){
    practiceForm.addEventListener('submit',event=>{
      event.preventDefault();
      const data=new FormData(practiceForm);
      const days=Math.max(2,Math.min(7,Number(data.get('days')||5)));
      const minutes=Math.max(10,Math.min(60,Number(data.get('minutes')||20)));
      const goal=String(data.get('goal')||'reading');
      const level=String(data.get('level')||'beginner');
      const labels=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
      const goalNames={qaida:'Qaida accuracy',reading:'Quran reading fluency',tajweed:'Tajweed application',hifz:'Memorization and revision'};
      const warm=Math.max(2,Math.round(minutes*.2));
      const main=Math.max(5,Math.round(minutes*.55));
      const review=Math.max(3,minutes-warm-main);
      let rows='';
      for(let i=0;i<days;i++){
        const focus=i===days-1?'Weekly review and note questions for the tutor':`${goalNames[goal]} practice at ${level} level`;
        rows+=`<tr><td>${labels[i]}</td><td>${warm} min: repeat the last correction</td><td>${main} min: ${focus}</td><td>${review} min: slow self-check</td></tr>`;
      }
      const out=practiceForm.querySelector('[data-planner-output]');
      out.innerHTML=`<h3>Your ${days}-day practice plan</h3><div class="comparison-wrap"><table class="planner-table"><thead><tr><th>Day</th><th>Warm-up</th><th>Main practice</th><th>Close</th></tr></thead><tbody>${rows}</tbody></table></div><p class="planner-note">Keep the tutor's current correction and assigned portion as the final guide. Reduce the amount when accuracy drops; do not rush only to complete minutes.</p>`;
      out.dataset.visible='true';
    });
  }

  const hifzForm=document.querySelector('[data-hifz-planner]');
  if(hifzForm){
    hifzForm.addEventListener('submit',event=>{
      event.preventDefault();
      const data=new FormData(hifzForm);
      const days=Math.max(3,Math.min(7,Number(data.get('days')||6)));
      const minutes=Math.max(20,Math.min(120,Number(data.get('minutes')||45)));
      const stage=String(data.get('stage')||'active');
      const labels=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
      let split=stage==='new'? [.45,.3,.25] : stage==='revision'? [.15,.35,.5] : [.3,.35,.35];
      let rows='';
      for(let i=0;i<days;i++){
        const rest=i===days-1;
        rows+=`<tr><td>${labels[i]}</td><td>${rest?'No new portion; correct weak lines':Math.round(minutes*split[0])+' min: teacher-set new portion'}</td><td>${Math.round(minutes*split[1])} min: recent lessons</td><td>${Math.round(minutes*split[2])} min: older revision</td><td>${rest?'Weekly error review':'Record repeated errors'}</td></tr>`;
      }
      const out=hifzForm.querySelector('[data-hifz-output]');
      out.innerHTML=`<h3>Your revision framework</h3><div class="comparison-wrap"><table class="planner-table"><thead><tr><th>Day</th><th>Sabaq</th><th>Sabaqi</th><th>Manzil</th><th>Note</th></tr></thead><tbody>${rows}</tbody></table></div><p class="planner-note">This tool divides available time; it does not decide how many lines or pages you should memorize. Your teacher should set the actual portions after listening to accuracy and recall.</p>`;
      out.dataset.visible='true';
    });
  }

  document.querySelectorAll('[data-checklist]').forEach(list=>{
    const boxes=[...list.querySelectorAll('input[type="checkbox"]')];
    const status=list.querySelector('[data-checklist-status]');
    const update=()=>{const done=boxes.filter(box=>box.checked).length;status.textContent=`${done} of ${boxes.length} preparation items checked`;};
    boxes.forEach(box=>box.addEventListener('change',update));update();
  });

  document.querySelectorAll('[data-print-page]').forEach(button=>button.addEventListener('click',()=>window.print()));
});
