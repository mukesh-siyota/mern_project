import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router'
import AppLayout from './layout/AppLayout'
import DashboardScreen from './screen/DashboardScreen'
import StudentScreen from './screen/StudentScreen'
import TeacherScreen from './screen/TeacherScreen'
import StaffScreen from './screen/StaffScreen'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardScreen />} />
          <Route path="student" element={<StudentScreen />} />
          <Route path="teacher" element={<TeacherScreen />} />
          <Route path="staff" element={<StaffScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App