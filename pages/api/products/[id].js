export default function handler(req,res) {
  return res.status(200).json(`getting  product ${req.query.id}`)
}