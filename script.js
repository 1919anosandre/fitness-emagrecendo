document.addEventListener('DOMContentLoaded', () => {
    const containerPrincipal = document.querySelector('.Container-Principal');
    const ContainerReceitas = document.querySelector('.Container-Receitas')
    const ContainerEmagrecer = document.querySelector('.Container-EmagrecerTrinta')
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
});

