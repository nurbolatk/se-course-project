import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminPanelCardButton from "./AdminPanelCardButton";

class AdminPanel extends Component {
  state = {
    buttons: ["Other", "Cool stuff", "Only admins", "Can do"]
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">Side bar?</div>
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-4">
                <AdminPanelCardButton
                  url="/add-route"
                  text="Add route"
                  color="primary"
                >
                  <i class="fas fa-route"></i>
                </AdminPanelCardButton>
              </div>

              <div className="col-4">
                <AdminPanelCardButton text="Other">
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
        </div>
      </div>
    );
  }
}

export default AdminPanel;
