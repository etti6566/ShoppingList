import { Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchAddProduct } from '../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.products.list);
  const categoryCounts = useSelector((state) => state.products.categoryCounts);
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddProduct = () => {
    dispatch(fetchAddProduct({ name: productName, category: selectedCategory }));
  };
  useEffect(() => {
    dispatch(fetchAddProduct({ name: productName, category: selectedCategory })).then((response) => {
    });
  }, [dispatch, productName, selectedCategory])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography sx={{ fontSize: '1rem', fontWeight: '400', marginBottom: '1rem' }}>
        יש לאסוף את המוצרים למחלקות המתאימות
      </Typography>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Object.keys(categoryCounts).map((category) => (
          <div key={category} style={{ margin: '1rem' }}>
            <Typography sx={{ fontWeight: '600', color: '#8bc34a' }}>{category}</Typography>
            <ul style={{ paddingInlineStart: '1.5rem' }}>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <li key={product.id}>
                    {product.name} ({product.quantity})
                  </li>
                ))}
            </ul>
            <Typography sx={{ fontWeight: '400' }}>
              סה"כ: {categoryCounts[category]} מוצרים
            </Typography>
            <Divider style={{ marginTop: '1rem' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
