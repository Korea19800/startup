// buttons to move to other page

// function for posts page Write Post button

// posts.html의 write 버튼서 사용
function checkLogin(){
    // You can check if the user is logged in here
    // For this example, let's assume the user is not logged in
    alert("You cannot write a post before your byu email is verified.");
}

function loginButton() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    // move to posts page
    window.location.href = "posts.html";
}

function postClick(){
    let view = document.querySelector("#postview1");
    view.value++; // increase the view if clicked
    localStorage.setItem("postview1", view.value);
}

function increaseView(viewId) {
    // Find the element with the given viewId
    const viewsElement = document.getElementById(viewId);

    // Get the current view count and increment it
    const currentViews = parseInt(viewsElement.textContent, 10);
    const newViews = currentViews + 1;

    // Update the view count in the DOM
    viewsElement.textContent = newViews;
    return newViews
}

/*
function requestAndShowPermission() {
     Notification.requestPermission(function (permission) {
         if (permission === "granted") {
             showNotification();
         }
     });
}
function showNotification() {
   //  if(document.visibilityState === "visible") {
   //      return;
   //  }
    let title = "I love Educative.io";
    let icon = 'https://homepages.cae.wisc.edu/~ece533/images/zelda.png'; //this is a large image may take more time to show notifiction, replace with small size icon
    let body = "Message to be displayed";
 
    let notification = new Notification(title, { body, icon });
 
    notification.onclick = () => {
           notification.close();
           window.parent.focus();
    }
}
*/

function ranking(){
    // Sample data for posts and views (you should replace this with your actual data)
    const postsData = [
        { title: "Selling Almost brand new Ipad", views: increaseView("#postview1") },
        { title: "Wanna buy secondhand TV", views: increaseView("#postview1") },
        { title: "Selling 'Intro to Algorithm' book", views: increaseView("#postview1") },
    ];

    // Sort the postsData based on views in descending order
    postsData.sort((a, b) => b.views - a.views);

    // Get the table body element to populate the ranking
    const rankingTableBody = document.getElementById("rankingTableBody");

    // Loop through the sorted postsData and create rows in the ranking table
    postsData.forEach((post, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${post.title}</td>
        <td>${post.views}</td>
        <td>Comments</td>
        `;
        rankingTableBody.appendChild(row);
    });
}

/*
function getNotificationPermission() {
    // 브라우저 지원 여부 체크
    if (!("Notification" in window)) {
        alert("데스크톱 알림을 지원하지 않는 브라우저입니다.");
    }
    // 데스크탑 알림 권한 요청
    Notification.requestPermission(function (result) {
        // 권한 거절
        if(result == 'denied') {
            alert('알림을 차단하셨습니다.\n브라우저의 사이트 설정에서 변경하실 수 있습니다.');
            return false;
        }
    });
}

// 알림 띄우기 -> 작동안됨
function notify() {
    getNotificationPermission();
    var options = {
        body: "user name: " + nameEl.value + " logged in."
    }
    
    // 데스크탑 알림 요청
    var notification = new Notification("BYUllage LogIn", options);
    
    // 3초뒤 알람 닫기
    setTimeout(function(){
        notification.close();
    }, 3000);
}
*/

// loginButton() 함숭안에 있었는데 작동x
/* Alert
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if (name && password) {
        alert("You are logged in as " + nameEl.value);
    } else {
        alert("Please enter your BYU email and password.");
    }
    */

    /* notify
    let permission = Notification.permission;
    if(permission === "granted"){
        showNotification();
    } else if(permission === "default"){
        requestAndShowPermission();
    } else {
    alert("Use normal alert");
    }
    */ 

    //notify();
    /*
    let notification = new Notification("test", { // "test" => 제목
        body: "user name: " + nameEl.value + " logged in.", // 메세지
      });
    */