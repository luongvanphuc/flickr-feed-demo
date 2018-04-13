import fetchJsonp from "fetch-jsonp";

const FEEDS_BASE_API = "https://api.flickr.com/services/feeds";
const FLICKR_CALLBACK = "jsonFlickrFeed";

export const getFeeds = tags => {
  const request = fetchJsonp(`${FEEDS_BASE_API}/photos_public.gne?format=json&tagmode=any&tags=${tags}`, {
    jsonpCallbackFunction: FLICKR_CALLBACK
  }).then(response => response.json());

  return {
    type: "GET_FEEDS",
    payload: request
  };
};
