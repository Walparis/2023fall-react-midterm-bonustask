import React from "react";
import "./messages.css";
import { useEffect, useState } from "react";
import axios from "axios";
export const Messages = ({ chatId }) => {
  const [message, setMessage] = useState({});
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Fetch message based on the chatId
    // You may use your API or mock data here
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `https://655a58576981238d054d67a7.mockapi.io/chat/${chatId}`
        );
        const data = await response.json();
        setMessage(data);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessages();
  }, [chatId]);
  // console.log(message);
  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://655a58576981238d054d67a7.mockapi.io/chat/${chatId}`
      );
      const data = response.data;
      const post = await axios.put(
        `https://655a58576981238d054d67a7.mockapi.io/chat/${chatId}`,
        {
          id: data.id,
          messages: [...data.messages, newMessage],
          name: data.name,
        }
      );

      // Handle the response, if needed
      console.log("Post successful:", response.data);
    } catch (error) {
      console.error("Error fetching message:", error);
    } finally {
      setNewMessage("");
    }
  };
  return (
    <div className="message-container">
      <form>
        <label for="New-message-input">Type your message here: </label>
        <input
          className="messages-input"
          placeholder={newMessage}
          onChange={handleChange}
        ></input>
        <button className="new-message-btn" onClick={sendMessage}>
          Send message
        </button>
      </form>
      <ul>
        {message?.messages?.map((text) => (
          <li>
            {" "}
            <h1>{text}</h1>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
