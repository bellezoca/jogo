document.addEventListener('DOMContentLoaded', () => {
    const question = document.getElementById('question');
    const result = document.getElementById('result');
    const figures = document.querySelectorAll('.figure');
    
    const questions = [
        { text: 'Clique na semínima', answer: 'semínima' },
        { text: 'Clique na mínima', answer: 'mínima' },
        { text: 'Clique na semibreve', answer: 'semibreve' },
        { text: 'Clique na colcheia', answer: 'colcheia' },
        { text: 'Clique na pausa de semínima', answer: 'pausa semínima' },
        { text: 'Clique na pausa de mínima', answer: 'pausa mínima' },
        { text: 'Clique na pausa de semibreve', answer: 'pausa semibreve' },
        { text: 'Clique na pausa de colcheia', answer: 'pausa colcheia' }
    ];
    
    let currentQuestionIndex = 0;

    function showQuestion() {
        question.textContent = questions[currentQuestionIndex].text;
    }

    figures.forEach(figure => {
        figure.addEventListener('click', () => {
            const selectedFigure = figure.getAttribute('data-name');
            if (selectedFigure === questions[currentQuestionIndex].answer) {
                result.textContent = 'Correto!';
                currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
                setTimeout(() => {
                    result.textContent = '';
                    showQuestion();
                }, 1000);
            } else {
                result.textContent = 'Errado! Tente novamente.';
                setTimeout(() => {
                    result.textContent = '';
                }, 1000);
            }
        });
    });

    showQuestion();
});
