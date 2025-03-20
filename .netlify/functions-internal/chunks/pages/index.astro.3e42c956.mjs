import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.10efa794.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/icono.jpg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <meta name="description" content="Diseño y Desarrollo web a medida para tu empresa deja que nosotros te ayudemos a destacar">
		<title>${title}</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "C:/Users/pedro/Desktop/fluye/Astro-idol/src/layouts/Layout.astro");

const LOGO = "/_astro/LOGO.5363d9a8.jpg";

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="nav astro-3EF6KSR2">
    <div class="container row astro-3EF6KSR2">
     <div class="nav-logo one-third column astro-3EF6KSR2">
         <a href="#" class="logo-link astro-3EF6KSR2">
             <img${addAttribute(LOGO, "src")} alt="Brand logo" class="astro-3EF6KSR2">
         </a>
     </div>
     <nav class="one-third column astro-3EF6KSR2">
         <ul class="center flex astro-3EF6KSR2">
             <li class="astro-3EF6KSR2"><a href="#features" class="astro-3EF6KSR2">Servicios</a></li>
             <li class="astro-3EF6KSR2"><a href="#pricing" class="astro-3EF6KSR2">Precios</a></li>
             <li class="astro-3EF6KSR2"><a href="#customers" class="astro-3EF6KSR2">Clientes</a></li>
         </ul>
     </nav>
    </div>
 </header>`;
}, "C:/Users/pedro/Desktop/fluye/Astro-idol/src/components/Header.astro");

const $$Astro$4 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-hero astro-BBE6DXRZ">
    <div class="container astro-BBE6DXRZ">
        <div class="d-table astro-BBE6DXRZ">
            <div class="d-table-cell center astro-BBE6DXRZ">
                <div class="hero-copy astro-BBE6DXRZ">
                    <h1 class="h1-title astro-BBE6DXRZ">Impulsa tu negocio con un sitio web profesional y atractivo. Diseño y desarrollo web a medida para llevar tu marca al siguiente nivel</h1>
                    <p class="astro-BBE6DXRZ"> Nuestra agencia digital se especializa en crear sitios web cautivadores que convierten y venden. Póngase en contacto con nosotros para una consulta gratuita.</p>
                    <div class="product-cta astro-BBE6DXRZ">
                      <a href="http://wa.me/+595994386169" class="button button-primary u-full-width astro-BBE6DXRZ">Contactanos para mas info</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>`;
}, "C:/Users/pedro/Desktop/fluye/Astro-idol/src/components/Hero.astro");

const Diseño = "/_astro/diseño.9fdfcbad.jpg";

const Ecomer = "/_astro/ecommerce-1706103.50637a32.png";

const Seo = "/_astro/seo-7397379.adaac833.svg";

const Bolt = "/_astro/bolt.b67995d9.svg";

const Wallet = "/_astro/wallet.4b38b872.svg";

const Secure = "/_astro/lock.f69e3f39.svg";

const Afilia = "/_astro/affiliate.9a062283.svg";

const $$Astro$3 = createAstro();
const $$Brief = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Brief;
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-brief astro-HRGAL3UM" id="features">
    <div class="container astro-HRGAL3UM">


        <!-- Feature Two -->
        <div class="row product-brief-items astro-HRGAL3UM">
            <div class="brief-media center one-half column astro-HRGAL3UM">
                <img${addAttribute(Dise\u00F1o, "src")} class="md-width astro-HRGAL3UM">
            </div>

            <div class="brief-tab one-half column astro-HRGAL3UM">
                <h3 class="h2-title astro-HRGAL3UM">Desarrollo de Landing Page</h3>
                <p class="m-paragraph m-margin astro-HRGAL3UM">Una landing page bien diseñada es la clave para captar la atención y generar conversiones. Creamos páginas optimizadas, atractivas y funcionales para impulsar tus campañas y aumentar tus resultados.</p>

                <div class="brief-items astro-HRGAL3UM">
                 <div class="row m-margin astro-HRGAL3UM">
                    <div class="one-half column feature-grid astro-HRGAL3UM">
                        <img${addAttribute(Bolt, "src")} alt="Fast connect" class="astro-HRGAL3UM">
                        <p class="s-paragraph astro-HRGAL3UM">Optimización para una carga rápida y fluida</p>
                    </div>
                    <div class="one-half column feature-grid astro-HRGAL3UM">
                        <img${addAttribute(Afilia, "src")} alt="Money transfer" class="astro-HRGAL3UM">
                        <p class="s-paragraph astro-HRGAL3UM">Diseño atractivo y adaptado a tu marca</p>
                    </div>
                </div>
                <div class="row astro-HRGAL3UM">
                    <div class="one-half column feature-grid astro-HRGAL3UM">
                        <img${addAttribute(Wallet, "src")} alt="Digital wallet" class="astro-HRGAL3UM">
                        <p class="s-paragraph astro-HRGAL3UM">Diseño atractivo y adaptado a tu marca</p>
                    </div>
                    <div class="one-half column feature-grid astro-HRGAL3UM">
                        <img${addAttribute(Secure, "src")} alt="Secure connection" class="astro-HRGAL3UM">
                        <p class="s-paragraph astro-HRGAL3UM">Enfoque en la conversión y llamadas a la acción efectivas</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
   
        <!-- Feature One -->
        <div class="row product-brief-items astro-HRGAL3UM">
            <div class="brief-media center one-half column astro-HRGAL3UM">
              <img${addAttribute(Ecomer, "src")} class="md-width astro-HRGAL3UM">
            </div>
            <div class="brief-tab one-half column astro-HRGAL3UM">
                <h3 class="h2-title astro-HRGAL3UM">Desarrollo de Ecommerce</h3>
                <p class="m-paragraph m-margin astro-HRGAL3UM">Te ayudamos a lanzar o mejorar tu ecommerce con un diseño intuitivo, seguro y optimizado para aumentar tus ventas. Conectamos tu negocio con el mundo digital para que puedas vender sin límites.</p>


               <div class="brief-items astro-HRGAL3UM">
                 <div class="row m-margin astro-HRGAL3UM">
                    <div class="one-half column feature-grid astro-HRGAL3UM">
                        <img${addAttribute(Bolt, "src")} alt="Fast connect" class="astro-HRGAL3UM">
                        <p class="s-paragraph astro-HRGAL3UM">Diseño profesional y fácil de navegar</p>
                    </div>
                    <div class="one-half column feature-grid astro-HRGAL3UM">
                        <img${addAttribute(Afilia, "src")} alt="Money transfer" class="astro-HRGAL3UM">
                        <p class="s-paragraph astro-HRGAL3UM"> Optimización para SEO y velocidad de carga</p>
                    </div>
                </div>
                <div class="row astro-HRGAL3UM">
                    <div class="one-half column feature-grid astro-HRGAL3UM">
                        <img${addAttribute(Wallet, "src")} alt="Digital wallet" class="astro-HRGAL3UM">
                        <p class="s-paragraph astro-HRGAL3UM">Integración de métodos de pago seguros</p>
                    </div>
                    <div class="one-half column feature-grid astro-HRGAL3UM">
                        <img${addAttribute(Secure, "src")} alt="Secure connection" class="astro-HRGAL3UM">
                        <p class="s-paragraph astro-HRGAL3UM">Escalabilidad para crecer junto a tu negocio</p>
                    </div>
                </div>
              </div>
            </div>

            
        </div>



     <!-- Feature One -->
      <div class="row product-brief-items astro-HRGAL3UM">

        <div class="brief-media center one-half column astro-HRGAL3UM">
            <img${addAttribute(Seo, "src")} class="md-width astro-HRGAL3UM">
        </div>
        
         <div class="brief-tab one-half column astro-HRGAL3UM">
            <h3 class="h2-title astro-HRGAL3UM">SEO (Optimización para Motores de Búsqueda)</h3>
            <p class="m-paragraph m-margin astro-HRGAL3UM">Mejoramos la visibilidad de tu sitio web con estrategias de SEO efectivas. Aumenta tu tráfico orgánico, llega a más clientes y posiciona tu marca en los primeros resultados de búsqueda.</p>


            <div class="brief-items astro-HRGAL3UM">
                <div class="row m-margin astro-HRGAL3UM">
                <div class="one-half column feature-grid astro-HRGAL3UM">
                    <img${addAttribute(Bolt, "src")} alt="Fast connect" class="astro-HRGAL3UM">
                    <p class="s-paragraph astro-HRGAL3UM">Optimización técnica para mejorar el rendimiento</p>
                </div>
                <div class="one-half column feature-grid astro-HRGAL3UM">
                    <img${addAttribute(Afilia, "src")} alt="Money transfer" class="astro-HRGAL3UM">
                    <p class="s-paragraph astro-HRGAL3UM">Análisis y seguimiento constante para mejores resultados</p>
                </div>
            </div>
            <div class="row astro-HRGAL3UM">
                <div class="one-half column feature-grid astro-HRGAL3UM">
                    <img${addAttribute(Wallet, "src")} alt="Digital wallet" class="astro-HRGAL3UM">
                    <p class="s-paragraph astro-HRGAL3UM">Estrategias personalizadas según tu nicho</p>
                </div>
                <div class="one-half column feature-grid astro-HRGAL3UM">
                    <img${addAttribute(Secure, "src")} alt="Secure connection" class="astro-HRGAL3UM">
                    <p class="s-paragraph astro-HRGAL3UM">Creación de contenido relevante y de calidad</p>
                </div>
            </div>
          </div>
        </div>

      </div>

    </div>
 </section>`;
}, "C:/Users/pedro/Desktop/fluye/Astro-idol/src/components/Brief.astro");

const $$Astro$2 = createAstro();
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${maybeRenderHead($$result)}<section class="pricing-table astro-HKOC4SEA" id="pricing">
    <div class="container astro-HKOC4SEA">
        <div class="center text-container astro-HKOC4SEA">
            <h3 class="h1-title astro-HKOC4SEA">Elige el plan adecuado</h3>
            <p class="astro-HKOC4SEA">Hemos diseñado nuestros precios muy accesibles para ayudarte a encontrar las mejores soluciones para ti y tu increíble negocio</p>
        </div>

        <div class="row astro-HKOC4SEA">
            <div class="one-third column price-item astro-HKOC4SEA">
                <div class="price-header m-margin astro-HKOC4SEA">
                    <h5 class="l-subtitle astro-HKOC4SEA">Landing Page</h5>
                    <h3 class="h2-title astro-HKOC4SEA">Gs.1.000.000<span class="s-paragraph astro-HKOC4SEA"> / Desde</span></h3>
                    <a href="https://wa.me/+595994386169?text=Hola,%20me%20interesa%20el%20servicio%20de%20Landing%20Page" target="_blank" class="button u-full-width astro-HKOC4SEA">Me interesa</a>
                </div>

                <div class="price-list astro-HKOC4SEA">
                    <p class="astro-HKOC4SEA">Diseño personalizado y adaptado a tu marca</p>
                    <p class="astro-HKOC4SEA">Optimización para dispositivos móviles</p>
                    <p class="astro-HKOC4SEA">Integración con formularios de contacto o suscripción</p>
                    <p class="astro-HKOC4SEA">Carga rápida y optimización de rendimiento</p>
                    <p class="astro-HKOC4SEA">Conexión con Google Analytics</p>
                </div>
            </div>
            <div class="one-third column price-item astro-HKOC4SEA">
                <div class="price-header m-margin astro-HKOC4SEA">
                    <h5 class="l-subtitle astro-HKOC4SEA">Ecommerce</h5>
                    <h3 class="h2-title astro-HKOC4SEA">Gs.3.000.000<span class="s-paragraph astro-HKOC4SEA"> / Desde</span></h3>
                    <a href="https://wa.me/+595994386169?text=Hola,%20me%20interesa%20el%20servicio%20de%20Ecommerce" target="_blank" class="button u-full-width astro-HKOC4SEA">Me interesa</a>
                </div>

                <div class="price-list astro-HKOC4SEA">
                    <p class="astro-HKOC4SEA">Diseño profesional y experiencia de usuario optimizada</p>
                    <p class="astro-HKOC4SEA">Integración de pasarelas de pago seguras</p>
                    <p class="astro-HKOC4SEA">Optimización on-page y off-page</p>
                    <p class="astro-HKOC4SEA">Creación y mejora de meta etiquetas (títulos, descripciones)</p>
                    <p class="astro-HKOC4SEA">Reportes y seguimiento mensual</p>
                </div>
            </div>
            <div class="one-third column price-item astro-HKOC4SEA">
                <div class="price-header m-margin astro-HKOC4SEA">
                    <h5 class="l-subtitle astro-HKOC4SEA">Seo</h5>
                    <h3 class="h2-title astro-HKOC4SEA">Gs.500.000<span class="s-paragraph astro-HKOC4SEA"> / Desde</span></h3>
                    <a href="https://wa.me/+595994386169?text=Hola,%20me%20interesa%20el%20servicio%20de%20SEO" target="_blank" class="button u-full-width astro-HKOC4SEA">Me interesa</a>
                </div>

                <div class="price-list astro-HKOC4SEA">
                    <p class="astro-HKOC4SEA">Auditoría y optimización técnica de tu sitio web</p>
                    <p class="astro-HKOC4SEA">Investigación de palabras clave y estrategia de contenido</p>
                    <p class="astro-HKOC4SEA">Análisis de la competencia y mejoras estratégicas</p>
                    <p class="astro-HKOC4SEA">Reportes y seguimiento mensual</p>
                    <p class="astro-HKOC4SEA">Creación y mejora de meta etiquetas (títulos, descripciones)</p>
                </div>
            </div>
        </div>
    </div>
 </section>`;
}, "C:/Users/pedro/Desktop/fluye/Astro-idol/src/components/Pricing.astro");

const Instagram = "/_astro/brand-instagram.823c4d5b.svg";

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
    <div class="container row astro-SZ7XMLTE">
        <div class="footer-link flex js one-half column astro-SZ7XMLTE">
            <a href="#" class="astro-SZ7XMLTE">Acerca de</a> <a href="#" class="astro-SZ7XMLTE">Help Center</a>
        </div>
        <div class="footer-note one-half column astro-SZ7XMLTE">
            <div class="u-pull-right astro-SZ7XMLTE">
                <div class="flex astro-SZ7XMLTE">
                    <p class="astro-SZ7XMLTE">© FluyeWeb 2025</p>
                    <a href="https://www.instagram.com/fluyeeweb/?utm_source=ig_web_button_share_sheet" class="astro-SZ7XMLTE"><img${addAttribute(Instagram, "src")} alt="Instagram icon" class="astro-SZ7XMLTE"></a>
                </div>
            </div>
        </div>
    </div>
</footer>`;
}, "C:/Users/pedro/Desktop/fluye/Astro-idol/src/components/Footer.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FluyeWeb | Dise\xF1o y Desarrollo Web" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, {})}
	${renderComponent($$result2, "Hero", $$Hero, {})}
	${renderComponent($$result2, "Brief", $$Brief, {})}
	${renderComponent($$result2, "Pricing", $$Pricing, {})}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "C:/Users/pedro/Desktop/fluye/Astro-idol/src/pages/index.astro");

const $$file = "C:/Users/pedro/Desktop/fluye/Astro-idol/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
