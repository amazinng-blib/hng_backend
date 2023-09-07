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

    // const utc_time = new Date().toISOString();
    const currentDate = new Date();

    //first: Get the components of the date and time
    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based (0-11)
    const day = String(currentDate.getUTCDate()).padStart(2, '0');
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');

    //Then: Create the formatted date string
    const utc_time = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    if (!slack_name || !track) {
      return res
        .status(400)
        .json({ error: 'Both slack_name and track are required.' });
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
