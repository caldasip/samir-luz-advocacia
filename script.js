  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.15, rootMargin:'0px 0px -60px 0px'});
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  function setNavOpen(open){
    mobileNav.classList.toggle('open', open);
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open);
    navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    mobileNav.setAttribute('aria-hidden', !open);
    document.body.classList.toggle('nav-open', open);
  }
  navToggle.addEventListener('click', () => setNavOpen(!mobileNav.classList.contains('open')));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setNavOpen(false)));
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') setNavOpen(false); });

  // ATENÇÃO: este formulário ainda NÃO envia a mensagem para lugar nenhum.
  // Antes de publicar o site, troque este bloco por uma integração real,
  // por exemplo Formspree, Web3Forms ou um endpoint próprio (fetch + POST).
  // Exemplo com Formspree:
  //   const res = await fetch('https://formspree.io/f/SEU_ID', {
  //     method:'POST', body:new FormData(form), headers:{Accept:'application/json'}
  //   });
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = 'Mensagem enviada. Entraremos em contato em breve.';
    status.classList.remove('err');
    status.classList.add('ok');
    form.reset();
  });

