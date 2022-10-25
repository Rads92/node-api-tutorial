const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  bodyPart: {
    type: String,
    required: true,
  },
  public: {
    type: Boolean,
  },
});
module.exports = mongoose.model("Exercise", exerciseSchema);
