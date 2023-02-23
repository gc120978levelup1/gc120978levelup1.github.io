//models
import {users             } from "/assets/model/js/users.js"

//views
import {showModal}          from '/assets/view/js/misc.js'
import {container}          from '/assets/view/js/container.js'
import {index_menu}         from '/assets/view/js/index-menu.js'
import {login_form}         from '/assets/view/js/login_form.js'

let root = document.getElementById('root');
if (root) {
    root.innerHTML = container([
                                    index_menu("login"),
                                    login_form(),
                              ]);

    //launch loginModal dialog by default
    showModal("loginModal")

    //respond to login intent
    let login = document.getElementById('loginModal');
    if (login){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let res = users.filter((item) => (item.email1 === urlParams.get('email1') && item.password1 === urlParams.get('password1')))
        if (res.length == 1){
            localStorage.setItem('myStore-login', '1');
            localStorage.setItem('myStore-user-info', JSON.stringify(res[0]));
            localStorage.setItem('myStore-email',urlParams.get('email1'));
            localStorage.setItem('myStore-cart', '[]');
            localStorage.setItem('myStore-upcoming-deliveries', '[]');
            let url= `dashboard.html?email1=${urlParams.get('email1')}`;
            window.location = url;
        }
    }
}