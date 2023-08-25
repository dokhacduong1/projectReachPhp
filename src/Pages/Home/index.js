import { Button, Card, Form, Input } from "antd";
import axios from "axios"
import "./Home.scss";
function Home() {

    const handleSubmit = async (valueForm) => {
        const apiUrl = 'http://localhost:8080/api/user/save';
        const response = await axios.get(apiUrl);
        console.log(response.data);

    };
    return (
        <>
            <Card className="login">
                <Form
                    name="basic"
                    autoComplete="off"
                    className="login__form"
                    style={{
                        maxWidth: 300,
                    }}
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        type="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mobile"
                        name="mobile"
                        rules={[
                            {
                                required: true,
                                message: "Please input your mobile!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
}
export default Home;
