
let slots;
let datesMap;

export const initializeAPI = (today) => {
    today = today ?? new Date();
    let tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
    let dayafter = new Date(tomorrow); dayafter.setDate(tomorrow.getDate() + 1);

    // The following may be slow when called for many objects; see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    const dateImage = (d) => d.toLocaleDateString();

    today = dateImage(today);
    tomorrow = dateImage(tomorrow);
    dayafter = dateImage(dayafter);

    slots = [
        {
            resDate: today,
            resTimes: ['20:00', '21:00', '22:00', ]
        },
        {
            resDate: tomorrow,
            resTimes: ['18:00', '19:00', '21:00', '22:00', ]
        },
        {
            resDate: dayafter,
            resTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', ]
        },
    ];

    datesMap = new Map();
    slots.forEach((slot, index) => datesMap.set(slot.resDate, index));

    return slots.map(slot => slot.resDate);
};

export const fetchAPI = (date) => {
    return slots[datesMap.get(date)].resTimes
};

export const submitAPI = (formData) => {
    return true;
};
