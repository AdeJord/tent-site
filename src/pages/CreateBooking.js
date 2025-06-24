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
  ErrorMessage,
  FormButton,
  RadioGroup,
  GroupLabel,
  RadioLabel,
  NarrowInput,
} from "../styles";
import Modal from "../modal/Modal";
import Backdrop from "../modal/ModalBackdrop";
import { Header } from "../ComponentStyles";

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
    const isDateBooked = bookedDates.some(
      (bookedDate) => new Date(bookedDate).getTime() === selectedDate.getTime()
    );

    return !isDateBooked;
  } catch (error) {
    console.error("Error checking booking availability:", error);
    return false;
  }
}

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
        if (value) {
          return await isBookingDateAvailable(value);
        }
        return false;
      },
    }),
  total_passengers: yup
    .number()
    .typeError("You must enter a valid number of passengers")
    .required("Total passengers is required")
    .oneOf(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "Maximum of 12 passengers per booking"
    ),
  wheelchair_users: yup
    .number()
    .typeError("You must enter a valid number of wheelchair users")
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
  const [selectedDestination, setSelectedDestination] = useState("");
  const [prices, setPrices] = useState([]);
  const [priceError, setPriceError] = useState(null);

  const fetchAllPrices = async () => {
    const response = await fetch("https://adejord.co.uk/prices");
    if (!response.ok) {
      throw new Error("Failed to fetch prices");
    }
    return response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllPrices();
        setPrices(data);
      } catch (err) {
        setPriceError("Failed to fetch prices");
      }
    };
    fetchData();
  }, []);

  const priceData = prices[0];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      total_passengers: 1,
      wheelchair_users: 0,
    },
  });

  const lunchArrangements = watch("lunch_arrangements");

  useEffect(() => {
    if (selectedDestination === "Penkridge") {
      setValue("lunch_arrangements", "Packed Lunch");
    } else if (
      selectedDestination === "Autherley" &&
      lunchArrangements === "Pub Meal"
    ) {
      setValue("lunch_arrangements", "");
    }
  }, [selectedDestination, setValue, lunchArrangements]);

  const selectedDate = new URLSearchParams(location.search).get("date");

  useEffect(() => {
    if (selectedDate) {
      setValue("booking_date", selectedDate);
    }
  }, [selectedDate, setValue]);

  const submitBooking = async (data) => {
    try {
      const response = await axios.post(
        "https://adejord.co.uk/createBooking",
        data
      );

      setFormData(data);
      setShowModal(true);

      await axios.post(
        "https://adejord.co.uk/sendBookingConfirmationEmail",
        data
      );
    } catch (error) {
      console.error("Error creating booking:", error);
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

  const handlePolicyClick = (path) => {
    // Save current form state before navigating
    const currentValues = watch();
    sessionStorage.setItem("tempBookingData", JSON.stringify(currentValues));
    navigate(path);
  };

  // Restore form data if returning from policy pages
  useEffect(() => {
    const savedData = sessionStorage.getItem("tempBookingData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.entries(parsedData).forEach(([name, value]) => {
        setValue(name, value);
      });
      // Clear the temporary storage
      sessionStorage.removeItem("tempBookingData");
    }
  }, [setValue]);

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
          <div style={{ width: "100%", textAlign: "center", display: "flex" }}>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                paddingBottom: "1em",
              }}
            >
              Booking Date
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            {selectedDate
              ? new Date(selectedDate).toLocaleDateString("en-GB")
              : "No date selected"}
          </div>
          <Input type="hidden" {...register("booking_date")} />
          <Label>First Name</Label>
          <Input {...register("first_name")} autoComplete="off" />
          {errors.first_name && (
            <ErrorMessage>{errors.first_name.message}</ErrorMessage>
          )}

          <Label>Surname</Label>
          <Input {...register("surname")} autoComplete="off" />
          {errors.surname && (
            <ErrorMessage>{errors.surname.message}</ErrorMessage>
          )}

          <Label>Group/Organisation Name (If applicable)</Label>
          <Input {...register("group_name")} autoComplete="off" />

          <Label>Contact Number</Label>
          <Input
            type="tel"
            {...register("contact_number")}
            autoComplete="off"
          />
          {errors.contact_number && (
            <ErrorMessage>{errors.contact_number.message}</ErrorMessage>
          )}

          <Label>Email</Label>
          <Input
            type="email"
            {...register("email_address")}
            autoComplete="off"
          />
          {errors.email_address && (
            <ErrorMessage>{errors.email_address.message}</ErrorMessage>
          )}

          <Label>House Number</Label>
          <Input {...register("house_number")} autoComplete="off" />
          {errors.house_number && (
            <ErrorMessage>{errors.house_number.message}</ErrorMessage>
          )}

          <Label>Street Name</Label>
          <Input {...register("street_name")} autoComplete="off" />
          {errors.street_name && (
            <ErrorMessage>{errors.street_name.message}</ErrorMessage>
          )}

          <Label>City</Label>
          <Input {...register("city")} autoComplete="off" />
          {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}

          <Label>Postcode</Label>
          <NarrowInput {...register("postcode")} autoComplete="off" />
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

          {priceError && <p style={{ color: "red" }}>{priceError}</p>}

          <RadioGroup>
            <GroupLabel>Destination</GroupLabel>

            <RadioLabel>
              <input
                type="radio"
                value="Autherley"
                {...register("destination")}
                onChange={(e) => setSelectedDestination(e.target.value)}
              />{" "}
              Autherley (£{priceData?.trip4 || "..."})
            </RadioLabel>

            <RadioLabel>
              <input
                type="radio"
                value="Coven"
                {...register("destination")}
                onChange={(e) => setSelectedDestination(e.target.value)}
              />{" "}
              Coven (£{priceData?.trip1 || "..."})
            </RadioLabel>

            <RadioLabel>
              <input
                type="radio"
                value="Penkridge"
                {...register("destination")}
                onChange={(e) => setSelectedDestination(e.target.value)}
              />{" "}
              Penkridge "Have A Go day" (£{priceData?.trip6 || "..."})
            </RadioLabel>
          </RadioGroup>

          <RadioGroup>
            <GroupLabel>Lunch Arrangements</GroupLabel>
            <RadioLabel>
              <input
                type="radio"
                value="Packed Lunch"
                {...register("lunch_arrangements")}
                disabled={false}
              />{" "}
              Packed Lunch
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                value="Fish and Chips"
                {...register("lunch_arrangements")}
                disabled={selectedDestination === "Penkridge"}
              />{" "}
              Fish & Chips
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                value="Pub Meal"
                {...register("lunch_arrangements")}
                disabled={
                  selectedDestination === "Autherley" ||
                  selectedDestination === "Penkridge"
                }
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
            <span
              onClick={() => handlePolicyClick("/TermsAndCond")}
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#0000EE",
              }}
            >
              I have read and agree to the terms and conditions
            </span>
            {errors.terms_and_conditions && (
              <p style={{ color: "red" }}>
                {errors.terms_and_conditions.message}
              </p>
            )}
          </label>
          <br />
          <label>
            <input type="checkbox" {...register("group_leader_policy")} />
            <span
              onClick={() => handlePolicyClick("/GroupLeaderPolicy")}
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#0000EE",
              }}
            >
              I have read and agree to the group leader policy
            </span>
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
