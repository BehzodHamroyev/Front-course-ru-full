import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Articlwe.module.scss';
import { memo } from 'react';

interface ArticlweProps {
    className?: string;
}

export const Articlwe = memo((props: ArticlweProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.Articlwe, {}, [className])}>
           
        </div>
    );
});