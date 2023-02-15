import { useState } from "react";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import { saveInputValue } from "../../redux/actionCreator";
const Form = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const initialState = {
    name : "",
    email : "",
    phoneNumber:"",
    cooperationPosition : "",
    resumes : ""
}
  const [inputValue, setInputValue] = useState(initialState);

  const handleSubmitForm = (e) => {
    e.preventDefault()
     dispatch(saveInputValue(inputValue))
    };
    
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="input-ui">
        <div className="input-container">
          <label>* نام</label>
          <input
            type="text"
            onChange={(e) =>
              setInputValue({ ...inputValue, name: e.target.value })
            }
          />
        </div>

        <div className="input-container">
          <label> * ایمیل</label>
          <input
            type="email"
            onChange={(e) =>
              setInputValue({ ...inputValue, email: e.target.value })
            }
          />
        </div>
      </div>
      <div className="input-ui">
        <div className="input-container">
          <label>* موقعیت همکاری </label>
          <input
            type="text"
            onChange={(e) =>
              setInputValue({ ...inputValue, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label> * شماره تماس</label>
          <input
            type="number"
            onChange={(e) =>
              setInputValue({
                ...inputValue,
                cooperationPosition: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className=" input-container">
        <label>* ( با فرمت های jpg png یا pdf ) فایل رزمه </label>
        <input
          type="file"
          style={{ backgroundColor: "#fff", marginTop: "0.5rem" }}
          onChange={(e) =>
            setInputValue({ ...inputValue, resumes: e.target.value })
          }
        />
      </div>
      <div className="btn-form">
        <button>ارسال درخواست </button>
      </div>
    </form>
  );
};

export default Form;
