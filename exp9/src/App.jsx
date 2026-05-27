<div className="container">
  <h1>Registration Form</h1>
  <form onSubmit={handlesubmit}>
    <input type="text" placeholder="Enter Name" value={name}
    onChange={(e)=>setpassword(e.target.value)}></input>

    <input type="text" placeholder="Enter Email" value={email}
    onChange={(e)=>setpassword(e.target.value)}></input>

    <input type="text" placeholder="Enter Password" value={password}
    onChange={(e)=>setpassword(e.target.value)}></input>
  
  <p className="error">{error.password}</p>
  <button type="success">Register</button>
  </form>
  <p className="success">{success}</p>
  {useFormState.length}0&&
  <div className="apidata">
    <h3>Register User</h3>
    <ul>
      {UserActivation.map(UserActivation,index)}
    </ul>
  </div>
</div>
