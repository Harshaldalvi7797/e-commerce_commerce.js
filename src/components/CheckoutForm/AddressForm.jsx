/** @format */

import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";

import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState([]);
  const [shippingOption, setShippingOption] = useState([]);
  console.log(checkoutToken.id);
  const methods = useForm();

  //   const fetchShippingCountries = async checkoutTokenId => {
  //     const { countries } = await commerce.services.localeListShippingCountries(
  //       checkoutTokenId
  //     );
  //     console.log(countries);
  //     console.log("countries");
  //     setShippingCountries(countries);
  //   };
  const fetchShippingCountries = async checkoutTokenId => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
    console.log(countries);
  };

  //   useEffect(() => {
  //     fetchShippingCountries(checkoutToken.id);
  //   }, []);
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  return (
    <React.Fragment>
      <Typography
        varient="h6"
        gutterBottom
        style={{ marginLeft: "20px", marginRight: "5px" }}
      >
        Address Form
      </Typography>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={5}>
            <FormInput name="firstname" label="First Name" required />
            <FormInput name="lastname" label="Last Name" required />
            <FormInput name="address1" label="Address Line 1" required />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select fullWidth>
                <MenuItem>Select Me</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select fullWidth>
                <MenuItem>Select Me</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select fullWidth>
                <MenuItem>Select Me</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} variant="outlined" to="/cart">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};
export default AddressForm;
