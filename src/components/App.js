import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(e) {
    setFilters({ type: e.target.value })
  }

  // Adding in initial fetch of everything to make sure onAdoptPet works
  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then(r => r.json())
      .then(setPets)
  }, [])



  function onFindPetsClick() {
    let fetchURL = ``
    if (filters.type === 'all') {
      fetchURL = 'http://localhost:3001/pets'
    } else {
      fetchURL = `http://localhost:3001/pets?type=${filters.type}`
    }
    fetch(fetchURL)
      .then(r => r.json())
      .then(setPets)
  }

  function onAdoptPet(id) {
    const foundPet = pets.find(pet => pet.id === id)
    foundPet.isAdopted = true
    setPets([...pets])
  }



  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
