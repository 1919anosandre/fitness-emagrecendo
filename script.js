document.addEventListener('DOMContentLoaded', () => {
    const containerPrincipal = document.querySelector('.Container-Principal');
    const ContainerReceitas = document.querySelector('.Container-Receitas')
    const ContainerEmagrecer = document.querySelector('.Container-EmagrecerTrinta')
    const ContainerExercicio = document.querySelector('.Container-Exercicios')

    const Inicio = document.querySelector('#Inicio')
    const Receitas = document.querySelector('#Receitas')
    const Emagrecer = document.querySelector('#Emagrecer')
    const Exercicio = document.querySelector('#Exercicio')

    containerPrincipal.style.opacity = '0';




    setTimeout(() => {
        let opacity = 0;
        const interval = setInterval(() => {
            opacity += 0.05;
            containerPrincipal.style.opacity = opacity.toString();

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

    Exercicio.addEventListener("click", () => {
        ContainerExercicio.scrollIntoView({ behavior: "smooth" });
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

const Calcular = document.getElementById('Calcular');

function IMC(){
    const Peso = parseFloat(document.getElementById('Peso').value);
    const Altura = parseFloat(document.getElementById('Altura').value);
    const Mensagem = document.getElementById('Mensagem');

    if(isNaN(Peso) || isNaN(Altura) || Peso <= 0 || Altura <= 0 ){
        Mensagem.textContent = 'Preencha todos os campos corretamente';
        return;
    }

    const ValorIMC = Peso / (Altura * Altura);
    let classificacao = '';

    if (ValorIMC < 18.5) {
        classificacao = 'abaixo do peso';
    } else if (ValorIMC >= 18.5 && ValorIMC <= 24.9) {
        classificacao = 'com peso ideal';
    } else if (ValorIMC >= 25 && ValorIMC <= 29.9) {
        classificacao = 'acima do peso';
    } else {
        classificacao = 'com uma classificação não comum';
    }

    Mensagem.textContent = `Você está pesando ${Peso}kg, seu IMC é ${ValorIMC.toFixed(2)} e você está ${classificacao}`;
}

Calcular.addEventListener('click', IMC);

function Evento_Rolagem(){
const Container_Perguntas = document.querySelector('.Container-Perguntas');
const Container_Posicao = Container_Perguntas.getBoundingClientRect().top;
const screen_Position = window.innerHeight / 1.3;

if(Container_Posicao < screen_Position){
Container_Perguntas.classList.add('visible');
}
}
document.addEventListener('DOMContentLoaded' , Evento_Rolagem);
document.addEventListener('scroll' , Evento_Rolagem);

function Indicacao_Exercicio(){
const emagrecer = document.querySelector('.emagrecer');
const engordar = document.querySelector('.engordar');
const massa = document.querySelector('.massa-muscular')
const ContainerExercicios = document.querySelector('.Container-Exercicios')

}
