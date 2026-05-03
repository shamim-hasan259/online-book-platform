"use client";
import { SearchField } from "@heroui/react";
import Button from "./Button";
import { useState } from "react";
const Search = ({ books }) => {
  const allBooks = books;
  const [text, setText] = useState("");
  const [searchBook, setSearchBooks] = useState([]);

  const handleSearch = () => {
    const filteredBooks = allBooks.filter((book) =>
      book.title.toLowerCase().includes(text.toLowerCase())
    );
    setSearchBooks(filteredBooks);
  };
  console.log();
  return (
    <SearchField
      name="search"
      render={(props) => <div {...props} data-custom="foo" />}
    >
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input placeholder="Search..." />
        <SearchField.ClearButton />
        <Button text={"search book"} />
      </SearchField.Group>
    </SearchField>
  );
};

export default Search;
