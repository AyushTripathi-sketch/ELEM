import { ref, set } from "firebase/database";
import { database } from "../firebase";

const  writeUserData = async (userId,name, email)=> {
  var energyData = {};
  var total;
    var p = 1648598400;
    for(let i = 1;i<=89;i++){
        var val = Math.random();
        total = total+val;
        energyData[p]=val;
        p = p - 86400; 
    }
  console.log(energyData);
  await set(ref(database, 'users/' + userId), {
    email: email,
    name: name,
  });
  await set(ref(database, 'users/' + userId+ '/Params/EnergyData'), energyData);
}

export default writeUserData;