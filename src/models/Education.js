const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const EducationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  startsAt: {
    type: String,
    required: true,
  },
  endsAt: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

EducationSchema.plugin(mongoosePaginate);
mongoose.model("Educations", EducationSchema);
