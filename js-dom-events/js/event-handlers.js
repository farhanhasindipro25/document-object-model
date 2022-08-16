function handleOnClick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handled by function attached on onclick attribute';
}

document.getElementById('event-listener').addEventListener('click',function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by addEventListener button';
});

document.getElementById('btn-update').addEventListener('click',function(){
    console.log('Update Button Clicked');
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const inputTextDisplay = document.getElementById('input-text-display');
    inputTextDisplay.innerText = inputText;
    inputField.value = '';
});