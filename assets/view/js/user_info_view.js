export const user_info_view = () => {
    return (/*html*/`
        <main>
            <br />
            <br />
            <section id="user-info">
                <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    <div class="container">
                        <h2 class="mb-5">
                        <i><b>myProfile</b></i>
                        </h2>
                        <div
                        class="accordion mb-12"
                        id="accordionPanelsStayOpenExample"
                        >
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne"
                            >
                                <i
                                class="fa fa-picture-o fa-2x text-success"
                                aria-hidden="true"
                                ></i>
                                &nbsp;Picture
                            </button>
                            </h2>
                            <div
                            id="panelsStayOpen-collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne"
                            >
                            <div class="accordion-body">
                                <img
                                height="350px"
                                src="./assets/img/users/image0001.jpg"
                                alt=""
                                srcset=""
                                id="user-image"
                                />
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne"
                            >
                                <i
                                class="fa fa-user fa-2x text-danger"
                                aria-hidden="true"
                                ></i>
                                &nbsp;Name
                            </button>
                            </h2>
                            <div
                            id="panelsStayOpen-collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne"
                            >
                            <div class="accordion-body">
                                <strong id="user-name"
                                >This is the first item's accordion body.</strong
                                >
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseTwo"
                            >
                                Contact Information
                            </button>
                            </h2>
                            <div
                            id="panelsStayOpen-collapseTwo"
                            class="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingTwo"
                            >
                            <div class="accordion-body">
                                <span class="badge rounded-pill bg-success">Phone</span>
                                <strong id="user-contact-info"
                                >This is the first item's accordion body.</strong
                                >
                                <br />
                                <span class="badge rounded-pill bg-primary"
                                >Email&nbsp;</span
                                >
                                <strong id="user-email-info"
                                >This is the first item's accordion body.</strong
                                >
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2
                            class="accordion-header"
                            id="panelsStayOpen-headingThree"
                            >
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseThree"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseThree"
                            >
                                Shipping Address
                            </button>
                            </h2>
                            <div
                            id="panelsStayOpen-collapseThree"
                            class="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingThree"
                            >
                            <div class="accordion-body">
                                <span class="badge rounded-pill bg-warning text-dark"
                                >Home</span
                                >
                                <strong id="user-shipping-address"
                                >This is the first item's accordion body.</strong
                                >
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
      `)
  }
  