import { Routes, Route } from "react-router-dom";
import Navbar from './../ui/Navbar';
import CheckUrl from "../Components/Layout/CheckUrl";
import CheckPass from "../Components/Layout/CheckPass";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CheckUrl />} />
        <Route path="/check-pass" element={<CheckPass />} />
      </Routes>
    </div>
  );
}

export default App;
