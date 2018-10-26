const router = require('express').Router()
const hook = new (require('discord.js').WebhookClient)("")
router.post('/', (req, res, next) => {
  console.log("Hook received.")
  if (req.header("Authorization") == process.env.dblapikey) {
    // SOON
  }
})
