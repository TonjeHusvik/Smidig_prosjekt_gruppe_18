import React, { useContext } from "react";
import { MainPageApiContext } from "../../mainPageApiContext";
import { Link, useParams } from "react-router-dom";
import { useLoading } from "../../useLoading";

export function FinishedSession() {
  const { showFinishedSession } = useContext(MainPageApiContext);
  const { sessionId } = useParams();
  const { loading, error, data } = useLoading(
    async () => await showFinishedSession({ sessionId: sessionId }),
    []
  );
  const dateFormat = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );
  }

  return (
    <>
      <h1>{data[0].courseTitle}</h1>
      <h5>{new Date(data[0].date).toLocaleDateString("no-NO", dateFormat)}</h5>
      <h3>{data[0].location}</h3>
      <h6>{data[0].address}</h6>
      <div>
        <h3>Gjøremål</h3>
        {data[0].todos.map((todos) => (
          <>
            <div>
              <label>
                <input type={"checkbox"} checked={todos.checked} readOnly />
                {todos.todo}
              </label>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
