import querystring from "querystring";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id = import.meta.env.VITE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_REFRESH_TOKEN;

const getAccessToken = async () => {
  const basic = btoa(`${client_id}:${client_secret}`);

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get access token");
    }

    return response.json();
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
};

export const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch now playing data");
    }

    return response.json();
  } catch (error) {
    console.error("Error getting now playing data:", error);
    throw error;
  }
};

export default async function getNowPlayingItem() {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      return false;
    }

    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    };
  } catch (error) {
    console.error("Error getting now playing item:", error);
    throw error;
  }
}
