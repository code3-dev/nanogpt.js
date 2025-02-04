const { ChatCompletionProviders } = require("./providers/chatCompletion/index.js");

const PROVIDERS = {
  ...ChatCompletionProviders,
};

class NanoGPT {
  static createProvider(providerName) {
    const Provider = PROVIDERS[providerName];
    if (!Provider) {
      throw new Error(`Provider "${providerName}" is not supported.`);
    }
    return new Provider();
  }
}

module.exports = NanoGPT;
