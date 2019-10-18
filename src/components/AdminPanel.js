import React, { Component } from "react";
import AdminPanelCardButton from "./AdminPanelCardButton";

class AdminPanel extends Component {
  state = {
    buttons: ["Other", "Cool stuff", "Only admins", "Can do"]
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-4">
            <AdminPanelCardButton url="/routes" text="Routes" color="primary">
              <i class="fas fa-route"></i>
            </AdminPanelCardButton>
          </div>

          <div className="col-4">
            <AdminPanelCardButton text="Other" url="/add-route">
              <i class="fas fa-crown"></i>
            </AdminPanelCardButton>
          </div>

          <div className="col-4">
            <AdminPanelCardButton text="Cool stuff">
              <i class="fas fa-crown"></i>
            </AdminPanelCardButton>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <AdminPanelCardButton text="that only">
              <i class="fas fa-crown"></i>
            </AdminPanelCardButton>
          </div>

          <div className="col-4">
            <AdminPanelCardButton text="admins">
              <i class="fas fa-crown"></i>
            </AdminPanelCardButton>
          </div>
          <div className="col-4">
            <AdminPanelCardButton text="can do">
              <i class="fas fa-crown"></i>
            </AdminPanelCardButton>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
