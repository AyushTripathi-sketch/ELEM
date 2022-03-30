import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { database } from "../firebase";
import { ref,onValue } from "firebase/database";
import { useUserAuth } from "../context/UserAuthContext";

const options = {
  width: 300,
  height: 220,
  max:1,
  redFrom: 0.9,
  redTo: 1,
  yellowFrom: 0.7,
  yellowTo: 0.9,
  minorTicks: 10,
};

export default function Gauge() {
  const {user} = useUserAuth();

  function getValue(){
    const starCountRef = ref(database, 'users/' + user.uid + '/Params/Current');
    let value;
    onValue(starCountRef, (snapshot) => {
      value = snapshot.val();
    });
    // console.log(value);
    return value;
  }

  function getData() {
    return [
      ["Label", "Value"],
      ["Current(A)", getValue()],
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
