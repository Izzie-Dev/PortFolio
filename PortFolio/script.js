const projects = [
  { id: '01', name: 'The Secret Place', category: 'film', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=80' },
  { id: '02', name: 'Origin Brand Film', category: 'branding', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80' },
  { id: '03', name: 'Live Worship Session', category: 'social', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1400&q=80' },
  { id: '04', name: 'Founders Portrait Story', category: 'film', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1400&q=80' }
];

const services = [
  ['bi-broadcast', 'Live Streaming', 'Multi-platform live events with polished broadcast direction.'],
  ['bi-camera-video', 'Video Production', 'Concept-to-delivery cinematic productions for digital and TV.'],
  ['bi-camera2', 'Photography', 'Editorial and commercial visual storytelling with signature tone.'],
  ['bi-megaphone', 'Social Media Management', 'Content strategy, publishing, and community building that scales.'],
  ['bi-vector-pen', 'Branding', 'Identity systems and creative positioning for premium differentiation.'],
  ['bi-stars', 'Creative Direction', 'Art direction and campaign leadership from brief to launch.']
];

const projectGrid = document.getElementById('projectGrid');
const serviceCards = document.getElementById('serviceCards');
const navbar = document.getElementById('mainNav');

function renderProjects(filter = 'all') {
  projectGrid.innerHTML = '';
  projects.filter(p => filter === 'all' || p.category === filter).forEach(p => {
    projectGrid.innerHTML += `<div class="swiper-slide"><article class="project-card"><img src="${p.image}" loading="lazy" alt="${p.name}"><div class="meta"><small>${p.id} • ${p.category}</small><h5>${p.name}</h5></div></article></div>`;
  });
}

services.forEach(([icon, title, description]) => {
  serviceCards.innerHTML += `<div class="col-md-6" data-aos="fade-up"><article class="service-card"><i class="bi ${icon}"></i><h4 class="mt-3">${title}</h4><p class="mb-0">${description}</p></article></div>`;
});

renderProjects();
new Swiper('.project-swiper', { slidesPerView: 1, spaceBetween: 20, pagination: { el: '.swiper-pagination', clickable: true }, breakpoints: { 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } } });

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderProjects(e.target.dataset.filter);
  });
});

AOS.init({ duration: 900, once: false });
gsap.registerPlugin(ScrollTrigger);
gsap.from('.hero-title', { y: 90, opacity: 0, duration: 1.1, ease: 'power3.out' });
gsap.from('.hero-subtitle', { y: 36, opacity: 0, delay: 0.2, duration: 1 });
gsap.utils.toArray('.service-card, .about-wrap, .latest-card').forEach(el => {
  gsap.from(el, { y: 40, opacity: 0, duration: 0.9, scrollTrigger: { trigger: el, start: 'top 85%' } });
});

window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 30));
window.addEventListener('load', () => setTimeout(() => document.getElementById('loader').style.display = 'none', 700));

document.addEventListener('mousemove', e => {
  const dot = document.querySelector('.cursor-dot');
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.querySelectorAll('.counter').forEach(counter => {
  gsap.to(counter, {
    innerText: counter.dataset.target,
    duration: 2,
    snap: { innerText: 1 },
    scrollTrigger: { trigger: counter, start: 'top 95%' }
  });
});
