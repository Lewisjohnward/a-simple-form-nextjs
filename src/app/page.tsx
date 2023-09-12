"use client";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
const Input = ({
  label,
  labelText,
  type,
}: {
  label: string;
  labelText: string;
  type: string;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label htmlFor={label}>{labelText}</label>
        <div className="flex gap-2 text-sky-800 font-bold">
          {label == "password" && (
            <DisplayPassword show={show} setShow={setShow} />
          )}
        </div>
      </div>
      <input
        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-sky-800 focus:border-2"
        type={type}
        id={label}
        name={label}
      />
    </div>
  );
};

const DisplayPassword = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: any;
}) => {
  const toggleShow = (e: any) => {
    e.preventDefault();
    setShow((prev: boolean) => !prev);
  };
  return (
    <button onClick={toggleShow}>
      {show ? (
        <p className="flex gap-2 after:content-['Hide']">
          <BsEyeSlash className="text-sky-800 text-2xl" />
        </p>
      ) : (
        <p className="flex gap-2 after:content-['Show']">
          <BsEye className="text-sky-800 text-2xl" />
        </p>
      )}
    </button>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="py-5 px-10 space-y-5 bg-white rounded shadow [&_label]:font-semibold">
        <form className="space-y-5">
          <h1 className="text-4xl">Log in</h1>
          <div>
            <p>
              <span className="mr-2">Need a Tabata Timer account?</span>
              <a
                href="#"
                title="Sign up for a Tabata Timer account"
                className="text-sky-700 underline hover:text-sky-800"
              >
                Create an account
              </a>
            </p>
          </div>
          <div className="space-y-5">
            <Input label={"email"} labelText={"Email Address"} type={"text"} />
            <Input
              label={"password"}
              labelText={"Password"}
              type={"password"}
            />
            <div className="flex gap-4">
              <input type="checkbox" id="keeploggedin" name="keeploggedin" />
              <label htmlFor="keeploggedin">Keep me logged in</label>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="py-2 px-8 rounded-lg bg-sky-700 border-2 border-sky-700 text-white font-bold hover:bg-sky-800 focus:outline-none focus:border-sky-500 focus:border-2">
              Log in
            </button>
          </div>
        </form>
        <p>
          <a href="#" className="underline text-sky-700 hover:text-sky-800">
            Forgot password?
          </a>
        </p>
      </div>
    </main>
  );
}
