import React, { Fragment, useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const HomePage = () => {
  const publicApiKey = process.env.REACT_APP_PUBLIC_API_KEY;
  const apiBaseUrl = "http://gateway.marvel.com/v1/public/";
  const apiWithHash = `apikey=${publicApiKey}&hash=116b4552e8cd7f038bc9a7b31e114695`;
  const [url, setUrl] = useState(`${apiBaseUrl}characters?ts=1&${apiWithHash}`);
  const [loading, setLoading] = useState(true);
  const [heroes, setHeroes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(url);
      setHeroes(data.data.results);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const searchHandler = (search) => {
    search === ""
      ? setUrl(`${apiBaseUrl}characters?ts=1&${apiWithHash}`)
      : setUrl(
          `${apiBaseUrl}/characters?ts=1&nameStartsWith=${search}&${apiWithHash}`
        );
  };

  return (
    <Fragment>
      <SearchBar search={searchHandler} />
      {!loading && <CardList heroes={heroes} loading={loading} />}
    </Fragment>
  );
};

export default HomePage;
