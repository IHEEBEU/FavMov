import React, { useState } from 'react';

function Actor() {
  const [isAddingActor, setIsAddingActor] = useState(false);
  const [actorName, setActorName] = useState('');
  const [actorNote, setActorNote] = useState('');
  const [actorPic, setActorPic] = useState(null);
  const [actorsList, setActorsList] = useState([]);

  const handleAddClick = () => {
    setIsAddingActor(true);
  };

  const handleCancelClick = () => {
    setIsAddingActor(false);
    setActorName('');
    setActorNote('');
    setActorPic(null);
  };

  const handleActorSubmit = () => {
    if (actorName && actorNote && actorPic) {
      const newActor = {
        name: actorName,
        note: actorNote,
        pic: actorPic,
      };
      setActorsList([...actorsList, newActor]);
      setIsAddingActor(false);
      setActorName('');
      setActorNote('');
      setActorPic(null);
    }
  };

  const handleDeleteClick = (index) => {
    const updatedList = actorsList.filter((_, i) => i !== index);
    setActorsList(updatedList);
  };

  return (
    <div className="favorite-actors">
      <h2>This is your list of favorite actors</h2>
      {!isAddingActor ? (
        <button className="add-button" onClick={handleAddClick}>
          +
        </button>
      ) : (
        <div className="add-actor-form">
        
            <input
              type="text"
              placeholder="Name of the actor"
              value={actorName}
              onChange={(e) => setActorName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Note about the actor"
              value={actorNote}
              onChange={(e) => setActorNote(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setActorPic(e.target.files[0])}
            />
          <div className="buttons">
            <button className="submit-button" onClick={handleActorSubmit}>
              Submit
            </button>
            <button className="cancel-button" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="actors-list">
        {actorsList.map((actor, index) => (
          <div key={index} className="actor-card">
            <button className="delete-button" onClick={() => handleDeleteClick(index)}>
              X
            </button>
            <img
              src={URL.createObjectURL(actor.pic)}
              alt={`Profile pic of ${actor.name}`}
              className="actor-pic"
            />
            <p className="actor-name">{actor.name}</p>
            <p className="actor-note">{actor.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actor;
