import React from 'react';

const TelegramChatButton = () => {
  const botLink = "https://t.me/ocp_ldubgd_bot"; 
  
  const openTelegramChat = () => {
    window.open(botLink, '_blank');
  };

  return (
    <button onClick={openTelegramChat}>
      Написати боту у Телеграмі
    </button>
  );
};

export default TelegramChatButton;
