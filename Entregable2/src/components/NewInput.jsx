import  React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InputButton from "./InputButton";

function Home() {

  const [s, setSeconds] = useState(0);
  const [m, setMinutes] = useState(0);
  const [h, setHours] = useState(0);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      if (s < 60) {
        setSeconds(s => s + 1);
      }
      else {
        setSeconds(0)
        if (m < 60) {
          setMinutes(m => m + 1);
        }

        else {
          setSeconds(0);
          setMinutes(0);
          setHours(h => h + 1);
        }
      }
    }, 1);

    return () => clearInterval(interval);
  });

    return (
      <div>
        <h2>Timer</h2>
        <h3>The time is: {h}:{m}:{s}</h3>
      </div>
    );
  }
  
  function About() {
    const [users, setUsers] = useState([{ id: 0, name: "Default" }]);

    const onClick = () => {
      setUsers([...users, { id: users.length, name: "Subsequent" }])
    };

    var dataComponent = {
      type: 'button',
      value: 'Update'
    }

    return (
      <div>
        <h2>Click the button for a subsequent value to appear</h2>
        <InputButton onClick={onClick} {...dataComponent} />
        <div>
          {users.map((e) => (
            <div>
              {e.id} - {e.name}
            </div>
          ))}
        </div>
      </div>
  )
  }


  const Dashboard = ({data}) => {
    const { name } = useParams();
    return(
      <div>
        <h2>User Input Parameters</h2>
        <div>{name}</div>
      </div>
    )
  }

export {Home,About,Dashboard} ;