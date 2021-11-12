import React from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';

class App extends React.Component {
// state to manage fetched images
  state = {images: []};

  // this fetches data from an api using axios
  onSearchSubmit = async(Text) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: Text
      },
      headers: {
        Authorization: 'Client-ID HopTlKf2gKthfF4odIkZ6glkiWbH8x-GQ3NdrnRRNng'
      }
    });
    
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className ="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
