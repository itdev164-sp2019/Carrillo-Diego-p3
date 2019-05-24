import React, {Component} from 'react';
import './App.css';
import Form from './components/Form'
import Movies from './components/Movies'


const API_Key = "d90040a4ecf7d311df473ca42a3b4569";
//0fe07b6e26c3d006c5e8a4a4d1b7da49

class App extends Component {

  state = {
    movies: [],
  }

  getMovie = async (e) => {
    e.preventDefault();
    const movieName = e.target.elements.movieName.value;
    const APIcall = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${API_Key}&page=1`);
    //https://www.food2fork.com/api/search?key=${API_Key}&q=${recipeName}&count=5
    const data = await APIcall.json();
    
    this.setState({movies: data.results}
      );


    console.log(data);
    
    
  }
  

  render(){
  return (
    <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Search</h1>
          <Form getMovie={this.getMovie} />
         <Movies movies={this.state.movies} />
        </header>
    </div>
  );
}
}

export default App;
