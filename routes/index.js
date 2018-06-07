const express = require('express');
const router = express.Router();
const sql = require('mssql');

//Database configuration 
const dbSetup = {
  server: 'ip',
  database: 'db',
  user: 'user',
  password: 'password',
  options: {
    encrypt: false
  }
};

sql.connect(dbSetup).then((result) => {}).catch((err) => { console.log(err.message); });

/* GET home page. */
router.get('/', function (req, res, next) {
  new sql.Request()
    .query("Select top 10 * from Table")
    .then((result) => {
      res.render('index', {
        title: 'Express',
        data: result.recordset
      });
    }).catch((err) => {
      res.redirect('/error', {
        error: err
      });
    });
});


router.get('/insert', function (req, res, next) {
  new sql.Request()
    .query("")
    .then((result) => {
      res.redirect('/');
    }).catch((err) => {
      res.redirect('/error', {
        error: err
      });
    });
});

module.exports = router;