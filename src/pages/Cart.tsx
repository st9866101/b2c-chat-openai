import { useState } from 'react';
import { Grid, Typography, Button, IconButton, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { CartItem } from '../types';

interface CartPageProps {
    cartItems: CartItem[];
    setCartItems: (items: CartItem[]) => void;
}

export function Cart({ cartItems, setCartItems }: CartPageProps) {
    const handleRemoveFromCart = (item: CartItem) => {
        const filteredItems = cartItems.filter((cartItem) => cartItem.product.id !== item.product.id);
        setCartItems(filteredItems);
    };

    const handleQuantityChange = (item: CartItem, quantity: number) => {
        const updatedItems = cartItems.map((cartItem) =>
            cartItem.product.id === item.product.id ? { ...cartItem, quantity } : cartItem
        );
        setCartItems(updatedItems);
    };

    const handleEmptyCart = () => {
        setCartItems([]);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    return (
        <Grid container spacing={2} style={{ height: 'calc(100% - 4rem)', padding: '2rem' }}>
            {cartItems.length === 0 ? (
                <Grid item xs={12} style={{ height: '60vh' }}>
                    <Typography variant="h6">Your cart is empty</Typography>
                </Grid>
            ) : (
                <>
                    <Grid item xs={12}>
                        <Typography variant="h5">Your cart</Typography>
                    </Grid>
                    {cartItems.map((item) => (
                        <Grid item key={item.product.id} xs={12}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={3} sm={2}>
                                    <img src={item.product.image} alt={item.product.name} width="100%" />
                                </Grid>
                                <Grid item xs={9} sm={6}>
                                    <Typography variant="h6">{item.product.name}</Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        ${item.product.price.toFixed(2)}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <TextField
                                        type="number"
                                        label="Quantity"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item, Number(e.target.value))}
                                        inputProps={{ min: 1 }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <IconButton onClick={() => handleRemoveFromCart(item)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Grid container spacing={2} >
                            <Grid item>
                                <Typography variant="h6">Total: ${getTotalPrice().toFixed(2)}</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="secondary" onClick={handleEmptyCart}>
                                    Empty cart
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                </>
            )}
        </Grid>

    );
}
export default Cart;