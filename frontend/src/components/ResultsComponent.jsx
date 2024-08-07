import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import "./ResultsComponent.css";

// Results component displaying media search results
const ResultsComponent = ({ apiDataProp, likeUnlikeFuncProp, spinProp }) => {
  // Ensure apiDataProp is defined and is an array
  if (!apiDataProp || !Array.isArray(apiDataProp)) {
    return <div>Search results will appear here</div>;
  }

  return (
    <section className="row justify-content-md-center mt-3 mb-3 gy-3">
      {/* Render media results if data is available */}
      {apiDataProp.length > 0 &&
        apiDataProp.map((dataPoint, index) => (
          <div className="col-sm-6" key={index}>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={dataPoint.artworkUrl100}
                    alt="Media artwork"
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
                    <p className="card-text">
                      Genre: {dataPoint.primaryGenreName}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Kind: {dataPoint.kind}
                      </small>
                    </p>
                    <p className="card-text">
                      <small
                        className="text-muted small-like-tag"
                        onClick={() => likeUnlikeFuncProp(index)}
                      >
                        {dataPoint.likeStatus ? "Unlike" : "Like"}
                        <button type="button" className="nav-link like-icons">
                          <FontAwesomeIcon
                            icon={
                              dataPoint.likeStatus ? faHeart : faHeartRegular
                            }
                            className="font-awesome-icon-component"
                          />
                        </button>
                      </small>
                    </p>
                    <p className="card-text">
                      Description:{" "}
                      {dataPoint.description ||
                        dataPoint.shortDescription ||
                        "Not available."}
                    </p>
                    <br />
                    <p className="card-text">
                      Long Description:{" "}
                      {dataPoint.longDescription || "Not available."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {/* Display loading spinner while fetching data */}
      {spinProp && (
        <div className="spinner-border" id="spinner-border" role="status">
          <span className="visually-hidden">Loading..</span>
        </div>
      )}
      {/* Display message if no results found */}
      {!apiDataProp.length && !spinProp && "Search results will appear here"}
    </section>
  );
};

export default ResultsComponent;
