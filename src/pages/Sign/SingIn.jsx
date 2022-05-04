import { toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

import "../../components/Navbar.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const auth = getAuth();
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     if (userCredential.user) {
  //       navigate("/doc");
  //       console.log(userCredential.user);
  //     }
  //   } catch (error) {
  //     toast.success("Message Error 404");
  //   }
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors }
  // } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // }; // your form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
        console.log(data, 'data');
  };

  console.log(watch("example"));

  return (
    // <>
    //   <div className="signForm mt-5">
    //     <header>
    //       <p className="pageHeader text-white">Welcome Back!</p>
    //     </header>
    //     <main>
    //       <form className="d-flex flex-column gap-2" onSubmit={onSubmit}>
    //         <input
    //           id="email"
    //           type="email"
    //           placeholder="Email"
    //           className="emailInput Input"
    //           value={email}
    //           onChange={onChange}
    //           // {...register('example')}
    //         />
    //         <input
    //           id="password"
    //           type="password"
    //           placeholder="password"
    //           className="passwordInput Input"
    //           value={password}
    //           onChange={onChange}
    //           // {...register('exampleRequired',{required: true})}
    //           />
    //           {/* {errors.exampleRequired && <p>This field is required</p>} */}
    //       </form>
    //       <div className="d-flex align-items-center justify-content-center">
    //         <button
    //           className="getStarted_btn align-items-center sign p-2 mt-2"
    //           onClick={onSubmit}
    //         >
    //           Sign In
    //         </button>
    //       </div>
    //       <div className="text-white mt-2 d-flex">
    //         Dont have an account ?
    //         <Link className="registerLink ms-1" to="/sign-up">
    //           Sign Up Instead
    //         </Link>
    //       </div>
    //     </main>
    //   </div>
    // </>
    <div className="signForm text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-5 d-flex flex-column gap-2 "
      >
        <label>First Name</label>
        <input
          className="emailInput Input"
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Laste Name</label>
        <input
          className="passwordInput Input"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        {errors?.lastName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <input type="submit" className=" btn--primary btn--large mt-2 mb-2" value="Sign in" />
      </form>
      <div className="text-white mt-2 d-flex">
        Dont have an account ?
        <Link className="registerLink ms-1" to="/sign-up">
          Sign Up Instead
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
