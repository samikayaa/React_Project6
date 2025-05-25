/*
Testler:

Login componentinde useHistory kullanılmış
Login componentinde form verileri için useState kullanılmış ve başlangıç değeri tanımlanmış
Login componentinde handleChange fonksiyonu tanımlanmış
Login componentinde handleSubmit fonksiyonu tanımlanmış
handleSubmitde preventDefault() tanımlanmış
handleSubmitde axios get isteği yapılmış
Login form test kullanıcısı bilgileri ile doldurulunca doğru sayfaya yönleniyor
Login form yanlış email, doğru password ile doldurulunca error sayfasına yönleniyor
Login form doğru email, yanlış password ile doldurulunca error sayfasına yönleniyor
*/

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const initialForm = {
    email: "",
    password: "",
    terms: false
}


export default function Login() {

    const history = useHistory();
    const [formData, setFormData] = useState(initialForm);

    const handleChange = (event) => {
        let { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
            .then((response) => { setFormData(response.data) })
            .catch((error) => { console.log(error) })
    }

    return (
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Enter your password "
                    type="password"
                    onChange={handleChange}
                    value={formData.password}
                />
            </FormGroup>
            <Button color="primary" onSubmit={handleSubmit}>Sign In</Button>
        </Form>
    );
}
