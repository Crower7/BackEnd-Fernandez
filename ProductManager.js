class ProductManager {
    constructor() {
        this.products = [];
    }
    
    addProduct(title, description, price, thumbnail, code, stock) {
        const productoExistente = this.products.find((element) => {
          return element.code == code
        })
        if (!productoExistente) { // si es false se ejecuta el codigo del if
          const product = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
          }

          this.products.push(product);
          console.log ("El producto a sido agregado correctamente")
        }
      }
    

    getProducts() {
      return this.products;
    }

    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        return product;
      } else {
        console.log("Not found");
      }
    }
}