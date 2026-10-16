export async function handleCookie() {
  let cookie = "";
  try {
    const res = await fetch("https://ipl2020-46d2f.firebaseio.com/cookie.json");
    const data = await res.json();
    cookie = data.hdntl || "";
  } catch(e) {
    cookie = "";
  }
  
  return new Response(`Cookie: ${cookie}`);
}
