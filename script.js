const elColorInput = document.querySelector('.color-input');
const elColorText = document.querySelector('.color-text');
const elCopyBtn = document.querySelector('.js-copy-btn');

elColorInput.addEventListener('input', function(){
    elColorText.textContent = elColorInput.value
    document.body.style.backgroundColor = `${elColorInput.value}`
})
elCopyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(elColorText.textContent)
})