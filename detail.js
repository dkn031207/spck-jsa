const products = [



    {
        image: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/347124190_2448977455268601_8517535409725497763_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MrcKY-BcGHoAX9Xt8Q3&_nc_oc=AQnD0XFGlpnByEwCN4XJjgkHfRnK1D9DSfUXvDnLbQBMQXd6w13T3nf1rGB_pHhohYw&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfD6qAUDmKAGfU2z868zy2Ul2MH_YC5FFeN80NgA7nwYTw&oe=6528611F",
        name: "Chậu hoa lưu ly",
        price: "25.000đ",
        detail: "Chậu hoa len rất thích hợp để trung bày trên bàn học và bàn làm việc cũng như là một món quà rất đẹp và tinh tế",
    },

    {
        image: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/355881945_136188352820209_370721710235478682_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Z8AsZq4OCQYAX-h4U0g&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfDbMUup16kaHbsZTR6wiShUqerQPJ-j_MHWSyS8Kde1kQ&oe=6529636D",
        name: "Đồ kẹp tóc mèo",
        price: "18.000đ",
        detail: "Một chiếc kẹp tóc cực đẹp cho cắc nàng, thể hiện rõ độ dễ thuong qua hình mèo nhỏ nhắn cute.",
    },

    {
        image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/356051794_136188316153546_8317784307749451554_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=z4fyXrRgdgcAX-Oxlfj&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBTz5m_yFDypw1F0bg2VaAlvvx6jmGvkEd1xYKk1tJibQ&oe=65281178",
        name: "Trâu len",
        price: "25.000đ",
        detail: "Vật trưng bày thể hiêmnj sự mạnh mẽ nhưng cũng không kém phần đáng yêu , là một món quà và vật trung bày tuyệt vời.",
    },

    {
        image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/355643574_136186346153743_2043737170287463715_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Va2iT38hw6YAX9B9KqQ&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfC1NmObN344DDDkT-AjwRfhbg7rgBgvIDY9_HtN9_Mptw&oe=6527E638",
        name: "Thỏ len",
        price: "25.000đ",
        detail: "Một vật trưng bày đáng yêu với độ phồng và phần những đường móc cực kì tinh xảo, rất thích hợp để trưng trong phòng trên bàn làm việch hay làm quà tặng cực đáng yêu.",
    },

    {
        image: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/356130397_136188329486878_1826598413732415512_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=oF33RrZJt6wAX91f73M&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfDktbDetxbH1nLsv1MeQwiSAg6RS9jIVOXPYrK55yHNtQ&oe=65290F3F",
        name: "Kẹp tóc dâu",
        price: "18.000đ",
        detail: "Một chiếc kẹp tóc thể hiện sự ngot ngào của các nằng với nét độc đáo từ quả dâu.",
    },

    {
        image: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/355901401_136188362820208_6056722163670181481_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=eqCIUD1iOLUAX9JtO8e&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCQA8pePfWBjQpQIkWVyDxpvtbcq8pJuRhCqbEEaxnCmw&oe=65287458",
        name: "kẹp tóc chim cách cụt",
        price: "18.000đ",
        detail: "Một chiếc kẹp tóc vô cùng cute cho các bạn nữ với thiết kế nhỏ nhắn xinh xắn đặc biết nổi bật hình con chim cánh cụt vô cùng tinh tế.",
    },

    {
        image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/357720420_144950358610675_2343093495940397905_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=bQD9cRlV2Z0AX8Hf-VP&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfB3CW7JFNiHhlCtubaErYKm0wac-KBRkbQyBWESTkKbXg&oe=6527DD6C",
        name: "Móc khóa cua",
        price: "30.000đ",
        detail: "Một chiếc móc khóa dễ thương với những đường móc chắc chắn và phần mắt đáng yêu cùng với các họa tiết nhỏ cùng màu vô cùng đặt biệt thể hiện rõ sự đặc biệt của chiếc móc khóa.",
    },


    {
        image: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/359810920_148471591591885_5156075647404144214_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=SlvjnHiN91sAX9ja-Pg&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDhXzDUd-LHHPY6EXJ8T4S5ohlZHepI5X-wcsv3cYEmAg&oe=652822B4",
        name: "Móc khóa cỏ bốn lá",
        price: "30.000đ",
        detail: "Sản phẩm đem lại may mắn cho mọi nhà, với thiết kế dễ thương cùng những đường móc độc đáo chỉn chu.",
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

function showMessage() {
    var cf_dathang = confirm("Xác nhận đặt hàng!")
    if (cf_dathang == true) {
        alert("Đặt đồ thành công!")
    } else {
        alert("Đã hủy yêu cầu!")
    }
}

