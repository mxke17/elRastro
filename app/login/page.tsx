import { Button, Form } from "react-bootstrap";

export default function Login() {
    return <>
        <Form>
            <div className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We&apos;ll never share your email with anyone else.
                </Form.Text>
            </div>

            <div className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </div>
            <div className="mb-3">
                <Form.Check type="checkbox" label="Check me out" />
            </div>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>;
}