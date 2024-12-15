import { validateUser, logout } from './router.js';
$(document).ready(function () {
    validateUser();
    $('#logout').on('click', function () {
        logout();
    })
    const students = [
        {
            name: "Vinayak",
            image: "https://gcdnb.pbrd.co/images/zWqPH1RMp4oI.jpg?o=1"
        },
        {
            name: "Nilu",
            image: "https://gcdnb.pbrd.co/images/zBg6ddE8znRi.jpg?o=1"
        },
        {
            name: "Lokesh",
            image: "https://gcdnb.pbrd.co/images/NFdLjDklhEY7.jpg?o=1"
        },
        {
            name: "Askit",
            image: "https://gcdnb.pbrd.co/images/bJlRsWQkVuGR.jpg?o=1"
        },
        {
            name: "Medhansh",
            image: "https://gcdnb.pbrd.co/images/vEmC7mXU1XPG.jpg?o=1"
        },
        {
            name: "Shubhuwu",
            image: "https://gcdnb.pbrd.co/images/hlfc8LXo0t8e.jpg?o=1"
        },
        {
            name: "Akash",
            image: "https://gcdnb.pbrd.co/images/MRLMqJTaXTlB.jpg?o=1"
        }
    ]
    $("main #carousel").load("./designs/carousel.html", function () {
        for (var i = 0; i < students.length ; i++) {
            var urladd = students[i].image;
            var name = students[i].name;
            console.log('carousel loaded');
            $('#mycarouselimg').append(`
                <div class="carousel-item col-md-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="myback-img">
                                <img src=${urladd} >
                            </div>
                            <div class="myoverlay"></div>
                            <div class="profile-img">
                                <div class="borders avatar-profile">
                                    <img src=${urladd}>
                                </div>
                            </div>
                            <div class="profile-title">
                                <a href="#">
                                    <h3>${name}</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `);
            }
    });
});
