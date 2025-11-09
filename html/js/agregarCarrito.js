let totalsuma =0;
let to = document.getElementById('total');
to.textContent = "Total: $ "+ totalsuma;
function agregarElemento()  {
    const carrito = document.getElementById('ulli');
    const nuevo = document.createElement('li');
    const precio = document.createElement('h2');
    
    precio.textContent =100;

    nuevo.textContent = "nuevo" ;
    nuevo.appendChild(precio);
    carrito.appendChild(nuevo);
    totalsuma+=parseInt(precio.textContent);

    to.textContent = "Total: $ "+ totalsuma;
}

function comprar(){
    Swal.fire({
        title: "Lista",
        text: "Compra hecha",
        icon: "success"
    });
}

function cerrar(){
    const carrito = document.getElementById('ulli');
    const to = document.getElementById('total');
    totalsuma=0;
    carrito.innerHTML='';
    to.innerHTML="Total: $ "+'';

}