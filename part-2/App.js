function App() {
    return (
      <div>
        <Tweet
          name="Akina"
          username="bittersweet"
          date={new Date().toDateString()}
          message="La la la la"
        />
        <Tweet
          name="Anri"
          username="catseye"
          date={new Date().toDateString()}
          message="It's summer!"
        />
        <Tweet
          name="Seiko"
          username="seising"
          date={new Date().toDateString()}
          message="What?"
        />
      </div>
    );
  }