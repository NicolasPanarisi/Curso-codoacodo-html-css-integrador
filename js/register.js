
document.addEventListener('DOMContentLoaded', () => {
    const Form = document.querySelector('#RegisterForm');

    Form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const emailIngresado = event.target.email.value;
        const passwordIngresado = event.target.password.value;

        const url = "http://localhost:8080/users";
        const userData = {
            email: emailIngresado,
            password: passwordIngresado
        };

        const response = await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            console.log("USUARIO CREADO CON ÉXITO...");
        } else {
            console.error("ERROR AL CREAR EL USUARIO");
        }
    });
});