import React from "react";

export default function Contact() {
    return (
        <div class="container mt-5">
            <h1>Contact Me!</h1>
            <form class="row g-3" action="https://formsubmit.co/fbf9cfb9492c7ccafb74d9fef69d8f96" method="POST">

                <input type="hidden" name="_captcha" value="false" />

                <input type="hidden" name="_next" value="https://mbatorek7.github.io/success" ></input>

                <div class="col-md-6">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" name="name" id="firstName" required />
                </div>
                <div class="col-md-6">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" name="Last&nbsp;Name" id="lastName" required />
                </div>
                <div class="col-md-8">
                    <label for="emailInfo" class="form-label">E-mail</label>
                    <input type="email" class="form-control" name="email" id="emailInfo" required />
                </div>
                <div class="col-md-4">
                    <label for="phoneNumber" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" name="phone" id="phoneNumber" placeholder="+1 (415) 867-5309" />
                </div>
                <div class="col-md-12">
                    <label for="comments" class="form-label">Comments, questions?</label>
                    <textarea class="form-control" id="comments" name="comments,&nbsp;questions" rows="3" required></textarea>
                </div>
                <div class="col-md-12">
                    <button type="submit" class="btn btn-primary bg-blue-500 text-white rounded p-2" >Submit</button>
                </div>
            </form>
            <div className='pt-20'></div>
        </div>
    );
}