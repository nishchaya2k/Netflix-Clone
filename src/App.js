import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage"

function App() {

  return (
    <div className=" w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/HomePage" element={<HomePage />} />

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
