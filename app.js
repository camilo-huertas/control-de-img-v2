let delante = document.getElementById("delante");
let atras = document.getElementById("atras");
let imagen = document.getElementById("imagen");
let imagenes =[
  "/imagenes/html.jpg",
  "/imagenes/css.jpg",
  "/imagenes/bootstrap.jpg",
  "/imagenes/logo-git.jpg"
]
let enlaces = [
    ""
]
let conteo = 0;
/* control de boton derecha */
let prev = () =>{
    if(conteo == 4){
        conteo = 4;
    }else{
        if(conteo == 0){
            imagen.src=imagenes[0];
        }else if(conteo == 1){
            imagen.src=imagenes[1];
        }else if(conteo == 2){
            imagen.src=imagenes[2];
        }else if(conteo == 3){
            imagen.src=imagenes[3];
        }
        conteo +=1;
    }
}
delante.addEventListener("click", prev);
/* control de boton izquierda */
let atr = ()=>{
    if(conteo == 0){
        conteo = 0;
    }else{
        if(conteo == 4){
            imagen.src=imagenes[2]; 
        }else if(conteo == 3){
            imagen.src=imagenes[1];
        }else if(conteo == 2){
             imagen.src=imagenes[0];
        }else if(conteo == 1){
            imagen.src="/imagenes/javascript.png";
       }
    conteo-=1;
    }
}
atras.addEventListener("click", atr);