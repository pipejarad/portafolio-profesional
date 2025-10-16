import { Metadata } from 'next';
import Image from 'next/image';
import { musicStory } from '@/data/portfolio';
import { PhotoGallery } from '@/components/ui/photo-gallery';
import { SpotifyPlaylist } from '@/components/ui/spotify-playlist';

export const metadata: Metadata = {
  title: 'Mi Lado Musical - Felipe Jara',
  description: 'La experiencia musical de Felipe Jara como bajista profesional, colaboraciones con artistas y la conexión entre música y desarrollo de software.',
};

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={musicStory.heroImage}
          alt="Felipe Jara tocando bajo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              🎸 {musicStory.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Bajista profesional y desarrollador
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Historia Musical */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🎶 Mi Trayectoria Musical
            </h2>
            <div className="prose prose-lg max-w-none">
              {musicStory.story.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Galería de Fotos */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              📸 En Acción
            </h2>
            <PhotoGallery photos={musicStory.photos} />
          </div>
        </section>

        {/* Spotify Playlist */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <SpotifyPlaylist playlistUrl={musicStory.spotifyPlaylist} />
          </div>
        </section>

        {/* Conexión Música-Desarrollo */}
        <section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              💻 Música y Desarrollo
            </h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {musicStory.philosophy}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}