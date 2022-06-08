import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { StartSession } from "../pages/sessionPage/startSession";

/** This one is going to include all the test that can add something to database.
 * For example, adding user, adding session, adding a friend, adding subject, adding course
 * Im using mock-data to reduce run-time */

jest.mock("axios");

describe("adding to database", () => {
  // This test only passes if we remove the CSS-file in session :)
  // This test might also be moved to server_test, since it tests server-things..
  it("create a session", () => {
    const session = [{ email: "bla@bla.com", day: "mandag" }];
    const response = { data: session };
    axios.post(response);

    const result = StartSession();

    expect(result).toEqual(session);
  });
});