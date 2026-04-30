"use client";
import { SearchField } from "@heroui/react";
import Button from "./Button";
const Search = () => {
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
