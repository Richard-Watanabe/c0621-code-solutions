const express = require('express');
const app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades";
  `;
  db.query(sql)
    .then(result => {
      res.status(200).send(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'An unexpected error occured' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const intScore = parseInt(newGrade.score);
  if (newGrade.name === undefined || newGrade.course === undefined || intScore === undefined || !Number.isInteger(intScore) || intScore > 100 || intScore < 0) {
    return res.status(400).send({ error: 'All inputs are required and score must be an integer between 0 and 100' });
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3);
  `;
  const params = [newGrade.name, newGrade.course, intScore];
  db.query(sql, params)
    .then(result => {
      const newEntry = result.rows[0];
      res.status(201).send(newEntry);
    }
    )
    .catch(err => {
      console.error(err);
      res.status(500).send({
        error: 'An Unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const newGrade = req.body;
  const intScore = parseInt(newGrade.score);
  const gradeId = req.params.gradeId;
  if (newGrade.name === undefined || newGrade.course === undefined || intScore === undefined || !Number.isInteger(intScore) || intScore > 100 || intScore < 0 || gradeId === undefined) {
    return res.status(400).send({ error: 'Invalid/missing gradeId, name, course, or score entry' });
  }
  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning *;
  `;
  const params = [newGrade.name, newGrade.course, intScore, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (grade) {
        return res.status(200).send(grade);
      } else {
        return res.status(404).send({ error: `Cannot find grade with 'gradeId'${gradeId}` });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).send({ error: 'gradeId must be a positive integer' });
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).send({ error: `Cannot find grade with 'gradeId' ${gradeId}` });
      } else {
        res.status(204).send(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
