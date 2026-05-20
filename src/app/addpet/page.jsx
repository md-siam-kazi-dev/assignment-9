'use client'
const AddPage = () => {
    const handleAddPet = (e) => {
        e.preventDefault()
    }
  return (
    <div className="container-div mt-40">
      <h1 className="section-heading mb-20">Add Pet</h1>{" "}
      <form className="space-y-4 " onSubmit={handleAddPet}>
        {/* Pet Name */}
        <div>
          <label className="block mb-1 font-medium">Pet Name</label>
          <input
            type="text"
            name="petName"
            placeholder="Enter pet name"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Species */}
        <div>
          <label className="block mb-1 font-medium">Species</label>
          <input
            type="text"
            name="species"
            placeholder="Cat / Dog"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Breed */}
        <div>
          <label className="block mb-1 font-medium">Breed</label>
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Age */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Age Value</label>
            <input
              type="number"
              name="ageValue"
              placeholder="1"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Age Unit</label>
            <select name="ageUnit" className="w-full border p-2 rounded">
              <option value="months">Months</option>
              <option value="years">Years</option>
            </select>
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select name="gender" className="w-full border p-2 rounded">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="https://..."
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Health Status */}
        <div>
          <label className="block mb-1 font-medium">Health Status</label>
          <input
            type="text"
            name="healthStatus"
            placeholder="Healthy"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Vaccinated */}
        <div>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="isVaccinated" />
            Vaccinated
          </label>
        </div>

        {/* Vaccines */}
        <div>
          <label className="block mb-1 font-medium">Vaccines</label>
          <input
            type="text"
            name="vaccines"
            placeholder="FVRCP, Rabies, FeLV"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Location */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">City</label>
            <input
              type="text"
              name="city"
              placeholder="Seattle"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">State</label>
            <input
              type="text"
              name="state"
              placeholder="WA"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Country</label>
            <input
              type="text"
              name="country"
              placeholder="USA"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* Adoption Fee */}
        <div>
          <label className="block mb-1 font-medium">Adoption Fee</label>
          <input
            type="number"
            name="adoptionFee"
            placeholder="85"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Write description..."
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        {/* Owner Email */}
        <div>
          <label className="block mb-1 font-medium">Owner Email</label>
          <input
            type="email"
            name="ownerEmail"
            placeholder="example@gmail.com"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Listed At */}
        <div>
          <label className="block mb-1 font-medium">Listed Date</label>
          <input
            type="datetime-local"
            name="listedAt"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Is Adopted */}
        <div>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="isAdopted" />
            Already Adopted
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default AddPage;
