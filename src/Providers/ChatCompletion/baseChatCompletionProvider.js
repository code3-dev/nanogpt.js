"use strict";
const BaseProvider = require("../baseProvider.js");

class ChatCompletionProvider extends BaseProvider {
  async chatCompletion(messages, options, onData) {
    throw new Error("Method 'chatCompletion()' must be implemented.");
  }

  static getConfig() {
    return {};
  }
}

module.exports = ChatCompletionProvider;
