'use client'

const Img = ({ img, pname }) => {
  return (
    <img
      src={img}
      alt={pname}
      className="w-[300px] h-[300px] shadow-2xl rounded-xl mx-auto object-cover object-top"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src =
          "https://plus.unsplash.com/premium_vector-1711987763353-9beb6f5d3907?q=80&w=880&auto=format&fit=crop";
      }}
    />
  );
};

export default Img;