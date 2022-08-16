// Option 2: onclick

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// Option 3: onclick
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// Option 4: onclick
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// Option 5: addEventListener
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click',makeGreen);

function makeGreen(){
    document.body.style.backgroundColor = 'lawngreen';
}

// Option 6: addEventListener
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',function makePink(){
    document.body.style.backgroundColor = 'pink';
});

// Option 7: onclick
document.getElementById('make-orange').addEventListener('click',function makeOrange(){
    document.body.style.backgroundColor = 'tomato';
});