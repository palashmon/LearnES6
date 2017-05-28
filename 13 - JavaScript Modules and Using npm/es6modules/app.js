import { uniq } from 'lodash';
import insane from 'insane';
import { apiKey as key, url, sayHi, old, dog } from './src/config';
import User, { createURL, gravatar } from './src/user';

const ages = [1, 2, 1, 5, 2, 1];
console.log(uniq(ages));

const html = insane('<div>foo<span>bar</span></div>', { allowedTags: ['div'] });
console.log(html);

// Get config api key here
console.log(key, url, old, dog);

sayHi('Palash');

// Using user module
const wes = new User('Wes Bos', 'wesbos@gmail.com', 'wesbos.com');
const profile = createURL(wes.name);
console.log('profile', profile);

const image = gravatar(wes.email);
console.log('image', image);

// Append image to body
const wesImage = new Image();
wesImage.src = image;
wesImage.alt = wes.website;
wesImage.title = wes.name;
document.body.appendChild(wesImage);