const GifList = ({data}) => {
    return ( <div>
      <ul>
      {data.data.map(gif=>(
           <div key={gif.id}>
            <li>
            <h3>{gif.title}</h3>
            <img src={gif.images.original.url} alt="Gif" />
            </li>
           </div>

        ))}
      </ul>
    </div> );
}
 
export default GifList;