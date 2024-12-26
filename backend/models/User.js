const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: function () {
      return !this.image;
    },
  },
  image: {
    type: String, // URL or file path of the image
    required: function () {
      return !this.message;
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Announcement", AnnouncementSchema);
