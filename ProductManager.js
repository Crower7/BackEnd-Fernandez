const fs = require("fs");

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


async updateById ({ id, ...product }) {
  await this.deleteById(id);

    let oldProduct = await this.getProducts () ;

    let updatedProduct = [{ id, ...product }, ...oldProduct];
      await fs.writeFile (this.path, JSON.stringify(updatedProduct),"utf8");
}

async deleteByld(id) {

  let products = await fs.readFile(this.path,"utf8");

  let allProducts = JSON.parse(products);

  let deletedProduct = allProducts.filter ((product) => product.id !== id)
    await fs.writeFile (this.path,JSON.stringify (deletedProduct),"utf8");

  console. log ("Producto eliminado");
  console.log (deletedProduct);

  }
}

const product = new ProductManager ();
product.addProduct (
"Pantalon Cargo",
"Pantalon de gabardina elastizada",
200,
"Sin imagen",
"1234",
88
);