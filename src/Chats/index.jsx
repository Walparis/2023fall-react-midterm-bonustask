import React from "react";
import "./chats.css";
import { useState } from "react";
export const Chats = ({ chats, onChatClick, selectedChat }) => {
  if (!chats) {
    return null; // or display a loading state or some placeholder
  }
  return (
    <div className="chats-container">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`chat-item ${selectedChat === chat.id ? "selected" : ""}`}
          onClick={() => onChatClick(chat.id)}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
};
