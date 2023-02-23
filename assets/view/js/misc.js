function update_sold(stock){
    let upcoming_deliveries = JSON.parse(localStorage.getItem('myStore-upcoming-deliveries'));
    if (upcoming_deliveries){
        for(let item of stock){
            let x = upcoming_deliveries.filter((a) => a.id === item.id)
            let new_sale = x.length
            item.sold += new_sale
        }
    }
}

function check_login_status_if_OK(){
    let login_status = localStorage.getItem('myStore-login');
    if (login_status === '1'){
        //window.location = 'login.html';
        return true
    }else{
        //window.location = 'login.html';
        return false
    }
}

function showModal(modal_form){
    var formModal = new bootstrap.Modal(
    document.getElementById(modal_form),
        {
        keyboard: false,
        }
    );
    formModal.show();
}

function getRating(rating){
    let ret = ""
    for (let i = 0; i < rating; i++){
        ret += ' ⭐';
    }
    return ret;
}

function addCart(items, xid){
    let cart_list = JSON.parse(localStorage.getItem('myStore-cart')) // fetch current cart contents from local storage
    let x = items.filter((item) => (item.id === xid));               // search item with id = xid from list of items
    cart_list.push(x[0]);                                            // add the found item to cart list
    localStorage.setItem('myStore-cart', JSON.stringify(cart_list))  // store the new cart list contents to local storage
}

// show items before being added to the shopping cart
function getCardInnerHTMLof(items){
    return  items.map((item) => `
                    <div class="col mb-5" style="color: gray">
                        <div class="card mb-3 border-3 p-0 position-relative">
                            ${(item.on_sale) ? `
                                <img
                                    height="70px"
                                    src="/assets/view/img/sale.png"
                                    alt="on sale"
                                    class="position-absolute top-0 start-0"
                                />` : ''}
                            <!-- Modal Trigger -->
                            <img
                                height="240px"
                                src="${item.main_image}"
                                alt="${item.description}"
                                class="card-img-top image-selection"
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop-${item.id}"
                            />
                            <div class="card-body" align="center">
                                <h5 class="card-title" style="height:25px;overflow-y:hidden">${item.description}</h5>
                                <p class="card-text" style="height:75px;overflow-y:hidden">${item.specs}</p>
                                <h4 class="text-warning" style="height:40px;overflow-y:hidden;white-space:nowrap;"> <b> <i> ₱${item.unit_price.toLocaleString()} </i> </b> </h4>
                                ${(item.on_sale) ? `
                                    <p class="card-text" style="height:25px;overflow-y:hidden;white-space:nowrap;"><small class="text-muted">discounted ${item.discount_p}% off <span class="text-decoration-line-through"><b>₱ ${((item.unit_price) / ((100-item.discount_p)/100)).toLocaleString()}</b></span></small></p>
                                ` : '<p class="card-text text-white" style="height:25px;overflow-y:hidden">x</p>'}
                                <div align="center" class="d-flex flex-row justify-content-center">
                                    <div class="p-2"> Sold <span class="badge bg-success">${item.sold}</span> </div>
                                    <div class="p-2"> Available <span class="badge bg-danger">${item.qty - item.sold}</span> </div>
                                </div>
                                <div style="height:50px;overflow-y:hidden">
                                    ${getRating(item.review_rate)}
                                </div>
                                ${((item.qty - item.sold) > 0) ? `
                                    <button 
                                        type="button" 
                                        class="btn btn-primary" 
                                        id="add-cart-${item.id}"
                                        data-bs-toggle="modal" data-bs-target="#success-added-${item.id}"
                                    >
                                        <i class="fa fa-cart-plus fa-lg" aria-hidden="true"></i>
                                        &nbsp;
                                        Add to Cart
                                    </button>
                                ` : '<br>'}
                            </div>
                        </div>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop-${item.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header bg-primary-subtle">
                                        <h5 class="modal-title" id="staticBackdropLabel">${item.description}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ${item.images.map((file) => `
                                            <img
                                                width="100%"
                                                src="${file.url}"
                                                alt="${file.url}"
                                            />
                                            <br/>
                                            <br/>
                                        `).join('\n')}
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="success-added-${item.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header bg-primary-subtle">
                                        <h5 class="modal-title" id="staticBackdropLabel">${item.description}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="history.go(0);"></button>
                                    </div>
                                    <div class="modal-body">

                                            ${check_login_status_if_OK()===true?
                                            `
                                            <h3 class="text-success">
                                                <i class="fa fa-check-circle fa-lg" aria-hidden="true"></i>
                                                Successfully Added the item to your shopping cart.
                                            </h3>
                                            `
                                                :
                                            `
                                            <h3 class="text-danger">
                                                <i class="fa fa-check-circle fa-lg" aria-hidden="true"></i>
                                                Shopping cart is closed, since no logged in user.
                                            </h3>
                                            `
                                            }
                                        
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="history.go(0);">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                `).join('\n')
}

// show items after it has been added to the shopping cart
function getCartListInnerHTMLof(items){
    return  items.map((item, i) => `
                    <div class="col mb-5" style="color: gray" >
                        <div class="card mb-3 border-3 p-0 position-relative">
                            ${(item.on_sale) ? `
                                <img
                                    height="70px"
                                    src="/assets/view/img/sale.png"
                                    alt="on sale"
                                    class="position-absolute top-0 start-0"
                                />` : ''}
                            <!-- Modal Trigger -->
                            <img
                                height="240px"
                                src="${item.main_image}"
                                alt="${item.description}"
                                class="card-img-top image-selection"
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop-${item.id}"
                            />
                            <div class="card-body" align="center">
                                <h5 class="card-title" style="height:25px;overflow-y:hidden">${item.description}</h5>
                                <p class="card-text" style="height:75px;overflow-y:hidden">${item.specs}</p>
                                <h4 class="text-warning" style="height:40px;overflow-y:hidden;white-space:nowrap;"> <b> <i> ₱${item.unit_price.toLocaleString()} </i> </b> </h4>
                                ${(item.on_sale) ? `
                                    <p class="card-text" style="height:25px;overflow-y:hidden;white-space:nowrap;"><small class="text-muted">discounted ${item.discount_p}% off <span class="text-decoration-line-through"><b>₱ ${((item.unit_price) / ((100-item.discount_p)/100)).toLocaleString()}</b></span></small></p>
                                ` : '<p class="card-text text-white" style="height:25px;overflow-y:hidden">x</p>'}
                                <div align="center" class="d-flex flex-row justify-content-center">
                                    <div class="p-2"> Sold <span class="badge bg-success">${item.sold}</span> </div>
                                    <div class="p-2"> Available <span class="badge bg-danger">${item.qty - item.sold}</span> </div>
                                </div>
                                <div style="height:50px;overflow-y:hidden">
                                    ${getRating(item.review_rate)}
                                </div>
                                ${((item.qty - item.sold) > 0) ? `
                                    <button 
                                        type="button" 
                                        class="btn btn-danger" 
                                        id="${i}"
                                    >
                                        <i class="fa fa-opencart fa-lg" aria-hidden="true"></i>
                                        &nbsp;
                                        Remove from Cart
                                    </button>
                                ` : '<br>'}
                            </div>
                        </div>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop-${item.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header bg-primary-subtle">
                                        <h5 class="modal-title" id="staticBackdropLabel">${item.description}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ${item.images.map((file) => `
                                            <img
                                                width="100%"
                                                src="${file.url}"
                                                alt="${file.url}"
                                            />
                                            <br/>
                                            <br/>
                                        `).join('\n')}
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                `).join('\n')
}

// show items after it has been checked out
function getIncomingListInnerHTMLof(items){
    return  items.map((item, i) => `
                    <div class="col mb-5" style="color: gray" >
                        <div class="card mb-3 border-3 p-0 position-relative">
                            ${(item.on_sale) ? `
                                <img
                                    height="70px"
                                    src="/assets/view/img/sale.png"
                                    alt="on sale"
                                    class="position-absolute top-0 start-0"
                                />` : ''}
                            <!-- Modal Trigger -->
                            <img
                                height="240px"
                                src="${item.main_image}"
                                alt="${item.description}"
                                class="card-img-top image-selection"
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop-${item.id}"
                            />
                            <div class="card-body" align="center">
                                <h5 class="card-title" style="height:25px;overflow-y:hidden">${item.description}</h5>
                                <p class="card-text" style="height:75px;overflow-y:hidden">${item.specs}</p>
                                <p class="card-text">Ordered last ${item.order_date}</p>
                                <p class="card-text">${item.payment_method}</p>
                                <h4 class="text-warning" style="height:40px;overflow-y:hidden;white-space:nowrap;"> <b> <i> ₱${item.unit_price.toLocaleString()} </i> </b> </h4>
                                ${(item.on_sale) ? `
                                    <p class="card-text" style="height:25px;overflow-y:hidden;white-space:nowrap;"><small class="text-muted">discounted ${item.discount_p}% off <span class="text-decoration-line-through"><b>₱ ${((item.unit_price) / ((100-item.discount_p)/100)).toLocaleString()}</b></span></small></p>
                                ` : '<p class="card-text text-white" style="height:25px;overflow-y:hidden">x</p>'}
                            </div>
                        </div>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop-${item.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header bg-primary-subtle">
                                        <h5 class="modal-title" id="staticBackdropLabel">${item.description}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ${item.images.map((file) => `
                                            <img
                                                width="100%"
                                                src="${file.url}"
                                                alt="${file.url}"
                                            />
                                            <br/>
                                            <br/>
                                        `).join('\n')}
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                `).join('\n')
}

function get_nos_cart_list(){
    let ret = 0
    let cart_list = JSON.parse(localStorage.getItem('myStore-cart'));
    if (cart_list){
        ret = cart_list.length
    }
    return ret
}

export {
            update_sold, 
            check_login_status_if_OK, 
            showModal,
            getRating, 
            addCart, 
            getCardInnerHTMLof, 
            getCartListInnerHTMLof, 
            getIncomingListInnerHTMLof,
            get_nos_cart_list
        }
