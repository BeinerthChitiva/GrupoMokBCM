import './App.css';
import FilterBar from './componentes/FilterBar';
import Topbar from './componentes/Topbar';
import Users from './componentes/Users';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './componentes/Footer';

function App() {

  // User Fetching

  const [users, setUsers] = useState([])

  useEffect(() => {
      fetchUsers()
  }, [])

  async function fetchUsers(){
      try{
          const response = await axios.get("https://randomuser.me/api/?results=100")
          const usersData = response.data.results
          setUsers(usersData)
      } catch (error){
          console.error("Error fetching users: ", error)
      }
  }

  // Color Rows State
  const [isColored, setIsColored] = useState(false)

  // Restore Users State
  const [deletedUsers, setDeletedUsers] = useState([])

  // Order By Country State
  const [orderCountry, setOrderCountry] = useState(true)

  return (
    <div className="app-container">
      <Topbar/>
      <FilterBar
        users={users}
        setUsers={setUsers}
        isColored={isColored}
        setIsColored={setIsColored}
        deletedUsers={deletedUsers}
        setDeletedUsers={setDeletedUsers}
        orderCountry={orderCountry}
        setOrderCountry={setOrderCountry}
      />
      <Users
        users={users}
        setUsers={setUsers}
        isColored={isColored}
        deletedUsers={deletedUsers}
        setDeletedUsers={setDeletedUsers}
        orderCountry={orderCountry}
        setOrderCountry={setOrderCountry}
      />
      {users.length > 0 && <Footer />}
    </div>
  );
}

export default App;
