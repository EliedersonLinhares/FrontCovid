
import logo from './assets/img/brand/RJ.gif'

export default {
  items: [
    {
      name: 'Brasil',
      url: '/dashboard',
      icon: 'icon-map',
    },
    {
      name: 'Mundo',
      url: '/World',
      icon: 'icon-globe',
    },
    {
      title: true,
      name: 'Regiões',   
    },
    {
      name: 'Sudeste',
      url: '/base',
      icon: 'icon-flag',
      children: [
           {
              name: 'Rio de Janeiro',
              url: '/RioDeJaneiro',
              
            },
            {
              name: 'Espírito Santo',
              url: '/EspiritoSanto',
            },
            {
              name: 'Minas Gerais',
              url: '/MinasGerais',
            },
            {
              name: 'São Paulo',
              url: '/SaoPaulo',
            },
      ],
    },

    {
      name: 'Sul',
      url: '/base',
      icon: 'icon-flag',
      children: [

        {
          name: 'Paraná',
          url: '/Parana',
        },
        {
          name: 'Santa Catarina',
          url: '/SantaCatarina',
        },
        {
          name: 'Rio Grande do Sul',
          url: '/RioGrandeDoSul',
        },
      ],
    },
    {
      name: 'Centro-Oeste',
      url: '/base',
      icon: 'icon-flag',
      children: [ 
        {
          name: 'Distrito Federal',
          url: '/DistritoFederal',
        },
        {
          name: 'Goiás',
          url: '/Goias',
        },
        {
          name: 'Mato Grosso',
          url: '/MatoGrosso',
        },
        {
          name: 'Mato Grosso do Sul',
          url: '/MatoGrossoDoSul',
        },
      ],
    },
    {
      name: 'Nordeste',
      url: '/base',
      icon: 'icon-flag',
      children: [
        {
          name: 'Alagoas',
          url: '/Alagoas',
        },
        {
          name: 'Bahia',
          url: '/Bahia',
        },
        {
          name: 'Ceará',
          url: '/Ceara',
          
        },
        {
          name: 'Maranhão',
          url: '/Maranhao',
        },
        {
          name: 'Paraíba',
          url: '/Paraiba',
        },
        {
          name: 'Pernambuco',
          url: '/Pernambuco',
        },
        {
          name: 'Piauí',
          url: '/Piaui',
        },
        {
          name: 'Rio Grande do Norte',
          url: '/RioGrandeDoNorte',
        },
        {
          name: 'Sergipe',
          url: '/Sergipe',
        },
      ],
    },
    {
      name: 'Norte',
      url: '/base',
      icon: 'icon-flag',
      children: [
        {
          name: 'Acre',
          url: '/Acre',
        },
        {
          name: 'Amapá',
          url: '/Amapa',
        },
        {
          name: 'Amazonas',
          url: '/Amazonas',
        },
        {
          name: 'Pará',
          url: '/Para',
        },
        {
          name: 'Rondônia',
          url: '/Rondonia',
        },
        {
          name: 'Roraima',
          url: '/Roraima',
        },
        {
          name: 'Tocantins',
          url: '/Tocantins',
        },
      ],
    },


    {
      name: 'Sobre',
      url: '/About',
      icon: 'icon-info',
    },

  ],

};
