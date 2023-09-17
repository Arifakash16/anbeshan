import React,{useState} from 'react'

const HomeScreen = () => {
  //input
  const [input,setInput]= useState('');

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex flex-column align-item-center justify-content-center mt-5">
          <img src="https://play-lh.googleusercontent.com/uhq93AOmKvJwjlrfaNuEaaAT4H089SeF2JZOSLp8xyNghTie1rxD-Vi8wnpip-9PEeY" 
          alt="anbeshan-icon" 
          className="mx-auto my-3" style={{height:"150px",width:"150px"}}
          />
          <div className="formDiv col-md-5 mx-auto border my-5 d-flex align-item-center justify-content-between py-1 rounded">
            <i className="fa fa-search mx-3 mt-2"></i>
            <form style={{width:"100%"}} className="ml-2">
                <input type="text" name="" 
                className="form-control border-0" 
                value={input} 
                onChange={event=>setInput(event.target.value)} 
                style={{boxShadow:'none !important',outline:'none'}}
                />
            </form>
            {input?<i className="fa fa-times mx-1"></i>:null}
            <button type="button" className="btn mx-1" >
              <i className="fa fa-microphone"></i>
            </button>
          </div>

          <div className="btns mx-auto text-center">
              <button type="button" className="btn btn-default mx-1">
                Search
              </button>
              <button type="button" className="btn btn-default mx-1">
                Feeling Lucky
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
