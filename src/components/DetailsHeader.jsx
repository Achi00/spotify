import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId]?.attributes

  return(
  <div className="relative w-full flex flex-col pb-3">
    <div className="-ml-6 w-full bg-gradient-to-b from-[#2A323A] to-black sm:h-48 h-28" />
    <div className="absolute inset-0 flex items-center p-3">
      <img src={artistId ? 
      artist?.artwork?.url.replace("{w}", '500').replace('{h}', '500') 
      : songData?.images?.coverart} alt="art" 
      className="p-3 sm:w-48 w-28 sm:h-48 h-28 rounded-xl object-cover drop-shadow-[10px_25px_15px_rgba(0,0,0,0.35)] hover:shadow-gray-400 transition"
      />
      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artist?.name : songData?.title}
        </p>
        <p className="text-base text-gray-300 mt-3">{artistId ? artist?.name : songData?.releasedate}
        </p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          </Link>
        )}
        <p className="text-base text-gray-400 mt-2">
        {artistId
            ? artist?.genreNames[0]
            : songData?.genres?.primary}
        </p>
      </div>
    </div>
    <div className="w-full sm:h-44 h-24"/>
  </div>
  )
};

export default DetailsHeader;
