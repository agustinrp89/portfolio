const traducciones = {
  espanol: {
    conocimiento:'Conocimiento',
    proy:'Proyectos',
    cert:'Certificados',
    cont:'Contacto',
    inicio:'Inicio',
    sobre:'Sobre Mi',
    buttonText: 'English',
    sobreMiTitle: 'Sobre Mí',
    quienSoy: 'Quien Soy',
    objetivos: 'Cuales son mis objetivos?',
    conoceMas: 'Conoceme un poco mas!',
    Hola: 'Hola, soy',
    DesarroladorWeb: 'Desarrollador Web',
    texto1:"Soy una chico de 32 años de Buenos Aires, Argentina. Tengo formación en derecho y trabajé en ese campo durante 2 años. Sin embargo, mi pasión se encuentra en el desarrollo Web, con un gran interés en el aprendizaje. En 2017, comencé mi camino como desarrolladora, enfocándome en expandir mis habilidades en programación y persiguiendo una carrera en la industria tecnológica.",
    texto2:'Destacarme en desarrollo web ya sea backend o frontend, busco proyectos desafiantes u oportunidades laborales donde pueda aplicar de manera efectiva mis habilidades en programación y seguir ampliando mis conocimientos informaticos, contribuyendo a la creación de experiencias digitales innovadoras y amigables para los usuarios. Actualmente, sigo expandiendo mi formacion academica mediante cursos.',
    texto3:'En mi tiempo libre, me encanta jugar videojuegos, aficionado desde que tengo conocimiento. Mantengo una vida activa realizando deportes y gimnasio para complementar la vida nomada. Mi lugar favorito en el mundo es mi espacio de trabajo, ya que lo considero extremadamente útil y un apoyo para nutrir la inspiración.',
    techs:'TECNOLOGÍAS QUE MANEJO',
    proyecto:'PROYECTOS',
    computershop:'Proyecto ecommerce de venta de hardware e insumos, como tambien soporte a empresas, en todo el pais',
    visitar:'Visitar',
    git:'Cuenta de Github que pueden visitar para ver un poco de lo que haciendo y subiendo de momentos.',
    plus:'Colaboracion en el proyecto de modificacion de la landingpage de la empresa plus54',
    certificado:'CERTIFICADOS',
    contacto:'CONTACTO',
    email:'Para consultas enviar un mail',
    enviar:'Enviar'
    // Agrega más traducciones según sea necesario
  },
  ingles: {
    conocimiento:'knowledge',
    proy:'Proyects',
    cert:'Certificates',
    cont:'Contact',
    inicio:'Home',
    sobre:'About Me',
    buttonText: 'Español',
    sobreMiTitle: 'About Me',
    quienSoy: 'Who I Am',
    objetivos: 'My Goals',
    conoceMas: 'Get to know me a bit more!',
    Hola:'Hello, I m',
    DesarroladorWeb: 'Web Developer',
    texto1:'I am a 32-year-old boy from Buenos Aires, Argentina. I have a background in law and worked in that field for 2 years. However, my passion lies in Web development, with a great interest in learning. In 2017, I began my journey as a developer, focusing on expanding my programming skills and pursuing a career in the tech industry.',
    texto2:'To excel in web development, whether backend or frontend, I am looking for challenging projects or job opportunities where I can effectively apply my programming skills and continue expanding my computer knowledge, contributing to the creation of innovative and user-friendly digital experiences. Currently, I continue to expand my academic training through courses.',
    texto3:'In my free time, I love playing video games, a fan for as long as I know. I maintain an active life by doing sports and gym to complement the nomadic life. My favorite place in the world is my workspace, as I find it extremely useful and a support for nurturing inspiration.',
    techs:'TECHNOLOGIES THAT I HANDLE',
    proyecto:'PROJECTS',
    computershop:'Ecommerce project for the sale of hardware and supplies, as well as support for companies, throughout the country',
    visitar:'Visit',
    git:'Github account that you can visit to see a little of what they are doing and uploading at the moment.',
    plus:'Collaboration in the project to modify the landing page of the company plus54',
    certificado:'CERTIFICATES',
    contacto:'CONTACT',
    email:'For inquiries send an email',
    enviar:'Send'
    // Agrega más traducciones según sea necesario
  }
};

let idiomaActual = 'espanol';

function cambiarIdioma() {
  idiomaActual = idiomaActual === 'espanol' ? 'ingles' : 'espanol';

  // Cambiar el texto del botón
  const boton = document.getElementById('language-toggle');
  boton.textContent = traducciones[idiomaActual].buttonText;

  // Cambiar el texto de otros elementos según su atributo data-lang
  const elementosConTexto = document.querySelectorAll('[data-lang]');
  elementosConTexto.forEach(elemento => {
    const claveTraduccion = elemento.dataset.lang;
    elemento.textContent = traducciones[idiomaActual][claveTraduccion];
  });
}

function openMenu(){
   let menu = document.getElementById('menu');

   if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
   } else {
    menu.classList.add('hidden');
   }
}


$(document).ready(function() {
   $('a[href^="#"]').click(function() {   
     var destino = $(this.hash);
     if (destino.length == 0) {
       destino = $('a[name="' + this.hash.substr(1) + '"]');             
     }
     if (destino.length == 0) {
       destino = $('html');   
     }
     $('html, body').animate({ scrollTop: destino.offset().top }, 500);
     return false;
    
   });
 });


