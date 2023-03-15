import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';

const youtubeLogo = require('../../images/youtube.svg');
const twitterLogo = require('../../images/twitter.svg');
const discordLogo = require('../../images/discord.svg')
const tiktokLogo = require('../../images/tiktok.svg')
const sh1nLogo = require('../../images/v4_pfp.png')
const vrcLogo = require('../../images/vrc.png')
const tgLogo = require('../../images/tg.svg')
const faLogo = require('../../images/fa.png')
const twitchLogo = require('../../images/twitch.svg')
const boostyLogo = require('../../images/boosty.svg')
const throneLogo = require('../../images/throne.png')

export default function LinkTree() {
  return (
    <Container>
      <Header picture={sh1nLogo} title='SH1N.shark' />
	  <Button link='https://www.tiktok.com/@sh1n.shark' icon={tiktokLogo} name='TikTok' backgroundColor={variables.tiktokColor} />
      <Button link='https://twitch.tv/sh1n_shark' icon={twitchLogo} name='Twitch' backgroundColor={variables.twitchColor} />
	  <Button link='https://boosty.to/sh1n_shark' icon={boostyLogo} backgroundColor={variables.boostyColor} />
	  <Button link='https://throne.me/sh1n_shark' icon={throneLogo} backgroundColor={variables.throneColor} />
      <Button link='https://furaffinity.net/user/sh1n.shark' icon={faLogo} name='Furaffinity' backgroundColor={variables.faColor} />
      <Button link='https://vrchat.com/home/user/usr_15edda65-7334-44be-8203-50bd8f7cfd84' icon={vrcLogo} name='VRChat' backgroundColor={variables.vrcColor}  />
      <Button type='button' icon={discordLogo} name='SH1N#1147' backgroundColor={variables.discordColor} />
      <Button link='https://t.me/sh1n_shark' icon={tgLogo} name='Telegram' backgroundColor={variables.tgColor} />	  
      <Button link='https://www.youtube.com/channel/UCnKZSvqkD3PQZNm-ISbqGmQ' icon={youtubeLogo} name='Youtube' backgroundColor={variables.youtubeColor} />
      <Button link='https://twitter.com/sh1n_shark' icon={twitterLogo} name='Twitter' backgroundColor={variables.twitterColor} />
    </Container>
  )
}