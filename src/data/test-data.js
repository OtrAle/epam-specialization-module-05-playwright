module.exports.searchTerms = [
    { 
        term: 'Hammer', 
        scenario: 'Standard term - Title Case' 
    },
    { 
        term: 'hammer', 
        scenario: 'Case sensitivity - Lowercase' 
    },
    { 
        term: 'HAMMER', 
        scenario: 'Case sensitivity - Uppercase' 
    },
    { 
        term: 'Combination Pliers', 
        scenario: 'Multi-word term' 
    },
    { 
        term: '12V', 
        scenario: 'Alphanumeric term' 
    },
];

module.exports.validLengthSearchTerms = [
    { 
        term: 'Saw', 
        length: 3, 
        scenario: 'Minimum length boundary' 
    },
    { 
        term: 'Bolt', 
        length: 4, 
        scenario: 'Just above minimum length' 
    },
    { 
        term: 'Adjustable Spanner', 
        length: 19, 
        scenario: 'Mid-range nominal length' 
    },
    { 
        term: 'Small Bench Saw with 200mm Safety Blade', 
        length: 39, 
        scenario: 'Just below maximum length' 
    },
    { 
        term: 'Small Bench Saw with 200mm Safety Blades', 
        length: 40, 
        scenario: 'Maximum length boundary' 
    },
];

module.exports.invalidLengthSearchTerms = [
    { 
        term: 'Pl', 
        length: 2, 
        scenario: 'Just below minimum length' 
    },
    { 
        term: 'Cordless Drill Combo Kit With 2 Batteries!', 
        length: 41, 
        scenario: 'Just above maximum length' 
    }
];