import path from 'path'
module.exports = {
    client: 'sqlite',
    connection:{
        filename: "/src/database/database.sqlite"
    },
    migrations:{
        directory: "/src/database/migrations"
    },
    useNullAsDefault: true,
}