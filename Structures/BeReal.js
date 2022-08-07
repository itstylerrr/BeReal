const { Client, Partials } = require("discord.js");
const ms = require("ms");
const config = require("../Configs/config.json");
const {
  Channel,
  GuildMember,
  Message,
  Reaction,
  ThreadMember,
  User,
  GuildScheduledEvent,
} = Partials;

const client = new Client({
  intents: 131071,
  partials: [
    Channel,
    GuildMember,
    Message,
    Reaction,
    ThreadMember,
    User,
    GuildScheduledEvent,
  ],
  allowedMentions: { parse: ["everyone", "roles", "users"] },
  rest: { timeout: ms("1m") },
});

module.exports = client;

client.login(config.token);
