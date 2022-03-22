const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 2,
        comment_text: "HA, YOU WISH!"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "YOU REALLY THINK SO!?"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "DEBATABLE!!"
    },
   
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;