const expressAsyncHandler = require('express-async-handler');

const taskOneController = expressAsyncHandler(async (req, res) => {
  try {
    const { slack_name, track } = req?.query;
    const daysOfTheWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const getDay = new Date().getDay();
    const current_day = daysOfTheWeek[getDay];
    console.log(current_day);

    const utc_time = new Date().toISOString();

    if (!slack_name || !track) {
      return res
        .status(400)
        .json({ error: 'Both slac_name and track are required.' });
    }

    const responase = {
      slack_name: slack_name,
      current_day,
      track: track,
      utc_time: utc_time,
      github_file_url: '',
      github_repo_url: '',
      status_code: res.statusCode,
    };

    res.status(200).json(responase);
  } catch (error) {
    res.status(500).json(error?.message);
  }
});

module.exports = taskOneController;

// date.toISOString();

// {
//   "slack_name": "example_name",
//   "current_day": "Monday",
//   "utc_time": "2023-08-21T15:04:05Z",
//   "track": "backend",
//   "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
//   "github_repo_url": "https://github.com/username/repo",
//   "status_code": 200
// }
