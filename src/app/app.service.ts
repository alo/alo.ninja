import { Injectable } from '@angular/core';
import { MainDescription } from '@shared/models/main-description.interface';

@Injectable()
export class AppService {
  data: MainDescription = {
    name: 'Álvaro Quirós',
    description:
      'Disfrutando como Desarrollador de Software desde hace 10 años. Aunque siempre he estado muy cerca de la Web, ' +
      'hace algo más de 5 años decidí centrarme en Javascript con NodeJS y Angular como mis herramientas principales. ' +
      'Frontend Lead en Coderty, organizador de NGSpain, Angular Almería y AlmeríaJS y speaker ocasional. Me encanta viajar y ' +
      'conocer otras culturas.',
    position: 'Frontend Lead Coderty',
    profilePic: {
      src: 'assets/profile.jpg',
      alt: 'Foto de perfil'
    },
    socialLinks: [
      {
        icon: 'fa-svg fa-twitter',
        link: 'https://twitter.com/aloDev'
      },
      {
        icon: 'fa-svg fa-github',
        link: 'https://github.com/alo'
      },
      {
        icon: 'fa-svg fa-linkedin',
        link: 'https://www.linkedin.com/in/alodev/'
      },
      {
        icon: 'fa-svg fa-instagram',
        link: 'https://www.instagram.com/alo360/',
        advice: true
      }
    ],
    projects: [
      {
        id: 'coderty',
        title: 'Coderty',
        subtitle: 'Co-founder & Frontend Lead',
        desc:
          'CODERTY es una empresa de desarrollo de software, especializada en crear soluciones a medida ' +
          'adaptando las últimas a tecnologías las necesidades de nuestros clientes. ' +
          'WE <b>#ENJOY</b> SOFTWARE!',
        imgSrc: 'assets/coderty-logo.png',
        imgAlt: 'Logo Coderty',
        socialLinks: [
          {
            icon: 'fa-svg fa-earth',
            link: 'http://coderty.com'
          },
          {
            icon: 'fa-svg fa-github',
            link: 'https://github.com/coderty'
          },
          {
            icon: 'fa-svg fa-linkedin',
            link: 'https://www.linkedin.com/company/coderty/'
          },
          {
            icon: 'fa-svg fa-instagram',
            link: 'https://www.instagram.com/coderty/'
          }
        ]
      },
      {
        id: 'runnerty',
        title: 'Runnerty',
        desc:
          'Orquestador de procesos escrito en NodeJS que te permite gestionar y planificar tus procesos. ' +
          'Céntrate en la lógica de negocio y olvídate de gestionar dependencias entre procesos, jobs, gestión de ' +
          'errores o notificaciones.',
        subtitle: 'Co-author & Maintainer',
        imgSrc: 'assets/runnerty-logo2.png',
        imgAlt: 'Logo runnerty',
        socialLinks: [
          {
            icon: 'fa-svg fa-earth',
            link: 'http://runnerty.io'
          },
          {
            icon: 'fa-svg fa-twitter',
            link: 'https://twitter.com/aloDev'
          },
          {
            icon: 'fa-svg fa-github',
            link: 'https://github.com/alo'
          }
        ]
      },
      {
        id: 'ngspain',
        title: 'NGSpain',
        subtitle: 'Organizer',
        desc:
          'La conferencia de Angular de España. Nuestro objetivo es crear un evento acogedor que esté abierto para todos los que deseen asistir. ' +
          'La edición de 2019 fue un éxito y ¡Este año 2020 se celebrará en <b>Málaga</b> en el mes de Octubre!',
        imgSrc: 'assets/ngspain.png',
        imgAlt: 'Logo NGSpain',
        socialLinks: [
          {
            icon: 'fa-svg fa-earth',
            link: 'https://ngspain.com'
          },
          {
            icon: 'fa-svg fa-twitter',
            link: 'https://twitter.com/ngspain'
          },
          {
            icon: 'fa-svg fa-github',
            link: 'https://github.com/ngspain'
          }
        ]
      },
      {
        id: 'almeriajs',
        title: 'AlmeríaJS',
        desc:
          'Nos encanta Javascipt. Cualquier framework Javascript (de los muchos que hay) o cualquier lenguaje nos vale. ' +
          'Nos juntamos una vez al mes e intentamos aprender algo nuevo, divertirnos y ... bebemos cerveza y comemos pizza 🤷‍♂️.',
        imgSrc: 'assets/almeriajs.png',
        subtitle: 'Angular Almeria friends',
        imgAlt: 'Logo AlmeriaJS',
        socialLinks: [
          {
            icon: 'fa-svg fa-twitter',
            link: 'https://twitter.com/almeriajs'
          },
          {
            icon: 'fa-svg fa-github',
            link: 'https://github.com/almeriajs'
          },
          {
            icon: 'fa-svg fa-meetup',
            link: 'https://www.meetup.com/almeriajs/'
          }
        ]
      }
    ],
    title: 'Álvaro Quirós',
    metas: [
      {
        name: 'author',
        content: 'Álvaro Quirós'
      },
      {
        name: 'keywords',
        content: 'angular, almeria, seo, friendly, desarrollo, web, angularjs'
      },
      {
        name: 'description',
        content: 'Frontend lead en Coderty, donde Angular ocupa un espacio central. Speaker, organizer & mentor. '
      },
      {
        name: 'copyright',
        content: 'Álvaro Quirós'
      },
      {
        property: 'og:title',
        content: 'Álvaro Quirós'
      },
      {
        property: 'og:description',
        content: 'Frontend lead en Coderty, donde Angular ocupa un espacio central. Speaker, organizer & mentor. '
      },
      {
        property: 'og:image',
        content: 'https://alo.dev/assets/alo.jpeg'
      },
      {
        property: 'og:url',
        content: 'https://alo.dev'
      },
      {
        property: 'og:site_name',
        content: 'alo.dev'
      },
      {
        name: 'twitter:title',
        content: 'Álvaro Quirós'
      },
      {
        name: 'twitter:description',
        content: 'Frontend lead en Coderty, donde Angular ocupa un espacio central. Speaker, organizer & mentor. '
      },
      {
        name: 'twitter:image',
        content: 'https://alo.dev/assets/alo.jpeg'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ]
  };

  constructor() {}

  getData(): MainDescription {
    return this.data;
  }

  getProjects() {
    return this.data.projects;
  }

  getProject(projectId: string) {
    return this.data.projects.find(project => project.id === projectId);
  }
}
