const mongoose = require("mongoose");
const { ENUMS_TYPES } = require("../constants/enumsTypes");
const Schema = mongoose.Schema;

const enumSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ENUMS_TYPES,
    required: true,
  },
});

enumSchema.index({ name: 1, type: 2 }, { unique: true });

module.exports = mongoose.model("Enum", enumSchema);
