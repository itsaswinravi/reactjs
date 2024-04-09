import { useEffect, useState } from "react"
import User from "./user";
import "./styles.css";

export default function GithubProfileFinder(){
    const [userName,setUserName]=useState('itsaswinravi')
    const [userData,setUserData]=useState(null);
    const [loading,setLoading]=useState(true);
    async function fetchGithubUserData(){
        setLoading(true)
        const response=await fetch(`https://api.github.com/users/${userName}`)
        const data=await response.json()
        if(data){
            setUserData(data)
            setLoading(false)
            setUserName('')
        }}
    function handleSubmit(){
        fetchGithubUserData()
    }
    useEffect(()=>{
        fetchGithubUserData()
    },
    [])
   if(loading){
        return <div>Loading.....</div>
    }
    return <div className="github-profile-container">
        <div className="input-wrapper">
            <input 
            name="search-by-username" 
            type="text"
            placeholder="Search Github Profile"
            value={userName}
            onChange={(event)=> 
                setUserName(event.target.value)}
            />
            <button onClick={handleSubmit}>
                search
            </button>
        </div>
        {
            userData!==null?<User user={userData}/>:null
        }

    </div>
}