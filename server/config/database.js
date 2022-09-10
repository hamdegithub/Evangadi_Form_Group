const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
});

let registration = `CREATE TABLE if not exists registration(
    user_id int auto_increment,
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY (user_id),
    UNIQUE KEY (user_name)
    )`;
let profile = `CREATE TABLE if not exists profile(
    user_profile_id int auto_increment,
    user_id int not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,        
    PRIMARY KEY (user_profile_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;

let question = `CREATE TABLE if not exists question(
    question_id int auto_increment,
    post_id int not null,
    user_id int not null,
    question varchar(255) not null,
    question_description varchar(255),
    question_tag varchar(1000000),
    PRIMARY KEY (question_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id),
    UNIQUE KEY (post_id)
)`;

let answer = `CREATE TABLE if not exists Answer(
    answer_id int auto_increment,
    question_id int not null,
    user_id int not null,
    answer varchar(255) not null,
    answer_tag varchar(1000000),
    PRIMARY KEY (answer_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;

pool.query(registration, (err) => {
    if (err) console.log(err);
    console.log('registration table created');
})
pool.query(profile, (err) => {
    if (err) console.log(err);
    console.log('profile table created');
})
pool.query(question, (err) => {
    if (err) console.log(err) ;
    console.log('question table created');
})
pool.query(answer, (err) => {
    if (err) console.log(err);
    console.log('answer table created');
})

module.exports = pool;