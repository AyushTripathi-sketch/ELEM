import { onValue, orderByKey, query, ref, limitToLast } from "firebase/database";
import { database } from '../firebase';

const dataDaily=[
    ["Date", "Consumed"],
    ["Mon", 1000],
    ["Tue", 1170],
    ["Wed", 1250],
    ["Thu", 1100],
    ["Fri", 1100],
    ["Sat", 1100],
    ["Sun", 1200]
]

function getDailyData(user){
    const eRef = ref(database, 'users/' + user.uid + '/Params/EnergyData')
    const lastSevenDaysValue = query(eRef, orderByKey(),limitToLast(7));
    onValue(lastSevenDaysValue,(snapshot)=>{
        var i=1;
        snapshot.forEach((childSnapshot) => {
        const epochTime = childSnapshot.key;
        const energyValue = childSnapshot.val();
        const date = new Date(epochTime * 1000).toISOString().slice(0, 10);
        dataDaily[i] = [date,energyValue];
        i++;
        });
    });
    if(!(dataDaily[1][0]==="Mon")){
        return dataDaily;
    }
}

export default getDailyData;