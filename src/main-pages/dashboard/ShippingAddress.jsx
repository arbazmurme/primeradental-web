import Link from "next/link";
import React from "react";

const ShippingAddress = () => {
  return (
    <>
      <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel2">
              {" "}
              <b>Edit Profile</b>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal">
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="modal-body">
            <div className="row g-4">
              <div className="col-xxl-12">
                <form>
                  <div className="form-floating theme-form-floating">
                    <input type="text" className="form-control" id="pname" />
                    <label htmlFor="pname">Full Name</label>
                  </div>
                </form>
              </div>
              <div className="col-xxl-6">
                <form>
                  <div className="form-floating theme-form-floating">
                    <input type="email" className="form-control" id="email1" />
                    <label htmlFor="email1">Email address</label>
                  </div>
                </form>
              </div>
              <div className="col-xxl-6">
                <form>
                  <div className="form-floating theme-form-floating">
                    <input
                      className="form-control"
                      type="tel"
                      name="mobile"
                      id="mobile"
                      maxLength={10}
                      oninput="javascript: if (this.value.length > this.maxLength) this.value =
                                      this.value.slice(0, this.maxLength);"
                    />
                    <label htmlFor="mobile">Email address</label>
                  </div>
                </form>
              </div>
              <div className="col-12">
                <form>
                  <div className="form-floating theme-form-floating">
                    <input type="text" className="form-control" id="address1" />
                    <label htmlFor="address1">Add Address</label>
                  </div>
                </form>
              </div>
              <div className="col-12">
                <form>
                  <div className="form-floating theme-form-floating">
                    <input type="text" className="form-control" id="address2" />
                    <label htmlFor="address2">Add Address 2</label>
                  </div>
                </form>
              </div>
              <div className="col-xxl-4">
                <form>
                  <div className="form-floating theme-form-floating">
                    <select className="form-select" id="floatingSelect1">
                      <option selected>Choose Your Country</option>
                      <option value="kingdom">xxxxxx</option>
                      <option value="states">xxxxxx</option>
                    </select>
                    <label htmlFor="floatingSelect">Country</label>
                  </div>
                </form>
              </div>
              <div className="col-xxl-4">
                <form>
                  <div className="form-floating theme-form-floating">
                    <select className="form-select" id="floatingSelect">
                      <option selected>Choose Your City</option>
                      <option value="kingdom">India</option>
                      <option value="states">xxxxxx</option>
                      <option value="fra">xxxxxx</option>
                      <option value="china">xxxxxx</option>
                      <option value="spain">xxxxxx</option>
                    </select>
                    <label htmlFor="floatingSelect">City</label>
                  </div>
                </form>
              </div>
              <div className="col-xxl-4">
                <form>
                  <div className="form-floating theme-form-floating">
                    <input type="text" className="form-control" id="address3" />
                    <label htmlFor="address3">Pin Code</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Link href="/">
              <button
                type="button"
                className="btn btn-animation btn-md fw-bold"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </Link>
            <Link href="/dashboard">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn theme-bg-color btn-md fw-bold text-light"
              >
                Save changes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingAddress;
