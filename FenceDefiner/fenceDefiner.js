import * as Location from 'expo-location';
import defineTask from './taskDefiner';

/*
* Wrapper Function that makes it easier to define geofences. 
* We'll always bind to the same taskName - 'notification'
* If not, then make sure they match between taskDefiner and fenceDefiner.
* 
* The Idea is to have them all on the same notification to make this a bit easier.
* Always pass in an array of areas!
*/

defineTask();

let defineFences = (areas, taskName = 'notification') => {

  Location.startGeofencingAsync(taskName, areas)
  .then(val => console.log(`Registered: ${taskName}`))
  .catch(err => console.log(`Error: ${err}`))

}

export default defineFences;