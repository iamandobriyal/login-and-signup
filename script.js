


var btn = document.querySelector('.btn3');
var text = document.querySelector('.text');
btn.addEventListener('click',function(){

    let password = document.querySelector('#password').value;
    if(password.length < 8)
    {
        text.textContent = "Enter a longer password";
    }
    else
    {
        text.textContent = "";
    }
});