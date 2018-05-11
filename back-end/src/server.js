import express from 'express';
import bodyParser from 'body-parser';
import { port } from 'config';
import { initControllers } from './controllers';
import middlewares from './middlewares';
import './models';

const app = express();
const router = express.Router();
const {
  identityMiddleware,
  notFoundMiddleware,
  errorMiddleware
} = middlewares;

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

app.use(identityMiddleware);
app.use(router);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

initControllers(router);
console.log(port);
app.listen(port);
