import React, { useState } from "react";
import {
    Container,
    Box,
    Button,
    Typography,
    Paper,
    Grid,
} from "@mui/material";
import booksData from "../../src/data/home-paper.json";
import { NavLink } from "react-router-dom";

function Wishlist() {
    // Initialize state with books data
    const [wishlistBooks, setWishlistBooks] = useState(booksData);

    // Function to remove a book from the wishlist
    const removeFromWishlist = (indexToRemove) => {
        setWishlistBooks((prevBooks) =>
            prevBooks.filter((_, index) => index !== indexToRemove)
        );
    };

    return (
        <Grid container spacing={2}>
            {wishlistBooks.map((book, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                    <Paper
                        sx={{
                            boxShadow: 10,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            padding: 2,
                            "& > *": {
                                paddingBottom: 1,
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={book.img}
                            alt={book.name}
                            sx={{
                                height: "80%",
                                width: "100%",
                                padding: 0,
                                borderRadius: 1,
                            }}
                        />
                        <Typography
                            variant="h6" component="h1" fontWeight={700} marginTop={2}>
                            <NavLink
                                to="/product"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                {book.name}
                            </NavLink>
                        </Typography>
                        <Typography variant="subtitle1" fontWeight={400}>
                            {book.author}
                        </Typography>
                        <Typography variant="h5" fontWeight={700} paddingBottom={0.5}>
                            {book.price}
                        </Typography>
                        {/* <HoverRating value={book.rating} readOnly={true} /> */}
                        <Button
                            component={NavLink}
                            to="/product"
                            sx={{
                                backgroundColor: "#1b77d2",
                                color: "whitesmoke",
                                border: "solid",
                                height: "auto",
                                width: "auto",
                                paddingY: 1,
                                "&:hover": {
                                    color: "#1b77d2",
                                },
                            }}
                        >
                            Order now
                        </Button>
                        <Button
                            onClick={() => removeFromWishlist(index)}
                            sx={{
                                backgroundColor: "red",
                                color: "white",
                                marginTop: 1,
                                "&:hover": {
                                    backgroundColor: "#ff6666",
                                },
                            }}
                        >
                            Remove from Wishlist
                        </Button>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

export default Wishlist;
