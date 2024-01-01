import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn, SignUp } from "../../Constants/Constants";
import { userArray, adminArray } from "../../Constants/Array";
import Form from "../../Components/Form/Form";
import swal from "sweetalert";
import "./SignIn.scss";
function Sign() {
  const navigate = useNavigate();
  const [page, setPage] = useState("signIn");
  const user = window.location.href.split("/").pop();
  let Array: any;
  if (user === "user") {
    Array = userArray;
  } else {
    Array = adminArray;
  }
  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    mail: string,
    password: string
  ) => {
    e.preventDefault();
    let c = 0;

    Array.map((item: any) => {
      if (item.email === mail && item.password === password) {
        if (user === "admin") {
          swal("", "Logged In Successfully", "success");
          navigate("/admin/home");
        } else {
          swal("", "Logged In Successfully", "success");
          navigate(`/user/home/${item.id}`);
        }
      } else {
        c++;
      }
    });
    if (c === Array.length) {
      sweetAlert("Sorry", "Invalid Mail or Password", "error");
    }
  };

  const handleSignUpSubmit = (
    e: FormEvent<HTMLFormElement>,
    mail: string,
    password: string
  ) => {
    e.preventDefault();
    let f = 0;
    Array.map((item: any) => {
      if (item.email === mail) {
        alert("Mail already exists");
        f = 1;
      }
    });
    if (!f) {
      Array.push({ email: mail, password: password });
      setPage("signIn");
      console.log(Array);
    }
  };

  const handlePage = () => {
    setPage("signUp");
  };
  useEffect(() => {}, [page]);

  return (
    <div className="SignIn">
      {page === "signIn" ? (
        <Form
          page={page}
          Array={SignIn}
          handleSubmit={handleSubmit}
          handlePage={handlePage}
          admin={user === "admin" ? true : false}
        />
      ) : (
        <Form page={page} Array={SignUp} handleSubmit={handleSignUpSubmit} />
      )}
    </div>
  );
}

export default Sign;
