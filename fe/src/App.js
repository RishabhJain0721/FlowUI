import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AllLogs from "./Pages/AllLogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all-logs" element={<AllLogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
