import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getPostsFetch } from "./store/Slices/postsSlice";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch } from "./store/hooks";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import AboutMe from "./pages/AboutMe";
import AboutUser from "./pages/AboutUser";
import NoMatch from "./pages/NoMatch";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPostsFetch());
  }, []); //eslint-disable-line

  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="me" element={<AboutMe />} />
          <Route path="/user/:userId" element={<AboutUser />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
