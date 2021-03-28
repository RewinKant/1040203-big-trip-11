import {createSiteTripInfo} from "./view/site-tripInfo.js";
import {createSiteMenu} from "./view/site-menu.js";
import {createSiteFilter} from "./view/site-filter.js";
import {createSiteTripSort} from "./view/trip-sort.js";
import {createSiteNewTrip} from "./view/new-trip.js";
import {createSiteTripDays} from "./view/trip-days.js";
import {createSiteTripItem} from "./view/trip-item.js";
// import {createDestinationText} from "./mook/dataTest.js";

const TASK_COUNT = 3;


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const siteMainTrip = document.querySelector(`.trip-main`);
const siteSwitchTripView = siteMainTrip.querySelector(`.trip-controls > h2:first-child`);
const siteTripFilter = siteMainTrip.querySelector(`.trip-controls > h2:last-child`);

const siteMainElement = document.querySelector(`.page-main`);
const siteTripEvents = siteMainElement.querySelector(`.trip-events`);

render(siteMainTrip, createSiteTripInfo(), `afterbegin`);
render(siteSwitchTripView, createSiteMenu(), `afterend`);
render(siteTripFilter, createSiteFilter(), `afterend`);
render(siteTripEvents, createSiteTripSort(), `beforeend`);
render(siteTripEvents, createSiteNewTrip(), `beforeend`);
render(siteTripEvents, createSiteTripDays(), `beforeend`);

const siteTripList = siteTripEvents.querySelector(`.trip-events__list`);
for (let i = 0; i < TASK_COUNT; i++) {
  render(siteTripList, createSiteTripItem(), `beforeend`);
}

// consolelog(createDestinationText(5));
