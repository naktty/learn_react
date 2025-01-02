import { getImageUrl } from '../lib/utils';

export default function Avatar({ person, size }) {
  const imgSize = size < 90 ? 's' : 'b';

  return (
    <img
      className="avatar"
      src={getImageUrl(person, imgSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
