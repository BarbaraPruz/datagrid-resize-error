export const UserTypes = {
    aro: 'aro',
    external: 'external',
};

export const colors = {
    backgroundMedium: 'hsl(0, 0%, 94.5%)',
    charcoal: '#3d3935',
    charcoalDark: '#000', // ' #1b1a18',
    skyfall: '#71b2c9',
    skyfallLight: 'hsl(195.68, 44.9%, 85%)',
    skyfallMedium: 'hsl(195.68, 44.9%, 50%)',
    skyfallDark: 'hsl(195.68, 44.9%, 45%)',
    goldwood: '#B9975B',
    goldwoodLight: 'hsl(38.3, 40.17%, 85%)',
    walnut: '#8b5b29',
    linenLight: 'hsl(35, 13.04%, 92%)',
    white: '#fff',

    aroGreen: '#81b234',
    aroRed: '#da2836',
    aroGray: '#b8c3c7',
    aroYellow: '#fdd835', //'#f6d55c'
    aroYellowDark: 'hsl(48.9, 98.04%, 45%)',

    reChartsTickGray: '#666',
};

export const ValidationKeys = {
    StructuralConstraints: 'StructuralConstraints',
    ZoningJurisdiction: 'ZoningJurisdiction',
    FloodHazard: 'FloodHazard',
    EarthquakeHazard: 'EarthquakeHazard',
    FireHazard: 'FireHazard',
    CityVsCounty: 'CityVsCounty',
    CityHistoricResource: 'CityHistoricResource',
    generalNotes: 'generalNotes',
};

export const ValidationFields = [
    // correspond to Viability fields shown on Scout Dashboard/Viability Tab
    {
        key: 'generalNotes',
        label: 'General Notes',
        hasCostEstimate: true,
        isPassFailField: false,
    },
    {
        key: 'StructuralConstraints',
        label: 'Structural Constraints',
        hasCostEstimate: true,
        isPassFailField: true,
    },
    {
        key: ValidationKeys.ZoningJurisdiction,
        label: 'Zoning Jurisdiction',
        hasCostEstimate: true,
        isPassFailField: true,
    },
    {
        key: ValidationKeys.FloodHazard,
        label: 'Flood Hazard',
        hasCostEstimate: true,
        isPassFailField: true,
    },
    {
        key: ValidationKeys.EarthquakeHazard,
        label: 'Earthquake and Liquefaction Hazard',
        hasCostEstimate: true,
        isPassFailField: true,
    },
    {
        key: ValidationKeys.FireHazard,
        label: 'Fire Hazard',
        hasCostEstimate: true,
        isPassFailField: true,
    },
    {
        key: 'Obstructions',
        label: 'Obstructions',
        hasCostEstimate: true,
        isPassFailField: true,
    },
    {
        key: ValidationKeys.CityHistoricResource,
        label: 'City Historic Resource',
        hasCostEstimate: true,
        isPassFailField: true,
    },
];

export const ValidationValues = {
    Pass: 'Pass',
    NoPass: 'No Pass',
    Concerns: 'Concerns',
    NA: 'NA',
};

export const ViabilityFields = {
    // Fields within a ValidationField
    Notes: 'notes',
    Pass: 'pass',
    CostEstimate: 'costEstimate',
};

export const PropertyInfo = {
    FutureHomeSize: 2938,
};
