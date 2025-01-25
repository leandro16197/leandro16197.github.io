document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');


    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
    }


    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        navbar.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });



    document.getElementById('copyButton').addEventListener('click', function () {
        const emailInput = document.getElementById('emailInput');
        const emailValue = emailInput.value;
    

        navigator.clipboard.writeText(emailValue).then(() => {
            console.log('Correo copiado ');
        }).catch(err => {
            console.error('Error al copiar: ', err);
        });

        copyMessage.style.display = 'block';
        copyMessage.style.opacity = '1';

        setTimeout(function () {
            copyMessage.style.opacity = '0';
            setTimeout(function () {
                copyMessage.style.display = 'none';
            }, 400); 
        }, 3000);
    });
    


    const openCvButton = document.getElementById('openCvButton');


    openCvButton.addEventListener('click', function () {

        window.open('archivos/CV-Leandro-Ovejero-Desarrollador-Back-End.pdf', '_blank');
    });
    
})

function updateMainImage(element) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = element.src; 
    mainImage.alt = element.alt; 
}