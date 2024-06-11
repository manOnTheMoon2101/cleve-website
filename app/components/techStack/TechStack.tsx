import React from "react";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
const TechStack = () => {

const stack:any = {
    react:{
        name:'React',
        icon:<FaReact />
    },
    python:{
        name:'React',
        icon:<FaPython />
    },
    vue:{
        name:'VueJS',
        icon:<FaVuejs />
    }
}
  return (
    <div>
      <h2>Stack</h2>
<p>{stack.react.name}</p>
<p>{stack.react.icon}</p>
    </div>
  );
};

export default TechStack;
