// Menú móvil
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  })
);

// Testimonios
const slides = document.querySelectorAll('#slider blockquote');
const dotsBox = document.getElementById('dots');
let current = 0;
let timer;

slides.forEach((_, i) => {
  const b = document.createElement('button');
  b.setAttribute('aria-label', 'Testimonio ' + (i + 1));
  b.addEventListener('click', () => { show(i); restart(); });
  dotsBox.appendChild(b);
});

function show(i) {
  current = i;
  slides.forEach((s, n) => s.classList.toggle('active', n === i));
  dotsBox.querySelectorAll('button').forEach((d, n) => d.classList.toggle('on', n === i));
}
function restart() {
  clearInterval(timer);
  timer = setInterval(() => show((current + 1) % slides.length), 6000);
}
show(0);
restart();

// Formulario: abre el correo del usuario con el mensaje
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent('Consulta web de ' + f.nombre.value);
  const body = encodeURIComponent(f.mensaje.value + '\n\n' + f.nombre.value + ' (' + f.email.value + ')');
  window.location.href = 'mailto:info@melisaworkoutsourcing.com?subject=' + subject + '&body=' + body;
  document.getElementById('ok').hidden = false;
});

// Año del pie de página
document.getElementById('year').textContent = new Date().getFullYear();
