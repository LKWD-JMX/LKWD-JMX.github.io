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
        // window.location.href = 'dashboard.html';
    } else {
        message.textContent = 'Usuario o contraseña incorrectos';
        message.style.color = 'red';
    }
});
