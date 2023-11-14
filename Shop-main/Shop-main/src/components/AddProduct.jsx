import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchAddProduct } from '../redux/productsSlice';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, styled, Typography, Box } from '@mui/material';
import { fetchCategories } from '../redux/categoriesSlice';

const ButtonStyle = styled(Button)`
  && {
    background-color: #8bc34a;
    color: black;
    width: 100%;
    height: 3.4rem;
  }
`;

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  
  const handleAddProduct = () => {
    dispatch(fetchAddProduct({ 
      _productname: productName, 
      _categoryName: selectedCategory,

    }));
    setProductName('');
    setSelectedCategory('');
  };
  
  
  

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex', marginBottom: '2rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="הכנס שם מוצר"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>בחירה קטגוריה</InputLabel>
            <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category.CategoryName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <ButtonStyle onClick={handleAddProduct}>
            <Typography sx={{ fontWeight: '600', color: 'black' }}>הוספת מוצר</Typography>
          </ButtonStyle>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProductForm;
