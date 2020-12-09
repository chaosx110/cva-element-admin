import * as defaultSettings from "/src/settings";
const title = defaultSettings.title || 'Vue Element Admin';

export default function getPageTitle(pageTitle:string): string {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}