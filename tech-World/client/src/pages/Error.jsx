import { NavLink } from "react-router-dom";

 const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <img src="./images/not-found.svg" alt="page" />
          <p>
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;