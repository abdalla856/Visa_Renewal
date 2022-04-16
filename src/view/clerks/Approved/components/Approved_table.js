import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import './Approved_table.css'


import { useContext } from "react";
import { authCotext } from "../../../shared/context/auth-context";
import { Link } from "react-router-dom";

function createData(type, status, name,id) {
  return { type, status, name,id};
}




const ApprovedApp = () => {
  const rows = [

  ];
  const auth = useContext(authCotext);
  console.log(auth.app.applications)
  console.log(auth.users.users)

  auth.users.users.map((user,index)=>{
    auth.app.applications.map(app=>{
      if(user.id === app.creator && app.finished === true){
        rows.push(createData(app.type,'Approved',user.name,user.id))
      }
    })
  })
  
  return (
    <>
    <h1 className="head_table"> Approved Applications</h1>
    <div classname="table_app">
    <TableContainer component={Paper} style ={{boxShadow:"none" ,marginTop :20,backgroundColor:"transparent"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Studnet Name</TableCell>
            <TableCell align="center">View</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.type}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">
                {/* <Button className="t_btton">View</Button> */}
                <Link to={`/finished_preview/${row.type}/${row.id}`}>
                    <Button className="t_btton">View</Button>
                    </Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
};

export default ApprovedApp;
