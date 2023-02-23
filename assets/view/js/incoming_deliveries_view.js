import {getCartListInnerHTMLof} from "./misc.js"

export const incoming_deliveries_view = (title, cart_list) => {
    return (/*html*/`
        <br>
        <section id="search-section">
            <div class="container">
                <h2 class="mb-5">
                <span class="text-primary position-relative">
                    <i class="fa fa-ship fa-lg text-warning" aria-hidden="true"></i>
                    <h5 class="position-absolute top-0 start-200 translate-middle">
                    <span class="badge rounded-circle bg-danger">
                        <span id="nos-of-items-incoming">99+</span>
                        <span class="visually-hidden">unread messages</span>
                    </span>
                    </h5>
                </span>
                <i><b>${title}</b></i>
                </h2>
                <hr />
                <div class="row  row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5" id="incoming-deliveries-list"></div>
            </div>
        </section>   
    `)
}

