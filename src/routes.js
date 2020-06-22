import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const RioDeJaneiro = React.lazy(() => import('./views/RioDeJaneiro'));
const EspiritoSanto = React.lazy(() => import('./views/EspiritoSanto'));
const MinasGerais = React.lazy(() => import('./views/MinasGerais'));
const SaoPaulo = React.lazy(() => import('./views/SaoPaulo'));
const Parana = React.lazy(() => import('./views/Parana'));
const RioGrandeDoSul = React.lazy(() => import('./views/RioGrandeDoSul'));
const SantaCatarina = React.lazy(() => import('./views/SantaCatarina'));
const Goias = React.lazy(() => import('./views/Goias'));
const MatoGrosso = React.lazy(() => import('./views/MatoGrosso'));
const MatoGrossoDoSul = React.lazy(() => import('./views/MatoGrossoDoSul'));
const Alagoas = React.lazy(() => import('./views/Alagoas'));
const Bahia = React.lazy(() => import('./views/Bahia'));
const Ceara = React.lazy(() => import('./views/Ceara'));
const Maranhao = React.lazy(() => import('./views/Maranhao'));
const Paraiba = React.lazy(() => import('./views/Paraiba'));
const Pernambuco = React.lazy(() => import('./views/Pernambuco'));
const Piaui = React.lazy(() => import('./views/Piaui'));
const RioGrandeDoNorte = React.lazy(() => import('./views/RioGrandeDoNorte'));
const Sergipe = React.lazy(() => import('./views/Sergipe'));
const Acre = React.lazy(() => import('./views/Acre'));
const Amapa = React.lazy(() => import('./views/Amapa'));
const Amazonas = React.lazy(() => import('./views/Amazonas'));
const Para = React.lazy(() => import('./views/Para'));
const Rondonia = React.lazy(() => import('./views/Rondonia'));
const Roraima= React.lazy(() => import('./views/Roraima'));
const Tocantins= React.lazy(() => import('./views/Tocantins'));
const DistritoFederal= React.lazy(() => import('./views/DistritoFederal'));
const World = React.lazy(() => import('./views/World'));
const About = React.lazy(() => import('./views/About'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Brasil', component: Dashboard },
  { path: '/RioDeJaneiro', name: 'Rio de Janeiro', component: RioDeJaneiro },
  { path: '/EspiritoSanto', name: 'Espirito Santo', component: EspiritoSanto },
  { path: '/MinasGerais', name: 'Minas Gerais', component: MinasGerais },
  { path: '/SaoPaulo', name: 'São Paulo', component: SaoPaulo },
  { path: '/Parana', name: 'Parana', component: Parana },
  { path: '/RioGrandeDoSul', name: 'Rio Grande Do Sul', component: RioGrandeDoSul },
  { path: '/SantaCatarina', name: 'Santa Catarina', component: SantaCatarina },
  { path: '/Goias', name: 'Santa Catarina', component: Goias },
  { path: '/MatoGrosso', name: 'Mato Grosso', component: MatoGrosso },
  { path: '/MatoGrossoDoSul', name: 'Mato Grosso Do Sul', component: MatoGrossoDoSul},
  { path: '/Alagoas', name: 'Alagoas', component: Alagoas },
  { path: '/Bahia', name: 'Bahia', component: Bahia },
  { path: '/Ceara', name: 'Ceará', component: Ceara },
  { path: '/Maranhao', name: 'Maranhão', component: Maranhao },
  { path: '/Paraiba', name: 'Paraiba', component: Paraiba },
  { path: '/Pernambuco', name: 'Pernambuco', component: Pernambuco },
  { path: '/Piaui', name: 'Piauí', component: Piaui },
  { path: '/RioGrandeDoNorte', name: 'Rio Grande Do Norte', component: RioGrandeDoNorte },
  { path: '/Sergipe', name: 'Sergipe', component: Sergipe },
  { path: '/Acre', name: 'Sergipe', component: Acre },
  { path: '/Amapa', name: 'Amapa', component: Amapa },
  { path: '/Amazonas', name: 'Amazonas', component: Amazonas },
  { path: '/Para', name: 'Para', component: Para },
  { path: '/Rondonia', name: 'Rondonia', component: Rondonia},
  { path: '/Roraima', name: 'Roraima', component: Roraima},
  { path: '/Tocantins', name: 'Tocantins', component: Tocantins},
  { path: '/DistritoFederal', name: 'Distrito Federal', component: DistritoFederal},
  { path: '/World', name: 'Mundo', component: World},
  { path: '/About', name: 'Sobre', component: About},
];

export default routes; 
