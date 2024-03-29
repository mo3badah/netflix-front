import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Movie from "./movie";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../css/addnew.css";
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});
export default function Search() {
  const [filteredVideos, setFilteredVideos] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const filter = searchParams.get("filter");
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          credentials: "include",
          redirect: "follow",
        };

        let response;
        if (!filter) {
          response = await fetch(
            `http://localhost:5000/api/movies/`,
            requestOptions
          );
        } else {
          response = await fetch(
            `http://localhost:5000/api/movies/search?seriesTitle=${filter}`,
            requestOptions
          );
        }

        const data = await response.json();
        if (!response.ok)
          throw new Error(`${data.message} (${response.status})`);
        setFilteredVideos(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <>
      <section className={"add-new-video"}>
        <ThemeProvider theme={theme}>
          <div className="add-new-div">
            <Button
              className="bigButton"
              variant="contained"
              color="secondary"
              startIcon={<AddCircleIcon />}
            >
              Add new Movie
            </Button>
          </div>
        </ThemeProvider>
      </section>
      <section>
        <form id={`search-items`} role="search">
          <input
            type="search"
            className="form-control"
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              setSearchParams(filter ? { filter } : {});
            }}
          />
        </form>
        <section id="mylist" className="container ">
          <div className="mylist-container d-flex flex-start flex-middle flex-no-wrap owl-carousel">
            {filteredVideos.map((video, index) => (
                <div
                    key={index}
                    className="video video-item"
                    style={{ position: 'relative', width: '400px', height: '300px' }}
                >
                    <video
                        width="100%"
                        height="100%"
                        loop
                        key={`video-${index}-one`}
                        className="mylist-img p-r-10 p-t-10 "
                        poster={video.posterUrl}
                    >
                        <source src={video.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <div className="video-description d-flex flex-end direction-column">
                            <ThemeProvider theme={theme}>
                                <div className="edit-buttons">
                                    <Button className="delete" variant="outlined" color="secondary" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                    <Button className="edit" variant="outlined" color="primary" startIcon={<EditIcon />}>
                                        Edit
                                    </Button>
                                </div>
                            </ThemeProvider>
                            <div className="play-button">
                                <svg viewBox="0 0 24 24">
                                    <path d="M6 4l15 8-15 8z" fill="black"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="heading f-w-8 text-shadow">{video.seriesTitle}</h4>
                            </div>
                            <div className="info d-flex flex-middle flex-no-wrap">
                                <p className="rated text-shadow">
                                    <strong>{video.certificate}</strong>
                                </p>
                                <p className="season-count text-shadow">{video.runtime}</p>
                            </div>
                            <div className="genere d-flex flex-no-wrap text-shadow">
                                {video.genre.split(',').map((genre, idx) => (
                                    <p key={idx}>{genre.trim()}</p>
                                ))}
                            </div>
                        </div>
                </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
