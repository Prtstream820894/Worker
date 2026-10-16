export async function handleCookie() {
  let cookie = "";
  try {
    const res = await fetch("https://ipl2020-46d2f.firebaseio.com/cookie.json");
    const data = await res.json();
    cookie = data.hdntl || "";
  } catch(e) {
    cookie = "Not Found";
  }
  
  return new Response(`🍪 Firebase Stored Cookie:\n${cookie}`, {
    headers: { "Content-Type": "text/plain" }
  });
}
