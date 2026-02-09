import { useState } from "react";
import axios from "../../utils/axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./auth.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/users", data);
      window.location.hash = "#login";
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />

        <div className="password_input_container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="password_toggle_btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        {error && <div className="error_msg">{error}</div>}

        <button type="submit" className="green_btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;