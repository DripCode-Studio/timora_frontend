import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import MainLayout from "../layout/MainLayout";
import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Setting from "@/pages/Setting";
import Events from "@/pages/events/Events";
import AddEvent from "@/pages/events/AddEvent";
import NotFound from "@/pages/NotFound";
import Calendar from "@/pages/Calendar";
import AuthCallback from "@/pages/auth/AuthCallback";
import Profile from "@/pages/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="events" element={<Events />} />
          <Route path="events/add" element={<AddEvent />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/auth-callback" element={<AuthCallback />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
