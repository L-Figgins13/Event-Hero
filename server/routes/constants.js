// fb constants

// IMPORTANT NOTE PAGE_ID AND THE AUTH TOKEN WILL BE REPLACED BY CODE THAT CREATES LONG_TERM OAUTH TOKENS AND REFRESHES. FOR NOW THIS
const PAGE_ID = 718351648548456;
const AUTH_TOKEN =
  'EAAELyoAkOZC8BAGvmb5BOXYgYo9tQvI0xAZBOj0NZAM9yd67UMQkvfbixHlo0hfJUOZAtS99MIeabE1ektPUJ0UB4H9YsFgYwaSN09GZBsxFmTv1UGUpMT2egYA0pZCsbXD5LfzWIiyx9aIROFM7gcGpJO0Y5ZBRV2u402h7gyQV2huxtp4tJZAr';

const PAGE_ACCESS_TOKEN =
  'EAAELyoAkOZC8BAKnUlAR3Y08XfvtnLLmGWZB3ZAZCbmOkfr9N64VlWAA3P27qbX1ZCx7a397SdOUpFzsxnHigIEbZB40sZBmZCTZCsnyh50XMPavXb7orJJsJLB7xehZAVl7XwNmJ2CA8h2nd4e4Ab4uPBYbyFrVlZB2ilJ49awUsMKCZAUWsOH2XIkyNymet6I6RRwZD';
// FB_ROUTE_CONSTANTS
const GET_PAGE_INFO = `https://graph.facebook.com/${PAGE_ID}?fields=about,name,cover&auth&access_token=${AUTH_TOKEN}`;
const GET_FB_EVENTS = `https://graph.facebook.com/v3.2/${PAGE_ID}/events?fields=cover,name,start_time&access_token=${AUTH_TOKEN}`;

module.exports = {
  GET_PAGE_INFO,
  GET_FB_EVENTS,
  PAGE_ID,
  AUTH_TOKEN,
  PAGE_ACCESS_TOKEN,
};
