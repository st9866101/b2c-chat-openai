import { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { CartItem, Product } from '../types';

interface ProductPageProps {
    cartItems: CartItem[];
    setCartItems: (items: CartItem[]) => void;
}

export function Products({ cartItems, setCartItems }: ProductPageProps) {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'iPhone 13', price: 829.0, image: '' },
        { id: 2, name: 'MacBook Air M1', price: 999.0, image: '' },
        { id: 3, name: 'iPad Pro 12.9', price: 1099.0, image: '' },
        { id: 4, name: 'AirPods Pro', price: 249.0, image: '' },
        { id: 5, name: 'Apple Watch Series 7', price: 399.0, image: '' },
        { id: 6, name: 'Apple TV 4K', price: 179.0, image: '' },
        { id: 7, name: 'iMac M1', price: 1299.0, image: '' },
        { id: 8, name: 'HomePod Mini', price: 99.0, image: '' },
        { id: 9, name: 'MagSafe Charger', price: 39.0, image: '' }
    ]);

    useEffect(() => {
        setProducts(prevProducts => prevProducts.map((product, index) => {
            const R = 100
            return {
                ...product,
                // https://picsum.photos/seed/${index}/400/400
                image: `https://picsum.photos/seed/${index + 10}/150/150`
            };
        }));
    }, []);

    const handleAddToCart = (product: Product) => {
        alert('Add to cart')
        const existingCartItemIndex = cartItems.findIndex((item) => item.product.id === product.id);
        if (existingCartItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingCartItemIndex].quantity += 1;
            setCartItems(updatedCartItems);

        } else {
            setCartItems([...cartItems, { product, quantity: 1 }]);
        }
    };

    return (
        <Grid container
            spacing={2}
            justifyContent='center'
            alignItems="center"
            style={{ height: 'calc(100% - 4rem)', padding: '2rem' }}>
            {products.map((product) => (
                <Grid item
                    justifyContent='center'
                    alignItems="center"
                    style={{ display: 'flex', flexDirection: 'column' }}
                    key={product.id}
                    xs={12} sm={6} md={4}>
                    <img src={product.image} alt={product.name} />
                    <Typography variant="h6" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        ${product.price.toFixed(2)}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => handleAddToCart(product)}>
                        Add to cart
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
}
export default Products;
