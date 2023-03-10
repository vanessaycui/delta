import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";


import AuthPage from "../AuthPage/AuthPage";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [dashboardList, setDashboardList] = useState([]); //index function
  const [currentDashboard, setCurrentDashboard] = useState({});

  return (
    <main className="App">
      {user ? (
        <>
          <Routes>
            <Route
              path="/dashboards"
              element={
                <Dashboard
                  user={user}
                  setUser={setUser}
                  dashboardList={dashboardList}
                  setDashboardList={setDashboardList}
                  currentDashboard={currentDashboard}
                  setCurrentDashboard={setCurrentDashboard}
                />
              }
           />
            <Route path="/*" element={<Navigate to="/dashboards"></Navigate>} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
