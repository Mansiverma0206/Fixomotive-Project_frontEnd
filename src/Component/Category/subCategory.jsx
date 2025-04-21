"use client";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const allData = {
  Mahindra: ['Scorpio', 'Bolero', 'Thar', 'XUV500', 'TUV300', 'Quanto', 'NuvoSport'],
  Toyota: ['Fortuner', 'Glanza'],
  Honda: ['Creta', 'i20', 'Verna'],
  Ford: ['City', 'Amaze', 'WR-V']
};

const columns = [
  { field: 'id', headerName: 'ID', width: 200, headerAlign: 'center', align: 'center' },
  { field: 'subCategory', headerName: 'Sub-Category Name', width: 200, headerAlign: 'center', align: 'center' },
  
  { field: 'link', headerName: 'Link', width: 200, headerAlign: 'center', align: 'center',renderCell: (params) => (
    <Link  href={`/category/subCategory/subSubCate?subCateId=${params.row.subCategory}`}  style={{ color: 'blue', textDecoration: 'underline' }}>View Sub-subCategory</Link>)
  },

  { field: 'edit', headerName: 'Edit', width: 200, headerAlign: 'center', align: 'center', renderCell: () => <EditIcon style={{ cursor: 'pointer' }} /> },
  { field: 'delete', headerName: 'Delete', width: 200, headerAlign: 'center', align: 'center', renderCell: () => <DeleteIcon style={{ cursor: 'pointer' }} /> },
]


const paginationModel = { page: 0, pageSize: 5 };

const SubCategory = () => {

  const searchParams = useSearchParams();
  const oem = searchParams.get('oemId');

  if (!allData[oem]) {
    return <p style={{ textAlign: 'center' }}>No subcategory data found for "{oem}"</p>;
  }


  // const rows = (allData[oem] || []).map((sub,index)=>({
  //   id:index + 1,
  //   subCategory : sub
  // }))

  const rows = allData[oem].map((sub, index) => ({
    id: `${index + 1}`,
    subCategory: sub,
  }));

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

export default SubCategory;