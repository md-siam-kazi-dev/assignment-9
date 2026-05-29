'use client'
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PetCard from '../components/petCard';
import AllpetsLoading from './loading';

const AllPage = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const getData = async (sQ = '') => {
    setLoading(true);

    const res = await fetch(
      `http://assignment-9-backend-steel.vercel.app/allpets${sQ ? `?search=${sQ}` : ''}`
    );

    const dataa = await res.json();
    setData(dataa);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []); 
  const handleSearch = async () => {
    await getData(search);
    if(search){
      router.push(`/allpets?search=${search}`);
    }else{
      router.push('/allpets')
    }
  };

  return (
    <div className='container-div mt-20 mb-20 md:mt-40 '>
      
      <h1 className='section-heading mb-10'>
        All Pets For Adoption
      </h1>

     
      <div className='w-fit flex gap-1 mb-10 mt-10 mx-auto'>
        <input
          className='input text-black border rounded-2xl mx-auto'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search pets for adoption"
        />

        <button
          onClick={handleSearch}
          className='btn btn-primary rounded-2xl'
        >
          <SearchIcon />
          Search
        </button>
      </div>

     
      <div className={`pet-container ${!loading && 'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-fit'}  gap-4  mx-auto`}>

        {loading ? (
          <AllpetsLoading />
        ) : data.length === 0 ? (
          <p className="text-center">No pets found</p>
        ) : (
          data.map((pet) => (
            <PetCard key={pet._id} pet={pet} />
          ))
        )}

      </div>
    </div>
  );
};

export default AllPage;