import React, { useEffect, useState } from "react";
import MainPageView from "../views/MainPageView";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

axios.defaults.baseURL = "https://api.coincap.io/v2/assets";

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const page = params.get("page");
    axios
      .get(`/?limit=11&offset=${page}`)
      .then((res) => setCoins([...coins, ...res.data.data]));

    if (!page) {
      setParams({ page: "1" });
      return;
    }
  }, [params]);

  return <MainPageView coins={coins} />;
};

export default MainPageController;
