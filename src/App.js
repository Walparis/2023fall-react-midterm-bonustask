import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { Chats } from "./Chats";
import { Messages } from "./Messages";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [chats, setChats] = useState();
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chatId) => {
    setSelectedChat(chatId);
  };
  useEffect(() => {
    fetch("https://655a58576981238d054d67a7.mockapi.io/chat")
      .then((response) => response.json()) // Parse the JSON data
      .then((data) => setChats(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // console.log(chats);
  return (
    <div className="App">
      <div className="grid-container">
        <Header></Header>
        <div className="chat-wrapper">
          <Chats
            chats={chats}
            onChatClick={handleChatClick}
            selectedChat={selectedChat}
          />
        </div>
        <div className="messages-wrapper">
          {selectedChat !== null && <Messages chatId={selectedChat} />}
        </div>
      </div>
    </div>
  );
}

export default App;
