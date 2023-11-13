
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = 'https://neon-sunshine-4a5699.netlify.app';
function Roster() {
  const [data, setData] = useState({ members: [] });
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14;

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
    console.log('Imherein2')
    try {

      const response = await axios.get(`/api/data`);
      console.log('Response:', response.data);
  
      if (response.data.length > 0) {
        setData(response.data[0]);
        console.log('Imherein2')
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
    <div className="data">
      <h1>Sweatshop Roster</h1>
      {/* <button onClick={handleFetchAndSaveData} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch and Save Data'}
      </button> */}
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Level</th>
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
            </tr>
          ))}
        </tbody>
      </table>
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
    </div>
  );
}

export default Roster;