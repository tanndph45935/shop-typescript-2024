import styles from './notFound.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
const NotFound = () => {
  return (
    <div className={cx('notFound')}>
      <h1>404 - Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <a href="/"><button>Back to home page</button></a>
    </div>
  );
};

export default NotFound;