<script setup>
import {onMounted, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import humanNames from '../assets/names/humanNames.js';
import elfNames from '../assets/names/elfNames.js';
import dwarfNames from '../assets/names/dwarfNames.js';
import halflingNames from '../assets/names/halflingNames.js';
import dragonbornNames from '../assets/names/dragonbornNames.js';
import gnomeNames from '../assets/names/gnomeNames.js';
import tieflingNames from '../assets/names/tieflingNames.js';
import halfOrcNames from "../assets/names/halfOrcNames.js";
import halfElfNames from "../assets/names/halfElfNames.js";

import humanIcons from '../assets/icons/human.png';
import elfIcons from '../assets/icons/elf.png';
import dwarfIcons from '../assets/icons/dwarf.png';
import halflingIcons from '../assets/icons/halfling.png';
import dragonbornIcons from '../assets/icons/dragonborn.png';
import gnomeIcons from '../assets/icons/gnome.png';
import tieflingIcons from '../assets/icons/tiefling.png';
import halfOrcIcons from '../assets/icons/halforc.png';
import halfElfIcons from '../assets/icons/halfelf.png';

import barbarianIcons from '../assets/icons/barbarian.png';
import bardIcons from '../assets/icons/bard.png';
import clericIcons from '../assets/icons/cleric.png';
import druidIcons from '../assets/icons/druid.png';
import fighterIcons from '../assets/icons/fighter.png';
import monkIcons from '../assets/icons/monk.png';
import paladinIcons from '../assets/icons/paladin.png';
import rangerIcons from '../assets/icons/ranger.png';
import rogueIcons from '../assets/icons/rogue.png';
import sorcererIcons from '../assets/icons/sorcerer.png';
import warlockIcons from '../assets/icons/warlock.png';
import wizardIcons from '../assets/icons/wizard.png';

onMounted(() => {
  document.body.style.backgroundColor = 'rgba(235,255,221,0.85)';
});

const {t} = useI18n();

const races = [
  { name: 'Human', icon: humanIcons, description: t('human-desc') },
  { name: 'Elf', icon: elfIcons, description: t('elf-desc') },
  { name: 'Dwarf', icon: dwarfIcons, description: t('dwarf-desc')  },
  { name: 'Halfling', icon: halflingIcons, description: t('halfling-desc') },
  { name: 'Dragonborn', icon: dragonbornIcons, description: t('dragonborn-desc') },
  { name: 'Gnome', icon: gnomeIcons, description: t('gnome-desc') },
  { name: 'HalfElf', icon: halfElfIcons, description: t('halfelf-desc') },
  { name: 'HalfOrc', icon: halfOrcIcons, description: t('halforc-desc') },
  { name: 'Tiefling', icon: tieflingIcons, description: t('tiefling-desc') }
];

const hoveredRace = ref(null);

const classes = [
  {name: 'Barbarian', icon: barbarianIcons},
  {name: 'Bard', icon: bardIcons},
  {name: 'Cleric', icon: clericIcons},
  {name: 'Druid', icon: druidIcons},
  {name: 'Fighter', icon: fighterIcons},
  {name: 'Monk', icon: monkIcons},
  {name: 'Paladin', icon: paladinIcons},
  {name: 'Ranger', icon: rangerIcons},
  {name: 'Rogue', icon: rogueIcons},
  {name : 'Sorcerer', icon: sorcererIcons},
  {name: 'Warlock', icon: warlockIcons},
  {name: 'Wizard', icon: wizardIcons}
];

const backgrounds = [
  'acolyte',
  'charlatan',
  'criminal',
  'entertainer',
  'folkHero',
  'guildArtisan',
  'hermit',
  'noble',
  'outlander',
  'sage',
  'sailor',
  'soldier',
  'urchin'
];

const allTraits = [
  'brave', 'kind', 'evil', 'cunning', 'simpleton', 'charming', 'honest', 'wise', 'loyal',
  'curious', 'reckless', 'ambitious', 'friendly', 'introverted', 'outgoing',
  'shy', 'thoughtful', 'optimistic', 'pessimistic', 'serious', 'humorous',
  'adventurous', 'cautious', 'clever', 'resourceful', 'determined',
  'empathetic', 'crybaby', 'independent', 'horny', 'lazy', 'soft',
  'cold-hearted', 'animal-lover', 'nature-lover'
];

const incompatibleTraits = {
  introverted: ['outgoing'],
  outgoing: ['introverted', 'shy'],
  optimistic: ['pessimistic'],
  pessimistic: ['optimistic'],
  cautious: ['reckless'],
  reckless: ['cautious'],
  shy: ['outgoing'],
  lazy: ['determined'],
  determined: ['lazy'],
  "cold-hearted": ['empathetic', 'crybaby'],
  empathetic: ['cold-hearted'],
  crybaby: ['cold-hearted'],
  serious: ['humorous'],
  humorous: ['serious'],
  kind: ['evil'],
  evil: ['kind'],
  simpleton: ['cunning'],
  cunning: ['simpleton'],
};

const genders = ['male', 'female', 'nonbinary'];

const raceNamesMap = {
  Human: humanNames,
  Elf: elfNames,
  Dwarf: dwarfNames,
  Halfling: halflingNames,
  Dragonborn: dragonbornNames,
  Gnome: gnomeNames,
  Tiefling: tieflingNames,
  HalfElf: halfElfNames,
  HalfOrc: halfOrcNames
};

const character = ref({
  name: "",
  race: "",
  class: "",
  background: "",
  gender: "",
  personality: []
});


const fixedRace = ref("");
const fixedGender = ref("");
const fixedBackground = ref("");
const fixedClass = ref("");
const fixedPersonality = ref([]);

function selectRace(charRace) {
  if (character.value.race === charRace) {
    character.value.race = "";
  } else {
    character.value.race = charRace;
  }
}

function selectClass(charClass) {
  if (character.value.class === charClass) {
    character.value.class = "";
  } else {
    character.value.class = charClass;
  }
}

function getRandomName(race, gender) {
  if (gender === "") {
    gender = genders[Math.floor(Math.random() * genders.length)];
  }

  if (race === "") {
    race = raceNamesMap[Math.floor(Math.random() * races.length)];
  }
  console.log('Selected race:', race);
  console.log('Selected gender:', gender);

  const names = raceNamesMap[race] || {};
  let genderNames = [];

  if (gender === "nonbinary") {
    for (const g in names) {
      genderNames = genderNames.concat(names[g]);
    }
  } else {
    genderNames = names[gender] || [];
  }

  if (genderNames.length === 0) {
    return "Random Name";
  }

  return genderNames[Math.floor(Math.random() * genderNames.length)];
}

function generateNewCharacter() {
  const race = character.value.race.name || fixedRace.value || races[Math.floor(Math.random() * races.length)].name;
  const gender = fixedGender.value || genders[Math.floor(Math.random() * genders.length)];
  const background = fixedBackground.value || backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const charClass = character.value.class.name || fixedClass.value || classes[Math.floor(Math.random() * classes.length)].name;

  let personality = [];
  if (fixedPersonality.value.length < 3) {
    personality = [...fixedPersonality.value];
    const remainingTraits = generateRandomPersonalityTraits(personality);
    personality = personality.concat(remainingTraits);
  } else {
    personality = fixedPersonality.value;
  }

  character.value = {
    name: getRandomName(race, gender),
    race: race,
    class: charClass,
    background: background,
    gender: gender,
    personality: personality
  };
}
function isTraitIncompatible(trait) {
  const traitLower = trait.toLowerCase();
  for (const selectedTrait of fixedPersonality.value) {
    if (incompatibleTraits[selectedTrait] && incompatibleTraits[selectedTrait].includes(traitLower)) {
      return true;
    }
  }
  return false;
}


function generateRandomPersonalityTraits(selectedTraits) {
  let remainingTraits = [];

  while (remainingTraits.length < 3 - selectedTraits.length) {
    const randomTrait = allTraits[Math.floor(Math.random() * allTraits.length)];
    if (!selectedTraits.includes(randomTrait) && !remainingTraits.includes(randomTrait)) {
      let isIncompatible = false;
      for (const trait of selectedTraits) {
        if (incompatibleTraits[trait] && incompatibleTraits[trait].includes(randomTrait)) {
          isIncompatible = true;
          break;
        }
      }
      if (!isIncompatible) {
        remainingTraits.push(randomTrait);
      }
    }
  }

  return remainingTraits;
}

function getTraitIcon(trait) {
  try {
    return new URL(`../assets/icons/${trait.toLowerCase()}.png`, import.meta.url).href;
  } catch (e) {
    console.error(`Icon not found for trait: ${trait}`, e);
    return '';
  }
}


</script>

<template>
  <button @click="$i18n.locale = 'en'">English</button>
  <button @click="$i18n.locale = 'ru'">Russian</button>

  <div class="character-generator">
    <table>
      <tr>
        <td><label for="race">{{ t('selectRace') }}</label></td>
        <td>
          <div class="race-selection">
            <h2>Select Your Race</h2>
            <div class="race-grid">
              <div
                  v-for="race in races"
                  :key="race.name"
                  class="race-tile"
                  @click="selectRace(race.name); fixedRace = race.name"
                  :class="{ selected: character.race === race.name }"
                  :title="t(race.name.toLowerCase())"
                  :disabled="character.race !== '' && character.race !== race.name"
              >
                <img :src="race.icon" :alt="race.name" class="race-icon" />
                <p>{{ t(race.name.toLowerCase()) }}</p>
              </div>
            </div>
            <p v-if="hoveredRace" class="race-description">{{ hoveredRace }}</p>
          </div>
        </td>
      </tr>

      <tr>
        <td><label for="gender">{{ t('selectGender') }}</label></td>
        <td>
          <select v-model="fixedGender" id="gender">
            <option value="">Random</option>
            <option v-for="genderOption in genders" :key="genderOption" :value="genderOption">
              {{ t(genderOption.toLowerCase()) }}
            </option>
          </select>
        </td>
      </tr>

      <tr>
        <td><label for="background">{{ t('selectBackground') }}</label></td>
        <td>
          <select v-model="fixedBackground" id="background">
            <option value="">Random</option>
            <option v-for="backgroundOption in backgrounds" :key="backgroundOption" :value="backgroundOption">
              {{ t(backgroundOption.toLowerCase()) }}
            </option>
          </select>
        </td>
      </tr>

      <tr>
        <td><label for="class">{{ t('selectClass') }}</label></td>
        <td>
          <div class="class-selection">
            <h2>Select Your Class</h2>
            <div class="class-grid">
              <div
                  v-for="classs in classes"
                  :key="classs.name"
                  class="class-tile"
                  @click="selectClass(classs.name); fixedClass = classs.name"
                  :class="{ selected: character.class === classs.name }"
                  :disabled="character.class !== ''">
                <img :src="classs.icon" :alt="classs.name" class="class-icon" />
                <p>{{ t(classs.name.toLowerCase()) }}</p>
              </div>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td><label for="personality">{{ t('selectPersonality') }}</label></td>
        <td>
          <div class="personality-container">
            <div v-for="(trait, index) in allTraits" :key="index" class="personality-item" :class="{ 'disabled': isTraitIncompatible(trait) }">
              <label class="checkbox-label">
                <img
                    v-if="getTraitIcon(trait)"
                    :src="getTraitIcon(trait)"
                    :alt="trait"
                    class="trait-icon"
                />
                <input
                    type="checkbox"
                    :value="trait"
                    v-model="fixedPersonality"
                    :disabled="isTraitIncompatible(trait)"
                    class="checkbox-input"
                />
                <span class="checkbox-custom"></span>
                {{ t(trait.toLowerCase()) }}
              </label>
            </div>
          </div>
        </td>
      </tr>
    </table>

    <button @click="generateNewCharacter">{{ t('generate') }}</button>

    <div v-if="character.name">
      <h2>{{ character.name }}</h2>
      <p>{{ t('race') }}: {{ t(character.race.toLowerCase()) }}</p>
      <p>{{ t('class') }}: {{ t(character.class.toLowerCase()) }}</p>
      <p>{{ t('background') }}: {{ t(character.background.toLowerCase()) }}</p>
      <p>{{ t('gender') }}: {{ t(character.gender.toLowerCase()) }}</p>
      <p v-if="character.personality && character.personality.length > 0">
        {{ t('personality') }}: {{ character.personality.map(trait => t(trait.toLowerCase())).join(', ') }}
      </p>
      <p v-else>
        {{ t('noPersonalitySelected') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Gabriela';
  src: url('../assets/font/Gabriela-Regular.ttf') format('truetype');
}

body {
  background-color: rgba(239, 255, 214, 0.85);
  font-family: 'Gabriela', sans-serif;
  color: #333;
}

/* Table */
table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

td {
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  vertical-align: top;
  border: 1px solid #dcdcdc;
  text-align: left;
}

td label {
  font-weight: bold;
  font-size: 18px;
  color: #2f4f4f;
}

select {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;
}

select:focus {
  border-color: #66b3ff;
  outline: none;
}

button {
  padding: 12px 30px;
  border-radius: 30px;
  background-color: rgb(36, 89, 51);
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #ffc62e;
  transform: translateY(-2px);
}

button:active {
  background-color: #3e8e41;
  transform: translateY(2px);
}

/* Personality checkboxes */
.personality-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 15px;
}

.personality-item {
  background-color: #f4f8f4;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.trait-icon {
  width: 42px;
  height: 42px;
  margin-right: 10px;
  vertical-align: middle;
}

.personality-item:hover {
  background-color: #e0f7e9;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #2f4f4f;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 18px;
  height: 18px;
  border: 2px solid #4CAF50;
  border-radius: 4px;
  margin-right: 10px;
  background-color: #fff;
  position: relative;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.checkbox-input:checked + .checkbox-custom {
  background-color: #66b3ff;
  border-color: #4CAF50;
}

.checkbox-input:checked + .checkbox-custom::after {
  content: "✔";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
}

.checkbox-input:disabled + .checkbox-custom {
  background-color: #e0e0e0;
  border-color: #b0b0b0;
}

.checkbox-input:disabled + .checkbox-custom::after {
  content: "X";
  color: #b0b0b0;
}

/* Character Info Display */
.character-generator > div {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.character-generator h2 {
  font-size: 24px;
  color: #333;
}

.character-generator p {
  font-size: 18px;
  color: #555;
  line-height: 1.5;
}

.race-selection, .class-selection {
  text-align: center;
}

.race-grid, .class-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(117px, 1fr));
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
}

.race-tile, .class-tile {
  background: #ffffff;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 2px solid transparent;
}

.race-tile p {
  word-break: break-word;
  white-space: normal;
}

.class-tile p {
  word-break: break-word;
  white-space: normal;
}


.race-tile:hover, .class-tile:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.selected {
  border: 2px solid #4CAF50;
}

.race-icon, .class-icon {
  width: 80px;
  height: 150px;
  object-fit: contain;
}

.race-description {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
  font-style: italic;
}
</style>
