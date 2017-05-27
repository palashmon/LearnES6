import { uniq } from 'lodash';
import insane from 'insane';
// import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog } from './src/config';

const ages = [1, 2, 1, 5, 2, 1];
console.log(uniq(ages));

const html = insane('<div>foo<span>bar</span></div>', { allowedTags: ['div'] });
console.log(html);

// Get config api key here
console.log(key, url, old, dog);

sayHi('Palash');