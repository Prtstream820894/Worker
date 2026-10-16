import { handleXYZ } from './XYZ.js';
import { handleicc } from './icc.js';
import { handleicc } from './cookie.js';


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
// Jab koi /icc kholega toh icc.js chalegi
    if (url.pathname === "/cookie") {
      return handleicc();
    }
    // Normal link kholne par yeh dikheगा
    return new Response("Yeh main index.js hai!");
  }
};
