import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { GetArtist, GetContentItems } from '@/app/lib/data';


export default async function Page({ params }: { params: { lang: string, artist: string } }) {
  const artist = await GetArtist(params.lang, params.artist);
  return (
    
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <h2>{artist.Name}</h2>
          <h3>Genre: {artist.ArtistGenre}</h3>
          Stage: <Link href={
            "/" + artist.Language.Name + '/stage/' + artist.StageName
          }
          >{artist.StageName}</Link>
          <br/>
          <b>Description:
          </b>
          <div dangerouslySetInnerHTML={{ __html: artist.ArtistDescription }}/>
          
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
