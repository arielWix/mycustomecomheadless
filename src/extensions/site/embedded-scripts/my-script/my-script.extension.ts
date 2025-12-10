import { extensions } from '@wix/astro/builders';

export default extensions.embeddedScript({
  id: 'd49acb62-57df-4e15-b479-cbb130519738',
  name: 'My Script',
  placement: 'HEAD',
  scriptType: 'ESSENTIAL',
  source: './extensions/site/embedded-scripts/my-script/my-script.html',
});
