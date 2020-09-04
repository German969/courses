import comments from '../comments.json'

export default (req, res) => {
  console.log(req.method);
  console.log(req.cookies);
  res.status(200).json({ post: req.query.id, comments })
}