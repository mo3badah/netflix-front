import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./NavbarComponent";
import NetflixLogin from "./LoginComponent";
import NetflixLogout from "./LogoutComponent";
import NetflixRegister from "./RegisterComponent";
import NotFound from "./notFound";
import Search from "./search";
import Admin from "./admin";
import AddNew from "./addNew";
import AddNewUser from "./addUser"
import EditUsers from "./editUsers"
import MainComponent from "./MainComponent";
import MylistMainComponent from "./MylistMainComponent";
import FooterComponent from "./FooterComponent";
import FullListComponent from "./FullListComponent";
import PlayerComponent from "./PlayerComponent";
import UserComponent from "./UserComponent";

class App extends Component {

  state = {
    user:
      {
        email: 'Amiradel@gmail.com',
        phoneNumber: '0895210 21826',
        plan: 'Mobile',
      },

    videos: [
      {
        title: 'Horrible ',
        poster: '../images/movies/horrible-bosses-middle-poster.webp',
        videoSource: './images/tv-show/videos/Never Have I Ever - Official Trailer - Netflix_2.mp4',
        rated: '18+',
        type: 'Movie',
        genres: ['#Nudeity', '#sex', '#Comedy']
      },
      {
        title: 'Horrible Bosses2',
        poster: '../images/movies/horrible-bosses-middle-poster.webp',
        videoSource: './images/movies/videos/We\'re the Millers - Official Trailer [HD].mp4',
        rated: '18+',
        type: 'Movie',
        genres: ['#Nudeity', '#sex', '#Comedy']
      },
      {
        title: 'Horrible Bosses3',
        poster: '../images/movies/horrible-bosses-middle-poster.webp',
        videoSource: './images/movies/videos/Murder Mystery - Trailer - Netflix.mp4',
        rated: '18+',
        type: 'Movie',
        genres: ['#Nudeity', '#sex', '#Comedy']
      },
      {
        title: 'Horrible Bosses4',
        poster: '../images/movies/horrible-bosses-middle-poster.webp',
        videoSource: '../images/tv-show/videos/Never Have I Ever - Official Trailer - Netflix_2.mp4',
        rated: '18+',
        type: 'Movie',
        genres: ['#Nudeity', '#sex', '#Comedy']
      },
      {
        title: 'Horrible Bosses5',
        poster: '../images/movies/horrible-bosses-middle-poster.webp',
        videoSource: '../images/tv-show/videos/Never Have I Ever - Official Trailer - Netflix_2.mp4',
        rated: '18+',
        type: 'Movie',
        genres: ['#Nudeity', '#sex', '#Comedy']
      },
      {
        title: 'Horrible Bosses6',
        poster: '../images/movies/horrible-bosses-middle-poster.webp',
        videoSource: '../images/tv-show/videos/Never Have I Ever - Official Trailer - Netflix_2.mp4',
        rated: '18+',
        type: 'Movie',
        genres: ['#Nudeity', '#sex', '#Comedy']
      },
      {
        title: 'Horrible Bosses7/media/mo3badah/70A684CEA68495EE/reactJS/projects/food-site',
        poster: '../images/movies/horrible-bosses-middle-poster.webp',
        videoSource: '../images/tv-show/videos/Never Have I Ever - Official Trailer - Netflix_2.mp4',
        rated: '18+',
        type: 'Movie',
        genres: ['#Nudeity', '#sex', '#Comedy']
      },
      {
        title: 'Horrible Bosses8',
        poster: '../images/movies/horrible-bosses-middle-poster.webp',
        videoSource: '../images/tv-show/videos/Never Have I Ever - Official Trailer - Netflix_2.mp4',
        rated: '18+',
        type: 'Movie',
        genres: ['#Nudeity', '#sex', '#Comedy']
      }
      // Add more video data here if needed
    ],
    videoData: {
      videoPlatfrom:
          // "HI"
          "youtube"
      ,
      poster: "https://m.media-amazon.com/images/M/MV5BMWIyNzdlNGItN2M5OC00YjUxLThkMDktNDUzOWFkNzgxZWYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      videoSource:
          "pVeXHliEo00"
          // "https://imdb-video.media-imdb.com/vi1704183577/1434659607842-pgv4ql-1689606943650.mp4?Expires=1690205865&Signature=BlcgYNDwO4O74yGuRnSwCVJJdk-ZxqXLvjVLceVNQxo3Yy~teciQ22CrxuUKz9LiulrDqry9ZbIHHwWZtx5p5j4KJYQCbjGLcUyXmSeD0sMGrdPsqGnxuiqkrOz9FwfefOVgR-UzKORs93I7E0h4NpvB7WEFX~XNtu7B3JXsuUmwabx8gIWi1zQMT~noHDsQzunFiyKGqgRgy7fAkYeX9OOMt5mGHKShtfk6HAXjr-aCsze08LRTPJWboAQQBib0jiKIO1D4H8aJZQOtofqlPN81Y7tb79Z3UsbSpZ2Dgf7cs8HloJD9cIU9mwXPRXPw0vvAxpe~zbgY4~ZCYZyd1g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
      ,
      captions: {
        label: "English",
        srclang: "en",
        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
      },
      logo: "../images/movies/murder mystery logo.webp",
      year: "2023",
      rating: "PG-13",
      duration: "4h 7m",
      description:
          "A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage. A chance encounter leads to them being framed for the murder of an elderly billionaire.",
      casts: [
        { name: "Kyle Newacheck", role: "Director" },
        { name: "James Vanderbilt", role: "Screenplay" },
        { name: "Adam Sandler", role: "Producer" },
        // Add more cast members as needed
      ]},
  };
  render() {
    return (
      <React.Fragment>
        {/*<main className="container">*/}
          <Routes>
            <Route
                path="/login"
                element={
                  <React.Fragment>
                    <NetflixLogin />
                    <FooterComponent />
                  </React.Fragment>
                }
            />
            <Route
                path="/logout"
                element={
                  <React.Fragment>
                    <NetflixLogout />
                    <FooterComponent />
                  </React.Fragment>
                }
            />
            <Route
                path="/register"
                element={
                  <React.Fragment>
                    <NetflixRegister />
                    <FooterComponent />
                  </React.Fragment>
                }
            />
            <Route
                path="/"
                element={
                  <React.Fragment>
                    <Navbar />
                    <MainComponent />
                    <MylistMainComponent />
                    <FullListComponent />
                    <FooterComponent />
                  </React.Fragment>
                }
            />
            <Route
                path="/search"
                element={
              <React.Fragment>
                  <Navbar />
                  <Search
                      videos={this.state.videos}
                  />
                <FooterComponent />
              </React.Fragment>
              }
            />
            <Route
                path="/admin"
                element={
              <React.Fragment>
                  <Navbar />
                  <Admin
                      videos={this.state.videos}
                  />
                <FooterComponent />
              </React.Fragment>
              }
            />
              <Route
                  path="/add"
                  element={
                <React.Fragment>
                    <Navbar />
                    <AddNew
                        videos={this.state.videos}
                    />
                  <FooterComponent />
                </React.Fragment>
                }
              />
              <Route
                  path="/adduser"
                  element={
                <React.Fragment>
                    <Navbar />
                    <AddNewUser
                        videos={this.state.videos}
                    />
                  <FooterComponent />
                </React.Fragment>
                }
              />
              <Route
                  path="/editusers"
                  element={
                <React.Fragment>
                    <Navbar />
                    <EditUsers
                        videos={this.state.videos}
                    />
                  <FooterComponent />
                </React.Fragment>
                }
              />


            <Route
                path="/play"
                element={
                  <React.Fragment>
                    <Navbar />
                  <PlayerComponent videoData={this.state.videoData} />
                    <FooterComponent />
                  </React.Fragment>
                }
            />
            <Route
                path="/user"
                element={
                  <React.Fragment>
                    <Navbar />
                  <UserComponent user={this.state.user} />
                    <FooterComponent />
                    </React.Fragment>
                }
            />
            <Route path="*" element={
              <React.Fragment>
                <Navbar />
                <NotFound />
              </React.Fragment>
            } />
          </Routes>
      </React.Fragment>
    );
  }
}
App.propTypes = {};


export default App;
