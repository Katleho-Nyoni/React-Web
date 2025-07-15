import { useParams } from "react-router-dom";

export default function SandlanaPoems(){
    const { name } = useParams(); // 
    

  const poems = {
    "love-letter": `
      Bound by the edges of the universe, not because my love for you is finite,
      but because I’m trying to be humble so that God doesn’t become jealous
      that none of His servants ever loved Him that deeply.
    `,
    "forever": `
      When it comes to you, my patience comes second only to Christ.
    `,
    "first-meeting": `
      The day I met you, even the sun bowed for a second, Sandlana.
    `,
  };


  return (
    <div className="poem-page">
      <h1>For Sandlana</h1>
      {name}
    </div>
  );
}