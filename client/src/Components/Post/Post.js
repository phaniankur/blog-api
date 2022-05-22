import "./post.css";

export default function Post({title, desc, username, date}) {
  return (
    <div className="post">
      {/* <img
        className="postImg"
        src='https://images.hindustantimes.com/auto/img/2022/05/20/600x338/Scorpio_N_(1)_1653046262079_1653046289319.jpg'
        alt=""
      /> */}


      <div className="postInfo">

        <h2 className="postTitle">
            {title}
        </h2>
        {/* <span className="postDate">25/10/22</span> */}
        <p className="postDesc">
        {desc}
      </p>
      </div>
      <div className="post--username">
        <p>{username}</p>
        <p>{new Date(date).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
            })}</p>
      </div>

    </div>
  );
}