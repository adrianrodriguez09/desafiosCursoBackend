class ProductMananger {
    constructor(products) {
      this.products = products;
    }
    addProduct = (title, description, price, thumbnail, stock) => {
      if ((title, description, price, thumbnail, stock)) {
        if (this.products.length > 0) {
          let idParaProducto = this.products[this.products.length - 1].id + 1;
          let nuevoProducto = {
            id: idParaProducto,
            title,
            description,
            price,
            thumbnail,
            stock,
          };
          this.products.push(nuevoProducto);
        } else {
          let nuevoProducto = {
            id: 1,
            title,
            description,
            price,
            thumbnail,
            stock,
          };
          this.products.push(nuevoProducto);
        }
      } else {
        console.log(`Porfavor agrega todos los detalles del producto`);
      }
    };
    getProduct = () => {
      if (this.products.length > 0) {
        console.log(this.products);
      } else {
        console.log(`No hay ningún producto en la empresa`);
      }
    };
    getProductById = (id) => {
      if (this.products.length > 0) {
        let mostrarProducto = this.products.find((product) => product.id == id);
        mostrarProducto?console.log(mostrarProducto):console.log(`Not Found, producto no encontrado`)
      } else {
        console.log(`No hay ningún producto en la empresa`);
      }
    };
  }
  
  let productos = [];
  const productosEnEmpresa = new ProductMananger(productos);
  
  module.exports.products=productosEnEmpresa;