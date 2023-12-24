let userNow = {
    id: 0,
    userName: '',
    password: ''
}

document.getElementById("btn-signup")?.addEventListener('click', function (event) {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) ?? []

    let registerUsername = document.getElementById('registerUsername')
    let registerPassword = document.getElementById('registerPassword')

    let newuser = {
        id: users.length,
        userName: registerUsername.value,
        password: registerPassword.value
    }
    users.push(newuser)

    localStorage.setItem('users', JSON.stringify(users))
    alert('Đăng kí thành công')
    window.location.href = "login.html"
})

document.getElementById('btn-login')?.addEventListener('click', function (event) {
    event.preventDefault();
    let loginName = document.getElementById('loginName')
    let loginPassword = document.getElementById('loginPassword')

    let users = JSON.parse(localStorage.getItem('users')) ?? []

    for (var i = 0; i < users.length; i++) {
        if (loginName.value === users[i].userName) {
            if (loginPassword.value === users[i].password) {
                localStorage.setItem("isLogin", 1);
                window.location.href = "index.html"
            }
            else {
                alert('Password khong chinh xac!')
                window.location.href = "login.html"
            }

        }
    }

})


