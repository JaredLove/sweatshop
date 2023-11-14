
import React, { useState, useEffect } from 'react';
import './roster.css';
import armory from "../assets/images/link.png";
function Roster() {
  const [data, setData] = useState({ members: [] });
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;
  // const url = 'http://localhost:3001';

  // const handleFetchAndSaveData = async () => {
  //   if (loading) {
  //     return; // Return early if a request is already in progress
  //   }

  //   setLoading(true);
  //   try {
  //     await axios.post(`http://localhost:3001/api/fetchAndSaveData`);
  //     fetchData();
  //   } catch (error) {
  //     console.error('Error fetching and saving data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    fetchData();
    console.log('Imhere')
  }, []);


  const fetchData = async () => {
    console.log('Imherein2');
    try {
      const response = await fetch(`/api/data`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Response:', data);
  
      if (data.length > 0) {
        setData(data[0]);
        console.log('Imherein2');
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
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  console.log(data);
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
        <h2>Officers</h2>
        <p>N/A</p>
        </li>
        </ul>
        </div>
      {/* <button onClick={handleFetchAndSaveData} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch and Save Data'}
      </button> */}
      <h2>Members</h2>      
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
        {totalPages > 3 && currentPage < totalPages - 2 && (
          <>
            <button onClick={() => setCurrentPage(totalPages - 1)}>{totalPages - 1}</button>
            <button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
          </>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Level</th>
            <th>Class</th>
            <th>Armory</th>
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
                  ? 'Officer'
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
              <td>{member.character.name}</td>
              <td>{member.character.level}</td>
              <td>{member.character.playable_class.id === 1 
                  ? 'Warrior'
                  :member.character.playable_class.id === 2 
                  ? 'Paladin'
                  :member.character.playable_class.id === 3
                  ? 'Hunter'
                  :member.character.playable_class.id === 4
                  ? 'Rogue'
                  :member.character.playable_class.id === 5
                  ? 'Priest'
                  :member.character.playable_class.id === 6
                  ? 'Death Knight'
                  :member.character.playable_class.id === 7
                  ? 'Shaman'
                  :member.character.playable_class.id === 8
                  ? 'Mage'
                  :member.character.playable_class.id === 9
                  ? 'Warlock'
                  :member.character.playable_class.id === 10
                  ? 'Monk'
                  :member.character.playable_class.id === 11
                  ? 'Druid'
                  :member.character.playable_class.id === 12
                  ? 'Demon Hunter'
                  :member.character.playable_class.id === 13
                  ? 'Evoker'
                  :'Unknown'}</td>
              <td>
                <a href={`https://worldofwarcraft.com/en-us/character/us/${member.character.realm.slug}/${member.character.name}`} >
                  <img src={armory} alt="Armory" className='arm-icon'/>
                </a> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    </section>
  );
}

export default Roster;