import React from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                autoFocus="on"
                placeholder="Enter a city here"
              />
            </div>

            <div className="col-2">
              <button type="submit" className="btn btn-primary w-100 h-100">
                Search
              </button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-secondary w-100 h-100">
                Current
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
