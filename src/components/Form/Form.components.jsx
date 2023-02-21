import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import { saveInputValue } from "../../redux/actionCreator";
import { useForm } from "react-hook-form";
import { errorsInput } from "../../errors/index";

const Form = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmitForm = (data) => {

    dispatch(saveInputValue(data));
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmitForm)}>
      <div className="input-ui">
        <div className="input-container">
          <label>* نام</label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: true,
              minLength: 3,
              pattern: /^[A-Za-z]+$/i 
            })}
          />
          {errors.fullName && <p className="error">{errorsInput.name}</p>}
        </div>

        <div className="input-container">
          <label> * ایمیل</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              minLength: 4,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

            })}
          />
          {errors.email && <p className="error">{errorsInput.email}</p>}
        </div>
      </div>
      <div className="input-ui">
        <div className="input-container">
          <label>* موقعیت همکاری </label>
          <input
            type="text"
            name="cooperationPosition"
            {...register("cooperationPosition", { required: true })}
          />
          {errors.cooperationPosition && (
            <p className="error">{errorsInput.empty_cooperationPosition}</p>
          )}
        </div>
        <div className="input-container">
          <label> * شماره تماس</label>
          <input
            type="number"
            name="phoneNumber"
            {...register("phoneNumber", {
              required: true,
              maxLength: 11,
              minLength : 11 ,
              pattern:
                /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
            })}
          />
          {errors.phoneNumber && <p className="error">{errorsInput.phoneNumber}</p>}
        </div>
      </div>
      <div className=" input-container">
        <label>* ( با فرمت های jpg png یا pdf ) فایل رزمه </label>
        <input
          type="file"
          name="resumes"
          style={{ backgroundColor: "#fff", marginTop: "0.5rem" }}
          accept="image/png , image/jpg ,application/pdf "
          {...register("resumes" ,{required : true})}
        />
        {errors.resumes && <p className="error">{errorsInput.resumes}</p>}
      </div>
      <div className="btn-form">
        <button>ارسال درخواست </button>
      </div>
    </form>
  );
};

export default Form;
