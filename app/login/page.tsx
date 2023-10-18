import { Form } from "react-bootstrap";

export default function Login() {
    return <>
        <Form>
            <div>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"/>
            </div>

            <div>
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </div>
        </Form>
    </>;
}