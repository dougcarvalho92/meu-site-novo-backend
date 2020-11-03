const mongoose = require("mongoose");
const Courses = mongoose.model("Courses");

module.exports = {
  async index(req, res) {
    try {
      const { page = 1, limit = 6, search = "" } = req.query;
      let reg = new RegExp(search, "gi");
      const courses = await Courses.paginate(
        { name: reg },
        {
          page,
          limit,
          sort: { endsAt: -1 },
        }
      );
      return res.json(courses);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async show(req, res) {
    const course = await Courses.findById(req.params.id);

    return res.json(course);
  },
  async store(req, res) {
    //CRIAÇÃO
    const course = await Courses.create(req.body);
    return res.json(course);
  },
  async update(req, res) {
    const course = await Courses.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(course);
  },
  async destroy(req, res) {
    await Courses.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
