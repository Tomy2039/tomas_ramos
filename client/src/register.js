// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ

// obtener formulario para el registro
const $form = document.getElementById("register-form");

// añadir un evento de submit al formulario
$form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData($form);

    const entries = Object.fromEntries(formData.entries());

    fetch("http://localhost:4321/auth/sign-up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(entries),
    }).then((response) => {
        if (response.ok) {
            window.location.href = "http://localhost:4321/auth/sign-in"
        } else {
            alert("error al registrarse");
        }
    })
})
import "./style.css";
