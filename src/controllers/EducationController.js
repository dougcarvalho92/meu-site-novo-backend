const mongoose = require("mongoose");
const Educations = mongoose.model("Educations");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const educations = await Educations.paginate({}, { page, limit: 10 });

    return res.json(educations);
  },
  async show(req, res) {
    const education = await Educations.findById(req.params.id);

    return res.json(education);
  },
  async store(req, res) {
    //CRIAÇÃO
    const education = await Educations.create(req.body);
    return res.json(education);
  },
  async update(req, res) {
    const education = await Educations.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(education);
  },
  async destroy(req, res) {
    await Educations.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
