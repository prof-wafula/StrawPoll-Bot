const botPoll = require('strawpoll-bots').default;
console.log("Iniciando bot :)");

// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('https://strawpoll.com/polls/e6Z28v24XnN', 2, false, null, 2000);
