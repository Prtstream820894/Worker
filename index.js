import { handleXYZ } from './XYZ.js';
import { handleicc } from './icc.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Jab koi /XYZ kholega toh XYZ.js chalegi
    if (url.pathname === "/XYZ") {
      return handleXYZ();
    }

    // Jab koi /icc kholega toh icc.js chalegi
    if (url.pathname === "/icc") {
      return handleicc();
    }

    // Normal link kholne par yeh dikheगा
    return new Response("Yeh main index.js hai!");
  }
};
