import "./HomeSearchParkForm.css";

const HomeSearchParkForm = () => {
  return (
    <form className="HomeSearchParkForm">
      <h3>Find your Next Adventure Now</h3>
      <div className="line-divide" />
      <input
        type="text"
        name="search-park"
        id="search-park"
        placeholder="Find National Park"
      />
      <button>Submit</button>
    </form>
  );
};

export default HomeSearchParkForm;
