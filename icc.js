export default {
async fetch(request) {
const PLAYLIST_URL = "https://raw.githubusercontent.com/doctor-8trange/nexphi0/refs/heads/main/data/icc.m3u";

try {
  const response = await fetch(PLAYLIST_URL);

  if (!response.ok) {
    return new Response("Playlist fetch failed: " + response.status, {
      status: 502
    });
  }

  const playlist = await response.text();

  const updatedPlaylist = playlist
    .split(/\r?\n/)
    .map(line => {
      if (!line.startsWith("#EXTINF:")) {
        return line;
      }

      line = line.replace(
        /group-title="[^"]*"/g,
        'group-title="✨✦ʟɪᴠᴇ ᴇᴠᴇɴᴛꜱ✦✨"'
      );

      const commaIndex = line.indexOf(",");

      if (commaIndex !== -1) {
        let title = line.substring(commaIndex + 1).trim();

        if (title.includes("|")) {
          title = title.substring(title.indexOf("|") + 1).trim();
        }

        title = title.replace(/\s*\[\s*ICC TV\s*\]\s*$/i, "").trim();
        title += " [ ICC TV ]";

        line = line.substring(0, commaIndex + 1) + title;
      }

      return line;
    })
    .join("\n");

  return new Response(updatedPlaylist, {
    headers: {
      "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache"
    }
  });

} catch (error) {
  return new Response("Error: " + error.message, {
    status: 500
  });
}

}
};
