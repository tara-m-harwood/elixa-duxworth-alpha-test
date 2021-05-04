class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method

  elixa(message) {
    const baseURL = "https://api.pandorabots.com/talk/unf6963c69/elixa?user_key=bc3d30376b455afd667908e211239116&input="

    fetch(`${baseURL}${message}`, {
                method: 'POST'
            }
        )
        .then(data => data.json())
        .then(data => {
            const elixaReply =this.createChatBotMessage(data.responses[0]);
            this.updateChatbotState(elixaReply)
        })  
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
