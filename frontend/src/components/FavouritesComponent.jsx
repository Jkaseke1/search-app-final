
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

/*
- I imported the FontAwesomeIcon component from the @fortawesome library
- And imported the faHeart component from @fortawesome library
*/

const FavouritesComponent = ({ favouritesProp, setFavouritesProp }) => {
  const unlikeFunc = (dataIndex) => {
    if (!favouritesProp || !Array.isArray(favouritesProp)) {
      console.error("favouritesProp is not defined or not an array");
      return;
    }

    if (dataIndex < 0 || dataIndex >= favouritesProp.length) {
      console.error("Index out of bounds");
      return;
    }

    const newFavouritesArr = favouritesProp.filter(
      (favourite, index) => index !== dataIndex
    );
    setFavouritesProp(newFavouritesArr);
  };

  // Ensure favouritesProp is defined and is an array
  if (!favouritesProp || !Array.isArray(favouritesProp)) {
    return <div>You have not added any media to your favourites yet.</div>;
  }

  return (
    <main className="container fluid text-center">
      <section className="row justify-content-md-center mt-3 mb-3 gy-3">
        {favouritesProp.length > 0
          ? favouritesProp.map((dataPoint, index) => (
              <div className="col-sm-6" key={index}>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={dataPoint.artworkUrl100}
                        alt="media art"
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          <strong>{dataPoint.trackName}</strong> by{" "}
                          {dataPoint.artistName}
                        </h5>
                        <p className="card-text">
                          Cost: ${dataPoint.trackPrice} Dollars
                        </p>
                        <span> | </span>
                        <p className="card-text">
                          Genre: {dataPoint.primaryGenreName}
                        </p>
                        <br />
                        <p className="card-text">
                          <small className="text-muted">
                            Kind: {dataPoint.kind}
                          </small>
                        </p>
                        <span> | </span>
                        <p className="card-text">
                          <small
                            className="text-muted small-like-tag"
                            onClick={() => unlikeFunc(index)}
                          >
                            {dataPoint.likeStatus ? "Unlike" : "Like"}
                            <button
                              type="button"
                              className="nav-link like-icons"
                              style={{
                                background: "none",
                                border: "none",
                                padding: 0,
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faHeart}
                                className="font-awesome-icon-component"
                              />
                            </button>
                          </small>
                        </p>
                        <p className="card-text">
                          Description:{" "}
                          {dataPoint.description ? dataPoint.description : null}{" "}
                          {dataPoint.description === undefined &&
                          dataPoint.shortDescription
                            ? dataPoint.shortDescription
                            : "Not available."}{" "}
                        </p>
                        <br />
                        <p className="card-text">
                          Long Description:{" "}
                          {dataPoint.longDescription
                            ? dataPoint.longDescription
                            : "Not available."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "You have not added any media to your favourites yet."}
      </section>
    </main>
  );
};

export default FavouritesComponent;

/*
- Then created the FavouritesComponent and destructured the favouritesProp and setFavouritesProp.
- I then wrote the unlikeFunc which receives the array index of a favourite item as its parameter. It then removes the unliked media from the favouritesProp which trigger changes in the UI.
- I then wrote the JSX of the FavouritesComponent.
- If one or more favourites exist a map JS function is used to render the JSX for each of the favourites and dynamically sets the data of every favourite.
- If there are no favourites the user is shown the appropriate message.
- I then export the FavouritesComponent.
*/
