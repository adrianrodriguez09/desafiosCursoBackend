const use = require("./logica.js");

//TODO --> USE.PRODUCTS PARA PODER ACCEDER AL MODULO DE LOGICA Y ASÍ PODER ACCEDER A SUS MÉTODOS

//* Agregar productos --> use.products.addProduct(titulo,descripción,precio,imagen,stock)

use.products.addProduct(
  "Mochila roja",
  `Para llevar todo lo que quieras,pero con una mochila roja`,
  500,
  "https://static.dafiti.com.ar/p/jansport-9733-76539-1-product.jpg",
  50
);
use.products.addProduct(
  "Mochila azul",
  `Para llevar todo lo que quieras,pero con una mochila azul`,
  700,
  "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/671976.jpg",
  20
);

//* Ver todos los productos -->  use.products.getProduct()
use.products.getProduct();

//* Buscar producto por id --> use.products.getProductById(id)
use.products.getProductById(2);