const models = require('../models');
const User = models.User;

const getUser = (req, res) => {
  User.findAll()
    .then(users => {
      const usersList = users.map(user => user.dataValues)
      res.send(usersList)
    });
};

const getUserById = (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then(user => {
      res.send(user);
    })
};

const postUser = (req, res) => {
  User.create(req.body)
  .then(user => {
    res.status(201).send(user);
  })
};

const putUser = (req, res) => {
  User.update({ ...req.body }, { where: { id: req.params.id }})
    .then(() => {
      User
        .findByPk(req.params.id)
        .then(user => res.send(user))
    })
};

const deleteUser = (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));
};

module.exports = {
  getUser,
  getUserById,
  postUser,
  putUser,
  deleteUser
}