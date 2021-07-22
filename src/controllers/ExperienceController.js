const mongoose = require('mongoose');
const Experiences = mongoose.model('Experiences');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const experiences = await Experiences.sort({ endsAt: -1 })
      .paginate({}, { page, limit: 10 })
      .then();

    return res.json(experiences);
  },
  async show(req, res) {
    const experience = await Experiences.findById(req.params.id);

    return res.json(experience);
  },
  async store(req, res) {
    //CRIAÇÃO
    const experience = await Experiences.create(req.body);
    return res.json(experience);
  },
  async update(req, res) {
    const experience = await Experiences.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    return res.json(experience);
  },
  async destroy(req, res) {
    await Experiences.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
