import React from 'react';
import CardLayout from './CardLayout';


const data = [
    {
        name: "John Doe",
        post: "Product Designer",
        image: "",
        rating: 4,
        description: "Create custom landing pages with SnagCart that converts more visitors than any website. Easy, Reliable & Fast.",
    },
    {
        name: "Tiana Dokidis",
        post: "CMO, Dotcorn",
        image: "",
        rating: 2,
        description: "Create custom landing pages with SnagCart that converts more visitors than any website. Easy, Reliable & Fast.",
    },
    {
        name: "Talan Bergson",
        post: "CEO, Greener",
        image: "",
        rating: 5,
        description: "Create custom landing pages with SnagCart that converts more visitors than any website. Easy, Reliable & Fast.",
    },
]


function Cards() {
    return (
        <>
            <div className='p-5 md:p-10 lg:p-20'>

                <div className='flex flex-wrap justify-around items-center'>
                    {
                        data.map((data, id) => (
                            <div key={id}>
                                <CardLayout name={data.name} post={data.post} image={data.image} rating={data.rating} description={data.description} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Cards;