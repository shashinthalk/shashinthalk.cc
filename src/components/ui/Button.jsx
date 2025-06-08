import clsx from 'clsx';
import { Link } from 'react-router-dom';

function Button({ children, className = '', urlto='#', target='_blank', onClick }) {
  const baseClasses = '!z-40 px-6 py-2 md:px-10 md:py-3 rounded-full text-base md:text-lg cursor-pointer transition-all duration-300 hover:scale-105';
  
  if (onClick) {
    return (
      <button onClick={onClick} className={clsx(baseClasses, className)}>
        {children}
      </button>
    );
  }

  return (
    <Link to={urlto} target={target} className={clsx(baseClasses, className, urlto)}>
      {children}
    </Link>
  );
}

export default Button;
