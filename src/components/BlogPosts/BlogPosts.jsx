import "./BlogPosts.scss";

export default function BlogPosts({ posts }) {
  return (
    <section className="blog">
      <h3 className="blog__header">Country Blog</h3>
      <article className="blog__article">
        <h2 className="blog__title">Mr Title</h2>
        <p className="blog__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          doloremque nihil perferendis sed, nam corporis enim quo incidunt
          laboriosam, neque animi ipsa sapiente sint? Quibusdam iste molestiae
          atque corrupti ad. Nemo voluptas eligendi deleniti cupiditate nostrum?
          Sapiente eaque esse dolores obcaecati alias id eveniet ullam
          cupiditate neque voluptate hic, ea rerum nisi. Commodi labore
          temporibus, ipsum voluptas mollitia soluta quas. Illo, necessitatibus
          ab. Maxime necessitatibus consectetur, esse optio cupiditate nobis
          provident, velit perspiciatis distinctio, vero iure reprehenderit
          aperiam amet dolore tempore laudantium itaque! Id veniam cum molestiae
          earum nihil labore.
        </p>
      </article>
      <article className="blog__article">
        <h2 className="blog__title">Mr Title</h2>
        <p className="blog__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          doloremque nihil perferendis sed, nam corporis enim quo incidunt
          laboriosam, neque animi ipsa sapiente sint? Quibusdam iste molestiae
          atque corrupti ad. Nemo voluptas eligendi deleniti cupiditate nostrum?
          Sapiente eaque esse dolores obcaecati alias id eveniet ullam
          cupiditate neque voluptate hic, ea rerum nisi. Commodi labore
          temporibus, ipsum voluptas mollitia soluta quas. Illo, necessitatibus
          ab. Maxime necessitatibus consectetur, esse optio cupiditate nobis
          provident, velit perspiciatis distinctio, vero iure reprehenderit
          aperiam amet dolore tempore laudantium itaque! Id veniam cum molestiae
          earum nihil labore.
        </p>
      </article>
      <article className="blog__article">
        <h2 className="blog__title">Mr Title</h2>
        <p className="blog__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          doloremque nihil perferendis sed, nam corporis enim quo incidunt
          laboriosam, neque animi ipsa sapiente sint? Quibusdam iste molestiae
          atque corrupti ad. Nemo voluptas eligendi deleniti cupiditate nostrum?
          Sapiente eaque esse dolores obcaecati alias id eveniet ullam
          cupiditate neque voluptate hic, ea rerum nisi. Commodi labore
          temporibus, ipsum voluptas mollitia soluta quas. Illo, necessitatibus
          ab. Maxime necessitatibus consectetur, esse optio cupiditate nobis
          provident, velit perspiciatis distinctio, vero iure reprehenderit
          aperiam amet dolore tempore laudantium itaque! Id veniam cum molestiae
          earum nihil labore.
        </p>
      </article>
      {/* map over blog posts for location */}
    </section>
  );
}
