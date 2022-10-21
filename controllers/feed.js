const getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First post", content: "this is the first post" }],
  });
};

const postPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "Post created successfully",
    posts: { id: new Date(), title, content },
  });
};

module.exports = {
  getPosts,
  postPost,
};
