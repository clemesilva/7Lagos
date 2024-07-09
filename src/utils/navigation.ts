// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Catálogo", url: "/products" },
  { name: "Sobre Nosotros", url: "/blog" },
  { name: "Contáctanos", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      
      { name: "Productos", url: "/products" },
      
    ],
  },
  {
    section: "Equipo",
    links: [
      { name: "Sobre Nosotros", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};