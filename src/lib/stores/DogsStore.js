import { writable } from 'svelte/store';

export const dogs = writable([]);
export const dogInfo = writable([]);
export const currentDogImage = writable([]);
export const favouriteDogs = writable([]);

export function getDogID(dog) {
    return dog.id;
}

export async function fetchDogs() {
    const url = "https://api.thedogapi.com/v1/images/search";   
    const res = await fetch(url);
    const data = await res.json();
    dogs.set(data.map(dog => {
        return {
            ...dog,
            id: getDogID(dog),
        }
    }));
}




// let dogsData = writable({});

// export const dogs = {
//     subscribe: dogsData.subscribe,
//     set: async (url = "https://api.thedogapi.com/v1/images/search") => {
//         const res = await fetch(url);
//         const json = await res.json();
//         if(json)
//             dogsData.set(json);
//         else
//             dogsData.set(null);
//     }
// }


// // async function getDoggos() {
// //     const res = await fetch("https://api.thedogapi.com/v1/images/search", {});
// //     const json = await res.json();
// //     if(res.ok) {   
// //         console.log(json);
// //         return json;
// //     } else {
// //         console.log("error");
// //         return null;
// //     }
// // }

// // async function createDogs() {
// // 	const { subscribe, set, update } = writable("");

// //     let json = await getDoggos();

// //     if(json != null) {
// //         set(json);
// //     }
// //     else {
// //         set(null);
// //     }

// // 	return {
// // 		subscribe,
// //         new : () => { 
// //             let json = getDoggos().then((json) => {
// //                 if(json != null) {
// //                     set(json);
// //                 }
// //                 else {
// //                     set(null);
// //                 }
// //             }).catch((error) => {
// //                 console.log(error);
// //                 set(null);
// //             });
// //         }
// // 	};
// //}

