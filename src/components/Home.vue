<template>
   <div id="container">
        <!--------------- navbar started------------- -->
        <header class="head" >
            <nav class="nav">
                <div class="brand" data-aos="fade-right">
                    <a :href="'/home/'">Ay-Felix</a>
                    <div class="burger">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
                <ul class="ul height" data-aos="fade-left">
                    <li><a :href="'/home/'">Home</a></li>
                    <li><a :href="'/about/'">About</a></li>
                    <li><a :href="'/services/'">Services</a></li>
                    <li><a :href="'/projects/'">Projects</a></li>
                    <li><a :href="'/contact/'">Contact</a></li>
                </ul>
            </nav>
        </header>
   </div>
        <!--------------- navbar ended------------- -->
        <!--------------- home started---------------->
        <div id="home">
            <section class="home-info" data-aos="fade-right">
                <p class="sub-heading">
                    The Creative Tech 
                </p>
                <h4 class="home-heading">Hi, i am Felix <br>
                    <span class="heading-span">A Full Stack Web Developer<br> From Cameroon</span>
                </h4>
                <p class="about-home-heading">
                   High Level Experienced In Web Development, Computer Maintainance,
                   Networking and Mobile Services. Working with Passion While Exploring the world
                </p>
                <div class="enroll">
                    <input type="text" placeholder="example@gmail.com">
                    <div class="home-button">
                        <button class="enroll">Let`s Talk</button>
                    </div>
                </div>
            </section>
            <section class="home-image" data-aos="fade-left">
                <img :src="'/felix1.jpg/'" alt="homeimage" class="home-img">
                <img :src="'/felix2.jpg/'" alt="biggest">
                <img :src="'/felix4.jpg/'" alt="review">
                <img :src="'/felix6.jpg/'" alt="student">

            </section>
        </div>
        <!-------------------------------- home-complted ------------------------>
        <!-- ----------------------- enroll container ---------------------- -->
        <div id="enroll-container" >
            <section class="enroll" data-aos="fade-right">
                <figure>
                    <img class="fel" src="" alt="numbers of choices">
                </figure>
            </section >
            <section class="enroll-info" data-aos="fade-left">
                <p class="heading">See More
                    <br> <span>about me</span>
                </p>
                <p class="container-heading-info">
                    I have been a computer engineer for 4 years. I live and breath computer knowledge.
                     My custom-build web applications are fast loading, accessible and easy to maintain.
                    For the past few years i have been helping inviduals and small firms and micro-enterprises
                    to build fast and scalable front and backend solutions ranging from application based on wordpress
                    to big custom solutions build from scratch using Visual Studio Code. During the past few years i had an 
                    opportuinity to work with great teams on awesome projects where i managed to grow my technology
                    and people skills that i can utilize now. 
                </p>
                <div class="numbers-enroll" data-aos="zoom-in-up">
                    <div class="enroll-item">
                        <p class="enroll-item-No">4+ years</p>
                        <p class="enroll-item-name">of experience</p>
                    </div>
                    <div class="enroll-item" data-aos="zoom-in-up">
                        <p class="enroll-item-No">20+</p>
                        <p class="enroll-item-name">total projects</p>
                        <p></p>
                    </div>
                    <div class="enroll-item" data-aos="zoom-in-up">
                        <p class="enroll-item-No" >10+</p>
                        <p class="enroll-item-name">enterprise</p>
                        <p></p>
                    </div>
                    <div class="enroll-item" data-aos="zoom-in-up">
                        <p class="enroll-item-No">120+</p>
                        <p class="enroll-item-name">Reviews</p>
                        <p></p>
                    </div>
                </div>
            </section>
            <footer>
            <div class="footer-item" data-aos="fade-right">
                <h4 class="footer-item-heading footer-brand">Ay.Felix</h4>
                <p class="footer-brand-about">
                    Copywright ©<br> 2022
                </p>
                <div class="footer-brand-icon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-google-plus-g"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
            <div class="footer-item" data-aos="fade-right"> 
                <h4 class="footer-item-heading footer-brand"></h4>
                <ul class="footer-list">
                    <li>about</li>
                    <li>career</li>
                    <li>services</li>
                    <li>contact</li>
                </ul>
            </div>
            <div class="footer-item" data-aos="zoom-in">
                <h4 class="footer-item-heading footer-brand">class</h4>
                <ul class="footer-list">
                    <li>development</li>
                    <li>designing</li>
                    <li>marketing</li>
                    <li>music</li>
                </ul>
            </div>
            <div class="footer-item" data-aos="fade-left">
                <h4 class="footer-item-heading footer-brand">help</h4>
                <ul class="footer-list">
                    <li>security resources</li>
                    <li>support center</li>
                    <li>feedback</li>
                    <li>services</li>
                </ul>
            </div>
            <div class="footer-item" data-aos="fade-left">
                <h4 class="footer-item-heading footer-brand">contact us</h4>
                <ul class="footer-list">
                    <li>+237 670152171</li>
                    <li>felixayaba70@gmail.com</li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:'home-page',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');
:root {
    --color: #0c183a;
    --headingColor: #3b45ff;
    --subColor: #1a346b;
    --mt: 40px;
    --headingSize: 36px;
    --subSize: 12px;
    --sub-heading: 20px;
    --herohedingSize: 46px;
    --randomPadding: 20px 24px;
    --btn-radius: 4px;
    --colorLight: #f1f1f1;
    --bgLight: #d5e5ff;
    --paddingContainer: 80px 24px;
    --drop-shadow: drop-shadow(0px 4px 8px rgba(66, 66, 66, 0.5));
}
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;

}

.home-img {
    border-radius: 50%;
    height: 30%;
}

.fel {
    border-radius: 50%;
}

li {
    list-style: none;
}

a {
    color: var(--color)
}

body {
    font-family: 'Nunito', sans-serif;
    text-transform: capitalize;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(200, 200, 200);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--headingColor);
    border-radius: 4px;
}

#container {
    width: 100%;
    position: relative;
}

/* header */
.head {
    width: 100%;
    background-color: aliceblue;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color);
    position: sticky;
    top: 0;
    z-index: 20;
}

/* navbar start */
.head .nav {
    width: 1240px;
    box-sizing: border-box;
    padding: var(--randomPadding);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.head .nav .brand a {
    font-size: 24px;
    font-weight: 700;
    color: var(--colorLight);
    cursor: pointer;
}

.head .nav .ul {
    display: flex;
    align-items: center;
}

.head .nav .ul li a {
    padding: 8px 12px;
    color: var(--color);
    cursor: pointer;
    transition: all .3s ease;
    font-weight: 600;
    color: var(--colorLight);
}

.head .nav .ul li a:hover {
    color: #b6c9fd;
}

.head .nav .burger {
    display: none;
}

/* ------------------------ Navbar Complted------------------------- */

/*-------------------------- home started ----------------------------*/
#home {
    max-width: 1240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    flex-wrap: wrap;
    position: relative;
    padding: var(--randomPadding);
    padding: var(--paddingContainer);
}

/*-------------------------- home-info ----------------*/
#home section:nth-child(1) {
    flex-basis: 60%;
    position: relative;
    padding: 20px 40px;

}

section:nth-child(1) .sub-heading {
    color: var(--subColor);
    font-size: var(--subSize);
}

section:nth-child(1) .home-heading {
    font-size: var(--herohedingSize);
    color: var(--color);
}

section:nth-child(1) .home-heading span {
    color: var(--headingColor);
}

section:nth-child(1) .about-home-heading {
    color: var(--color);
    margin-top: 20px;
}

section:nth-child(1) .enroll {
    margin-top: 20px;
}

section:nth-child(1) .enroll input {
    border: none;
    outline: none;
    padding: 8px 12px;
    border-radius: var(--btn-radius);
    font-size: 16px;
    color: var(--color);
    width: 50%;
    background-color: var(--colorLight);
}

section:nth-child(1) .enroll .home-button button {
    border: none;
    outline: none;
    padding: 8px 24px;
    margin-right: 6px;
    border-radius: var(--btn-radius);
    background-color: var(--headingColor);
    color: var(--colorLight);
    text-transform: capitalize;
    cursor: pointer;
    transition: all .3s ease-in;
    border: 2px solid transparent;
    margin-top: 10px;
}

section:nth-child(1) .enroll .home-button button:hover {
    border: 2px solid var(--headingColor);
    color: var(--headingColor);
    background-color: transparent;
}

section:nth-child(1) .enroll .home-button button:nth-child(1) {
    border: 2px solid var(--headingColor);
    background-color: transparent;
    color: var(--headingColor);
}

section:nth-child(1) .enroll .home-button button:nth-child(1):hover {
    background-color: var(--headingColor);
    color: var(--colorLight);
}

/*---------------------- home-image----------------------------- */
#home section:nth-child(2) {
    flex-basis: 40%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
}

#home section:nth-child(2) .home-img {
    width: 100%;
    animation: downhome 1.5s infinite ease-in;
    animation-delay: 1s;
}

#home section:nth-child(2) img:nth-child(2),
#home section:nth-child(2) img:nth-child(3),
#home section:nth-child(2) img:nth-child(4) {
    animation: down 1.4s infinite ease;
    width: 100px;
    position: absolute;
    border-radius: var(--btn-radius);
}

#home section:nth-child(2) img:nth-child(2) {
    left: 8%;
    top: 52%;
    animation-delay: .4s;

}

#home section:nth-child(2) img:nth-child(3) {
    left: 74%;
    top: 14%;
    width: 120px;
    animation-delay: .6s;

}

#home section:nth-child(2) img:nth-child(4) {
    left: 70%;
    top: 64%;
    animation-delay: .8s;

}

@keyframes down {
    0% {
        transform: translateY(-4px);
        filter: drop-shadow(0px 4px 8px rgba(66, 66, 66, 0.2));


    }

    50% {
        transform: translateY(-8px);
        filter: drop-shadow(0px 4px 8px rgba(66, 66, 66, 0.5));

    }

    100% {
        transform: translateY(-4px);
        filter: drop-shadow(0px 4px 8px rgba(66, 66, 66, 0.2));

    }
}

@keyframes downhome {
    0% {
        transform: translateY(-4px);
        filter: drop-shadow(0px 4px 8px rgba(66, 66, 66, 0.2));


    }

    50% {
        transform: translateY(-8px);
        filter: drop-shadow(0px 4px 8px rgba(66, 66, 66, 0.5));

    }

    100% {
        transform: translateY(-4px);
        filter: drop-shadow(0px 4px 8px rgba(66, 66, 66, 0.2));

    }
}

/*---------------------- home complted------------------- */

/* -------------------- Enroll Numbers Started-------------- */

#enroll-container {
    margin: auto;
    max-width: 1240px;
    padding: var(--randomPadding);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    /* background-color: antiquewhite; */
    padding: var(--paddingContainer);
}

#enroll-container section {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-basis: 50%;
    flex-direction: column;
}

#enroll-container section:nth-child(1) figure {
    display: flex;
    justify-content: center;
    align-items: center;
}

#enroll-container section:nth-child(1) img {
    width: 90%;
    animation: downhome 1.5s infinite ease-in-out;
}

/* ------------------------  enroll info ------------------------- */
#enroll-container section:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 40px;
    /* background-color: aliceblue; */
}

#enroll-container section:nth-child(2) .container-heading {
    font-size: var(--headingSize);
    font-weight: 600;
}

#enroll-container section:nth-child(2) .container-heading-info {
    color: var(--color);
    margin-top: 20px
}

#enroll-container section:nth-child(2) .numbers-enroll {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
}

#enroll-container section:nth-child(2) .numbers-enroll .enroll-item {
    width: 44%;
    padding: 4px;
    height: 80px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--btn-radius);
    box-shadow: 0 6px 12px rgba(14, 14, 14, 0.2);
    cursor: pointer;
    margin: 10px 8px;
    transition: all .5s ease-in;
}

#enroll-container section:nth-child(2) .numbers-enroll .enroll-item:hover {
    background-color: var(--headingColor);
    color: #d3d3d3;
}

#enroll-container section:nth-child(2) .numbers-enroll .enroll-item:hover .enroll-item-No {
    color: var(--colorLight);
}

#enroll-container section:nth-child(2) .numbers-enroll .enroll-item .enroll-item-No {
    color: var(--color);
    font-weight: 700;
    margin-bottom: 6px;
    transition: all .5s ease;
}

/* ---------------- Enroll Info Complted --------------------------- */
/*---------------------  Enrol container complted ------------------*/

/* ----------------- our Top Categories--------------------------- */

#top-container {
    margin: auto;
    max-width: 1240px;
    padding: var(--randomPadding);
    padding: var(--paddingContainer);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    text-align: center;
    /* margin-bottom: 20px; */

    /* background-color: #2c2d41; */
}

.top-heading {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

#top-container .top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

}

#top-container .top .top-item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}


#top-container .top .top-item-container .top-items {
    display: flex;
    margin-right: 15px;
    padding: 8px 12px;
    width: 220px;
    border-radius: var(--btn-radius);
    box-shadow: 2px 4px 15px rgba(14, 14, 14, 0.2);
    align-items: center;
    color: var(--color);
    cursor: pointer;
    margin-top: 15px;
    transition: all .5s ease-in;
}

#top-container .top .top-item-container .top-items:hover {
    background-color: var(--headingColor);
}

#top-container .top .top-item-container .top-items:hover i {
    background-color: var(--colorLight);
    color: var(--headingColor);
}

#top-container .top .top-item-container .top-items:hover p {
    color: var(--colorLight);
}

#top-container .top .top-item-container .top-items i {
    margin-right: 12px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    background-color: var(--headingColor);
    color: var(--colorLight);
    transition: all .5s ease-in;
}

#top-container .top .top-item-container .top-items p {
    font-weight: 600;
    color: var(--colorLight);
    color: var(--color);
    transition: all .5s ease-in;

}

.heading {
    font-size: var(--headingSize);
    color: var(--color);
    font-weight: 700;
}

.heading span {
    color: var(--headingColor);
}

.sub-heading {
    color: var(--subColor);
    font-size: var(--sub-heading);
    font-weight: 600;
}

/* footer */

footer {
    margin: auto;
    max-width: 1240px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    padding: 80px 24px;
}

footer .footer-item {
    flex-basis: 19%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 6px;
    padding: 10px 12px;
}

footer .footer-item .footer-brand-icon {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

footer .footer-item .footer-brand-icon i {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-right: 6px;
    background-color: #3b45ff;
    border-radius: 50%;
    color: var(--colorLight);
    font-size: 14px;
    cursor: pointer;
}

footer .footer-item h4 {
    margin-bottom: 10px;
    color: var(--headingColor);

}

footer .footer-item .footer-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

footer .footer-item .footer-list li {
    margin-top: 10px;
    color: var(--color);
    cursor: pointer;
}

@media (max-width:1200px) {
    .login .login-wrapper {
        max-width: 542px;
    }
}

@media (max-width:960px) and (min-width:767px) {
    .login .login-wrapper {
        max-width: 480px;
        min-width: 300px;
    }
}

@media (max-width:768px) and (min-width:480px) {
    .login .login-wrapper {
        max-width: 480px;
        min-width: 300px;
    }
}

@media (max-width:479px) {
    .login .login-wrapper {
        max-width: 300px;
        min-width: 250px;
    }
}

@keyframes show {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }

    70% {
        opacity: 0.8;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
    }
}

@media (max-width:1200px) {
    .nav {
        max-width: 1000px;
        display: flex;
        flex-direction: column;
    }

    .head .nav .burger {
        display: block;
        color: var(--colorLight);
        cursor: pointer;
    }

    .head .nav .brand {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .head .nav .ul {
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        transition: all .3s ease;
    }

    .ul.height {
        max-height: 0px;
        overflow: hidden;
        transition: all 1s ease;
    }

    .ul li {
        text-align: center;
        padding: 10px;
        width: 100%;
        /* background-color: #234184; */
        transition: all .3s ease;
    }

    .ul li:hover {
        background-color: var(--headingColor);
    }

    .head .nav .ul li a:hover {
        color: var(--colorLight);
    }

    :root {
        --headingSize: 32px;
        --subSize: 12px;
        --sub-heading: 20px;
        --herohedingSize: 42px;
        --randomPadding: 16px 24px;
        --paddingContainer: 60px 24px;
    }

    .nav,
    #home,
    #enroll-container,
    #top-container,

    footer {
        max-width: 1000px;

    }

    #enroll-container section:nth-child(2) {
        padding: 20px 30px;
    }

    #enroll-container section:nth-child(2) .numbers-enroll {
        width: 80%;
    }


    @media (max-width:960px) and (min-width:767px) {
        .nav {
            max-width: 940px;
            min-width: 750;
            display: flex;
            flex-direction: column;
        }

        .head .nav .burger {
            display: block;
            color: var(--colorLight);
            cursor: pointer;
        }

        .head .nav .brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .head .nav .ul {
            margin-top: 10px;
            width: 100%;
            display: flex;
            flex-direction: column;
            transition: all .3s ease;
        }

        .ul.height {
            max-height: 0px;
            overflow: hidden;
            transition: all 1s ease;
        }

        .ul li {
            text-align: center;
            padding: 10px;
            width: 100%;
            /* background-color: #234184; */
            transition: all .3s ease;
        }

        .ul li:hover {
            background-color: var(--headingColor);
        }

        .head .nav .ul li a:hover {
            color: var(--colorLight);
        }

        :root {
            --headingSize: 28px;
            --subSize: 12px;
            --sub-heading: 18px;
            --herohedingSize: 36px;
            --randomPadding: 14px 18px;
            --paddingContainer: 40px 18px;
        }

        .nav,
        #home,
        #enroll-container,
        #top-container,
        footer {
            max-width: 940px;
            min-width: 750;
        }

        /* home */
        #home {
            flex-direction: column;
        }

        /* home text */
        #home section:nth-child(1) {
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        section:nth-child(1) .home-heading {
            text-align: center;
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        section:nth-child(1) .enroll {
            margin-top: 20px;
            width: 50%;
        }

        section:nth-child(1) .enroll input {
            width: 100%;
        }

        section:nth-child(1) .enroll .home-button button {
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            padding: 0px;
        }

        /* home image */
        #home section:nth-child(2) .home-img {
            max-width: 60%;
        }

        /* small image */

        #home section:nth-child(2) img:nth-child(2),
        #home section:nth-child(2) img:nth-child(3),
        #home section:nth-child(2) img:nth-child(4) {
            width: 160px;
        }

        #home section:nth-child(2) img:nth-child(2) {
            left: 16%;
        }

        #home section:nth-child(2) img:nth-child(4) {
            width: 120px;
        }

        /* enroll container */
        #enroll-container {
            flex-direction: column;
        }

        /* enroll section image */
        #enroll-container section:nth-child(1) {
            order: 2;
        }

        /* enroll section text */
        #enroll-container section:nth-child(2) {
            align-items: center;
            text-align: center;
            padding: 60px 20px;
        }

        /* our top catetgoreis buttons */

        #top-container .top .top-item-container {
            justify-content: flex-start;
        }

        /* itme */
        #top-container .top .top-item-container .top-items {
            max-width: 200px;
            min-width: 100px;
            font-size: 14px;

        }

        .top-heading .sub-heading {
            margin-top: 20px;
        }

        footer {
            align-items: center;
            flex-wrap: wrap;
        }

        footer .footer-item {
            flex-basis: 40%;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-top: 20px;
        }
    }

    /*-------------------------- media ----------------------- */

    @media (max-width:768px) and (min-width:480px) {
        .nav {
            max-width: 750px;
            min-width: 440;
            display: flex;
            flex-direction: column;
        }

        .head .nav .burger {
            display: block;
            color: var(--colorLight);
            cursor: pointer;
        }

        .head .nav .brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .head .nav .ul {
            margin-top: 10px;
            width: 100%;
            display: flex;
            flex-direction: column;
            transition: all .3s ease;
        }

        .ul.height {
            max-height: 0px;
            overflow: hidden;
            transition: all 1s ease;
        }

        .ul li {
            text-align: center;
            padding: 10px;
            width: 100%;
            /* background-color: #234184; */
            transition: all .3s ease;
        }

        .ul li:hover {
            background-color: var(--headingColor);
        }

        .head .nav .ul li a:hover {
            color: var(--colorLight);
        }

        :root {
            --headingSize: 28px;
            --subSize: 12px;
            --sub-heading: 18px;
            --herohedingSize: 36px;
            --randomPadding: 14px 18px;
            --paddingContainer: 20px 18px;
        }

        .nav,
        #home,
        #enroll-container,
        #top-container,
        footer {
            max-width: 750px;
            min-width: 440px;
        }

        /* home */
        #home {
            flex-direction: column;
        }

        /* home text */
        #home section:nth-child(1) {
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        section:nth-child(1) .home-heading {
            text-align: center;
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        section:nth-child(1) .enroll {
            margin-top: 20px;
            width: 50%;
        }

        section:nth-child(1) .enroll input {
            width: 100%;
        }

        section:nth-child(1) .enroll .home-button button {
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            padding: 0px;
        }

        /* home image */
        #home section:nth-child(2) .home-img {
            max-width: 60%;
        }

        /* small image */

        #home section:nth-child(2) img:nth-child(2),
        #home section:nth-child(2) img:nth-child(3),
        #home section:nth-child(2) img:nth-child(4) {
            width: 100px;
        }

        #home section:nth-child(2) img:nth-child(2) {
            left: 16%;
        }

        #home section:nth-child(2) img:nth-child(4) {
            width: 90px;
        }

        /* enroll container */
        #enroll-container {
            flex-direction: column;
        }

        /* enroll section image */
        #enroll-container section:nth-child(1) {
            order: 2;
            flex-basis: 50%;

        }

        #enroll-container .enroll figure img {
            max-width: 60%;
        }

        /* enroll section text */
        #enroll-container section:nth-child(2) {
            align-items: center;
            text-align: center;
            padding: 60px 20px;
        }

        /* our top catetgoreis buttons */

        #top-container .top .top-item-container {
            justify-content: center;
        }

        /* itme */
        #top-container .top .top-item-container .top-items {
            max-width: 200px;
            min-width: 100px;
            font-size: 14px;

        }

        .top-heading .sub-heading {
            margin-top: 20px;
        }

        footer {
            align-items: center;
            /* text-align: center; */
            flex-direction: column;
            flex-wrap: wrap;
        }

        footer .footer-item {
            flex-basis: 50%;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-top: 20px;
        }
    }


    /* ------------------media 3-------------- */
    @media (max-width:479px) {
        .nav {
            max-width: 470px;
            display: flex;
            flex-direction: column;
        }

        .head .nav .burger {
            display: block;
            color: var(--colorLight);
            cursor: pointer;
        }

        .head .nav .brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .head .nav .ul {
            margin-top: 10px;
            width: 100%;
            display: flex;
            flex-direction: column;
            transition: all .3s ease;
        }

        .ul.height {
            max-height: 0px;
            overflow: hidden;
            transition: all 1s ease;
        }

        .ul li {
            text-align: center;
            padding: 10px;
            width: 100%;
            /* background-color: #234184; */
            transition: all .3s ease;
        }

        .ul li:hover {
            background-color: var(--headingColor);
        }

        .head .nav .ul li a:hover {
            color: var(--colorLight);
        }

        :root {
            --headingSize: 22px;
            --subSize: 12px;
            --sub-heading: 16px;
            --herohedingSize: 28px;
            --randomPadding: 12px 14px;
            --paddingContainer: 20px 18px;
        }

        .nav,
        #home,
        #enroll-container,
        footer {
            max-width: 470px;
        }

        /* home */
        #home {
            flex-direction: column;
        }

        /* home text */
        #home section:nth-child(1) {
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        section:nth-child(1) .home-heading {
            text-align: center;
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        section:nth-child(1) .enroll {
            margin-top: 20px;
            width: 50%;
        }

        section:nth-child(1) .enroll input {
            width: 100%;
        }

        section:nth-child(1) .enroll .home-button button {
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            padding: 0px;
        }

        /* home image */
        #home section:nth-child(2) {
            justify-content: center;
            align-items: center;
        }

        #home section:nth-child(2) .home-img {
            max-width: 100%;
        }

        /* small image */

        #home section:nth-child(2) img:nth-child(2),
        #home section:nth-child(2) img:nth-child(3),
        #home section:nth-child(2) img:nth-child(4) {
            width: 100px;
        }

        #home section:nth-child(2) img:nth-child(2) {
            left: 16%;
        }

        #home section:nth-child(2) img:nth-child(4) {
            width: 80px;
        }

        /* enroll container */
        #enroll-container {
            flex-direction: column;
        }

        /* enroll section image */
        #enroll-container section:nth-child(1) {
            order: 2;
            flex-basis: 50%;

        }

        #enroll-container .enroll figure img {
            max-width: 100%;
        }

        /* enroll section text */
        #enroll-container section:nth-child(2) {
            align-items: center;
            text-align: center;
            padding: 60px 20px;
        }

        #enroll-container section:nth-child(2) .numbers-enroll {
            width: 100%;
        }

        /* itme */
        #top-container .top .top-item-container .top-items {
            max-width: 160px;
            font-size: 14px;
        }

        #top-container .top .top-item-container .top-items p {
            font-size: 12px;
        }

        #top-container .top .top-item-container .top-items i {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
        }

        .top-heading .sub-heading {
            margin-top: 20px;
        }

        footer {
            align-items: center;
            /* text-align: center; */
            flex-direction: column;
            flex-wrap: wrap;
        }

        footer .footer-item {
            flex-basis: 50%;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-top: 20px;
        }
    }
}
</style>