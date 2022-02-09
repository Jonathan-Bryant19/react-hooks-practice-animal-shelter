import React from "react";

import Pet from "./Pet";

function PetBrowser( {pets, onAdoptPet} ) {
  
  const petCard = pets.map(pet => {
    // console.log(pet.id)
    return <Pet key={pet.id} id={pet.id} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} isAdopted={pet.isAdopted} gender={pet.gender} onAdoptPet={onAdoptPet}/>
  })
  
  return (
    <div className="ui cards">
      {petCard}
    </div>
  )
}

export default PetBrowser;
