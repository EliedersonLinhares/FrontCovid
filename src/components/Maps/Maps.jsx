import React, { useState, useEffect } from 'react';
import { Map, CircleMarker, TileLayer, Tooltip, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { fetchStates5, fetchStates4 } from '../API';
import brazil from './uf.json'

const Maps = () => {

  const [fetchedStates5, setFetechedState5] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedState5(await fetchStates5());
    }

    fetchAPI();
  }, [setFetechedState5]);
  //console.log(fetchedStates5)

  const [fetchedStates4, setFetechedState4] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedState4(await fetchStates4());
    }

    fetchAPI();
  }, [setFetechedState4]);
  //console.log(fetchedStates5)

  // Filtra os dados pela sigla do estado mostrando os numeros de infectados e mortos 
  const infectedCount = (state) => fetchedStates5.filter(el => el.state === state).map(({ count }) => count);
  const deathCount = (state) => fetchedStates4.filter(el => el.state === state).map(({ count }) => count);



  let data = {
    city: [
      { State: "Acre", coordinates: [-67.8, -9.966667], infected: infectedCount('AC'), death: deathCount('AC') },
      { State: "Alagoas", coordinates: [-35.722433, -9.652406,], infected: infectedCount('AL'), death: deathCount('AL') },
      { State: "Amapá", coordinates: [-51.061633, 0.035158], infected: infectedCount('AP'), death: deathCount('AP') },
      { State: "Amazonas", coordinates: [-60.025278, -3.113333,], infected: infectedCount('AM'), death: deathCount('AM') },
      { State: "Bahia", coordinates: [-38.516667, -12.983333,], infected: infectedCount('BA'), death: deathCount('BA') },
      { State: "Ceará", coordinates: [-38.546167, -3.737464], infected: infectedCount('CE'), death: deathCount('CE') },
      { State: "Distrito Federal", coordinates: [-47.916667, -15.783333], infected: infectedCount('DF'), death: deathCount('DF') },
      { State: "Espirito Santo", coordinates: [-40.345011, -20.332179], infected: infectedCount('ES'), death: deathCount('ES') },
      { State: "Goiás", coordinates: [-49.266793, -16.701028], infected: infectedCount('GO'), death: deathCount('GO') },
      { State: "Maranhão", coordinates: [-44.296299, -2.532519], infected: infectedCount('MA'), death: deathCount('MA') },
      { State: "Mato Grosso", coordinates: [-56.097, -15.596], infected: infectedCount('MT'), death: deathCount('MT') },
      { State: "Mato Grosso do Sul", coordinates: [-54.616667, -20.45], infected: infectedCount('MS'), death: deathCount('MS') },
      { State: "Minas Gerais", coordinates: [-43.964196, -19.901739], infected: infectedCount('MG'), death: deathCount('MG') },
      { State: "Paraná", coordinates: [-49.25, -25.416667], infected: infectedCount('PR'), death: deathCount('PR') },
      { State: "Paraíba", coordinates: [-34.865646, -7.123742], infected: infectedCount('PB'), death: deathCount('PB') },
      { State: "Pará", coordinates: [-48.470614, -1.437281,], infected: infectedCount('PA'), death: deathCount('PA') },
      { State: "Pernambuco", coordinates: [-34.9, -8.05], infected: infectedCount('PE'), death: deathCount('PE') },
      { State: "Piauí", coordinates: [-42.801549, -5.102887], infected: infectedCount('PI'), death: deathCount('PI') },
      { State: "Rio Grande do Norte", coordinates: [-35.210669, -5.80021], infected: infectedCount('RN'), death: deathCount('RN') },
      { State: "Rio Grande do Sul", coordinates: [-51.2, -30.033333], infected: infectedCount('RS'), death: deathCount('RS') },
      { State: "Rio de Janeiro", coordinates: [-43.277548, -22.875113], infected: infectedCount('RJ'), death: deathCount('RJ') },
      { State: "Rondônia", coordinates: [-63.9, -8.766667], infected: infectedCount('RO'), death: deathCount('RO') },
      { State: "Roraima", coordinates: [-60.671312, 2.820842], infected: infectedCount('RR'), death: deathCount('RR') },
      { State: "Santa Catarina", coordinates: [-48.57581, -27.590444], infected: infectedCount('SC'), death: deathCount('SC') },
      { State: "Sergipe", coordinates: [-37.066667, -10.916667,], infected: infectedCount('SE'), death: deathCount('SE') },
      { State: "São Paulo", coordinates: [-46.641681, -23.573252], infected: infectedCount('SP'), death: deathCount('SP') },
      { State: "Tocantins", coordinates: [-48.332778, -10.166944], infected: infectedCount('TO'), death: deathCount('TO') },

    ],
    minLat: -35.210669,
    maxLat: 0.035158,
    minLong: -67.8,
    maxLong: -5.80021
  };


  //Função para calcular o tamanho do circulo em com dados fornecidos
  function calcPropRadius(attributeValue) {
    var scaleFactor = 0.01;
    var area = attributeValue * scaleFactor;
    return Math.sqrt(area / Math.PI) * 2;
  }


  return (
    <div>
      <Map
        style={{ width: '100%', height: '540px' }}
        zoom={4}
        center={[-14.77972, -47.92972]}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' />

        <GeoJSON data={brazil} fillOpacity={0.0} color={'#8A8B8A'} />

        {data.city.map((city, k, y) => {
          return (
            <div>
              <CircleMarker
                color={'#8fccf7'}
                key={k}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                //radius={11 * Math.log(city["infected"] / 100)}
                radius={calcPropRadius(city["infected"])}
                fillOpacity={0.5}
                stroke={false}
              >
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>{city["State"]}</span><br></br>
                  <span>{"Infectados:" + " " + city["infected"]}</span><br></br>
                  <span ><p style={{ color: "red" }}>{"Mortes:" + " " + city["death"]}</p></span>
                </Tooltip>
              </CircleMarker>

              <CircleMarker
                key={y}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                //radius={11 * Math.log(city["infected"] / 100)}
                radius={calcPropRadius(city["death"])}
                fillOpacity={0.5}
                stroke={false}
                color={"red"}
              >

              </CircleMarker>
            </div>

          )
        })
        }




      </Map>
    </div>
  )
}

export default Maps;

/**style={{ height: "400px", width: "600px" }} */