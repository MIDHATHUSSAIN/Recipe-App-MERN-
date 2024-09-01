function FORM({name,email,password,setname,setemail,setpassword,label, onSubmit}) {

    return (
      <div id='myform'>
          <h2>{label}</h2><br/>
        <form onSubmit={onSubmit}>
        <div class="form-group">
            <label for="exampleInputEmail1">User name</label>
            <input value={name}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setname(e.target.value)}/>
          </div><br/>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input value={email}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setemail(e.target.value)}/>
            <small id="smm" class="form-text text-muted" >
              We'll never share your email with anyone else.
            </small>
          </div>
          <br/>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input value={password}
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setpassword(e.target.value)}/>
          </div><br/>
          <button type="submit" class="btn btn-primary" id="buttonn">
              {label}
          </button>
        </form>
      </div>
    );
  }

  export default FORM;