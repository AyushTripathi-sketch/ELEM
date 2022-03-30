import { onValue, orderByKey, query, ref, limitToLast, endAt, startAt } from "firebase/database";
import { database } from '../firebase';

const dataMonthly=[
  ["Month", "Estimated"],
  ["Jan", 0],
  ["Feb", 0],
  ["Mar", 0],
  ["Apr", 0],
  ["May", 0],
  ["Jun", 0],
  ["Jul", 0],
  ["Aug", 0],
  ["Sep", 0],
  ["Oct", 0],
  ["Nov", 0],
  ["Dec", 0],
]

function getMonthlyData(user){

    const date = new Date();
    date.setHours(0,0,0,0);
    const endKey = date.getTime()/1000;
    date.setDate(1);
    date.setMonth(0);
    const startKey = date.getTime()/1000;

    const eRef = ref(database, 'users/' + user.uid + '/Params/EnergyData');
    const lastMonthlyValues = query(eRef, orderByKey(),startAt(startKey.toString()),endAt(endKey.toString()));
    onValue(lastMonthlyValues,(snapshot)=>{
        snapshot.forEach((childSnapshot) => {
        const epochTime = childSnapshot.key;
        const energyValue = childSnapshot.val();
        const date = new Date(epochTime * 1000);
        const month = date.getMonth();
        dataMonthly[month+1][1] =  dataMonthly[month+1][1]+ energyValue;
        });
        console.log(dataMonthly);
    });
    if(dataMonthly[1][1]>0){
        return dataMonthly;
    }
}

export default getMonthlyData;