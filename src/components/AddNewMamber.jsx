import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function AddNewMember() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [amount, setAmount] = useState("");
  const [feeStatus, setFeeStatus] = useState("");
  const [batch, setBatch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/api/members", {
      firstName,
      lastName,
      gender,
      mobileNumber,
      email,
      medicalHistory,
      registrationDate,
      subscriptionType,
      amount,
      feeStatus,
      batch,
    });
    // const newMemberData = {
    //   firstName,
    //   lastName,
    //   gender,
    //   mobileNumber,
    //   email,
    //   medicalHistory,
    //   registrationDate,
    //   subscriptionType,
    //   amount,
    //   feeStatus,
    //   batch,
    // };
    // console.log(newMemberData);
    setFirstName("");
    setLastName("");
    setGender("");
    setMobileNumber("");
    setEmail("");
    setMedicalHistory("");
    setRegistrationDate("");
    setSubscriptionType("");
    setAmount("");
    setFeeStatus("");
    setBatch("");
  };

  return (
    <div className="pb-6 bg-black">
      <section className="flex flex-col items-center gap-4 w-full py-6 text-white">
        <p className="text-xl font-semibol underline">New Member</p>
        <form className="flex flex-col w-1/3 gap-6" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="First Name"
            className="bg-black placeholder:text-white text-white outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Last Name"
            className="bg-black placeholder:text-white text-white outline-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Select
            aria-label="Default select example"
            className="bg-black placeholder:text-white text-white outline-none"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
          <Form.Control
            type="tel"
            placeholder="Mobile Number"
            className="bg-black placeholder:text-white text-white outline-none"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <Form.Control
            type="email"
            placeholder="Email"
            className="bg-black placeholder:text-white text-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Medical History"
            className="bg-black placeholder:text-white text-white outline-none"
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
          />
          <div>
            <Form.Label>Registration Date</Form.Label>
            <Form.Control
              type="date"
              className="bg-black placeholder:text-white text-white outline-none"
              value={registrationDate}
              onChange={(e) => setRegistrationDate(e.target.value)}
            />
          </div>
          <Form.Select
            aria-label="Default select example"
            className="bg-black placeholder:text-white text-white outline-none"
            value={subscriptionType}
            onChange={(e) => setSubscriptionType(e.target.value)}
          >
            <option>Subscription Type</option>
            <option value="1 Month">1 Month</option>
            <option value="2 Months">2 Months</option>
            <option value="3 Months">3 Months</option>
            <option value="4 Months">4 Months</option>
            <option value="5 Months">5 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="7 Months">7 Months</option>
            <option value="8 Months">8 Months</option>
            <option value="9 Months">9 Months</option>
            <option value="10 Months">10 Months</option>
            <option value="11 Months">11 Months</option>
            <option value="12 Months">12 Months</option>
          </Form.Select>
          <Form.Control
            type="number"
            placeholder="Amount"
            className="bg-black placeholder:text-white text-white outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Form.Select
            aria-label="Default select example"
            className="bg-black placeholder:text-white text-white outline-none"
            value={feeStatus}
            onChange={(e) => setFeeStatus(e.target.value)}
          >
            <option>Fee Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            className="bg-black placeholder:text-white text-white outline-none"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          >
            <option>Batch</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
          </Form.Select>
          <button className="bg-[#22c11d] rounded-lg py-2 font-semibold">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default AddNewMember;
