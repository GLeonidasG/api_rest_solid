import { connection } from "../../database/db";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class SqliteUserRepository implements IUserRepository {

    async findByEmail( email: string ) {
        try {
            const user = await connection<User>( 'users' ).select( '*' )
                .where( 'email', email ).first();
            return user;
        } catch ( error ) {
            console.error( error );
        }
    }
    async save( user: User ) {
        try {
            await connection<User>( 'users' ).insert( {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
            } );
        } catch ( error ) {
            console.error( error );
        }
    }
}