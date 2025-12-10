import { app } from '@wix/astro/builders';

import myScript from './extensions/site/embedded-scripts/my-script/my-script.extension.ts';

import myPage from './extensions/dashboard/pages/my-page/my-page.extension.ts';

export default app().use(myScript).use(myPage);