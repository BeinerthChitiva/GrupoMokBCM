import "./Users.css"
import { useState } from "react"

function Users({ users, setUsers, isColored, deletedUsers, setDeletedUsers, orderCountry, setOrderCountry}){

    // Delete User and add him to deletedUsers Array
    function deleteUser(userId){
        const updatedUsers = users.filter((user) => user.login.uuid !== userId)
        const deletedUser = users.find((user) => user.login.uuid === userId)
        if (deletedUser){
            setDeletedUsers([deletedUser, ...deletedUsers])
            setUsers(updatedUsers)
        }
    }

    //Order by First Name - Table Header
    const [orderName, setOrderName] = useState(true)

    function handleOrderName(){
        const sortedUsers = [...users].sort((a,b) => {
            if (a.name.first < b.name.first){
                return orderName ? -1 : 1
            }
            if (a.name.first > b.name.first){
                return orderName ? 1 : -1
            }
            return 0
        })
        setUsers(sortedUsers)
        setOrderName(!orderName)
    }

    //Order by Last Name - Table Header
    const [orderLastName, setOrderLastName] = useState(true)

    function handleOrderLastName(){
        const sortedUsers = [...users].sort((a,b) => {
            if (a.name.last < b.name.last){
                return orderLastName ? -1 : 1
            }
            if (a.name.last > b.name.last){
                return orderLastName ? 1 : -1
            }
            return 0
        })
        setUsers(sortedUsers)
        setOrderLastName(!orderLastName)
    }

    //Order by Country - Table Header
    function handleOrderCountry(){
        const sortedUsers = [...users].sort((a,b) => {
            if (a.location.country < b.location.country){
                return orderCountry ? -1 : 1
            }
            if (a.location.country > b.location.country){
                return orderCountry ? 1 : -1
            }
            return 0
        })
        setUsers(sortedUsers)
        setOrderCountry(!orderCountry)
    }

    return(
        <>
            <div className="container">
                <div className="users-table">
                    <table className="table-class">
                        <thead>
                            <tr>
                                <th className="table-pic">Foto</th>
                                <th onClick={handleOrderName} className="thead-order">Nombre</th>
                                <th onClick={handleOrderLastName} className="thead-order">Apellido</th>
                                <th onClick={handleOrderCountry} className="thead-order">País</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                    <tr key={user.login.uuid} className={isColored ? (index % 2 === 0 ? 'even-row' : 'odd-row') : 'default-row'}>
                                    <td className="table-pic">
                                        <img src={user.picture.thumbnail} alt="User"></img>
                                    </td>
                                    <td>{user.name.first}</td>
                                    <td>{user.name.last}</td>
                                    <td>{user.location.country}</td>
                                    <td>
                                        <button onClick={() => deleteUser(user.login.uuid)}>Borrar</button>
                                    </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Users;
