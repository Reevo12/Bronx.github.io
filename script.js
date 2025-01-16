console.log('scripr berhasil terhubung');
const navv = document.getElementById('nav-isi');
const op = document.getElementById('open');
const cl = document.getElementById('close');
const body = document.body;


function OpenMenu() {
  navv.style.display = 'block';
  op.style.display = 'none';
  cl.style.display = 'block';
  body.classList.add('no-scroll');
}

function CloseMenu() {
  navv.style.display = 'none';
  op.style.display = 'block';
  cl.style.display = 'none';
  body.classList.remove('no-scroll');
}

function Login() {
  alert('Comming Soon...');
}

function Dc() {
  window.location.href = 'https://discord.com/invite/PhQgVFVfMC';
}