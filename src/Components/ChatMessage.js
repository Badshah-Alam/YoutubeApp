import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className=" flex items-center shadow-sm p-2">
      <img
        class="h-8 col-span-1"
        alt="user"
        src="https://www.seekpng.com/png/full/41-410093_circled-user-icon-user-profile-icon-png.png"
      />

      <span className=" font-bold px-2">{name}</span>
      <span>{message}</span>
    
      
    </div>
  );
};

export default ChatMessage;
