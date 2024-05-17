import letterPath from './images/shape=letter.svg';
import lockPath from './images/shape=lock.svg';
import showPath from './images/shape=show.svg';
import hidePath from './images/shape=hide.svg';
import Image from 'next/image';

export default function Icon({ type, alt = '', ...restProps }) {
  let src = '';

  switch (type) {
    case 'letter':
      src = letterPath;
      break;
    case 'lock':
      src = lockPath;
      break;
    case 'show':
      src = showPath;
      break;
    case 'hide':
      src = hidePath;
      break;
    default:
      throw new Error('Unknown type of Icon');
  }

  return <Image src={src} alt={alt} {...restProps} />;
}
