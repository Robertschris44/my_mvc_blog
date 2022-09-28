const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//These might be causing the error should redo

//Get all comments
router.get('/', (req, res) => {
    Comment.findAll({
        include: [
            {
                model:User,
                attributes: ['username']
            },
            {
                model: Post,
                attributes: ['id','title','created_at'],
                include:{
                    model: User,
                    attributes: ['id', 'username']
                }
            }
        ]
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//Get single comment
router.get('/:id', (req,res) => {
    Comment.findOne({
        where:{
            id: req.params.id
        },
        include: [
            {
                model:User,
                attributes:['username']
            },
            {
                model: Post,
                attributes:['id', 'title','created_at'],
                include:{
                    model:User,
                    attributes:['id','username']
                }
            }
        ]
    })
    .then(dbCommentData => {
        if(!dbCommentData){
            res.status(400).json({message: 'no comment found'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Create a comment
router.post('/', withAuth, (req,res) => {
    if(req.session){ //checking the session
        Comment.create({
            comment_text:req.body.comment_text,
            user_id:req.session.user_id,
            post_id:req.body.post_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    };
});


//Delete comment
router.delete('/;id', withAuth,(req,res) => {
    Comment.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData){
            res.status(400).json({message: 'no comment found'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;