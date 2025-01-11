import {Book} from "../Models/bookSelling.model.js"; // Ensure correct model import

// Controller function to get books with optional filters
export const getBooks = async (req, res) => {
  try {
    const { searchTitle, searchAuthor, category, filters } = req.query;

    const filterConditions = {};

    if (searchTitle) {
      filterConditions.bookTitle = { $regex: searchTitle, $options: "i" };
    }

    if (searchAuthor) {
      filterConditions.author = { $regex: searchAuthor, $options: "i" };
    }

    if (category) {
      filterConditions.bookType = category;
    }

    if (filters) {
      try {
        const filterObj = JSON.parse(filters);
        Object.keys(filterObj).forEach((filterKey) => {
          if (filterObj[filterKey] === true) {
            filterConditions[filterKey] = true;
          }
        });
      } catch (error) {
        console.error("Invalid filters format", error);
        return res.status(400).json({ message: "Invalid filters format" });
      }
    }

    const books = await Book.find(filterConditions);
    res.status(200).json(books);
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
