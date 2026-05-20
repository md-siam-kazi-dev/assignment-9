import React from 'react'
import PetCard from '../components/petCard';

const AllPage =async () => {
    const getData = async () => {
        const res = await fetch('http://localhost:5000/allpets');
        const data = await res.json();
        return data;
    }
    const data = await getData();
    console.log(data)
  return (
    <div className='container-div mt-20 md:mt-40 '>
            <h1 className='section-heading mb-10'>All Pets</h1>
            <div className='pet-container grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4'>
                {data.map(pet => {
                  return  <PetCard pet={pet}></PetCard>
                })}
            </div>
        </div>
  )
}

export default AllPage