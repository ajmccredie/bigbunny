// Interactions: nav toggle, header transparency, scroll reveal
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  function updateHeader(){
    if(document.body.classList.contains('has-hero')){
      const top = window.scrollY || window.pageYOffset;
      if(top > 12){ document.body.classList.add('scrolled'); }
      else{ document.body.classList.remove('scrolled'); }
    }
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, {passive:true});

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    for(const e of entries){
      if(e.isIntersecting){ e.target.classList.add('in-view'); observer.unobserve(e.target); }
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
