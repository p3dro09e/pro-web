function aumenta(event){
    const producto = event.target.closest(".producto");
    const numSpan = producto.querySelector(".num");
  
    let cantidad = Number(numSpan.textContent);
    cantidad+=cantidad;
    numSpan.textContent = cantidad

    sessionStorage.setItem(producto.querySelector(".Nproducto").textContect, cantidad);
}

///// carrito