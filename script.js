document.addEventListener('DOMContentLoaded', () => {
    const question = document.getElementById('question');
    const result = document.getElementById('result');
    const figures = document.querySelectorAll('.figure');

    figures.forEach(figure => {
        figure.addEventListener('click', () => {
            const selectedFigure = figure.getAttribute('data-name');
            if (selectedFigure === 'semínima') {
                result.textContent = 'Correto! Você clicou na semínima.';
            } else {
                result.textContent = 'Errado! Tente novamente.';
            }
        });
    });
});
