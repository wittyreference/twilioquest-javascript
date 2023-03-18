function getLaserSetting(magicWord) {
	if (magicWord === 'please') {
		return 'OFF';
	} else {
		return 'ON';
	}
}

const currentSetting = getLaserSetting('right now!');
console.log('The current laster setting is ' + currentSetting);
