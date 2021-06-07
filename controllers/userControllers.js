const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: users.length,
    data: {
      users,
    },
  });
};

exports.addUser = (req, res) => {
  res.status(500).json({
    status: 'Not set',
    message: 'router not set',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'Not set',
    message: 'router not set',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'Not set',
    message: 'router not set',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Not set',
    message: 'router not set',
  });
};
