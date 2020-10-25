/*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import * as Util from './Util.js';

export default function WheelConfig(winnerMessage) {
  this.title = '';
  this.names = [
    'Hamburger', 'Lasagna', 'Fish and chips', 'فلافل - Falafel',
    '炒麵 - Chow mein', 'Tortilla española', 'Crêpes', 'Pierogi', 'Feijoada',
    'ผัดไทย - Pad thai', 'Döner kebab', 'Phở'
  ];
  this.colorSettings = [
    // {color: '#3369E8', enabled: true},
    // {color: '#D50F25', enabled: true},
    // {color: '#EEB211', enabled: true},
    // {color: '#009925', enabled: true},
    // {color: '#000000', enabled: false},
    // {color: '#000000', enabled: false},
    {color: '#BDD831', enabled: true},
    {color: '#0C236B', enabled: true},
    {color: '#FFFFFF', enabled: true},
    {color: '#4DA1BA', enabled: true},
    {color: '#000000', enabled: false},
    {color: '#000000', enabled: false},
  ];
  this.pictureType = 'uploaded';
  this.galleryPicture = 'images/sgx.png';
  // this.customPictureName = '';
  this.customPictureName = 'sgx.png';
  this.customPictureDataUri = 'data:image/jpeg;base64,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';
  this.allowDuplicates = true;
  this.duringSpinSound = 'ticking-sound';
  this.afterSpinSound = 'applause-sound';
  this.maxNames = 200;
  this.spinTime = 10;
  this.playCheers = true;
  this.launchConfetti = true;
  this.animateWinner = false;
  this.autoRemoveWinner = false;
  this.displayWinnerDialog = true;
  this.winnerMessage = winnerMessage || 'We have a winner!';
  this.playClickWhenWinnerRemoved = false;
  this.hubSize = 'S';

  this.loadJson = function(jsonString) {
    let obj = JSON.parse(jsonString);
    this.copyPropertiesFrom(obj);
  }

  this.getJson = function() {
    var keys = Object.keys(this);
    var retVal = {};
    keys.forEach(key => {
      retVal[key] = this[key];
    });
    return JSON.stringify(retVal);
  }

  this.getValues = function() {
    return JSON.parse(this.getJson());
  }

  this.loadValues = function(values) {
    this.copyPropertiesFrom(values);
  }

  this.clone = function() {
    const clone = new WheelConfig();
    clone.loadValues(this.getValues());
    return clone;
  }

  this.getDefaultColorSettings = function() {
    return new WheelConfig().colorSettings;
  }

  this.getDefaultNames = function() {
    return new WheelConfig().names;
  }

  this.setCustomPicture = function(name, dataUri) {
    this.customPictureName = name;
    this.customPictureDataUri = dataUri;
    this.pictureType = 'uploaded';
  }
  
  this.getWheelImage = function() {
    if (this.pictureType == 'none') {
      return null;
    }
    if (this.pictureType == 'gallery') {
      if (this.galleryPicture) {
        return this.galleryPicture;
      }
    }
    if (this.pictureType == 'uploaded') {
      if (this.customPictureDataUri) {
        return this.customPictureDataUri;
      }
    }
    return null;
  }

  this.shouldPlayTicks = function() {
    return (this.duringSpinSound=='ticking-sound');
  }

  this.setColors = function(colorValues, enabledValues) {
    for (var i=0; i<6; i++) {
      this.colorSettings[i] = {color: colorValues[i], enabled: enabledValues[i]};
    }
  }

  this.getCoalescedColors = function() {
    var retVal = [];
    for (var i=0; i<6; i++) {
      if (this.colorSettings[i].enabled) {
        retVal.push(this.colorSettings[i].color);
      }
    }
    if (retVal.length == 0) {
      retVal.push('#CCCCCC');
    }
    return retVal;
  }

  this.isTooBigForDatabase = function() {
    return (this.getJson().length > 990000);
  }

  this.copyPropertiesFrom = function(obj) {
    Object.assign(this, JSON.parse(JSON.stringify(obj)));
    this.convertOldData();
  }

  this.convertOldData = function() {
    this.names = this.names.map(
      name => name.replace(/height="25"/, 'style="height:25px"')
    );
    this.maxNames = parseInt(this.maxNames);
    this.spinTime = parseInt(this.spinTime);
    if (this.playTicks===false) {
      this.duringSpinSound = 'no-sound';
    }
    delete this.playTicks;
    if (this.playCheers===false) {
      this.afterSpinSound = 'no-sound';
    }
    delete this.playCheers;
  }

}
