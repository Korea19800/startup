# BYUllage

## Description

### Elevator pitch

Have you ever had some problem buying expensive books or items while you were in BYU? 
BYUllage will help students living in the campus to trade used items within campus without going far to trade the used items. The name of the website is BYUllage, a name combining BYU and village. Only a student, faculty, and staff who has byu.edu email can use this website. The user can create a post whether he/she wants to buy/sell some item. Another user can write a comment to response to this post. Then the user who got a response will get notification. After that, the user who created post and the other user who commented can choose time and place to meet by communicating in the post. These are the main functions of Byullage that could help Byu community to trade better inside the campus. Since there is no website that allows only byu members to trade within the campus, I strongly believe there will be a strong demand for this website. 

### Design
![Byullage](https://github.com/Korea19800/startup/assets/52956141/f5a29ce5-994a-4d60-8d56-5f1f8de8d39e)

### Key features

- Secure login over HTTPS
- Force user to use byu.edu email to confirm whether user is a member of BYU
- Ability to write a post
- Aility to comment on a post
- Ability for admin to edit and delete posts and comments
- User gets simple notification if someone responds to comment or post.
- Display of posts including information such as title, the number of comments, price, and date

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Two HTML pages.
  One for login and displaying posts. One for reading specific information of a post. 
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, create a post, write a comment, notification of response to a user, backend endpoint calls.
- **Web Service**
  - manage user authentication and data storage.
  - retrieve post listings from the server.
  - retrieving number of comments, status, title, price, views, and date of a post
  - handle user submissions, such as comment.
  
- **DB** - A backend database using MongoDB will be used to store the user's profile, posts, comments, and other relevant information.

- **Login**
  - User authentication will be implemented to ensure that only registered users can post, comment, or engage in discussions.
  - Credentials securely stored in database. Can't vote unless authenticated.
  - It will force users to make an id with byu.edu email. To implement this, download the nodemailer module in Node.js which allows us to send verification messages to the designated email address.
  - secure authentication methods, such as OAuth or JWT, will be used to protect user accounts and data.

- **WebSocket** - users can get real time notification if someone responds to the user’s post or comment.
- **React** - Application will use the React web framework.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Four HTML page: Home for login, Post for posts and comments, About page introducing website, and Ranking page shows user's monthly rank.
- **Text** - About page's explanation regarding website is represented by a textual description.
- **Images** - included image of Y and a cougar. 
- **Login** - Input box for ID and Password. Also submit button for login.
- **3rd party service call** - 
- **Database** - The information about posts represent data pulled from the database.
- **WebSocket** - The count of views,comments results represent the tally of realtime votes.







