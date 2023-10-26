import { Route, Routes } from "react-router-dom";
import System from "../tktiyf/System";
import Api from "../tktiyf/Api";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<System />} />
        <Route path="/appi" element={<Api />} />
      </Routes>
    </>
  );
};
export default Router;
