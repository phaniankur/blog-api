import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      {/* <img
        className="postImg"
        src='https://images.hindustantimes.com/auto/img/2022/05/20/600x338/Scorpio_N_(1)_1653046262079_1653046289319.jpg'
        alt=""
      /> */}


      <div className="postInfo">

        <h2 className="postTitle">
            Blog Title
        </h2>
        {/* <span className="postDate">25/10/22</span> */}
        <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti?
      </p>
      </div>
      <div className="post--username">
        <p>Username</p>
        <p>25/02/22</p>
      </div>

    </div>
  );
}