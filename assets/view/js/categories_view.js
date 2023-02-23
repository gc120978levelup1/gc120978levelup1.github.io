
import {categories        } from "/assets/model/js/categories.js"

export const categories_view = () => {
    let categories_list = 
                        `${
                            categories.map((item) => /*html*/`
                                <div class="col mb-5 style-animate-selection">
                                    <a href="${item.link}">
                                        <div align="center">
                                            <img
                                                height="140px"
                                                width="140px"
                                                src="${item.image}"
                                                alt="${item.name}"
                                                class="rounded-circle"
                                            />
                                        </div>
                                        <div align="center" class="style-category-name">
                                            <h4> ${item.name} </h4>
                                        </div>
                                    </a>
                                </div>
                            `).join('\n')
                        }`

  return (/*html*/`
            <br>
            <section id="categories">
                <div class="container">
                    <h2 class="mb-2">
                    <i><b>Select Product Categories</b></i>
                    </h2>
                    <hr />
                    <br />
                    <div class="row row-cols-md-4" id="categories-list">
                        ${categories_list}
                    </div>
                </div>
            </section>
  `)
}
