import React, { useState, ChangeEvent } from "react";
import Navbar from "../components/Navbar";
import ContainerLayout from "../Layouts/ContainerLayout";
import FormInput from "../components/formInput";
import { CiCreditCard1 } from "react-icons/ci";
import { FaApplePay, FaCcPaypal } from "react-icons/fa";
import { SiKlarna } from "react-icons/si";
import Button from "../components/button/button.component";

const defaultFormFields = {
  email: "",
  cardNumber: "",
  expiryDate: "",
  cvc: "",
  country: "",
};

function Payment() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const { email, cardNumber, expiryDate, cvc, country } = formFields;

  return (
    <ContainerLayout>
      <Navbar />
      <div className="w-11/12 md:w-2/4 h-auto m-auto pt-20">
        <h1 className="text-center">PAYMENT METHODS</h1>

        <form>
          {/* <form onSubmit={handleSubmit}> */}
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <div className="w-full flex justify-between">
            <div className="border-2 border-gray-800 h-16 w-[22%] flex flex-col justify-center items-center">
              <CiCreditCard1 />
              <h1 className="text-center">CARD</h1>
            </div>
            <div className="border-2 border-gray-800 h-16 w-[22%] flex flex-col justify-center items-center">
              <FaApplePay />
              <h1 className="text-center">APPLE PAY</h1>
            </div>
            <div className="border-2 border-gray-800 h-16 w-[22%] flex flex-col justify-center items-center">
              <FaCcPaypal />
              <h1 className="text-center">PAYPAL</h1>
            </div>
            <div className="border-2 border-gray-800 h-16 w-[22%] flex flex-col justify-center items-center">
              <SiKlarna />
              <h1 className="text-center">KLARNA</h1>
            </div>
          </div>

          <FormInput
            label="Card Number"
            type="number"
            required
            onChange={handleChange}
            name="cardNumber"
            value={cardNumber}
          />

          <div className="flex">
            <FormInput
              label="Expiry Date"
              type="date"
              required
              onChange={handleChange}
              name="expiryDate"
              value={expiryDate}
            />
            <FormInput
              label="CVC"
              type="cvc"
              required
              onChange={handleChange}
              name="cvc"
              value={cvc}
            />
          </div>

          <FormInput
            label="COUNTRY"
            type="country"
            required
            onChange={handleChange}
            name="country"
            value={country}
          />
        </form>

        <Button type="submit">PAY</Button>

        <div className="text-center mt-10">
          <p>payments are secure & encrypted</p>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default Payment;
