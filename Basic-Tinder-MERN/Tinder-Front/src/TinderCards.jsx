import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'; // Ensure you have this installed
import axios from 'axios'; // Import Axios
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tinder/cards'); // Adjust URL as needed
      setPeople(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(people);
  

  const swiped = (direction, name) => {
    console.log(`Swiped ${direction} on ${name}`);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person._id} // Use _id as the key if available
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="tinderCard"
            >
              <h2>{person.name}</h2>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
