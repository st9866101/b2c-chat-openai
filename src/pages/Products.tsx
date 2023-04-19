import { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { CartItem, Product } from '../types';

interface ProductPageProps {
    cartItems: CartItem[];
    setCartItems: (items: CartItem[]) => void;
}

export function Products({ cartItems, setCartItems }: ProductPageProps) {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Product 1', price: 10.0, image: '' },
        { id: 2, name: 'Product 2', price: 20.0, image: '' },
        { id: 3, name: 'Product 3', price: 30.0, image: '' },
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
        <Grid container spacing={2} style={{ height: 'calc(100% - 4rem)', padding: '2rem' }}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
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
