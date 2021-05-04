import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import InitialChoices from "./components/InitialChoices/InitialChoices";
import ElixaBotAvatar from "./components/ElixaBotAvatar/ElixaBotAvatar";
import UserAvatar from "./components/UserAvatar/UserAvatar";

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
  customComponents: {
    botAvatar: (props) => <ElixaBotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
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


export default config;
