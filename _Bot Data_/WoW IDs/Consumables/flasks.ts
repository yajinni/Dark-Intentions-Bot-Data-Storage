import Spell from '../Spell';

const Flasks = {
  FLASK_OF_THALASSIAN_RESISTANCE: {
    id: 1235057,
    name: 'Flask of Thalassian Resistance',
    icon: 'inv_12_profession_alchemy_flask_sindoreipotion_yellow',
  },
  FLASK_OF_THE_MAGISTERS: {
    id: 1235108,
    name: 'Flask of the Magisters',
    icon: 'inv_12_profession_alchemy_flask_sindoreipotion_black',
  },
  FLASK_OF_THE_BLOOD_KNIGHTS: {
    id: 1235110,
    name: 'Flask of the Blood Knights',
    icon: 'inv_12_profession_alchemy_flask_sindoreipotion_white-',
  },
  FLASK_OF_THE_SHATTERED_SUN: {
    id: 1235111,
    name: 'Flask of the Shattered Sun',
    icon: 'inv_12_profession_alchemy_flask_sindoreipotion_red--',
  },
  SIMC_HARANIR_PHIAL_OF_PERCEPTION: {
    id: 1236763,
    name: 'Haranir Phial of Perception',
    icon: 'inv_misc_questionmark',
  },
  SIMC_HARANIR_PHIAL_OF_FINESSE: {
    id: 1236767,
    name: 'Haranir Phial of Finesse',
    icon: 'inv_misc_questionmark',
  },
  SIMC_VICIOUS_THALASSIAN_FLASK_OF_HONOR: {
    id: 1239355,
    name: 'Vicious Thalassian Flask of Honor',
    icon: 'inv_misc_questionmark',
  },
  SIMC_HARANIR_PHIAL_OF_INGENUITY: {
    id: 1239755,
    name: 'Haranir Phial of Ingenuity',
    icon: 'inv_misc_questionmark',
  },
  SIMC_FREIGHTRUNNER_S_FLASK: {
    id: 1250533,
    name: "Freightrunner's Flask",
    icon: 'inv_misc_questionmark',
  },
  SIMC_MURDER_ROW_SWIFTSTRIKE_PHIAL: {
    id: 1259280,
    name: 'Murder Row Swiftstrike Phial',
    icon: 'inv_misc_questionmark',
  },
} satisfies Record<string, Spell>;

export default Flasks;
