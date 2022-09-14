import express from 'express';
import * as productControllers from './controllers/productControllers';
import * as userControllers from './controllers/userControllers';
import * as orderControllers from './controllers/orderControllers';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.post('/products', productControllers.createProduct);
app.get('/products', productControllers.getAllProducts);

// users 

app.post('/users', userControllers.createUser);

// orders

app.get('/orders', orderControllers.getAllOrders);

export default app;
