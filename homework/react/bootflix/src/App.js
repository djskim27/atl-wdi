import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example,
      movieTitle: "",
      movieId: ""
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = (title) => {
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${title}`)
      .then( (movie) => {
          this.setState(
            {
              movie: movie.data,
              movieTitle: title
            }
          );
          console.log(movie);
      }).catch((error) => {
        console.log(error)
      })
  }

  _searchById = () => {
     axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&i=${this.state.movieId}`)
      .then( (movie) => {
          this.setState(
            {
              movie: movie.data
            }
          );
          console.log(movie);
      }).catch((error) => {
        console.log(error)
      })
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search 
        searchByTitle={this._searchByTitle} 
        movieTitle={this.state.movieTitle}
        searchById={this._searchById} 
        movieId={this.state.movieId}

        />
        <Movie 
        movie={this.state.movie} 
        />
      </div>
    );
  }
}

export default App;
