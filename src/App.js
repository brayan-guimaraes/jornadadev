import Video from "./pages/Video";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="Brayan"
          description="Gatinho veloz"
          music="Musica de suspense"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes={777}
          messages={888}
          shares={999}
          name="Brayan"
          description="Gatinho curioso"
          music="Clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
      </div>
    </div>
  );
}

export default App;
