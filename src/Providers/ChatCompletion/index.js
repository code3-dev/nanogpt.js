const OllamaProvider = require("./Ollama.js");
const BlackBoxProvider = require("./BlackBox.js");

const ChatCompletionProviders = {
  Ollama: OllamaProvider,
  BlackBox: BlackBoxProvider,
};

module.exports = { ChatCompletionProviders };
