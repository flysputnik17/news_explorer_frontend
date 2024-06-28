import PropTypes from "prop-types";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({
  isLoggedIn,
  handleNewsSearch,
  newsData,
  searchClicked,
  emptySearch,
}) => {
  return (
    <main className="main">
      <SearchForm
        handleNewsSearch={handleNewsSearch}
        searchClicked={searchClicked}
        isLoggedIn={isLoggedIn}
        newsData={newsData}
        emptySearch={emptySearch}
      />
      <About />
    </main>
  );
};
Main.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  newsData: PropTypes.array.isRequired,
  handleNewsSearch: PropTypes.func.isRequired,
  searchClicked: PropTypes.bool.isRequired,
  emptySearch: PropTypes.bool.isRequired,
};
export default Main;
