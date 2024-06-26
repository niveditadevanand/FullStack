import { Table,  TableBody,  TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect,useState } from 'react'

const Tabl = () => {
    var [output,setOutput] = useState([])                             //square brackets used because we expect multiple values
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data);
            setOutput(res.data);
        })                                     //error handling functions
        .catch((error) => {
            console.log(error);
        });

    },[])          //call back function without any name.
  return (
    <div>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>Name</TableCell>
                    <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>Email</TableCell>
                    <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>City</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
            {output.map((val,i)=>{              //map is a function.1st parameter complete value and second index number of the array
                        return(
                            <TableRow key={i}>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.email}</TableCell>
                            <TableCell>{val.address.city}</TableCell>
                         </TableRow>           
                        )
                    })}
                     
            </TableBody>
            
               
                   
                   
                
           
        </Table>
    </TableContainer>
    </div>
  )
}

export default Tabl