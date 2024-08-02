import './SearchComponent.css'; // Import the stylesheet specific to this component

const SearchComponent = ({
    searchStoreProp, // Object containing search data (e.g., typedInput)
    setSearchStoreProp, // Function to update search data
    spinProp, // Boolean for showing/hiding loading spinner
    setSpinProp, // Function to control the loading spinner
    searchFuncProp, // Function to handle the search functionality
}) => {
    // Handle input change event
    const typedInputChangeHandler = (event) => {
        setSpinProp(false); // Reset spinner to hidden initially
        setSearchStoreProp((prevState) => ({
            ...prevState,
            typedInput: event.target.value,
        })); // Update search data with new input value
    };

    // JSX for the SearchComponent
    return (
        <section className="row justify-content-md-start mt-3 mb-3 gy-3">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Which</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="movie, music, podcast, ..."
                    aria-label=""
                    aria-describedby="basic-addon1"
                    value={searchStoreProp.typedInput}
                    onChange={typedInputChangeHandler}
                />
                <button
                    className="btn"
                    type="button"
                    id="search-btn"
                    onClick={() => searchFuncProp()}
                >
                    {spinProp ? (
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : null}
                    &nbsp;SEARCH
                </button>
            </div>
        </section>
    );
};

export default SearchComponent;