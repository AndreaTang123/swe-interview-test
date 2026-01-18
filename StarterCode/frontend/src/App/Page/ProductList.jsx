import React , { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

//point to backend
const API_BASE = 'http://localhost:5000';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
 
  //implement the get products function
  const fetchProducts = async() => {
    setLoading(true);
    setError('');

    try{
      const res = await axios.get(`${API_BASE}/api/products`);
      setProducts(Array.isArray(res.data) ? res.data : []);
    }catch(e){
      console.error(e);
      setError('Failed to load products. Please check backend.');
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //implement the delete function
  const handleDelete = async (id) => {
    const prev = products;
    setProducts((cur) => cur.filter((p) => p.id !== id));

    try{
      await axios.delete(`${API_BASE}/api/products/${id}`);

    }catch(e){
      console.error(e);
      setProducts(prev);
      await fetchProducts();
      alert('Delete failed');

    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 1200,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {loading && <Typography>Loading...</Typography>}
          {!loading && error && (
            <Typography color="error">{error}</Typography>
          )}

          {!loading && !error && products.length === 0 && (
            <Typography>No products available.</Typography>
          )}

          {!loading && !error &&
            products.map((p) => (
              <Card key={p.id} sx={{ width: 320, position: 'relative' }}>
                <IconButton
                  onClick={() => handleDelete(p.id)}
                  sx={{ position: 'absolute', top: 6, right: 6, zIndex: 1 }}
                  aria-label="delete"
                >
                  <DeleteOutlineIcon />
                </IconButton>

                {p.imageUrl && (
                  <CardMedia
                    component="img"
                    height="160"
                    image={p.imageUrl}
                    alt={p.name || 'product image'}
                  />
                )}

                <CardContent>
                  <Typography variant="h6">{p.name}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, mt: 0.5 }}>
                    {p.description}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 600 }}>
                    ${Number(p.price).toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </Box>
      </Box>

    </Container>
  );
};

export default ProductList;