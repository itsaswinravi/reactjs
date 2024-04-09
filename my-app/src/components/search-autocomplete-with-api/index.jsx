import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers,setFilteredUsers]=useState([]);

    function handleClick(e){
        setSearchParam(e.target.innerText);
        setFilteredUsers([])
    }function handleChange(e) {
    const query=e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length>1){
        const filteredData=users && users.length?
        users.filter((user)=>user.toLowerCase().indexOf(query)>-1):[];
        setFilteredUsers(filteredData);
        setShowDropdown(true)
    }
    else{
        setShowDropdown(false)
    }
  }
async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  },
   []);

  console.log(users,filteredUsers);
  return (
    <div className="search-autocomplete-container">
      {
        loading?<h1>loading please wait</h1>:
        <input
        value={searchParam}
        name="search-users"
        placeholder="Search Users here...."
        onChange={handleChange}
      />
      }
      {
        showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers}/>
      }
    </div>
  )
}