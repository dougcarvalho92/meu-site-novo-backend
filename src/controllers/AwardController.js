const mongoose = require("mongoose");
const Awards = mongoose.model("Awards");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const awards = await Awards.paginate({}, { page, limit: 10 });

    return res.json(awards);
  },
  async show(req, res) {
    const award = await Awards.findById(req.params.id);

    return res.json(award);
  },
  async store(req, res) {
    //CRIAÇÃO
    const award = await Awards.create(req.body);
    return res.json(award);
  },
  async update(req, res) {
    const award = await Awards.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(award);
  },
  async destroy(req, res) {
    await Awards.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
