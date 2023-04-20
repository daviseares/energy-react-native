import { type FC } from 'react';
import Icon from '@expo/vector-icons/AntDesign';
import { isEmpty, styled } from '~/modules';
import { Touchable } from './Touchable';
import { Typography } from './Typography';

const Wrapper = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100px;
  align-items: flex-end;
  border-bottom-width: 1px;
  border-color: #00000010;
  padding: 12px 22px;
`;

const Center = styled.View`
  width: 100%;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  left: 12px;
  bottom: 12px;
  z-index: 1;
`;

const Title = styled(Typography).attrs({
  variant: 'semibold'
})`
  font-size: 17px;
`;

const Subtitle = styled(Typography)`
  color: #808080;
`;

type Props = {
  goBack?: () => void;
  title?: string;
  subtitle?: string;
};

export const Header: FC<Props> = ({ goBack, title, subtitle }) => (
  <Wrapper>
    <ButtonWrapper>
      <Touchable onPress={goBack}>
        <Icon name="arrowleft" size={26} color="#000" />
      </Touchable>
    </ButtonWrapper>

    <Center>
      {!isEmpty(title) && <Title>{title}</Title>}
      {!isEmpty(subtitle) && <Subtitle>{subtitle}</Subtitle>}
    </Center>
  </Wrapper>
);
