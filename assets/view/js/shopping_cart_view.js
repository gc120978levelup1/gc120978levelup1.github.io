import {getCartListInnerHTMLof} from "./misc.js"

export const shopping_cart_view = (title, cart_list) => {
    let shopping_cart_list = `${ getCartListInnerHTMLof(cart_list) }`
    return (/*html*/`
        <br>
        <section id="search-section">
            <div class="container">
                <h2 class="mb-2">
                    <div class="d-flex flex-md-row align-items-center">
                        <div class="px-md-3">
                            <i><b>${title}</b></i>
                        </div>
                    </div>
                </h2>
                <hr />
                <br />
                <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                    ${shopping_cart_list}
                </div>
            </div>
        </section>   
    `)
}

