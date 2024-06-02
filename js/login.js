document.addEventListener('DOMContentLoaded', ()=>{

    const Form=document.querySelector('#LoginForm');
    const errorMenssaje=document.querySelector('#errormenssajeLogin');

Form.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const email = document.querySelector("#emailLogin").value;
    const password = document.querySelector("#contraseñaLogin").value;
    

    if(email.length <= 3){
        // Las contraseña es menor a 4 digitos.
        document.querySelector("#errormenssajeLogin").textContent = "El email debe ser mayor a 3 caracteres.";
        return;                                      
   }
   if(password.length <= 3){
    // Las contraseña es menor a 4 digitos.
    document.querySelector("#errormenssajeLogin").textContent = "La contraseña debe ser mayor a 3 caracteres.";
    return;     
}
})                                          
})