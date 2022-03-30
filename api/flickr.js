// Image Gallery App
// Key:
// b7b8b2bb56a331e4effac477bcafb657

// Secret:
// 605768840b4cfbdf
const ApiKey = 'b7b8b2bb56a331e4effac477bcafb657';

const data = {
  method: 'flickr.photos.search',
  sort: 'interestingness-desc',
  api_key: ApiKey,
  text: 'elon musk', // Search Text
  license: '4',
  extras: 'owner_name,license',
  format: 'json',
  nojsoncallback: 1,
};

const getFlickrImageURL = (photo, size) => {
  let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
  if (size) {
    // Configure image size
    url += `_${size}`;
  }
  url += '.jpg';
  return url;
};

const {method, api_key, text, license, extras, format, nojsoncallback} = data;

const parameters = new URLSearchParams(data);

// const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b7b8b2bb56a331e4effac477bcafb657&text=tesla&license=4&extras=owner_name,license&format=json&nojsoncallback=1`;

// console.log(url, '🍎');

export function getPhotos(callback, url) {
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      const photos1 = json.photos.photo.map(photo =>
        getFlickrImageURL(photo, 'z'),
      );
      return photos1;
    });
}
// getPhotos(getResponseData);

// function getResponseData(urlData) {
//   console.log('mmm', urlData);
// }
