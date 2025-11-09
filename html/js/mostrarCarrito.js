// Función para mostrar productos al cargar la página
let listaProductoss = JSON.parse(sessionStorage.getItem("listaProductos")) || [];
function cargarProductos() {
    let productosGuardados = JSON.parse(sessionStorage.getItem("listaProductos")) || [];
    const ul = document.getElementById("ulli");
    const totalH2 = document.getElementById("total");

    ul.innerHTML="";
    
    if(productosGuardados.length ==0){
        ul.innerHTML="<li>No hay productos en el carrito</li>"
        totalH2.textContent="Total: $0.00"
        return;
    } 
    
    let total =0;

    //crear un item de la lista
    productosGuardados.forEach((producto, index) => {
        total +=producto.precio;

        const li = document.createElement("li");
        li.innerHTML=`
            <strong>${producto.nombre}</strong> <br> $${producto.precio.toFixed(2)}
            <button id="borrar" onclick="eliminarProducto(${index})">X</button>
        `;
        ul.appendChild(li);
    });
    totalH2.textContent=`Total: $${total.toFixed(2)}`;
}

// Función para eliminar un producto
function eliminarProducto(index) {
    let productosGuardados = JSON.parse(sessionStorage.getItem("listaProductos")) || [];
    productosGuardados.splice(index, 1);
    sessionStorage.setItem("listaProductos", JSON.stringify(productosGuardados));
    cargarProductos(); // Recargar la lista
}

// Función agregar (si la necesitas)
function agregarElemento() {
    alert("Función agregar - ¿Qué debe hacer?");
}

// Función comprar
function comprar() {
    let productosGuardados = JSON.parse(sessionStorage.getItem("listaProductos")) || [];
    
    if (productosGuardados.length === 0) {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay productos en el carrito",
        });
        return;
    }
    
        Swal.fire({
            title: "Lista",
            text: "Compra hecha",
            icon: "success"
        });
        sessionStorage.setItem("listaProductos", JSON.stringify(listaProductoss));
    
    // Limpiar carrito después de comprar
    sessionStorage.removeItem("listaProductos");
    cargarProductos();
}

// Función cerrar
function cerrar() {
    window.close(); // Cierra la ventana
    // O si quieres redirigir:
    // window.location.href = "tienda.html";
}

// ✅ Cargar productos cuando la página cargue
window.addEventListener('DOMContentLoaded', cargarProductos);