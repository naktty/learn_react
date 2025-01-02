// import Gallery from "./ui/gallery";
// import Profile from "./ui/profile";

// export default function App() {
//   return (
//     <>
//       <Profile />
//       <Gallery />
//     </>
//   );
// }

export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
