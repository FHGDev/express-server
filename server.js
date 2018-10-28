const app = require('express')()
var type = ""
launchWebhook()
const json = {
  username: "DBL Webhook",
  embeds: [
    {
      title: "Hulkbot Upvotes",
      description: "Hulkbot has been upvoted!",
      footer: {
        text: "DBL Upvote Webhook",
        icon_url: process.env.icon
      },
      color: 255
    }
  ]
}
const webhook = new (require('discord.js').WebhookClient)(process.env.webhookid, process.env.webhooktoken)
app.get('/', (req, res) => {
  res.send("<h1>Forbidden</h1>")
  res.status(403) 
})

app.post('/', (req, res) => {
  const auth = process.env.webhookauth
  const auth2 = process.env.discordauth
  
  if (req.headers.authorization == null) return;
  if (req.headers.authorization == auth) {
    type = "DBL/Discord"
    console.log(type)
    webhook.send(json)
    res.status(200)
  } else {
    
  }
})

function launchWebhook() {
  require('http').createServer(app).listen(3030)  
  app.listen(5000)
  console.log("Launching...")
  setTimeout(() => {
    console.log("Launched server.")
  }, 5000)
}
