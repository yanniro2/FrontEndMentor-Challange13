import "./index.css"
import logo from "./images/logo.svg"
import arrow from "./images/icon-arrow.svg"
import hero from "./images/hero-desktop.jpg"
import hero_moile from "./images/hero-mobile.jpg"
import errorImg from "./images/icon-error.svg"
import React from "react"
// import { ReactComponent as Icons } from "./images/icon-error.svg"
function App()
{

  const [error, setError] = React.useState(null);
  const [check, setCheck] = React.useState('');

  function isValidade(email)
  {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  const handleChange = event => 
  {
    if (!isValidade(event.target.value)) {
      setError(!error);
    }
    else {
      setError(null);
    }
    setCheck(event.target.value)

  }
  return (
    <div className="App font-Josefin text-ms w-screen h-screen">
      <div className="content w-full h-full flex Mobile:flex-col Mobile:p-0">
        <div className="mobile-logo w-full h-[10%] p-6 items-center flex-1">
          <img src={logo} alt="mobile logo" className="hidden Mobile:block w-[6rem] order-1" />
        </div>
        <div className="left w-[60%] h-full bg-gradient-to-r from-Linear-a-1 to-Linear-a-2 px-[10rem] pt-[3rem] pb-[6rem] flex flex-col justify-between Mobile:w-full  Mobile:order-3 Mobile:h-[60%] Mobile:p-[2rem] Mobile:text-center Mobile:pb-[3rem]" >
          <img src={logo} alt="logo img" className=" w-[10rem] object-fill mb-[6rem] Mobile:hidden" />
          <div className="heading flex gap-[1rem] flex-col">
            <h1 className="text-[4rem] uppercase leading-none text-Dark-Grayish-Red tracking-widest Mobile:text-[3rem]" >
              <span className="text-Desaturated-Red font-ms block">We're</span>  coming soon
            </h1>
            <p className="text-Desaturated-Red">Hello fellow shoppers! We're currently building our new fashion store.Add your email below to stay up-to-date with announcements and our launch deals.</p>
          </div>
          <div className="input flex  items-center relative">
            <input type="email" name="email" placeholder="Email address" className="peer p-3 pl-5 border-Desaturated-Red rounded-full border-[1px] w-[80%] placeholder:text-Desaturated-Red capitalize inline" required value={check} onChange={handleChange} />
            {error && <img src={errorImg} alt="error img" className=" z-50 -ml-[8rem]" />}
            <button className="p-1 w-[5rem] h-[3rem] bg- flex items-center justify-center rounded-full bg-gradient-to-r from-Linear-b-1 to-Linear-b-2  drop-shadow-2xl ml-6 absolute top-[1px] bottom-0 right-[20%] hover:from-Linear-b-2 hover:to-Soft-Red hover:drop-shadow-xl"> <img src={arrow} alt="img arrow" /> </button>


          </div>
          {error && (<div className="alert block pl-5 Mobile:p-0">
            <p className="capitalize text-Soft-Red text-ms"> please provide a valid email</p>
          </div>)}
        </div>
        <div className="right w-[40%] h-full Mobile:w-full Mobile:order-2 Mobile:h-[30%]">
          <img src={hero} alt="img hero" className="hero h-full object-cover w-full Mobile:hidden " />
          <img src={hero_moile} alt="hero mobile" className="hidden Mobile:block w-full object-cover h-full" />
        </div>
      </div>

    </div >
  );
}

export default App;
