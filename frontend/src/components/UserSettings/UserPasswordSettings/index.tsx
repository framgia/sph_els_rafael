import {FC,useState} from 'react';

const UserPasswordSettings:FC = () =>{
    const [input, setInput] = useState({
        oldPassword:"",
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
      }
    return(
        <form onSubmit={onSubmit} className="container pt-10 bg-none flex flex-col justify-self-start rounded-xl md:justify-center">
        
        <div className="w-80 mb-2 mx-auto">
          <label htmlFor="password" className="block font-sans text-lg text-white font-bold">
            Old Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={(input && input.password) || ""}
            onChange={handleChange}
            className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
        </div>
        <div className="w-80 mb-2 mx-auto">
          <label htmlFor="password" className="block font-sans text-lg text-white font-bold">
            New Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={(input && input.password) || ""}
            onChange={handleChange}
            className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
        </div>
        <div className="w-80 mx-auto mb-2">
          <label htmlFor="passwordConfirm" className="block font-sans text-lg text-white font-bold">
            Confirmed Password
          </label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            value={(input && input.passwordConfirm) || ""}
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

export default UserPasswordSettings;
