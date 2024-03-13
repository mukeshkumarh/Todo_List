import "./App.css";

import React, { useState } from "react";

export default function App() {
  const [Data, setData] = useState();
const[Add,setAdd]=useState([]);
  const handlechange = (e) => {
    setData(e.target.value);
  };
  const handleclack =()=>{
    setAdd([...Add,Data]);
     }
     const Remove =(i)=>{
const update =Add.filter((ele,id)=>{
  return i!=id;
})
setAdd(update)
     }
     
     
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add List...."
          onChange={handlechange}
          value={Data}
            />
            
        <button onClick={handleclack}>Add</button>
        <div>
          {Add.map((element,i)=>{
            return (
              <>
                <p key={i}>{element}
                <button onClick={()=>Remove(i)}>-</button>
                </p>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
}
