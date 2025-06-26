function clic() {
    const input = document.getElementById('input');
    const chat = document.getElementById('chat');
    const message = input.value.trim().toLowerCase();

    if (message === '') return;


    const you = document.createElement('div');

    let newArr = ''
    let countSymbol = 0;
    for (let i = 0; i < message.length; i++) {
        newArr += message[i]
        countSymbol++;
        if (countSymbol == 45) {
            newArr += '<br>'
            countSymbol = 0
        }
    }
    you.innerHTML = newArr;
    you.className = 'msg user';

    chat.appendChild(you);


    setTimeout(() => {
        const bot = document.createElement('div');
        if (message === 'привет' ) {
            bot.textContent = 'Привет!';
        }
        else if (message.includes('что ?')) {
            bot.textContent = 'да';
        }
        else if (message.includes('кто величайший ?')) {
            bot.textContent = 'это вы';
        }

        else if (message.includes('соедените с оператором' && 'оператор')) {
            bot.textContent = 'оставьте ваш имеел и мы свяжемся с вами';
        }

        else {
            bot.textContent = 'Я пока не знаю, как на это ответить';
        }
        bot.className = 'msg bot';
        chat.appendChild(bot);
        chat.scrollTop = chat.scrollHeight;
    }, 600);


    input.value = '';
    chat.scrollTop = chat.scrollHeight;
}


