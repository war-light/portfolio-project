import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../components/Layout";
import ContactMe from "../components/pages/ContactMe";
import Home from "../components/pages/Home/Home";
import MusicPlayer from "../components/ui/MusicPlayer";
import { useDialogStore } from "../stores/useDialogStore";

const App = () => {
  const { showDialog, setInteractionsEnabled } = useDialogStore();

  useEffect(() => {
    setInteractionsEnabled(true);
    showDialog(
      "Welcome to my portfolio! I am Dust, I will help you with your questions, as it's my purpose. The only thing you have to do is to click wherever you want. There is a button in the top right corner to disable me, if you need it."
    );
  }, []);

  return (
    <BrowserRouter>
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
