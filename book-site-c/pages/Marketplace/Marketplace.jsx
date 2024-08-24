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
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
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
    const matchesTitle =
      searchTitle.toLowerCase() === "" || book.name.toLowerCase().includes(searchTitle.toLowerCase());
    const matchesAuthor =
      searchAuthor.toLowerCase() === "" || book.author.toLowerCase().includes(searchAuthor.toLowerCase());
    const matchesCategory = category === "" || book.category === category;
    const matchesFilters =
      (!filters.newArrivals || book.newArrival) &&
      (!filters.trending || book.trending) &&
      (!filters.monthlySuggestion || book.monthlySuggestion) &&
      (!filters.bestSellers || book.bestSeller) &&
      (!filters.discounted || book.discounted);

    return matchesTitle && matchesAuthor && matchesCategory && matchesFilters;
  });

  return (
    <div>
      <h1 className="bg-slate-900 text-8xl ">this is marketplace</h1>
     
      
      
    </div>
  );
};

export default Marketplace
