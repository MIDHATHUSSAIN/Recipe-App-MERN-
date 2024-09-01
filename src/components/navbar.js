import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function NAVBAR() {
  const [cookie, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  function LOGOUT() {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    navigate("/auth");
  }
  const handleMenuClick = () => {
    const mobileNav = document.getElementById("moblienav");
    mobileNav.style.display =
      mobileNav.style.display === "none" ? "block" : "none";
  };
  return (
    <div id="nav">
      <div id="odiv">
        <span>YUMMY FOOD</span>
      </div>
      <div id="tdiv">
        <Link to="/" id="abc">
          HOME
        </Link>
        {!cookie.access_token ? (
          <button onClick={() => alert("please login to create recipe")}>
            CREATE RECIPE
          </button>
        ) : (
          <Link to="/create-recipe" id="abc">
            CREATE RECIPE
          </Link>
        )}
        {!cookie.access_token ? (
          <button onClick={() => alert("please login to see your recipes")}>
            MY RECIPE
          </button>
        ) : (
          <Link to="/myrecipe" id="abc">
            MY RECIPE
          </Link>
        )}
        {!cookie.access_token ? (
          <Link to="/auth" id="abc">
            LOGIN/REGISTER
          </Link>
        ) : (
          <button onClick={LOGOUT}>LOGOUT</button>
        )}
      </div>
      
    </div>
  );
}

export default NAVBAR;
