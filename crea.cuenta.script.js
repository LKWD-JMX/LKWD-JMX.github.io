document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Lógica de validación simple (puedes ajustarla según tu backend)
    if (username && email && password) {
        message.textContent = 'Registro exitoso. ¡Bienvenido!';
        message.style.color = 'green';
        // Aquí podrías redirigir al usuario o hacer otra acción
    } else {
        message.textContent = 'Por favor, completa todos los campos.';
        message.style.color = 'red';
    }
});
