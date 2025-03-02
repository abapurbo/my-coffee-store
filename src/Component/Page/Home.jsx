import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Categories from './Categories';
import Heading from './Heading';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <div className=' container lg:mx-auto  lg:p-12 md:p-4 p-6'>
                <Banner></Banner>

                <Heading title={'Browser Coffees By Category'} subTitle={'Choose your desired coffee category to browse through specific coffee that fit in your taste'}></Heading>


                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
            </div>



        </div>
    );
};

export default Home;