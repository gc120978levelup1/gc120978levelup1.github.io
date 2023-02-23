
import {getCardInnerHTMLof} from "./misc.js"

export const onsale_view = (filtered_items) => {

    let on_sale_list = /*html*/`${ getCardInnerHTMLof(filtered_items) }`

    return (/*html*/`
        <br>
        <section id="onsale-list-section">
            <div class="container">
                <h2 class="mb-2">
                    <div class="d-flex flex-md-row align-items-center">
                        <div class="pulse">
                            <i class="fa fa-bolt"></i>
                            </div>
                            <div class="px-md-3">
                            <i><b>Items On Sale!</b></i>
                        </div>
                    </div>
                </h2>
                <hr />
                <br />
                <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5" id="on-sale-list">
                    ${on_sale_list}
                </div>
            </div>
        </section>
    `)
}
