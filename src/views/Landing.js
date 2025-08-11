import React, { useState } from "react";
import '../styles/landing/landing.css';
import '../styles/landing/nicepage.css'

export default function Landing() {

  const [planType, setPlanType] = useState('mensual');

  const planes = {
    mensual: [
      {
        nombre: 'Básico',
        precio: '$200/mes',
        beneficios: [
          'Registrar clientes',
          'Administrar suscripciones'
        ]
      },
      {
        nombre: 'Estándar',
        precio: '$300/mes',
        beneficios: [
          'Registrar clientes',
          'Administrar suscripciones',
          'Generar rutina personalizada'
        ]
      },
      {
        nombre: 'Premium',
        precio: '$400/mes',
        beneficios: [
          'Registrar clientes',
          'Administrar suscripciones',
          'Generar rutina personalizada',
          'Generar dieta personalizada'
        ]
      }
    ],
    anual: [
      {
        nombre: 'Básico',
        precio: '$1999/año',
        beneficios: [
          'Registrar clientes',
          'Administrar suscripciones'
        ]
      },
      {
        nombre: 'Estándar',
        precio: '$2999/año',
        beneficios: [
          'Registrar clientes',
          'Administrar suscripciones',
          'Generar rutina personalizada'
        ]
      },
      {
        nombre: 'Premium',
        precio: '$3999/año',
        beneficios: [
          'Registrar clientes',
          'Administrar suscripciones',
          'Generar rutina personalizada',
          'Generar dieta personalizada'
        ]
      }
    ]
  };

  return (

    <div className="u-body u-xl-mode">
      <header className="u-clearfix u-header u-header" id="header">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <a href="#" className="u-image u-logo u-image-1">
            <img src="/images/landing/default-logo.png" className="u-logo-image u-logo-image-1" alt="logo"></img>
          </a>
          <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1" role="navigation" aria-label="Menu navigation">
            <div
              className="menu-collapse"
              style={{ fontSize: "1rem", letterSpacing: "0px" }}
            >
              <a
                className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-hamburger-link u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                href="#"
                tabIndex="-1"
                aria-label="Open menu"
                aria-controls="412f"
              >
                <svg className="u-svg-link" viewBox="0 0 24 24">
                  <use xlinkHref="#menu-hamburger"></use>
                </svg>
                <svg
                  className="u-svg-content"
                  version="1.1"
                  id="menu-hamburger"
                  viewBox="0 0 16 16"
                  x="0px"
                  y="0px"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <rect y="1" width="16" height="2"></rect>
                    <rect y="7" width="16" height="2"></rect>
                    <rect y="13" width="16" height="2"></rect>
                  </g>
                </svg>
              </a>
            </div>

            <div className="u-nav-container">
              <ul className="u-nav u-unstyled u-nav-1" role="menubar"><li className="u-nav-item" role="none"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="/landing" style={{ padding: '10px 20px' }} role="menuitem">Home</a>
              </li><li className="u-nav-item" role="none"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="/Login" style={{ padding: '10px 20px' }} role="menuitem">Iniciar Sesión</a>
                </li><li className="u-nav-item" role="none"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="/Registro" style={{ padding: '10px 20px' }} role="menuitem">Registrarme</a>
                </li></ul>
            </div>
            <div className="u-nav-container-collapse" id="412f" role="region" aria-label="Menu panel">
              <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                  <div className="u-menu-close" tabindex="-1" aria-label="Close menu"></div>
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="/landing">Home</a>
                  </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="/login">Iniciar Sesión</a>
                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="/registro">Registrarme</a>
                    </li></ul>
                </div>
              </div>
              <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
            </div>
          </nav>
        </div>
      </header >

      <section className="u-align-left u-clearfix u-container-align-left u-container-align-right u-image u-valign-middle u-section-1" id="sec-a75a" data-image-width="1980" data-image-height="1437">
        <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-row">
              <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-size-25-xl u-size-27-lg u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1" data-animation-name="customAnimationIn" data-animation-duration="1500">
                <div className="u-container-layout u-valign-middle u-container-layout-1">
                  <h2 className="u-align-left u-text u-text-palette-1-base u-text-2" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="500"> Administra tu gimnasio con nuestra aplicación</h2>
                  <p className="u-align-left u-text u-text-body-alt-color u-text-3" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">Simplifica el registro de miembros y la gestión de suscripciones de tu gimnasio desde un solo lugar: rápido, fácil y sin complicaciones.</p>
                  <a href="/Registro" className="btn-luz u-active-white u-align-left u-border-none u-btn u-button-style u-hover-white u-palette-1-base u-btn-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">Comenzar ahora</a>
                </div>
              </div>
              <div className="u-align-left u-container-align-left u-container-style u-image u-layout-cell u-size-33-lg u-size-35-xl u-size-60-md u-size-60-sm u-size-60-xs u-image-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="250" data-image-width="1600" data-image-height="1282">
                <div className="u-container-layout u-valign-bottom u-container-layout-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="u-align-center u-clearfix u-container-align-center u-palette-1-base u-section-2" id="sec-c938">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-align-center u-container-align-center u-container-style u-group u-shape-rectangle u-group-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
            <div className="u-container-layout u-container-layout-1">
              <h2 className="u-align-center u-text u-text-1"> ¿Que ofrece nuestra aplicacion?</h2>
              <p className="u-align-center u-large-text u-text u-text-variant u-text-2">¡Aprovecha la preventa y sé de los primeros en transformar la gestión de tu gimnasio!</p>
            </div>
          </div>
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-align-left u-container-align-center u-container-align-left u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="1000" data-animation-direction="">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2"><span className="u-align-center u-file-icon u-icon u-text-palette-1-base u-icon-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction=""><img src="/images/landing/3306826-bc8d81ee.png" alt="" /></span>
                  <h4 className="u-align-center u-text u-text-3">Registro de clientes</h4>

                </div>
              </div>
              <div className="u-align-left u-container-align-center u-container-align-left u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="1000" data-animation-direction="">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3"><span className="u-align-center u-file-icon u-icon u-text-palette-1-base u-icon-2" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction=""><img src="/images/landing/2665178-022c968f.png" alt="" /></span>
                  <h4 className="u-align-center u-text u-text-5"> Notificación de vencimiento de membresias</h4>

                </div>
              </div>
              <div className="u-align-left u-container-align-center u-container-align-left u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-3" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="1000" data-animation-direction="">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4"><span className="u-align-center u-file-icon u-icon u-text-palette-1-base u-icon-3" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction=""><img src="/images/landing/3103468-21884098.png" alt="" /></span>
                  <h4 className="u-align-center u-text u-text-7"> Fácil gestion de clientes y membresias</h4>

                </div>
              </div>
              <div className="u-align-left u-container-align-center u-container-align-left u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-4" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="1000" data-animation-direction="">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5"><span className="u-align-center u-file-icon u-icon u-text-palette-1-base u-icon-4" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction=""><img src="/images/landing/3404134-452e58bc.png" alt="" /></span>
                  <h4 className="u-align-center u-text u-text-9"> Actividad de los clientes</h4>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-clearfix u-section-3" id="sec-7a64">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-align-center u-container-align-center u-container-style u-image u-layout-cell u-size-24-lg u-size-24-xl u-size-60-md u-size-60-sm u-size-60-xs u-image-1" data-image-width="800" data-image-height="1141" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                  <div className="u-container-layout u-container-layout-1"></div>
                </div>
                <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-size-36-lg u-size-36-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-direction="" data-animation-delay="750">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <h3 className="u-align-left u-text u-text-1">Sobre Nosotros</h3>
                    <p className="u-align-left u-text u-text-2"> Somos un equipo apasionado por la tecnología y el bienestar, comprometido con facilitar la administración de gimnasios, estudios fitness y centros deportivos.
                      Desarrollamos una solución práctica, intuitiva y potente que te permite registrar miembros, gestionar suscripciones, recibir notificaciones de vencimiento y llevar el control de la actividad de tus clientes desde un solo lugar. </p>

                    <a href="#" className="u-active-black u-align-left u-border-none u-btn u-button-style u-hover-black u-palette-1-base u-btn-2" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">Leer Más</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-section-planes u-palette-1-base">
        <div className="u-sheet u-sheet-1">
          <h2 className="u-text u-text-default u-text-white">Elige el mejor plan para ti</h2>

          {/* Switch Mensual / Anual */}
          <div className="plan-switch-wrapper">
            <div className="plan-switch">
              <button
                onClick={() => setPlanType('mensual')}
                className={planType === 'mensual' ? 'active' : ''}
              >
                Mensual
              </button>
              <button
                onClick={() => setPlanType('anual')}
                className={planType === 'anual' ? 'active' : ''}
              >
                Anual
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {planes[planType].map((plan, index) => (
              <div key={index} className="plan-card">
                <h3>{plan.nombre}</h3>
                <h4>{plan.precio}</h4>
                <ul>
                  {plan.beneficios.map((beneficio, i) => (
                    <li key={i}>{beneficio}</li>
                  ))}
                </ul>
                <button className="u-btn u-button-style u-palette-1-base u-hover-white u-text-white">
                  Elige este plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="u-clearfix u-section-7" id="sec-4501">
        <div className="u-clearfix u-layout-wrap u-layout-wrap-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="750">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-9">
                <div className="u-container-layout u-container-layout-9">
                  <h4 className="u-text u-text-default u-text-1">¿Quieres saber más?</h4>
                  <p className="u-custom-font u-font-montserrat u-text u-text-2">
                    Déjanos tus datos y te enviaremos toda la información sobre nuestro software de gestión.
                  </p>

                  <div className="u-expanded-width u-form u-form-1">
                    <form action="#" className="u-inner-form" method="post" style={{ maxWidth: '100%', margin: 'auto', boxSizing: 'border-box' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between' }}>


                        <div style={{ flex: '1 1 48%' }}>
                          <label for="nombre">Nombre<span style={{ color: 'red' }}>*</span></label><br />
                          <small>Indica tu nombre personal</small>
                          <input type="text" id="nombre" name="nombre" required style={{ width: '100%', padding: '8px' }} />
                        </div>


                        <div style={{ flex: '1 1 48%' }}>
                          <label for="centro">Nombre del centro deportivo:<span style={{ color: 'red' }}>*</span></label><br />
                          <small>Indica el nombre del gym que quieres gestionar con nuestra plataforma</small>
                          <input type="text" id="centro" name="centro" required style={{ width: '100%', padding: '8px' }} />
                        </div>


                        <div style={{ flex: '1 1 48%' }}>
                          <label for="whatsapp">Whatsapp<span style={{ color: 'red' }}>*</span></label><br />
                          <small>Indica tu número de whatsapp (sin el +52 o +1)</small>
                          <input type="tel" id="whatsapp" name="whatsapp" required style={{ width: '100%', padding: '8px' }} />
                        </div>


                        <div style={{ flex: '1 1 48%' }}>
                          <label for="clientes">Número de clientes activos<span style={{ color: 'red' }}>*</span></label><br />
                          <small>Indica la cantidad de alumnos actuales en tu centro</small>
                          <select id="clientes" name="clientes" required style={{ width: '100%', padding: '8px' }}>
                            <option value="">Selecciona</option>
                            <option>1 a 20</option>
                            <option>21 a 50</option>
                            <option>51 a 120</option>
                            <option>121 a 200</option>
                            <option>200 o más</option>
                          </select>
                        </div>


                        <div style={{ flex: '1 1 100%' }}>
                          <label for="correo">Correo<span style={{ color: 'red' }}>*</span></label><br />
                          <small>Indica tu correo electrónico</small>
                          <input type="email" id="correo" name="correo" required style={{ width: '100%', padding: '8px' }} />
                        </div>


                        <div style={{ flex: '1 1 100%' }}>
                          <label for="instagram">Instagram de tu centro deportivo<span style={{ color: 'red' }}>*</span></label><br />
                          <input type="text" id="instagram" name="instagram" required style={{ width: '100%', padding: '8px' }} />
                        </div>


                        <div style={{ flex: '1 1 100%', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                          <button
                            type="submit"
                            className="u-active-white u-border-none u-btn u-button-style u-hover-white u-palette-1-base"
                            style={{ minWidth: '200px', minHeight: '50px', fontWeight: "bolder" }}
                          >
                            ENVIAR
                          </button>
                        </div>

                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="u-clearfix u-section-8" id="block-1">
        <div className="u-clearfix u-sheet u-sheet-1"></div>
      </section>



      <footer className="u-align-center u-clearfix u-container-align-center u-footer u-grey-80 u-footer" id="footer"><div className="u-clearfix u-sheet u-sheet-1">
        <p className="u-small-text u-text u-text-variant u-text-1">Texto de muestra. Haz click para seleccionar el elemento de Texto.</p>
      </div></footer>
      <section className="u-backlink u-clearfix u-grey-80"> This site was created with Nicepage <a href="https://nicepage.com/html-website-builder">HTML Website Builder</a>
      </section>

    </div>

  );
}
