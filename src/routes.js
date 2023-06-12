import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPadrao from "components/PaginaPadrao";
import Home from "pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
