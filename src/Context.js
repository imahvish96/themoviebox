import React, { Component } from "react";
import { debounce } from "lodash";

const MovieContext = React.createContext();
const MovieConsumer = MovieContext;

class MoviesProvider extends Component {
  state = {
    movies: [],
    detailsMovie: [],
    searchTerm: "",
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
    window.addEventListener("scroll", this.loadMore, true);
    this.fetchData();
  }

  fetchData = async () => {
    const Url =
      "https://api.themoviedb.org/3/movie/popular?api_key=00781053beeb318b208646c619f414ba";
    const response = await fetch(Url);
    const data = await response.json();
    //console.log(this.state.currentPage);
    this.setState({
      movies: [...this.state.movies, ...data.results],
      currentPage: data.page,
    });

    console.log(this.state.movies);
    //console.log(data.results);
  };

  componentWillMount() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    }
    window.removeEventListener("scroll", this.loadMore);
  }

  handelSubmit = (e) => {
    e.preventDefault();
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=00781053beeb318b208646c619f414ba&query=${this.state.searchTerm}`;
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
    //console.log(movie);
    return movie;
  };

  fetchCast = (id) => {
    const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=00781053beeb318b208646c619f414ba`;
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/${id}/list?api_key=00781053beeb318b208646c619f414ba`;
    fetch(castUrl)
      .then((res) => res.json())
      .then((cast) => {
        this.setState({
          cast: [...cast.cast],
        });
        console.log(this.state.cast);
      });
  };

  /*   fetchCast = (id) => {
    //const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=00781053beeb318b208646c619f414ba`;
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=00781053beeb318b208646c619f414ba`;
    fetch(genreUrl)
      .then((res) => res.json())
      .then((cast) => {
        this.setState({
          cast: { ...cast },
        });
        console.log(this.state.cast);
      });
  }; */

  handelDetails = (id) => {
    const movie = this.getItem(id);
    console.log(movie);
    this.setState(() => {
      return { detailsMovie: movie };
    });
    console.log(this.state.detailsMovie);
    this.fetchCast(id);
  };

  loadMore = debounce(async (e) => {
    // Do load more content here!
    const { searchTerm, currentPage, per } = this.state;
    const searchEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=00781053beeb318b208646c619f414ba&query=${searchTerm}&per_page=${per}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=00781053beeb318b208646c619f414ba&per_page=${per}&page=${
      currentPage + 1
    }`;
    const endpoint = searchTerm ? searchEndPoint : popularEndpoint;
    const isLoadMore = endpoint.search("page");
    //console.log(isLoadMore);

    if (this.state.loadingState || this.state.hasMore === this.state.pages) {
      /* console.log(
        `${this.state.loadingState} ${this.state.hasMore} ${this.state.pages}`
      ); */
      return;
    } else {
      /* console.log(
        `${this.state.loadingState} ${this.state.hasMore} ${this.state.pages}`
      ); */
      try {
        const result = await (await fetch(endpoint)).json();
        //console.log(result);
        this.setState(
          (prev) => ({
            ...prev,
            movies:
              isLoadMore !== -1
                ? [...prev.movies, ...result.results]
                : [...result.results],
            currentPage: result.page,
            totalPages: result.total_pages,
            loading: false,
            scrolling: true,
            hasMore: result.total_pages,
            pages: result.pages,
          }),
          () => {
            if (!searchTerm) {
              sessionStorage.setItem("homeState", JSON.stringify(this.state));
            }
          }
        );
      } catch (error) {
        this.setState({ error: true });
        console.log(error);
      }
      console.log(`Contiune ${this.state.hasMore}`);
    }
  }, 1000);

  handelChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
    //console.log(this.state.searchTerm);
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
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

export { MoviesProvider, MovieConsumer };
