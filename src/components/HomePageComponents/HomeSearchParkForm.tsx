import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import Params from "../../models/Params";
import "./HomeSearchParkForm.css";

const HomeSearchParkForm = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const navigate = useNavigate();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const searchParam: Params = {
      ...(searchValue ? { q: searchValue } : {}),
    };

    navigate(`/parks/search?${new URLSearchParams({ ...searchParam })}`);
  };

  return (
    <form className="HomeSearchParkForm" onSubmit={submitHandler}>
      <h3>Find your Next Adventure Now</h3>
      <div className="line-divide" />
      <input
        type="text"
        name="search-park"
        id="search-park"
        placeholder="Find National Park"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default HomeSearchParkForm;
