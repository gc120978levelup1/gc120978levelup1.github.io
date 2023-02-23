// views
import {container}                 from '/assets/view/js/container.js'
import {index_menu}                from '/assets/view/js/index-menu.js'
import {footer}                    from '/assets/view/js/footer.js'
import {aboutus_view}               from '/assets/view/js/aboutus_view.js'

let root = document.getElementById('root');
if (root) {
    root.innerHTML = container([
                                    index_menu("home"),
                                    "<br>",
                                    aboutus_view(),
                                    footer(),
                              ]);
}