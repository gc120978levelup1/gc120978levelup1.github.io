
// views
import {
    check_login_status_if_OK,
    update_sold,
}                                  from "/assets/view/js/misc.js"
import {container}                 from '/assets/view/js/container.js'
import {getIncomingListInnerHTMLof}from '/assets/view/js/misc.js'
import {index_menu}                from '/assets/view/js/index-menu.js'
import {footer}                    from '/assets/view/js/footer.js'
import {shopping_cart_view}        from '/assets/view/js/shopping_cart_view.js'
import {categories_view}           from '/assets/view/js/categories_view.js'
import {incoming_deliveries_view}  from '/assets/view/js/incoming_deliveries_view.js'

let root = document.getElementById('root');
if (root) {
    // middle link
    if (!check_login_status_if_OK()){
        window.location = "/"
    }
    
    // get shopping cart lisst items
    let cart_list = JSON.parse(localStorage.getItem('myStore-cart'))
    update_sold(cart_list)

    root.innerHTML = container([
                                    index_menu("dashboard"),
                                    "<br>",
                                    shopping_cart_view("Shopping Cart Items", cart_list),
                                    categories_view(),
                                    incoming_deliveries_view("Incoming Deliveries"),
                                    footer(),
                              ]);

    // respond to on_cart delete cart button
    let i = 0;
    for (let item of cart_list){
        let  a = document.getElementById(`${i}`);
        if (a){
            a.onclick = () => {
                cart_list.splice(parseInt(a.id), 1)
                localStorage.setItem('myStore-cart', JSON.stringify(cart_list));
                history.go(0);
            }
        }
        i++;
    }

    let nos_items_incoming = document.getElementById('nos-of-items-incoming');
    if (nos_items_incoming){
        nos_items_incoming.innerHTML = '0'
        let cart_list = JSON.parse(localStorage.getItem('myStore-upcoming-deliveries'));
        if (cart_list){
            nos_items_incoming.innerHTML = cart_list.length.toLocaleString();
        }
    }

    let incoming_deliveries_list = document.getElementById("incoming-deliveries-list");
    if (incoming_deliveries_list){
        let upcoming_deliveries = JSON.parse(localStorage.getItem('myStore-upcoming-deliveries'));
        incoming_deliveries_list.innerHTML = `${ getIncomingListInnerHTMLof(upcoming_deliveries) }`
    }
}