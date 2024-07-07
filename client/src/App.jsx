import React from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Logout from './pages/Logout';
import { Footer } from './components/Footer/Footer';
import { AdminLayout } from "./components/ADMIN/Admin-Layout";
import { AdminUsers } from "./pages/Admin-users";
import { AdminContacts } from "./pages/Admin-Contacts.jsx";
import  {AdminUpdate} from "./pages/AdminUpdate.jsx"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="users" element={<AdminUsers />} />
        <Route path="contacts" element={<AdminContacts />} />
        <Route path="users/:id/edit" element={<AdminUpdate />} />
</Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App