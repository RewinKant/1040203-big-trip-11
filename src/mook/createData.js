// export const getRandomInteger = (a = 0, b = 1) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));

//   return Math.floor(lower + Math.random() * (upper - lower + 1));
// };

// export const createTripItem = () => {
//   const eventType = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];
//   // offers: {
//   //   luggage: 30,
//   //   comfortClass: 100,
//   //   meal: 15,
//   //   chooseSeats: 5,
//   //   trainTravel: 40,
//   // }

//   const destinationItems = [
//     `Aliquam erat volutpat.`,
//     `In rutrum ac purus sit amet tempus.`,
//     `Nunc fermentum tortor ac porta dapibus.`,
//     `Aliquam id orci ut lectus varius viverra.`,
//     `Fusce tristique felis at fermentum pharetra.`,
//     `Sed sed nisi sed augue convallis suscipit in sed felis.`,
//     `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
//     `Cras aliquet varius magna, non porta ligula feugiat eget.`,
//     `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
//     `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
//     `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`
//   ];

//   export const createDestinationText = (counts) => {
//     let text = ``;
//     for (let i = 0; (i < counts) && (i < destinationItems.length); i++) {
//       text = text + destinationItems.slice(0, getRandomInteger(0, destinationItems.length))
//     }
//     return text;
//   };

//   const eventTypeItemRandom = () => {
//     return eventType[getRandomInteger(0, eventType.length)];
//   };

//   return {
//     eventTypeItem: eventTypeItemRandom(),
//     sity: ``,
//     startDate: ``,
//     endDate: ``,
//     price: 100,
//     offers: {
//       meal: false,
//       luggage: false,
//       chooseSeats: false,
//       trainTravel: false,
//       comfortClass: false,
//     },
//     destination: ``,
//   };
// };
