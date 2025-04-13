import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { __userapiurl } from "../../Apiurl";

function Verifyuser() {
  const params = useParams();
  const [verified, setVerified] = React.useState(false);

  useEffect(() => {
    axios.get(__userapiurl + "fetch?email=" + params.email)
    .then((response) => {
      if (response.data[0]?._v === 0) {
        const updateDetails = {
          condition_obj: { email: params.email },
          content_obj: { status: 1, _v: 1 }
        };
        axios.patch(__userapiurl + "update", updateDetails)
        .then(() => {
          console.log("User verified...");
          setVerified(true);
        });
      }
    }).catch((error) => {
      console.log("Error verifying user:", error);
    });
  }, [params.email]);

  if (verified) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Email verified: {params.email}</h1>
    </div>
  );
}

export default Verifyuser;
