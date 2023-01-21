import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomepageBanner from '../HomepageBanner/HomepageBanner';
import Topics from '../Topics/Topics';


const Home = () => {
    const topics = useLoaderData();
    // console.log(topics.data);
    const topicsItem = topics.data;
    return (
        <div>
            <HomepageBanner></HomepageBanner>
            <div className='grid grid-cols-3 gap-4 mt-24 justify-items-center'>
                {
                    topicsItem.map(topic=><Topics
                        key={topic.id}
                        topic={topic}
                    ></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;