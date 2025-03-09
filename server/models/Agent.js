const mongoose = require("mongoose")

const agentSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  password: String,
  tasks: [
    {
      firstName: String,
      phone: String,
      notes: String,
    },
  ],
})

const Agent = mongoose.model("Agent", agentSchema)
