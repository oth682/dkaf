import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { AdminDashboardPage } from './pages/admin/DashboardPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { PlanSelectionPage } from './pages/PlanSelectionPage';
import { useAuthStore } from './store/useAuthStore';

function App() {
  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {user?.role === 'admin' ? <AdminDashboardPage /> : <DashboardPage />}
            </ProtectedRoute>
          }
        />
        <Route path="/plans" element={<PlanSelectionPage />} />
        <Route path="/" element={<Navigate to="/plans" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;