import "./Form.css"

const Form =()=>{

    return(
        <form>
            <div className="input-ui" >
             <div className="input-container">
             <label>* نام</label>
                <input type="text" />
             </div>

          <div  className="input-container">
          <label > * ایمیل</label>
                <input type="email" />
          </div>
            </div>
            <div className="input-ui" >
               <div  className="input-container">
               <label>* موقعیت همکاری </label>
                <input type="text" />

               </div>
               <div  className="input-container">
               <label > * شماره تماس</label>
                <input type="number" />
               </div>
          
            </div>
            <div className=" input-container" >
                <label>* (  jpg png یا pdf با فرمت های ) فایل رزمه </label>
                <input type="file"  style={{backgroundColor : "#fff" , marginTop :"0.5rem"}}/>

            </div>
            <div className="btn-form">
            <button>ارسال درخواست </button>

            </div>
        </form>
    )
}


export default Form