import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
