// BOTÃO HAMBURGUER 
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () =>{
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// BOTÃO HAMBURGUER END


// BACK TO TOP
const toTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("ativado");
  } else {
    toTop.classList.remove("ativado");
  }
})
// BACK TO TOP END



//  ROLAR SCROLL E MUDAR COR DO HEADER
const cabecalho = document.querySelector("header");
function activeScroll(){
    cabecalho.classList.toggle('ativo', scrollY > 80);
}
 window.addEventListener('scroll', activeScroll);
//  ROLAR SCROLL E MUDAR COR DO HEADER END


// section select
// seçao select
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('ul a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('ative');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('ative');
    }
  });
});
// seçao select

// section select end



// copiar numero de telefone do footer ao clicar
var link = document.getElementById('meuLink');

link.addEventListener('click', function(e) {
    e.preventDefault();

    var textoTemporario = document.createElement('textarea');
    textoTemporario.value = link.textContent;
    document.body.appendChild(textoTemporario);

    textoTemporario.select();

    document.execCommand('copy');

    document.body.removeChild(textoTemporario);

    alert('Texto copiado para a área de transferência: ' + link.textContent);
});
// copiar numero de telefone do footer ao clicar end

