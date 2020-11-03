const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const SkillsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

SkillsSchema.plugin(mongoosePaginate);
mongoose.model("Skills", SkillsSchema);
