import axios from 'axios';

export default async function handler(req, res) {
  const { id } = req.query;
  let response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  let blog=response.data
  res.status(200).json({blog:blog})
}