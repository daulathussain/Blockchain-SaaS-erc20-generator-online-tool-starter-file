import React from 'react'

const HeroSection = () => {
  return (
    <div class="intro-area intro-area-2">
      <div class="bg-wrapper">
        <img src="img/background/bg2.jpg" alt="" />
      </div>
      <div class="intro-content">
        <div class="slider-content">
          <div class="container">
            <div class="row d-flex flex-wrap align-items-center">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="slide-all-text">
                  <div class="layer-2 wow fadeInUp" data-wow-delay="0.3s">
                    <h1 class="title-2">
                      The blockchain{' '}
                      <span class="color-text-bold">technology </span>for a
                      brighter tomorrow{' '}
                    </h1>
                  </div>

                  <div class="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                    <a href="/create" class="ready-btn coin-btn">
                      Get Started
                    </a>
                    <a href="/create" class="ready-btn color-btn last-btn">
                      White Paper
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="slide-images wow fadeInUp" data-wpw-delay="0.3s">
                  <img src="img/slider/s1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
