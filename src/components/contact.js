
import React from "react";

const Contact = () => {
  return (
    <main class="px-3 mb-30">
      <h1>Contact US</h1>
      <p>
        Ex sit incididunt occaecat aliqua exercitation amet sunt duis consequat
        mollit. Ullamco consectetur anim ut elit minim voluptate fugiat ea ad
        officia. Sit non tempor mollit culpa ullamco ipsum excepteur anim labore
        minim. Cillum consequat adipisicing sint velit ipsum.Nulla velit laborum
        magna ullamco aute sunt elit est deserunt aliquip adipisicing. Fugiat
        aliquip qui proident reprehenderit ad mollit voluptate Lorem non. Non
        nulla non nulla anim esse velit ut et consectetur ea esse fugiat.
      </p>
	<form className="col-lg-8" style={{textAlign:'left',margin:'120px auto'}}>
    <div class="row" >
      <div class="col-md-6">
        <div class="form-group text-right">
          <label htmlFor="first">First Name</label>
          <input type="text" class="form-control" placeholder="" id="first"/>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label htmlFor="last">Last Name</label>
          <input type="text" class="form-control" placeholder="" id="last"/>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" class="form-control" placeholder="" id="company"/>
        </div>


      </div>

      <div class="col-md-6">

        <div class="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" class="form-control" id="phone" placeholder="phone"/>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-md-6">

        <div class="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="email"/>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label htmlFor="url">Your Website <small>Please include http://</small></label>
          <input type="url" class="form-control" id="url" placeholder="url"/>
        </div>

      </div>
     
    </div>


    <label htmlFor="contact-preference">When is the best time of day to reach you?</label>
    <div class="radio">
      <label>
        <input type="radio" name="contact-preference" id="contact-preference" value="am"/>Morning
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="contact-preference" id="contact-preference" value="pm"/>Evening
      </label>
    </div>

    <label htmlFor="newsletter">Would you like to recieve our email newsletter?</label>
    <div class="checkbox">

      <label>
        <input type="checkbox" value="Sure!" id="newsletter"/> Sure!
      </label>
    </div>


    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </main>
  );
};

export default Contact;
