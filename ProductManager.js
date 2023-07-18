import fs from 'fs'

/* const fs = require ('fs'); 
 */

const dirName = './archivo-creado' ;
const fileName = dirName + '/prueba.txt';



class ProductManager {
  constructor (){
    this.products = [];      
    this.id = 1;
    this.path = dirName;
  } 

  addProduct(title,description,price,thumbnail,code,stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log('Error: Todos los campos son obligatorios');
      return;
    }
    const producto = {
      id: this.id++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    }

    const productoExistente = this.products.find(product => product.code === code);
    if (productoExistente) {
      console.log('El código del producto ya existe');
      return;
    }

    this.products.push(producto);
  }; 



  getProducts () {

    const writeFile = async (json) =>{

      try {
        
        await fs.promises.writeFile(fileName, json);

      } catch (error) {

        console.log('no se pudo escribir el archivo');
      }

    }

    writeFile(JSON.stringify(this.products));

    

    function readProducts(fileName){
      fs.readFile(fileName, 'utf-8', (err, data) => {
        if (err) throw new Error('no se pudo leer el archivo');

       // console.log(data);

      });
    }
    readProducts(fileName);

    return this.products;

/*     console.log(this.products);
 */

  };



  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    return product;
  }
  


  updateProduct(id ,title, description, price, thumbnail,code,stock) {

    const resultado = this.products.findIndex(product => product.id === id);

      this.products[resultado]= {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    }

/*     console.log(this.products);
 */

  }
  

  deleteProduct(id){
      const resultado = this.products.findIndex(product => product.id === id);

      if (resultado !== -1) {
        this.products.splice(resultado, 1);
      }
      else{
        console.log('producto no encontrado');
      }
  }
}

const items = new ProductManager();

const createFile = async (path) => {
  try {
    
    await fs.promises.mkdir(path, {recursive:true});

  } catch (error) {

    console.log('no se puedo crear el archivo');    
    
  }

  
  }
  createFile(items.path);


/* items.addProduct('auto','auto increible',1000,'ruta-de-imagen.jpg',2,3);

items.addProduct('moto','moto chica', 500,'ruta-de-imagen-2',1,2);

items.addProduct('bici', 'bici roja', 200, 'ruta-de-imagen-3',3,5); */




/* items.addProduct(product2);
items.addProduct(product3); */



/* items.getProducts();
 */

/* items.getProductById(1);
items.getProductById(5);
items.getProductById(8); */


/* items.updateProduct(1,'auto actualizado','auto increible actualizado',1500,'ruta-de-imagen-actualizada.jpg',2,3); */


/* items.deleteProduct(2);
items.deleteProduct(5); */


items.getProducts();




export {ProductManager}; 
  