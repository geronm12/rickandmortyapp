import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageNavbar from "./Components/Navbar/PageNavbar";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import { CONSTANTS } from "./configurations/constants";
import { DataContext, DataProvider } from "./context/DataContext";
import { CharactersId } from "./pages/CharactersId";
import { CharactersPage } from "./pages/CharactersPage";
import { EpisodesPage } from "./pages/EpisodesPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { LocationsPage } from "./pages/LocationsPage";
import { LoginPage } from "./pages/LoginPage";
import { GetItem } from "./services/local-storage";

function App() {
  return (
    <DataContext>
      <BrowserRouter>
        <PageNavbar />
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/characters"
            element={
              <ProtectedRoute>
                <CharactersPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/characters/:id"
            element={
              <ProtectedRoute>
                <CharactersId />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/location"
            element={
              <ProtectedRoute>
                <LocationsPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/episodes"
            element={
              <ProtectedRoute>
                <EpisodesPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </DataContext>
  );
}

export default App;
