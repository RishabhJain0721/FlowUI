import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../Components/Box";
import { storeLog } from "../APIs/flowData";

const Home = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState([]);
  const [isFlowRunning, setIsFlowRunning] = useState(false);
  const availableRemainders = 2;

  let tempLogs = [];

  const log = (message) => {
    const timestamp = () => new Date().toLocaleTimeString();
    setLogs((prevLogs) => [...prevLogs, `[${timestamp()}]: ${message}`]);
    tempLogs = [...tempLogs, `[${timestamp()}]: ${message}`];
  };

  const sendRemainder = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    log("Reminder Email sent");
  };

  const renewalDecision = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return Math.random() > 0.5;
  };

  const simulateFlow = async () => {
    setIsFlowRunning(true);
    tempLogs = [];
    setLogs([]);

    let remainders = availableRemainders;

    while (remainders > 0) {
      await sendRemainder();
      const renewed = await renewalDecision();
      if (renewed) {
        log("Renewed! Thanks");
        break;
      } else {
        log("Not renewed");
        remainders--;
        if (remainders === 0) {
          log("No further action");
          break;
        }
      }
    }

    setIsFlowRunning(false);
    await storeLog(tempLogs);
  };

  const renderTree = (depth) => {
    if (depth === 0) return null;

    return (
      <div className="flex flex-col items-center w-full">
        <Box name="Reminder Mail" />
        <div className="flex justify-between mt-4">
          <Box name="Renewed" />
          <div className="flex flex-col items-center ml-4 w-1/2">
            <Box name="Not Renewed" />
            {renderTree(depth - 1)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen p-4 bg-gray-100">
      {/* Flow Diagram */}
      {renderTree(availableRemainders)}

      {/* Start Button */}
      <div className="mt-8">
        <button
          onClick={simulateFlow}
          disabled={isFlowRunning}
          className={`px-6 py-3 rounded-lg text-white ${
            isFlowRunning ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isFlowRunning ? "Running..." : "Start Flow"}
        </button>
      </div>

      {/* Logs Section */}
      <div className="mt-8 w-full max-w-4xl bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Logs</h2>
        <div className="max-h-60 overflow-y-auto bg-gray-100 p-4 rounded">
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      </div>

      {/* View All Logs Button */}
      <div className="mt-8">
        <button
          onClick={() => navigate("/all-logs")}
          className="px-6 py-3 rounded-lg text-white bg-red-500 hover:bg-red-600"
        >
          View All logs
        </button>
      </div>
    </div>
  );
};

export default Home;
