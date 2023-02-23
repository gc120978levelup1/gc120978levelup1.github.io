// models
import {parts           } from "/assets/model/js/parts.js"

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
    update_sold(parts)
    // cobine all data items
    let filtered = [
        ...parts, 
        ]

    root.innerHTML = container([
                                    index_menu("home"),
                                    "<br>",
                                    search_view("Computer Parts", filtered),
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