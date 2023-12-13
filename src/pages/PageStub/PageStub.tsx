import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { PageLayout } from '@/components/PageLayout';
import { BottomToolbar } from '@/components/BottomToolbar';
import { ColorModeToggler } from '@/components/ColorModeToggler';

export const PageStub: FC = () => {
  const params = useParams();
  return (
    <PageLayout
      bottomToolbar={
        <BottomToolbar>
          <ColorModeToggler />
        </BottomToolbar>
      }
    >
      "{params.slug}" page stub
    </PageLayout>
  );
};
