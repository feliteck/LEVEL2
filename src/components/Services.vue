<template>
  <div id="top-container">
            <div class="top-heading" data-aos="fade-down">
                <h4 class="heading">my top <span>categories</span></h4>
                <p class="sub-heading">sevices</p>
            </div>
            <div class="top">
                <div class="top-item-container">
                    <div class="top-items" data-aos="zoom-in">
                        <i class="fa-solid fa-laptop-code"></i>
                        <p class="top-item-name">web development</p>
                    </div>
                    <div class="top-items" data-aos="zoom-in">
                        <i class="fa-solid fa-video"></i>
                        <p class="top-item-name">computer maintainance</p>
                    </div>
                    <div class="top-items" data-aos="zoom-in">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                        <p class="top-item-name">freelancing</p>
                    </div>
                    <div class="top-items" data-aos="zoom-in">
                        <i class="fa-solid fa-music"></i>
                        <p class="top-item-name">mobile services</p>
                    </div>
                </div>
                <div class="top-item-container" data-aos="zoom-in">
                    <div class="top-items">
                        <i class="fa-solid fa-camera"></i>
                        <p class="top-item-name">networking</p>
                    </div>
                    <div class="top-items" data-aos="zoom-in">
                        <i class="fa-solid fa-pen-ruler"></i>
                        <p class="top-item-name">SEO ranking</p>
                    </div>
                    <div class="top-items" data-aos="zoom-in">
                        <i class="fa-solid fa-earth-asia"></i>
                        <p class="top-item-name">language</p>
                    </div>
                    <div class="top-items" data-aos="zoom-in">
                        <i class="fa-solid fa-bullhorn"></i>
                        <p class="top-item-name">digital marketing</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:'services-page',

}
</script>

<style>
/* ----------------- our Top Categories--------------------------- */
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

#top-container{
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
.top-heading{
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
#top-container .top{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

}

#top-container .top .top-item-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}


#top-container .top .top-item-container .top-items{
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
#top-container .top .top-item-container .top-items:hover{
    background-color:var(--headingColor);
}
#top-container .top .top-item-container .top-items:hover i{
    background-color: var(--colorLight);
    color: var(--headingColor);
}
#top-container .top .top-item-container .top-items:hover p{
    color: var(--colorLight);
}
#top-container .top .top-item-container .top-items i{
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
#top-container .top .top-item-container .top-items p{
    font-weight: 600;
    color: var(--colorLight);
    color: var(--color);
    transition: all .5s ease-in;

}

/* ----------------- our Top Categories completed--------------------------- */
</style>