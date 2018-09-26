var generateMessage = () => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

module.exports = { generateMessage };