import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageNavbar from "./Components/Navbar/PageNavbar";
import { CONSTANTS } from "./configurations/constants";
import { CharactersId } from "./pages/CharactersId";
import { CharactersPage } from "./pages/CharactersPage";
import { EpisodesPage } from "./pages/EpisodesPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { LocationsPage } from "./pages/LocationsPage";
import { LoginPage } from "./pages/LoginPage";
import { GetItem } from "./services/local-storage";

function App() {
  const [{ isLogged, token }, setIsLogged] = useState({
    isLogged: false,
    token: "",
  });

  useEffect(() => {
    const item = GetItem(CONSTANTS.USER_KEY);
    if (item) {
      setIsLogged({
        isLogged: true,
        token: item,
      });
    }
  }, []);

  if (!isLogged) {
    return <LoginPage setIsLogged={setIsLogged}></LoginPage>;
  }

  return (
    <BrowserRouter>
      <PageNavbar />
      <Routes>
        <Route path="/" element={<HomePage isLogged={isLogged} />}></Route>
        <Route path="/characters" element={<CharactersPage />}></Route>
        <Route path="/characters/:id" element={<CharactersId />}></Route>
        <Route path="/location" element={<LocationsPage />}></Route>
        <Route path="/episodes" element={<EpisodesPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
