# API Documentation (localhost:5000/api)

### User APIs (/user)

| Path      | Type      | Description                 | Parameters          |
| :-------- | :---------| :---------------------------|:--------------------|
| /get      |POST       |Get a User info              |{ email }            |
| /posts    |POST       |Get all Posts by a User      |{ email }            |
| /update   |POST       |Update Username              |{ email, username }  |
| /follow   |POST       |Follow community             |{ email, community } |
| /unfollow |POST       |Unfollow community           |{ email, community } |



### Auth APIs (/auth)

| Path      | Type    | Description   | Parameters                           |
| :-------- | :-------| :------------ |:-------------------------------------|
| /login    |POST     |Log In         |{ email, password }                   |
| /signup   |POST     |Sign Up        |{ name, email, password, gender, dob }|



### Post APIs (/post)

| Path      | Type     | Description                | Parameters  |
| :-------- | :------- | :------------------------- |:----------- |
| /get      |GET       |Get All Posts               |NULL         |
| /get      |POST      |Get Post by ID              |{ id }       |
| /community|POST      |Get All Community Posts     |{ community }|
| /new      |POST      |Add posts                   |{ title, content, ownerId, ownerUserName, community }|
| /like     |POST      |Like Post                   |{ email, postid }|
| /unlike   |POST      |Unlike Post                 |{ email, postid }|
| /comment  |POST      |Comment on Post             |{ commenter, comment, postid }|



### Community APIs (/community)

| Path      | Type     | Description                | Parameters |
| :-------- | :------- | :------------------------- |:-----------|
| /get      |GET       |Get All Communities         |NULL        |
| /get      |POST      |Get a Community Details     |{ name }    |
| /new      |POST      |Make a New Community        |{ name, tagline, imgsrc }|

