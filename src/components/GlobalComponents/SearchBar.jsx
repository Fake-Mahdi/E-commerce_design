import React, { useState, useEffect } from 'react';
import '../../styles/style.css';
import { useNavigate } from 'react-router-dom';
const SearchBar = ({ products }) => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  // Function to filter and merge data
  const displayData = (searchTerm) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    console.log('Search Term:', searchTerm);


    const filteredResults = products.filter(item =>
      item.productName.toLowerCase().includes(lowerCaseTerm)
    );
    console.log('Filtered Results:', filteredResults);

    setResults(filteredResults);
    setIsDropdownOpen(filteredResults.length > 0);
  };

  // Handle input changes
  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    displayData(value);
  };


  const handleClickOutside = (event) => {
    if (!event.target.closest('.search-bar')) {
      setIsDropdownOpen(false);
    }
  };

  const handleButtonClick = (productId , productType , e) => {
    navigate(`/product/${productId}/${productType}`);
    setIsDropdownOpen(false);
    setInput('');
};

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar">
      <div>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="I Search For..."
        />
      </div>
      <div>
        <button type="button" id="btn">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          {results.map((item) => (
            <div key={item.id} onClick={() => handleButtonClick(item.id , item.type)}  className="dropdown-item">
              <strong>{item.productName}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
