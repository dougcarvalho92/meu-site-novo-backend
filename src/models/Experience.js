const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ExperienceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  startsAt: {
    type: Date,
    default: Date.now(),
  },
  endsAt: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  description:{
    type: String,
    required: true,
  }
});

ExperienceSchema.plugin(mongoosePaginate);
mongoose.model("Experiences", ExperienceSchema);
