import Avatar from "./avatar"

export default function Profile({ person }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <Avatar person={person} size={100} />
      <ul>
        <li>
          <b>Profession: </b> 
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length}</b>
          ({person.awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  );
}
