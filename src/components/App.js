import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 
                    'Client-ID 464059611ad3d137d522fa334db5f0e7b1eb74675c0d2eeb80727443802e0ee1'
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}


export default App;