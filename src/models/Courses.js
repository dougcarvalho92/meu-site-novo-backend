const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const CoursesSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
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
    required: true,
  },
  endsAt: {
    type: Date,
    required: true,
  },
  certificate: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

CoursesSchema.plugin(mongoosePaginate);
mongoose.model("Courses", CoursesSchema);
