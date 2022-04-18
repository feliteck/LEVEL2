<template>
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
</template>

<script>
export default {
    name:'about-page',

}
</script>

<style>
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

#enroll-container section:nth-child(2){
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 40px;
    /* background-color: aliceblue; */
}
#enroll-container section:nth-child(2) .container-heading{
    font-size: var(--headingSize);
    font-weight: 600;
}

#enroll-container section:nth-child(2) .container-heading-info{
    color: var(--color);
    margin-top: 20px
}
#enroll-container section:nth-child(2) .numbers-enroll{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
}

#enroll-container section:nth-child(2) .numbers-enroll .enroll-item{
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
    transition: all .5s  ease-in;
} 
#enroll-container section:nth-child(2) .numbers-enroll .enroll-item:hover{
    background-color: var(--headingColor);
    color: #d3d3d3;
}
#enroll-container section:nth-child(2) .numbers-enroll .enroll-item:hover .enroll-item-No{
    color: var(--colorLight);
}
#enroll-container section:nth-child(2) .numbers-enroll .enroll-item .enroll-item-No{
    color: var(--color);
    font-weight: 700;
    margin-bottom: 6px;
    transition: all .5s ease;
}

/* ---------------- Enroll Info Complted --------------------------- */
/*---------------------  Enrol container complted ------------------*/
</style>