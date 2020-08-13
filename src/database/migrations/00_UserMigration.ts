import knex from "knex";

const up = async ( knex: knex ) => {
    return await knex.schema.createTableIfNotExists( 'users', ( table ) => {
        table.string( 'id' ).primary();
        table.string( 'name' ).notNullable();
        table.string( 'email' ).unique().notNullable();
        table.string( 'password' ).notNullable();
    } );
};
const down = async ( knex: knex ) => {
    return await knex.schema.dropTableIfExists( 'users' );
};

export { up, down };