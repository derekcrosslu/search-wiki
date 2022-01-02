

const OutputSearch = ({ articles }) => {
    return (
        <div className='main'>
            {
                articles.map((article, index) => (
                    <div x-data="{ dropdownOpen: true }" className="relative  flex rounded-full w-full" key={index + Math.random().toFixed(2)}>
                        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 flex rounded-full w-full " >
                            {article.label}
                        </a>
                    </div>
                ))
            }
        </div>
    )
}
export default OutputSearch