const products = [



    {
        image: "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/348239722_962543861548406_8031736498459030533_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=OdDv58qJWkoAX9NfECr&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfDW4d_Z4dkX9gwljnSzHI_JX5zJCf7C78Y9XecMFw68NQ&oe=65019671",
        name: "Chậu hoa lưu ly",
        price: "25.000đ"
    },

    {
        image: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/355881945_136188352820209_370721710235478682_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=rMjWZ2yGDMEAX8MhZ-4&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfDxt7h6N5v9G7HfQuX78kNnL65-EEPzUq8oDw2MQHWamA&oe=6501D66D",
        name: "Đồ kẹp tóc mèo",
        price: "18.000đ"
    },

    {
        image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/356051794_136188316153546_8317784307749451554_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=rg8x6D0W1A4AX9_Tyis&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfA6obbGHv28Pjyqg3hI5F-glz2K-gTYu3cFlkh53CUebQ&oe=65027EB8",
        name: "Trâu len",
        price: "25.000đ",
    },

    {
        image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/355643574_136186346153743_2043737170287463715_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=UNA9JvPqEvsAX_PS3M4&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfD8TpM_PTZuq-j9Y7B0BqOw3nsijJfsEU7NqWG_CBRYPQ&oe=65025378",
        name: "Thỏ len",
        price: "25.000đ",
    },

    {
        image: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/356130397_136188329486878_1826598413732415512_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=H-02-1JnGEsAX937WGU&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfC1Gu8RqPVSHJpzeE-hG4Jl9a2hHmvDXsc6Z_7v-Lnr5A&oe=6501823F",
        name: "Kẹp tóc dâu",
        price: "18.000đ",
    },

    {
        image: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/355901401_136188362820208_6056722163670181481_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=mVDjZFsts6MAX9s9JmT&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBXA-mT3tbjHaK2HQFK_tjmH7Bd6Ic2jJgy1d-PEx_ncw&oe=6502E198",
        name: "kẹp tóc chim cách cụt",
        price: "18.000đ",
    },

    {
        image: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/357720420_144950358610675_2343093495940397905_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=jyEwHeXbvXMAX9iTWkH&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfB6mG6jDhBgIC2OgTwKEd9HofI2tiNqJ58EjUsYhYLrsg&oe=65024AAC",
        name: "Móc khóa cua",
        price: "30.000đ"

    },


    {
        image: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/359810920_148471591591885_5156075647404144214_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=SBssKdoG6VMAX9wAaE8&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDFnTWb7OV7h3_SEyOw7IvnkzdLt5bcGNFKocIT5qBwgw&oe=65028FF4",
        name: "Móc khóa cỏ bốn lá",
        price: "30.000đ",
    },

    {
        image: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/361936063_157571360681908_4217652395579101596_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Zgg4ZjIJJD4AX-9ZsI7&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfBInVKRXx-vWTQUCZcLypKItYjXSGAEZ3hjfqamduXlcg&oe=650182A5",
        name: "Móc khóa lửa-nước",
        price:"30.000đ"
    },
]
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let id = params.id; // "some_value"
if (id == null) window.location.href = "/"
const product=products[id]

document.getElementById("name").innerHTML = product.name;
document.getElementById("intro_img").src = product.image;
document.getElementById("detail").innerHTML = product.name;