import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form.name, form.email, form.password);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input placeholder="Name"
        onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password"
        onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button type="submit">Register</button>
    </form>
  );
}
