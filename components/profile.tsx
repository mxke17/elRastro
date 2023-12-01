// Las cosas de bootstrap, hay que renderizarlas en el server, por eso se importan aquí
//
"use client"; 
import {User } from "@/database/users";
//import {Address } from "@/database/address";
//import Figure from "react-bootstrap/Figure";
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from "mdb-react-ui-kit";
import { GetAddress } from "@/database/address";
//import { AuctionList } from "./auctionList";
//import { GetAllAuctionsOfUser } from "@/database/auctions";


interface profileProps{
    user: User;
    
}
interface adrressProps{
  address : Address;
}
//
export function Profile(props: profileProps,addressprops: adrressProps ){
    const user = props.user;
    const addres = addressprops.address;
    //const user = null;
    console.log("Nombre usuario:");
    console.log(user.UserName);
 
    
return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#000", height: "200px" }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: "150px", zIndex: "1" }} />
                  <MDBBtn outline color="dark" style={{height: "36px", overflow: "visible"}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-4" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">OASOAOOO</MDBTypography>
                  <MDBCardText>User.direccion.city</MDBCardText>
                <MDBCardText>Rating: 4,5 /5⭐</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">Subastas(user).size</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Subastas publicadas</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">Pujas(user).size</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Pujas realizadas</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">Pujas.(user).last</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Pujas conseguidas</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">Subastas(user).size</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Reviews</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                
                
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent auctions</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBRow>
                    

                </MDBRow>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Profile;