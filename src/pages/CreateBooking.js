import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import {
  FormContainer,
  Input,
  Label,
  Button,
  ErrorMessage,
  FormButton,
  RadioGroup,
  GroupLabel,
  RadioLabel,
  NarrowInput,
  // TextArea
} from "../styles"; // Assuming these are properly defined
import Modal from "../modal/Modal";
import Backdrop from "../modal/ModalBackdrop";
import { Header } from "../ComponentStyles";

// Define the function to check booking date availability
// CHECKED
async function isBookingDateAvailable(date) {
  console.log("Checking booking availability for date:", date);
  try {
    const currentDate = new Date();
    const selectedDate = new Date(date);

    if (selectedDate <= currentDate) {
      return false;
    }

    const response = await axios.get(
      `https://adejord.co.uk/dates?date=${date}`
    );
    const bookedDates = response.data;
    console.log("Selected Date:", selectedDate);
    console.log("Booked Dates:", bookedDates);
    const isDateBooked = bookedDates.some(
      (bookedDate) => new Date(bookedDate).getTime() === selectedDate.getTime()
    );

    return !isDateBooked;
  } catch (error) {
    console.error("Error checking booking availability:", error);
    return false;
  }
}

// Define the schema for form validation
// NOT CHECKED (DOUBT REQUIRED)
const schema = yup.object().shape({
  first_name: yup.string().required("You must enter a first name"),
  surname: yup.string().required("You must enter a surname"),
  group_name: yup.string().notRequired(),
  contact_number: yup.string().required("You must enter a contact number"),
  email_address: yup.string().required("You must enter an email address"),
  house_number: yup.string().required("You must enter a house number"),
  street_name: yup.string().required("You must enter a street name"),
  city: yup.string().required("You must enter a city"),
  postcode: yup.string().required("You must enter a postcode"),
  booking_date: yup
    .string()
    .required("You must select a date")
    .test({
      name: "is-future-date",
      message: "Please select a date that is in the future!",
      test: function (value) {
        const currentDate = new Date();
        const selectedDate = new Date(value);

        return selectedDate > currentDate;
      },
    })
    .test({
      name: "is-booking-date-available",
      message: "There is already a booking on this date, please choose another",
      test: async function (value) {
        // Only perform the validation if the date is in the future
        if (value) {
          return await isBookingDateAvailable(value);
        }
        return false; // Skip validation if date is not provided
      },
    }),
  total_passengers: yup
    .number()
    .typeError("You must enter a valid number of passengers") // This handles non-numeric inputs
    .required("Total passengers is required")
    .oneOf(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "Maximum of 12 passengers per booking"
    ),
  wheelchair_users: yup
    .number()
    .typeError("You must enter a valid number of wheelchair users") // This handles non-numeric inputs
    .required("Wheelchair user count is required")
    .oneOf([0, 1, 2], "Maximum of 2 wheelchair users per booking"),
  smoking: yup.boolean().required("Please select Yes or No for smoking"),
  destination: yup.string().required("Please select a destination"),
  lunch_arrangements: yup.string().required("Please select a lunch option"),
  notes: yup.string().notRequired(),
  terms_and_conditions: yup
    .boolean()
    .oneOf([true], "Please accept the terms and conditions"),
  group_leader_policy: yup
    .boolean()
    .oneOf([true], "Please accept the group leader policy"),
});

const CreateBooking = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      total_passengers: 1, // Set default minimum valid number
      wheelchair_users: 0, // Set default
    },
  });

  const selectedDate = new URLSearchParams(location.search).get("date");

  useEffect(() => {
    if (selectedDate) {
      setValue("booking_date", selectedDate);
    }
  }, [selectedDate, setValue]);

  // Function to send data to the createBooking endpoint
  const submitBooking = async (data) => {
    try {
      const response = await axios.post(
        "https://adejord.co.uk/createBooking",
        data
      );

      // console.log("Booking created successfully:", response.data);
      setFormData(data);
      console.log(formData); // returns null?
      setShowModal(true);

      // Send email with specific properties
      const {
        email_address,
        first_name,
        surname,
        group_name,
        contact_number,
        house_number,
        street_name,
        city,
        postcode,
        booking_date,
        total_passengers,
        wheelchair_users,
        smoking,
        destination,
        lunch_arrangements,
        notes,
        terms_and_conditions,
        group_leader_policy,
      } = data;
      await axios.post("https://adejord.co.uk/sendBookingConfirmationEmail", {
        email_address,
        first_name,
        surname,
        group_name,
        contact_number,
        house_number,
        street_name,
        city,
        postcode,
        booking_date,
        total_passengers,
        wheelchair_users,
        smoking,
        destination,
        lunch_arrangements,
        notes,
        terms_and_conditions,
        group_leader_policy,
      });

      // You can perform additional actions after a successful booking creation here
    } catch (error) {
      console.error("Error creating booking:", error);
      // Handle error scenarios here
    }
  };

  const CloseModal = () => {
    setShowModal(false);
    reset();
    navigate("/");
    window.scrollTo(0, 0);
  };

  const modalContent = (
    <>
      <p>
        Your booking for{" "}
        {new Date(formData.booking_date).toLocaleDateString("en-GB")} has been
        confirmed.
      </p>
      <p>
        This is a {formData.smoking ? "smoking" : "non-smoking"} trip to{" "}
        {formData.destination}.
      </p>
      <p>You will receive an email confirmation shortly.</p>
    </>
  );

  return (
    <>
      {showModal && (
        <Backdrop onClick={CloseModal}>
          <Modal
            header="Booking Confirmation"
            content={modalContent}
            footer="Thank you for your booking!"
            onClick={CloseModal}
          />
        </Backdrop>
      )}
      <Header>Booking Form</Header>
      <FormContainer>
        <form onSubmit={handleSubmit(submitBooking)}>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                paddingBottom: "1em",
              }}
              >
            Booking Date {/* Render label as a paragraph */}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            {selectedDate
              ? new Date(selectedDate).toLocaleDateString("en-GB")
              : "No date selected"}
          </div>
          <Input type="hidden" {...register("booking_date")} />
          <Label>First Name</Label>
          <Input {...register("first_name")} autoComplete="given-name" />
          {errors.first_name && (
            <ErrorMessage>{errors.first_name.message}</ErrorMessage>
          )}

          <Label>Surname</Label>
          <Input {...register("surname")} autoComplete="family-name" />
          {errors.surname && (
            <ErrorMessage>{errors.surname.message}</ErrorMessage>
          )}

          <Label>Group/Organisation Name (If applicable)</Label>
          <Input {...register("group_name")} />

          <Label>Contact Number</Label>
          <Input
            type="tel"
            {...register("contact_number")}
            autoComplete="tel"
          />
          {errors.contact_number && (
            <ErrorMessage>{errors.contact_number.message}</ErrorMessage>
          )}

          <Label>Email</Label>
          <Input
            type="email"
            {...register("email_address")}
            autoComplete="email"
          />
          {errors.email_address && (
            <ErrorMessage>{errors.email_address.message}</ErrorMessage>
          )}

          <Label>House Number</Label>
          <Input {...register("house_number")} autoComplete="address-line1" />
          {errors.house_number && (
            <ErrorMessage>{errors.house_number.message}</ErrorMessage>
          )}

          <Label>Street Name</Label>
          <Input {...register("street_name")} autoComplete="address-line2" />
          {errors.street_name && (
            <ErrorMessage>{errors.street_name.message}</ErrorMessage>
          )}

          <Label>City</Label>
          <Input {...register("city")} autoComplete="address-level2" />
          {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}

          <Label>Postcode</Label>
          <NarrowInput {...register("postcode")} autoComplete="postal-code" />
          {errors.postcode && (
            <ErrorMessage>{errors.postcode.message}</ErrorMessage>
          )}

          <Label>Total Passengers (Max 12)</Label>
          <Input type="number" {...register("total_passengers")} />
          {errors.total_passengers && <p>{errors.total_passengers.message}</p>}

          <Label>Wheelchair Users (Max 2)</Label>
          <Input type="number" {...register("wheelchair_users")} />
          {errors.wheelchair_users && <p>{errors.wheelchair_users.message}</p>}

          <RadioGroup>
            <Label>Smoking</Label>
            <div>
              <Input type="radio" value="true" {...register("smoking")} /> Yes
              <br />
              <Input type="radio" value="false" {...register("smoking")} /> No
            </div>
            {errors.smoking && (
              <ErrorMessage>{errors.smoking.message}</ErrorMessage>
            )}
          </RadioGroup>

          <RadioGroup>
            <GroupLabel>Destination</GroupLabel>
            <RadioLabel>
              <input
                type="radio"
                value="Autherley"
                {...register("destination")}
              />{" "}
              Autherley (£130)
            </RadioLabel>
            <RadioLabel>
              <input type="radio" value="Coven" {...register("destination")} />{" "}
              Coven(£100)
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                value="Penkridge"
                {...register("destination")}
              />{" "}
              Penkridge "Have A Go day"(£220)
            </RadioLabel>
          </RadioGroup>

          <RadioGroup>
            <GroupLabel>Lunch Arrangements</GroupLabel>
            <RadioLabel>
              <input
                type="radio"
                value="Packed Lunch"
                {...register("lunch_arrangements")}
              />{" "}
              Packed Lunch
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                value="Fish and Chips"
                {...register("lunch_arrangements")}
              />{" "}
              Fish & Chips
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                value="Pub Meal"
                {...register("lunch_arrangements")}
              />{" "}
              Pub Meal
            </RadioLabel>
          </RadioGroup>
          <br />
          <label>Other Requirements</label>
          <br />
          <input
            style={{
              height: "5em",
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              borderRadius: "4px",
              fontSize: ".8rem",
            }}
            type="string"
            {...register("notes")}
          />
          <br />
          <label>
            <input type="checkbox" {...register("terms_and_conditions")} />
            <Link to="/TermsAndCond">
              I have read and agree to the terms and conditions{" "}
            </Link>
            {errors.terms_and_conditions && (
              <p style={{ color: "red" }}>
                {errors.terms_and_conditions.message}
              </p>
            )}
          </label>
          <br />
          <label>
            <input type="checkbox" {...register("group_leader_policy")} />
            <Link to="/GroupLeaderPolicy">
              I have read and agree to the group leader policy{" "}
            </Link>
            {errors.group_leader_policy && (
              <p style={{ color: "red" }}>
                {errors.group_leader_policy.message}
              </p>
            )}
          </label>
          <br />
          <br />
          <FormButton type="submit">Submit</FormButton>
        </form>
   </FormContainer>
    </>
  );
};

export default CreateBooking;
