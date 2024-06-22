// src/ChatbotComponent.jsx

import React, { useEffect } from 'react';

const ChatbotComponent = () => {
  useEffect(() => {
    (function(d, m){
      var kommunicateSettings = {
        "appId": "2c6f50e179fb1d01c2c1e0ef8f708aecd", // Replace with your Kommunicate App ID
        "popupWidget": true,
        "automaticChatOpenOnNavigation": true
      };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return <div id="KommunicateChatbot"></div>;
}

export default ChatbotComponent;
