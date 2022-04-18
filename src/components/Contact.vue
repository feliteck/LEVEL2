<template>
  <div id="container">
        <header class="head">
            <nav class="nav" data-aos="fade-right">
                <div class="brand">
                    <a href="/home">ay.felix</a>
                    <div class="burger">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
                <ul class="ul height" data-aos="fade-left">
                    <li><a href="/home">home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a class="/services">services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <div class="contact">
            <div class="contact-section" data-aos="fade-right">
                <h5 class="heading">for more inforamtion about <br> courses get in touch with <br> <span>Ay.Felix</span>
                    contact</h5>
                    <!--  -->
                    <div class="contact-box">
                        <div class="contact-item">
                            <i class="fa-solid fa-location-dot icon"></i>
                            <div class="about-icon">
                                <p class="icon-h">address</p>
                                <p>Ancient Route Bonaberir <br>
                                    Behind Lycee Polyvalent</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fa-solid fa-phone icon"></i>
                            <div class="about-icon">
                                <p class="icon-h">contact</p>
                                <p>+237 670152171 <br>
                                    felixayaba70@gmail.com</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fa-solid fa-clock icon"></i>
                            <div class="about-icon">
                                <p class="icon-h">hour of work</p>
                                <p>monday to saturday <br>
                                    9:00 AM To 5:30 PM</p>
                            </div>
                        </div>
                    </div>
                <div class="social">
                    <div class="social-icon">
                        <i class="fa-brands fa-facebook-f"></i>
                        <p class="icon-name">facebook</p>
                    </div>
                    <div class="social-icon">
                        <i class="fa-brands fa-instagram"></i>
                        <p class="icon-name">instagram</p>
                    </div>
                    <div class="social-icon eamil">
                        <i class="fa-solid fa-envelope"></i>
                        <p class="icon-name">email</p>
                    </div>
                    <div class="social-icon earth">
                        <i class="fa-solid fa-earth-americas"></i>
                        <p class="icon-name">felix.com</p>
                    </div>
                </div>
            </div>
            <figure class="building" data-aos="fade-left">
                <img src="assets/other images/buliding.jpg" alt="buliding">
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name:'contact-page',

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

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

li{
    list-style: none;
}
a{
    text-decoration: none;
}
body{
    font-family: 'Nunito', sans-serif;
    text-transform: capitalize;
}
::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
    box-shadow: inset 0 0 5px rgb(200, 200, 200); 
    border-radius: 4px;
}
::-webkit-scrollbar-thumb{
    background-color: var(--headingColor);
    border-radius: 4px;
}
#container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.head{
    width: 100%;
    background-color: aliceblue;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color);
    position: sticky;
    top: 0;
    z-index: 1000;
}
/* navbar start */
.head .nav{
    width: 1240px;
    box-sizing: border-box;
    padding: var(--randomPadding);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.head .nav .brand a{
    font-size: 24px;
    font-weight: 700;
    color:var(--colorLight);
    cursor: pointer;
}
.head .nav .ul{
    display: flex;
    align-items: center;
}
.head .nav .ul li a{
    padding: 8px 12px;
    color: var(--color);
    cursor: pointer;
    transition: all .3s ease;
    font-weight: 600;
    color: var(--colorLight);
}
.head .nav .ul li a:hover{
    color: var(--headingColor);
}
.head .nav .burger{
    display: none;
}
/* ------------------------ Navbar Complted------------------------- */

#container .contact{
    width: 1240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    padding: var(--randomPadding);
    margin-top: 20px;
} 
.contact .contact-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
}
.contact .contact-section .heading{
    color: var(--color);
    font-size: 32px;
    margin-bottom: 16px;
}
.contact .contact-section .heading span{
    color: var(--headingColor);
}

.contact .contact-section .contact-item{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.contact .contact-item i{
    margin-right: 6px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    color: var(--color);
}
.contact-item .about-icon{
    margin-left: 6px;
    color: var(--subColor);
}
.contact figure{
    width: 50%;
}
.contact figure img{
    max-width: 100%;
    object-fit: contain;
    border-radius: 8px;
}
.social{
    display: flex;
    align-items: center;
}
.social .social-icon{
    width: 30px;
    align-items: center;
    overflow: hidden;
    margin: 10px 6px;
    height: 30px;
    transition: all .3s ease;
    background-color: #f1f1f1;
    border-radius: var(--btn-radius);
    color: var(--subColor);
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(66, 66, 66,0.2);
}
.social .social-icon i{
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #3b45ff;
    float: left;
    color: var(--colorLight);
    border-radius: var(--btn-radius);

}
.social .social-icon:hover{
    width: 120px;
}
.social .social-icon p{
    font-size: 14px;
    font-weight: 600;
    padding-top: 7px;
    display: inline-block;
    padding-left: 6px;
}



@keyframes show{
    0%{
        opacity: 0;
        transform: translateY(-10px);
    }
    70%{
        opacity: 0.8;
        transform: translateY(-20px);
    }
    100%{
        opacity: 1;
    }
}



/* media  */

@media (max-width:1200px){
    .contact figure{
        width: 90%;
        margin-top: 20px;
    }
    .nav{
        max-width: 1000px;
        display: flex;
        flex-direction: column;
    }
   .head .nav .burger{
        display: block;
        color: var(--colorLight);
        cursor: pointer;
    }
    .head .nav .brand{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .head .nav .ul{
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        transition: all .3s ease;
    }
    .ul.height{
        max-height: 0px;
        overflow: hidden;
        transition: all 1s ease;
    }
    .ul li{
        text-align: center;
        padding: 10px;
        width: 100%;
        /* background-color: #234184; */
        transition: all .3s ease;
    }
    .ul li:hover{
        background-color: var(--headingColor);
    }
    .ul li a:hover{
        color: var(--colorLight);
    }

    #container .contact{
        max-width: 1000px;
    }
    .contact .contact-section .heading{
        font-size: 30px;
    }
}
@media (max-width:960px) and (min-width:767px){
    #container .contact{
        max-width: 960px;
        min-width: 767px;
        flex-direction: column;
        /* background-color: #3b45ff; */
    }
    .contact .contact-section .heading{
        font-size: 28px;
    }
    .contact figure{
        width: 90%;
        margin-top: 20px;
    }
    .contact .contact-section .heading{
        text-align: center;
    }
    .contact .contact-section .contact-item{
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        flex-basis:60%;
        margin: 8px;
    }
    .contact-box{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
    }
    .social{
        justify-content: center;
    }
    .nav{
        max-width: 960px;
        min-width: 767px;
        display: flex;
        flex-direction: column;
    }
   .head .nav .burger{
        display: block;
        color: var(--colorLight);
        cursor: pointer;
    }
    .head .nav .brand{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .head .nav .ul{
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        transition: all .3s ease;
    }
    .ul.height{
        max-height: 0px;
        overflow: hidden;
        transition: all 1s ease;
    }
    .ul li{
        text-align: center;
        padding: 10px;
        width: 100%;
        /* background-color: #234184; */
        transition: all .3s ease;
    }
    .ul li:hover{
        background-color: var(--headingColor);
    }
    .ul li a:hover{
        color: var(--colorLight);
    }
}

@media (max-width:768px) and (min-width:480px){
    .contact .contact-section .heading{
        font-size: 26px;
    }
#container .contact{
    max-width: 768px;
    min-width: 480px;
    flex-direction: column;
    /* background-color: #3b45ff; */
}
.contact figure{
    width: 90%;
    margin-top: 20px;
}
.contact .contact-section .heading{
    text-align: center;
}
.contact .contact-section .contact-item{
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    flex-basis:60%;
    margin: 8px;
}
.contact-box{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
}
.social{
    justify-content: center;
}
.nav{
    max-width: 768px;
    min-width: 480px;
    display: flex;
    flex-direction: column;
}
.head .nav .burger{
    display: block;
    color: var(--colorLight);
    cursor: pointer;
}
.head .nav .brand{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.head .nav .ul{
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: all .3s ease;
}
.ul.height{
    max-height: 0px;
    overflow: hidden;
    transition: all 1s ease;
}
.ul li{
    text-align: center;
    padding: 10px;
    width: 100%;
    /* background-color: #234184; */
    transition: all .3s ease;
}
.ul li:hover{
    background-color: var(--headingColor);
}
.ul li a:hover{
    color: var(--colorLight);
}
}

@media (max-width:479px){
    .contact .contact-section .heading{
        font-size: 24px;
    }
    #container .contact{
        max-width: 479x;
        flex-direction: column;
        /* background-color: #3b45ff; */
    }
    .contact figure{
        width: 90%;
        margin-top: 20px;
    }
    .contact .contact-section .heading{
        text-align: center;
    }
    .contact .contact-section .contact-item{
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        flex-basis:60%;
        margin: 8px;
    }
    .contact-box{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
    }
    .social{
        justify-content: center;
    }
    .nav{
        max-width: 479px;
        display: flex;
        flex-direction: column;
    }
    .head .nav .burger{
        display: block;
        color: var(--colorLight);
        cursor: pointer;
    }
    .head .nav .brand{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .head .nav .ul{
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        transition: all .3s ease;
    }
    .ul.height{
        max-height: 0px;
        overflow: hidden;
        transition: all 1s ease;
    }
    .ul li{
        text-align: center;
        padding: 10px;
        width: 100%;
        /* background-color: #234184; */
        transition: all .3s ease;
    }
    .ul li:hover{
        background-color: var(--headingColor);
    }
    .ul li a:hover{
        color: var(--colorLight);
    }
}


/* login form */
/* footer */
footer{
    margin: auto;
    max-width: 1240px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    padding: 80px 24px;
    /* display: none; */
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

@media (max-width:1200px){
    .login .login-wrapper{
        max-width: 542px;
    }
    footer {
        max-width: 1000px;
    }
}

@media (max-width:960px) and (min-width:767px){
    .login .login-wrapper{
        max-width: 480px;
        min-width: 300px;
    }
    footer {
        max-width: 960px;
        min-width: 767px;
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
@media (max-width:768px) and (min-width:480px){
    .login .login-wrapper{
        max-width: 480px;
        min-width: 300px;
    }
    footer {
        max-width: 768px;
        min-width: 480;
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
@media (max-width:479px){
    .login .login-wrapper{
        max-width: 300px;
        min-width: 250px;
    }
    footer {
        max-width: 479px;
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


/* footer */
footer{
    margin: auto;
    max-width: 1240px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    padding: 80px 24px;
    /* display: none; */
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
</style>