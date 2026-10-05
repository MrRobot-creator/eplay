/* eslint-disable prettier/prettier */
import * as S from './styles'

export type Props = {
type: 'button' | 'link'  
title: string
to?: string
onClick?: () => void
children?: string
variant?: 'primary' | 'secondary'
}

const Button = ({ type, title, to, onClick, children, variant = 'primary' }: Props) => {
    if (type === 'button') {
        return (
                <S.ButtonContainer type="button" variant={variant} title={title} onClick={onClick}>
                 {children}
            </S.ButtonContainer>
        )
    }
    return (
        <S.ButtonLink to={to as string} title={title}>
            {children}
        </S.ButtonLink>
    )
}

export default Button
