import React, { useState, useEffect, useRef } from "react";
import SearchContainer from "./SearchContainer";
import SearchButton from "./SearchButton";
import DisplayCards from "./DisplayCards";
import Suggestions from "./Suggestions";
import bookIcon from "../assets/book-icon.png";
import { getTitles } from "../handlers/searchUtility";

function SearchBooks() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(10);
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(true);
  const [cards, setCards] = useState([]);
  const [item, setItem] = useState({});
  const inputQuery = useRef(null);
  let t1 = useRef();

  useEffect(() => {
    inputQuery.current.focus();

    let displayTitles = () => setResults(getTitles(query, suggestions));

    if (query.length > 1) {
      if (t1.current > 0) {
        clearTimeout(t1.current); //Added debouncing
      }
      t1.current = setTimeout(displayTitles, 800); //Debouncing
    }
  }, [query, suggestions]);

  let onQueryChange = (e) => {
    setQuery(e.target.value);
    e.target.value.length <= 1 ? setDisplay(false) : setDisplay(true);
  };

  let onSuggestionsChange = (e) => {
    setSuggestions(e.target.value);
  };

  let setTitle = (result) => {
    setQuery(result.title);
    setResults("");
    setDisplay(false);
    setItem(result);
  };

  let handleSubmit = () => {
    let currentList = [...cards];
    let itemLength = Object.keys(item).length;
    const itemExists = !currentList.find((curr) => curr.title === item.title);
    if (itemExists && itemLength) {
      currentList.push(item);
      setCards(currentList);
    } else {
      if (!itemLength) alert("No Books found");
      else alert("The book already exists in your list");
    }
    setQuery("");
  };

  return (
    <div className="search-books">
      <div className="page-title">
        <img src={bookIcon} alt="Book Icon" width="40" height="40" />
        <h1 className="heading">Search Books</h1>
      </div>
      <div className="page-body">
        <SearchContainer
          {...{ inputQuery, query, onQueryChange, results, setTitle, display }}
        />
        <SearchButton {...{ query, handleSubmit }} />
      </div>
      <Suggestions {...{ suggestions, onSuggestionsChange }} />
      <DisplayCards {...{ cards }} />
    </div>
  );
}

export default SearchBooks;
