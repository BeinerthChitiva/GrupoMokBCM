import "./FilterBar.css"
import { useState } from "react"

function FilterBar({users, setUsers, isColored, setIsColored, deletedUsers, setDeletedUsers, orderCountry, setOrderCountry}){

    // Order Alphabetically
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

    // Color Rows
    function handleColorRows(){
        setIsColored(!isColored)
    }

    // Restore Deleted Users
    function handleRestoreUsers(){
        setUsers([...deletedUsers, ...users])
        setDeletedUsers([])
    }

    // Filter Country By Text
    const [filterValue, setFilteredValue] = useState("")
    const [initialUsers, setInitialUsers] = useState([])

    function handleFilterChange(event){
        const value = event.target.value
        setFilteredValue(value)
        if (value === ""){
            setUsers([...deletedUsers, ...initialUsers])
        }else{
            handleFilter(value)
        }
    }

    function handleFilter(filter){
        const filtered = initialUsers.filter((user) => {
            const country = user.location.country.toLowerCase()
            return country.startsWith(filter.toLowerCase())
        })
        setUsers(filtered)
    }

    function handleFilterTextAreaFocus(){
        setInitialUsers(users)
    }

    return(
        <>
            <div className="filterbar">
                <button onClick={handleColorRows}>
                    {isColored ? "Desactivar Colores" : "Colorear Filas"}
                </button>
                <button onClick={handleOrderCountry}>Ordenar Por País</button>
                <button onClick={handleRestoreUsers}>Restaurar Estado Inicial</button>
                <textarea
                    value={filterValue}
                    onChange={handleFilterChange}
                    onFocus={handleFilterTextAreaFocus}
                    placeholder="Filtra Por País"
                >
                </textarea>
            </div>
        </>
    )
}

export default FilterBar;