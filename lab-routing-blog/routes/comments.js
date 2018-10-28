module.exports = {
    getComments: function(req, res){
        res.status(200).send(req.store.posts[req.params.postId].comments);
    },
    addComments: function(req, res){
        let obj = {
            text: req.body.text
        }

        req.store.posts[req.params.postId].comments.push(obj);
        res.status(202).send(req.store.posts[req.params.postId]);
    },
    updateComments: function(req, res){
        let comment = req.store.posts[req.params.postId].comments[req.params.commentId];
        Object.assign(comment, req.body);
        res.status(200).send(req.store.posts[req.params.postId]);
    },
    removeComments: function(req, res){
        req.store.posts[req.params.postId].comments.splice(req.param.commentId, 1);
        res.status(204).end();
    }

}