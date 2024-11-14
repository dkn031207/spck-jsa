const products = [
    {
        image: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/348243716_626997382338733_3005908347221228644_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EpQi--m0Q1IQ7kNvgFs2ZAC&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=AoT0qJT9yUUXSbmlPFnsF7A&oh=00_AYBraDQCZWdJbAYBtywpYZDYzbAtJtNeCMR8G1PJdYMs4g&oe=673BCC30",
        name: "Hoa hướng dương",
        price: "20.000đ",
        detail: "Hương vị cà phê đậm đà hòa quyện cùng sữa thơm béo sẽ cho thực khách trải nghiệm tuyệt vời.",
    },

    {
        image: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/358685964_145713455201032_1338460349037685175_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4_J-VI0RzroQ7kNvgGAThsf&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=ApVNAucJeur2rniGmsl9rtD&oh=00_AYDP5XQsQWbHfQopWiw4TotI_339G353QM1Plxp641Ww9w&oe=673BB250",
        name: "Tiên cá heo",
        price: "20.000đ",
        detail: "Nèng tiên cá heo đúng nghĩa là đây chứ đâu",
    },

    {
        image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/359810920_148471591591885_5156075647404144214_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LgE2NFc1MTgQ7kNvgHTpMsB&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AqMxFLQQ0CMRLdZ9m1pl9fr&oh=00_AYByb49wynZEnLUOBALcyiJcmjeZoO6F0baeSMAWiU9jGg&oe=673BA774",
        name: "Móc khóa cỏ 4 lá",
        price: "20.000đ",
        detail: "Lá thứ nhất đó là niềm hi vọng. Lá thứ hai là niềm tin. Lá thứ ba là tình yêu Và lá cuối cùng là sự may mắn",
    },

    {
        image: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/361288397_154006497705061_5630734603105265064_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kzUdYS0LGAMQ7kNvgEH4Pre&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=AmrIu3Xxi6Qvt1RlIc_1eVn&oh=00_AYBKQ4raa0NpUBNUi3iQ2GVjTxGTyiTKNn6NoNsFH4y1fg&oe=673BD6C4",
        name: "Móc khóa hoa hồng",
        price: "20.000đ",
        detail: "Nhẹ nhàng và ngọt ngào",
    },

    {
        image: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/355881945_136188352820209_370721710235478682_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ShaFlHVdzkoQ7kNvgHR0EaV&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=Abs1tAjLd6tRJfp9X93w2go&oh=00_AYBauw_m7sHADFGFh3qSoVRe5jeAIzE8tmLf0-jc08FKcQ&oe=673BCEED",
        name: "Cài tóc con mèo",
        price: "20.000đ",
        detail: "Kẹp tóc mèo cutii!!",
    },

    {
        image: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/355643574_136186346153743_2043737170287463715_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=X9Nwg9Hn7v0Q7kNvgHwzLZp&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=ANNbCXFrrV7xyRwMcgcDn3W&oh=00_AYD8IspyCFovj0jaDQFbrC0DGbFqppAX67aemH2LCNcMhw&oe=673BDB78",
        name: "Thỏ len",
        price: "20.000đ",
        detail: "Thỏ nhỏ, cuteee, xinh tươi",
    },

    {
        image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/356051794_136188316153546_8317784307749451554_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FzYDAOu-PVgQ7kNvgG4N1jL&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AUCqEBKeL7FZwriPvrdfQeC&oh=00_AYBVzz2_MG9C2hjd1QENi1-C3mql5LIjwDCiaLNoe_kavw&oe=673BCE78",
        name: "Trâu len",
        price: "20.000đ",
        detail: "Trâu len mạnh mẽ",
    },




    {
        image: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/356130397_136188329486878_1826598413732415512_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=T0R4UlrCAwAQ7kNvgGp2F7B&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=A5k1AcfqQlDiVmoZrgkGYBi&oh=00_AYAZg0SLW8v8HO3kj2QxJcEKpG88tMUeydFZw2tQZClvCQ&oe=673BB2FF",
        name: "Kẹp tóc dâu tây",
        price: "20.000đ",
        detail: "Chút ngọt ngào cho mái tóc của nàng",
    },


]

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let id = params.id; // "some_value"
if (id == null) window.location.href = "/"
const product = products[id]

document.getElementById("name").innerHTML = product.name;
document.getElementById("intro_img").src = product.image;
document.getElementById("detail").innerHTML = product.detail;
document.getElementById("price").innerHTML = product.price;

const buyBtn = document.getElementById("buy");
const quantityInp = document.getElementById("quantity");
buyBtn.addEventListener("click", () => {
    // Lấy ra số lượng là giá trị của ô input có id là "quantity"
    const quantity = Number(quantityInp.value.trim());

    // Thêm sản phẩm với số lựng tương ứng vào giỏ hàng
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Lấy ra danh sách giỏ hàng từ localStorage
    const exist = cart.findIndex(item => item.id == id); // Kiểm tra xem sản phẩm muốn thêm đã tồn tại trong giỏ hàng hay chưa
    if (exist < 0) { // Nếu chưa tồn tại
        cart.push({ // Thêm sản phẩm vào giỏ hàng
            id: id,
            quantity: quantity
        })

    }
    else { // Nếu đã tồn tại
        cart[exist].quantity += quantity; // Cập nhật số lượng cho sản phẩm

    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm sản phẩm vào giỏ hàng");

});



