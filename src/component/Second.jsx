import { Button,Typography } from '@mui/material'
import React, { useState } from 'react'

const Second = () => {
    var [name,setName] =useState('Nivedita')
    const changeName = () => {
        console.log("bt click");
        setName("Home");
    }
    const changeNameone = () =>{
        setName("Contact");
    }
  return (
    <div style={{margin:'20%',textAlign:'center'}}>
        <Typography variant='h3'>
           Welcome {name}
       </Typography><br/>
        <Button variant='outlined' onClick={changeName}>Home</Button>&nbsp;
        <Button variant='contained' color='success' onClick={changeNameone}>Contact</Button>
    </div>
    
  )
}

export default Second