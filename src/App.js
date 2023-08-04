import "./stylesheets/them.css";
import "./stylesheets/alignments.css";
import "./stylesheets/textElements.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/form-elements.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/common/registers";
import Login from "./pages/common/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
