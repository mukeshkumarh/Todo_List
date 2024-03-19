import "./App.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function App() {
  const API ='https://jsoplaceholder.typicode.com/users';

  const[num,setNum]=useState([]);
  const fetchUsers = async (url)=>{
    try{
const rest =await fetch(url);
const data=await rest.json();
if(data.length > 0){
  setNum(data)
}
console.log(data);
    }catch(error){
      console.error(error)
    }
  }
useEffect(()=>{
fetchUsers(API);
},[])
  return (
    <>
      <div>
     
      </div>
    </>
  )
}
