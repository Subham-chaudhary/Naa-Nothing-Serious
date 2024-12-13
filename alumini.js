import { validateUser, logout } from './router.js';
$('document').ready(function () {
    validateUser();
    console.log('document loaded');
    const students =[
        {
            "info": "Vinayak is a brilliant student who loves solving complex math problems and enjoys playing chess.",
            "image": "https://gcdnb.pbrd.co/images/zWqPH1RMp4oI.jpg?o=1"
        },
        {
            "info": "Nilu is a creative thinker with a knack for art and design. She enjoys painting landscapes in her free time.",
            "image": "https://gcdnb.pbrd.co/images/zBg6ddE8znRi.jpg?o=1"
        },
        {
            "info": "Lokesh is a tech enthusiast who is passionate about coding and loves exploring new programming languages.",
            "image": "https://gcdnb.pbrd.co/images/NFdLjDklhEY7.jpg?o=1"
        },
        {
            "info": "Askit is a nature lover who spends weekends trekking and capturing scenic views with his camera.",
            "image": "https://gcdnb.pbrd.co/images/bJlRsWQkVuGR.jpg?o=1"
        },
        {
            "info": "Medhansh is a sports enthusiast who excels in football and is always eager to learn new strategies.",
            "image": "https://gcdnb.pbrd.co/images/vEmC7mXU1XPG.jpg?o=1"
        },
        {
            "info": "Shubhuwu is a gaming prodigy who dreams of developing his own game studio and creating immersive virtual worlds.",
            "image": "https://gcdnb.pbrd.co/images/hlfc8LXo0t8e.jpg?o=1"
        },
        {
            "info": "Akash is a music lover who plays the guitar and enjoys composing soulful tunes during his leisure time.",
            "image": "https://gcdnb.pbrd.co/images/MRLMqJTaXTlB.jpg?o=1"
        }
    ]
    
    for (var i = 0; i < students.length ; i++) {
        var urladd = students[i].image;
        var info = students[i].info;
        console.log('carousel loaded');
        $('#alumini').append(`
                <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3 mb-5">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="myback-img">
                            <img src=${urladd} >
                        </div>
                        
                        <div class="profile-info">
                            <a href="#">
                                <h3>${info}</h3>
                            </a>
                        </div>
                    </div>    
                </div>
           </div>
        `);
    }
})