// models
import {mobile_accessories} from "/assets/model/js/mobile_accessories.js"

// views
import {
            check_login_status_if_OK,
            addCart,
            update_sold,
       }                           from "/assets/view/js/misc.js"
import {container}                 from '/assets/view/js/container.js'
import {index_menu}                from '/assets/view/js/index-menu.js'
import {footer}                    from '/assets/view/js/footer.js'
import {search_view}               from '/assets/view/js/search_view.js'

let root = document.getElementById('root');
if (root) {
    update_sold(mobile_accessories)
    // cobine all data items
    let filtered = [
        ...mobile_accessories, 
        ]

    root.innerHTML = container([
                                    index_menu("home"),
                                    "<br>",
                                    search_view("Mobile Accessories", filtered),
                                    footer(),
                              ]);

    // respond to on_sale add to cart button
    for (let item of filtered){
        let  a = document.getElementById(`add-cart-${item.id}`);
        if (a){
            a.onclick = () => {
                if (check_login_status_if_OK()) addCart(filtered, item.id);
            }
        }
    }
}