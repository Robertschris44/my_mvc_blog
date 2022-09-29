const {Comment} = require('../models');

const commentsData = [{
    comment_text: 'Good job on this one!',
    user_id: 2,
    post_id: 1
},
{
    comment_text: 'This is awesome news! Keep up the good work!!',
    user_id: 1,
    post_id: 3
},
{
    comment_text: 'Wow, I am proud of you all!',
    user_id: 4,
    post_id: 1
},];

const seedsComment = () => Comment.bulkCreate(commentsData);


module.exports = seedsComment;