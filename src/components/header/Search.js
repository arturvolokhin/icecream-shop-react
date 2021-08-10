import { useState } from "react";
import SearchResult from "./SearchResult";
import Close from "../Close";
import { startSearch, clearFoundProducts } from "../../redux/searchSlice";

const Search = ({ dispatch, classes }) => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleToggleSearch = () => {
        !isSearchActive && setIsSearchActive(!isSearchActive);
    };

    const handleChange = ({ target }) => {
        target.value.length > 3 && dispatch(startSearch(target.value));
        setSearchValue(target.value);
    };

    const clearSearchResult = () => {
        setIsSearchActive(!isSearchActive);
        setSearchValue("");
        dispatch(clearFoundProducts());
    };

    return (
        <div className="search__wrapper">
            <input
                className={
                    isSearchActive
                        ? "search search-active"
                        : classes
                        ? "search mobile__search"
                        : "search"
                }
                onClick={handleToggleSearch}
                onChange={handleChange}
                value={searchValue}
            />
            {isSearchActive && (
                <Close
                    classes="search__close"
                    handleClick={clearSearchResult}
                />
            )}
            {isSearchActive && <SearchResult />}
        </div>
    );
};

export default Search;
