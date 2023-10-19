const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = registerForm.elements.nombre.value;
    const apellido = registerForm.elements.apellido.value;
    const correo = registerForm.elements.correo.value;
    const telefono = registerForm.elements.telefono.value;
    const nivel = registerForm.elements.nivel.value;
    alert(`Usuario ${nombre} ${apellido} registrado correctamente`)
    registerForm.reset();
});
