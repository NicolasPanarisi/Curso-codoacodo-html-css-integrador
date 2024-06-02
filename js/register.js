
document.addEventListener('DOMContentLoaded', ()=>{

const Form=document.querySelector('#RegisterForm');
const errorMenssaje=document.querySelector('#errormenssaje');


Form.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const apellido = document.querySelector("#apellido").value;
    const nombre = document.querySelector("#nombre").value;
    const password = document.querySelector("#contraseña").value;
    const repeatPassword = document.querySelector("#repetircontraseña").value;

    
    if(password.length < 4 || password.length >= 12){
         // Las contraseña debe ser mayor a 4 digitos y menor a 12
         document.querySelector("#errormenssaje").textContent = "Las contraseña debe ser mayor a 4 caracteres y menor a 12, para mayor seguridad.";
         return;                                      
    }
    if(nombre.length <= 3){
        // Las contraseña es menor a 4 digitos.
        document.querySelector("#errormenssaje").textContent = "el nombre debe ser mayor a 3 caracteres.";
        return;                                      
   }
   if(apellido.length <= 3){
    // Las contraseña es menor a 4 digitos.
    document.querySelector("#errormenssaje").textContent = "el apellido debe ser mayor a 3 caracteres.";
    return;     
}
    if (password !== repeatPassword) {
        // Las contraseñas no coinciden, mostramos un mensaje de error
        document.querySelector("#errormenssaje").textContent = "Las contraseñas no coinciden.";
       return;                                 
}
})                                          
 
})