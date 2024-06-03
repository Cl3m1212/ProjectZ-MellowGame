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
        
        const fullMessage = ` ${username}: ${message}`;
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
    createCloseButton(iframe);
  }
  if (msg.toLowerCase().includes('worm')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/worm.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);
  }
  if (msg.toLowerCase().includes('password')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/pwd.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);
  }
  if (msg.toLowerCase().includes('pictionary')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/Pic.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);
  }
  if (msg.toLowerCase().includes('clicker')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/clicker.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);
  }
  if (msg.toLowerCase().includes('simon')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/Simon.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);
  }
  if (msg.toLowerCase().includes('matching')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/match.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);
  }
  if (msg.toLowerCase().includes('breakout')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/Geo.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);
  }
  if (msg.toLowerCase().includes('questions')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/20.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);
  }
  if (msg.toLowerCase().includes('connect4')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/connect4.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);
  }
  if (msg.toLowerCase().includes('x')) {
    const iframe = document.createElement('iframe');
    iframe.src = '/x.html'; // URL of your Pong game
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);
  }
  });
  function createCloseButton(iframe) {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close Game';
    closeButton.onclick = function() {
      iframe.parentNode.removeChild(iframe);
      closeButton.parentNode.removeChild(closeButton);
    };
    iframe.parentNode.insertBefore(closeButton, iframe);
  }

  function openGame(gameName) {
    console.log(`Opening ${gameName} game...`);
    // Simulate sending a message with the game link
    const msg = `Let's play ${gameName}!`;
    const item = document.createElement('li');
    item.textContent = msg;
    document.getElementById('messages').appendChild(item);

    // Create the iframe for the game
    const iframe = document.createElement('iframe');
    iframe.src = gameName.toLowerCase() + 'pong.html'; // Assuming the game file is named 'pong.html'
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);

    // Scroll to the bottom of the chat
    window.scrollTo(0, document.body.scrollHeight);
}

// Rest of your JavaScript code...

  
    // Other code...
  });

  function openGame(gameName) {
    console.log(`Opening ${gameName} game...`);
    // Simulate sending a message with the game link
    const msg = `Let's play ${gameName}!`;
    const item = document.createElement('li');
    item.textContent = msg;
    document.getElementById('messages').appendChild(item);

    // Create the iframe for the game
    const iframe = document.createElement('iframe');
    switch(gameName) {
        case 'pong':
            iframe.src = 'pong.html';
            break;
        case 'pic':
            iframe.src = 'pic.html';
            break;
        case 'click':
            iframe.src = 'clicker.html';
            break;
        case '20':
            iframe.src = '20.html';
            break;
        case 'connect4':
            iframe.src = 'connect4.html';
            break;
        case 'worm':
            iframe.src = 'worm.html';
            break;
        case 'simon':
            iframe.src = 'simon.html';
            break;
        case 'pwd':
            iframe.src = 'pwd.html';
            break;
        case 'matching':
            iframe.src = 'matching.html';
            break;
        // Add more cases for other games as needed
        default:
            console.error(`Unsupported game: ${gameName}`);
            return;
    }
    iframe.width = '100%';
    iframe.height = '400px'; // Adjust height as needed
    document.getElementById('messages').appendChild(iframe);
    createCloseButton(iframe);

    // Scroll to the bottom of the chat
    window.scrollTo(0, document.body.scrollHeight);
}


  function openNav() {
    if (window.innerWidth <= 500) {
      document.getElementById("sidebar").style.width = "500px";
      document.getElementById("main").style.marginLeft = "500px";
    } else {
      document.getElementById("sidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
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