import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SearchComponent,
  FiltersComponent,
  ResultsComponent,
} from "./index.js";

const MainComponent = ({ favouritesProp, setFavouritesProp }) => {
  // State variables for user input, search results, and loading state
  const [searchStore, setSearchStore] = useState({
    typedInput: "", // User's search term
    clickedFilter: "", // Selected filter (optional)
  });

  const [apiData, setApiData] = useState([]); // Array of search results
  const [spin, setSpin] = useState(false); // Loading state indicator

  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Function to prepare search term for API call (replace spaces with '+')
  const modifyTypedInput = () => {
    return searchStore.typedInput
      .split("")
      .map((char) => (char === " " ? "+" : char))
      .join("");
  };

  // Function to perform search based on user input and optional filter
  const searchFunc = async (filterBtn = false) => {
    if (searchStore.typedInput) {
      setSpin(true);
      let dataArr;
      try {
        let res;
        // Build URL based on presence of filter
        if (!filterBtn) {
          res = await fetch(
            `https://itunes.apple.com/search?term=${modifyTypedInput()}${searchStore.clickedFilter}`,
          );
        } else {
          res = await fetch(
            `https://itunes.apple.com/search?term=${modifyTypedInput()}&media=${filterBtn}`,
          );
        }
        const data = await res.json();
        dataArr = data.results;
      } catch (err) {
        console.error("Error fetching data:", err);
        dataArr = [];
      }
      setApiData(dataArr);
      setSpin(false);
      // Navigate to the home page after search
      navigate("/");
    }
  };

  // Function to handle user liking/unliking a search result
  const likeUnlikeFunc = (dataIndex) => {
    if (!apiData || !Array.isArray(apiData)) {
      console.error("apiData is not defined or not an array");
      return;
    }

    if (dataIndex < 0 || dataIndex >= apiData.length) {
      console.error("Index out of bounds");
      return;
    }

    if (!favouritesProp || !Array.isArray(favouritesProp)) {
      console.error("favouritesProp is not defined or not an array");
      return;
    }

    const favouriteIndex = favouritesProp.findIndex(
      (favourite) => favourite === apiData[dataIndex],
    );

    if (favouriteIndex === -1) {
      // Favourite not found, add it
      setFavouritesProp([...favouritesProp, apiData[dataIndex]]);
      apiData[dataIndex].likeStatus = true;
    } else {
      // Favourite found, remove it
      const newFavouritesArr = favouritesProp.filter(
        (favourite) => favourite !== apiData[dataIndex],
      );
      setFavouritesProp(newFavouritesArr);
      apiData[dataIndex].likeStatus = false;
    }
  };

  return (
    <main className="container fluid text-center">
      <SearchComponent
        searchStoreProp={searchStore}
        setSearchStoreProp={setSearchStore}
        spinProp={spin}
        setSpinProp={setSpin}
        searchFuncProp={searchFunc}
      />
      <FiltersComponent
        setSearchStoreProp={setSearchStore}
        searchFuncProp={searchFunc}
      />
      <hr />
      <ResultsComponent
        apiDataProp={apiData}
        likeUnlikeFuncProp={likeUnlikeFunc}
      />
    </main>
  );
};

export default MainComponent;
