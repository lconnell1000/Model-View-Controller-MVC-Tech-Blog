const { Post } = require('../models');

const postData = [
    {
        title: "CLAY IS AWESOME",
        post_content: "Clay is an awesome guy",
        user_id: 3
    },
    {
        title: "MATT IS THE COOLEST",
        post_content: "Matt is a cool guy",
        user_id: 2
    },
    {
        title: "LACHIE IS THE SMARTEST",
        post_content: "Lachie is a smart guy",
        user_id: 1

    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;