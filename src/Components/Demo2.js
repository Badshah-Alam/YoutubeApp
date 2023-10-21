import React, { useState, useRef, useEffect } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);

  console.log("Rendering.........");

  const i = useRef(null);
  // let i={
  //     current:null,
  // }
  useEffect(() => {
    if (i.current) return;
    i.current = setInterval(() => {
    //   console.log("badshah", Math.random());
      // return ()=> clearInterval(i.current)
    }, 1000);
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-50  border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 p-2 m-4 "
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          increase x
        </button>
        <span className="font-bold text text-xl">let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4 "
          onClick={() => {
            setY(y + 1);
          }}
        >
          increase y
        </button>
        <span className="font-bold text text-xl"> state= {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4 "
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("Ref", ref.current);
          }}
        >
          increase ref
        </button>
        <span className="font-bold text text-xl"> useRef= {ref.current}</span>
      </div>
      <button
        className="bg-red-900 p-2 m-4 text-white font-bold  rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        stop Printing
      </button>
    </div>
  );
};

export default Demo2;
