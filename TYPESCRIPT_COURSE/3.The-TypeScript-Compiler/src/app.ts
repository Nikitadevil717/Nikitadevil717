const userName = 'Maximilian';

console.log(userName);

const button = document.querySelector('button');

// @ts-ignore
function add(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    // return;
}

function clickHandler(message: string) {
    // let userName = 'Nikita';
    console.log('Clicked! ' + message);
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'hello'));
}