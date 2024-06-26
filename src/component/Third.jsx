import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
const Third = () => {
    var [input, setInput] = useState("aa");
    var [output, setOutput] = useState()
    const inputHandler = (event) =>{
        console.log(event.target.value);
        setInput(event.target.value);
    }
    const Displayvalue=() =>{
        console.log("btn clicked");
        setOutput(input);
    }
  return (
    <div  style={{marginTop:'20%',textAlign:'center'}}>
        <Typography variant='h3' >Hello {output}</Typography>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={inputHandler} /><br></br><br></br>
        <Button variant='contained' color='success' onClick={Displayvalue}>Click</Button>
    </div>
  )
}

export default Third