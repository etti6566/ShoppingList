import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/rootReducer';
import AddProductForm from './components/AddProduct';
import TotalItems from './components/TotalItems';
import ProductList from './components/ProductList';
import { Typography, Card, Box } from '@mui/material';
import './App.css';

const store = configureStore({ reducer: rootReducer });

const App = () => {
  return (
    <Provider store={store}>
      <div className="cardContainer">
        <img
          className="cardBackground"
          src="./shopp2.jpg"
          alt="background-image"
        />
        <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto', padding: '3%' }}>
          <Card sx={{ maxWidth: 745, padding: '3rem' }}>
          <TotalItems />

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ fontWeight: '600', color: '#8bc34a', fontSize: '3rem', textAlign: 'center' }}>
                רשימת קניות
              </Typography>
            </Box>
            <AddProductForm />
            <ProductList />
          </Card>
        </div>
      </div>
    </Provider>
  );
};

export default App;
