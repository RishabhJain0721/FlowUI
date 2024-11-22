import Log from "../models/Log.js";

const sendAllLogs = async (req, res) => {
  try {
    const logs = await Log.find();
    res.status(200).json(logs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addLog = async (req, res) => {
  try {
    const { log } = req.body;
    console.log(log);
    const description = {};
    for (let i = 0; i < log.length; i++) {
      description[i] = log[i];
    }
    console.log("Description : ", description);
    const newLog = new Log({ description });
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { sendAllLogs, addLog };
