"use client";
import { Button, Card, Form } from "react-bootstrap";
//import { User } from "@/database/users";

// interface editUser {
//     user: User;
// }
//props: editUser
export function EditUser() {
    //const user = props.user;
    return <>
        <Card style={{ marginBottom: "20px" }}>
        
            <Card.Body>
                <Card.Title>Edite su perfil</Card.Title>
                <Form>
                    <Form.Group controlId="validationTitle">
                        <Form.Label>Nombre de usuario:</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                        //value={auction.Title}
                        //onChange={handleChange}
                        //isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationTitle">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                        //value={auction.Title}
                        //onChange={handleChange}
                        //isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative mb-3">
                        <Form.Label>Nueva foto</Form.Label>
                        <Form.Control
                            type="file"
                            name="file"
                        //onChange={handleChange}
                        //isInvalid={!!errors.file}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Actualizar</Button>{" "}
                
                </Form>
            </Card.Body>
        </Card>
    </>;
}