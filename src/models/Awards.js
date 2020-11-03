const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const AwardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

AwardsSchema.plugin(mongoosePaginate);
mongoose.model("Awards", AwardsSchema);
