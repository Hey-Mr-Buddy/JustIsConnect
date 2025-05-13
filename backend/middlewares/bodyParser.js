const express = require('express');

const setupBodyParsing = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

module.exports = setupBodyParsing;
