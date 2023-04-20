import { Typography } from '~/components';
import { styled } from '~/modules';

export const Wrapper = styled.ScrollView.attrs({
  bounces: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 100
  }
})`
  background-color: ${(props) => props.theme.colors.background};
`;

export const TopWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 26px;
  padding: 22px;
`;

export const TopText = styled(Typography).attrs({
  variant: 'semibold'
})`
  font-size: 24px;
`;

export const BottomText = styled(Typography)`
    color: #a0a0a0;
`;

export const GrowText = styled(Typography)`
  color: ${(props) => props.theme.colors.secondary};
`;

export const SectionTitle = styled(Typography).attrs({
  variant: 'semibold'
})`
  margin-top: 40px;
  margin-left: 22px;
  font-size: 17px;

  align-self: flex-start;
`;

export const SectionWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 22px;
`;

export const SectionContent = styled.View`
  flex: 1;
`;

export const SectionItem = styled.View`
  margin-bottom: 10px;
`;

export const SectionLabel = styled(Typography)`
  color: #a0a0a0;
`;
