const { queston, getquestionbyque, getallquestions } = require('./question.service');

//Importing database structure 
const pool = require('../../config/database');

module.exports = {
    CreateQuestion: (req, res) => {
        const { question, question_description, question_tag } = req.body;

        if (!question) return res.status(400).json({ msg: 'Question must be field' });
        pool.query(`SELECT * FROM question WHERE question = ?`, [question], (err, results) => {
            if (err) {
                return res
                    .status(err)
                    .json({ msg: "database connection err" })
            } 
            // req.body.userId = results[0].user_id;
                queston(req.body, (err, results) => {
                    if (err) {
                        console.log(err);
                        return res
                            .status(500)
                            .json({ msg: "database connection err" });
                    }
                })
                return res.status(200).json({
                    msg: "New Question added successfully",
                    // dataa: results,
                    data: {
                        question: question,
                        question_description: question_description,
                        question_tag: question_tag
                    }
                })
            
    })
}
}