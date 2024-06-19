import "./Main.css";
import SearchSection from "../Search/Search";

const Main = ({ isLoggedIn }) => {
  return (
    <main className="main">
      {isLoggedIn ? (
        <>
          <SearchSection />
        </>
      ) : (
        <>
          <SearchSection />
        </>
      )}
    </main>
  );
};

export default Main;
