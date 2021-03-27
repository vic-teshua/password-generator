const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';

// generate random number
function getRandomInt(num) {
    return Math.floor((Math.random() * num) + 1);
};

// upper case every nth element in arr
function everyNth(arr, nth) {
    let newArr = [...arr];

    for(let i = 0; i < newArr.length; i++) {
        if(i % nth === 0) newArr[i] = newArr[i].toUpperCase();
    };
    
    return newArr;
};

// create new array for password
function generateArr(numLength, charArr) {
    return [...Array(numLength)].map(() => charArr[getRandomInt(charArr.length - 1)]);
};

// main working function
function generatePassword(numLength, mixedCase) {
    let charArr = charset.split('');
    let charrArrUp = everyNth(charArr, 3);

    return !mixedCase 
        ? generateArr(numLength, charArr).join('') 
        : generateArr(numLength, charrArrUp).join('');
};

// DOM Manipulation
let form = document.forms.i;
let display = document.querySelector('.displayPass');

// submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let userNum = +form.num.value;
    let ifUpCase = form.check.checked;

    userNum > 25 
        ? display.innerHTML = 'TOO LONG!' 
        : display.innerText = generatePassword(userNum, ifUpCase);
});

