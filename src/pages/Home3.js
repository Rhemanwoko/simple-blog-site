import BlogList from '../bloglist';
import Loading from "../loading";
import useFetch from "../useFetch";

const Home3 = () => {
    const { data: blogs, isPending, error, handleDelete } = useFetch(' http://localhost:8000/blogs')

    return (
        <div className="home3">
            { error && <div>{ error }</div> }
            { isPending && <Loading />}
           {blogs && <BlogList blogs={blogs} title="All News Feed" handleDelete={handleDelete} />}
        </div>
    );
}

export default Home3;