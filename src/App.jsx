import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
