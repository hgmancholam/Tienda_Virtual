import "./categories.style.scss";


const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Women",
    },
    {
      id: 4,
      title: "Men",
    },
    {
      id: 5,
      title: "Children",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div className="category-container">
          <div className="background-img"></div>
          <div className="category-body-containter" key={id}>
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
