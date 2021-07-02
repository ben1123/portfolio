import React, { useState, useEffect } from 'react';
import './portfolio.scss';
import PortfolioList from './portfolioList/portfolioList';
import ProjectModal from './projectModal/projectModal';
import { featuredAppPortfolio, webAppPortfolio, mobileAppPortfolio } from '../../data';


const portfolios = {
    featured: featuredAppPortfolio,
    'web app': webAppPortfolio,
    'mobile app': mobileAppPortfolio
};

const lists = [
    {
        title: 'Featured',
        value: 'featured'
    },
    {
        title: 'Web App',
        value: 'web app'
    },
    {
        title: 'Mobile App',
        value: 'mobile app'
    },
    {
        title: 'Branding',
        value: 'branding'
    }
];



export default function Portfolio() {

    const [selectedList, setSelectedList] = useState('featured');
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);


    const listClickHandler = (listTitle) => {
        console.log(selectedList);
        setSelectedList(listTitle);
        console.log(portfolioItems)
    };

    const showProjectDetails = () => {
        setModalOpen(true)
    };

    const cancelModalHandler = () =>  {
        setModalOpen(false);
    }

    useEffect(() => {
        const items = portfolios[selectedList];
        setPortfolioItems(items);
    }, [selectedList])


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {lists.map(list => {
                    return <PortfolioList listTitle={list.value} selected={selectedList} onClick={listClickHandler} />
                })}
            </ul>
                { modalOpen && <ProjectModal onCancel={cancelModalHandler}/>}

            <div className="container" >
                {portfolioItems.map(item => {
                    return <div className="item" onClick={showProjectDetails}>
                        <img src={item.image} alt="" />
                        <div className="modal"><span>{item.title}</span> </div>
                    </div>
                })}
            </div>
        </div>
    )
}
