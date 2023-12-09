import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '../../Action/Actions';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

// Utility function to get a value from local storage or use a default value
const getLocalStorageItem = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue || defaultValue;
};

const Navbar = () => {
  // Setting up local state using the useState hook
  const [isOpen, setIsOpen] = useState(false);
  const [displayOnClick, setDisplayOnClick] = useState(false);

  const dispatch = useDispatch();

  // Accessing specific data from the global state using the useSelector hook
  const { Tickets, User } = useSelector(state => state. Fetch_Data_Reducer );

  // Initializing local state for grouping and ordering values, using local storage as default values
  const [groupValue, setGroupValue] = useState(() => getLocalStorageItem('group', 'status'));
  const [orderValue, setOrderValue] = useState(() => getLocalStorageItem('order', 'priority'));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleGroupValue = (e, valueBool) => {
    const selectedValue = e.target.value;
    if (valueBool) {
      setGroupValue(selectedValue);
      localStorage.setItem('group', selectedValue);
    } else {
      setOrderValue(selectedValue);
      localStorage.setItem('order', selectedValue);
    }
    setDisplayOnClick(!displayOnClick);
  };

  useEffect(() => {
    const fetchData = () => {
      const dataParams = groupValue === 'user' ? { Tickets, User } : Tickets;
      dispatch(selectData(groupValue, dataParams, orderValue));
    };

    fetchData();
  }, [Tickets, dispatch, groupValue, User, orderValue]);

  return (
    <div className="navbar-container">
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
          Display  
          <FontAwesomeIcon icon={faAngleDown} style={{ paddingLeft: "6px" }} />
        </button>
        <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
          <div className="row1">
            <label>Grouping</label>
            <select value={groupValue} onChange={(e) => handleGroupValue(e, true)} name="group" id="group">
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="row1">
            <label>Ordering</label>
            <select value={orderValue} onChange={(e) => handleGroupValue(e, false)} className="selectStyle" name="order" id="order">
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;