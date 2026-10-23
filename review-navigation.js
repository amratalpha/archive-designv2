
(()=>{
 const ar=document.documentElement.lang==='ar', prefix=ar?'ar-':'';
 function go(id){location.href=prefix+id+'.html'}
 function note(){let n=document.getElementById('review-note');if(!n){n=document.createElement('div');n.id='review-note';n.className='toast';n.setAttribute('role','status');document.body.append(n)}n.textContent=ar?'هذه صفحة لمراجعة التصميم. استخدم النموذج التفاعلي لتجربة الإجراءات.':'Design review page. Open the interactive prototype to try workflow actions.';clearTimeout(window.reviewNoteTimer);window.reviewNoteTimer=setTimeout(()=>n.remove(),4000)}
 document.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;const a=b.dataset.action;
 if(a.startsWith('nav.'))return go(a.slice(4)==='library'?'policies':a.slice(4));
 if(a.startsWith('navLib.'))return go(a.slice(7));
 if(a==='signOut')return location.href='../START.html';
 if(a.endsWith('.open'))return go(b.closest('.sec-home,.sec-approvals')?'task':'document');
 if(a==='capBack')return go('capture');
 if(b.tagName==='BUTTON'||b.classList.contains('rowbtn'))note();
 });
 document.addEventListener('change',e=>{if(e.target.name==='lang'){let file=location.pathname.split('/').pop().replace(/^ar-/,'');location.href=(e.target.value==='ar'?'ar-':'')+file}});
 document.querySelectorAll('input[data-action="setQ"],input[data-action="setTermQ"]').forEach(input=>input.addEventListener('input',()=>{let q=input.value.toLowerCase();document.querySelectorAll('tbody tr').forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(q))}));
 document.querySelectorAll('.gitem').forEach(b=>b.title=b.innerText.trim());
 const screenId=location.pathname.split('/').pop().replace(/^ar-/,'').replace('.html',''); const prototypeQuery=['policies','contracts','corr'].includes(screenId)?'library&library='+screenId:screenId;
 const bar=document.createElement('div');bar.className='review-bar';bar.innerHTML='<a href="../START.html">'+(ar?'فهرس التصميم':'Design index')+'</a><span>·</span><a href="../index.html?page='+prototypeQuery+'">'+(ar?'النموذج التفاعلي':'Interactive prototype')+'</a>';document.body.append(bar);
})();
