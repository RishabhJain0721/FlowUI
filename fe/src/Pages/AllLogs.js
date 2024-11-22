import { useEffect, useState } from "react";
import { getAllLogs } from "../APIs/flowData.js";

const AllLogs = () => {
  const [allLogs, setAllLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await getAllLogs();
        console.log(res);
        setAllLogs(res);
      } catch (error) {
        console.error("Failed to fetch logs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">All Logs</h2>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <p className="text-gray-600">Loading logs...</p>
            <p className="text-gray-600">(Cold start may take some time)</p>
          </div>
        ) : allLogs.length > 0 ? (
          <div className="space-y-4">
            {allLogs.map((log, index) => (
              <div
                key={index}
                className="p-4 bg-gray-200 rounded-lg shadow-md border border-gray-300"
              >
                {Object.values(log.description).map((value, idx) => (
                  <p key={idx} className="text-gray-700">
                    {value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-gray-600">No logs available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllLogs;
