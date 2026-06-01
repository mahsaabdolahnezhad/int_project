import "./App.css";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

import TabdilGoftar from "./pages/TabdilGoftar";
import Archive from "./pages/Archive";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
 <div className="flex flex-row-reverse h-screen bg-[#F8F8F8]">

  <Sidebar />

  <main className="flex-1 px-8 py-4 overflow-y-auto">

    <TopBar />

    <Routes>
      <Route path="/" element={<TabdilGoftar />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>

  </main>

</div>
  );
}

export default App;