import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/HomeLayout/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams()
    const [news, setNews] = useState({});
    // console.log( data, id, news)

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id)
        setNews(newsDetails)
    }, [data, id])

    return (
        <div>
            <header className='py-5'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-5'>
            <section className='col-span-9'>
                <h2 className='font-bold'>Dragon News</h2>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAside/>
            </aside>

            </main>
        </div>
    );
};

export default NewsDetails;