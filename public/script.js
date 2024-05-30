document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
  
    let username = '';
    let room = '';
  
    document.getElementById('username-submit').addEventListener('click', () => {
      const usernameInput = document.getElementById('username').value.trim();
      if (usernameInput !== '') {
        username = usernameInput;
        document.getElementById('username-form').style.display = 'none';
        document.getElementById('room-form').style.display = 'block';
      }
    });
  
    document.getElementById('room-submit').addEventListener('click', () => {
      const roomInput = document.getElementById('room').value.trim();
      if (roomInput !== '') {
        room = roomInput;
        socket.emit('joinRoom', { username, roomCode: room });
        document.getElementById('room-form').style.display = 'none';
        document.getElementById('chat').style.display = 'block';
      }
    });
  
    const form = document.getElementById('form');
    const input = document.getElementById('input');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = input.value.trim();
      if (message && username && room) {
        
        const fullMessage = ` - ${username}: ${message}`;
        socket.emit('chat message', { message: fullMessage, room });
        input.value = '';
      }
    });
    
 

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    document.getElementById('messages').appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
    if (msg.toLowerCase().includes('pong')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/pong.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
  }
  if (msg.toLowerCase().includes('worm')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/worm.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
  }
  if (msg.toLowerCase().includes('password')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/pwd.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
  }
  if (msg.toLowerCase().includes('pictionary')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/pic.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
  }
  if (msg.toLowerCase().includes('clicker')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/clicker.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
  }
  if (msg.toLowerCase().includes('simon')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/simon.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
  }
  if (msg.toLowerCase().includes('matching')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/match.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
  }
  if (msg.toLowerCase().includes('breakout')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/Geo.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
  }
  if (msg.toLowerCase().includes('questions')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/20.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
  }
  if (msg.toLowerCase().includes('connect4')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/connect4.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
  }
  if (msg.toLowerCase().includes('x')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/x.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
  }
  });
  
    // Other code...
  });

function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("input").style.width = "calc(100% - 300px)"; // Adjust as needed
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("input").style.width = "100%";
}

  // Function to show the pop-up notification
  function showPopup(message) {
    // Display the pop-up container
    var popupContainer = document.getElementById('popup');
    popupContainer.style.display = 'block';

    // Set the message
    var popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;

    // Close the pop-up after 5 seconds
    setTimeout(function() {
      popupContainer.style.display = 'none';
    }, 5000);
  }