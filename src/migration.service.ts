import { Model } from 'mongoose';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users/users.schema';
import { Case, CaseDocument } from './cases/cases.schema';
import { Conditions, ConditionsDocument } from './conditions/conditions.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MigrationService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
    @InjectModel(Case.name) private caseModel: Model<CaseDocument>,
    @InjectModel(Conditions.name)
    private conditionsModel: Model<ConditionsDocument>,
    private configService: ConfigService,
  ) {
    const username = configService.get<string>('ADMIN_USERNAME');
    const password = configService.get<string>('ADMIN_PASSWORD');
    usersModel.find({ username }, (err, docs) => {
      if (docs.length == 0) {
        usersModel
          .create({ username, password })
          .then(() => console.log('admin created'));
      }
    });

    conditionsModel.find({}).then((docs) => {
      console.log({ docs });
      if (docs.length == 0) {
        conditionsModel.create([
          {
            icd10: 'A09',
            icd10description: 'Infectious gastroenteritis and colitis',
          },
          {
            icd10: 'A64',
            icd10description: 'Unspecified sexually transmitted disease',
          },
          {
            icd10: 'B300',
            icd10description: 'Keratoconjunctivitis due to adenovirus',
          },
          { icd10: 'B302', icd10description: 'Viral pharyngoconjunctivitis' },
          { icd10: 'B308', icd10description: 'Other viral conjunctivitis' },
          { icd10: 'B309', icd10description: 'Viral conjunctivitis' },
          {
            icd10: 'B373',
            icd10description: 'Candidiasis of vulva and vagina',
          },
          {
            icd10: 'B9789',
            icd10description:
              'Other viral agents as the cause of diseases classified elsewhere',
          },
          { icd10: 'E860', icd10description: 'Dehydration' },
          { icd10: 'F340', icd10description: 'Cyclothymic disorder' },
          { icd10: 'F341', icd10description: 'Dysthymic disorder' },
          {
            icd10: 'F39',
            icd10description: 'Unspecified mood [affective] disorder',
          },
          { icd10: 'F411', icd10description: 'Generalized anxiety disorder' },
          {
            icd10: 'F418',
            icd10description: 'Other specified anxiety disorders',
          },
          { icd10: 'F419', icd10description: 'Anxiety disorder' },
          {
            icd10: 'F4321',
            icd10description: 'Adjustment disorder with depressed mood',
          },
          { icd10: 'G43001', icd10description: 'Migraine without aura' },
          { icd10: 'G43009', icd10description: 'Migraine without aura' },
          { icd10: 'G43019', icd10description: 'Migraine without aura' },
          {
            icd10: 'G43501',
            icd10description:
              'Persistent migraine aura without cerebral infarction',
          },
          {
            icd10: 'G43509',
            icd10description:
              'Persistent migraine aura without cerebral infarction',
          },
          {
            icd10: 'G43519',
            icd10description:
              'Persistent migraine aura without cerebral infarction',
          },
          {
            icd10: 'G43701',
            icd10description: 'Chronic migraine without aura',
          },
          {
            icd10: 'G43709',
            icd10description: 'Chronic migraine without aura',
          },
          {
            icd10: 'G43711',
            icd10description: 'Chronic migraine without aura',
          },
          {
            icd10: 'G43719',
            icd10description: 'Chronic migraine without aura',
          },
          { icd10: 'G43809', icd10description: 'Other migraine' },
          { icd10: 'G43811', icd10description: 'Other migraine' },
          { icd10: 'G43819', icd10description: 'Other migraine' },
          { icd10: 'G43829', icd10description: 'Menstrual migraine' },
          { icd10: 'G43909', icd10description: 'Migraine' },
          { icd10: 'G43911', icd10description: 'Migraine' },
          { icd10: 'G43919', icd10description: 'Migraine' },
          { icd10: 'G44209', icd10description: 'Tension-type headache' },
          {
            icd10: 'G44219',
            icd10description: 'Episodic tension-type headache',
          },
          { icd10: 'G4700', icd10description: 'Insomnia' },
          {
            icd10: 'G4701',
            icd10description: 'Insomnia due to medical condition',
          },
          { icd10: 'G5600', icd10description: 'Carpal tunnel syndrome' },
          {
            icd10: 'H10029',
            icd10description: 'Other mucopurulent conjunctivitis',
          },
          {
            icd10: 'H1033',
            icd10description: 'Unspecified acute conjunctivitis',
          },
          { icd10: 'H1044', icd10description: 'Vernal conjunctivitis' },
          {
            icd10: 'H1045',
            icd10description: 'Other chronic allergic conjunctivitis',
          },
          {
            icd10: 'H10509',
            icd10description: 'Unspecified blepharoconjunctivitis',
          },
          { icd10: 'H10819', icd10description: 'Pingueculitis' },
          { icd10: 'H1089', icd10description: 'Other conjunctivitis' },
          { icd10: 'H109', icd10description: 'Unspecified conjunctivitis' },
          { icd10: 'H6020', icd10description: 'Malignant otitis externa' },
          { icd10: 'H60339', icd10description: "Swimmer's ear" },
          {
            icd10: 'H60399',
            icd10description: 'Other infective otitis externa',
          },
          { icd10: 'H6500', icd10description: 'Acute serous otitis media' },
          {
            icd10: 'H65119',
            icd10description:
              'Acute and subacute allergic otitis media (mucoid) (sanguinous) (serous)',
          },
          {
            icd10: 'H65199',
            icd10description: 'Other acute nonsuppurative otitis media',
          },
          { icd10: 'H6520', icd10description: 'Chronic serous otitis media' },
          {
            icd10: 'H65499',
            icd10description: 'Other chronic nonsuppurative otitis media',
          },
          {
            icd10: 'H6590',
            icd10description: 'Unspecified nonsuppurative otitis media',
          },
          {
            icd10: 'H66009',
            icd10description:
              'Acute suppurative otitis media without spontaneous rupture of ear drum',
          },
          {
            icd10: 'H66019',
            icd10description:
              'Acute suppurative otitis media with spontaneous rupture of ear drum',
          },
          {
            icd10: 'H663X9',
            icd10description: 'Other chronic suppurative otitis media',
          },
          { icd10: 'H6640', icd10description: 'Suppurative otitis media' },
          { icd10: 'H6690', icd10description: 'Otitis media' },
          {
            icd10: 'J00',
            icd10description: 'Acute nasopharyngitis [common cold]',
          },
          { icd10: 'J0100', icd10description: 'Acute maxillary sinusitis' },
          { icd10: 'J0110', icd10description: 'Acute frontal sinusitis' },
          { icd10: 'J0130', icd10description: 'Acute sphenoidal sinusitis' },
          { icd10: 'J0140', icd10description: 'Acute pansinusitis' },
          { icd10: 'J0190', icd10description: 'Acute sinusitis' },
          { icd10: 'J029', icd10description: 'Acute pharyngitis' },
          { icd10: 'J060', icd10description: 'Acute laryngopharyngitis' },
          {
            icd10: 'J069',
            icd10description: 'Acute upper respiratory infection',
          },
          { icd10: 'J209', icd10description: 'Acute bronchitis' },
          {
            icd10: 'J301',
            icd10description: 'Allergic rhinitis due to pollen',
          },
          {
            icd10: 'J3081',
            icd10description:
              'Allergic rhinitis due to animal (cat) (dog) hair and dander',
          },
          { icd10: 'J36', icd10description: 'Peritonsillar abscess' },
          { icd10: 'J40', icd10description: 'Bronchitis' },
          {
            icd10: 'J411',
            icd10description: 'Mucopurulent chronic bronchitis',
          },
          {
            icd10: 'J42',
            icd10description: 'Unspecified chronic bronchitis',
          },
          {
            icd10: 'J45901',
            icd10description: 'Unspecified asthma with (acute) exacerbation',
          },
          {
            icd10: 'J45902',
            icd10description: 'Unspecified asthma with status asthmaticus',
          },
          {
            icd10: 'K210',
            icd10description:
              'Gastro-esophageal reflux disease with esophagitis',
          },
          {
            icd10: 'K219',
            icd10description:
              'Gastro-esophageal reflux disease without esophagitis',
          },
          {
            icd10: 'K2900',
            icd10description: 'Acute gastritis without bleeding',
          },
          {
            icd10: 'K2920',
            icd10description: 'Alcoholic gastritis without bleeding',
          },
          {
            icd10: 'K2960',
            icd10description: 'Other gastritis without bleeding',
          },
          { icd10: 'K5900', icd10description: 'Constipation' },
          { icd10: 'K5901', icd10description: 'Slow transit constipation' },
          {
            icd10: 'K5902',
            icd10description: 'Outlet dysfunction constipation',
          },
          { icd10: 'K649', icd10description: 'Unspecified hemorrhoids' },
          {
            icd10: 'K8019',
            icd10description:
              'Calculus of gallbladder with other cholecystitis with obstruction',
          },
          {
            icd10: 'K8020',
            icd10description:
              'Calculus of gallbladder without cholecystitis without obstruction',
          },
          {
            icd10: 'K8021',
            icd10description:
              'Calculus of gallbladder without cholecystitis with obstruction',
          },
          {
            icd10: 'K8042',
            icd10description:
              'Calculus of bile duct with acute cholecystitis without obstruction',
          },
          {
            icd10: 'K8050',
            icd10description:
              'Calculus of bile duct without cholangitis or cholecystitis without obstruction',
          },
          {
            icd10: 'K8051',
            icd10description:
              'Calculus of bile duct without cholangitis or cholecystitis with obstruction',
          },
          {
            icd10: 'L240',
            icd10description: 'Irritant contact dermatitis due to detergents',
          },
          {
            icd10: 'L242',
            icd10description: 'Irritant contact dermatitis due to solvents',
          },
          {
            icd10: 'L250',
            icd10description: 'Unspecified contact dermatitis due to cosmetics',
          },
          {
            icd10: 'L251',
            icd10description:
              'Unspecified contact dermatitis due to drugs in contact with skin',
          },
          {
            icd10: 'L253',
            icd10description:
              'Unspecified contact dermatitis due to other chemical products',
          },
          {
            icd10: 'L255',
            icd10description: 'Unspecified contact dermatitis due to plants',
          },
          {
            icd10: 'L259',
            icd10description: 'Unspecified contact dermatitis',
          },
          { icd10: 'M25539', icd10description: 'Pain in unspecified wrist' },
          { icd10: 'M5430', icd10description: 'Sciatica' },
          {
            icd10: 'N730',
            icd10description: 'Acute parametritis and pelvic cellulitis',
          },
          {
            icd10: 'N733',
            icd10description: 'Female acute pelvic peritonitis',
          },
          {
            icd10: 'N739',
            icd10description: 'Female pelvic inflammatory disease',
          },
          { icd10: 'N912', icd10description: 'Amenorrhea' },
          {
            icd10: 'N920',
            icd10description:
              'Excessive and frequent menstruation with regular cycle',
          },
          {
            icd10: 'N921',
            icd10description:
              'Excessive and frequent menstruation with irregular cycle',
          },
          {
            icd10: 'N924',
            icd10description: 'Excessive bleeding in the premenopausal period',
          },
          {
            icd10: 'N930',
            icd10description: 'Postcoital and contact bleeding',
          },
          { icd10: 'N946', icd10description: 'Dysmenorrhea' },
          { icd10: 'R079', icd10description: 'Chest pain' },
          { icd10: 'R109', icd10description: 'Unspecified abdominal pain' },
          {
            icd10: 'R21',
            icd10description: 'Rash and other nonspecific skin eruption',
          },
          { icd10: 'R42', icd10description: 'Dizziness and giddiness' },
          {
            icd10: 'S53449A',
            icd10description:
              'Ulnar collateral ligament sprain of unspecified elbow',
          },
          {
            icd10: 'S63519A',
            icd10description: 'Sprain of carpal joint of unspecified wrist',
          },
          {
            icd10: 'S63599A',
            icd10description: 'Other specified sprain of unspecified wrist',
          },
          {
            icd10: 'S638X9A',
            icd10description:
              'Sprain of other part of unspecified wrist and hand',
          },
          {
            icd10: 'S93419A',
            icd10description:
              'Sprain of calcaneofibular ligament of unspecified ankle',
          },
          {
            icd10: 'S93429A',
            icd10description: 'Sprain of deltoid ligament of unspecified ankle',
          },
          {
            icd10: 'S93439A',
            icd10description:
              'Sprain of tibiofibular ligament of unspecified ankle',
          },
        ]);
      }
    });

    caseModel.find({}).then((docs) => {
      if (docs.length == 0) {
        caseModel.create([
          {
            description: `  Patient presents with Flank Pain. The patient is a 51-year-old female, no significant past medical history, presents to the emergency department with left-sided flank pain ongoing ×1 month now with abdominal pain. The pain is intermittent, but has been worsening. She reports new onset nausea, vomiting, diarrhea for the last 2 days. She reports multiple episodes of nonbloody emesis starting yesterday. She has also had multiple episodes of nonbloody diarrhea. She has gone to see her primary care doctor twice since symptoms began. She was found to have mildly elevated creatinine and was referred to a nephrologist. However, the nephrologist is not willing to see her until . The patient feels she cannot wait that long especially in light of these new symptoms. She then followed up with her primary care doctor again and he prescribed Zofran and loperamide but offered her no other solutions. The pain has since increased as well. She denies any fevers, chills. She denies urinary symptoms including burning with urination, frequency, hematuria.`,
          },
          {
            description: `Patient  is an 42 year old  male.    Chief Complaint: Establish Care and Physical    HPI      Hemorrhoids  Bothersome  Comes and goes  Especially with sedentary life style  Recently worse  Couple nights where almost wakes patient up  Gets intermittently constipated  High fiber diet    Patient Active Problem    Diagnoses Code
          -  Hemorrhoids 455.6E       No outpatient prescriptions have been marked as taking for the  encounter (Office Visit) with ,  C.     Allergies   Allergen Reactions
          -  Pcn (Penicillins)
          -  Morphine        No past medical history on file.  Past Surgical History   Procedure Date
          -  Hx knee surgery      Arthroscopy age 15 for torn meniscus       Family History   Problem Relation  of Onset
          -  Cancer Mother      Breast
          -  Hypertension Mother
          -  Hypertension Father      History   Substance Use Topics
          -  Smoking status: Never Smoker
          -  Smokeless tobacco: Not on file`,
          },
          {
            description: `Patient  is an 45 year old  female.    Chief Complaint:  Problem    HPI  states that about one month ago she woke up with redness and swelling to her left eye.  She went to see an ophthalmologist who prescribed her naphazoline.  She states that this relieves the redness only temporarily.  She also states that this morning she awoke with more crusting to the left eye.  The eye is not particularly itchy, but seems more irritated today.  She has not had any sick contacts.          Review of Systems   Constitutional: Negative for fever.   Eyes: Positive for discharge and redness. Negative for blurred vision, double vision and photophobia.   Skin: Negative for itching.   Neurological: Positive for headaches.         Objective:     BP 100/69  -Strict ER precautions reviewed with patient should symptoms persist or worsen (specific signs reviewed verbally).  Good communication established and plan agreed upon by patient.`,
          },
        ]);
      }
    });
  }
}
