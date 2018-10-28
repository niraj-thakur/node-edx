const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const errorHandler = require("errorhandler");
const {posts, comments} = require("./routes")
const app = express();

let store = {
    posts:[
        {
            name:"Top 10 es5 features",
            url: "htpps://webblog.com/es6",
            text: "There are many features ...",
            comments:[
                {
                    text: "Very good article",
                    date: "12-Nov-2018"
                },
                {
                    text: "Very bad article",
                    date: "12-Nov-2018"
                },
                {
                    text: "Very excellent article",
                    date: "12-Nov-2018"
                },
                
            ]
        }
    ]
};

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorHandler());

app.use((req, res, next)=>{
    req.store = store;
    next();
});

app.get('/posts', posts.getPosts);
app.post('/posts', posts.addPosts);
app.put('/posts/:postId', posts.updatePosts);
app.delete('/posts/:postId', posts.removePosts);

app.get('/posts/:postId/comments', comments.getComments);
app.post('/posts/:postId/comments', comments.addComments);
app.put('/posts/:postId/comments/:commentId', comments.updateComments);
app.delete('/posts/:postId/comments/:commentId', comments.removeComments);

app.listen(3000);