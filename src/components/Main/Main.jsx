import "./Main.css";
import SearchSection from "../Search/Search";
import About from "../About/About";

const Main = ({ isLoggedIn }) => {
  return (
    <main className="main">
      {isLoggedIn ? (
        <>
          <SearchSection />
          <About />
        </>
      ) : (
        <>
          <SearchSection />
          <About />
        </>
      )}
    </main>
  );
};

export default Main;
