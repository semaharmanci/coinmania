import React from "react";

const Loadmore = ({handleClick}) => {
  return (
    <div className="d-flex justify-content-center mt-3 my-5">
      <button onClick={handleClick}>Daha Fazla</button>
    </div>
  );
};

export default Loadmore;
