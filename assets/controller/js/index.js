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
            addCart
       }                           from "/assets/view/js/misc.js"
import {container}                 from '/assets/view/js/container.js'
import {index_menu}                from '/assets/view/js/index-menu.js'
import {footer}                    from '/assets/view/js/footer.js'
import {hero}                      from '/assets/view/js/hero.js'
import {categories_view}           from '/assets/view/js/categories_view.js'
import {onsale_view}               from '/assets/view/js/onsale_view.js'

let root = document.getElementById('root');
if (root) {
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

    // filter only on sale items
    let filtered = all_items.filter((item) => (
            item.on_sale === true
        ))

    root.innerHTML = container([
                                    index_menu("home"),
                                    hero(),
                                    categories_view(),
                                    onsale_view(filtered),
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