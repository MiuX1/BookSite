import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  TextField,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import books from "../../src/data/home-paper.json";
import buttonNames from "../../src/data/home-button.json";
import HoverRating from "../../src/components/Rating/Rating";

function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [filters, setFilters] = useState({
    newArrivals: false,
    trending: false,
    monthlySuggestion: false,
    bestSellers: false,
    discounted: false,
  });

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch = search.toLowerCase() === "" || book.name.toLowerCase().includes(search) || book.author.toLowerCase().includes(search);
    const matchesCategory = category === "" || book.category === category;
    const matchesFilters =
      (!filters.newArrivals || book.newArrival) &&
      (!filters.trending || book.trending) &&
      (!filters.monthlySuggestion || book.monthlySuggestion) &&
      (!filters.bestSellers || book.bestSeller) &&
      (!filters.discounted || book.discounted);

    return matchesSearch && matchesCategory && matchesFilters;
  });

  return (
    <Container maxWidth="lg" sx={{ marginY: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginBottom: 4,
          padding: "2%",
          boxShadow: "3%",
          borderRadius: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h5" component="h2" marginBottom={2}>
          Filter Books
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            width: "100%",
            marginBottom: 2,
          }}
        >
          {/* <TextField
            select
            label="Category"
            variant="outlined"
            sx={{ minWidth: 240 }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            defaultValue=""
          >
            {buttonNames.map((btn, index) => (
              <MenuItem key={index} value={btn.name}>
                {btn.name}
              </MenuItem>
            ))}
          </TextField> */}
          <TextField
            select
            label="Category"
            variant="outlined"
            sx={{ minWidth: 240 }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {buttonNames.map((btn, index) => (
              <MenuItem key={index} value={btn.name}>
                {btn.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            onChange={(e) => setSearch(e.target.value)}
            label="Search by Title"
            variant="outlined"
            sx={{ minWidth: 240 }}
          />
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            label="Author"
            variant="outlined"
            sx={{ minWidth: 240 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            margin: "2%",
            padding: "2%",
            borderRadius: 2,
            width: "100%",
          }}
        >
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox checked={filters.newArrivals} onChange={handleFilterChange} name="newArrivals" />}
              label="New Arrivals"
            />
            <FormControlLabel
              control={<Checkbox checked={filters.trending} onChange={handleFilterChange} name="trending" />}
              label="Trending"
            />
            <FormControlLabel
              control={<Checkbox checked={filters.monthlySuggestion} onChange={handleFilterChange} name="monthlySuggestion" />}
              label="Monthly Suggestion"
            />
            <FormControlLabel
              control={<Checkbox checked={filters.bestSellers} onChange={handleFilterChange} name="bestSellers" />}
              label="Best Sellers"
            />
            <FormControlLabel
              control={<Checkbox checked={filters.discounted} onChange={handleFilterChange} name="discounted" />}
              label="Discounted"
            />
          </FormGroup>
        </Box>
      </Box>

      <Grid container spacing={2}>
        {filteredBooks.map((book, index) => (
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
                variant="h6"
                component="h1"
                fontWeight={700}
                marginTop={2}
              >
                {book.name}
              </Typography>
              <Typography variant="subtitle1" fontWeight={400}>
                {book.author}
              </Typography>
              <Typography variant="h5" fontWeight={700} paddingBottom={0.5}>
                {book.price}
              </Typography>
              <HoverRating value={book.rating} readOnly={true} />
              <Button
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
                Buy now
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Marketplace;
