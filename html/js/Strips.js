function aumenta(event) {
    const producto = event.target.closest(".producto");
    const numSpan = producto.querySelector(".num");
    let cantidad = Number(numSpan.textContent);
    
    // Guardar el precio original en un data attribute la primera vez
    if (!producto.dataset.precioOriginal) {
        producto.dataset.precioOriginal = cantidad;
    }
    
    const precioOriginal = Number(producto.dataset.precioOriginal);
    cantidad += precioOriginal;
    
    numSpan.textContent = cantidad;
    sessionStorage.setItem(producto.querySelector(".Nproducto").textContent, cantidad);
}

function disminuir(event) {
    const producto = event.target.closest(".producto");
    const numSpan = producto.querySelector(".num");
    let cantidad = Number(numSpan.textContent);
    
    // Obtener el precio original guardado
    const precioOriginal = Number(producto.dataset.precioOriginal || numSpan.textContent);
    
    // Solo disminuir si la cantidad actual es mayor que el precio original
    if (cantidad > precioOriginal) {
        cantidad -= precioOriginal;
    } else {
        cantidad = precioOriginal; // Volver al mínimo
    }
    
    numSpan.textContent = cantidad;
    sessionStorage.setItem(producto.querySelector(".Nproducto").textContent, cantidad);
}

///// carrito