import React, { Component } from "react";
import BookCard from "../components/BookCard";
import Rows from "../components/Rows";
import SearchForm from "../components/SearchForm";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Search extends Component {

    state = {
        search: "",
        results: []
        };

    // on page load, 
    componentDidMount() {
        console.log("Mounted");
        this.searchBooks("Steve Harvey");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({results:res.data.items})).then(console.log(this.state.results))
            .catch(err => console.log(err));
    }

    // on Save click,
    handleSaveClick = event => {
    
        const bookInfo = event;
        console.log(bookInfo);
    // save to the database
      API.saveBook(bookInfo)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    }

    render() {
        return (
            <div className="container-fluid">
                <Jumbotron />
                <Rows>
                <SearchForm 
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                </Rows>
                <Rows >
                    {this.state.results.map(book => ( 
                        <BookCard
                            id={book.id} 
                            key={book.id} 
                            title={book.volumeInfo.title} 
                            description={book.volumeInfo.description} 
                            image={book.volumeInfo.imageLinks.thumbnail} 
                            link={book.volumeInfo.infoLink} 
                            handleSaveClick={this.handleSaveClick}
                        />
                    ))}
                </Rows>
            </div>
        )
    }
}

export default Search;