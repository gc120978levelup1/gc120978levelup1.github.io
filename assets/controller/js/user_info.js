// models
import {shoes} from "/assets/model/js/shoes.js"

// views
import {
            check_login_status_if_OK,
       }                           from "/assets/view/js/misc.js"
import {container}                 from '/assets/view/js/container.js'
import {index_menu}                from '/assets/view/js/index-menu.js'
import {footer}                    from '/assets/view/js/footer.js'
import {user_info_view}            from '/assets/view/js/user_info_view.js'

let root = document.getElementById('root');
if (root) {
    // middle link
    if (!check_login_status_if_OK()){
        window.location = "/"
    }

    root.innerHTML = container([
                                    index_menu("home"),
                                    user_info_view(),
                                    footer(),
                              ]);

    // respond to on_sale add to cart button
    let user_info1 = document.getElementById('user-info')
    if (user_info1){
        let user_info = JSON.parse(localStorage.getItem('myStore-user-info'));
        document.getElementById('user-name'            ).innerHTML = user_info.name
        document.getElementById('user-contact-info'    ).innerHTML = user_info.contact
        document.getElementById('user-email-info'      ).innerHTML = user_info.email1
        document.getElementById('user-shipping-address').innerHTML = user_info.address 
        document.getElementById('user-image'           ).src       = user_info.img
    }
}