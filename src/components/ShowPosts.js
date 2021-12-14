import { BeatLoading } from 'respinner';
//  , BounceLoading, CircularLoading, ClockLoading, RotateLoading, SpinLoading, WaveLoading, DashLoading, CopperLoading
//       <SpinLoading fill="#777" borderRadius={4} count={12} /> // use with customized props
//       <CircularLoading /> // or just use with default props
//----------------------------------------------------------

const ShowPosts = ({ loading, dataArray, totPosts, searchQry }) => {
  //console.log("Showposts:",dataArray)                                       //check
  // use a unique "key" from the dataArray ??
  let key = 0;
  return (
    <>
      <div
        className="Loading"
        style={{ margin: 'auto', textAlign: 'center', width: '90%' }}
      >
        {loading ? (
          <>
            <small className="tiny">Loading Data: </small>
            <BeatLoading fill="white" borderradius={8} count={35} />
          </>
        ) : (
          <>
            <small>
              Found {totPosts} total posts
              {searchQry ? ` for "${searchQry}"` : ' ( - not searched - )'}
            </small>
            <ol>
              {dataArray.map((post) => (
                <li key={key++}>
                  <a href={post.url} target="_blank" rel="noreferrer">
                    {post.title}
                  </a>
                  <br></br>
                  <small>
                    <i>by {post.author}</i>
                  </small>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </>
  );
};

export default ShowPosts;
