import type { RouteMeta } from 'vue-router';

function useTitle(meta: RouteMeta) {
  if(meta.title) {
    document.title = meta.title;
  }
}

export default useTitle;