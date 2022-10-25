const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enumSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["BodyPart", "UserType"],
    required: true,
  },
});

enumSchema.index({ name: 1, type: 2 }, { unique: true });

module.exports = mongoose.model("Enum", enumSchema);
