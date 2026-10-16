export default {
  async fetch(request) {
    let cookie = "";
    try {
      const res = await fetch("https://ipl2020-46d2f.firebaseio.com/cookie.json");
      const data = await res.json();
      cookie = data.hdntl || "";
    } catch(e) {
      cookie = "";
    }
    
    // Ab cookie ko apne m3u me use kar le
    return new Response(`Cookie: ${cookie}`);
  }
}
