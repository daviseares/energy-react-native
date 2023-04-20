import { styled } from '~/modules';

type TypographyProps = {
  variant?: 'bold' | 'regular' | 'semibold' | 'medium';
}

export const Typography = styled.Text<TypographyProps>`
  font-size: 14px;
  font-family: ${({ theme, variant }) => `Sora${theme.fontsVariant[variant ?? 'regular']}`};
  color: ${({ theme }) => theme.colors.text};
`;
