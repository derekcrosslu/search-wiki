const OutputSearch = ({ articles }) => {
  return (
    <div className="main">
      {articles.map((article, index) => (
        <div
          x-data="{ dropdownOpen: true }"
          className="relative flex w-full rounded-full"
          key={index + Math.random().toFixed(2)}
        >
          <a
            href={article.link}
            className="flex items-center w-full px-4 py-3 rounded-full hover:bg-gray-100 "
          >
            {article.label}
          </a>
        </div>
      ))}
    </div>
  );
};
export default OutputSearch;
