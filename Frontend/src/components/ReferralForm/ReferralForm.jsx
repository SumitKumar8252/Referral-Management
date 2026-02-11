import { useState } from "react";
import API from "../../services/candidateService";

export default function ReferralForm() {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.keys(form).forEach((key)=>{
      data.append(key, form[key]);
    });

    await API.post("/candidates", data);
    alert("Candidate Referred Successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Refer Candidate</h2>
      <input placeholder="Name"
        onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Phone"
        onChange={(e)=>setForm({...form,phone:e.target.value})}/>
      <input placeholder="Job Title"
        onChange={(e)=>setForm({...form,jobTitle:e.target.value})}/>
      <input type="file" accept=".pdf"
        onChange={(e)=>setForm({...form,resume:e.target.files[0]})}/>
      <button type="submit">Submit</button>
    </form>
  );
}
