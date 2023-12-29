
import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import './roster.css';
import armory from "../assets/images/link.png";
import axios from 'axios';
// icons
import warrior from "../assets/icons/classicon_warrior.jpg";
import dk from "../assets/icons/classicon_deathknight.jpg";
import druid from "../assets/icons/classicon_druid.jpg";
import hunter from "../assets/icons/classicon_hunter.jpg";
import mage from "../assets/icons/classicon_mage.jpg";
import monk from "../assets/icons/classicon_monk.jpg";
import paladin from "../assets/icons/classicon_paladin.jpg";
import priest from "../assets/icons/classicon_priest.jpg";
import rogue from "../assets/icons/classicon_rogue.jpg";
import shaman from "../assets/icons/classicon_shaman.jpg";
import warlock from "../assets/icons/classicon_warlock.jpg";
import demonhunter from "../assets/icons/classicon_demonhunter.jpg";
import evoker from "../assets/icons/classicon_evoker.jpg";

//races
import alliance from "../assets/races/Alliance_15.jpg";
import horde from "../assets/races/Horde_15.jpg";

import humanMale from "../assets/races/human-male.jpg";
import humanFemale from "../assets/races/human-female.jpg";

import bloodMale from "../assets/races/bloodelf-male.jpg";
import bloodFemale from "../assets/races/bloodelf-female.jpg";

import darkIronFemale from "../assets/races/DarkIron_Female.jpg";
import darkIronMale from "../assets/races/DarkIron_Male.jpg";

import dreaneiFemale from "../assets/races/draenei-female.jpg";
import dreaneiMale from "../assets/races/draenei-male.jpg";

import dwarfFemale from "../assets/races/dwarf-female.jpg";
import dwarfMale from "../assets/races/dwarf-male.jpg";

import gnomeFemale from "../assets/races/gnome-female.jpg";
import gnomeMale from "..//assets/races/gnome-male.jpg";

import gobFemale from "../assets/races/goblin-female.jpg";
import gobMale from "../assets/races/goblin-male.jpg";

import hmFemale from "../assets/races/Highmountain_Female.jpg";
import hmMale from "../assets/races/Highmountain_Male.jpg";

import junkerFemale from "../assets/races/Junker_Female.jpg";
import junkerMale from "../assets/races/Junker_Male.jpg";

import ktFemale from "../assets/races/KulTiran_Female.jpg";
import ktMale from "../assets/races/KulTiran_Male.jpg";

import lfFemale from "../assets/races/Lightforged_Female.jpg";
import lfMale from "../assets/races/Lightforged_Male.jpg";

import nbFemale from "../assets/races/Nightborne_Female.jpg";
import nbMale from "../assets/races/Nightborne_Male.jpg";

import nfFemale from "../assets/races/nightelf-female.jpg";
import nfMale from "../assets/races/nightelf-male.jpg";

import orcFemale from "../assets/races/orc-female.jpg";
import orcMale from "../assets/races/orc-male.jpg";

import orcBrownFemale from "../assets/races/OrcBrown_Female.jpg";
import orcBrownmale from "../assets/races/OrcBrown_Male.jpg";

import taurenFemale from "../assets/races/tauren-female.jpg";
import taurenMale from "../assets/races/tauren-male.jpg";

import trollFemale from "../assets/races/troll-female.jpg";
import trollMale from "../assets/races/troll-male.jpg";

import undeadFemale from "../assets/races/undead-female.jpg";
import undeadMale from "../assets/races/undead-male.jpg";

import voidFemale from "../assets/races/VoidElf_Female.jpg";
import voidMale from "../assets/races/VoidElf_Male.jpg";

import vulFemale from "../assets/races/Vulpera_Female.jpg";
import vulMale from "../assets/races/Vulpera_Male.jpg";

import worgenFemale from "../assets/races/worgen-female.jpg";
import worgenMale from "../assets/races/worgen-male.jpg";

import zandaFemale from "../assets/races/Zandalari_Female.jpg";
import zandaMale from "../assets/races/Zandalari_Male.jpg";

import pandaFemale from "../assets/races/Pandaren_Female.jpg";
import pandaMale from "../assets/races/Pandaren_Male.jpg"

import dragFemale from "../assets/races/Dracthyr_Female.jpg";
import dragMale from "../assets/races/Dracthyr_Male.jpg"

// spec icons

import arms from "../assets/spec/warrior/arms.png";
import fury from "../assets/spec/warrior/fury.png";
import prot from "../assets/spec/warrior/protection.png";

import havoc from "../assets/spec/demonhunter/havoc.png";
import vengeance from "../assets/spec/demonhunter/vengeance.png";

import balance from "../assets/spec/druid/balance.png";
import feral from "../assets/spec/druid/feral.png";
import guardian from "../assets/spec/druid/guardian.png";
import resto from "../assets/spec/druid/restoration.png";

import bm from "../assets/spec/hunter/beastmastery.png";
import mark from "../assets/spec/hunter/marksman.png";
import surv from "../assets/spec/hunter/survival.png";

import arcane from "../assets/spec/mage/arcane.png";
import fire from "../assets/spec/mage/fire.png";
import frost from "../assets/spec/mage/frost.png";

import brew from "../assets/spec/monk/brewmaster.png";
import mist from "../assets/spec/monk/mistweaver.png";
import wind from "../assets/spec/monk/windwalker.png";

import holy from "../assets/spec/paladin/holy.png";
import protPal from "../assets/spec/paladin/protection.png";
import ret from "../assets/spec/paladin/retribution.png";

import disc from "../assets/spec/priest/discipline.png";
import holyPriest from "../assets/spec/priest/holy.png";
import shadow from "../assets/spec/priest/shadow.png";

import aff from "../assets/spec/warlock/affliction.png";
import demo from "../assets/spec/warlock/demonology.png";
import destro from "../assets/spec/warlock/destruction.png";

import blood from "../assets/spec/deathknight/blood.png";
import frostDk from "../assets/spec/deathknight/frost.png";
import unholy from "../assets/spec/deathknight/unholy.png";

import ele from "../assets/spec/shaman/elemental.png";
import enh from "../assets/spec/shaman/enhancement.png";
import restoSham from "../assets/spec/shaman/restoration.png";

import assrogue from "../assets/spec/rogue/assassination.png";
import outlaw from "../assets/spec/rogue/outlaw.png";
import sub from "../assets/spec/rogue/subtlety.png";








function Roster() {
  const [data, setData] = useState({ members: [] });
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const url = 'http://localhost:3001';

  // const handleFetchAndSaveData = async () => {
  //   if (loading) {
  //     return; // Return early if a request is already in progress
  //   }

  //   setLoading(true);
  //   try {
  //     await axios.post(`${url}/api/fetchAndSaveData`);
  //     fetchData();
  //   } catch (error) {
  //     console.error('Error fetching and saving data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await fetch(`/api/data`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      // console.log('Response:', data);
  
      if (data.length > 0) {
        setData(data[0]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Check if data.members is available before accessing it
  const members = data.members || [];

  // Calculate which items should be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = members.slice(indexOfFirstItem, indexOfLastItem);

  // Sort the current items by rank
  currentItems.sort((a, b) => a.character.rank - b.character.rank);

  // Calculate the total number of pages
  const totalPages = Math.ceil(members.length / itemsPerPage);
  // Create an array of page numbers (1, 2, 3, ...)
  // const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  // console.log(data);
  return (
    <section className="roster">
    <div className="data">
      <h1>Sweatshop Leaders</h1>
      <div className='leaders'>
        <ul>
        <li>
        <h2>Founder</h2>
        <p>Zujo</p>
        </li>
        <li>
        <h2>Co-Founders</h2>
        <p>Layton</p>
        <p>Ciz</p>
        </li>
        <li>
        <h2>OG's</h2>
        <p>Bubbajr</p>
        <p>Pun</p>
        </li>
        </ul>
        </div>
      {/* <button onClick={handleFetchAndSaveData} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch and Save Data'}
      </button> */}
   
    

      <div className="pagination"> 
      <div>
          <h1>Roster</h1> 
          </div>  
          <div>
          {/* Pagination component */}
          {/* Pass the necessary props to the Pagination component */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          </div>
        </div>

        <div className='table-container'>


      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Level</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((member, index) => (
            <tr key={index}>
              <td>
                {member.character.rank === 0
                  ? 'Founder'
                  : member.character.rank === 1
                  ? 'Co-Founder'
                  : member.character.rank === 2
                  ? 'OG'
                  : member.character.rank === 3
                  ? 'Veteran'
                  : member.character.rank === 4
                  ? 'Member'
                  : member.character.rank === 5
                  ? 'Novice'
                  : member.character.rank === 6
                  ? 'Initiate'
                  : 'Unknown'}
              </td>
              <td>
                <img src={member.character.additionalData.assets[0].value} alt='profile-img' className='profile-img'></img>
                <span className='name'>{member.character.name}</span>
              </td>
              <td>{member.character.level}</td>
              <td id='arm-icon'>
                {member.character.additionalData.faction === 'ALLIANCE'
                  ? <img src={alliance} alt="Alliance"  className='arm-icon'/>
                  : member.character.additionalData.faction === 'HORDE'
                  ? <img src={horde} alt="Horde"  className='arm-icon'/>
                  : 'Unknown'}
                {member.character.additionalData.activeSpec === 'Arms'
                  ? <img src={arms} alt="Warrior"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Fury'
                  ? <img src={fury} alt="Warrior"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Protection'
                  ? <img src={prot} alt="Warrior"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Elemental'
                  ? <img src={ele} alt="Shaman"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Enhancement'
                  ? <img src={enh} alt="Shaman"  className='arm-icon'/>
                  :member.character.playable_class.id === 7 && member.character.additionalData.activeSpec === 'Restoration'
                  ? <img src={restoSham} alt="Shaman"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Havoc'
                  ? <img src={havoc} alt="Demon Hunter"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Vengeance'
                  ? <img src={vengeance} alt="Demon Hunter"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Balance'
                  ? <img src={balance} alt="Druid"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Feral'
                  ? <img src={feral} alt="Druid"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Guardian'
                  ? <img src={guardian} alt="Druid"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Restoration'
                  ? <img src={resto} alt="Druid"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Beast Mastery'
                  ? <img src={bm} alt="Hunter"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Marksmanship'
                  ? <img src={mark} alt="Hunter"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Survival'
                  ? <img src={surv} alt="Hunter"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Arcane'
                  ? <img src={arcane} alt="Mage"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Fire'
                  ? <img src={fire} alt="Mage"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Frost'
                  ? <img src={frost} alt="Mage"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Brewmaster'
                  ? <img src={brew} alt="Monk"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Mistweaver'
                  ? <img src={mist} alt="Monk"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Windwalker'
                  ? <img src={wind} alt="Monk"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Holy'
                  ? <img src={holy} alt="Paladin"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Protection'
                  ? <img src={protPal} alt="Paladin"  className='arm-icon'/> 
                  :member.character.additionalData.activeSpec === 'Retribution'
                  ? <img src={ret} alt="Paladin"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Discipline'
                  ? <img src={disc} alt="Priest"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Holy'
                  ? <img src={holyPriest} alt="Priest"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Shadow'
                  ? <img src={shadow} alt="Priest"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Affliction'
                  ? <img src={aff} alt="Warlock"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Demonology'
                  ? <img src={demo} alt="Warlock"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Destruction'
                  ? <img src={destro} alt="Warlock"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Blood'
                  ? <img src={blood} alt="Death Knight"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Frost'
                  ? <img src={frostDk} alt="Death Knight"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Unholy'
                  ? <img src={unholy} alt="Death Knight"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Assassination'
                  ? <img src={assrogue} alt="Rogue"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Outlaw'
                  ? <img src={outlaw} alt="Rogue"  className='arm-icon'/>
                  :member.character.additionalData.activeSpec === 'Subtlety'
                  ? <img src={sub} alt="Rogue"  className='arm-icon'/>
                  
                  : 'Unknown'}
                {member.character.playable_class.id === 1 
                  ? <img src={warrior} alt="Warrior"  className='arm-icon'/>
                  :member.character.playable_class.id === 2 
                  ? <img src={paladin} alt="Paladin"  className='arm-icon'/>
                  :member.character.playable_class.id === 3
                  ? <img src={hunter} alt="Hunter"  className='arm-icon'/>
                  :member.character.playable_class.id === 4
                  ? <img src={rogue} alt="Rogue"  className='arm-icon'/>
                  :member.character.playable_class.id === 5
                  ? <img src={priest} alt="Priest"  className='arm-icon'/>
                  :member.character.playable_class.id === 6
                  ? <img src={dk} alt="Death Knight"  className='arm-icon'/>
                  :member.character.playable_class.id === 7
                  ? <img src={shaman} alt="Shaman"  className='arm-icon'/>
                  :member.character.playable_class.id === 8
                  ? <img src={mage} alt="Mage"  className='arm-icon'/>
                  :member.character.playable_class.id === 9
                  ? <img src={warlock} alt="Warlock"  className='arm-icon'/>
                  :member.character.playable_class.id === 10
                  ? <img src={monk} alt="Monk"  className='arm-icon'/>
                  :member.character.playable_class.id === 11
                  ? <img src={druid} alt="Druid"  className='arm-icon'/>
                  :member.character.playable_class.id === 12
                  ? <img src={demonhunter} alt="Demon Hunter"  className='arm-icon'/>
                  :member.character.playable_class.id === 13
                  ? <img src={evoker} alt="Evoker"  className='arm-icon'/>
                  :'Unknown'}               

                  
                  {member.character.playable_race.id === 1 && member.character.additionalData.gender === 'MALE'
                  ? <img src={humanMale} alt='human-male' />
                  :member.character.playable_race.id === 1 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={humanFemale} alt='human-female' />
                  : member.character.playable_race.id === 8 && member.character.additionalData.gender === 'MALE'
                  ? <img src={trollMale} alt='troll-male' />
                  :member.character.playable_race.id === 8 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={trollFemale} alt='troll-female' />
                  :member.character.playable_race.id === 11 && member.character.additionalData.gender === 'MALE'
                  ? <img src={dreaneiMale} alt='Draenei-male' />
                  :member.character.playable_race.id === 11 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={dreaneiFemale} alt='Draenei-female' />
                  : member.character.playable_race.id === 10 && member.character.additionalData.gender === 'MALE'
                  ? <img src={bloodMale} alt='bloodelf-male' />
                  : member.character.playable_race.id === 10 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={bloodFemale} alt='bloodelf-male' />
                  : member.character.playable_race.id === 4 && member.character.additionalData.gender === 'MALE'
                  ? <img src={nfMale} alt='nightelf-Male' />
                  : member.character.playable_race.id === 4 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={nfFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 3 && member.character.additionalData.gender === 'MALE'
                  ? <img src={dwarfMale} alt='humanMale' />
                  : member.character.playable_race.id === 3 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={dwarfFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 6 && member.character.additionalData.gender === 'MALE'
                  ? <img src={taurenMale} alt='humanMale' />
                  : member.character.playable_race.id === 6 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={taurenFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 5 && member.character.additionalData.gender === 'MALE'
                  ? <img src={undeadMale} alt='humanMale' />
                  : member.character.playable_race.id === 5 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={undeadFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 2 && member.character.additionalData.gender === 'MALE'
                  ? <img src={orcMale} alt='humanMale' />
                  : member.character.playable_race.id === 2 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={orcFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 7 && member.character.additionalData.gender === 'MALE'
                  ? <img src={gnomeMale} alt='humanMale' />
                  : member.character.playable_race.id === 7 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={gnomeFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 31 && member.character.additionalData.gender === 'MALE'
                  ? <img src={zandaMale} alt='humanMale' />
                  : member.character.playable_race.id === 31 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={zandaFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 9 && member.character.additionalData.gender === 'MALE'
                  ? <img src={gobMale} alt='humanMale' />
                  : member.character.playable_race.id === 9 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={gobFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 32 && member.character.additionalData.gender === 'MALE'
                  ? <img src={ktMale} alt='humanMale' />
                  : member.character.playable_race.id === 32 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={ktFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 30 && member.character.additionalData.gender === 'MALE'
                  ? <img src={lfMale} alt='humanMale' />
                  : member.character.playable_race.id === 30 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={lfFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 28 && member.character.additionalData.gender === 'MALE'
                  ? <img src={hmMale} alt='humanMale' />
                  : member.character.playable_race.id === 28 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={hmFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 27 && member.character.additionalData.gender === 'MALE'
                  ? <img src={nbMale} alt='humanMale' />
                  : member.character.playable_race.id === 27 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={nbFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 22 && member.character.additionalData.gender === 'MALE'
                  ? <img src={worgenMale} alt='humanMale' />
                  : member.character.playable_race.id === 22 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={worgenFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 34 && member.character.additionalData.gender === 'MALE'
                  ? <img src={darkIronMale} alt='humanMale' />
                  : member.character.playable_race.id === 34 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={darkIronFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 35 && member.character.additionalData.gender === 'MALE'
                  ? <img src={vulMale} alt='humanMale' />
                  : member.character.playable_race.id === 35 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={vulFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 36 && member.character.additionalData.gender === 'MALE'
                  ? <img src={orcBrownmale} alt='humanMale' />
                  : member.character.playable_race.id === 36 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={orcBrownFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 24 && member.character.additionalData.gender === 'MALE'
                  ? <img src={pandaMale} alt='humanMale' />
                  : member.character.playable_race.id === 24 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={pandaFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 26 && member.character.additionalData.gender === 'MALE'
                  ? <img src={pandaMale} alt='humanMale' />
                  : member.character.playable_race.id === 26 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={pandaFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 29 && member.character.additionalData.gender === 'MALE'
                  ? <img src={voidMale} alt='humanMale' />
                  : member.character.playable_race.id === 29 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={voidFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 52 && member.character.additionalData.gender === 'MALE'
                  ? <img src={dragMale} alt='humanMale' />
                  : member.character.playable_race.id === 52 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={dragFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 70 && member.character.additionalData.gender === 'MALE'
                  ? <img src={dragMale} alt='humanMale' />
                  : member.character.playable_race.id === 70 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={dragFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 37 && member.character.additionalData.gender === 'MALE'
                  ? <img src={junkerMale} alt='humanMale' />
                  : member.character.playable_race.id === 37 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={junkerFemale} alt='nightelf-Female' />
                  : member.character.playable_race.id === 25 && member.character.additionalData.gender === 'MALE'
                  ? <img src={pandaMale} alt='humanMale' />
                  : member.character.playable_race.id === 25 && member.character.additionalData.gender === 'FEMALE'
                  ? <img src={pandaFemale} alt='nightelf-Female' />
                  :'Unknown'} 

                  <a href={`https://worldofwarcraft.com/en-us/character/us/${member.character.realm.slug}/${member.character.name}`} target='_blank' rel='noreferrer' >
                  <img src={armory} alt="Armory" className='arm-icon'/></a> 
                  </td> 

            </tr>
          ))}
        </tbody>
      </table>
        </div>
    </div>
    </section>
  );
}

export default Roster;