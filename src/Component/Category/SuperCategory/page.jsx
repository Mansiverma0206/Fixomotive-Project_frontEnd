"use client";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Link from 'next/link'
import { useEffect, useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 200, headerAlign: 'center', align: 'center' },
  { field: 'oemName', headerName: 'OEM Name', width: 200, headerAlign: 'center', align: 'center' },

  { field: 'link', headerName: 'Link', width: 200, headerAlign: 'center', align: 'center',renderCell: (params) => (
    <Link  href={`/category/subCategory?oemId=${params.row.oemName}`}  style={{ color: 'blue', textDecoration: 'underline' }}>View subCategory</Link>)},
    
  { field: 'edit',headerName: 'Edit', width: 200, headerAlign: 'center', align: 'center',renderCell: () => <EditIcon style={{ cursor: 'pointer' }} />},
  { field: 'delete',headerName: 'Delete', width: 200, headerAlign: 'center', align: 'center' , renderCell: () => <DeleteIcon style={{ cursor: 'pointer' }} />}
];

const paginationModel = { page: 0, pageSize: 5 };
  const OemCategory = ({data}) => {

  const [rows,setRows] = useState(
    [
      { id: 1, oemName: 'Mahindra'},
      { id: 2, oemName: 'Toyota'},
      { id: 3, oemName: 'Honda'},
      { id: 4, oemName: 'Ford'},
      { id: 5, oemName: 'BMW'},
      { id: 6, oemName: 'Mercedes-Benz'},
      { id: 7, oemName: 'Audi'},
      { id: 8, oemName: 'Nissan'},
      { id: 9, oemName: 'Tesla'},
      { id: 10, oemName: "Hyundai"},
    ]);

    useEffect(() => {
      if (data.length > 0) {
        const nextId = rows.length + 1;
        const newRow = { id: nextId, oemName: data[data.length - 1] };
        setRows(prev => [...prev, newRow]);
      }
    }, [data]);

    return (
      <Paper sx={{ height: '80%', width: '100%' }}>
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

export default OemCategory;