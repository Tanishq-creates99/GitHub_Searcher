import React, { ReactEventHandler } from "react";
import {IoSearch} from "react-icons/io5"
type Props = {
    value:string;
    onChange:React.ChangeEventHandler<HTMLInputElement>;
    onSubmit:React.FormEventHandler<HTMLFormElement> ;
};

function SearchAndBtn(props: Props) {
  return (
    <form onSubmit={props.onSubmit} className=" shadow-md pt-2 flex items-center justify-between
     gap-2 w-full focus-within:ring-2 *:focus-within:ring-blue-700  dark:focus-within:ring-gray-200 
     rounded-lg px-1 py-2 dark:bg-slate-600 bg-white">
      <section className="flex items-center w-full h-[45px] gap-2 p-2 ">
        {" "}
        <IoSearch className="text-2xl text-blue-400"/>
        <input value={props.value} 
        onChange={props.onChange}
        placeholder="Search Github Username" typeof="text"  className="bg-inherit outline-none w-full h-[35px] rounded "/>
      </section>
      <button className="rounded-lg bg-blue-500 px-5 py-2
      text-white hover:opacity-75 transition-all">Search</button>
    </form>
  );
}

export default SearchAndBtn;
