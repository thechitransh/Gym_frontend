import React from "react";
import Form from "react-bootstrap/Form";
function AddNewMamber() {
  return (
    <div className="pb-6 bg-black">
      <section className="flex flex-col items-center gap-4 w-full py-6 text-white">
        <p className="text-xl font-semibol underline">New Member</p>
        <form className="flex flex-col w-1/3 gap-6 ">
          <Form.Control
            type="text"
            placeholder="First Name"
            className="bg-black placeholder:text-white text-white outline-none"
          />
          <Form.Control
            type="text"
            placeholder="Last Name"
            className="bg-black placeholder:text-white text-white outline-none"
          />
          <Form.Select
            aria-label="Default select example"
            className="bg-black placeholder:text-white text-white outline-none"
          >
            <option>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
          <Form.Control
            type="tel"
            placeholder="Mobile Number"
            className="bg-black placeholder:text-white text-white outline-none"
          />
          <Form.Control
            type="email"
            placeholder="Email"
            className="bg-black placeholder:text-white text-white outline-none"
          />
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Medical History"
            className="bg-black placeholder:text-white text-white outline-none"
          />
          <div>
            <Form.Label>Registation Date</Form.Label>
            <Form.Control
              type="Date"
              className="bg-black placeholder:text-white text-white outline-none"
            />
          </div>
          <Form.Select
            aria-label="Default select example"
            className="bg-black placeholder:text-white text-white outline-none"
          >
            <option>Subsription Type</option>
            <option value="1 Month">1 Month</option>
            <option value="2 Month">2 Months</option>
            <option value="3 Month">3 Months</option>
            <option value="4 Month">4 Months</option>
            <option value="5 Month">5 Months</option>
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
          />
          <Form.Select
            aria-label="Default select example"
            className="bg-black placeholder:text-white text-white outline-none"
          >
            <option>Fee Status</option>
            <option value="male">Paid</option>
            <option value="female">Pending</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            className="bg-black placeholder:text-white text-white outline-none"
          >
            <option>Batch</option>
            <option value="male">Morning</option>
            <option value="female">Evening</option>
          </Form.Select>
          <button className="bg-[#22c11d] rounded-lg py-2 font-semibold">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default AddNewMamber;
