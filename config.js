

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["770636629848621107", ""], 
  mongodbUri : process.env.MONGODB_URI,
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
            name: "GlaceYT",
            password: "glace",
            host: "us-01.strixnodes.com",
            port: 8003,
            secure: false
    }
  ]
}
