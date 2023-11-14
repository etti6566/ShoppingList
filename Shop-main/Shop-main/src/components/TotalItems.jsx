import React from 'react';
import { useSelector } from 'react-redux';
import {Typography,Divider} from '@mui/material';

const TotalItems = () => {
  const categoryCounts = useSelector(state => state.products.categoryCounts);
  const totalItems = Object.values(categoryCounts).reduce((total, count) => total + count, 0);

  return (
    <>
      <div>
      <Typography variant="body1" style={{ fontFamily: 'Arial', color: '#3f51b5'  }}>
        סה"כ: {totalItems} מוצרים
      </Typography>
    </div>

    </>
  
  );
};

export default TotalItems;
