import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Activities from "../../models/Activities";
import Params from "../../models/Params";
import States from "../../models/States";
import { getActivities } from "../../services/NSPServices";
import "./SearchForm.css";

const SearchForm = () => {
  const [q, setQ] = useState("");

  const navigate = useNavigate();

  const [activites, setActivities] = useState<Activities[]>([]);

  const [stateCode, setStateCode] = useState<string>("");
  const [parkCode, setParkCode] = useState<string>("");

  const states: States[] = [
    { fullName: "Alabama", stateCode: "AL" },
    { fullName: "Alaska", stateCode: "AK" },
    { fullName: "Arizona", stateCode: "AZ" },
    { fullName: "Arkansas", stateCode: "AR" },
    { fullName: "California", stateCode: "CA" },
    { fullName: "Colorado", stateCode: "CO" },
    { fullName: "Connecticut", stateCode: "CT" },
    { fullName: "Delaware", stateCode: "DE" },
    { fullName: "Florida", stateCode: "FL" },
    { fullName: "Georgia", stateCode: "GA" },
    { fullName: "Hawaii", stateCode: "HI" },
    { fullName: "Idaho", stateCode: "ID" },
    { fullName: "Illinois", stateCode: "IL" },
    { fullName: "Indiana", stateCode: "IN" },
    { fullName: "Iowa", stateCode: "IA" },
    { fullName: "Kansas", stateCode: "KS" },
    { fullName: "Kentucky", stateCode: "KY" },
    { fullName: "Louisiana", stateCode: "LA" },
    { fullName: "Maine", stateCode: "ME" },
    { fullName: "Maryland", stateCode: "MD" },
    { fullName: "Massachusetts", stateCode: "MA" },
    { fullName: "Michigan", stateCode: "MI" },
    { fullName: "Minnesota", stateCode: "MN" },
    { fullName: "Mississippi", stateCode: "MS" },
    { fullName: "Missouri", stateCode: "MO" },
    { fullName: "Montana", stateCode: "MT" },
    { fullName: "Nebraska", stateCode: "NE" },
    { fullName: "Nevada", stateCode: "NV" },
    { fullName: "New Hampshire", stateCode: "NH" },
    { fullName: "New Jersey", stateCode: "NJ" },
    { fullName: "New Mexico", stateCode: "NM" },
    { fullName: "New York", stateCode: "NY" },
    { fullName: "North Carolina", stateCode: "NC" },
    { fullName: "North Dakota", stateCode: "ND" },
    { fullName: "Ohio", stateCode: "OH" },
    { fullName: "Oklahoma", stateCode: "OK" },
    { fullName: "Oregon", stateCode: "OR" },
    { fullName: "Pennsylvania", stateCode: "PA" },
    { fullName: "Rhode Island", stateCode: "RI" },
    { fullName: "South Carolina", stateCode: "SC" },
    { fullName: "South Dakota", stateCode: "SD" },
    { fullName: "Tennessee", stateCode: "TN" },
    { fullName: "Texas", stateCode: "TX" },
    { fullName: "Utah", stateCode: "UT" },
    { fullName: "Vermont", stateCode: "VT" },
    { fullName: "Virginia", stateCode: "VA" },
    { fullName: "Washington", stateCode: "WA" },
    { fullName: "West Virginia", stateCode: "WV" },
    { fullName: "Wisconsin", stateCode: "WI" },
    { fullName: "Wyoming", stateCode: "WY" },
  ];

  useEffect(() => {
    getActivities().then((response) => setActivities(response.data));
  }, []);

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();

    const queryStringParams: Params = {
      ...(q ? { q } : {}),
      ...(stateCode ? { stateCode } : {}),
      ...(parkCode ? { parkCode } : {}),
    };

    navigate(`/parks/search?${new URLSearchParams({ ...queryStringParams })}`);
    setQ("");
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="dropdowns">
        <select
          name="activity"
          id="activity"
          onChange={(e) => setParkCode(e.target.value)}
        >
          <option value=""></option>
          {activites.map((activity) => (
            <option value={activity.id} key={activity.id}>
              {activity.name}
            </option>
          ))}
        </select>
        <select
          name="state"
          id="state"
          onChange={(e) => setStateCode(e.target.value)}
        >
          <option value=""></option>
          {states.map((state) => (
            <option value={state.stateCode} key={state.stateCode}>
              {state.fullName}
            </option>
          ))}
        </select>
      </div>

      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
