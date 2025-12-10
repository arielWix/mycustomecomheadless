import { multilingual } from '@wix/site';


console.log('Hello from my EM script logger, how are you today?');
const allLanguages = multilingual.getAvailableLanguages();
console.log('Available languages - EM script', { allLanguages });
