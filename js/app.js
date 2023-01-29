
const ContenidoCarrito = document.getElementById("ContenidoCarrito");
const verCarrito = document.getElementById("verCarrito");
const padreadentro = document.getElementById("padreadentro");
const cantidadcarrito = document.getElementById("cantidadcarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img scr="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="prince">${product.precio} $</p>
    `;

    ContenidoCarrito.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        const repetir = carrito.some((repetirproducto) => repetirproducto.id === product.id)

        if (repetir){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        } else { 
        carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
            });
        }
        cantidaCarrito();
        saveLocal();
    })
});

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

