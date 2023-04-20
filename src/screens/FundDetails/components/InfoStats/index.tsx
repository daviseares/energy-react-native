import { type FC } from 'react';
import { IconInfo } from '~/assets';
import { Typography } from '~/components';
import * as S from './styles';

const InfoStats: FC = () => (
  <>
    <S.SectionTitle>{'Info & Stats'}</S.SectionTitle>
    <S.SectionWrapper>
      <S.SectionContent>
        <S.SectionItem>
          <S.SectionLabel>
            {'AUM '}
            <IconInfo />
          </S.SectionLabel>
          <Typography>{'$430.88m'}</Typography>
        </S.SectionItem>
        <S.SectionItem>
          <S.SectionLabel>
            {'Vintage Range '}
            <IconInfo />
          </S.SectionLabel>
          <Typography>{'2019 - 2022'}</Typography>
        </S.SectionItem>
        <S.SectionItem>
          <S.SectionLabel>
            {'Price at Close '}
            <IconInfo />
          </S.SectionLabel>
          <Typography>{'$17.68'}</Typography>
        </S.SectionItem>
      </S.SectionContent>

      <S.SectionContent>
        <S.SectionItem>
          <S.SectionLabel>
            {'Issue Date '}
            <IconInfo />
          </S.SectionLabel>
          <Typography>{'18/04/2022'}</Typography>
        </S.SectionItem>
        <S.SectionItem>
          <S.SectionLabel>
            {'TER '}
            <IconInfo />
          </S.SectionLabel>
          <Typography>{'0.15%'}</Typography>
        </S.SectionItem>
        <S.SectionItem>
          <S.SectionLabel>
            {'Price at Open '}
            <IconInfo />
          </S.SectionLabel>
          <Typography>{'$17.74'}</Typography>
        </S.SectionItem>
      </S.SectionContent>
    </S.SectionWrapper>
  </>
);

export default InfoStats;
