// frontend-app/src/components/DataForm.js
import React, { useState } from 'react';
import axios from 'axios';

function DataForm() {
  const [formData, setFormData] = useState({
    character: {
      key: {
        href: '',
      },
      name: '',
      id: 0,
      realm: {
        key: {
          href: '',
        },
        id: 0,
        slug: '',
      },
      level: 0,
      playable_class: {
        key: {
          href: '',
        },
        id: 0,
      },
      playable_race: {
        key: {
          href: '',
        },
        id: 0,
      },
      rank: 0,
    },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/data', formData);
      console.log('Data saved:', response.data);
      // Reset the form fields or show a success message
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle the error (e.g., display an error message)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* Render form inputs for each field */}
        <input type="text" name="character.name" placeholder="Character Name" value={formData.character.name} onChange={handleInputChange} />
        <input type="number" name="character.id" placeholder="Character ID" value={formData.character.id} onChange={handleInputChange} />
        {/* ... Repeat for other fields ... */}
        <button type="submit">Save Data</button>
      </form>
    </div>
  );
}

export default DataForm;
