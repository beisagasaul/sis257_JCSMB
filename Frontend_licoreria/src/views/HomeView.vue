<script setup lang="ts"></script>

<template>
  <section class="hero-section" id="section_1">
    <div class="section-overlay"></div>

    <div class="container d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="col-12 mt-auto mb-5 text-center">
          <small>proyecto de sis-257</small>

          <h1 class="text-white mb-5">Licoreria neos</h1>

          <a class="btn custom-btn smoothscroll" href="#section_2">Let's begin</a>
        </div>

        <div class="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
          <div class="date-wrap">
            <h5 class="text-white">
              <i class="custom-icon bi-clock me-2"></i>
              08 - 18<sup>th</sup>, Diciembre 2023
            </h5>
          </div>

          <div class="location-wrap mx-auto py-3 py-lg-0">
            <h5 class="text-white">
              <i class="custom-icon bi-geo-alt me-2"></i>
              Calle Avaroa # 16
            </h5>
          </div>

          <div class="social-share">
            <ul class="social-icon d-flex align-items-center justify-content-center">
              <span class="text-white me-3">redes:</span>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-facebook"></span>
                </a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-twitter"></span>
                </a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="video-wrap">
      <video autoplay="true" loop="true" muted="true" class="custom-video" poster="">
        <source src="@/assets/video/coronas.mp4" type="video/mp4" />

        neos
      </video>
    </div>
  </section>

  <section class="about-section section-padding" id="section_2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
          <div class="services-info">
            <h2 class="text-white mb-4">neos 2023</h2>

            <p class="text-white">
              "Neos, donde los sabores se encuentran con la elegancia. Descubre un mundo de exquisitas experiencias en
              cada sorbo."
            </p>

            <h6 class="text-white mt-4">Una experiencia única en la vida.</h6>

            <p class="text-white">
              "El vino alegra el corazón del hombre y el licor reconforta el alma, en la licorería se encuentran tesoros
              que deleitan los sentidos y fortalecen los lazos de amistad."
            </p>

            <h6 class="text-white mt-4">Una noche de compras en la tienda de licores.</h6>

            <p class="text-white">"En la tienda de licores, cada botella cuenta una historia, cada sabor despierta un
              recuerdo y cada encuentro es una oportunidad para celebrar la vida con sabiduría y moderación."</p>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="about-text-wrap">
            <img src="@/assets/images/fondo.jpg" class="about-image img-fluid" />

            <div class="about-text-info d-flex">
              <div class="d-flex">
                <i class="about-text-icon bi-person"></i>
              </div>

              <div class="ms-4">
                <h3>Jhonny Walker.</h3>

                <p class="mb-0">Tu increíble experiencia .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="artists-section section-padding" id="section_3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2 class="mb-4">Descubre nuestros productos exclusivos en nuestra tienda de licores</h2>
        </div>

        <div class="col-lg-5 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img src="@/assets/images/paceña.jpeg" class="artists-image img-fluid" />
            </div>

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Paceña
              </p>

              <p>
                <strong>hecho:</strong>
                La Paz - Bolivia
              </p>

              <p>
                <strong>tapa:</strong>
                roja, R&amp;B
              </p>

              <hr />

              <p class="mb-0">
                <strong>sitio web:</strong>
                <a href="#">Paceña Official</a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img src="@/assets/images/jhonny.jpeg" class="artists-image img-fluid" />
            </div>

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Jhonny Walker
              </p>

              <p>
                <strong>exclusivo:</strong>
                Feb 20, 1988
              </p>

              <p>
                <strong>Importado:</strong>
                Cuba
              </p>

              <hr />

              <p class="mb-0">
                <strong>sitio web:</strong>
                <a href="#">Jhonny Walker Official</a>
              </p>
            </div>
          </div>

          <div class="artists-thumb">
            <img src="@/assets/images/four.jpeg" class="artists-image img-fluid" />

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Four Loko
              </p>

              <p>
                <strong>desde:</strong>
                October 8, 2010
              </p>

              <p>
                <strong>Distribuidora:</strong>
                Los Andes
              </p>

              <hr />

              <p class="mb-0">
                <strong>sitio web:</strong>
                <a href="#">Los Andes Official</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="schedule-section section-padding" id="section_4">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="text-white mb-4">La licorería es un mundo de sabiduría y artesanía, donde cada botella cuenta una
            historia de tradición, innovación y dedicación. Al igual que un buen vino, la sabiduría en la licorería se
            cultiva con paciencia y se comparte con generosidad, brindando momentos de deleite y convivencia. .</h2>

        </div>
      </div>
    </div>
  </section>

  <section class="pricing-section section-padding section-bg" id="section_5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 mx-auto">
          <h2 class="text-center mb-4">Vodka ------ Ron</h2>
        </div>

        <div class="col-lg-6 col-12">
          <div class="pricing-thumb">
            <div class="d-flex">
              <div>
                <h3><small>Ron Flor de Caña</small> 75 bs.</h3>

                <p>promocion por Noviembre:</p>
              </div>

              <p class="pricing-tag ms-auto">Descuento <span>30%</span></p>
            </div>

            <ul class="pricing-list mt-3">
              <li class="pricing-list-item">en las diferentes presentaciones</li>

              <li class="pricing-list-item">entregas sin recargo</li>

              <li class="pricing-list-item">suaves</li>

              <li class="pricing-list-item">no te quedes sin  tu Ron</li>
            </ul>

            <a class="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
              <span>comprar</span>
              <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="16" cy="16" r="15.5"></circle>
                  <line x1="10" y1="18" x2="16" y2="12"></line>
                  <line x1="16" y1="12" x2="22" y2="18"></line>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div class="col-lg-6 col-12 mt-4 mt-lg-0">
          <div class="pricing-thumb">
            <div class="d-flex">
              <div>
                <h3><small>Bodka bacardy</small> 35 bs.</h3>

                <p>promoción</p>
              </div>
              <p class="pricing-tag ms-auto">Descuento <span>30%</span></p>
            </div>

            <ul class="pricing-list mt-3">
              <li class="pricing-list-item">este mes no te lo pierdas</li>

              <li class="pricing-list-item">experiencia única</li>

              <li class="pricing-list-item">solo este mes</li>

              <li class="pricing-list-item">diferentes sabores</li>

              <li class="pricing-list-item">sin recargo</li>
            </ul>

            <a class="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
              <span>comprar</span>
              <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="16" cy="16" r="15.5"></circle>
                  <line x1="10" y1="18" x2="16" y2="12"></line>
                  <line x1="16" y1="12" x2="22" y2="18"></line>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-section section-padding" id="section_6">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 mx-auto">
          <h2 class="text-center mb-4">¡Claro! Estoy aquí para ayudarte. ¿Sobre qué te gustaría hablar?</h2>

          <nav class="d-flex justify-content-center">
            <div class="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-ContactForm-tab" data-bs-toggle="tab"
                data-bs-target="#nav-ContactForm" type="button" role="tab" aria-controls="nav-ContactForm"
                aria-selected="false">
                <h5>Contactar</h5>
              </button>

              <button class="nav-link" id="nav-ContactMap-tab" data-bs-toggle="tab" data-bs-target="#nav-ContactMap"
                type="button" role="tab" aria-controls="nav-ContactMap" aria-selected="false">
                <h5>Google Maps</h5>
              </button>
            </div>
          </nav>

          <div class="tab-content shadow-lg mt-5" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-ContactForm" role="tabpanel"
              aria-labelledby="nav-ContactForm-tab">
              <form class="custom-form contact-form mb-5 mb-lg-0" action="#" method="post" role="form">
                <div class="contact-form-body">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <input type="text" name="contact-name" id="contact-name" class="form-control"
                        placeholder="nombre" required />
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                      <input type="email" name="contact-email" id="contact-email" pattern="[^ @]*@[^ @]*"
                        class="form-control" placeholder="Email " required />
                    </div>
                  </div>

                  <input type="text" name="contact-company" id="contact-company" class="form-control"
                    placeholder="empresa" required />

                  <textarea name="contact-message" rows="3" class="form-control" id="contact-message"
                    placeholder="Mensage"></textarea>

                  <div class="col-lg-4 col-md-10 col-8 mx-auto">
                    <button type="submit" class="form-control">enviar mensaje</button>
                  </div>
                </div>
              </form>
            </div>

            <div class="tab-pane fade" id="nav-ContactMap" role="tabpanel" aria-labelledby="nav-ContactMap-tab">
              <iframe class="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy"
                width="100%" height="450" style="border: 0" allowfullscreen="true" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
              <!-- You can easily copy the embed code from Google Maps -> Share -> Embed a map // -->
            </div>
          </div>
        </div>
      </div>
  </div>
</section></template>
