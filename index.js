const products = [



    {
        image: "https://mcdonalds.vn/uploads/2018/mccafe/icedlatte.png",
        name: "Chậu hoa lưu ly",
        price: "25.000đ",
        detail: "Chậu hoa len rất thích hợp để trung bày trên bàn học và bàn làm việc cũng như là một món quà rất đẹp và tinh tế",
    },

    {
        image: "https://www.awrestaurants.co.id/assets/images/new-menus/Ice%20Choco.png",
        name: "Đồ kẹp tóc mèo",
        price: "18.000đ",
        detail: "Một chiếc kẹp tóc cực đẹp cho cắc nàng, thể hiện rõ độ dễ thuong qua hình mèo nhỏ nhắn cute.",
    },

    {
        image: "https://th.bing.com/th/id/R.f280fbc204173cf766d2e29aa39aaa16?rik=LMrGZq1cProZyw&pid=ImgRaw&r=0",
        name: "Trâu len",
        price: "25.000đ",
        detail: "Vật trưng bày thể hiêmnj sự mạnh mẽ nhưng cũng không kém phần đáng yêu , là một món quà và vật trung bày tuyệt vời.",
    },

    {
        image: "https://th.bing.com/th/id/OIP.4FipDzpz2Ki2vLHn0jwjBwAAAA?w=422&h=422&rs=1&pid=ImgDetMain",
        name: "Cold brew",
        price: "30.000đ",
        detail: "Một chiếc móc khóa dễ thương với những đường móc chắc chắn và phần mắt đáng yêu cùng với các họa tiết nhỏ cùng màu vô cùng đặt biệt thể hiện rõ sự đặc biệt của chiếc móc khóa.",
    },

    {
        image: "https://th.bing.com/th/id/OIP.nXLFkAcslhTJoyNT7mo8KAHaHa?rs=1&pid=ImgDetMain",
        name: "Trà oolong",
        price: "25.000đ",
        detail: "Một vật trưng bày đáng yêu với độ phồng và phần những đường móc cực kì tinh xảo, rất thích hợp để trưng trong phòng trên bàn làm việch hay làm quà tặng cực đáng yêu.",
    },

    {
        image: "https://th.bing.com/th/id/R.d13ff393e2396963dd8605928d2be76a?rik=quh3jxQAEdtY%2bw&riu=http%3a%2f%2fmedia-cache-ec0.pinimg.com%2f736x%2fa9%2fe2%2f89%2fa9e289f43cfce632d70161ab0d64735b.jpg&ehk=IGC0lbqoXW6owUr%2b4%2fp6POu96%2betGP1VdQmwQHp4%2fBY%3d&risl=&pid=ImgRaw&r=0",
        name: "Trà đào",
        price: "18.000đ",
        detail: "Một chiếc kẹp tóc thể hiện sự ngot ngào của các nằng với nét độc đáo từ quả dâu.",
    },

    {
        image: "https://th.bing.com/th/id/OIP.uVoTFMCvQcvNveLrk0eVrgHaHa?rs=1&pid=ImgDetMain",
        name: "Trà vải",
        price: "18.000đ",
        detail: "Một chiếc kẹp tóc vô cùng cute cho các bạn nữ với thiết kế nhỏ nhắn xinh xắn đặc biết nổi bật hình con chim cánh cụt vô cùng tinh tế.",
    },




    {
        image: "https://th.bing.com/th/id/OIP.Hd-ZkyfUEVYMx8xU6wM6IgHaHa?rs=1&pid=ImgDetMain",
        name: "Trà dâu",
        price: "30.000đ",
        detail: "Sản phẩm đem lại may mắn cho mọi nhà, với thiết kế dễ thương cùng những đường móc độc đáo chỉn chu.",
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


