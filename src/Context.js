import React, { Component } from 'react';
import { debounce } from 'lodash';
import { BASE_URL, API_KEY } from './config';
import axios from 'axios'

export const MovieContext = React.createContext();
const MovieConsumer = MovieContext;

class MoviesProvider extends Component {
  state = {
    movies: [],
    detailsMovie: [],
    searchTerm: '',
    totalNumber: 0,
    currentPage: 0,
    totalResult: 0,
    loading: false,
    error: false,
    isFetching: false,
    per: 3,
    scrolling: false,
    hasMore: 500,
    loadingState: false,
    cast: [],
    redirect: false,
  };

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData = async () => {
    // const { searchTerm, currentPage, per } = this.state;
    const Url = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}`;
    // const searchEndPoint = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&per_page=${per}&page=${currentPage + 1}`;
    // const popularEndpoint = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&per_page=${per}&page=${ currentPage + 1}`;
    // console.log('ENDPOINT',popularEndpoint)
    const response = await fetch(Url);
    const data = await response.json();
    this.setState({
      movies: [...this.state.movies, ...data.results],
      currentPage: data.page,
    });
    return data
  };

  fetchOnLoad = async () => {
    const { searchTerm, currentPage, per } = this.state;
    // const Url = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}`;
    // const searchEndPoint = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&per_page=${per}&page=${currentPage + 1}`;
    const popularEndpoint = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&per_page=${per}&page=${ currentPage + 1}`;
    const response = await fetch(popularEndpoint);
    const data = await response.json();
    this.setState({
      movies: [...this.state.movies, ...data.results],
      currentPage: data.page,
    });
    return data
  };

  // componentWillMount() {
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //   }
  //   window.removeEventListener('scroll', this.loadMore);
  // }

  handelSubmit = (e) => {
    e.preventDefault();
    const searchUrl = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`;
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: [...data.results],
          totalResult: data.total_results,
          redirect: true,
        });
      });
  };

  getItem = (id) => {
    const movie = this.state.movies.find((item) => {
      return item.id === id;
    });
    return movie;
  };

  fetchCast = (id) => {
    const castUrl = `${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}`;
    // const genreUrl = `${BASE_URL}/3/genre/movie/${id}/list?api_key=${API_KEY}`;
    fetch(castUrl)
      .then((res) => res.json())
      .then((cast) => {
        this.setState({
          cast: [...cast.cast],
        });
      });
  };

  handelDetails = (id) => {
    const movie = this.getItem(id);
    this.setState(() => {
      return { detailsMovie: movie };
    });
    this.fetchCast(id);
  };

  // // loadMore = debounce(async (e) => {
  // //   // Do load more content here!
  // //   const { searchTerm, currentPage, per } = this.state;
  // //   const searchEndPoint = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&per_page=${per}&page=${currentPage + 1}`;
  // //   const popularEndpoint = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&per_page=${per}&page=${ currentPage + 1}`;
  // //   const endpoint = searchTerm ? searchEndPoint : popularEndpoint;
  // //   const isLoadMore = endpoint.search('page');
  // //   //console.log(isLoadMore);

  // //   if (this.state.loadingState || this.state.hasMore === this.state.pages) {
  // //     return;
  // //   } else {
  // //     try {
  // //       const result = await (await fetch(endpoint)).json();
  // //       this.setState(
  // //         (prev) => ({
  // //           ...prev,
  // //           movies:
  // //             isLoadMore !== -1
  // //               ? [...prev.movies, ...result.results]
  // //               : [...result.results],
  // //           currentPage: result.page,
  // //           totalPages: result.total_pages,
  // //           loading: false,
  // //           scrolling: true,
  // //           hasMore: result.total_pages,
  // //           pages: result.pages,
  // //         }),
  // //         () => {
  // //           if (!searchTerm) {
  // //             sessionStorage.setItem('homeState', JSON.stringify(this.state));
  // //           }
  // //         }
  // //       );
  // //     } catch (error) {
  // //       this.setState({ error: true });
  // //       console.log(error);
  // //     }
  // //   }
  // // }, 1000);

  handelChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    return (
      <MovieContext.Provider
        value={{
          ...this.state,
          handelChange: this.handelChange,
          handelSubmit: this.handelSubmit,
          loadMore: this.loadMore,
          handelDetails: this.handelDetails,
          getItem: this.getItem,
          fetchData: this.fetchData,
          fetchOnLoad: this.fetchOnLoad
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

export { MoviesProvider, MovieConsumer };
