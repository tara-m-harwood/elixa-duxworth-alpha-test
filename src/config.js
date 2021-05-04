import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import InitialChoices from "./components/InitialChoices/InitialChoices";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "Elixa Duxworth",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. How can I support you today?", {
      widget: "initialChoices",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#ED4AAE",
    },
    chatButton: {
      backgroundColor: "#ED4AAE",
    },
  },
  widgets: [
    {
      widgetName: "initialChoices",
      widgetFunc: (props) => <InitialChoices {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};


 // Defines an object of custom components that will replace the stock chatbot components. 
  // customComponents: {
  //    // Replaces the default header
  //   header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>
  //   // Replaces the default bot avatar
  //   botAvatar: (props) => <FlightBotAvatar {...props} />,
  //   // Replaces the default bot chat message container
  //   botChatMessage: (props) => <CustomChatMessage {...props} />,
  //   // Replaces the default user icon
  //   userAvatar: (props) => <MyUserAvatar {...props} />,
  //   // Replaces the default user chat message
  //   userChatMessage: (props) => <MyUserChatMessage {...props} />
  // },


export default config;
