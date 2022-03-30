import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { ref,onValue } from "firebase/database";
import { database } from "../firebase";
import { useUserAuth } from "../context/UserAuthContext";



const options = {
  width: 300,
  height: 220,
  max:300,
  redFrom: 250,
  redTo: 300,
  yellowFrom: 200,
  yellowTo: 250,
  minorTicks: 5,
};

export default function GaugeVoltage() {
  const {user} = useUserAuth();

  function getValue(){
    const starCountRef = ref(database, 'users/' + user.uid + '/Params/Voltage');
    let value;
    onValue(starCountRef, (snapshot) => {
      value = snapshot.val();
    });
    console.log(value);
    return value;
  }

  function getData() {
    return [
      ["Label", "Value"],
      ["Voltage", getValue()],
    ];
  }
  const [data, setData] = useState(getData);

  useEffect(() => {
    if(user!=null){
      const id = setInterval(() => {
        setData(getData());
      }, 3000);
  
      return () => {
        clearInterval(id);
      };
    }
  });

  return (
    <Chart
      chartType="Gauge"
      width="100%"
      height="200px"
      data={data}
      options={options}
    />
  );
}
