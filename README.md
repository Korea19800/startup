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
- **3rd party service call** - There is a quote section in the About webpage. For example, currently I am using 'Itmes are cheap When you use BYUllage.' This is a placeholder for
  a quote coming via 3rd party API call. 
- **Database** - The information about posts(title,date) in the posts page represent data pulled from the database.
- **WebSocket** - The count of views,comments in post page and ranking page shows the realtime number of views and comments.

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- **Header, footer, and main content body: Used CSS for each part**
- **Navigation elements** - I put Y image next to BYUllage logo and changed the color of nav bar to blue.
- **Responsive to window resizing** - My app looks great on all window sizes and devices
- **Application elements** - Used good color contrast(blue,black,and white) and whitespace. Easy to differentiate elements
- **Application text content** - Consistent fonts
- **Application images** - Added Cougar image in the home page.

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- **login** - If you press login button, it goes to post page.
- **database** - Displayed the updated views of posts(in post page). Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
- **WebSocket** - I used the alert function to notify user when user clicks 'Write Post' button in post page. IF user's byu email is not verified yet, but user clicks the button, then user gets this message: "You cannot write a post before your byu email is verified."
In the future, This will be replaced with WebSocket push messages to user when someone responds user's comment or post in the future.
- **application logic** - When user clicks the title of post, the view get increased. The ranking(of post) will be decided with the post's view in the future.

## Service deliverable

For this deliverable I added backend endpoints that brings quotes and images randomly from third party. Also, users will be able to write a post in the post webpage
Finally, the website will return the number of posts and comments in the future and show the rankings based on these numbers.

- **Node.js/Express HTTP service** - done! 
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - Changes a quote and image in about webpage
- **Backend service endpoints** - Placeholders for login that stores the current user on the server.
- **Frontend calls service endpoints** - I used fetch() function.

## DB deliverable

For this deliverable I stored the views of posts(updated when clicked) in the database.

- **MongoDB Atlas database created** - done!
- **Endpoints for data** - My endpoints now process the data and send it to Mongo.
- **Stores data in MongoDB** - done!

## Login deliverable

For this deliverable I associate the authoruty to write posts with the logged in user.

- **User registration** - Creates a new account in the database.
- **existing user** - Stores the information of past posts under the same user if the user already exists.
- **Use MongoDB to store credentials** - Stores both user and their posts.
- **Restricts functionality** - You cannot write post until you have logged in. This is restricted on the frontend only. 😔

## WebSocket deliverable

For this deliverable I used webSocket to update the votes on the frontend in realtime.
- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - User can chat in the chat webpage

## React deliverable

For this deliverable I converted the application over to use React. 

- **Bundled and transpiled** - Done!
- **Components** - Login, chat, posts, about are all functional react components.
- **Router** - Routing between login,chat,posts, and about components(used Browser Router).
- **Hooks** - Used useState and useEffect hook in chat.jsx to implement chat function between users.







