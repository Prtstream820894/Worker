import { handleXYZ } from './XYZ.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Jab koi /XYZ kholega toh XYZ.js chalegi
    if (url.pathname === "/XYZ") {
      return handleXYZ();
    }

    // Normal link kholne par yeh dikhega
    return new Response("Yeh main index.js hai!");
  }
};
