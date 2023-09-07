const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    slack_name: String,
    current_day: String,
    utc_time: String,
    track: String,
    github_file_url: String,
    github_repo_url: String,
    status_code: Number,
  },
  { timestamps: true }
);

const TaskOne = mongoose.model('Hngtask', taskSchema);
module.exports = TaskOne;
