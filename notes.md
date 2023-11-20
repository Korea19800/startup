<h1>Learnings from github setup </h1>
<br>

learned how to use git in VScode.
<br>
Link to [ReadME](https://github.com/Korea19800/startup/blob/main/README.md).

[byullage.click](http://107.20.142.116/).

<h2>ssh -i cs260.pem ubuntu@107.20.142.116</h2>

**Deploying using deployFiles**

*website is not changed after writiing the above code -> ask ta *
*search disable chrome cache*


*./deployFiles.sh -k /location.pem -h byullage.click -s simon*
<br>
*./deployFiles.sh -k /location.pem -h byullage.click -s startup*

* https://www.inflearn.com/course/lecture?courseSlug=jsp-%EA%B2%8C%EC%8B%9C%ED%8C%90&unitId=6459

**Port**
* Your web service, Caddy, is listening on ports 80 and 443. When Caddy gets a request on port 80, it automatically redirects the request to port 443 so that a secure connection is used. When Caddy gets a request on port 443 it examines the path provided in the HTTP request (as defined by the URL) and if the path matches a static file, it reads the file off disk and returns it. If the HTTP path matches one of the definitions it has for a gateway service, Caddy makes a connection on that service's port (e.g. 3000 or 4000) and passes the request to the service.

* Internally on your web server, you can have as many web services running as you would like. However, you must make sure that each one uses a different port to communicate on. You run your Simon service on port 3000 and therefore cannot use port 3000 for your startup service. Instead you use port 4000 for your startup service. It does not matter what high range port you use. It only matters that you are consistent and that they are only used by one service.

**Node.js**
* To use node packages -> npm init (need to download node package manager) first -> package.json is created
* then can download express.js -> npm i express

