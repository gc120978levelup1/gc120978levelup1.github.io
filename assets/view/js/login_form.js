
export const login_form = () => {
  return (/*html*/`
    <main style="height: 100vh;color:grey">
        <section id="login-form">
            <div class="container-fluid">
            <br />
            <br />

            <!-- Modal -->
            <div
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                class="modal fade"
                id="loginModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="false"
            >
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-warning-subtle">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onclick="window.location = '/';"
                    ></button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"
                            >Email address</label
                        >
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email1"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" class="form-text">
                            We'll never share your email with anyone else.
                        </div>
                        </div>
                        <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"
                            >Password</label
                        >
                        <input
                            type="password"
                            name="password1"
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                        </div>
                        <a href="signup.html"
                        ><span style="text-decoration: underline; color: blue"
                            ><i>Sign Up?</i></span
                        ></a
                        >
                        <button
                        type="submit"
                        class="btn btn-primary"
                        style="float: right"
                        >
                        <i class="fa fa-sign-in fa-lg" aria-hidden="true"></i>
                        Sign in
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
     </main>
  `)
}

