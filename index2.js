const product_box = document.getElementById("product_box")
products.forEach((product,id) => {
    product_box.insertAdjacentHTML(
        "beforeend",
        `

        <a href="/detail.html?id=${id}" class="menu_product">
        <div class="product_box">
            <img class="product_img" src="${product.image}" alt="">
            <div class="infor_product">
                <p class="product_name">${product.name}</p>
                <p class="price">${product.price}</p>
            </div>
            <button class="btn_buy" onclick="showMessage()"> Đặt hàng</button>
        </div>
        </a>
              `
    );
});