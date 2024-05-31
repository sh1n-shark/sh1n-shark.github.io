import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';

//const youtubeLogo = require('../../images/youtube.svg').default
const twitterLogo = require('../../images/twitter.svg').default
const discordLogo = require('../../images/discord.svg').default
const tiktokLogo = require('../../images/tiktok.svg').default
const sh1nLogo = require('../../images/pfp.png')
const vrcLogo = require('../../images/vrc.png')
//const tgLogo = require('../../images/tg.svg').default
const faLogo = require('../../images/fa.png')
const twitchLogo = require('../../images/twitch.svg').default
//const boostyLogo = require('../../images/boosty.svg').default
//const throneLogo = require('../../images/throne.png').default
const gumroadLogo = require('../../images/gumroad.png')
const bskyLogo = require('../../images/bsky.png')
const bmcLogo = require('../../images/bmc.png')
/*
Twitch
TikTok
Discord 
BlueSky
Twitter
VRChat
BuyMeACoffee
Gumroad
Furaffinity
*/

export default function LinkTree() {
	return (
    <Container>
      <Header picture={sh1nLogo} title='SH1N.shark' />
		<h1> Under maintenance </h1>
      /*<Button link='https://twitch.tv/sh1n_shark' icon={twitchLogo} name='Twitch' backgroundColor={variables.twitchColor} />
      <Button link='https://www.tiktok.com/@sh1n.shark' icon={tiktokLogo} name='TikTok' backgroundColor={variables.tiktokColor} />
      <Button link='https://bsky.app/profile/shin.baby' style='border-radius: 50%;' icon={bskyLogo} name='BlueSky' backgroundColor={variables.bskyColor} />
      <Button link='https://twitter.com/sh1n_shark' icon={twitterLogo} name='Twitter' backgroundColor={variables.twitterColor} />
      <Button link='https://vrchat.com/home/user/usr_15edda65-7334-44be-8203-50bd8f7cfd84' icon={vrcLogo} name='VRChat' backgroundColor={variables.vrcColor}  />
      <Button link='https://sh1nshark.gumroad.com/' icon={gumroadLogo} name='Gumroad' backgroundColor={variables.gumroadColor} />
      <Button link='https://furaffinity.net/user/sh1n.shark' icon={faLogo} name='Furaffinity' backgroundColor={variables.faColor} />*/
		</Container>
	)
}
