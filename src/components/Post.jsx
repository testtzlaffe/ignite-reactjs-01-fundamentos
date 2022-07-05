import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/testtzlaffe.png" />
          <div className={styles.authorInfo}>
            <strong>Christian</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio às 08:00" dateTime='2022-05-11 08:00:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p><a href="">https://site.com</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}