import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {
  const posts = [
    {
      title: "First Post",
      date: "2026-01-01",
      preview: "This is the first article preview",
    },
  ];

  return (
    <div>
      <Header name="My Blog" />

      <About
        image="https://via.placeholder.com/150"
        about="This is my tech blog"
      />

      <ArticleList posts={posts} />
    </div>
  );
}

export default App;