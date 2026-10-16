import { handleXYZ } from './XYZ.js';
import { handleicc } from './icc.js';
import { handleCookie } from './cookie.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/XYZ") {
      return handleXYZ();
    }

    if (url.pathname === "/icc") {
      return handleicc();
    }

    if (url.pathname === "/cookie") {
      return handleCookie();
    }

    return new Response("Yeh main index.js hai!");
  }
}
