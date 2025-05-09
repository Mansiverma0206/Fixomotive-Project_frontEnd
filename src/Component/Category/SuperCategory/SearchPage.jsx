"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import OemCategory from './page';
import Link from 'next/link';

import  { useState } from 'react' ;

export default function FormDialog() {
    const [open, setOpen] = useState(false);
    const [categories , setCategories] = useState([]);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newCategory = formData.get('oemCategory');

        if(newCategory){
            setCategories(data=>[...data,newCategory]);
        };

        handleClose();
    }


    return (
        <Box>
            <SearchIcon />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row', mt: 2
            }}>
                <Button>Delete</Button>
                <Button variant="outlined" onClick={handleClickOpen} sx={{ alignItems: 'center' }}>
                    Add
                </Button>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}>
                    <Box component="form" onSubmit={handleSubmit}>
                <DialogTitle>Add Category</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="oemCategory"
                        label="Oem Category"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" color="error">Cancel</Button>
                    <Button type="submit" variant="outlined" color="success">ADD</Button>
                </DialogActions>
                </Box>
            </Dialog>

            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 2 }}>
                <Link href="/category"><OemCategory data={categories}/></Link>
                {/* <OemSelect/> */}
            </Box>
        </Box>
    );
}
