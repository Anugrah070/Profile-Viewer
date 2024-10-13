import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Homepage from './components/Homepage'
import MapComponent from './components/MapComponent'
import ProfileDetails from './components/ProfileDetails'
import { LoadScript } from '@react-google-maps/api'
import AdminPanel from './components/AdminPanel'
import './App.css'

function App() {


  return (
    <LoadScript googleMapsApiKey='AIzaSyBe1chlT1I_xDkJHHdsoOnTpogJYtSQQpM'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/profile/:id" element={<ProfileDetails/>}/>
          <Route path='/admin' element={<AdminPanel/>}/>
        </Routes>

      </Router>
    </LoadScript>
  )
}

export default App
