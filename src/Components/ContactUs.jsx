import React from "react";

const ContactUs = () => {
  return (
    <div className="container-flex" id="contact">
      <h1 style={{ textAlign: "center" }}>Contact Information</h1>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div style={{ marginLeft: "20px" }}>
            <h5>Contact Us</h5>
            <p>
              <span>Address:</span>
              Kathmandu, Nepal
            </p>

            <p>
              <span>Phone:</span>
              <a href="#">+97798989898</a>
            </p>
            <p>
              <span>Email:</span>
              <a href="#">model123@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.6603811395191!2d85.2791224141254!3d27.67647935929271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe139b83a1492b07a!2zMjfCsDQwJzM1LjMiTiA4NcKwMTYnNTIuNSJF!5e0!3m2!1sen!2snp!4v1671619607771!5m2!1sen!2snp"
            // style="border:0;"
            style={{ width: "100%", height: "450px", border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="googlemap"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
