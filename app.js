import express from 'express';
import { ProductManager } from '../src/ProductManager.js';

const app = express();
const PORT = 8080;

const miObjeto = new ProductManager(); 

app.get('/products', (req, res) => {
    const products = miObjeto.getProducts();
    const limit = parseInt(req.query.limit);
  
    if (!Number.isNaN(limit)) {
      const limitedProducts = [];
      for (let i = 0; i < limit && i < products.length; i++) {
        limitedProducts.push(products[i]);
      }
      res.send(limitedProducts);
    } else {
      res.send({...products});
    }
  });

  app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = miObjeto.getProductById(productId);
  
    if (product) {
      res.send(product);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  });
  


app.listen(PORT,()=>{
    console.log(`server run on port: ${PORT}`);
})


miObjeto.addProduct('auto','auto increible',1000,'ruta-de-imagen.jpg',1,3);

miObjeto.addProduct('moto','moto chica', 500,'ruta-de-imagen-2',2,2);

miObjeto.addProduct('bici', 'bici roja', 200, 'ruta-de-imagen-3',3,5);

miObjeto.addProduct('triciclo', 'triciclo rojo', 
300, 'ruta-de-imagen-4',4,2);

miObjeto.addProduct('cuatriciclo', 'cuatriciclo rojo', 500, 'ruta-de-imagen-5',5,3);

miObjeto.addProduct('guantes', 'guantes rojos', 50, 'ruta-de-imagen-6',6,3);

miObjeto.addProduct('casco', 'casco rojo', 150, 'ruta-de-imagen-7',7,5);

miObjeto.addProduct('aceite', 'aceite premium', 10, 'ruta-de-imagen-8',8,1);

miObjeto.addProduct('ruedas', 'ruedas de moto', 100, 'ruta-de-imagen-9',9,2);

miObjeto.addProduct('piloto', 'piloto de lluvia para moto', 300, 'ruta-de-imagen-10',10,3);

