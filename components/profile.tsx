// Las cosas de bootstrap, hay que renderizarlas en el server, por eso se importan aquí
//
//"use client";
import { Address, AddressJSON } from "@/database/address";
import { Auction, AuctionJSON } from "@/database/auctions";
import { Bid, BidJSON } from "@/database/bid";
import { User, UserJSON } from "@/database/users";
import { ReviewJSON, Review } from "@/database/reviews";
//import './TuEstilo.css'; // Asegúrate de tener un archivo de estilo personalizado
import React from "react";

interface profileProps {
  user: UserJSON;
  address: AddressJSON;
  auctions: AuctionJSON[];
  bids : BidJSON[];
  auctionsAchieved: AuctionJSON[];
  //reviews: ReviewJSON[];
}

export async function Profile(props: profileProps) {
  const user = User.FromJSON(props.user);
  const address = Address.FromJSON(props.address);
  const auctions = props.auctions.map(auction => Auction.FromJSON(auction));
  const bids = props.bids.map(bid => Bid.FromJSON(bid));
  const auctionsAchieved = props.auctionsAchieved.map(auction => Auction.FromJSON(auction));
  //const reviews = props.reviews.map(review => Review.FromJSON(review));

  
  


  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#0000" }}>
      <div className="py-5 h-100 container">
        <div className="justify-content-center align-items-center h-100 row">
          <div className="col-lg-9 col-xl-7">
            <div className="card">
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#000", height: "200px" }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" style={{ width: "150px", zIndex: "1" }} />
                  <button className="btn btn-outline-dark" style={{ height: "36px", overflow: "visible" }}>
                    Edit profile
                  </button>
                </div>
                <div className="ms-4" style={{ marginTop: "130px" }}>
                  <h5>{user.UserName}</h5>
                  <p>{address.Localidad}</p>
                  <p>Rating: 4,5 /5⭐</p>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="mb-1 h5">{auctions.length}</p>
                    <p className="small text-muted mb-0">Subastas publicadas</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">{bids.length}</p>
                    <p className="small text-muted mb-0">Pujas realizadas</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">{auctionsAchieved.length}</p>
                    <p className="small text-muted mb-0">Subastas conseguidas</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">{}</p>
                    <p className="small text-muted mb-0">Reviews</p>
                  </div>
                </div>
              </div>
              <div className="card-body text-black p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">Recent auctions</p>
                  <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                </div>
                <div className="row">
                  {/* Aquí puedes agregar contenido para las subastas recientes */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
