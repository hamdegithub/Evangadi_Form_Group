const pool = require('../../config/database');


module.exports = {
    queston: (data, callback) => {
        pool.query(`INSERT INTO question(question, question_description, question_tag) VALUES (?,?,?)`,
            [
                data.question,
                data.question_description,
                data.question_tag
            ],
            (err, result) => {
                if (err) {
                    return callback(console.log(err));
                }
                return callback(null, result);
            }
        );
    },
    getquestionbypost: (que, callback) => {
        pool.query(`SELECT * FROM Question WHERE post_id = ?`, [que], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result[0]);
        })
    },
    getallquestions: (callback) => {
        pool.query(`SELECT question_id,question,question_description,question_tag FROM registration`, [], (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, result);
        })
    }
}