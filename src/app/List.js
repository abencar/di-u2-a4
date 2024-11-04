import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function Componente () {
    return (
      <div>
        <ListQuimicos />
        <List />
      </div>
    );
  }
export function List() {
  const listItems = people
    .filter(person => person.profession !== 'químico')
    .map(person => (
      <ListItem key={person.id} person={person} />
    ));
  return (
    <article>
      <h1>Científicos</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

export function ListQuimicos() {
  const listItems = people
    .filter(person => person.profession === 'químico')
    .map(person => (
      <ListItem key={person.id} person={person} />
    ));
  return (
    <article>
      <h1>Químicos</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

function ListItem({ person }) {
  return (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
}