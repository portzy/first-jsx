const MAX_NAME_LENGTH_TO_SHOW = 8;

function Person({ age, hobbies, name }) {
  const voteMsg = age >= 18 ? "please go vote!" : "you must be 18";

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {displayName}</li>
        <li>Age: {age}</li>
        <li>
          Hobbies:
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </li>
      </ul>
      <h3>{voteMsg}</h3>
    </div>
  );
}

