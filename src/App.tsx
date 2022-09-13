import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Inventory from './views/inventory';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  console.log(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
