"use client";

import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { CakeIcon, MapPin } from "lucide-react";
import Link from "next/link";
import { Button, Modal, Spinner } from "@heroui/react";

const DashBoardListing = () => {
  const { data } = useSession();

  const user = data?.user;

  const [listing, setListing] = useState([]);
  const [ex, setEx] = useState("");

  // modal state
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (user) {
        const res = await fetch(
          `http://localhost:5000/user/${user.email}`
        );

        const resData = await res.json();

        if (resData.length === 0) {
          setEx("No Listing Here");
        } else {
          setListing(resData);
        }
      }
    };

    getData();
  }, [user?.email]);

  // DELETE FUNCTION
  const handleDelete = async (id) => {
  
     const result =  await fetch(`http://localhost:5000/pet/${id}`, {
        method: "DELETE",
      });
    const res = await result.json();
    setOpen(false)
    console.log(res)

      
      
  }

  return (
    <div className="container-div mt-20 md:mt-40">
      <h1 className="section-heading text-center mb-10">
        My Listing
      </h1>

      {listing.length === 0 ? (
        <div className="h-screen text-2xl flex justify-center items-center container-div">
          {ex === "" ? <Spinner /> : <h1>{ex}</h1>}
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2">
          {listing.map((pet) => {
            return (
              <div
                key={pet._id}
                className="mx-auto w-[350px] flex justify-between flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)]"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={pet.imageUrl}
                    alt={pet.petName}
                    onError={(e) => {
                      e.currentTarget.src = "/images.png";
                    }}
                    className="block h-full w-full object-cover"
                  />

                  <div className="absolute bottom-4 right-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-[#185FA5]">
                      ${pet.adoptionFee}
                    </span>
                  </div>
                </div>

                <div className="px-[1.4rem] pb-6 pt-5">
                  <div className="mb-[10px] flex items-start justify-between">
                    <div>
                      <h2 className="m-0 text-[26px] font-bold tracking-[-0.5px] text-[#1a1a1a]">
                        {pet.petName}
                      </h2>

                      <p className="mt-[2px] text-[13px] text-[#888]">
                        {pet.breed} · {pet.species}
                      </p>
                    </div>
                  </div>

                  <div className="mb-[14px] flex gap-[14px] text-[13px] text-[#666]">
                    <span className="flex items-center gap-[5px]">
                      <CakeIcon size={16} />
                      {`${pet.age.value} ${pet.age.unit}`}
                    </span>

                    <span className="flex items-center gap-[5px]">
                      <MapPin size={16} />
                      {pet.location?.city},{" "}
                      {pet.location?.state}
                    </span>
                  </div>

                  <div className="flex gap-[10px]">
                    {/* MODAL */}
                    <Modal open={open} onOpenChange={setOpen}>
                      <Button
                        onPress={() => setOpen(true)}
                        className="flex p-3 h-10 w-full justify-center rounded-xl bg-[#1D9E75] text-sm font-semibold text-white"
                      >
                        Delete
                      </Button>

                      <Modal.Backdrop>
                        <Modal.Container>
                          <Modal.Dialog>
                            <Modal.CloseTrigger />

                            <Modal.Header>
                              <Modal.Heading>
                                <h1 className="font-bold text-xl">
                                  Delete This Pet : {pet.petName}
                                </h1>
                              </Modal.Heading>
                            </Modal.Header>

                            <Modal.Body>
                              Are you sure?
                            </Modal.Body>

                            <Modal.Footer>
                              <button
                                className="btn-primary btn"
                                onClick={() =>
                                  handleDelete(pet._id)
                                }
                                onPress={() => setOpen(false)}
                              >
                                Delete
                              </button>
                            </Modal.Footer>
                          </Modal.Dialog>
                        </Modal.Container>
                      </Modal.Backdrop>
                    </Modal>

                    <Link
                      href={`/${pet._id}/${pet.petName}`}
                      className="flex p-3 w-full justify-center rounded-xl h-10 bg-[#1D9E75] text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DashBoardListing;