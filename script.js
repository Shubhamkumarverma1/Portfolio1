 const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Typing effect for role
  const roles = ['Software Engineer','Full Stack Engineer', 'Web Developer', 'AI Enthusiast', 'Problem Solver'];
  let ri = 0, ci = 0, deleting = false;
  const roleEl = document.querySelector('.hero-role');

  function typeRole() {
    const current = roles[ri];
    const displayed = deleting ? current.slice(0, ci--) : current.slice(0, ci++);
    roleEl.innerHTML = displayed + '<span class="cursor"></span>';

    if (!deleting && ci > current.length) {
      deleting = true;
      setTimeout(typeRole, 1800);
    } else if (deleting && ci < 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
      ci = 0;
      setTimeout(typeRole, 400);
    } else {
      setTimeout(typeRole, deleting ? 50 : 80);
    }
  }

  typeRole();