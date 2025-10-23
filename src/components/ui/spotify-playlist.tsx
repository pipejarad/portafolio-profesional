import { ExternalLink, Music } from "lucide-react";

interface SpotifyPlaylistProps {
  playlistUrl: string;
}

export function SpotifyPlaylist({ playlistUrl }: SpotifyPlaylistProps) {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 text-white text-center">
      <div className="flex justify-center mb-4">
        <Music className="h-12 w-12" />
      </div>
      <h3 className="text-2xl font-bold mb-4">🎧 Escucha mi trabajo</h3>
      <p className="text-green-100 mb-6">
        Una selección de grabaciones y colaboraciones en las que he participado.
      </p>
      <a
        href={playlistUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
      >
        <Music className="h-5 w-5" />
        Mi playlist en Spotify
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
