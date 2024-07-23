import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const HeaderView = () => {
  const { user, logoutUser } = useContext(UserContext);
  return (
    <header>
      <h3>
        <img src="/coinlogo.png" alt="" />
        <span>CoinMania</span>
      </h3>

      {user && (
        <div>
          <p>{user.email}</p>
          <button onClick={logoutUser}>Cikis Yap</button>
        </div>
      )}
    </header>
  );
};

export default HeaderView;
