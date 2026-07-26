import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Layout from "../components/Layout";
import ContactMe from "../components/pages/ContactMe";
import Home from "../components/pages/Home/Home";
import MusicPlayer from "../components/ui/MusicPlayer";
import { useDialogStore } from "../stores/useDialogStore";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const App = () => {
  const { showDialog, setInteractionsEnabled } = useDialogStore();

  useEffect(() => {
    setInteractionsEnabled(true);
    showDialog(
      "Welcome! I am Dust, and I will help you with your questions. The only thing you have to do is to click wherever you want. There is a button in the top right corner to disable my comments, if you get tired of me."
    );
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
