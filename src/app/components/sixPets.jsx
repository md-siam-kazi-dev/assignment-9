import React from 'react'
import PetCard from './petCard';

const SixPets =async () => {
    const getData = async () => {
        const res = await fetch('http://localhost:5000/6pets');
        const data = await res.json();
        return data;
    }
    const data = await getData();
    console.log(data)
  return (
    <div className='container-div mt-40'>
        <h1 className='section-heading mb-20'>Featured Pet</h1>
        <div className='pet-container grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3'>
            {data.map(pet => {
              return  <PetCard key={pet._id} pet={pet}></PetCard>
            })}
        </div>
    </div>
  )
}

export default SixPets