import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import {Slide} from 'react-slideshow-image';

import Image1 from '../images/taani.jpg';
import Image2 from '../images/cinn.JPG';
import Image3 from '../images/sri.jpg';
import Image4 from '../images/taani2.jpg';
import Image5 from '../images/tea.JPG';
import Image6 from '../images/tig.JPG';
import Image7 from '../images/hor4.jpg';
import Image8 from '../images/sea.jpg';
import Image9 from '../images/hor1.jpg';
import Image10 from '../images/sunset.jpg';
import Image11 from '../images/nu.jpg';

import Map from '../images/map.jpg';
import Beach from '../images/beach.jpg';
import Food from '../images/food.jpg';
import Elep from '../images/elep.JPG';
import Sea from '../images/sea4.jpg';
import Monk from '../images/monk.jpg';
import Buddha from '../images/buddha.jpg';
import Buddha2 from '../images/buddha2.jpg';
import Yapa from '../images/yapa.jpg';
import Pollo from '../images/polonnaru.jpg';
import Cave from '../images/cave.png';
import Leo1 from '../images/leo1.jpg';
import Loku from '../images/loku.jpg';

<link rel = "stylesheet" href = "Home.css"/>

const slideImages = [
    Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11
  ];

  const slideImages1 = [
    Monk,Buddha,Buddha2,Yapa,Pollo,Cave
  ];

const Home = () => {
    return (
        <div className = "top">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Little Adam's Peak - Ella</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Cinnemon Island - Balapitiya</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Sri-Pada/Adam's Peak</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>Nine Arch Bridge</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              <span>Damro Tea Plantation - Nuwara-eliya</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              <span>Yala National Park</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
              <span>Hortain Plains</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
              <span>Hikkaduwa Beach</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
              <span>Hortain Plains</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[9]})`}}>
              <span>Sunset - Hikkaduwa Beach</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[10]})`}}>
              <span>Ambewela</span>
            </div>
          </div>
        </Slide>

        <div className = "split">
           <div className = "left">
                <div className = "home2">
                   <h1 className = "deshead">Why you should visit Sri Lanka?</h1>
                   <p>The tropical climate, beautiful beaches and incredible food of Sri Lanka 
                     are just some of the many reasons to include the South Asian country on your 
                     travel wish list. In this island nation known as the Pearl of the Indian Ocean, 
                     you can learn of its ancient history by visiting the ancient rock fortress of Sigiriya 
                     in the Cultural Triangle, witness a giant gathering of Asian elephants in Minneriya 
                     National Park or catch some waves at Arugam Bay or Hikkaduwa.</p>
                     <p>Sri Lanka is a great place to visit for water sport and wildlife 
                       enthusiasts and a haven for history buffs. As well as a guide to some of the best 
                       things to see and do in Sri Lanka, we’ve picked a selection of places to stay 
                       to help you put together your travel plan.</p>
               </div>
           </div>
           <div className = "right">
               <div className = "home2">
                  <h1 className = "maphead">Tourist map of Sri Lanka</h1>
                  <img className = "map" src = {Map} alt = "" />
               </div>
           </div>
        </div>

        <div className = "split2">
          <div className = "left2">
          <h1 className = "rea1">A tropical climate all year round</h1>
          <p>
          Sri Lanka experiences two monsoon seasons which affect different parts of the 
          country during different months. This means that, at any given time, travellers can expect 
          a sunny climate somewhere on the island. The southwest monsoon is between May and July, which 
          leaves the north rain-free, and the northeast monsoon is between October and January, which 
          leaves the south ready to be explored. Make the most of the weather with a stay at one of the best 
          luxury hotels in Sri Lanka.</p>
          <img className = "beach" src = {Beach} alt = ""/>
          </div>
          <div className = "right2">
           <h1 className = "headfood">Amazing food</h1>
           <p>Sri Lanka is blessed with a distinctive cuisine flavoured with exotic spices. 
             The famed rice and curry spread includes an intense and fragrant lentil and chicken or 
             fish curry with rice and vegetables on the side. The fish curry is highly recommended by 
             locals. Kottu is a popular street food of Tamil origin with chopped roti flatbread and usually 
             egg, meat, vegetables and salna — a spicy sauce on the side — and is not to be missed. 
             Make sure you try egg hoppers too.</p>
             <img className = "food" src = {Food} alt = ""/>
          </div>
        </div>
        
        <div className = "split3">
          <div className = "left3">
             <h1 className = "rea1">Rare land animals</h1>
             <p>
                Sri Lanka boasts 26 national parks and two marine parks. The most well known of them, 
                Yala National Park, has the highest density of leopards in the world, 215 species of bird, 
                mugger crocodiles and other reptiles, while the coastline bordering the park is a nesting spot 
                for five species of sea turtle. Adjacent to Yala is Udawalawe National Park, home to herds of 
                elephants and rare birds such as the changeable hawk-eagle and the serpent eagle.</p>
              <div className = "animals">
                   <div className = "aniLeft">
                      <img className = "ani1" src = {Leo1} alt = ""/>
                   </div>
                   <div className = "aniRight">   
                      <img className = "ani2" src = {Elep} alt = ""/>
                   </div>
             </div>
            </div>
          <div className = "right3">
           <h1 className = "headbeach">Glorious beaches</h1>
           <p>Sri Lanka has some of the most pristine coastline in Asia, with many unspoiled sandy beaches with 
             palm trees and turquoise waters. Mirissa is recommended for those looking to soak up the sun in peace, 
             while Unawatuna is better suited for those in the mood for beach parties. For adrenaline junkies, 
             Bentota, with its water activities such as kitesurfing and para-cycling, is the place to be.
             Make sure you check out the 10 best beach resorts in Sri Lanka to help you decide where to stay.</p>
             <img className = "sea" src = {Sea} alt = ""/>
          </div>
        </div>

        <div className = "split4">
          <div className = "left4">
          <h1 className = "rea1">Central highlands (Hill country) of Sri Lanka</h1>
          <p>
          Sri Lanka's Central Highlands of rushing waterfalls, plunging ravines and tea estates clinging 
          precariously to steep hillsides is one of the most beautiful mountainous areas of the world. It
           is a world away from the sweltering coastal lowlands. Indeed nothing encapsulates the scenic 
           diversity of Sri Lanka as much as the journey by road or rail from the humid urban melee of Colombo 
           to the Mediterranean climate of Kandy the Royal City & still further up to salubrious climate of 
           Nuwara Eliya (Little England).
           The train journey (slow Diesel locomotive trains) Colombo - Kandy - Hatton - Nanu Oya 
           (leads to Nuwara Eliya - Little England), Haputale, Bandarwela and Badulla is one the most 
           spectacular journeys of the world. The train passes through numerous unlit tunnels, a chorus of 
           shrieks by the travelling kids greeting each one; the train winds, twist & climbs all the through
            dramatic sceneries of green mountains, cascading waterfalls, rivers, deep ravines and brilliant 
            green tea plantations.</p>
          <img className = "sun" src = {Loku} alt = ""/>
          </div>
          <div className = "right4">
           <h1 className = "headfood">Riveting Ancient Cities</h1>
           <p>
          Sri Lanka's history dates back to more than 2500 years. These ancient cities and their 
          glorious remains that are temples, fortresses, statues and irigation feats still have the 
          ability to make people gaze at them with reverence. Ancient sites are considered to be archeological 
          gold mines because they are evidence to a very rich civilization. Most of the places are declared as World 
          Heritage Sites by the UNESCO. The oldest and the largest ancient city is Anuradhapura.</p>
           <Slide easing="ease">
                <div className="each-slide1">
                   <div style={{'backgroundImage': `url(${slideImages1[0]})`}}>
                      <span>Yapahuwa Ancient City</span>
                   </div>
                </div>
                <div className="each-slide1">
                  <div style={{'backgroundImage': `url(${slideImages1[1]})`}}>
                     <span>Polonnaruwa Ancient City</span>
                  </div>
                </div>
                <div className="each-slide1">
                  <div style={{'backgroundImage': `url(${slideImages1[2]})`}}>
                     <span>Polonnaruwa Ancient City</span>
                  </div>
                </div>
                <div className="each-slide1">
                  <div style={{'backgroundImage': `url(${slideImages1[3]})`}}>
                     <span>Yapahuwa Ancient City</span>
                  </div>
                </div>
                <div className="each-slide1">
                  <div style={{'backgroundImage': `url(${slideImages1[4]})`}}>
                     <span>Polonnaruwa Ancient City</span>
                  </div>
                </div>
                <div className="each-slide1">
                  <div style={{'backgroundImage': `url(${slideImages1[5]})`}}>
                     <span>Cave Temple - Dambulla</span>
                  </div>
                </div>
           </Slide>
          </div>
        </div>

         
      </div>
    )
}

export default Home;
