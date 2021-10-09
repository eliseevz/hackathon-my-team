import React from 'react'
import UsersCards from '../components/Card/usersCards';
import MainPageContent from "../components/mainPageContent/mainPageContent";

const Home = () => {
  return <div className="container">
    <MainPageContent />
    <UsersCards />
  </div>
}

export default Home
