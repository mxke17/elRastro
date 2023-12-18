"use client";
import { AddressJSON } from "@/database/address";
import { UserJSON } from "@/database/users";
import { FormEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
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
    const [address, setAddress] = useState(props.user.Direccion);
    const [addressID, setAddressID] = useState(props.address._id);
    const [calle, setCalle] = useState(props.address.Calle);
    const [codigoPostal, setCodigoPostal] = useState(props.address.CodigoPostal);
    const [localidad, setLocalidad] = useState(props.address.Localidad);
    const [provincia, setProvincia] = useState(props.address.Provincia);
    const [numero, setNumero] = useState(props.address.Numero.toString());
    const [pais, setPais] = useState(props.address.Pais);





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

        UpdateAddress(props.address._id
            , {
                Calle: calle,
                ["Codigo postal"]: codigoPostal,
                Localidad: localidad,
                Provincia: provincia,
                Numero: parseInt(numero),
                Pais: pais,
            });

        window.location.href = "/usuario/" + props.user._id;
    };

    return (<>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <Form onSubmit={handleSumbit} className="m-3">
                        <h2 className="text-center mb-4">Actualizar Perfil</h2>

                        <Form.Group controlId="formAddressID">
                            <Form.Control hidden type="text" value={props.address._id} onChange={handleAddressID} />
                        </Form.Group>

                        <Form.Group controlId="formAddress">
                            <Form.Control hidden type="text" placeholder={props.user.Direccion} onChange={handleAddress} />
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">Calle</Form.Label>
                            <Col sm="4">
                                <Form.Control type="text" value={calle} onChange={handleCalle} />
                            </Col>

                            <Form.Label column sm="2">Código Postal</Form.Label>
                            <Col sm="4">
                                <Form.Control type="text" value={codigoPostal} onChange={handleCodigoPostal} />
                            </Col>
                        </Form.Group>

                        <Form.Group controlId="formCity" className="mb-3">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text" value={localidad} onChange={handleLocalidad} />
                        </Form.Group>

                        <Form.Group controlId="formProvince" className="mb-3">
                            <Form.Label>Provincia</Form.Label>
                            <Form.Control type="text" value={provincia} onChange={handleProvincia} />
                        </Form.Group>

                        <Form.Group controlId="formNumber" className="mb-3">
                            <Form.Label>Numero</Form.Label>
                            <Form.Control type="text" value={numero} onChange={handleNumero} />
                        </Form.Group>

                        <Form.Group controlId="formCountry" className="mb-3">
                            <Form.Label>Pais</Form.Label>
                            <Form.Control type="text" value={pais} onChange={handlePais} />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Actualizar perfil
                        </Button>
                    </Form>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    </>);
}