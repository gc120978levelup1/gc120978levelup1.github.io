
import {getCardInnerHTMLof} from "./misc.js"

export const search_view = (title,filtered_items) => {

    let product_list = /*html*/`${ getCardInnerHTMLof(filtered_items) }`

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
                <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5" id="on-sale-list">
                    ${product_list}
                </div>
            </div>
        </section>
    `)
}
