import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Nav from './Nav';
import Gallery from './Gallery';
import Loader from './Loader';
import Message from './Message';
import NotFound from './NotFound';
import key from '../config';

class App extends Component {

    state = {
        title: 'Gallery App', // Page Title
        query: '', // Searching phrase
        images: [], // Images reference
        ready: false, // For Loader animation
        error: false // For Error handler
    };
    /**
     * Set title of the page and run handleSearch method with value retrieved from pathname
     */
    componentDidMount = () => {
        const url = window.location.pathname.replace('/', '');
        document.title = `${this.state.title} : ${url}`;
        this.handleSearch(url);
    }
    /**
     * Method retrieves data from Flickr API
     * @param  {string} query - Searching input
     */
    handleSearch = async (query) => {
        try {
            const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            const json = await response.json();
            this.setState(() => ({
                query,
                images: json.photos.photo,
                ready: true,
                error: false
            }));
        } catch (err) {
            this.setState(() => ({
                ready: false,
                error: true
            }));
        }
    }
    
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/sunset" />} />
                        <Route exact path="/:query" render={(props) => (
                            <Fragment>
                                <Header />
                                <Search title={`${this.state.title}: ${props.match.params.query}`} query={props.match.params.query} history={props.history} handleSearch={this.handleSearch} />
                                <Nav />
                                {
                                    // if app ready display gallery component if not check for error
                                    (this.state.ready) ? 
                                        <Gallery query={props.match.params.query} images={this.state.images} /> :
                                            // if error exists display warning message if not display loader
                                            (this.state.error) ? <Message text="Sorry, there was an error!" /> : <Loader />
                                }
                            </Fragment>
                        )} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
            
        );
    }
}

export default App;