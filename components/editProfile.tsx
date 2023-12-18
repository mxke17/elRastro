"use client";
import { AddressJSON } from "@/database/address";
import { UserJSON } from "@/database/users";
import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { UpdateAddress } from "@/database/address_ops";

//import { User } from "@/database/users";

interface profileProps {
    user: UserJSON;
    address: AddressJSON;

}
export function EditUser(props: profileProps) {
    //const user = User.FromJSON(props.user);
    //const address = Address.FromJSON(props.address);
    const [userName, setUserName] = useState(props.user["Nombre usuario"]);
    const [email, setEmail] = useState(props.user.Email);
    const [address, setAddress] = useState(props.user.Direccion);
    const [foto, setFoto] = useState(props.user.Foto);
    const [addressID, setAddressID] = useState(props.address.ID);
    const [calle, setCalle] = useState(props.address.Calle);
    const [codigoPostal, setCodigoPostal] = useState(props.address.CodigoPostal);
    const [localidad, setLocalidad] = useState(props.address.Localidad);
    const [provincia, setProvincia] = useState(props.address.Provincia);
    const [numero, setNumero] = useState(props.address.Numero.toString());
    const [pais, setPais] = useState(props.address.Pais);



    const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userName = event.target.value;
        if (userName) {
            setUserName(userName);
        }
    };

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        if (email) {
            setEmail(email);
        }
    };

    const handleAddressID = (event: React.ChangeEvent<HTMLInputElement>) => {
        const addressID = event.target.value;
        if (addressID) {
            setAddressID(addressID);
        }
    };

    const handleAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        const address = event.target.value;
        if (address) {
            setAddress(address);
        }
    };

    const handleFoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const foto = event.target.value;
        if (foto) {
            setFoto(foto);
        }
    };

    const handleCalle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const calle = event.target.value;
        if (calle) {
            setCalle(calle);
        }
    };

    const handleCodigoPostal = (event: React.ChangeEvent<HTMLInputElement>) => {
        const codigoPostal = event.target.value;
        if (codigoPostal) {
            setCodigoPostal(codigoPostal);
        }
    };


    const handleLocalidad = (event: React.ChangeEvent<HTMLInputElement>) => {
        const localidad = event.target.value;
        if (localidad) {
            setLocalidad(localidad);
        }
    };

    const handleProvincia = (event: React.ChangeEvent<HTMLInputElement>) => {
        const provincia = event.target.value;
        if (provincia) {
            setProvincia(provincia);
        }
    };

    const handleNumero = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numero = event.target.value;
        if (numero) {
            setNumero(numero);
        }
    };

    const handlePais = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pais = event.target.value;
        if (pais) {
            setPais(pais);
        }
    };



    const handleSumbit = (event: FormEvent) => {
        event.preventDefault();

        UpdateAddress({
            ID: addressID,
            Calle: calle,
            ["Codigo postal"]: codigoPostal,
            Localidad: localidad,
            Provincia: provincia,
            Numero: parseInt(numero),
            Pais: pais,
        });

        //window.location.href = "/home";
    };

    return (<>
        <Form onSubmit={handleSumbit}>
            <Form.Group controlId="formAddressID">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder={props.address.ID} onChange={handleAddressID} />
            </Form.Group>

            <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder={props.user["Nombre usuario"]} onChange={handleUserName} />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder={props.user.Email} onChange={handleEmail} />
            </Form.Group>

            <Form.Group controlId="formAddress">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder={props.user.Direccion} onChange={handleAddress} />
            </Form.Group>

            <Form.Group controlId="formPicture">
                <Form.Label>Foto</Form.Label>
                <Form.Control type="text" placeholder={props.user.Foto} onChange={handleFoto} />
            </Form.Group>



            <Form.Group as={Row}>
                <Form.Label column sm="2">Calle</Form.Label>
                <Col sm="4">
                    <Form.Control type="text" placeholder={props.address.Calle} onChange={handleCalle} />
                </Col>

                <Form.Label column sm="2">Código Postal</Form.Label>
                <Col sm="4">
                    <Form.Control type="text" placeholder={props.address.CodigoPostal} onChange={handleCodigoPostal} />
                </Col>
            </Form.Group>

            <Form.Group controlId="formCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" placeholder={props.address.Localidad} onChange={handleLocalidad} />
            </Form.Group>


            <Form.Group controlId="formProvince">
                <Form.Label>Provincia</Form.Label>
                <Form.Control type="text" placeholder={props.address.Provincia} onChange={handleProvincia} />
            </Form.Group>

            <Form.Group controlId="formNumber">
                <Form.Label>Numero</Form.Label>
                <Form.Control type="text" placeholder={props.address.Numero.toString()} onChange={handleNumero} />
            </Form.Group>


            <Form.Group controlId="formCountry">
                <Form.Label>Pais</Form.Label>
                <Form.Control type="text" placeholder={props.address.Pais} onChange={handlePais} />
            </Form.Group>




            <Button variant="primary" type="submit">
                Actualizar perfil
            </Button>
        </Form>
    </>);
}