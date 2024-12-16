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
