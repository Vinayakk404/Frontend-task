
import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';
import axios from 'axios';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { requestData } from './Action/Actions';
import Main from './Components/Main/Main';

// Functional component definition for the main application
const App = () => {
  // Initializing the Redux dispatch function
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  // Accessing specific data from the global state using the useSelector hook
  const { Tickets } = useSelector(state => state.Fetch_Data_Reducer );

  // useEffect hook to dispatch the requestData action on component mount
  useEffect(() => {
    dispatch(requestData());
  }, [dispatch]); // Dependency array ensures that the effect runs only once on mount

  // Conditional rendering based on whether data is available
  return !Tickets ? (
    <div>Loading...</div> // Display a loading message if data is not available
  ) : (
    // Render the main application components when data is available
    <>
      <Navbar /> 
      <div style={{ marginLeft: "4px", marginRight: "4px" }}>
        <Main />
      </div>
    </>
  );
};

// Exporting the App component as the default export
export default App;
