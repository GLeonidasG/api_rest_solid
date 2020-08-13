import express from 'express';
import cors from 'cors';
import { Route } from './routes';
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
    }

    routes() {
        this.app.use( '/', Route );
    }

}

export default new App().app;