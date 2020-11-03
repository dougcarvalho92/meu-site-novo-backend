const mongoose = require("mongoose");
const Skills = mongoose.model("Skills");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const skills = await Skills.paginate({}, { page, limit: 10 });

    return res.json(skills);
  },
  async show(req, res) {
    const skill = await Skills.findById(req.params.id);

    return res.json(skill);
  },
  async store(req, res) {
    //CRIAÇÃO
    const skill = await Skills.create(req.body);
    return res.json(skill);
  },
  async update(req, res) {
    const skill = await Skills.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(skill);
  },
  async destroy(req, res) {
    await Skills.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
