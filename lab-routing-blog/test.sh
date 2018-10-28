#posts post data
curl -i -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts" 

#updates post data at specific id
curl -i -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"

#gets post data
curl -i "http://localhost:3000/posts" 

#deletes post data at specific id
curl -i -X DELETE "http://localhost:3000/posts/0"

#post comment
curl -H "Content-Type: application/json" -d '{"text": "New comment added"}' -X POST "http://localhost:3000/posts/0/comments"

#Getting all comments of 0 post
curl -i "http://localhost:3000/posts/0/comments"

#Updating comment
curl -H "Content-Type: application/json" -d '{"text": "New comment added"}' -X PUT "http://localhost:3000/posts/0/comments/1"

#deleting comment
curl -X DELETE "http://localhost:3000/posts/0/comments/0"