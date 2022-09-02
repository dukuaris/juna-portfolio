import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel:+82-10-5092-7445'>+82-10-5092-7445</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href='mailto:dukuaris@gmail.com'>
						dukuaris@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating one project at a time</Slogan>
				</CompanyContainer>
				<SocialIcons href='https://github.com/dukuaris'>
					<AiFillGithub size='3rem' />
				</SocialIcons>
				<SocialIcons href='https://linkedin.com/in/duke-yoo/'>
					<AiFillLinkedin size='3rem' />
				</SocialIcons>
				<SocialIcons href='https://www.facebook.com/dukhyun.yoo/'>
					<AiFillFacebook size='3rem' />
				</SocialIcons>
			</SocialIconsContainer>
		</FooterWrapper>
	)
}

export default Footer
