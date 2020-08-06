import React from 'react'

export default function Box() {
  return (
    <div class="container container1">
      <div class="row">
      <div class="box col-lg-3" style={{
        backgroundImage: "url(" + "https://paranet.tn/img/cms/image_18.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}></div>
      <div class="box col-md-3" style={{
        backgroundImage: "url(" + "https://paranet.tn/img/cms/image_20.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}></div>
      <div class="box col-md-3" style={{
        backgroundImage: "url(" + "https://paranet.tn/img/cms/image_21.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}></div>
    </div>
    </div>
  )
}

