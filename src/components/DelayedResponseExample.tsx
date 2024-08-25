import React from "react";

import { useGetDelayedResponse } from "../hooks/useGetDelayedResponse";

const DelayedResponseExample: React.FC = () => {
  const { data, isLoading, isError, isFetching, cancelRequest } =
    useGetDelayedResponse();

  const handleCancelQueryButtonCLick = async () => {
    cancelRequest();
  };

  if (isError) return <p>Error fetching delayed response data.</p>;

  return (
    <div>
      <h2>Delayed Response</h2>
      {isLoading && (
        <>
          <p>Loading delayed response...</p>
        </>
      )}
      {(isFetching || isLoading) && (
        <button
          onClick={handleCancelQueryButtonCLick}
          style={{ marginLeft: "10px" }}
        >
          Cancel Request
        </button>
      )}
      {data && <div>{data}</div>}
    </div>
  );
};

export default DelayedResponseExample;
