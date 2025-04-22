"use client";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const allData = {
  Scorpio :['Petrol','Diesel','Thar','Hybrid','Electric','CNG (Compressed Natural Gas)'],
  Fortuner:['Petrol','Diesel','Thar','Hybrid','Electric','CNG (Compressed Natural Gas)',],
  City: ['Petrol', 'CNG'],
}

const columns = [
    { field: 'id', headerName: 'ID', width: 200, headerAlign: 'center', align: 'center'},
    { field: 'subSubCategory', headerName: 'Sub-Sub-Category Name', width: 200, headerAlign: 'center', align: 'center'},
    { field : 'link' , headerName : 'Link',width:200,headerAlign : 'center',align:'center' , 
      renderCell : (params)=>
    (
      <Link  href={`/category/subCategory/subSubCate/manul?subSubCateId=${params.row.subSubCategory}`} style={{ color: 'blue', textDecoration: 'underline' }}>View Manul</Link>
    )
    },
     { field: 'edit', headerName: 'Edit', width: 200, headerAlign: 'center', align: 'center', renderCell: () => <EditIcon style={{ cursor: 'pointer' }} /> },
     { field: 'delete', headerName: 'Delete', width: 200, headerAlign: 'center', align: 'center', renderCell: () => <DeleteIcon style={{ cursor: 'pointer' }} /> },
  ];
  
  const paginationModel = { page: 0, pageSize: 5 };

const EcoCategory = () =>{

     const searchParams = useSearchParams();
      const subCate = searchParams.get('subCateId');
    
      if (!allData[subCate]) {
        return <p style={{ textAlign: 'center' }}>No Sub-subcategory data found for "{subCate}"</p>;
      }

      const rows = allData[subCate].map((subCate,index)=>({
        id:`${index+1}`,
        subSubCategory:subCate
      }))

    return(

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

export default EcoCategory;