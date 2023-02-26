const mensaje = document.querySelector('#mensaje');
const changeBtn = document.querySelector("#changeBtn");

const mensajes = ['Eres la persona mas increible del mundo',
'La mas tierna',
'La mas cariñosa',
'Esos ojitos son mi mundo',
'Las cosas en el momento no son color de rosa pero estare junto a ti siempre', 
'Siempre tratas de mostrar una sonrisa al mundo',
'Y es la sonrisa mas inspiradora que hay', 
'Eres la persona que me genera tantas ganas de demostrar amor',
'Siempre quiero cantarte', 'Tratando de hacerte feliz'];

let currentMensaje = 0;

changeBtn.addEventListener("click", changeMensaje());

function changeMensaje(){
    mensaje.textContent = mensajes[currentMensaje];
    currentMensaje = (currentMensaje + 1)% mensajes.length;
}