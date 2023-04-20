import { Typography } from '~/components';
import { styled } from '~/modules';

export const Wrapper = styled.ScrollView.attrs({
  bounces: false,
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center'
  }
})`
  background-color: ${(props) => props.theme.colors.background};
`;

export const SectionTitle = styled(Typography).attrs({ variant: 'semibold' })`
  font-size: 18px;
  align-self: flex-start;
  margin-left: 22px;
  padding: 20px 0;
`;

export const Section = styled.View`
  padding: 22px;
`;

export const VerticalBannerWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0 22px;
  justify-content: space-between;
`;

export const VerticalBanner = styled.View`
  padding: 20px 12px;
  width: 160px;
  height: 215px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};
`;

export const BannerTitle = styled(Typography).attrs({ variant: 'semibold' })`
  font-size: 12px;
  width: 80%;
`;
