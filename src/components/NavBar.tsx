import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <section className="top-bar">
      <div className="container py-3 ">
        <div className="row">
          <div className="col-md-2 py-3">
            <Link to="/src/components/Main.tsx">Logo</Link>
          </div>
          <div className="col-md-5">
            <div className="input-group mb-3 py-3">
              <input
                type="text"
                className="form-control"
                placeholder="Suchen Sie nach Produkten, Marken und mehr"
                aria-label="Suchen Sie nach Produkten, Marken und mehr"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
          <div className="col-md-2 py-3 text-white">
            En{" "}
            <i>
              <i className="fa-solid fa-chevron-down text-white"></i>
            </i>
          </div>
          <div className="col-md-3 py-3 ">
            <div className="row">
              <div className="col">
                <div className="row">
                  <a
                    href="#"
                    className="text-decoration-none text-dark text-white "
                  >
                    <i className=" text-white fa-regular fa-user text-center"></i>{" "}
                    Account
                  </a>
                </div>
              </div>
              <div className="col ">
                <div className="row">
                  <a
                    href="#"
                    className="text-decoration-none text-dark text-white "
                  >
                    <i className="fa-solid fa-cart-shopping text-white"></i>{" "}
                    Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <nav className="top-nav">
          <div className="container">
            <div className="row">
              <div className="col-md ">
                <ul className="nav justify-content-center ">
                  <li className="nav-item">
                    <a
                      className="nav-link text-white active"
                      aria-current="page"
                      href="#"
                    >
                      Beleuchtung<i className="fa-solid fa-chevron-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white active"
                      aria-current="page"
                      href="#"
                    >
                      Growbox<i className="fa-solid fa-chevron-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white active"
                      aria-current="page"
                      href="#"
                    >
                      Dünger<i className="fa-solid fa-chevron-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white active"
                      aria-current="page"
                      href="#"
                    >
                      Erde & Substrate
                      <i className="fa-solid fa-chevron-down"></i>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link text-white dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Töpfe & Behälter
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to={"Temple"}>
                          Eckige Töpfe
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Runde Töpfe
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Untersetzer
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Pflanzschalen
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Bewässerung<i className="fa-solid fa-chevron-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Pflanzen & Gärtnern
                      <i className="fa-solid fa-chevron-down"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
