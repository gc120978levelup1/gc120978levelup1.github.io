import {check_login_status_if_OK, get_nos_cart_list} from "./misc.js"

export const index_menu = (active) => {
  let logged_in     = check_login_status_if_OK()
  let nos_cart_list = get_nos_cart_list().toString() 
  let active1 = ""
  let active2 = ""
  let active3 = ""
  let active4 = ""
  let active5 = ""
  if (active === "home")      active1 = "active"
  if (active === "dashboard") active2 = "active"
  if (active === "checkout")  active3 = "active"
  if (active === "logout")    active4 = "active"
  if (active === "login")     active5 = "active"
  let logged_in_menu     = /*html*/`
                            <li class="nav-item">
                                <a class="nav-link ${active2}" href="dashboard.html">
                                Dashboard &nbsp;
                                <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                                &nbsp;
                                <span class="text-primary position-relative">
                                    <div
                                    class="position-absolute top-0 start-100 translate-middle"
                                    >
                                    <span class="badge rounded-circle bg-danger">
                                        <span id="nos-of-items-in-cart2">${nos_cart_list}</span>
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                    </div>
                                </span>
                                &nbsp;&nbsp;
                                </a>
                            </li>
                                <li class="nav-item">
                                <a class="nav-link ${active3}" aria-current="page" href="checkout.html"
                                >Checkout</a
                                >
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${active4}" href="logout.html">Logout</a>
                            </li>`
  let not_logged_in_menu = /*html*/`
                            <li class="nav-item">
                                <a class="nav-link ${active5}" href="login.html">Login</a>
                            </li>`
  return (/*html*/`
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="user_info.html">
                    <img
                    height="40px"
                    src="/assets/view/img/favicon.jpg"
                    alt=""
                    srcset=""
                    class="rounded-circle"
                    id="main-icon"
                    />
                    <span style="font-weight: bolder; font-size: larger; color:aqua"> <b> myStore </b></span>
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navbar-expand-xl" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link ${active1}" aria-current="page" href="/"
                            >Home</a
                            >
                        </li>
                        ${((logged_in === true)? logged_in_menu : not_logged_in_menu)}
                    </ul>
                    <form class="d-flex" role="search" action="search.html">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            name="search"
                        />
                        <button class="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
    <br><br>
  `)
}

