exports.index = (req, res) => {
  return res.send("1");
};

exports.indexNew = (req, res) => {
  return res.json({
    message: "im fantastic oh yeah",
  });
};
