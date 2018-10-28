module.exports = {
    getPosts: function(req, res){
        res.status(200).send(req.store.posts);
    },
    addPosts: function(req, res){
        let obj = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text,
            comments:[]
        }

        req.store.posts.push(obj);
        res.status(202).send({id:req.store.posts.length -1});
    },
    updatePosts: function(req, res){
        let post = req.store.posts[req.params.postId];
        Object.assign(post, req.body);
        res.status(200).send(post);
    },
    removePosts: function(req, res){
        req.store.posts.slice(req.params.postId, 1);
        res.status(204).end();
    }

}