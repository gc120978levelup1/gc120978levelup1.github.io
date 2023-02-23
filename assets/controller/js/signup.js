// models
import {shoes} from "/assets/model/js/shoes.js"

// views
import {
            showModal
       }                           from "/assets/view/js/misc.js"
import {container}                 from '/assets/view/js/container.js'
import {index_menu}                from '/assets/view/js/index-menu.js'
import {footer}                    from '/assets/view/js/footer.js'
import {signup_view}               from '/assets/view/js/signup_view.js'

let root = document.getElementById('root');
if (root) {
    root.innerHTML = container([
                                    index_menu("login"),
                                    "<br>",
                                    signup_view(),
                                    footer(),
                              ]);
    showModal("signUpModal")

    // initialize the validation state
    let emailInvalid     = true
    let password1Invalid = true
    let password2Invalid = true
    let nameInvalid      = true
    let contactInvalid   = true
    let addressInvalid   = true
    
    // if all is valid activate button
    function validate_submit_button() {
        let signup_submit = document.getElementById('signup-submit')
        if (signup_submit) {
            signup_submit.disabled = true
            if (!emailInvalid && !password1Invalid && !password2Invalid && !nameInvalid && !addressInvalid &&!contactInvalid){
                signup_submit.disabled = false
            }
        }
    }
    validate_submit_button()

    // validate email
    let email_error = document.getElementById('email-error')
    let email1 = document.getElementById('email1')
    if (email1) {
        email1.addEventListener("keyup",(e) => {
            let val = e.target.value;
            let pass = String(val).toUpperCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
            if (pass){
                email_error.innerHTML = /*html*/`<strong style="color:green">Valid</strong>`
                emailInvalid = false
            }else{
                email_error.innerHTML = /*html*/`<strong style="color:red">Invalid Email</strong>`
                emailInvalid = true
            }
            validate_submit_button()
        })
    }

    // validate password1
    let password1_error = document.getElementById('password1-error')
    let password1 = document.getElementById('password1')
    if (password1) {
        password1.addEventListener("keyup",(e) => {
            let val = e.target.value;
            let pass = String(val).match(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]:;/?.>,<])(?=.*[^\s]).{8,}$/
            )
            if (pass){
                password1_error.innerHTML = /*html*/`<strong style="color:green">Valid</strong>`
                password1Invalid = false
            }else{
                password1_error.innerHTML = /*html*/`<strong style="color:red">Weak ${val}: Should be min. 8 chars, 1 Caps, 1 lowcase, 1 special char, 1 num </strong>`
                password1Invalid = true
            }
            validate_submit_button()
        })
    }

    // validate password1
    let password2_error = document.getElementById('password2-error')
    let password2 = document.getElementById('confirm_pwd')
    if (password2) {
        password2.addEventListener("keyup",(e) => {
            let val = e.target.value;
            let pass = (val === password1.value)
            if (pass){
                password2_error.innerHTML = /*html*/`<strong style="color:green">Valid</strong>`
                password2Invalid = false
            }else{
                password2_error.innerHTML = /*html*/`<strong style="color:red">Verify Password did not match.</strong>`
                password2Invalid = true
            }
            validate_submit_button()
        })
    }

    //
    // validate name
    let name_error = document.getElementById('name-error')
    let name = document.getElementById('name')
    if (name) {
        name.addEventListener("keyup",(e) => {
            let val = e.target.value;
            let pass = String(val).match(
                /^\s*.+\s*$/
            )
            if (pass){
                name_error.innerHTML = /*html*/`<strong style="color:green">Valid</strong>`
                nameInvalid = false
            }else{
                name_error.innerHTML = /*html*/`<strong style="color:red">Error: At least not empty</strong>`
                nameInvalid = true
            }
            validate_submit_button()
        })
    }

    // validate address
    let address_error = document.getElementById('address-error')
    let address = document.getElementById('address')
    if (address) {
        address.addEventListener("keyup",(e) => {
            let val = e.target.value;
            let pass = String(val).match(
                /^\s*.+\s*$/
            )
            if (pass){
                address_error.innerHTML = /*html*/`<strong style="color:green">Valid</strong>`
                addressInvalid = false
            }else{
                address_error.innerHTML = /*html*/`<strong style="color:red">Error: At least not empty</strong>`
                addressInvalid = true
            }
            validate_submit_button()
        })
    }

    // validate address
    let contact_error = document.getElementById('contact-error')
    let contact = document.getElementById('contact')
    if (contact) {
        contact.addEventListener("keyup",(e) => {
            let val = e.target.value;
            let pass = String(val).match(
                /^\(?(0|\+63|0063)\)?[ -]?(9)\d{2}[ -]?\d{3}[ -]?\d{4}$/
            )
            if (pass){
                contact_error.innerHTML = /*html*/`<strong style="color:green">Valid</strong>`
                contactInvalid = false
            }else{
                contact_error.innerHTML = /*html*/`<strong style="color:red">Error: Invalid Phone Number</strong>`
                contactInvalid = true
            }
            validate_submit_button()
        })
    }

    // 
}