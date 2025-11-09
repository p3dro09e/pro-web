let listaProductos = JSON.parse(sessionStorage.getItem("listaProductos")) || [];
function guardar(event) {
    try {
        const producto = event.target.closest(".producto");
        
        if (!producto) {
            console.error("No se encontró el elemento .producto");
            return;
        }
        
        // Buscar el nombre - ajusta el selector según tu HTML
        const nombreElement = producto.querySelector(".nombre") || 
                             producto.querySelector(".Nproducto") ||
                             producto.querySelector("h3") ||
                             producto.querySelector("[class*='nombre']");
        
        const numSpan = producto.querySelector(".num");
        
        if (!nombreElement || !numSpan) {
            console.error("No se encontró nombre o precio", {
                nombre: nombreElement,
                precio: numSpan
            });
            return;
        }
        
        const nombre = nombreElement.textContent.trim();
        const precio = Number(numSpan.textContent);
        
        let dic = { 
            nombre: nombre,
            precio: precio
        };
        
        listaProductos.push(dic);

        sessionStorage.setItem("listaProductos", JSON.stringify(listaProductos));

        console.log("Producto guardado:", dic);
        console.log("Lista completa:", listaProductos);       
    } catch (error) {
        console.error("Error en guardar:", error);
    }
}

function mostrarenelcarrito(event){
    let productosGuardados = JSON.parse(sessionStorage.getItem("listaProductos"));
}