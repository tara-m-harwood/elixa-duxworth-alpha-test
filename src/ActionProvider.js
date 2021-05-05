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
            const responses = data.responses
            responses.forEach(response => {

              const firstChar = response.charAt(0)
              if(firstChar==='<'){
                console.log(firstChar)
                const parser = new DOMParser();
                const parsedResponse = parser.parseFromString(response, "application/xml")
                console.log(parsedResponse.documentElement.textContent)
              }
              
              const elixaReply =this.createChatBotMessage(response);
              this.updateChatbotState(elixaReply)
            })

        })  
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleStartTroubleshooter = () => {
    const message = this.createChatBotMessage(
      "Great!  Let's get started!  First, can you tell me what you want your code to do?",
    )
    this.updateChatbotState(message);
  }

  handleStartChatting = () => {
    const message = this.createChatBotMessage(
      "Great!  I love chatting!  What do you want to talk about?",
    )
    this.updateChatbotState(message);
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
