
// views
import {
    check_login_status_if_OK,
    update_sold,
}                                  from "/assets/view/js/misc.js"
import {container}                 from '/assets/view/js/container.js'
import {getCartListInnerHTMLof}    from '/assets/view/js/misc.js'
import {index_menu}                from '/assets/view/js/index-menu.js'
import {footer}                    from '/assets/view/js/footer.js'
import {checkout_view}             from '/assets/view/js/checkout_view.js'

let root = document.getElementById('root');
if (root) {
    // middle link
    if (!check_login_status_if_OK()){
        window.location = "/"
    }

    root.innerHTML = container([
                                    index_menu("checkout"),
                                    "<br>",
                                    checkout_view(),
                                    footer(),
                              ]);

    let shopping_cart_list = document.getElementById('shopping-cart-list')
    if (shopping_cart_list){
        let email1    = localStorage.getItem('myStore-email');
        let cart_list = JSON.parse(localStorage.getItem('myStore-cart'));
        update_sold(cart_list)
        shopping_cart_list.innerHTML = `${ getCartListInnerHTMLof(cart_list) }`
        // add on-click handler for add cart buttons for mobiles
        let i = 0;
        for (let item of cart_list){
            let  a = document.getElementById(`${i}`);
            if (a){
                a.onclick = () => {
                    console.log(cart_list.splice(parseInt(a.id), 1))
                    localStorage.setItem('myStore-cart', JSON.stringify(cart_list));
                    history.go(0);
                }
            }
            i++;
        }
    }

    let checkout_grand_total = document.getElementById('checkout-grand-total')
    if (checkout_grand_total){
        function process_checkout(){
            let vd = -0.1; // voucher discount
            let voucher_code = document.getElementById('voucher-code-input')
            if (voucher_code.value === '') vd = 0.0;
            let user_info = JSON.parse(localStorage.getItem('myStore-user-info'));
            document.getElementById('user-name'            ).innerHTML = user_info.name
            document.getElementById('user-contact-info'    ).innerHTML = user_info.contact
            document.getElementById('user-email-info'      ).innerHTML = user_info.email1
            document.getElementById('user-shipping-address').innerHTML = user_info.address
            let cart_list = JSON.parse(localStorage.getItem('myStore-cart'));
            let sub_total = 0;
            for (let item of cart_list) {
                sub_total += item.unit_price; 
            }
            let shipping_cost          = Math.round(0.012 * sub_total);
            let shipping_cost_discount = Math.round(-0.3 * shipping_cost);
            let voucher_discount       = Math.round(vd * sub_total);
            let grand_total = sub_total + shipping_cost + shipping_cost_discount + voucher_discount;

            document.getElementById('checkout-sub-total'            ).innerHTML = sub_total.toLocaleString('en-PH', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            document.getElementById('checkout-shipping-fee'         ).innerHTML = shipping_cost.toLocaleString('en-PH', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            document.getElementById('checkout-shipping-fee-discount').innerHTML = shipping_cost_discount.toLocaleString('en-PH', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            document.getElementById('voucher-discount'              ).innerHTML = voucher_discount.toLocaleString('en-PH', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            document.getElementById('checkout-grand-total'          ).innerHTML = grand_total.toLocaleString('en-PH', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }

        process_checkout()
        document.getElementById('place-order-btn').addEventListener('click', ()=>{
            let vd = -0.1; // voucher discount
            let voucher_code = document.getElementById('voucher-code-input')
            if (voucher_code.value === '') vd = 0.0;
            let upcoming_deliveries = JSON.parse(localStorage.getItem('myStore-upcoming-deliveries'));
            let cart_list = JSON.parse(localStorage.getItem('myStore-cart'));
            for (let item of cart_list) {
                item.order_date = (new Date(Date.now())).toString();
                let payment_method = '';
                if (document.getElementById('payByCOD').checked) payment_method = "Cash On Delivery"
                if (document.getElementById('payByCC').checked) payment_method = "Pay Using Credit Card"
                item.payment_method = payment_method
                let sub_total = item.unit_price;
                let shipping_cost = Math.round(0.012 * sub_total);
                let shipping_cost_discount = Math.round(-0.3 * shipping_cost);
                let voucher_discount       = Math.round(vd * sub_total);
                let grand_total = sub_total + shipping_cost + shipping_cost_discount + voucher_discount;
                item.unit_price = grand_total;
                upcoming_deliveries.push(item);
            }
            localStorage.setItem('myStore-upcoming-deliveries', JSON.stringify(upcoming_deliveries));
            localStorage.setItem('myStore-cart', '[]');
        })

        document.getElementById('voucher-code-input').addEventListener('keydown', ()=>{
            process_checkout()
        })
        
    }
}