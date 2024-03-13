import React from 'react'

const Brand = () => {
  return (
    <div class="brand-area bg-color-3">
      <div class="container">
        <div class="row">
          <div class="new_margin col-xl-12 col-md-12">
            <div class="new_flex brand-content">
              {[1, 2, 3, 4, 5, 6, 7].map((image, i) => (
                <div class="single-brand-item">
                  <a>
                    <img
                      className="new_image_with"
                      src={`img/brand/${i + 1}.png`}
                      alt=""
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand
