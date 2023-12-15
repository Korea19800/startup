import React from 'react';

// import './posts.css';

export function Posts() {
  
  function checkLogin(){ // You can check if the user is logged in here // For this example, let's assume the user is not logged in
    alert("You cannot write a post before your byu email is verified.");
  }
  // Q: increase View 함수 추가할까?

  // <script src="button.js"></script>
  return (
    <main class="container-fluid bg-dark text-center">    
      <section>
        <p>Buy/Sell Posts</p>
        <table class="table table-warning table-striped-columns">
          <thead class="table-dark">
            <tr>
              <th>status</th>
              <th>comments</th>
              <th>title</th>
              <th>price</th>
              <th>views</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SELL</td>
              <td>23</td>
              <td onclick="increaseView('postview1')"><a href="#">Selling Almost brand new Ipad</a></td>
              <td>$300</td>
              <td id="postview1">1</td>
              <td>09.23.2023</td>
            </tr>
            <tr>
              <td>BUY</td>
              <td>12</td>
              <td onclick="increaseView('postview2')"><a href="#">Wanna buy secondhand TV</a></td>
              <td>$50</td>
              <td id="postview2">2</td>
              <td>09.25.2023</td>
            </tr>
            <tr>
              <td>SELL</td>
              <td>1</td>
              <td onclick="increaseView('postview3')"><a href="#">Selling 'Intro to Algorithm' book</a></td>
              <td>$20</td>
              <td id="postview3">0</td>
              <td>09.25.2023</td>
            </tr>
          </tbody>
        </table>
        <button type="button" onclick="checkLogin()">Write Post</button>
      </section>
    </main>
  );
}
