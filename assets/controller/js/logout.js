//views

import {
            showModal,
            check_login_status_if_OK,
       }                    from '/assets/view/js/misc.js'
import {container}          from '/assets/view/js/container.js'
import {index_menu}         from '/assets/view/js/index-menu.js'
import {logout_form}        from '/assets/view/js/logout_form.js'

let root = document.getElementById('root');
if (root) {
    // middle link
    if (!check_login_status_if_OK()){
        window.location = "/"
    }
    root.innerHTML = container([
                                    index_menu("logout"),
                                    logout_form(),
                              ]);

    //launch logoutModal dialog by default
    showModal("logoutModal")

    //respond to logout button click
    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.setItem('myStore-login', '0');
        localStorage.setItem('myStore-user-info', JSON.stringify({}));
        localStorage.setItem('myStore-email','');
        localStorage.setItem('myStore-cart', '[]');
        localStorage.setItem('myStore-upcoming-deliveries', '[]');
        window.location = '/';
    })
}