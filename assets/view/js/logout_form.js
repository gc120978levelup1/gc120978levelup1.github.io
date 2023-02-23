
export const logout_form = () => {
    return (/*html*/`
        <main style="height: 100vh">
            <section id="logout-form">
                <div
                class="container-fluid"
                style="
                    background: url('/assets/view/img/logout-bg.jpg') no-repeat center center
                    fixed;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 100vh;
                    width: 100vw;
                    overflow: hidden;
                "
                >
                <br />
                <br />

                <!-- Modal -->
                <div
                    class="modal fade"
                    id="logoutModal"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="false"
                >
                    <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-danger-subtle">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Logout Status
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onclick="window.location = '/';"
                        ></button>
                        </div>
                        <div class="modal-body">
                        <br>
                        <h4 class="text-primary">Are You Sure You Want to Logout?</h4>
                        <br>
                        <button
                        id="logout-btn"
                        class="btn btn-danger"
                        style="float: right"
                        >
                        <i class="fa fa-sign-in fa-lg" aria-hidden="true"></i>
                        Sign Out
                        </button>

                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
    `)
  }
  
  