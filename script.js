document.addEventListener('DOMContentLoaded', () => {
    const containerPrincipal = document.querySelector('.Container-Principal');
    const ContainerReceitas = document.querySelector('.Container-Receitas')
    const ContainerEmagrecer = document.querySelector('.Container-EmagrecerTrinta')
    const Container_Perguntas = document.querySelector('.Container-Perguntas')
    const Texto_Principal = document.querySelector('.Texto')
    const Inicio = document.querySelector('#Inicio')
    const Receitas = document.querySelector('#Receitas')
    const Emagrecer = document.querySelector('#Emagrecer')
    const Perguntas = document.querySelector('#Perguntas')

    Texto_Principal.style.opacity = '0';




    setTimeout(() => {
        let opacity = 0;
        const interval = setInterval(() => {
            opacity += 0.05;
            Texto_Principal.style.opacity = opacity.toString();

            if (opacity >= 1) {
                clearInterval(interval);
            }
        }, 100); // Ajuste o tempo para suavidade desejada
    }, 1000); // Tempo de espera inicial de 3 segundos

    Inicio.addEventListener("click", () => {
        containerPrincipal.scrollIntoView({ behavior: "smooth" });
    });

    Receitas.addEventListener("click", () => {
        ContainerReceitas.scrollIntoView({ behavior: "smooth" });
    });

    Perguntas.addEventListener("click", () => {
        Container_Perguntas.scrollIntoView({ behavior: "smooth" });
    });

    Emagrecer.addEventListener("click", () => {
        ContainerEmagrecer.scrollIntoView({ behavior: "smooth" });
    });



});
/*
class MobileNavbar {
    constructor(mobileMenu, containerNav, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.containerNav = document.querySelector(containerNav);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        if (this.containerNav) {
            console.log("Toggling containerNav class");
            this.containerNav.classList.toggle(this.activeClass);
        }
        if (this.mobileMenu) {
            console.log("Toggling mobileMenu class");
            this.mobileMenu.classList.toggle(this.activeClass);
        }
        this.animateLinks();
    }

    addClickEvent() {
        if (this.mobileMenu) {
            console.log("Adding click event to mobileMenu");
            this.mobileMenu.addEventListener("click", this.handleClick);
        }
    }

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            console.log("DOM fully loaded and parsed");
            this.addClickEvent();
        });
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".Container-Nav",
    ".Container-Nav li"
);
mobileNavbar.init();
*/
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const ContainerNav = document.querySelector('.ContainerNav');

    mobileMenu.addEventListener('click', () => {
        // Adiciona ou remove a classe 'active' para mostrar/ocultar o menu
        ContainerNav.style.display = 'flex'
    });
});
function Calculadora() {
    const Altura = parseFloat(document.getElementById('Altura').value);
    const Peso = parseFloat(document.getElementById('Peso').value);
    const Mensagem = document.getElementById('Mensagem');

    if (isNaN(Peso) || isNaN(Altura)) {
        Mensagem.textContent = 'preencha todos os campos'
        return;
    }

    let imc = Peso / (Altura * Altura);

    if (imc < 17) {
        Mensagem.textContent = 'Voce está muito  abaixo do Peso !'
    } if (imc >= 17 && imc <= 18) {
        Mensagem.textContent = 'Voce esta abaixo do peso !'
    } if (imc > 18 && imc <= 24) {
        Mensagem.textContent = 'Voce esta no Peso ideal ! '
    } if (imc > 24 && imc <= 29) {
        Mensagem.textContent = 'Voce está acima do Peso!'
    } if (imc > 29 && imc <= 34) {
        Mensagem.textContent = 'Voce está com Obesidade I !'
    } if (imc > 34 && imc <= 39) {
        Mensagem.textContent = 'Voce está com Obesidade II !'
    } if (imc > 40) {
        Mensagem.textContent = 'Voce está com Obesidade III !'
    }

}

document.getElementById('Calcular').addEventListener('click', Calculadora);



function Indicacao_Exercicio() {
    const emagrecer = document.querySelector('.emagrecer');
    const engordar = document.querySelector('.engordar');
    const massa = document.querySelector('.massa-muscular')
    const ContainerExercicios = document.querySelector('.Container-Exercicios')
    const ContainerTreino = document.querySelector('.Container-Treino')


    document.addEventListener('DOMContentLoaded', () => {
        ContainerExercicios.style.display = 'none'
        ContainerTreino.style.display = 'none'

        emagrecer.addEventListener('click', () => {
            ContainerExercicios.style.display = 'flex'
            ContainerExercicios.scrollIntoView({ behavior: "smooth" });

        })

        engordar.addEventListener('click', () => {
            ContainerTreino.style.display = 'flex'
            ContainerTreino.scrollIntoView({ behavior: "smooth" });

        })

    })

}
Indicacao_Exercicio()


document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.getElementById('slideshow');
    const images = [
        'img/xzoQmc-removebg-preview.png',
        'img/img-mulher-fit-removebg-preview-removebg-preview.png',
        'img/abs-adult-athlete-1229356-removebg-preview.png'
    ];
    let currentImageIndex = 0;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideshow.src = images[currentImageIndex];
    }

    setInterval(changeImage, 3000); // Muda a imagem a cada 3 segundos
});

//iniciar exercicios

document.addEventListener('DOMContentLoaded' ,()=>{
const Iniciar = document.querySelector('.Iniciar-Exercicio')
const gifs = document.querySelector('.gifs')

gifs.style.display = 'none'
Iniciar.addEventListener('click', ()=>{
gifs.style.display = 'flex'
})
})


document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton = document.getElementById('resetButton');

    let timer;
    let seconds = 10;
    let isRunning = false;

    function updateTimerDisplay() {
        timerDisplay.textContent = seconds;
    }

    function startTimer() {
        if (isRunning) return;
        isRunning = true;

        timer = setInterval(() => {
            if (seconds <= 0) {
                clearInterval(timer);
                isRunning = false;
                timerDisplay.textContent = '0';
                return;
            }
            seconds--;
            updateTimerDisplay();
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    function resetTimer() {
        stopTimer();
        seconds = 10;
        updateTimerDisplay();
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});
