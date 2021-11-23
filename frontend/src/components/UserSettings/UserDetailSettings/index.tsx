import {FC,useState} from 'react';

const UserDetailSettings:FC = () =>{

  const [input, setInput] = useState({
    fname: "",
    lname: "",
    mname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [name]: value
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('email', input.email);
    formData.set('fname', input.fname);
    formData.set('mname', input.mname);
    formData.set('lname', input.lname);
  }

    return(
        <form onSubmit={onSubmit} className="container pt-10 bg-none flex flex-col justify-self-start rounded-xl md:justify-center">
        <div className="w-80 mb-2 mx-auto ">
          <label htmlFor="fname" className="block font-sans text-lg text-white font-bold">
            First name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={(input && input.fname) || ""}
            onChange={handleChange}
            className="mt-2 mr-5 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
        </div>
        <div className="w-80 mb-2 mx-auto">
          <label htmlFor="mname" className="block font-sans text-lg text-white font-bold">
            Middle name
          </label>
          <input
            type="text"
            name="mname"
            id="mname"
            value={(input && input.mname) || ""}
            onChange={handleChange}
            className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
        
        </div>
        <div className="w-80 mb-2 mx-auto">
          <label htmlFor="lname" className="block font-sans text-lg text-white font-bold">
            Last name
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={(input && input.lname) || ""}
            onChange={handleChange}
            className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
        
        </div>
        <div className="w-80 mb-2 mx-auto">
          <label htmlFor="email" className="block font-sans text-lg text-white font-bold">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={(input && input.email) || ""}
            onChange={handleChange}
            className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
        </div>
        <button         
          className="py-2 mx-auto cursor-pointer border-none px-10 bg-indigo-800 font-sans rounded-full text-white font-bold uppercase text-sm mt-2"
        >Update</button>
      </form>
    )
}

export default UserDetailSettings;
