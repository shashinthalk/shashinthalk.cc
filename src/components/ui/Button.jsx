import clsx from 'clsx';
import { Link } from 'react-router-dom';

function Button({ children, className = '', urlto='#', target='_blank' }) {
  const baseClasses = '!z-40 md:px-10 md:py-2 px-8 py-2 rounded-full text-lg md:text-2xl cursor-pointer';
  return (
    <Link to={urlto} className={clsx(baseClasses, className, urlto)}>
      {children}
    </Link>
  );
}

export default Button;
