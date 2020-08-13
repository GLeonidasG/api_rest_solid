import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { Route } from './routes';
import swaggerDocument from './swagger.json';
class App {
    app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( '/swagger', swaggerUi.serve ,swaggerUi.setup( swaggerDocument ) );
    }

    routes() {
        this.app.use( '/', Route );
    }

}

export default new App().app;