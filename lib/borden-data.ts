export interface InformatieBord {
  id: number
  title: string
  subtitle: string
  heroImage: string
  historicImage: string
  modernImage: string
  content: {
    intro: string
    paragraphs: string[]
  }
  quiz: {
    question: string
    hint: string
    options: { id: string; text: string }[]
    correctAnswer: string
    explanation: string
  }
  historischWeetje: {
    title: string
    description: string
  }
}

export const bordenData: InformatieBord[] = [
  {
    id: 1,
    title: "De Haven",
    subtitle: "Historie van de Haven",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    historicImage: "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=600&q=80",
    modernImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    content: {
      intro: "In de hoogtijdagen van de mosselvisserij was de haven van Philippine het kloppende hart van de regio. Schepen voeren af en aan met hun kostbare lading, terwijl de kade gonsde van de activiteit. De geur van zilt water en verse mosselen vulde de lucht, een herinnering aan de tijd dat dit stadje direct verbonden was met de open zee.",
      paragraphs: [
        "De havenmeester hield nauwgezet toezicht op de binnenkomende kotters. Elke visser had zijn eigen verhaal over de stormen op de Westerschelde en de rijke vangsten die hen in staat stelden hun families te onderhouden.",
        "De mosselcultuur was niet alleen een bron van inkomsten, maar vormde ook de identiteit van de gemeenschap. Families werkten generaties lang in dezelfde boten, en kennis werd van vader op zoon doorgegeven.",
      ],
    },
    quiz: {
      question: "Hoeveel mosselkotters lagen er gemiddeld in de haven rond het jaar 1900?",
      hint: "Denk aan de bloeitijd van de mosselvisserij",
      options: [
        { id: "A", text: "Minder dan 10 schepen" },
        { id: "B", text: "Tussen de 30 en 50 schepen" },
        { id: "C", text: "Meer dan 100 schepen" },
      ],
      correctAnswer: "B",
      explanation: "Rond 1900 lag de haven vol met 30 tot 50 mosselkotters. Dit was de bloeitijd van de mosselvisserij in Philippine.",
    },
    historischWeetje: {
      title: "De Mosselveiling",
      description: "Philippine had vroeger een eigen mosselveiling waar vissers hun vangst verkochten. De veiling begon elke ochtend om 6 uur en trok kopers uit heel Zeeland en daarbuiten.",
    },
  },
  {
    id: 2,
    title: "Het Marktplein",
    subtitle: "Hart van de Gemeenschap",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80",
    historicImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    modernImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=80",
    content: {
      intro: "Het marktplein van Philippine was eeuwenlang het bruisende centrum van het dorp. Hier kwamen handelaren, boeren en vissers samen om hun waren te verkopen en het laatste nieuws uit te wisselen.",
      paragraphs: [
        "Elke woensdag en zaterdag was het marktdag. De kramen stonden vol met verse vis, groenten van de omliggende akkers, en huishoudelijke waren. Het was een sociaal evenement waar de hele gemeenschap samenkwam.",
        "Rondom het plein bevonden zich de belangrijkste gebouwen van het dorp: het raadhuis, de herberg, en de huizen van welgestelde kooplieden. De architectuur weerspiegelt nog steeds de rijkdom van vervlogen tijden.",
      ],
    },
    quiz: {
      question: "Op welke dagen werd er traditioneel markt gehouden op het plein?",
      hint: "Het waren twee vaste dagen per week",
      options: [
        { id: "A", text: "Maandag en vrijdag" },
        { id: "B", text: "Woensdag en zaterdag" },
        { id: "C", text: "Dinsdag en donderdag" },
        { id: "D", text: "Alleen op zondag" },
      ],
      correctAnswer: "B",
      explanation: "De traditionele marktdagen in Philippine waren woensdag en zaterdag, een traditie die eeuwenlang werd voortgezet.",
    },
    historischWeetje: {
      title: "De Dorpspomp",
      description: "In het midden van het plein stond tot 1920 een grote stenen waterpomp. Dit was de centrale plek waar dorpelingen water haalden en nieuwtjes uitwisselden.",
    },
  },
  {
    id: 3,
    title: "De Sint-Filippuskerk",
    subtitle: "Eeuwen van Geloof",
    heroImage: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=1200&q=80",
    historicImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    modernImage: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&q=80",
    content: {
      intro: "De Sint-Filippuskerk, vernoemd naar de patroonheilige van het dorp, staat al sinds de 17e eeuw in het hart van Philippine. Het imposante gebouw heeft oorlogen, stormen en veranderingen overleefd.",
      paragraphs: [
        "De kerk werd gebouwd in 1645 en heeft sindsdien verschillende renovaties ondergaan. De karakteristieke toren is van verre zichtbaar en diende vroeger als oriëntatiepunt voor vissers op zee.",
        "Binnen bevinden zich waardevolle kunstwerken, waaronder een 18e-eeuws orgel en gebrandschilderde ramen die bijbelse taferelen uitbeelden. De kerkklokken luiden nog steeds bij bijzondere gelegenheden.",
      ],
    },
    quiz: {
      question: "In welk jaar werd de eerste steen van de Sint-Filippuskerk gelegd?",
      hint: "Het was in de Gouden Eeuw van Nederland",
      options: [
        { id: "A", text: "1645" },
        { id: "B", text: "1712" },
        { id: "C", text: "1863" },
        { id: "D", text: "1901" },
      ],
      correctAnswer: "A",
      explanation: "De Sint-Filippuskerk werd gebouwd in 1645, midden in de Nederlandse Gouden Eeuw. De kerk vormt sindsdien het spirituele centrum van Philippine.",
    },
    historischWeetje: {
      title: "De Kerkklok",
      description: "De oudste klok in de kerktoren dateert uit 1680 en heeft een bijzondere inscriptie: 'Ik roep de levenden en beween de doden'. Deze klok luidt nog steeds bij begrafenissen.",
    },
  },
  {
    id: 4,
    title: "De Molen",
    subtitle: "Industrieel Erfgoed",
    heroImage: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80",
    historicImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    modernImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
    content: {
      intro: "De korenmolen van Philippine was eeuwenlang essentieel voor de voedselvoorziening van het dorp en de omgeving. Hier werd graan gemalen tot meel voor het dagelijkse brood.",
      paragraphs: [
        "De huidige molen dateert uit 1850 en verving een oudere houten voorganger. De stenen stellingmolen kon door zijn hoogte optimaal profiteren van de wind die over het vlakke Zeeuwse land waaide.",
        "De molenaar was een gerespecteerd lid van de gemeenschap. Hij werkte van zonsopgang tot zonsondergang, en het geluid van de draaiende wieken was een vertrouwd onderdeel van het dorpsleven.",
      ],
    },
    quiz: {
      question: "Wat voor type molen staat er in Philippine?",
      hint: "Het is een molen gebouwd op een verhoogd platform",
      options: [
        { id: "A", text: "Een poldermolen" },
        { id: "B", text: "Een stellingmolen" },
        { id: "C", text: "Een standerdmolen" },
        { id: "D", text: "Een tjasker" },
      ],
      correctAnswer: "B",
      explanation: "De molen van Philippine is een stellingmolen, herkenbaar aan de omloop (stelling) waarop de molenaar staat om de wieken te bedienen.",
    },
    historischWeetje: {
      title: "Molentaal",
      description: "De stand van de molenwieken gaf vroeger boodschappen door aan het dorp. Recht omhoog betekende rust, schuin naar rechts was feest, en een kruis duidde op rouw.",
    },
  },
  {
    id: 5,
    title: "Het Fort",
    subtitle: "Verdedigingswerken",
    heroImage: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=1200&q=80",
    historicImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80",
    modernImage: "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=600&q=80",
    content: {
      intro: "De vestingwerken van Philippine getuigen van een roerige geschiedenis. Als grensplaats speelde het dorp een strategische rol in verschillende conflicten door de eeuwen heen.",
      paragraphs: [
        "De eerste versterkingen werden aangelegd tijdens de Tachtigjarige Oorlog. De aarden wallen en grachten moesten het dorp beschermen tegen Spaanse troepen en later tegen andere vijanden.",
        "Hoewel veel van de oorspronkelijke verdedigingswerken zijn verdwenen, zijn de contouren nog zichtbaar in het landschap. De grachten zijn nu vreedzame waterwegen, begroeid met riet en bewoond door watervogels.",
      ],
    },
    quiz: {
      question: "Tijdens welke oorlog werden de eerste vestingwerken van Philippine aangelegd?",
      hint: "Nederland vocht voor onafhankelijkheid van Spanje",
      options: [
        { id: "A", text: "De Honderdjarige Oorlog" },
        { id: "B", text: "De Tachtigjarige Oorlog" },
        { id: "C", text: "De Eerste Wereldoorlog" },
        { id: "D", text: "De Napoleontische Oorlogen" },
      ],
      correctAnswer: "B",
      explanation: "De vestingwerken werden aangelegd tijdens de Tachtigjarige Oorlog (1568-1648), toen Nederland vocht voor onafhankelijkheid van het Spaanse Rijk.",
    },
    historischWeetje: {
      title: "Ondergrondse Gangen",
      description: "Volgens lokale legendes bevinden zich onder het fort geheime tunnels die ooit dienden als vluchtroutes. Sommige kelders in het dorp zouden nog steeds toegangen bevatten tot deze mysterieuze gangen.",
    },
  },
]

export function getBordById(id: number): InformatieBord | undefined {
  return bordenData.find((bord) => bord.id === id)
}

export function getAllBorden(): InformatieBord[] {
  return bordenData
}
