import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem("token")) return navigate("/dashboard")
            return navigate("/signup")
    },[])
    return null
}

export default Home
