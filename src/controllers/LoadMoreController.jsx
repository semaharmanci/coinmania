import React from "react";
import Loadmore from "../views/LoadMore";
import { useSearchParams } from "react-router-dom";

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    const pageNumber = Number(params.get("page"));
    setParams({ page: pageNumber + 1 });
  };
  return (
    <div>
      <Loadmore handleClick={handleClick} />
    </div>
  );
};

export default LoadMoreController;
