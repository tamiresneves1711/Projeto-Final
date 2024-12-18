// Adicionar funcionalidade ao site de turismo

// Scroll suave ao clicar nos links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Mensagem de confirmação ao enviar o formulário de contato
const contatoForm = document.querySelector('form');

contatoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Obrigado por entrar em contato! Em breve retornaremos sua mensagem.');

    // Aqui você pode adicionar lógica para enviar os dados do formulário via AJAX, se necessário
    contatoForm.reset();
});

function translateParagraph(button) {
    const paragraph = button.previousElementSibling; // Encontra o parágrafo acima do botão
    const currentLang = document.documentElement.lang === 'pt-BR' ? 'en' : 'pt-BR'; // Determina o idioma atual
    document.documentElement.lang = currentLang; // Atualiza o atributo de idioma global

    // Alterna o texto entre português e inglês
    paragraph.textContent = currentLang === 'pt-BR' 
        ? paragraph.getAttribute('data-lang-pt') 
        : paragraph.getAttribute('data-lang-en');

    // Atualiza o texto do botão
    button.textContent = currentLang === 'pt-BR' ? 'Translate' : 'Traduzir';
}
