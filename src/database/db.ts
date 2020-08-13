import knex from "knex";
import path from 'path';
const connection = knex( {
    client: "sqlite",
    connection: {
        filename: "src/database/database.sqlite"
    },
    migrations: {
        directory: "src/database/migrations"
    },
    useNullAsDefault: true,
} );

export { connection };