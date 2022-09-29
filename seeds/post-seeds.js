const {Post} = require('../models');

const postsData = [{
    title: 'Which is better, PS5 or Xbox series?',
    post_content: 'The Xbox Series X has more overall power to play with but that does not always means it performs better.',
    user_id: 1
},
{
    title: 'Walgreens prescriptions has a discount special',
    post_content: 'Download the walgreens app and put in code "DISCOUNT" for special deals, this has been going on for years now',
    user_id: 2
},
{
    title: 'Which anime is better Yu Yu Hakusho or Cowboy Bebop',
    post_content: 'Last month attendees at anime-con came to a vote to determine best old school anime.',
    user_id: 3,
},];

const seedsPosts = () => Post.bulkCreate(postsData);


module.exports = seedsPosts;