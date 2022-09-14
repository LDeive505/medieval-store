import express from 'express';
import * as productControllers from './controllers/productControllers';
import * as userControllers from './controllers/userControllers';
import * as orderControllers from './controllers/orderControllers';
import loginValidation from './middlewares/loginValidation';
import productValidation from './middlewares/productValidation';
import 'express-async-errors';
import userValidation from './middlewares/userValidation';

const app = express();

app.use(express.json());

app.post('/products', productValidation, productControllers.createProduct);
app.get('/products', productControllers.getAllProducts);

// users 

app.post('/users', userValidation, userControllers.createUser);

// orders

app.get('/orders', orderControllers.getAllOrders);

app.post('/login', loginValidation, userControllers.login);

export default app;
