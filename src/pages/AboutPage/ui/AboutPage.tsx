import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div style={{color:'red'}}>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
