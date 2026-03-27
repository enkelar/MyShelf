import { useState } from "react";
import axios from "../../utils/axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./auth.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post("/api/auth", data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>

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
          Sign In
        </button>

        <button type="button" className="mobile_signup_btn" onClick={() => (window.location.hash = "#signup")}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;