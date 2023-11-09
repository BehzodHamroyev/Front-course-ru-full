/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { translate } from 'bing-translate-api';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();
    const lang = localStorage.getItem('i18nextLng');
    const [state, setState] = useState<string[]>([]);
    console.log(lang, 'lan');

    // eslint-disable-next-line array-callback-return
    block.paragraphs.map((paragraphs) => {
      translate(paragraphs, null, 'en').then((res) => {
        setState((pre) => [...pre, res.translation]);
      }).catch((err) => {
        console.error(err);
      });
    });

    console.log(state, 'st');

    return (
        <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                  className,
                ])}
            >
            {block.title && (
            <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text title={block.title} className={cls.title} />}
                        off={(
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                          )}
                    />
            )}
            {block.paragraphs.map((paragraph, index) => (
                <ToggleFeatures
                        feature="isAppRedesigned"
                        on={(
                            <Text
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                          )}
                        off={(
                            <TextDeprecated
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                          )}
                    />
            ))}
        </div>
    );
  },
);
