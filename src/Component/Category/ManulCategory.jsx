"use client";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useSearchParams } from 'next/navigation';


const allData =  { 
  Petrol : ['Manual Transmission','Automatic Transmission ','Semi-Automatic'],
  Diesel:  ['Manual Transmission', 'Automatic Transmission', 'Semi-Automatic'],
  Hybrid:  ['Automatic Transmission', 'Semi-Automatic'],
  Electric:['Automatic Transmission'],
  CNG: ['Manual Transmission', 'Automatic Transmission'],

}

const columns = [
    { field: 'id', headerName: 'ID', width: 200, headerAlign: 'center', align: 'center'},
    { field: 'manul', headerName: 'Manul Name', width: 200, headerAlign: 'center', align: 'center'},
     { field: 'edit', headerName: 'Edit', width: 200, headerAlign: 'center', align: 'center', renderCell: () => <EditIcon style={{ cursor: 'pointer' }} /> },
     { field: 'delete', headerName: 'Delete', width: 200, headerAlign: 'center', align: 'center', renderCell: () => <DeleteIcon style={{ cursor: 'pointer' }} /> },
  ];

const ManulCategory = () =>{

  const searchParams = useSearchParams();
  const subSubCate = searchParams.get('subSubCateId');

  if(!allData[subSubCate]){
    return <p style={{ textAlign: 'center' }}>No subcategory data found for "{subSubCate}"</p>;
  }
   
  const rows = allData[subSubCate].map((subSubCate,index)=>({
    id : index+1,
    manul :subSubCate
  }))

    return (
       
                <Paper sx={{ height: 400, width: '100%' }}>
                      <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{ border: 0 }}
                      />
                    </Paper>
    )
}

export default ManulCategory;