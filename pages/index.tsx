import type { NextPage } from 'next';
import { useState } from 'react';

import { Nullable } from '@utils/common';
import Header from '@components/header';

interface PageProps {
    lang: string,
    fullIntro: Nullable<String>
}

const Home: NextPage<PageProps> = ({ lang, fullIntro }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ introVisible, setIntroVisible ] = useState(false);

    return <div className="flex">
        <Header />
    </div>;
}

export default Home;