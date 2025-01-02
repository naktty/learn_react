// import Profile from './ui/profile';
import Avatar from './ui/avatar';

// const person1 = {
//   name: 'Maria Skłodowska-Curie',
//   imageId: 'szV5sdG',
//   profession: 'physicist and chemist',
//   awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
//   discovered: 'polonium (chemical element)'
// }

// const person2 = {
//   name: 'Katsuko Saruhashi',
//   imageId: 'YfeOqp2',
//   profession: 'geochemist',
//   awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
//   discovered: 'a method for measuring carbon dioxide in seawate'
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile person={person1} />
//       <Profile person={person2} />
//     </div>
//   );
// }

function Card({ children, title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card title="About">
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}
