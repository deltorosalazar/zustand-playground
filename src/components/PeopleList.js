import { usePeopleStore } from "../store";

const PeopleList = () => {
  const people = usePeopleStore((state) => state.people);

  return (
    <div className="people-list">
      <p>We have {people.length} people in our database.</p>
      <ul>
        {people.map((person) => {
          return <li key={person}>{person}</li>;
        })}
      </ul>
    </div>
  );
};

export default PeopleList;
