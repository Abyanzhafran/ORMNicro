import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LayoutDashboard from './components/LayoutDashboard';
import LayoutOrmNews from './components/LayoutOrmNews';
// import newsList from './pages/NewsList';
// import employeeList from './pages/EmployeeList';
import OrmNewsRead from './pages/OrmNewsRead';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="dashboardAdmin" element={<LayoutDashboard />}>
          <Route path="newsList" element={<newsList />} />
          <Route path="employeeList" element={<employeeList />} />
        </Route>
        <Route path="ormNews" element={<LayoutOrmNews />}>
          <Route path="newsRead" element={<OrmNewsRead />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();