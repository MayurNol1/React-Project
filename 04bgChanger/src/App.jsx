import { useState } from "react";

function App() {
  const [color,setColor] = useState("black");

  return (
    <>
     <div className="w-full h-screen duration-200 " style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-2xl">
            
            <button className="outline-none px-4 py-0.5 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            onClick={()=> setColor("red")}
            >
              Red
            </button>

             <button className="outline-none px-4 py-0.5 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            onClick={()=> setColor("green")}
            >
              green
            </button>

             <button className="outline-none px-4 py-0.5 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            onClick={()=> setColor("blue")}
            >
              blue
            </button>

             <button className="outline-none px-4 py-0.5 rounded-full text-black shadow-lg"
            style={{backgroundColor: "yellow"}}
            onClick={()=> setColor("yellow")}
            >
              yellow
            </button>

             <button className="outline-none px-4 py-0.5 rounded-full text-white shadow-lg"
            style={{backgroundColor: "olive"}}
            onClick={()=> setColor("olive")}
            >
              olive
            </button>

             <button className="outline-none px-4 py-0.5 rounded-full text-white shadow-lg"
            style={{backgroundColor: "brown"}}
            onClick={()=> setColor("brown")}
            >
              brown
            </button>

             <button className="outline-none px-4 py-0.5 rounded-full text-black shadow-lg"
            style={{backgroundColor: "white"}}
            onClick={()=> setColor("white")}
            >
              white
            </button>

          </div>
        </div>
     </div>
    </>
  )
}

export default App
