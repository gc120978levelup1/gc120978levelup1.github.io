export const hero = () => {
  return ( /*html*/`
        <div
        id="carouselExampleCaptions"
        class="carousel bg-dark slide"
        data-bs-ride="carousel"
        style="height: 95vh"
        >
        <div class="carousel-indicators">
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            ></button>
        </div>

        <div class="carousel-inner h-100">
            <div class="carousel-item active h-100" data-bs-interval="2000">
            <div
                class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-primary bg-opacity-50"
                style="height: 100%"
            >
                <img
                height="100%"
                src="/assets/view/img/hero03.jpg"
                alt=""
                srcset=""
                />
            </div>
            <div
                class="carousel-caption d-block"
                style="
                background-color: rgb(72, 3, 3);
                opacity: 0.7;
                padding: 10px;
                "
            >
                <br />
                <br />
                <h3>The Ultimate Shopping Destination for the Masses</h3>
                <br />
                <hr />
                <p>
                myStore is the online store that offers everything you need in
                one place. From fashion to electronics, home goods, and beyond,
                we've got it all. Say goodbye to crowded stores and hello to the
                ultimate shopping destination for the masses.
                </p>
            </div>
            </div>

            <div class="carousel-item h-100" data-bs-interval="2000">
            <div
                class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-success bg-opacity-50"
                style="height: 100%"
            >
                <img
                height="100%"
                src="/assets/view/img/hero01.jpg"
                alt=""
                srcset=""
                />
            </div>
            <div
                class="carousel-caption d-block"
                style="
                background-color: rgb(2, 25, 75);
                opacity: 0.7;
                padding: 10px;
                "
            >
                <br />
                <br />
                <h3>Shop Without the Hassle</h3>
                <br />
                <hr />
                <p>
                Tired of dealing with long lines, traffic, and crowded stores?
                Look no further than myStore - the online store for the masses.
                Our easy-to-use website and fast delivery options make shopping
                a breeze. Say goodbye to the hassle and shop at myStore today.
                </p>
            </div>
            </div>

            <div class="carousel-item h-100" data-bs-interval="2000">
            <div
                class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50"
                style="height: 100%"
            >
                <img
                height="100%"
                src="/assets/view/img/hero02.jpg"
                alt=""
                srcset=""
                />
            </div>
            <div
                class="carousel-caption d-block"
                style="
                background-color: rgb(20, 88, 3);
                opacity: 0.7;
                padding: 10px;
                "
            >
                <br />
                <br />
                <h3>Discover the Ultimate Shopping Experience</h3>
                <br />
                <hr />
                <p>
                At myStore, we believe that shopping should be an enjoyable
                experience, and that's exactly what we aim to provide. As an
                online store for the masses, we offer a vast selection of
                products across multiple categories.
                </p>
            </div>
            </div>

            <div class="carousel-item h-100" data-bs-interval="2000">
            <div
                class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50"
                style="height: 100%"
            >
                <img
                height="100%"
                src="/assets/view/img/hero04.jpg"
                alt=""
                srcset=""
                />
            </div>
            <div
                class="carousel-caption d-block"
                style="
                background-color: rgb(88, 3, 79);
                opacity: 0.7;
                padding: 10px;
                "
            >
                <br />
                <br />
                <h3>Meet our most dedicated delivery team</h3>
                <br />
                <hr />
                <p>
                At myStore, we believe that having a reliable and dependable
                system to handle product deliveries to our most valued clients
                is most important part. We are very proud to have the best and
                most driven personnel to handle your precious goodies.
                </p>
            </div>
            </div>
        </div>

        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>

        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
  `)
}