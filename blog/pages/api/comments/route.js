import axios from 'axios';

export default async function handler(req, res) {
  const { id } = req.query;
  console.log("comments id: ",id)
  let response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  let comments=response.data
  console.log("comments: ",comments.comments)
  res.status(200).json({comments:comments})
}