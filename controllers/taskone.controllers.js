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
      github_file_url:
        'https://github.com/amazinng-blib/hng_backend/blob/master/controllers/taskone.controllers.js',
      github_repo_url: 'https://github.com/amazinng-blib/hng_backend',
      status_code: res.statusCode,
    };

    res.status(200).json(responase);
  } catch (error) {
    res.status(500).json(error?.message);
  }
});

module.exports = taskOneController;
