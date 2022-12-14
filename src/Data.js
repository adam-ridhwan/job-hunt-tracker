import { generateId } from './Utilities/GenerateID';

export const HEADER_TITLES = [
  'Company',
  'Stage',
  'Interview Date',
  'Position',
  'Location',
  'Posting URL',
  'Point of Contact',
  'Contact Info',
  'Date Applied',
];

export const THEME_COLORS = {
  LightGray: 'rgba(227, 226, 224, 0.5)',
  Gray: 'rgba(227, 226, 224, 0.5)',
  Brown: 'rgb(238, 224, 218)',
  Orange: 'rgb(250, 222, 201)',
  Yellow: 'rgb(253, 236, 200)',
  Green: 'rgb(219, 237, 219)',
  Blue: 'rgb(211, 229, 239)',
  Purple: 'rgb(232, 222, 238)',
  Pink: 'rgb(245, 224, 233)',
  Red: 'rgb(255, 226, 221)',
};

const jobInput = [
  {
    id: generateId(),
    company: 'Google',
    stage: 'Applied',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Mountain View, CA',
    postingURL: 'www.google.com',
    notes: '',
    dateApplied: '01/01/2019',
    pointOfContact: 'John Doe',
    contactInfo: 'johndoe@gmail.comjohndoe@gmail.com',
  },
  {
    id: generateId(),
    company: 'Facebook',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Developer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Better',
    stage: 'Offered',
    interviewDate: '01/013/2022',
    position: 'Full Stack Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'DoorDash',
    stage: 'Interview',
    interviewDate: '01/013/2022',
    position: 'Back End Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Robinhood',
    stage: 'Offered',
    interviewDate: '01/013/2022',
    position: 'Front End Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Samsara',
    stage: 'Interview',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Brooklinen',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Attentive',
    stage: 'Interview',
    interviewDate: '01/013/2022',
    position: 'Full Stack Entineer',
    location: 'Mountain View, CA',
    postingURL: 'www.google.com',
    notes: '',
    dateApplied: '01/01/2019',
    pointOfContact: 'John Doe',
    contactInfo: 'johndoe@gmail.com',
  },
  {
    id: generateId(),
    company: 'Loom',
    stage: 'Signed',
    interviewDate: '01/013/2022',
    position: 'Software Developer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Varkada',
    stage: 'Interview',
    interviewDate: '01/013/2022',
    position: 'Full Stack Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Nuvia',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Durchie',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Brex',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Back End Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Capsule',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Modern Health',
    stage: 'Applied',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Mountain View, CA',
    postingURL: 'www.google.com',
    notes: '',
    dateApplied: '01/01/2019',
    pointOfContact: 'John Doe',
    contactInfo: 'johndoe@gmail.com',
  },
  {
    id: generateId(),
    company: 'Curative',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Full Stack Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Modern Health',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Curative',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Nuro',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Front End Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Quibi',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Deliver',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Drift',
    stage: 'Applied',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Mountain View, CA',
    postingURL: 'www.google.com',
    notes: '',
    dateApplied: '01/01/2019',
    pointOfContact: 'John Doe',
    contactInfo: 'johndoe@gmail.com',
  },
  {
    id: generateId(),
    company: 'Instabase',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Upkey',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'UnQork',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Full Stack Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Tula Skincare',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Masterclass',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Trello',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
  {
    id: generateId(),
    company: 'Slack',
    stage: 'Rejected',
    interviewDate: '01/013/2022',
    position: 'Software Engineer',
    location: 'Boston, MA',
    postingURL: 'www.facebook.com',
    notes: '',
    dateApplied: '01/013/2022',
    pointOfContact: 'Adam Smith',
    contactInfo: 'adamsmith@gmail.com',
  },
];

export default jobInput;
