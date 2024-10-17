let main = document.createElement('div');
let forms = document.createElement('div');
let title = document.createElement('span');
let form = document.createElement('form');
let input = document.createElement('input');
let ball = document.createElement('div');
let output = document.createElement('input');

main.classList.add('main');
forms.classList.add('form');
title.classList.add("title");
ball.classList.add('ball');
output.id = "answer";
output.readOnly = true;

document.body.appendChild(main);
main.appendChild(forms);
forms.appendChild(title);
forms.appendChild(form);
form.appendChild(input);
form.appendChild(ball);
form.appendChild(output);

input.type = "input";
title.textContent = "Шар долі";
input.addEventListener('keydown', function (event) { if (event.key === 'Enter') { event.preventDefault(); answer(); } });
ball.onclick = () => answer();

let array = [
    "Так, безперечно",
    "Це вирішено",
    "Безсумнівно",
    "Можеш на це розраховувати",
    "Як я бачу, так",
    "Скоріш за все",
    "Перспективи добрі",
    "Так",
    "Знаки вказують на так",
    "Відповідь туманна, спробуй знову",
    "Запитай пізніше",
    "Зараз не можу сказати",
    "Сконцентруйся і запитай знову",
    "Не варто розраховувати на це",
    "Моя відповідь – ні",
    "Мої джерела кажуть ні",
    "Перспективи не дуже",
    "Дуже сумнівно",
    "Краще спитайте у Давиденко",
    "Не питай мене, я звідки знаю",
    "Ну, якось так...",
    "Можливо, але краще не ризикувати",
    "Не питай мене, я всього лиш куля",
    "Ти точно хочеш це знати?",
    "Я б на твоєму місці передумав",
    "Не сьогодні",
    "Запитай у Google",
    "Щось я втомився, давай завтра",
    "О, ти серйозно?"
];

function answer() {
    let i = Math.floor(Math.random() * array.length);
    let answer = array[i];
    output.value = answer;
};