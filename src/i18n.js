import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        race: 'Race',
        gender: 'Gender',
        class: 'Class',
        background: 'Background',
        generate: 'Generate Character',
        selectRace: 'Select Race:',
        selectGender: 'Select Gender:',
        selectClass: 'Select Class:',
        selectBackground: 'Select Background:',
        male: 'Male',
        female: 'Female',
        nonbinary: 'Non-binary',
        other: 'Other',
        barbarian: 'Barbarian',
        bard: 'Bard',
        cleric: 'Cleric',
        druid: 'Druid',
        fighter: 'Fighter',
        monk: 'Monk',
        paladin: 'Paladin',
        ranger: 'Ranger',
        rogue: 'Rogue',
        sorcerer: 'Sorcerer',
        warlock: 'Warlock',
        wizard: 'Wizard',
        acolyte: 'Acolyte',
        charlatan: 'Charlatan',
        criminal: 'Criminal',
        entertainer: 'Entertainer',
        folkhero: 'Folk Hero',
        guildartisan: 'Guild Artisan',
        hermit: 'Hermit',
        noble: 'Noble',
        outlander: 'Outlander',
        sage: 'Sage',
        sailor: 'Sailor',
        soldier: 'Soldier',
        urchin: 'Urchin',
        human: 'Human',
        elf: 'Elf',
        dwarf: 'Dwarf',
        halfling: 'Halfling',
        dragonborn: 'Dragonborn',
        gnome: 'Gnome',
        halfelf: 'Half-Elf',
        halforc: 'Half-Orc',
        tiefling: 'Tiefling',
        personality: 'Personality',
        brave: 'Brave',
        kind: 'Kind',
        evil: 'Evil',
        cunning: 'Cunning',
        simpleton: 'Simpleton',
        charming: 'Charming',
        honest: 'Honest',
        wise: 'Wise',
        loyal: 'Loyal',
        curious: 'Curious',
        reckless: 'Reckless',
        ambitious: 'Ambitious',
        friendly: 'Friendly',
        introverted: 'Introverted',
        outgoing: 'Outgoing',
        shy: 'Shy',
        thoughtful: 'Thoughtful',
        optimistic: 'Optimistic',
        pessimistic: 'Pessimistic',
        serious: 'Serious',
        humorous: 'Humorous',
        adventurous: 'Adventurous',
        cautious: 'Cautious',
        clever: 'Clever',
        resourceful: 'Resourceful',
        determined: 'Determined',
        empathetic: 'Empathetic',
        crybaby: 'Crybaby',
        independent: 'Independent',
        horny: 'Horny',
        lazy: 'Lazy',
        soft: 'Soft',
        "cold-hearted": 'Cold-hearted',
        "animal-lover": 'Animal-lover',
        "nature-lover": 'Nature-lover',
        selectPersonality: 'Select Personality Trait:',
        noPersonalitySelected: 'No personality trait selected',
        'human-desc': 'Versatile and ambitious',
        'elf-desc': 'Graceful and long-lived',
        'dwarf-desc': 'Sturdy and strong',
        'halfling-desc': 'Cheerful and nimble',
        'dragonborn-desc': 'Proud and draconic',
        'gnome-desc': 'Inventive and energetic',
        'halfelf-desc': 'Adaptable and charming',
        'halforc-desc': 'Fierce and resilient',
        'tiefling-desc': 'Mysterious and charismatic'
    },
    ru: {
        race: 'Раса',
        gender: 'Пол',
        class: 'Класс',
        background: 'Происхождение',
        generate: 'Сгенерировать персонажа',
        selectRace: 'Выберите расу:',
        selectGender: 'Выберите пол:',
        selectClass: 'Выберите класс:',
        selectBackground: 'Выберите происхождение:',
        male: 'Мужской',
        female: 'Женский',
        nonbinary: 'Небинарный',
        other: 'Другой',
        barbarian: 'Варвар',
        bard: 'Бард',
        cleric: 'Клирик',
        druid: 'Друид',
        fighter: 'Воин',
        monk: 'Монах',
        paladin: 'Паладин',
        ranger: 'Рейнджер',
        rogue: 'Разбойник',
        sorcerer: 'Колдун',
        warlock: 'Чернокнижник',
        wizard: 'Волшебник',
        acolyte: 'Аколит',
        charlatan: 'Шарлатан',
        criminal: 'Преступник',
        entertainer: 'Артист',
        folkhero: 'Народный герой',
        guildartisan: 'Цеховой мастер',
        hermit: 'Отшельник',
        noble: 'Дворянин',
        outlander: 'Чужеземец',
        sage: 'Мудрец',
        sailor: 'Моряк',
        soldier: 'Солдат',
        urchin: 'Урочник',
        human: 'Человек',
        elf: 'Эльф',
        dwarf: 'Дварф',
        halfling: 'Полурослик',
        dragonborn: 'Драконорожденный',
        gnome: 'Гном',
        halfelf: 'Полуэльф',
        halforc: 'Полуорк',
        tiefling: 'Тифлинг',
        personality: 'Черты характера',
        brave: 'Храбрый',
        kind: 'Добрый',
        evil: 'Злой',
        cunning: 'Хитрый',
        simpleton: 'Простак',
        charming: 'Очаровательный',
        honest: 'Честный',
        wise: 'Мудрый',
        loyal: 'Верный',
        curious: 'Любопытный',
        reckless: 'Безрассудный',
        ambitious: 'Амбициозный',
        friendly: 'Дружелюбный',
        introverted: 'Интроверт',
        outgoing: 'Общительный',
        shy: 'Стеснительный',
        thoughtful: 'Вдумчивый',
        optimistic: 'Оптимистичный',
        pessimistic: 'Пессимистичный',
        serious: 'Серьезный',
        humorous: 'Шутник',
        adventurous: 'Любящий приключения',
        cautious: 'Осторожный',
        clever: 'Умный',
        resourceful: 'Находчивый',
        determined: 'Решительный',
        empathetic: 'Эмпатичный',
        crybaby: 'Плакса',
        independent: 'Независимый',
        horny: 'Похотливый',
        lazy: 'Ленивый',
        soft: 'Мягкий',
        "cold-hearted": 'Хладнокровный',
        "animal-lover": 'Любитель животных',
        "nature-lover": 'Любитель природы',
        selectPersonality: 'Выберите черту характера:',
        noPersonalitySelected: 'Черта характера не выбрана',
        'human-desc': 'Универсальные и амбициозные',
        'elf-desc': 'Грациозные и долгоживущие',
        'dwarf-desc': 'Прочные и сильные',
        'halfling-desc': 'Веселые и ловкие',
        'dragonborn-desc': 'Гордые и драконьи',
        'gnome-desc': 'Изобретательные и энергичные',
        'halfelf-desc': 'Адаптируемые и обаятельные',
        'halforc-desc': 'Яростные и выносливые',
        'tiefling-desc': 'Таинственные и харизматичные'
    }
};

const i18n = createI18n({
    locale: 'ru', // по умолчанию русский
    messages,
});

export default i18n;
