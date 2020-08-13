import express from 'express';
import { createUserController } from './useCases/CreateUser';
const Route = express.Router();

Route.post( '/users', ( request, response ) => {
    try {
        return createUserController.handle( request, response );

    } catch ( error ) {
        return response.status( 400 ).send( { message: error.message } );
    }
} );

export { Route };