const products = [
    {
        image: "https://mcdonalds.vn/uploads/2018/mccafe/icedlatte.png",
        name: "Cà phê sữa",
        price: "20.000đ",
        detail: "Hương vị cà phê đậm đà hòa quyện cùng sữa thơm béo sẽ cho thực khách trải nghiệm tuyệt vời.",
    },

    {
        image: "https://www.awrestaurants.co.id/assets/images/new-menus/Ice%20Choco.png",
        name: "Cà phê đen",
        price: "16.000đ",
        detail: "Đậm đà vị cà phê nguyên chất cùng hương thơm tuyệt vời của hạt cà phê hảo hạng đậm đà tới giọt cuối cùng.",
    },

    {
        image: "https://th.bing.com/th/id/R.f280fbc204173cf766d2e29aa39aaa16?rik=LMrGZq1cProZyw&pid=ImgRaw&r=0",
        name: "Bạc xỉu",
        price: "20.000đ",
        detail: "Hương vị cà phê đặc trưng cùng với hương sữa ngọt ngào sẽ đưa đến trải nghiệm không thể quên.",
    },

    {
        image: "https://th.bing.com/th/id/OIP.4FipDzpz2Ki2vLHn0jwjBwAAAA?w=422&h=422&rs=1&pid=ImgDetMain",
        name: "Cold brew",
        price: "18.000đ",
        detail: "Đậm đà nhưng nhẹ nhàng cho các tín đồ không thích quá đắng hay ngọt.",
    },

    {
        image: "https://th.bing.com/th/id/OIP.nXLFkAcslhTJoyNT7mo8KAHaHa?rs=1&pid=ImgDetMain",
        name: "Trà oolong",
        price: "25.000đ",
        detail: "Hương vị từ lá trà oolong nguyên chất hòa quyện với công thức trà bí truyền sẽ đem lại một cảm giác mát mẻ và dịu nhẹ lôi cuốn.",
    },

    {
        image: "https://th.bing.com/th/id/R.d13ff393e2396963dd8605928d2be76a?rik=quh3jxQAEdtY%2bw&riu=http%3a%2f%2fmedia-cache-ec0.pinimg.com%2f736x%2fa9%2fe2%2f89%2fa9e289f43cfce632d70161ab0d64735b.jpg&ehk=IGC0lbqoXW6owUr%2b4%2fp6POu96%2betGP1VdQmwQHp4%2fBY%3d&risl=&pid=ImgRaw&r=0",
        name: "Trà đào",
        price: "18.000đ",
        detail: "Hương trà đào thơm ngọt cùng một chút hương thơm từ trà, một thức uống dịu nhẹ cho mọi lứa tuổi.",
    },

    {
        image: "https://th.bing.com/th/id/OIP.uVoTFMCvQcvNveLrk0eVrgHaHa?rs=1&pid=ImgDetMain",
        name: "Trà vải",
        price: "18.000đ",
        detail: "Vị thơm không thể chối từ từ trái vải chín ngon ngọt kết hợp cùng trà tinh khiết đứa đến một trải nghiệm ngọt ngào nhưng đầy mát mẻ.",
    },




    {
        image: "https://th.bing.com/th/id/OIP.Hd-ZkyfUEVYMx8xU6wM6IgHaHa?rs=1&pid=ImgDetMain",
        name: "Trà dâu",
        price: "25.000đ",
        detail: "Sự kết hợp chua ngọt hòa quyện cùng lá trà hảo hạng đưa đem đến một thức uống vô cùng hợp với giới trẻ.",
    },


]
function showMessage() {
    var cf_dathang = confirm("Xác nhận đặt hàng!")
    if (cf_dathang == true) {
        alert("Đặt đồ thành công!")
    } else {
        alert("Đã hủy yêu cầu!")
    }
}
var index = 0;
var slides = document.getElementsByClassName("picture")
function showSlideAuto() {
    setInterval(function () {
        index++;
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }

        if (index > 2) {
            index = 0;
        }
        slides[index].style.display = "block"
    }, 2000)
}
showSlideAuto()


