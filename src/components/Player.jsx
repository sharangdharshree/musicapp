export const Player = ({fn,song})=>{
    return<div> 
        <button className="btn btn-success" onClick={()=>{
            fn(false, null);
        }}>Back to Songs</button>
        <p> <img src={song.artworkUrl100} alt="" />
        <br /><br />
            {song?.artistName} {song?.trackName}
        </p>
        <br />
        <audio controls>
            <source src={song?.previewUrl} type="audio/mp4"/>
            Your browser does not support fthe audio element.
        </audio>
        </div>
}