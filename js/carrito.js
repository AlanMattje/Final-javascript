const pintarCarrito = () => {
    padreadentro.innerHTML = "";
    padreadentro.style.display= "flex";
    const adentro = document.createElement("div");
    adentro.className = "adentro"
    adentro.innerHTML = `
    <h1 class="adentro-titulo">Carrito</h1>
    `;
    padreadentro.append(adentro);

    const adentrobutton = document.createElement("h1");
    adentrobutton.innerText = "Salir";
    adentrobutton.className = "adentro-button"

    adentrobutton.addEventListener("click", () => {
        padreadentro.style.display = "none";
    });

    adentro.append(adentrobutton);

    carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "adentro-content"
    carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$ ${product.precio} </p>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total: $ ${product.cantidad * product.precio}</p>
        `;

        padreadentro.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "botoneliminar"
        carritoContent.append(eliminar);
        eliminar.addEventListener("click" , eliminarProducto);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const totalcarrito = document.createElement("div")
    totalcarrito.className = ("total-content");
    totalcarrito.innerHTML = `total a pagar: ${total} $`;
    adentro.append(totalcarrito);

};

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = () => {
    const Eliproduct = carrito.find((element) => element.id);
    
    carrito = carrito.filter((carritoID) => {
        return carritoID !== Eliproduct;
    });
    cantidaCarrito();
    saveLocal()
    pintarCarrito();
}

const cantidaCarrito = () => {
    cantidadcarrito.style.display = "block";
    const carritoguardar = carrito.length;
    localStorage.setItem("carritoguardar", JSON.stringify(carritoguardar)); 
    cantidadcarrito.innerText = JSON.parse(localStorage.getItem("carritoguardar"));
};
cantidaCarrito();