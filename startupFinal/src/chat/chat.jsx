import React, { useEffect, useState } from 'react';

export function Chat() {
  const [socket, setSocket] = useState(null);
  const [nameControlsDisabled, setNameControlsDisabled] = useState(false);
  const [chatControlsDisabled, setChatControlsDisabled] = useState(true);
  const [chatText, setChatText] = useState('');
  const [myName, setMyName] = useState('');
  const [newMsg, setNewMsg] = useState('');

  useEffect(() => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const newSocket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    setSocket(newSocket);

    newSocket.onopen = (event) => {
      appendMsg('system', 'websocket', 'connected');
    };

    newSocket.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      appendMsg('friend', chat.name, chat.msg);
    };

    newSocket.onclose = (event) => {
      appendMsg('system', 'websocket', 'disconnected');
      setNameControlsDisabled(true);
      setChatControlsDisabled(true);
    };

    return () => {
      // Cleanup code, close the socket when the component unmounts
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (!!newMsg) {
      appendMsg('me', 'me', newMsg);
      const name = myName;
      socket.send(`{"name":"${name}", "msg":"${newMsg}"}`);
      setNewMsg('');
    }
  };

  const appendMsg = (cls, from, msg) => {
    setChatText(
      `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleNameInputChange = (e) => {
    setMyName(e.target.value);
    setChatControlsDisabled(e.target.value === '');
  };

  const handleNewMsgInputChange = (e) => {
    setNewMsg(e.target.value);
  };

  return (
    <main className="container-fluid bg-dark text-center">
      <div className="name">
        <fieldset id="name-controls">
          <legend>My ID</legend>
          <input
            id="my-name"
            type="text"
            value={myName}
            onChange={handleNameInputChange}
          />
        </fieldset>
      </div>

      <fieldset id="chat-controls" disabled={chatControlsDisabled}>
        <legend>Chat</legend>
        <input
          id="new-msg"
          type="text"
          value={newMsg}
          onChange={handleNewMsgInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </fieldset>
      <div id="chat-text" dangerouslySetInnerHTML={{ __html: chatText }}></div>
    </main>
  );
}
