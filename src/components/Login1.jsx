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




export default function Login() {

    const history = useHistory();
    const [formData, setFormData] = useState([]);

    const handleChange = (event) => {
        setFormData(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .get(history)
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
                />
            </FormGroup>
            <Button color="primary" onSubmit={handleSubmit}>Sign In</Button>
        </Form>
    );
}
