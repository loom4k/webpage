import type { NextPage } from 'next';
import { useState } from 'react';

import { Nullable } from '@utils/common';
import Header from '@components/header';
import Hero from '@components/hero';
import About from '@components/about';

interface PageProps {
    lang: string,
    fullIntro: Nullable<String>
}

const Home: NextPage<PageProps> = ({ lang, fullIntro }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ introVisible, setIntroVisible ] = useState(false);

    return <div className="relative">
        <Header />
        <Hero />
        <About />
    </div>;
}

export default Home;