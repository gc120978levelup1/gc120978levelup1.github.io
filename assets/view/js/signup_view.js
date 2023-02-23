export const signup_view = () => {
    return (/*html*/`
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
        <main style="color:grey;">
            <section id="categories">
                <div class="container-fluid">
                    <!-- Modal -->
                    <form>
                        <div
                            class="modal fade"
                            id="signUpModal"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div
                                class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
                            >
                                <div class="modal-content">
                                    <div class="modal-header bg-success">
                                        <h5 class="modal-title text-light" id="exampleModalLabel">
                                            New User Information Form
                                        </h5>
                                        <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            onclick="window.location = 'login.html';"
                                        ></button>
                                    </div>
                                    <div class="modal-body">

                                        <div class="form-group mb-3">
                                            <label for="email1">Email:</label>
                                            <label id="email-error"></label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="email1"
                                                placeholder="Enter email"
                                                name="email1"
                                            />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="password1">Password:</label>
                                            <label id="password1-error"></label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="password1"
                                                placeholder="Enter password"
                                                name="password1"
                                            />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="confirm-pwd">Confirm Password:</label>
                                            <label id="password2-error"></label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="confirm_pwd"
                                                placeholder="Confirm password"
                                                name="confirm_pwd"
                                            />
                                        </div>
                                        <hr />
                                        <div class="form-group mb-3">
                                            <label for="name">Name:</label>
                                            <label id="name-error"></label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="name"
                                                placeholder="Enter name"
                                                name="name"
                                            />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="name">Phone Number</label>
                                            <label id="contact-error"></label>
                                            <input
                                                    type="tel"
                                                    class="form-control"
                                                    id="contact"
                                                    placeholder="Enter phone number"
                                                    name="contact"
                                                />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="name">Address</label>
                                            <label id="address-error"></label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="address"
                                                placeholder="Enter address"
                                                name="address"
                                            />
                                        </div>
                                        <hr />
                                        <div class="form-group mb-3">
                                            <label for="name">Picture</label>
                                            <input
                                                accept=".jpg"
                                                type="file"
                                                class="form-control"
                                                id="img"
                                                placeholder="Enter file image"
                                                name="img"
                                            />
                                        </div>
                                        <br />

                                    </div>
                                    <div class="modal-footer">
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                            style="float: right"
                                            id="signup-submit"
                                            >
                                            Submit
                                        </button>
                                        <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
      `)
  }
  