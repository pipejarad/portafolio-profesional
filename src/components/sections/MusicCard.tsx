import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Play, Music } from "lucide-react";
import { MusicProject } from "@/lib/types";

interface MusicCardProps {
  musicProject: MusicProject;
}

export function MusicCard({ musicProject }: MusicCardProps) {
  return (
    <Card className="h-full" hover>
      {/* Album Art */}
      <div className="relative h-48 bg-gradient-to-br from-purple-50 to-pink-50">
        {musicProject.imageUrl ? (
          <Image
            src={musicProject.imageUrl}
            alt={`${musicProject.title} - ${musicProject.artist}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl opacity-50">🎵</div>
          </div>
        )}
        {musicProject.featured && (
          <div className="absolute top-3 right-3">
            <Badge
              variant="warning"
              size="sm"
              className="bg-yellow-100 text-yellow-800"
            >
              <Music className="w-3 h-3 mr-1" />
              Destacado
            </Badge>
          </div>
        )}
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-gray-800 ml-1" />
            </div>
          </div>
        </div>
      </div>

      <CardHeader>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {musicProject.title}
        </h3>
        <p className="text-purple-600 font-medium text-sm mb-2">
          {musicProject.artist}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {musicProject.description}
        </p>
      </CardHeader>

      <CardContent>
        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-4">
          {musicProject.genre.map((genre) => (
            <Badge key={genre} variant="secondary" size="sm">
              {genre}
            </Badge>
          ))}
        </div>

        {/* Release Date */}
        <p className="text-xs text-gray-500 mb-4">
          Lanzado:{" "}
          {new Date(musicProject.releaseDate + "-01").toLocaleDateString(
            "es-ES",
            {
              year: "numeric",
              month: "long",
            }
          )}
        </p>

        {/* Platform Links */}
        <div className="flex flex-wrap gap-2">
          {musicProject.spotifyUrl && (
            <Link
              href={musicProject.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              🎵 Spotify
            </Link>
          )}
          {musicProject.youtubeUrl && (
            <Link
              href={musicProject.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              ▶️ YouTube
            </Link>
          )}
          {musicProject.soundcloudUrl && (
            <Link
              href={musicProject.soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors"
            >
              🔊 SoundCloud
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
