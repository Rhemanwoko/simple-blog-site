import { useState, useEffect } from "react";
import BlogList from './bloglist';

const Home2 = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=>blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(()=>{
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    return (
        <div className="home2">
            <BlogList blogs={blogs} title="All News Feed" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Feeds" handleDelete={handleDelete} />
            <button onClick={() => setName('rhema')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home2;