function showPassword(){
    const eye = document.getElementById('eye');
    const eyeClose = document.getElementById('close-eye');
    const fieldPassword = document.getElementById('field-password');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeClose.style.display = 'none';
        fieldPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeClose.style.display = 'block';
        fieldPassword.type = 'password';
    }
};

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    alert('Você já está logado!');
});