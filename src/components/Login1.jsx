/*
Testler:

Login componentinde usehistory kullanılmış
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
import axios, { useState } from 'react';



export default function Login() {

    const [a, setA] = useState();

    const handleChange = () => {

    }

    const handleSubmit = () => {
        preventDefault();
        axios.get().then().catch()
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
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Enter your password "
                    type="password"
                />
            </FormGroup>
            <Button color="primary">Sign In</Button>
        </Form>
    );
}
