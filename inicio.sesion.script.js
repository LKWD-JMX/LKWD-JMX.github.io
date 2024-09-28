document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Validación simple (puedes cambiar la lógica según tu backend)
    if (username === 'admin' && password === '12345') {
        message.textContent = '¡Bienvenido!';
        message.style.color = 'green';
        // Redirigir a otra página o realizar otra acción
    } else {
        message.textContent = 'Usuario o contraseña incorrectos';
        message.style.color = 'red';
    }
});

// Función para manejar inicio de sesión con Google
document.getElementById('googleBtn').addEventListener('click', function() {
    // Aquí iría la lógica para iniciar sesión con Google
    alert('Iniciar sesión con Google (aquí iría la lógica)');
});

// Función para manejar inicio de sesión con Facebook
window.fbAsyncInit = function() {
    FB.init({
        appId      : 'TU_APP_ID_DE_FACEBOOK',
        cookie     : true,
        xfbml      : true,
        version    : 'v10.0'
    });
};

document.getElementById('fbBtn').addEventListener('click', function() {
    FB.login(function(response) {
        if (response.authResponse) {
            alert('Bienvenido, has iniciado sesión con Facebook.');
            // Aquí iría la lógica para manejar la sesión
        } else {
            alert('El usuario canceló el inicio de sesión.');
        }
    }, {scope: 'public_profile,email'});
});
