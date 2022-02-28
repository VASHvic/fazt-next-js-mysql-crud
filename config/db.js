import {createPool} from  'mysql2/promise';

const pool = createPool ({
  host: 'localhost',
  user: 'root',
  password: 'mypassword',
  port: 3308,
  database: 'productsdb'
})

export {pool};