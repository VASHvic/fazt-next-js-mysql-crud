import {pool} from '../../../config/db';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return await getProduct(req, res);
      break;
    case 'DELETE':
      return await deleteProduct(req, res);
    case 'PUT':
      return await updateProduct(req, res);
    default:
      return console.log('Something unexpected');
  }
}

const getProduct = async (req, res) => {
  const {id} = req.query;
  const [result] = await pool.query('select * from product where id = ?', [id]);
  return res.status(200).json(result[0]);
};

const deleteProduct = async (req, res) => {
  const {id} = req.query;
  const [result] = await pool.query('delete from product where id = ?', [id]);
  return res.status(204).json();
};

const updateProduct = async (req, res) => {
  const {id} = req.query;
  const {name, description, price} = req.body;
  try {
    await pool.query('update product set name=?, description= ?, price=? where id= ?', [
      name,
      description,
      price,
      id,
    ]);
    return res.status(204).json();
  } catch (err) {
    console.log(err);
  }
};
