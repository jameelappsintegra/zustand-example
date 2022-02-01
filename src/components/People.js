import { usePeopleStore } from "../store";
const People = () => {
  const people = usePeopleStore((state) => state.people);
  return (
    <>
      <p>We have {people.length} people in our DB</p>
      <ul>
        {people.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </>
  );
};

export default People;
