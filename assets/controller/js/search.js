// models
import {mobiles           } from "/assets/model/js/mobiles.js"
import {mobile_accessories} from "/assets/model/js/mobile_accessories.js"
import {laptops           } from "/assets/model/js/laptops.js"
import {desktops          } from "/assets/model/js/desktops.js"
import {parts             } from "/assets/model/js/parts.js"
import {bags              } from "/assets/model/js/bags.js"
import {geek_tshirts      } from "/assets/model/js/geek_tshirts.js"
import {shoes             } from "/assets/model/js/shoes.js"

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
    update_sold(mobiles)
    update_sold(mobile_accessories)
    update_sold(laptops)
    update_sold(desktops)
    update_sold(parts)
    update_sold(bags)
    update_sold(geek_tshirts)
    update_sold(shoes)
    // cobine all data items
    let all_items = [
        ...mobiles, 
        ...mobile_accessories, 
        ...laptops, 
        ...desktops, 
        ...parts, 
        ...bags, 
        ...geek_tshirts, 
        ...shoes,
        ]

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let fstring = urlParams.get('search').toString().toUpperCase();
    // filter
    let filtered = all_items.filter((item) => (
        item.description.toUpperCase().includes(fstring) || item.specs.toUpperCase().includes(fstring) || (fstring === '')
    ))

    root.innerHTML = container([
                                    index_menu("home"),
                                    "<br>",
                                    search_view("Search Results", filtered),
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