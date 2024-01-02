// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
export default async function handler(req, res) {
    let response=await axios.get("https://jsonplaceholder.typicode.com/posts")
    let blogs=response.data
    res.status(200).json(blogs)
  }
  