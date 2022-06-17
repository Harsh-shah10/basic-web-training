var slideIndex = 0;
slideshow();

function slideshow() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(slideshow, 3000); // Changes the image timer every 3sec
}


// Ajax Pactise


function loadData() {
    var httpxy = new XMLHttpRequest();

    httpxy.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("load").innerHTML = this.responseText;
        }
    };

    httpxy.open('GET', "assets/read.txt", true);
    httpxy.send();
}



function loadData2() {
    var httpxy = new XMLHttpRequest();

    httpxy.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("load2").innerHTML = this.responseText;
        }
    };

    httpxy.open('GET', "https://jsonplaceholder.typicode.com/users", true);
    httpxy.send();
}


function loadData3() {
    var httpxy = new XMLHttpRequest();

    httpxy.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("load3").innerHTML = this.getAllResponseHeaders();
        }
    };

    httpxy.open('GET', "https://jsonplaceholder.typicode.com/users", true);
    httpxy.send();
}

function loadData4() {
    var httpxy = new XMLHttpRequest();

    httpxy.onreadystatechange = function () {
        if (httpxy.readyState == 4 && httpxy.status == 200) {
            var users = JSON.parse(httpxy.responseText);
            let names = "";
            users.map((itm, idx) => {
                names += "<li>" + itm.name + "</li>";
            }, this);
            document.getElementById('load4_users').innerHTML = names;
        }
    };
    httpxy.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    httpxy.send();
}

function loadData5() {
    var httpxy = new XMLHttpRequest();

    httpxy.onreadystatechange = function () {
        if (httpxy.readyState == 4 && httpxy.status == 200) {
            var users = JSON.parse(httpxy.responseText);
            let email = "";
            users.map((itm, idx) => {
                email += "<li>" + itm.email + "</li>";
            }, this);
            document.getElementById('load5_email').innerHTML = email;
        }
    };
    httpxy.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    httpxy.send();
}

function loadData6() {
    var httpxy = new XMLHttpRequest();

    httpxy.onreadystatechange = function () {
        if (httpxy.readyState == 4 && httpxy.status == 200) {
            var users = JSON.parse(httpxy.responseText);
            let Company = "";
            users.map((itm, idx) => {
                Company += "<li>" + itm.Company + "</li>";
            }, this);
            document.getElementById('load6_company').innerHTML = Company;
        }
    };
    httpxy.open("GET", "assets/demo2.json", true);
    httpxy.send();
}

function loadData7() {
    var httpxy = new XMLHttpRequest();

    httpxy.onreadystatechange = function () {
        if (httpxy.readyState == 4 && httpxy.status == 200) {
            var users = JSON.parse(httpxy.responseText);
            let Company = "", Current_Price = "";
            users.map((itm, idx) => {
                Company += "<li>" + itm.Company + "</li>";
                Current_Price += "<li>" + itm.Current_Price + "</li>";
            }, this);

            document.getElementById('load7_combine').innerHTML = Company + "=>" + Current_Price;
        }
    };
    httpxy.open("GET", "assets/demo2.json", true);
    httpxy.send();
}