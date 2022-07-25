// List of US stock options for AlphaVantage API

const stockOptions = [
  {
    symbol: 'A',
    name: 'Agilent Technologies Inc'
  },
  {
    symbol: 'AA',
    name: 'Alcoa Corp'
  },
  {
    symbol: 'AAC',
    name: 'Ares Acquisition Corporation - Class A'
  },
  {
    symbol: 'AAC-U',
    name: 'Ares Acquisition Corporation - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'AAC-WS',
    name: 'Ares Acquisition Corporation - Warrants (01/01/9999)'
  },
  {
    symbol: 'AACG',
    name: 'ATA Creativity Global'
  },
  {
    symbol: 'AACI',
    name: 'Armada Acquisition Corp I'
  },
  {
    symbol: 'AACIU',
    name: 'Armada Acquisition Corp I - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'AACIW',
    name: 'Armada Acquisition Corp I - Warrants (13/08/2026)'
  },
  {
    symbol: 'AADI',
    name: 'Aadi Bioscience Inc'
  },
  {
    symbol: 'AAIC',
    name: 'Arlington Asset Investment Corp - Class A'
  },
  {
    symbol: 'AAIC-P-B',
    name: 'Arlington Asset Investment Corp'
  },
  {
    symbol: 'AAIC-P-C',
    name: 'Arlington Asset Investment Corp'
  },
  {
    symbol: 'AAIN',
    name: 'Arlington Asset Investment Corp'
  },
  {
    symbol: 'AAL',
    name: 'American Airlines Group Inc'
  },
  {
    symbol: 'AAM-P-A',
    name: 'Apollo Asset Management Inc'
  },
  {
    symbol: 'AAM-P-B',
    name: 'Apollo Asset Management Inc'
  },
  {
    symbol: 'AAMC',
    name: 'Altisource Asset Management Corp'
  },
  {
    symbol: 'AAME',
    name: 'Atlantic American Corp'
  },
  {
    symbol: 'AAN',
    name: 'Aarons Company Inc (The)'
  },
  {
    symbol: 'AAN-W',
    name: 'Aarons Holdings Company Inc When Issued'
  },
  {
    symbol: 'AAOI',
    name: 'Applied Optoelectronics Inc'
  },
  {
    symbol: 'AAON',
    name: 'AAON Inc'
  },
  {
    symbol: 'AAP',
    name: 'Advance Auto Parts Inc'
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc'
  },
  {
    symbol: 'AAQC',
    name: 'Accelerate Acquisition Corp - Class A'
  },
  {
    symbol: 'AAQC-U',
    name: 'Accelerate Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'AAQC-WS',
    name: 'Accelerate Acquisition Corp - Warrants (15/03/2028)'
  },
  {
    symbol: 'AAT',
    name: 'American Assets Trust Inc'
  },
  {
    symbol: 'AATC',
    name: 'Autoscope Technologies Corporation'
  },
  {
    symbol: 'AAU',
    name: 'Almaden Minerals Ltd'
  },
  {
    symbol: 'AAWW',
    name: 'Atlas Air Worldwide Holdings Inc'
  },
  {
    symbol: 'AB',
    name: 'AllianceBernstein Holding Lp'
  },
  {
    symbol: 'ABB',
    name: 'ABB Ltd'
  },
  {
    symbol: 'ABBV',
    name: 'Abbvie Inc'
  },
  {
    symbol: 'ABC',
    name: 'Amerisource Bergen Corp'
  },
  {
    symbol: 'ABCB',
    name: 'Ameris Bancorp'
  },
  {
    symbol: 'ABCL',
    name: 'AbCellera Biologics Inc'
  },
  {
    symbol: 'ABCM',
    name: 'Abcam'
  },
  {
    symbol: 'ABEO',
    name: 'Abeona Therapeutics Inc'
  },
  {
    symbol: 'ABEV',
    name: 'Ambev S.A.'
  },
  {
    symbol: 'ABG',
    name: 'Asbury Automotive Group Inc'
  },
  {
    symbol: 'ABGI',
    name: 'ABG Acquisition Corp I - Class A'
  },
  {
    symbol: 'ABIO',
    name: 'ARCA biopharma Inc'
  },
  {
    symbol: 'ABM',
    name: 'ABM Industries Inc'
  },
  {
    symbol: 'ABMD',
    name: 'Abiomed Inc'
  },
  {
    symbol: 'ABNB',
    name: 'Airbnb Inc - Class A'
  },
  {
    symbol: 'ABOS',
    name: 'Acumen Pharmaceuticals Inc'
  },
  {
    symbol: 'ABR',
    name: 'Arbor Realty Trust Inc'
  },
  {
    symbol: 'ABR-P-D',
    name: 'Arbor Realty Trust Inc'
  },
  {
    symbol: 'ABR-P-E',
    name: 'Arbor Realty Trust Inc'
  },
  {
    symbol: 'ABR-P-F',
    name: 'Arbor Realty Trust Inc'
  },
  {
    symbol: 'ABSI',
    name: 'Absci Corp'
  },
  {
    symbol: 'ABST',
    name: 'Absolute Software Corporation'
  },
  {
    symbol: 'ABT',
    name: 'Abbott Laboratories'
  },
  {
    symbol: 'ABTX',
    name: 'Allegiance Bancshares Inc'
  },
  {
    symbol: 'ABUS',
    name: 'Arbutus Biopharma Corp'
  },
  {
    symbol: 'ABVC',
    name: 'ABVC BioPharma Inc'
  },
  {
    symbol: 'AC',
    name: 'Associated Capital Group Inc - Class A'
  },
  {
    symbol: 'ACA',
    name: 'Arcosa Inc'
  },
  {
    symbol: 'ACAB',
    name: 'Atlantic Coastal Acquisition Corp II - Class A'
  },
  {
    symbol: 'ACABU',
    name: 'Atlantic Coastal Acquisition Corp II - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ACABW',
    name: 'Atlantic Coastal Acquisition Corp II - Warrants (13/01/2027)'
  },
  {
    symbol: 'ACACU',
    name: 'Acri Capital Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ACAD',
    name: 'Acadia Pharmaceuticals Inc'
  },
  {
    symbol: 'ACAH',
    name: 'Atlantic Coastal Acquisition Corp - Class A'
  },
  {
    symbol: 'ACAHU',
    name: 'Atlantic Coastal Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'ACAHW',
    name: 'Atlantic Coastal Acquisition Corp - Warrants (02/03/2026)'
  },
  {
    symbol: 'ACAQ',
    name: 'Athena Consumer Acquisition Corp - Class A'
  },
  {
    symbol: 'ACAQ-U',
    name: 'Athena Consumer Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'ACAQ-WS',
    name: 'Athena Consumer Acquisition Corp - Warrants(31/07/2028)'
  },
  {
    symbol: 'ACAX',
    name: 'Alset Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'ACAXR',
    name: 'Alset Capital Acquisition Corp'
  },
  {
    symbol: 'ACAXU',
    name: 'Alset Capital Acquisition Corp - Units (1 Ord Class A & 1/2 War & 1 Right)'
  },
  {
    symbol: 'ACAXW',
    name: 'Alset Capital Acquisition Corp - Warrants (31/01/2027)'
  },
  {
    symbol: 'ACB',
    name: 'Aurora Cannabis Inc'
  },
  {
    symbol: 'ACBA',
    name: 'Ace Global Business Acquisition Ltd'
  },
  {
    symbol: 'ACBAU',
    name: 'Ace Global Business Acquisition Ltd - Units (1 Ord & 1 War)'
  },
  {
    symbol: 'ACBAW',
    name: 'Ace Global Business Acquisition Ltd - Warrants (26/03/2026)'
  },
  {
    symbol: 'ACC',
    name: 'American Campus Communities Inc'
  },
  {
    symbol: 'ACCD',
    name: 'Accolade Inc'
  },
  {
    symbol: 'ACCO',
    name: 'Acco Brands Corporation'
  },
  {
    symbol: 'ACDI',
    name: 'Ascendant Digital Acquisition Corp III - Class A'
  },
  {
    symbol: 'ACDI-U',
    name: 'Ascendant Digital Acquisition Corp III - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'ACDI-WS',
    name: 'Ascendant Digital Acquisition Corp III - Warrants (01/01/9999)'
  },
  {
    symbol: 'ACEL',
    name: 'Accel Entertainment Inc - Class A1'
  },
  {
    symbol: 'ACER',
    name: 'Acer Therapeutics Inc'
  },
  {
    symbol: 'ACET',
    name: 'Adicet Bio Inc'
  },
  {
    symbol: 'ACEV',
    name: 'ACE Convergence Acquisition Corp - Class A'
  },
  {
    symbol: 'ACEVU',
    name: 'ACE Convergence Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ACEVW',
    name: 'ACE Convergence Acquisition Corp - Warrants (30/09/2027)'
  },
  {
    symbol: 'ACGL',
    name: 'Arch Capital Group Ltd'
  },
  {
    symbol: 'ACGLN',
    name: 'Arch Capital Group Ltd'
  },
  {
    symbol: 'ACGLO',
    name: 'Arch Capital Group Ltd'
  },
  {
    symbol: 'ACH',
    name: 'Aluminum Corporation Of China Ltd.'
  },
  {
    symbol: 'ACHC',
    name: 'Acadia Healthcare Company Inc'
  },
  {
    symbol: 'ACHL',
    name: 'Achilles Therapeutics Plc'
  },
  {
    symbol: 'ACHR',
    name: 'Archer Aviation Inc - Class A'
  },
  {
    symbol: 'ACHR-WS',
    name: 'Archer Aviation Inc Wt'
  },
  {
    symbol: 'ACHV',
    name: 'Achieve Life Sciences Inc'
  },
  {
    symbol: 'ACI',
    name: 'Albertsons Companies Inc - Class A'
  },
  {
    symbol: 'ACII',
    name: 'Atlas Crest Investment Corp II - Class A'
  },
  {
    symbol: 'ACII-U',
    name: 'Atlas Crest Investment Corp II - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'ACII-WS',
    name: 'Atlas Crest Investment Corp II - Warrants (01/01/9999)'
  },
  {
    symbol: 'ACIU',
    name: 'AC Immune SA'
  },
  {
    symbol: 'ACIW',
    name: 'ACI Worldwide Inc'
  },
  {
    symbol: 'ACKIT',
    name: 'Ackrell SPAC Partners I Co - Subunits (1 Ord & 0.5 War)'
  },
  {
    symbol: 'ACKIU',
    name: 'Ackrell SPAC Partners I Co - Units ( 1Subunit & 0.5 War)'
  },
  {
    symbol: 'ACKIW',
    name: 'Ackrell SPAC Partners I Co - Warrants (21/12/2025)'
  },
  {
    symbol: 'ACLS',
    name: 'Axcelis Technologies Inc'
  },
  {
    symbol: 'ACLX',
    name: 'Arcellx Inc'
  },
  {
    symbol: 'ACM',
    name: 'AECOM'
  },
  {
    symbol: 'ACMR',
    name: 'ACM Research Inc - Class A'
  },
  {
    symbol: 'ACN',
    name: 'Accenture plc - Class A'
  },
  {
    symbol: 'ACNB',
    name: 'ACNB Corp'
  },
  {
    symbol: 'ACND-WS',
    name: 'Ascendant Digital Acquisition Corp Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50 per share'
  },
  {
    symbol: 'ACON',
    name: 'Aclarion Inc'
  },
  {
    symbol: 'ACONW',
    name: 'Aclarion Inc - Warrants (01/12/2026)'
  },
  {
    symbol: 'ACOR',
    name: 'Acorda Therapeutics Inc'
  },
  {
    symbol: 'ACP-P-A',
    name: 'abrdn Income Credit Strategies Fund'
  },
  {
    symbol: 'ACP-R-W',
    name: 'Aberdeen Income Credit Strategies Fund Rights expiring June 16 2021 When Issued'
  },
  {
    symbol: 'ACQR',
    name: 'Independence Holdings Corp - Class A'
  },
  {
    symbol: 'ACQRU',
    name: 'Independence Holdings Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'ACQRW',
    name: 'Independence Holdings Corp - Warrants (31/03/2028)'
  },
  {
    symbol: 'ACR',
    name: 'ACRES Commercial Realty Corp'
  },
  {
    symbol: 'ACR-P-C',
    name: 'ACRES Commercial Realty Corp'
  },
  {
    symbol: 'ACR-P-D',
    name: 'ACRES Commercial Realty Corp'
  },
  {
    symbol: 'ACRE',
    name: 'Ares Commercial Real Estate Corp'
  },
  {
    symbol: 'ACRO',
    name: 'Acropolis Infrastructure Acquisition Corp - Class A'
  },
  {
    symbol: 'ACRO-U',
    name: 'Acropolis Infrastructure Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'ACRO-WS',
    name: 'Acropolis Infrastructure Acquisition Corp - Warrants (30/03/2026)'
  },
  {
    symbol: 'ACRS',
    name: 'Aclaris Therapeutics Inc'
  },
  {
    symbol: 'ACRX',
    name: 'Acelrx Pharmaceuticals Inc'
  },
  {
    symbol: 'ACST',
    name: 'Acasti Pharma Inc - Class A'
  },
  {
    symbol: 'ACT',
    name: 'Enact Holdings Inc'
  },
  {
    symbol: 'ACTD',
    name: 'ArcLight Clean Transition Corp II - Class A'
  },
  {
    symbol: 'ACTDU',
    name: 'ArcLight Clean Transition Corp II - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'ACTDW',
    name: 'ArcLight Clean Transition Corp II - Warrants (16/03/2028)'
  },
  {
    symbol: 'ACTG',
    name: 'Acacia Research Corp'
  },
  {
    symbol: 'ACTTW',
    name: 'Act II Global Acquisition Corp Warrants 30042026'
  },
  {
    symbol: 'ACU',
    name: 'Acme United Corp'
  },
  {
    symbol: 'ACVA',
    name: 'ACV Auctions Inc - Class A'
  },
  {
    symbol: 'ACXP',
    name: 'Acurx Pharmaceuticals Inc'
  },
  {
    symbol: 'ADAG',
    name: 'Adagene Inc'
  },
  {
    symbol: 'ADAL',
    name: 'Anthemis Digital Acquisitions I Corp - Class A'
  },
  {
    symbol: 'ADALU',
    name: 'Anthemis Digital Acquisitions I Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ADALW',
    name: 'Anthemis Digital Acquisitions I Corp - Warrants (18/10/2026)'
  },
  {
    symbol: 'ADAP',
    name: 'Adaptimmune Therapeutics Plc'
  },
  {
    symbol: 'ADBE',
    name: 'Adobe Inc'
  },
  {
    symbol: 'ADC',
    name: 'Agree Realty Corp'
  },
  {
    symbol: 'ADC-P-A',
    name: 'Agree Realty Corp'
  },
  {
    symbol: 'ADCT',
    name: 'Adc Therapeutics SA'
  },
  {
    symbol: 'ADER',
    name: '26 Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'ADERU',
    name: '26 Capital Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ADERW',
    name: '26 Capital Acquisition Corp - Warrants (31/12/2027)'
  },
  {
    symbol: 'ADES',
    name: 'Advanced Emissions Solutions Inc'
  },
  {
    symbol: 'ADEX',
    name: 'Adit Edtech Acquisition Corp'
  },
  {
    symbol: 'ADEX-U',
    name: 'Adit Edtech Acquisition Corp - Units (1 Ord Share & 1/2 War)'
  },
  {
    symbol: 'ADEX-WS',
    name: 'Adit Edtech Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'ADGI',
    name: 'Adagio Therapeutics Inc'
  },
  {
    symbol: 'ADI',
    name: 'Analog Devices Inc'
  },
  {
    symbol: 'ADIL',
    name: 'Adial Pharmaceuticals Inc'
  },
  {
    symbol: 'ADILW',
    name: 'Adial Pharmaceuticals Inc Warrants 31072023'
  },
  {
    symbol: 'ADM',
    name: 'Archer Daniels Midland Company'
  },
  {
    symbol: 'ADMA',
    name: 'Adma Biologics Inc'
  },
  {
    symbol: 'ADMP',
    name: 'Adamis Pharmaceuticals Corp'
  },
  {
    symbol: 'ADN',
    name: 'Advent Technologies Holdings Inc - Class A'
  },
  {
    symbol: 'ADNT',
    name: 'Adient plc'
  },
  {
    symbol: 'ADOC',
    name: 'Edoc Acquisition Corp - Class A'
  },
  {
    symbol: 'ADOCR',
    name: 'Edoc Acquisition Corp'
  },
  {
    symbol: 'ADOCW',
    name: 'Edoc Acquisition Corp - Warrants (30/11/2027)'
  },
  {
    symbol: 'ADP',
    name: 'Automatic Data Processing Inc'
  },
  {
    symbol: 'ADPT',
    name: 'Adaptive Biotechnologies Corp'
  },
  {
    symbol: 'ADRA',
    name: 'Adara Acquisition Corp - Class A'
  },
  {
    symbol: 'ADRA-U',
    name: 'Adara Acquisition Corp - Units (1Ord Class A & 0.5 Warr)'
  },
  {
    symbol: 'ADRA-WS',
    name: 'Adara Acquisition Corp - Warrants (11/02/2026)'
  },
  {
    symbol: 'ADRT',
    name: 'Ault Disruptive Technologies Corp'
  },
  {
    symbol: 'ADRT-U',
    name: 'Ault Disruptive Technologies Corp - Units (1 Ord Share & 3/4 War)'
  },
  {
    symbol: 'ADRT-WS',
    name: 'Ault Disruptive Technologies Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'ADS-W',
    name: 'Alliance Data Systems Corporation ExDistribution When Issued'
  },
  {
    symbol: 'ADSE',
    name: 'Ads-Tec Energy Plc'
  },
  {
    symbol: 'ADSEW',
    name: 'Ads-Tec Energy Plc - Warrants (22/12/2026)'
  },
  {
    symbol: 'ADSK',
    name: 'Autodesk Inc'
  },
  {
    symbol: 'ADT',
    name: 'ADT Inc'
  },
  {
    symbol: 'ADTH',
    name: 'AdTheorent Holding Company Inc'
  },
  {
    symbol: 'ADTHW',
    name: 'AdTheorent Holding Company Inc - Warrants (22/12/2026)'
  },
  {
    symbol: 'ADTN',
    name: 'ADTRAN Holdings Inc'
  },
  {
    symbol: 'ADTX',
    name: 'Aditxt Inc'
  },
  {
    symbol: 'ADUS',
    name: 'Addus HomeCare Corporation'
  },
  {
    symbol: 'ADV',
    name: 'Advantage Solutions Inc - Class A'
  },
  {
    symbol: 'ADVM',
    name: 'Adverum Biotechnologies Inc'
  },
  {
    symbol: 'ADXN',
    name: 'Addex Therapeutics Ltd'
  },
  {
    symbol: 'AE',
    name: 'Adams Resources & Energy Inc'
  },
  {
    symbol: 'AEAC',
    name: 'Authentic Equity Acquisition Corp - Class A'
  },
  {
    symbol: 'AEACU',
    name: 'Authentic Equity Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'AEACW',
    name: 'Authentic Equity Acquisition Corp - Warrants (31/10/2027)'
  },
  {
    symbol: 'AEAE',
    name: 'AltEnergy Acquisition Corp - Class A'
  },
  {
    symbol: 'AEAEU',
    name: 'AltEnergy Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'AEAEW',
    name: 'AltEnergy Acquisition Corp - Warrants (29/10/2026)'
  },
  {
    symbol: 'AEE',
    name: 'Ameren Corp'
  },
  {
    symbol: 'AEFC',
    name: 'Aegon Funding Company LLC'
  },
  {
    symbol: 'AEG',
    name: 'Aegon N. V.'
  },
  {
    symbol: 'AEHA',
    name: 'Aesther Healthcare Acquisition Corp - Class A'
  },
  {
    symbol: 'AEHAU',
    name: 'Aesther Healthcare Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'AEHAW',
    name: 'Aesther Healthcare Acquisition Corp - Warrants (14/09/2026)'
  },
  {
    symbol: 'AEHL',
    name: 'Antelope Enterprise Holdings Ltd'
  },
  {
    symbol: 'AEHR',
    name: 'Aehr Test Systems'
  },
  {
    symbol: 'AEI',
    name: 'Alset EHome International Inc'
  },
  {
    symbol: 'AEIS',
    name: 'Advanced Energy Industries Inc'
  },
  {
    symbol: 'AEL',
    name: 'American Equity Investment Life Holding Company'
  },
  {
    symbol: 'AEL-P-A',
    name: 'American Equity Investment Life Holding Company 5.95 PRF PERPETUAL USD 25 Ser A 11000th'
  },
  {
    symbol: 'AEL-P-B',
    name: 'American Equity Investment Life Holding Company'
  },
  {
    symbol: 'AEM',
    name: 'Agnico Eagle Mines Ltd'
  },
  {
    symbol: 'AEMD',
    name: 'Aethlon Medical Inc'
  },
  {
    symbol: 'AENZ',
    name: 'Aenza S.A.A'
  },
  {
    symbol: 'AEO',
    name: 'American Eagle Outfitters Inc'
  },
  {
    symbol: 'AEP',
    name: 'American Electric Power Company Inc'
  },
  {
    symbol: 'AEP-P-C',
    name: 'American Electric Power Company Inc Corporate Units'
  },
  {
    symbol: 'AEPPZ',
    name: 'American Electric Power Company Inc'
  },
  {
    symbol: 'AER',
    name: 'Aercap Holdings N.V.'
  },
  {
    symbol: 'AERC',
    name: 'AeroClean Technologies Inc'
  },
  {
    symbol: 'AERI',
    name: 'Aerie Pharmaceuticals Inc'
  },
  {
    symbol: 'AES',
    name: 'AES Corp'
  },
  {
    symbol: 'AESC',
    name: 'AES Corp'
  },
  {
    symbol: 'AESE',
    name: 'Allied Esports Entertainment Inc'
  },
  {
    symbol: 'AEVA',
    name: 'Aeva Technologies Inc'
  },
  {
    symbol: 'AEVA-WS',
    name: 'Aeva Technologies Inc - Warrants (29/10/2024)'
  },
  {
    symbol: 'AEY',
    name: 'Addvantage Technologies Group'
  },
  {
    symbol: 'AEYE',
    name: 'AudioEye Inc'
  },
  {
    symbol: 'AEZS',
    name: 'Aeterna Zentaris Inc'
  },
  {
    symbol: 'AFAC',
    name: 'Arena Fortify Acquisition Corp - Class A'
  },
  {
    symbol: 'AFACU',
    name: 'Arena Fortify Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'AFACW',
    name: 'Arena Fortify Acquisition Corp - Warrants (10/11/2026)'
  },
  {
    symbol: 'AFAQ',
    name: 'AF Acquisition Corp - Class A'
  },
  {
    symbol: 'AFAQU',
    name: 'AF Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'AFAQW',
    name: 'AF Acquisition Corp - Warrants (16/03/2026)'
  },
  {
    symbol: 'AFAR',
    name: 'Aura FAT Projects Acquisition Corp - Class A'
  },
  {
    symbol: 'AFARU',
    name: 'Aura FAT Projects Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'AFARW',
    name: 'Aura FAT Projects Acquisition Corp - Warrants(31/03/2027)'
  },
  {
    symbol: 'AFBI',
    name: 'Affinity Bancshares Inc'
  },
  {
    symbol: 'AFCG',
    name: 'AFC Gamma Inc'
  },
  {
    symbol: 'AFG',
    name: 'American Financial Group Inc'
  },
  {
    symbol: 'AFGB',
    name: 'American Financial Group Inc'
  },
  {
    symbol: 'AFGC',
    name: 'American Financial Group Inc'
  },
  {
    symbol: 'AFGD',
    name: 'American Financial Group Inc'
  },
  {
    symbol: 'AFGE',
    name: 'American Financial Group Inc'
  },
  {
    symbol: 'AFIB',
    name: 'Acutus Medical Inc'
  },
  {
    symbol: 'AFL',
    name: 'Aflac Inc'
  },
  {
    symbol: 'AFMD',
    name: 'Affimed N.V.'
  },
  {
    symbol: 'AFRI',
    name: 'Forafric Global PLC'
  },
  {
    symbol: 'AFRIW',
    name: 'Forafric Global PLC - Warrants (09/06/2027)'
  },
  {
    symbol: 'AFRM',
    name: 'Affirm Holdings Inc - Class A'
  },
  {
    symbol: 'AFTR',
    name: 'AfterNext HealthTech Acquisition Corp - Class A'
  },
  {
    symbol: 'AFTR-U',
    name: 'AfterNext HealthTech Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'AFTR-WS',
    name: 'AfterNext HealthTech Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'AFYA',
    name: 'Afya Ltd - Class A'
  },
  {
    symbol: 'AG',
    name: 'First Majestic Silver Corporation'
  },
  {
    symbol: 'AGAC',
    name: 'African Gold Acquisition Corp - Class A'
  },
  {
    symbol: 'AGAC-U',
    name: 'African Gold Acquisition Corp - Units (1 Ord Class A & 3/4 War)'
  },
  {
    symbol: 'AGAC-WS',
    name: 'African Gold Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'AGBA',
    name: 'Agba Acquisition Ltd'
  },
  {
    symbol: 'AGBAR',
    name: 'Agba Acquisition Ltd'
  },
  {
    symbol: 'AGBAU',
    name: 'Agba Acquisition Ltd - Unit (1 Ordinary share 1 Wrt & 1 Rts )'
  },
  {
    symbol: 'AGBAW',
    name: 'Agba Acquisition Ltd - Warrants (10/05/2024)'
  },
  {
    symbol: 'AGCB',
    name: 'Altimeter Growth Corp 2 - Class A'
  },
  {
    symbol: 'AGCO',
    name: 'AGCO Corp'
  },
  {
    symbol: 'AGE',
    name: 'AgeX Therapeutics Inc'
  },
  {
    symbol: 'AGEN',
    name: 'Agenus Inc'
  },
  {
    symbol: 'AGFS',
    name: 'AgroFresh Solutions Inc'
  },
  {
    symbol: 'AGFY',
    name: 'Agrify Corp'
  },
  {
    symbol: 'AGGR',
    name: 'Agile Growth Corp - Class A'
  },
  {
    symbol: 'AGGRU',
    name: 'Agile Growth Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'AGGRW',
    name: 'Agile Growth Corp - Warrants (09/03/2026)'
  },
  {
    symbol: 'AGI',
    name: 'Alamos Gold Inc - Class A'
  },
  {
    symbol: 'AGIL',
    name: 'AgileThought Inc - Class A'
  },
  {
    symbol: 'AGILW',
    name: 'AgileThought Inc - Warrants(20/08/2026)'
  },
  {
    symbol: 'AGIO',
    name: 'Agios Pharmaceuticals Inc'
  },
  {
    symbol: 'AGL',
    name: 'Agilon Health Inc'
  },
  {
    symbol: 'AGLE',
    name: 'Aeglea BioTherapeutics Inc'
  },
  {
    symbol: 'AGM',
    name: 'Federal Agricultural Mortgage Corp - Class C'
  },
  {
    symbol: 'AGM-A',
    name: 'Federal Agricultural Mortgage Corp - Class A'
  },
  {
    symbol: 'AGM-P-C',
    name: 'Federal Agricultural Mortgage Corporation Preferred Series C Fixed to Fltg'
  },
  {
    symbol: 'AGM-P-D',
    name: 'Federal Agricultural Mortgage Corporation 5700 NonCumulative Preferred Stock Series D'
  },
  {
    symbol: 'AGM-P-E',
    name: ''
  },
  {
    symbol: 'AGM-P-F',
    name: 'Federal Agricultural Mortgage Corp'
  },
  {
    symbol: 'AGM-P-G',
    name: 'Federal Agricultural Mortgage Corp'
  },
  {
    symbol: 'AGMH',
    name: 'AGM Group Holdings Inc - Class A'
  },
  {
    symbol: 'AGNC',
    name: 'AGNC Investment Corp'
  },
  {
    symbol: 'AGNCM',
    name: 'AGNC Investment Corp FXDFR PRF PERPETUAL USD 25 Ser D 11000th int'
  },
  {
    symbol: 'AGNCN',
    name: 'AGNC Investment Corp Depositary Shares Each Representing a 11000th Interest in a Share of 700 Series C FixedToFloating Rate Cumulative Redeemable Preferre'
  },
  {
    symbol: 'AGNCO',
    name: 'AGNC Investment Corp'
  },
  {
    symbol: 'AGNCP',
    name: 'AGNC Investment Corp'
  },
  {
    symbol: 'AGO',
    name: 'Assured Guaranty Ltd'
  },
  {
    symbol: 'AGR',
    name: 'Avangrid Inc'
  },
  {
    symbol: 'AGRIW',
    name: 'AgriFORCE Growing Systems Ltd - Warrants (14/06/2026)'
  },
  {
    symbol: 'AGRO',
    name: 'Adecoagro S.A.'
  },
  {
    symbol: 'AGRX',
    name: 'Agile Therapeutics Inc'
  },
  {
    symbol: 'AGS',
    name: 'PlayAGS Inc'
  },
  {
    symbol: 'AGTC',
    name: 'Applied Genetic Technologies Corp'
  },
  {
    symbol: 'AGTI',
    name: 'Agiliti Inc'
  },
  {
    symbol: 'AGX',
    name: 'Argan Inc'
  },
  {
    symbol: 'AGYS',
    name: 'Agilysys Inc'
  },
  {
    symbol: 'AHCO',
    name: 'AdaptHealth Corp'
  },
  {
    symbol: 'AHG',
    name: 'Akso Health Group'
  },
  {
    symbol: 'AHH',
    name: 'Armada Hoffler Properties Inc'
  },
  {
    symbol: 'AHH-P-A',
    name: 'Armada Hoffler Properties Inc'
  },
  {
    symbol: 'AHI',
    name: 'Advanced Human Imaging Ltd'
  },
  {
    symbol: 'AHL-P-C',
    name: 'Aspen Insurance Holdings Limited 595 FixedtoFloating Rate Perpetual NonCumulative Preference Shares'
  },
  {
    symbol: 'AHL-P-D',
    name: 'Aspen Insurance Holdings Limited 5625 Perpetual NonCumulative Preference Shares'
  },
  {
    symbol: 'AHL-P-E',
    name: 'Aspen Insurance Hldgs'
  },
  {
    symbol: 'AHPA',
    name: 'Avista Public Acquisition Corp II - Class A'
  },
  {
    symbol: 'AHPAU',
    name: 'Avista Public Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'AHPAW',
    name: 'Avista Public Acquisition Corp II - Warrants (06/04/2026)'
  },
  {
    symbol: 'AHPI',
    name: 'Allied Healthcare Product Inc'
  },
  {
    symbol: 'AHRN',
    name: 'Ahren Acquisition Corp - Class A'
  },
  {
    symbol: 'AHRNU',
    name: 'Ahren Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'AHRNW',
    name: 'Ahren Acquisition Corp - Warrants (09/12/2026)'
  },
  {
    symbol: 'AHT',
    name: 'Ashford Hospitality Trust Inc'
  },
  {
    symbol: 'AHT-P-D',
    name: 'Ashford Hospitality Trust Inc'
  },
  {
    symbol: 'AHT-P-F',
    name: 'Ashford Hospitality Trust Inc'
  },
  {
    symbol: 'AHT-P-G',
    name: 'Ashford Hospitality Trust Inc'
  },
  {
    symbol: 'AHT-P-H',
    name: 'Ashford Hospitality Trust Inc'
  },
  {
    symbol: 'AHT-P-I',
    name: 'Ashford Hospitality Trust Inc'
  },
  {
    symbol: 'AI',
    name: 'C3.ai Inc - Class A'
  },
  {
    symbol: 'AIB',
    name: 'AIB Acquisition Corp - Class A'
  },
  {
    symbol: 'AIBBR',
    name: 'AIB Acquisition Corp'
  },
  {
    symbol: 'AIBBU',
    name: 'AIB Acquisition Corp - Units (1 Ord Share Class A & 1 Right)'
  },
  {
    symbol: 'AIC',
    name: 'Arlington Asset Investment Corp'
  },
  {
    symbol: 'AIG',
    name: 'American International Group Inc'
  },
  {
    symbol: 'AIG-P-A',
    name: 'American International Group Inc'
  },
  {
    symbol: 'AIH',
    name: 'Aesthetic Medical International Holdings Group Ltd'
  },
  {
    symbol: 'AIHS',
    name: 'Senmiao Technology Ltd'
  },
  {
    symbol: 'AIKI',
    name: 'AIkido Pharma Inc'
  },
  {
    symbol: 'AIM',
    name: 'AIM ImmunoTech Inc'
  },
  {
    symbol: 'AIMAU',
    name: 'Aimfinity Investment Corp I - Units (1 Ord Class A 1 Class 1 War & 1/2 Class 2 War)'
  },
  {
    symbol: 'AIMAW',
    name: 'Aimfinity Investment Corp I - Warrants - Class 1 (21/04/2027)'
  },
  {
    symbol: 'AIMBU',
    name: 'Aimfinity Investment Corp I - Units (1 Ord Cl A & 1/2 Wt Cl 2)'
  },
  {
    symbol: 'AIMC',
    name: 'Altra Industrial Motion Corp'
  },
  {
    symbol: 'AIN',
    name: 'Albany International Corp - Class A'
  },
  {
    symbol: 'AINC',
    name: 'Ashford Inc'
  },
  {
    symbol: 'AINV',
    name: 'Apollo Investment Corporation'
  },
  {
    symbol: 'AIO',
    name: 'Virtus Artificial Intelligence & Technology Opportunities Fund'
  },
  {
    symbol: 'AIP',
    name: 'Arteris Inc'
  },
  {
    symbol: 'AIR',
    name: 'AAR Corp'
  },
  {
    symbol: 'AIRC',
    name: 'Apartment Income REIT Corp - Class A'
  },
  {
    symbol: 'AIRG',
    name: 'Airgain Inc'
  },
  {
    symbol: 'AIRI',
    name: 'Air Industries Group'
  },
  {
    symbol: 'AIRS',
    name: 'Airsculpt Technologies Inc'
  },
  {
    symbol: 'AIRT',
    name: 'Air T Inc'
  },
  {
    symbol: 'AIRTP',
    name: 'Air T Inc'
  },
  {
    symbol: 'AIRTW',
    name: 'Air T Inc - Warrants (30/08/2021)'
  },
  {
    symbol: 'AIT',
    name: 'Applied Industrial Technologies Inc'
  },
  {
    symbol: 'AIU',
    name: 'Meta Data Ltd'
  },
  {
    symbol: 'AIV',
    name: 'Apartment Investment & Management Co. - Class A'
  },
  {
    symbol: 'AIZ',
    name: 'Assurant Inc'
  },
  {
    symbol: 'AIZN',
    name: 'Assurant Inc'
  },
  {
    symbol: 'AJAX-WS',
    name: 'Ajax I - Warrants (27/10/2025)'
  },
  {
    symbol: 'AJG',
    name: 'Arthur J. Gallagher & Company'
  },
  {
    symbol: 'AJRD',
    name: 'Aerojet Rocketdyne Holdings Inc'
  },
  {
    symbol: 'AJX',
    name: 'Great Ajax Corp'
  },
  {
    symbol: 'AJXA',
    name: 'Great Ajax Corp'
  },
  {
    symbol: 'AKA',
    name: 'a.k.a. Brands Holding Corp'
  },
  {
    symbol: 'AKAM',
    name: 'Akamai Technologies Inc'
  },
  {
    symbol: 'AKAN',
    name: 'Akanda Corp'
  },
  {
    symbol: 'AKBA',
    name: 'Akebia Therapeutics Inc'
  },
  {
    symbol: 'AKIC',
    name: 'Sports Ventures Acquisition Corp - Class A'
  },
  {
    symbol: 'AKICU',
    name: 'Sports Ventures Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'AKICW',
    name: 'Sports Ventures Acquisition Corp - Warrants (30/11/2027)'
  },
  {
    symbol: 'AKO-A',
    name: 'Embotelladora Andina S.A.'
  },
  {
    symbol: 'AKO-B',
    name: 'Embotelladora Andina S.A.'
  },
  {
    symbol: 'AKR',
    name: 'Acadia Realty Trust'
  },
  {
    symbol: 'AKRO',
    name: 'Akero Therapeutics Inc'
  },
  {
    symbol: 'AKTS',
    name: 'Akoustis Technologies Inc'
  },
  {
    symbol: 'AKTX',
    name: 'Akari Therapeutics Plc'
  },
  {
    symbol: 'AKU',
    name: 'Akumin Inc'
  },
  {
    symbol: 'AKUS',
    name: 'Akouos Inc'
  },
  {
    symbol: 'AKYA',
    name: 'Akoya Biosciences Inc'
  },
  {
    symbol: 'AL',
    name: 'Air Lease Corp - Class A'
  },
  {
    symbol: 'AL-P-A',
    name: 'Air Lease Corporation 6150 FixedtoFloating Rate NonCumulative Perpetual Preferred Stock Series A'
  },
  {
    symbol: 'ALAC',
    name: 'Alberton Acquisition Corp'
  },
  {
    symbol: 'ALACR',
    name: 'Alberton Acquisition Corp'
  },
  {
    symbol: 'ALACU',
    name: 'Alberton Acquisition Corp - Units (1 Ord 1 Warr & 1Rts)'
  },
  {
    symbol: 'ALACW',
    name: 'Alberton Acquisition Corp - Warrants (26/04/2025)'
  },
  {
    symbol: 'ALB',
    name: 'Albemarle Corp'
  },
  {
    symbol: 'ALBO',
    name: 'Albireo Pharma Inc'
  },
  {
    symbol: 'ALC',
    name: 'Alcon Inc'
  },
  {
    symbol: 'ALCC',
    name: 'AltC Acquisition Corp - Class A'
  },
  {
    symbol: 'ALCO',
    name: 'Alico Inc'
  },
  {
    symbol: 'ALDX',
    name: 'Aldeyra Therapeutics Inc'
  },
  {
    symbol: 'ALE',
    name: 'Allete Inc'
  },
  {
    symbol: 'ALEC',
    name: 'Alector Inc'
  },
  {
    symbol: 'ALEX',
    name: 'Alexander & Baldwin Inc'
  },
  {
    symbol: 'ALF',
    name: 'ALFI Inc'
  },
  {
    symbol: 'ALFIW',
    name: 'ALFI Inc - Warrants (01/03/2025)'
  },
  {
    symbol: 'ALG',
    name: 'Alamo Group Inc'
  },
  {
    symbol: 'ALGM',
    name: 'Allegro Microsystems Inc'
  },
  {
    symbol: 'ALGN',
    name: 'Align Technology Inc'
  },
  {
    symbol: 'ALGS',
    name: 'Aligos Therapeutics Inc'
  },
  {
    symbol: 'ALGT',
    name: 'Allegiant Travel'
  },
  {
    symbol: 'ALHC',
    name: 'Alignment Healthcare Inc'
  },
  {
    symbol: 'ALIM',
    name: 'Alimera Sciences Inc'
  },
  {
    symbol: 'ALIN-P-A',
    name: 'Altera Infrastructure L.P'
  },
  {
    symbol: 'ALIN-P-B',
    name: 'Altera Infrastructure L.P'
  },
  {
    symbol: 'ALIN-P-E',
    name: 'Altera Infrastructure L.P'
  },
  {
    symbol: 'ALIT',
    name: 'Alight Inc - Class A'
  },
  {
    symbol: 'ALIT-WS',
    name: 'Alight Inc Wt'
  },
  {
    symbol: 'ALJJ',
    name: 'Alj Regional Holdings Inc'
  },
  {
    symbol: 'ALK',
    name: 'Alaska Air Group Inc'
  },
  {
    symbol: 'ALKS',
    name: 'Alkermes plc'
  },
  {
    symbol: 'ALKT',
    name: 'Alkami Technology Inc'
  },
  {
    symbol: 'ALL',
    name: 'Allstate Corp (The)'
  },
  {
    symbol: 'ALL-P-A',
    name: 'Allstate Corporation The Dep Shs Repstg 11000th Perp Pfd Ser A'
  },
  {
    symbol: 'ALL-P-B',
    name: 'Allstate Corp (The)'
  },
  {
    symbol: 'ALL-P-G',
    name: 'Allstate Corp (The)'
  },
  {
    symbol: 'ALL-P-H',
    name: 'Allstate Corp (The)'
  },
  {
    symbol: 'ALL-P-I',
    name: 'Allstate Corp (The)'
  },
  {
    symbol: 'ALLE',
    name: 'Allegion plc'
  },
  {
    symbol: 'ALLG',
    name: 'Allego NV'
  },
  {
    symbol: 'ALLG-WS',
    name: 'Allego N.V. Warrants each exercisable for one Ordinary Share at an exercise price of 11.50 per share'
  },
  {
    symbol: 'ALLK',
    name: 'Allakos Inc'
  },
  {
    symbol: 'ALLO',
    name: 'Allogene Therapeutics Inc'
  },
  {
    symbol: 'ALLR',
    name: 'Allarity Therapeutics Inc'
  },
  {
    symbol: 'ALLT',
    name: 'Allot Ltd'
  },
  {
    symbol: 'ALLY',
    name: 'Ally Financial Inc'
  },
  {
    symbol: 'ALNA',
    name: 'Allena Pharmaceuticals Inc'
  },
  {
    symbol: 'ALNY',
    name: 'Alnylam Pharmaceuticals Inc'
  },
  {
    symbol: 'ALOR',
    name: 'ALSP Orchid Acquisition Corp I - Class A'
  },
  {
    symbol: 'ALORU',
    name: 'ALSP Orchid Acquisition Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ALORW',
    name: 'ALSP Orchid Acquisition Corp I - Warrants (30/11/2028)'
  },
  {
    symbol: 'ALOT',
    name: 'AstroNova Inc'
  },
  {
    symbol: 'ALP-P-Q',
    name: 'Alabama Power Company'
  },
  {
    symbol: 'ALPA',
    name: 'Alpha Healthcare Acquisition Corp III - Class A'
  },
  {
    symbol: 'ALPAU',
    name: 'Alpha Healthcare Acquisition Corp III - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'ALPAW',
    name: 'Alpha Healthcare Acquisition Corp III - Warrants (01/04/2026)'
  },
  {
    symbol: 'ALPN',
    name: 'Alpine Immune Sciences Inc'
  },
  {
    symbol: 'ALPP',
    name: 'Alpine 4 Holdings Inc - Class A'
  },
  {
    symbol: 'ALR',
    name: 'AlerisLife Inc'
  },
  {
    symbol: 'ALRM',
    name: 'Alarm.com Holdings Inc'
  },
  {
    symbol: 'ALRN',
    name: 'Aileron Therapeutics Inc'
  },
  {
    symbol: 'ALRS',
    name: 'Alerus Financial Corp'
  },
  {
    symbol: 'ALSA',
    name: 'Alpha Star Acquisition Corp'
  },
  {
    symbol: 'ALSAR',
    name: 'Alpha Star Acquisition Corp'
  },
  {
    symbol: 'ALSAU',
    name: 'Alpha Star Acquisition Corp - Units (1 1 Right 1 War)'
  },
  {
    symbol: 'ALSAW',
    name: 'Alpha Star Acquisition Corp - Warrants (13/12/2026)'
  },
  {
    symbol: 'ALSN',
    name: 'Allison Transmission Holdings Inc'
  },
  {
    symbol: 'ALT',
    name: 'Altimmune Inc'
  },
  {
    symbol: 'ALTG',
    name: 'Alta Equipment Group Inc - Class A'
  },
  {
    symbol: 'ALTG-P-A',
    name: 'Alta Equipment Group Inc'
  },
  {
    symbol: 'ALTO',
    name: 'Alto Ingredients Inc'
  },
  {
    symbol: 'ALTR',
    name: 'Altair Engineering Inc - Class A'
  },
  {
    symbol: 'ALTU',
    name: 'Altitude Acquisition Corp - Class A'
  },
  {
    symbol: 'ALTUU',
    name: 'Altitude Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'ALTUW',
    name: 'Altitude Acquisition Corp - Warrants (30/11/2027)'
  },
  {
    symbol: 'ALV',
    name: 'Autoliv Inc'
  },
  {
    symbol: 'ALVO',
    name: 'Alvotech'
  },
  {
    symbol: 'ALVOW',
    name: 'Alvotech - Warrants(15/06/2027)'
  },
  {
    symbol: 'ALVR',
    name: 'AlloVir Inc'
  },
  {
    symbol: 'ALX',
    name: 'Alexander`s Inc'
  },
  {
    symbol: 'ALXO',
    name: 'Alx Oncology Holdings Inc'
  },
  {
    symbol: 'ALYA',
    name: 'Alithya Group Inc - Class A - Class A (Sub Voting)'
  },
  {
    symbol: 'ALZN',
    name: 'Alzamend Neuro Inc'
  },
  {
    symbol: 'AM',
    name: 'Antero Midstream Corp'
  },
  {
    symbol: 'AMAL',
    name: 'Amalgamated Financial Corp'
  },
  {
    symbol: 'AMAM',
    name: 'Ambrx Biopharma Inc'
  },
  {
    symbol: 'AMAO',
    name: 'American Acquisition Opportunity Inc - Class A'
  },
  {
    symbol: 'AMAOU',
    name: 'American Acquisition Opportunity Inc - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'AMAOW',
    name: 'American Acquisition Opportunity Inc - Warrants (17/03/2026)'
  },
  {
    symbol: 'AMAT',
    name: 'Applied Materials Inc'
  },
  {
    symbol: 'AMBA',
    name: 'Ambarella Inc'
  },
  {
    symbol: 'AMBC',
    name: 'AMBAC Financial Group Inc'
  },
  {
    symbol: 'AMBC-WS',
    name: 'AMBAC Financial Group Inc - Warrants (30/04/2023)'
  },
  {
    symbol: 'AMBO',
    name: 'Ambow Education Holding Ltd'
  },
  {
    symbol: 'AMBP',
    name: 'Ardagh Metal Packaging S.A.'
  },
  {
    symbol: 'AMBP-WS',
    name: 'Ardagh Metal Packaging S.A. Warrants each exercisable for one Share at an exercise price of 11.50 per share'
  },
  {
    symbol: 'AMC',
    name: 'AMC Entertainment Holdings Inc - Class A'
  },
  {
    symbol: 'AMCI',
    name: 'AMCI Acquisition Corp II - Class A'
  },
  {
    symbol: 'AMCIU',
    name: 'AMCI Acquisition Corp II - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'AMCIW',
    name: 'AMCI Acquisition Corp II - Warrants (24/03/2026)'
  },
  {
    symbol: 'AMCR',
    name: 'Amcor Plc'
  },
  {
    symbol: 'AMCX',
    name: 'AMC Networks Inc - Class A'
  },
  {
    symbol: 'AMD',
    name: 'Advanced Micro Devices Inc'
  },
  {
    symbol: 'AME',
    name: 'Ametek Inc'
  },
  {
    symbol: 'AMED',
    name: 'Amedisys Inc'
  },
  {
    symbol: 'AMEH',
    name: 'Apollo Medical Holdings Inc'
  },
  {
    symbol: 'AMG',
    name: 'Affiliated Managers Group Inc'
  },
  {
    symbol: 'AMGN',
    name: 'AMGEN Inc'
  },
  {
    symbol: 'AMH',
    name: 'American Homes 4 Rent - Class A'
  },
  {
    symbol: 'AMH-P-G',
    name: 'American Homes 4 Rent Series G cumulative redeemable perpetual preferred shares of beneficial interest'
  },
  {
    symbol: 'AMH-P-H',
    name: 'American Homes 4 Rent Series H cumulative redeemable perpetual Preferred Shares of Beneficial Interest'
  },
  {
    symbol: 'AMK',
    name: 'Assetmark Financial Holdings Inc'
  },
  {
    symbol: 'AMKR',
    name: 'AMKOR Technology Inc'
  },
  {
    symbol: 'AMLX',
    name: 'Amylyx Pharmaceuticals Inc'
  },
  {
    symbol: 'AMN',
    name: 'AMN Healthcare Services Inc'
  },
  {
    symbol: 'AMNB',
    name: 'American National Bankshares Inc'
  },
  {
    symbol: 'AMND',
    name: 'UBS AG London Branch'
  },
  {
    symbol: 'AMOT',
    name: 'Allied Motion Technologies Inc'
  },
  {
    symbol: 'AMOV',
    name: 'America Movil S.A.B.DE C.V.'
  },
  {
    symbol: 'AMP',
    name: 'Ameriprise Financial Inc'
  },
  {
    symbol: 'AMPE',
    name: 'Ampio Pharmaceuticals Inc'
  },
  {
    symbol: 'AMPG',
    name: 'Amplitech Group Inc'
  },
  {
    symbol: 'AMPGW',
    name: 'Amplitech Group Inc - Warrants (01/01/2026)'
  },
  {
    symbol: 'AMPH',
    name: 'Amphastar Pharmaceuticals Inc'
  },
  {
    symbol: 'AMPI',
    name: 'Advanced Merger Partners Inc - Class A'
  },
  {
    symbol: 'AMPI-U',
    name: 'Advanced Merger Partners Inc - Units (1 Ord Share Class A & 1/6 War)'
  },
  {
    symbol: 'AMPI-WS',
    name: 'Advanced Merger Partners Inc - Warrants (01/01/9999)'
  },
  {
    symbol: 'AMPL',
    name: 'Amplitude Inc - Class A'
  },
  {
    symbol: 'AMPS',
    name: 'Altus Power Inc - Class A'
  },
  {
    symbol: 'AMPS-WS',
    name: 'Altus Power Inc - Warrants (09/12/2026)'
  },
  {
    symbol: 'AMPY',
    name: 'Amplify Energy Corp'
  },
  {
    symbol: 'AMR',
    name: 'Alpha Metallurgical Resources Inc'
  },
  {
    symbol: 'AMRC',
    name: 'Ameresco Inc - Class A'
  },
  {
    symbol: 'AMRK',
    name: 'A-Mark Precious Metals Inc'
  },
  {
    symbol: 'AMRN',
    name: 'Amarin Corp'
  },
  {
    symbol: 'AMRS',
    name: 'Amyris Inc'
  },
  {
    symbol: 'AMRX',
    name: 'Amneal Pharmaceuticals Inc - Class A'
  },
  {
    symbol: 'AMS',
    name: 'American Shared Hospital Services'
  },
  {
    symbol: 'AMSC',
    name: 'American Superconductor Corp'
  },
  {
    symbol: 'AMSF',
    name: 'Amerisafe Inc'
  },
  {
    symbol: 'AMST',
    name: 'Amesite Inc'
  },
  {
    symbol: 'AMSWA',
    name: 'American Software Inc - Class A'
  },
  {
    symbol: 'AMT',
    name: 'American Tower Corp'
  },
  {
    symbol: 'AMTB',
    name: 'Amerant Bancorp Inc - Class A'
  },
  {
    symbol: 'AMTD',
    name: 'AMTD IDEA Group'
  },
  {
    symbol: 'AMTI',
    name: 'Applied Molecular Transport Inc'
  },
  {
    symbol: 'AMTR',
    name: 'UBS AG London Branch'
  },
  {
    symbol: 'AMTX',
    name: 'Aemetis Inc'
  },
  {
    symbol: 'AMWD',
    name: 'American Woodmark Corp'
  },
  {
    symbol: 'AMWL',
    name: 'American Well Corporation - Class A'
  },
  {
    symbol: 'AMX',
    name: 'America Movil S.A.B.DE C.V.'
  },
  {
    symbol: 'AMYT',
    name: 'Amryt Pharma Plc'
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc'
  },
  {
    symbol: 'AN',
    name: 'Autonation Inc'
  },
  {
    symbol: 'ANAB',
    name: 'AnaptysBio Inc'
  },
  {
    symbol: 'ANAC',
    name: 'Arctos NorthStar Acquisition Corp - Class A'
  },
  {
    symbol: 'ANAC-U',
    name: 'Arctos NorthStar Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'ANAC-WS',
    name: 'Arctos NorthStar Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'ANAT',
    name: 'American National Group Inc'
  },
  {
    symbol: 'ANDE',
    name: 'Andersons Inc'
  },
  {
    symbol: 'ANEB',
    name: 'Anebulo Pharmaceuticals Inc'
  },
  {
    symbol: 'ANET',
    name: 'Arista Networks Inc'
  },
  {
    symbol: 'ANF',
    name: 'Abercrombie & Fitch Co. - Class A'
  },
  {
    symbol: 'ANGH',
    name: 'Anghami Inc'
  },
  {
    symbol: 'ANGHW',
    name: 'Anghami Inc - Warrants (28/01/2027)'
  },
  {
    symbol: 'ANGI',
    name: 'Angi Inc - Class A'
  },
  {
    symbol: 'ANGN',
    name: 'Angion Biomedica Corp'
  },
  {
    symbol: 'ANGO',
    name: 'Angiodynamic Inc'
  },
  {
    symbol: 'ANIK',
    name: 'Anika Therapeutics Inc'
  },
  {
    symbol: 'ANIP',
    name: 'ANI Pharmaceuticals Inc'
  },
  {
    symbol: 'ANIX',
    name: 'Anixa Biosciences Inc'
  },
  {
    symbol: 'ANNX',
    name: 'Annexon Inc'
  },
  {
    symbol: 'ANPC',
    name: 'AnPac Bio-Medical Science Co Ltd'
  },
  {
    symbol: 'ANSS',
    name: 'Ansys Inc'
  },
  {
    symbol: 'ANTE',
    name: 'AirNet Technology Inc'
  },
  {
    symbol: 'ANTX',
    name: 'AN2 Therapeutics Inc'
  },
  {
    symbol: 'ANVS',
    name: 'Annovis Bio Inc'
  },
  {
    symbol: 'ANY',
    name: 'Sphere 3D Corp'
  },
  {
    symbol: 'ANZU',
    name: 'Anzu Special Acquisition Corp I - Class A'
  },
  {
    symbol: 'ANZUU',
    name: 'Anzu Special Acquisition Corp I - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'ANZUW',
    name: 'Anzu Special Acquisition Corp I - Warrants (27/01/2026)'
  },
  {
    symbol: 'AOGO',
    name: 'Arogo Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'AOGOW',
    name: 'Arogo Capital Acquisition Corp - Warrants (23/12/2026)'
  },
  {
    symbol: 'AOMR',
    name: 'Angel Oak Mortgage Inc'
  },
  {
    symbol: 'AON',
    name: 'Aon plc. - Class A'
  },
  {
    symbol: 'AORT',
    name: 'Artivion Inc'
  },
  {
    symbol: 'AOS',
    name: 'A.O. Smith Corp'
  },
  {
    symbol: 'AOSL',
    name: 'Alpha & Omega Semiconductor Ltd'
  },
  {
    symbol: 'AOUT',
    name: 'American Outdoor Brands Inc'
  },
  {
    symbol: 'AOUTV',
    name: 'American Outdoor Brands Inc'
  },
  {
    symbol: 'AP',
    name: 'Ampco-Pittsburgh Corp'
  },
  {
    symbol: 'AP-WS',
    name: 'Ampco-Pittsburgh Corp - Warrants (01/08/2025)'
  },
  {
    symbol: 'APA',
    name: 'APA Corporation'
  },
  {
    symbol: 'APAC',
    name: 'StoneBridge Acquisition Corp - Class A'
  },
  {
    symbol: 'APACU',
    name: 'StoneBridge Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'APACW',
    name: 'StoneBridge Acquisition Corp - Warrants (11/04/2026)'
  },
  {
    symbol: 'APAM',
    name: 'Artisan Partners Asset Management Inc - Class A'
  },
  {
    symbol: 'APCA',
    name: 'AP Acquisition Corp - Class A'
  },
  {
    symbol: 'APCA-U',
    name: 'AP Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'APCA-WS',
    name: 'AP Acquisition Corp - Warrants (07/12/2026)'
  },
  {
    symbol: 'APCX',
    name: 'AppTech Payments Corp'
  },
  {
    symbol: 'APCXW',
    name: 'AppTech Payments Corp - Warrants (17/12/2026)'
  },
  {
    symbol: 'APD',
    name: 'Air Products & Chemicals Inc'
  },
  {
    symbol: 'APDN',
    name: 'Applied Dna Sciences Inc'
  },
  {
    symbol: 'APEI',
    name: 'American Public Education Inc'
  },
  {
    symbol: 'APEN',
    name: 'Apollo Endosurgery Inc'
  },
  {
    symbol: 'APG',
    name: 'APi Group Corporation'
  },
  {
    symbol: 'APGB',
    name: 'Apollo Strategic Growth Capital II - Class A'
  },
  {
    symbol: 'APGB-U',
    name: 'Apollo Strategic Growth Capital II - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'APGB-WS',
    name: 'Apollo Strategic Growth Capital II - Warrants (12/02/2028)'
  },
  {
    symbol: 'APH',
    name: 'Amphenol Corp - Class A'
  },
  {
    symbol: 'API',
    name: 'Agora Inc'
  },
  {
    symbol: 'APLD',
    name: 'Applied Blockchain Inc'
  },
  {
    symbol: 'APLE',
    name: 'Apple Hospitality REIT Inc'
  },
  {
    symbol: 'APLS',
    name: 'Apellis Pharmaceuticals Inc'
  },
  {
    symbol: 'APLT',
    name: 'Applied Therapeutics Inc'
  },
  {
    symbol: 'APM',
    name: 'Aptorum Group Ltd - Class A'
  },
  {
    symbol: 'APMI',
    name: 'AxonPrime Infrastructure Acquisition Corp - Class A'
  },
  {
    symbol: 'APMIU',
    name: 'AxonPrime Infrastructure Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'APMIW',
    name: 'AxonPrime Infrastructure Acquisition Corp - Warrants (31/05/2028)'
  },
  {
    symbol: 'APN',
    name: 'Apeiron Capital Investment Corp - Class A'
  },
  {
    symbol: 'APN-U',
    name: 'Apeiron Capital Investment Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'APN-WS',
    name: 'Apeiron Capital Investment Corp - Warrants(02/04/2026)'
  },
  {
    symbol: 'APO',
    name: 'Apollo Global Management Inc - Class A (New)'
  },
  {
    symbol: 'APOG',
    name: 'Apogee Enterprises Inc'
  },
  {
    symbol: 'APOP',
    name: ''
  },
  {
    symbol: 'APP',
    name: 'Applovin Corp - Class A'
  },
  {
    symbol: 'APPF',
    name: 'Appfolio Inc - Class A'
  },
  {
    symbol: 'APPH',
    name: 'AppHarvest Inc'
  },
  {
    symbol: 'APPHW',
    name: 'AppHarvest Inc - Warrants (30/06/2027)'
  },
  {
    symbol: 'APPN',
    name: 'Appian Corp - Class A'
  },
  {
    symbol: 'APPS',
    name: 'Digital Turbine Inc'
  },
  {
    symbol: 'APRE',
    name: 'Aprea Therapeutics Inc'
  },
  {
    symbol: 'APRN',
    name: 'Blue Apron Holdings Inc - Class A'
  },
  {
    symbol: 'APT',
    name: 'Alpha Pro Tech Ltd'
  },
  {
    symbol: 'APTM',
    name: 'Alpha Partners Technology Merger Corp - Class A'
  },
  {
    symbol: 'APTMU',
    name: 'Alpha Partners Technology Merger Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'APTMW',
    name: 'Alpha Partners Technology Merger Corp - Warrants (31/03/2028)'
  },
  {
    symbol: 'APTO',
    name: 'Aptose Biosciences Inc'
  },
  {
    symbol: 'APTV',
    name: 'Aptiv PLC'
  },
  {
    symbol: 'APTV-P-A',
    name: ''
  },
  {
    symbol: 'APTX',
    name: 'Aptinyx Inc'
  },
  {
    symbol: 'APVO',
    name: 'Aptevo Therapeutics Inc'
  },
  {
    symbol: 'APWC',
    name: 'Asia Pacific Wire & Cable'
  },
  {
    symbol: 'APXI',
    name: 'APx Acquisition Corp I - Class A'
  },
  {
    symbol: 'APXIU',
    name: 'APx Acquisition Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'APXIW',
    name: 'APx Acquisition Corp I - Warrants (30/11/2026)'
  },
  {
    symbol: 'APYX',
    name: 'Apyx Medical Corp'
  },
  {
    symbol: 'AQB',
    name: 'AquaBounty Technologies Inc'
  },
  {
    symbol: 'AQMS',
    name: 'Aqua Metals Inc'
  },
  {
    symbol: 'AQN',
    name: 'Algonquin Power & Utilities Corp'
  },
  {
    symbol: 'AQNA',
    name: 'Algonquin Power & Utilities Corp'
  },
  {
    symbol: 'AQNB',
    name: 'Algonquin Power & Utilities Corp'
  },
  {
    symbol: 'AQNU',
    name: 'Algonquin Power & Utilities Corp'
  },
  {
    symbol: 'AQST',
    name: 'Aquestive Therapeutics Inc'
  },
  {
    symbol: 'AQUA',
    name: 'Evoqua Water Technologies Corp'
  },
  {
    symbol: 'AR',
    name: 'Antero Resources Corp'
  },
  {
    symbol: 'ARAV',
    name: 'Aravive Inc'
  },
  {
    symbol: 'ARAY',
    name: 'Accuray Inc'
  },
  {
    symbol: 'ARBE',
    name: 'Arbe Robotics Ltd'
  },
  {
    symbol: 'ARBEW',
    name: 'Arbe Robotics Ltd - Warrants (07/10/2026)'
  },
  {
    symbol: 'ARBG',
    name: 'Aequi Acquisition Corp - Class A'
  },
  {
    symbol: 'ARBGU',
    name: 'Aequi Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'ARBGW',
    name: 'Aequi Acquisition Corp - Warrants(27/10/2025)'
  },
  {
    symbol: 'ARBK',
    name: 'Argo Blockchain Plc'
  },
  {
    symbol: 'ARBKL',
    name: 'Argo Blockchain Plc'
  },
  {
    symbol: 'ARC',
    name: 'ARC Document Solutions Inc'
  },
  {
    symbol: 'ARCB',
    name: 'ArcBest Corp'
  },
  {
    symbol: 'ARCC',
    name: 'Ares Capital Corp'
  },
  {
    symbol: 'ARCE',
    name: 'Arco Platform Ltd - Class A'
  },
  {
    symbol: 'ARCH',
    name: 'Arch Resources Inc - Class A'
  },
  {
    symbol: 'ARCK',
    name: 'Arbor Rapha Capital Bioholdings Corp I - Class A'
  },
  {
    symbol: 'ARCKU',
    name: 'Arbor Rapha Capital Bioholdings Corp I - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'ARCKW',
    name: 'Arbor Rapha Capital Bioholdings Corp I - Warrants (31/10/2028)'
  },
  {
    symbol: 'ARCO',
    name: 'Arcos Dorados Holdings Inc - Class A'
  },
  {
    symbol: 'ARCT',
    name: 'Arcturus Therapeutics Holdings Inc'
  },
  {
    symbol: 'ARDS',
    name: 'Aridis Pharmaceuticals Inc'
  },
  {
    symbol: 'ARDX',
    name: 'Ardelyx Inc'
  },
  {
    symbol: 'ARE',
    name: 'Alexandria Real Estate Equities Inc'
  },
  {
    symbol: 'AREB',
    name: 'American Rebel Holdings Inc'
  },
  {
    symbol: 'AREBW',
    name: 'American Rebel Holdings Inc - Warrants (21/01/2027)'
  },
  {
    symbol: 'AREC',
    name: 'American Resources Corporation - Class A'
  },
  {
    symbol: 'AREN',
    name: 'Arena Group Holdings Inc (The)'
  },
  {
    symbol: 'ARES',
    name: 'Ares Management Corp - Class A'
  },
  {
    symbol: 'ARGD',
    name: 'Argo Group US Inc'
  },
  {
    symbol: 'ARGO',
    name: 'Argo Group International Holdings Ltd'
  },
  {
    symbol: 'ARGO-P-A',
    name: 'Argo Group International Holdings Ltd'
  },
  {
    symbol: 'ARGU',
    name: 'Argus Capital Corp - Class A'
  },
  {
    symbol: 'ARGUU',
    name: 'Argus Capital Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'ARGUW',
    name: 'Argus Capital Corp - Warrants (31/08/2028)'
  },
  {
    symbol: 'ARGX',
    name: 'Argen X SE'
  },
  {
    symbol: 'ARHS',
    name: 'Arhaus Inc Class A'
  },
  {
    symbol: 'ARI',
    name: 'Apollo Commercial Real Estate Finance Inc'
  },
  {
    symbol: 'ARIS',
    name: 'Aris Water Solutions Inc - Class A'
  },
  {
    symbol: 'ARIZ',
    name: 'Arisz Acquisition Corp'
  },
  {
    symbol: 'ARIZR',
    name: 'Arisz Acquisition Corp'
  },
  {
    symbol: 'ARIZU',
    name: 'Arisz Acquisition Corp - Units (1 Ord Share & 1Right & 1 War)'
  },
  {
    symbol: 'ARIZW',
    name: 'Arisz Acquisition Corp - Warrants (16/11/2026)'
  },
  {
    symbol: 'ARKO',
    name: 'ARKO Corp - Class A'
  },
  {
    symbol: 'ARKR',
    name: 'Ark Restaurants Corp'
  },
  {
    symbol: 'ARL',
    name: 'American Realty Investors Inc'
  },
  {
    symbol: 'ARLO',
    name: 'Arlo Technologies Inc'
  },
  {
    symbol: 'ARLP',
    name: 'Alliance Resource Partners LP'
  },
  {
    symbol: 'ARMK',
    name: 'Aramark'
  },
  {
    symbol: 'ARMP',
    name: 'Armata Pharmaceuticals Inc'
  },
  {
    symbol: 'ARNC',
    name: 'Arconic Corporation'
  },
  {
    symbol: 'AROC',
    name: 'Archrock Inc'
  },
  {
    symbol: 'AROW',
    name: 'Arrow Financial Corp'
  },
  {
    symbol: 'ARQQ',
    name: 'Arqit Quantum Inc'
  },
  {
    symbol: 'ARQQW',
    name: 'Arqit Quantum Inc - Warrants (02/11/2026)'
  },
  {
    symbol: 'ARQT',
    name: 'Arcutis Biotherapeutics Inc'
  },
  {
    symbol: 'ARR',
    name: 'ARMOUR Residential REIT Inc'
  },
  {
    symbol: 'ARR-P-B',
    name: 'ARMOUR Residential REIT Inc Preferred Series B'
  },
  {
    symbol: 'ARR-P-C',
    name: 'ARMOUR Residential REIT Inc'
  },
  {
    symbol: 'ARRW',
    name: 'Arrowroot Acquisition Corp - Class A'
  },
  {
    symbol: 'ARRWU',
    name: 'Arrowroot Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'ARRWW',
    name: 'Arrowroot Acquisition Corp - Warrants (02/03/2026)'
  },
  {
    symbol: 'ARRY',
    name: 'Array Technologies Inc'
  },
  {
    symbol: 'ARTE',
    name: 'Artemis Strategic Investment Corp - Class A'
  },
  {
    symbol: 'ARTEU',
    name: 'Artemis Strategic Investment Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'ARTEW',
    name: 'Artemis Strategic Investment Corp - Warrants (30/09/2026)'
  },
  {
    symbol: 'ARTL',
    name: 'Artelo Biosciences Inc'
  },
  {
    symbol: 'ARTLW',
    name: 'Artelo Biosciences Inc - Warrants (18/06/2024)'
  },
  {
    symbol: 'ARTNA',
    name: 'Artesian Resources Corp - Class A'
  },
  {
    symbol: 'ARTW',
    name: 'Art`s-way Manufacturing Co. Inc'
  },
  {
    symbol: 'ARVL',
    name: 'Arrival'
  },
  {
    symbol: 'ARVN',
    name: 'Arvinas Inc'
  },
  {
    symbol: 'ARW',
    name: 'Arrow Electronics Inc'
  },
  {
    symbol: 'ARWR',
    name: 'Arrowhead Pharmaceuticals Inc'
  },
  {
    symbol: 'ARYAW',
    name: 'Arya Sciences Acquisition Corp Warrants 10102025'
  },
  {
    symbol: 'ARYD',
    name: 'Arya Sciences Acquisition Corp IV - Class A'
  },
  {
    symbol: 'ARYE',
    name: 'ARYA Sciences Acquisition Corp V - Class A'
  },
  {
    symbol: 'ASAI',
    name: 'Sendas Distribuidora S.A.'
  },
  {
    symbol: 'ASAI-W',
    name: 'Sendas Distribuidora S.A. American Depositary Share each representing one When Issued'
  },
  {
    symbol: 'ASAN',
    name: 'Asana Inc - Class A'
  },
  {
    symbol: 'ASAQ',
    name: 'Atlantic Avenue Acquisition Corp - Class A'
  },
  {
    symbol: 'ASAQ-U',
    name: 'Atlantic Avenue Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'ASAQ-WS',
    name: 'Atlantic Avenue Acquisition Corp - Warrants(01/01/9999)'
  },
  {
    symbol: 'ASAX',
    name: 'Astrea Acquisition Corp - Class A'
  },
  {
    symbol: 'ASAXU',
    name: 'Astrea Acquisition Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'ASAXW',
    name: 'Astrea Acquisition Corp - Warrants (28/01/2028)'
  },
  {
    symbol: 'ASB',
    name: 'Associated Banc-Corp'
  },
  {
    symbol: 'ASB-P-E',
    name: 'Associated Banc-Corp'
  },
  {
    symbol: 'ASB-P-F',
    name: 'Associated Banc-Corp'
  },
  {
    symbol: 'ASC',
    name: 'Ardmore Shipping Corp'
  },
  {
    symbol: 'ASCA',
    name: 'ASPAC I Acquisition Corp - Class A'
  },
  {
    symbol: 'ASCAR',
    name: 'ASPAC I Acquisition Corp'
  },
  {
    symbol: 'ASCAU',
    name: 'ASPAC I Acquisition Corp - Units (1 Ord Share Class A 3/4 War & 1 Rts)'
  },
  {
    symbol: 'ASCAW',
    name: 'ASPAC I Acquisition Corp - Warrants (09/12/2026)'
  },
  {
    symbol: 'ASCB',
    name: 'A SPAC II Acquisition Corp - Class A'
  },
  {
    symbol: 'ASCBR',
    name: 'A SPAC II Acquisition Corp'
  },
  {
    symbol: 'ASCBU',
    name: 'A SPAC II Acquisition Corp - Units (1 Ord Class A 1/2 War & 1 Right)'
  },
  {
    symbol: 'ASCBW',
    name: 'A SPAC II Acquisition Corp - Warrants (15/10/2026)'
  },
  {
    symbol: 'ASGI',
    name: 'abrdn Global Infrastructure Income Fund'
  },
  {
    symbol: 'ASGN',
    name: 'ASGN Inc'
  },
  {
    symbol: 'ASH',
    name: 'Ashland Global Holdings Inc'
  },
  {
    symbol: 'ASIX',
    name: 'AdvanSix Inc'
  },
  {
    symbol: 'ASLE',
    name: 'AerSale Corp'
  },
  {
    symbol: 'ASLN',
    name: 'ASLAN Pharmaceuticals Ltd'
  },
  {
    symbol: 'ASM',
    name: 'Avino Silver & Gold Mines Ltd'
  },
  {
    symbol: 'ASMB',
    name: 'Assembly Biosciences Inc'
  },
  {
    symbol: 'ASML',
    name: 'ASML Holding NV'
  },
  {
    symbol: 'ASND',
    name: 'Ascendis Pharma A/S'
  },
  {
    symbol: 'ASNS',
    name: 'Actelis Networks Inc'
  },
  {
    symbol: 'ASO',
    name: 'Academy Sports and Outdoors Inc'
  },
  {
    symbol: 'ASPA',
    name: 'Abri SPAC I Inc'
  },
  {
    symbol: 'ASPAU',
    name: 'Abri SPAC I Inc - Units (1 Ord & 1 War)'
  },
  {
    symbol: 'ASPAW',
    name: 'Abri SPAC I Inc - Warrants (18/09/2026)'
  },
  {
    symbol: 'ASPC',
    name: 'Alpha Capital Acquisition Co - Class A'
  },
  {
    symbol: 'ASPCU',
    name: 'Alpha Capital Acquisition Co - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ASPCW',
    name: 'Alpha Capital Acquisition Co - Warrants (16/02/2026)'
  },
  {
    symbol: 'ASPN',
    name: 'Aspen Aerogels Inc'
  },
  {
    symbol: 'ASPS',
    name: 'Altisource Portfolio Solutions S.A.'
  },
  {
    symbol: 'ASPU',
    name: 'Aspen Group Inc'
  },
  {
    symbol: 'ASR',
    name: 'Grupo Aeroportuario Del Sureste S.A.'
  },
  {
    symbol: 'ASRT',
    name: 'Assertio Holdings Inc'
  },
  {
    symbol: 'ASRV',
    name: 'Ameriserv Financial Inc'
  },
  {
    symbol: 'ASRVP',
    name: 'AmeriServ Financial Inc AmeriServ Financial Trust I'
  },
  {
    symbol: 'ASTC',
    name: 'Astrotech Corp'
  },
  {
    symbol: 'ASTE',
    name: 'Astec Industries Inc'
  },
  {
    symbol: 'ASTL',
    name: 'Algoma Steel Group Inc'
  },
  {
    symbol: 'ASTLW',
    name: 'Algoma Steel Group Inc - Warrants (19/10/2026)'
  },
  {
    symbol: 'ASTR',
    name: 'Astra Space Inc - Class A'
  },
  {
    symbol: 'ASTS',
    name: 'AST SpaceMobile Inc - Class A'
  },
  {
    symbol: 'ASTSW',
    name: 'AST SpaceMobile Inc - Warrants (06/04/2026)'
  },
  {
    symbol: 'ASUR',
    name: 'Asure Software Inc'
  },
  {
    symbol: 'ASX',
    name: 'ASE Technology Holding Co.Ltd'
  },
  {
    symbol: 'ASXC',
    name: 'Asensus Surgical Inc'
  },
  {
    symbol: 'ASYS',
    name: 'Amtech Systems Inc'
  },
  {
    symbol: 'ASZ',
    name: 'Austerlitz Acquisition Corp II - Class A'
  },
  {
    symbol: 'ASZ-U',
    name: 'Austerlitz Acquisition Corp II - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'ASZ-WS',
    name: 'Austerlitz Acquisition Corp II - Warrants (01/01/9999)'
  },
  {
    symbol: 'ATA',
    name: 'Americas Technology Acquisition Corp'
  },
  {
    symbol: 'ATA-U',
    name: 'Americas Technology Acquisition Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'ATA-WS',
    name: 'Americas Technology Acquisition Corp - Warrants (31/12/2027)'
  },
  {
    symbol: 'ATAC-WS',
    name: 'Altimar Acquisition Corporation Redeemable Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'ATAI',
    name: 'ATAI Life Sciences N.V.'
  },
  {
    symbol: 'ATAK',
    name: 'Aurora Technology Acquisition Corp - Class A'
  },
  {
    symbol: 'ATAKR',
    name: 'Aurora Technology Acquisition Corp'
  },
  {
    symbol: 'ATAKU',
    name: 'Aurora Technology Acquisition Corp - Units (1 Ord Class A 1 War & 1 Rights)'
  },
  {
    symbol: 'ATAKW',
    name: 'Aurora Technology Acquisition Corp - Warrants (27/01/2027)'
  },
  {
    symbol: 'ATAQ',
    name: 'Altimar Acquisition Corp III - Class A'
  },
  {
    symbol: 'ATAQ-U',
    name: 'Altimar Acquisition Corp III - Units (1 Ord Class A & 1/4 War)'
  },
  {
    symbol: 'ATAQ-WS',
    name: 'Altimar Acquisition Corp III Warrants each whole warrant exercisable for one Class A Ordinary Share at an exercise price of 11.50 per share'
  },
  {
    symbol: 'ATAX',
    name: 'America First Multifamily Investors LP'
  },
  {
    symbol: 'ATC',
    name: 'Atotech Ltd'
  },
  {
    symbol: 'ATCO',
    name: 'Atlas Corp'
  },
  {
    symbol: 'ATCO-P-D',
    name: 'Atlas Corp'
  },
  {
    symbol: 'ATCO-P-E',
    name: 'Atlas Corp'
  },
  {
    symbol: 'ATCO-P-G',
    name: 'Atlas Corp'
  },
  {
    symbol: 'ATCO-P-H',
    name: 'Atlas Corp'
  },
  {
    symbol: 'ATCO-P-I',
    name: 'Atlas Corp'
  },
  {
    symbol: 'ATCOL',
    name: 'Atlas Corp'
  },
  {
    symbol: 'ATCX',
    name: 'Atlas Technical Consultants Inc - Class A'
  },
  {
    symbol: 'ATEC',
    name: 'Alphatec Holdings Inc'
  },
  {
    symbol: 'ATEK',
    name: 'Athena Technology Acquisition Corp II - Class A'
  },
  {
    symbol: 'ATEK-U',
    name: 'Athena Technology Acquisition Corp II - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'ATEK-WS',
    name: 'Athena Technology Acquisition Corp II - Warrants (01/01/9999)'
  },
  {
    symbol: 'ATEN',
    name: 'A10 Networks Inc'
  },
  {
    symbol: 'ATER',
    name: 'Aterian Inc'
  },
  {
    symbol: 'ATEST-A',
    name: 'ATEST.A'
  },
  {
    symbol: 'ATEST-B',
    name: 'ATEST.B'
  },
  {
    symbol: 'ATEST-C',
    name: 'ATESTC'
  },
  {
    symbol: 'ATEST-G',
    name: 'ATESTG'
  },
  {
    symbol: 'ATEST-H',
    name: 'ATEST.H'
  },
  {
    symbol: 'ATEST-L',
    name: 'ATEST.L'
  },
  {
    symbol: 'ATEX',
    name: 'Anterix Inc'
  },
  {
    symbol: 'ATGE',
    name: 'Adtalem Global Education Inc'
  },
  {
    symbol: 'ATH-P-A',
    name: 'Athene Holding LTD'
  },
  {
    symbol: 'ATH-P-C',
    name: 'Athene Holding Ltd'
  },
  {
    symbol: 'ATH-P-D',
    name: 'Athene Holding Ltd'
  },
  {
    symbol: 'ATHA',
    name: 'Athira Pharma Inc'
  },
  {
    symbol: 'ATHE',
    name: 'Alterity Therapeutics Ltd'
  },
  {
    symbol: 'ATHM',
    name: 'Autohome Inc'
  },
  {
    symbol: 'ATHN-WS',
    name: 'Athena Technology Acquisition Corp Redeemable Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50'
  },
  {
    symbol: 'ATHX',
    name: 'Athersys Inc'
  },
  {
    symbol: 'ATI',
    name: 'Allegheny Technologies Inc'
  },
  {
    symbol: 'ATIF',
    name: 'ATIF Holdings Ltd'
  },
  {
    symbol: 'ATIP',
    name: 'ATI Physical Therapy Inc - Class A'
  },
  {
    symbol: 'ATIP-WS',
    name: 'ATI Physical Therapy Inc - Warrants (10/08/2027)'
  },
  {
    symbol: 'ATISW',
    name: 'Attis Industries Inc Warrants'
  },
  {
    symbol: 'ATKR',
    name: 'Atkore Inc'
  },
  {
    symbol: 'ATLC',
    name: 'Atlanticus Holdings Corp'
  },
  {
    symbol: 'ATLCL',
    name: 'Atlanticus Holdings Corp'
  },
  {
    symbol: 'ATLCP',
    name: 'Atlanticus Holdings Corp'
  },
  {
    symbol: 'ATLO',
    name: 'Ames National Corp'
  },
  {
    symbol: 'ATNF',
    name: '180 Life Sciences Corp'
  },
  {
    symbol: 'ATNFW',
    name: '180 Life Sciences Corp - Warrants (07/11/2025)'
  },
  {
    symbol: 'ATNI',
    name: 'ATN International Inc'
  },
  {
    symbol: 'ATNM',
    name: 'Actinium Pharmaceuticals Inc'
  },
  {
    symbol: 'ATNX',
    name: 'Athenex Inc'
  },
  {
    symbol: 'ATO',
    name: 'Atmos Energy Corp'
  },
  {
    symbol: 'ATOM',
    name: 'Atomera Inc'
  },
  {
    symbol: 'ATOS',
    name: 'Atossa Therapeutics Inc'
  },
  {
    symbol: 'ATR',
    name: 'Aptargroup Inc'
  },
  {
    symbol: 'ATRA',
    name: 'Atara Biotherapeutics Inc'
  },
  {
    symbol: 'ATRC',
    name: 'Atricure Inc'
  },
  {
    symbol: 'ATRI',
    name: 'Atrion Corp'
  },
  {
    symbol: 'ATRO',
    name: 'Astronics Corp'
  },
  {
    symbol: 'ATRS',
    name: 'Antares Pharma Inc'
  },
  {
    symbol: 'ATSG',
    name: 'Air Transport Services Group Inc'
  },
  {
    symbol: 'ATTO',
    name: 'Atento S.A.'
  },
  {
    symbol: 'ATUS',
    name: 'Altice USA Inc - Class A'
  },
  {
    symbol: 'ATVC',
    name: 'Tribe Capital Growth Corp I - Class A'
  },
  {
    symbol: 'ATVCU',
    name: 'Tribe Capital Growth Corp I - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'ATVCW',
    name: 'Tribe Capital Growth Corp I - Warrants (24/02/2026)'
  },
  {
    symbol: 'ATVI',
    name: 'Activision Blizzard Inc'
  },
  {
    symbol: 'ATXI',
    name: 'Avenue Therapeutics Inc'
  },
  {
    symbol: 'ATXS',
    name: 'Astria Therapeutics Inc'
  },
  {
    symbol: 'ATY',
    name: 'AcuityAds Holdings Inc'
  },
  {
    symbol: 'AU',
    name: 'AngloGold Ashanti Ltd'
  },
  {
    symbol: 'AUB',
    name: 'Atlantic Union Bankshares Corp'
  },
  {
    symbol: 'AUBAP',
    name: 'Atlantic Union Bankshares Corp'
  },
  {
    symbol: 'AUBN',
    name: 'Auburn National Bancorp Inc'
  },
  {
    symbol: 'AUD',
    name: 'Audacy Inc - Class A'
  },
  {
    symbol: 'AUDC',
    name: 'Audiocodes'
  },
  {
    symbol: 'AUGX',
    name: 'Augmedix Inc'
  },
  {
    symbol: 'AUID',
    name: 'Ipsidy Inc'
  },
  {
    symbol: 'AUMN',
    name: 'Golden Minerals Company'
  },
  {
    symbol: 'AUPH',
    name: 'Aurinia Pharmaceuticals Inc'
  },
  {
    symbol: 'AUR',
    name: 'Aurora Innovation Inc - Class A'
  },
  {
    symbol: 'AURA',
    name: 'Aura Biosciences Inc'
  },
  {
    symbol: 'AURC',
    name: 'Aurora Acquisition Corp - Class A'
  },
  {
    symbol: 'AURCU',
    name: 'Aurora Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'AURCW',
    name: 'Aurora Acquisition Corp - Warrants (02/03/2026)'
  },
  {
    symbol: 'AUROW',
    name: 'Aurora Innovation Inc - Warrants (03/11/2026)'
  },
  {
    symbol: 'AUS',
    name: 'Austerlitz Acquisition Corp I - Class A'
  },
  {
    symbol: 'AUS-U',
    name: 'Austerlitz Acquisition Corp I - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'AUS-WS',
    name: 'Austerlitz Acquisition Corp I - Warrants (01/01/9999)'
  },
  {
    symbol: 'AUST',
    name: 'Austin Gold Corp'
  },
  {
    symbol: 'AUTL',
    name: 'Autolus Therapeutics plc'
  },
  {
    symbol: 'AUTO',
    name: 'AutoWeb Inc'
  },
  {
    symbol: 'AUUD',
    name: 'Auddia Inc'
  },
  {
    symbol: 'AUUDW',
    name: 'Auddia Inc - Warrants - Series A (17/10/2025)'
  },
  {
    symbol: 'AUVI',
    name: 'Applied UV Inc'
  },
  {
    symbol: 'AUVIP',
    name: 'Applied UV Inc'
  },
  {
    symbol: 'AUY',
    name: 'Yamana Gold Inc'
  },
  {
    symbol: 'AVA',
    name: 'Avista Corp'
  },
  {
    symbol: 'AVAC',
    name: 'Avalon Acquisition Inc - Class A'
  },
  {
    symbol: 'AVACU',
    name: 'Avalon Acquisition Inc - Units (1 Ord Share Class A & 3/4 War)'
  },
  {
    symbol: 'AVACW',
    name: 'Avalon Acquisition Inc - Warrants (18/03/2026)'
  },
  {
    symbol: 'AVAH',
    name: 'Aveanna Healthcare Holdings Inc'
  },
  {
    symbol: 'AVAL',
    name: 'Grupo Aval Acciones y Valores S.A.'
  },
  {
    symbol: 'AVAN',
    name: 'Avanti Acquisition Corp - Class A'
  },
  {
    symbol: 'AVAN-U',
    name: 'Avanti Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'AVAN-WS',
    name: 'Avanti Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'AVAV',
    name: 'AeroVironment Inc'
  },
  {
    symbol: 'AVB',
    name: 'Avalonbay Communities Inc'
  },
  {
    symbol: 'AVCO',
    name: 'Avalon GloboCare Corp'
  },
  {
    symbol: 'AVCT',
    name: 'American Virtual Cloud Technologies Inc'
  },
  {
    symbol: 'AVCTW',
    name: 'American Virtual Cloud Technologies Inc - Warrants(07/04/2025)'
  },
  {
    symbol: 'AVD',
    name: 'American Vanguard Corp'
  },
  {
    symbol: 'AVDL',
    name: 'Avadel Pharmaceuticals plc'
  },
  {
    symbol: 'AVDX',
    name: 'AvidXchange Holdings Inc'
  },
  {
    symbol: 'AVEO',
    name: 'AVEO Pharmaceuticals Inc'
  },
  {
    symbol: 'AVGO',
    name: 'Broadcom Inc'
  },
  {
    symbol: 'AVGOP',
    name: 'Broadcom Inc'
  },
  {
    symbol: 'AVGR',
    name: 'Avinger Inc'
  },
  {
    symbol: 'AVHI',
    name: 'Achari Ventures Holdings Corp I'
  },
  {
    symbol: 'AVHIU',
    name: 'Achari Ventures Holdings Corp I - Units (1 Ord Share & 1 War)'
  },
  {
    symbol: 'AVHIW',
    name: 'Achari Ventures Holdings Corp I - Warrants (01/01/2026)'
  },
  {
    symbol: 'AVID',
    name: 'Avid Technology Inc'
  },
  {
    symbol: 'AVIR',
    name: 'Atea Pharmaceuticals Inc'
  },
  {
    symbol: 'AVLR',
    name: 'Avalara Inc'
  },
  {
    symbol: 'AVNS',
    name: 'Avanos Medical Inc'
  },
  {
    symbol: 'AVNT',
    name: 'Avient Corp'
  },
  {
    symbol: 'AVNW',
    name: 'Aviat Networks Inc'
  },
  {
    symbol: 'AVO',
    name: 'Mission Produce Inc'
  },
  {
    symbol: 'AVPT',
    name: 'AvePoint Inc - Class A'
  },
  {
    symbol: 'AVPTW',
    name: 'AvePoint Inc - Warrants (18/09/2026)'
  },
  {
    symbol: 'AVRO',
    name: 'AvroBio Inc'
  },
  {
    symbol: 'AVT',
    name: 'Avnet Inc'
  },
  {
    symbol: 'AVTE',
    name: 'Aerovate Therapeutics Inc'
  },
  {
    symbol: 'AVTR',
    name: 'Avantor Inc'
  },
  {
    symbol: 'AVTX',
    name: 'Avalo Therapeutics Inc'
  },
  {
    symbol: 'AVXL',
    name: 'Anavex Life Sciences Corporation'
  },
  {
    symbol: 'AVY',
    name: 'Avery Dennison Corp'
  },
  {
    symbol: 'AVYA',
    name: 'Avaya Holdings Corp'
  },
  {
    symbol: 'AWH',
    name: 'Aspira Women`s Health Inc'
  },
  {
    symbol: 'AWI',
    name: 'Armstrong World Industries Inc'
  },
  {
    symbol: 'AWK',
    name: 'American Water Works Co. Inc'
  },
  {
    symbol: 'AWR',
    name: 'American States Water Company'
  },
  {
    symbol: 'AWRE',
    name: 'Aware Inc'
  },
  {
    symbol: 'AWX',
    name: 'Avalon Holdings Corp - Class A'
  },
  {
    symbol: 'AX',
    name: 'Axos Financial Inc'
  },
  {
    symbol: 'AXAC',
    name: 'AXIOS Sustainable Growth Acquisition Corp - Class A'
  },
  {
    symbol: 'AXAC-R',
    name: 'AXIOS Sustainable Growth Acquisition Corporation Rights to receive onetenth 110 of one Class A ordinary share'
  },
  {
    symbol: 'AXAC-WS',
    name: 'AXIOS Sustainable Growth Acquisition Corp - Warrants(01/01/9999)'
  },
  {
    symbol: 'AXDX',
    name: 'Accelerate Diagnostics Inc'
  },
  {
    symbol: 'AXGN',
    name: 'Axogen Inc'
  },
  {
    symbol: 'AXH',
    name: 'Industrial Human Capital Inc'
  },
  {
    symbol: 'AXH-U',
    name: 'Industrial Human Capital Inc - Units (1 Ord Share & 1 War)'
  },
  {
    symbol: 'AXH-WS',
    name: 'Industrial Human Capital Inc - Warrants (27/11/2026)'
  },
  {
    symbol: 'AXL',
    name: 'American Axle & Manufacturing Holdings Inc'
  },
  {
    symbol: 'AXLA',
    name: 'Axcella Health Inc'
  },
  {
    symbol: 'AXNX',
    name: 'Axonics Inc'
  },
  {
    symbol: 'AXON',
    name: 'Axon Enterprise Inc'
  },
  {
    symbol: 'AXP',
    name: 'American Express Company'
  },
  {
    symbol: 'AXR',
    name: 'AMREP Corp'
  },
  {
    symbol: 'AXS',
    name: 'Axis Capital Holdings Ltd'
  },
  {
    symbol: 'AXS-P-D',
    name: 'Axis Capital Holdings Limited Preferred Series D Bermuda'
  },
  {
    symbol: 'AXS-P-E',
    name: 'Axis Capital Holdings Limited Depositary Shares Series E'
  },
  {
    symbol: 'AXSM',
    name: 'Axsome Therapeutics Inc'
  },
  {
    symbol: 'AXTA',
    name: 'Axalta Coating Systems Ltd'
  },
  {
    symbol: 'AXTI',
    name: 'AXT Inc'
  },
  {
    symbol: 'AXU',
    name: 'Alexco Resource Corp'
  },
  {
    symbol: 'AY',
    name: 'Atlantica Sustainable Infrastructure Plc'
  },
  {
    symbol: 'AYI',
    name: 'Acuity Brands Inc'
  },
  {
    symbol: 'AYLA',
    name: 'Ayala Pharmaceuticals Inc'
  },
  {
    symbol: 'AYRO',
    name: 'AYRO Inc'
  },
  {
    symbol: 'AYTU',
    name: 'Aytu BioPharma Inc'
  },
  {
    symbol: 'AYX',
    name: 'Alteryx Inc - Class A'
  },
  {
    symbol: 'AZ',
    name: 'A2Z Smart Technologies Corp'
  },
  {
    symbol: 'AZEK',
    name: 'AZEK Company Inc - Class A'
  },
  {
    symbol: 'AZN',
    name: 'Astrazeneca plc'
  },
  {
    symbol: 'AZO',
    name: 'Autozone Inc'
  },
  {
    symbol: 'AZPN',
    name: 'Aspen Technology Inc'
  },
  {
    symbol: 'AZRE',
    name: 'Azure Power Global Ltd'
  },
  {
    symbol: 'AZTA',
    name: 'Azenta Inc'
  },
  {
    symbol: 'AZUL',
    name: 'Azul S.A.'
  },
  {
    symbol: 'AZYO',
    name: 'Aziyo Biologics Inc - Class A'
  },
  {
    symbol: 'AZZ',
    name: 'AZZ Inc'
  },
  {
    symbol: 'B',
    name: 'Barnes Group Inc'
  },
  {
    symbol: 'BA',
    name: 'Boeing Company'
  },
  {
    symbol: 'BABA',
    name: 'Alibaba Group Holding Ltd'
  },
  {
    symbol: 'BAC',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BAC-P-B',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BAC-P-E',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BAC-P-K',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BAC-P-L',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BAC-P-M',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BAC-P-N',
    name: 'Bank Of America Corp. PRF PERPETUAL USD Ser LL DpSh11000th'
  },
  {
    symbol: 'BAC-P-O',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BAC-P-P',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BAC-P-Q',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BAC-P-S',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BAC-P-Y',
    name: 'Bank of America Corporation Depositary Shares Series Y'
  },
  {
    symbol: 'BAC-P-Y-CL',
    name: ''
  },
  {
    symbol: 'BACA',
    name: 'Berenson Acquisition Corp I - Class A'
  },
  {
    symbol: 'BACA-U',
    name: 'Berenson Acquisition Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'BACA-WS',
    name: 'Berenson Acquisition Corp I - Warrants (01/08/2026)'
  },
  {
    symbol: 'BAFN',
    name: 'BayFirst Financial Corp'
  },
  {
    symbol: 'BAH',
    name: 'Booz Allen Hamilton Holding Corp - Class A'
  },
  {
    symbol: 'BAK',
    name: 'Braskem S.A.'
  },
  {
    symbol: 'BALL',
    name: 'Ball Corp'
  },
  {
    symbol: 'BALY',
    name: 'Ballys Corporation'
  },
  {
    symbol: 'BAM',
    name: 'Brookfield Asset Management Inc - Class A'
  },
  {
    symbol: 'BAMH',
    name: 'Brookfield Finance Inc'
  },
  {
    symbol: 'BAMI',
    name: 'Brookfield Finance I (UK) plc'
  },
  {
    symbol: 'BAMR',
    name: 'Brookfield Asset Management Reinsurance Partners Ltd (Exchangeable Shares Sub Voting) - Class A'
  },
  {
    symbol: 'BANC',
    name: 'Banc of California Inc'
  },
  {
    symbol: 'BAND',
    name: 'Bandwidth Inc - Class A'
  },
  {
    symbol: 'BANF',
    name: 'Bancfirst Corp'
  },
  {
    symbol: 'BANFP',
    name: 'BancFirst Corporation 72 Cumulative Trust Preferred Securities'
  },
  {
    symbol: 'BANR',
    name: 'Banner Corp'
  },
  {
    symbol: 'BANX',
    name: 'ArrowMark Financial Corp'
  },
  {
    symbol: 'BAOS',
    name: 'Baosheng Media Group Holdings Ltd'
  },
  {
    symbol: 'BAP',
    name: 'Credicorp Ltd'
  },
  {
    symbol: 'BARK',
    name: 'BARK Inc - Class A'
  },
  {
    symbol: 'BARK-WS',
    name: 'BARK Inc - Warrants (01/05/2026)'
  },
  {
    symbol: 'BASE',
    name: 'Couchbase Inc'
  },
  {
    symbol: 'BATL',
    name: 'Battalion Oil Corp (New)'
  },
  {
    symbol: 'BATRA',
    name: 'Liberty Media Corp (Tracking Stock - Braves) Series A'
  },
  {
    symbol: 'BATRK',
    name: 'Liberty Media Corp (Tracking Stock - Braves) Series C'
  },
  {
    symbol: 'BAX',
    name: 'Baxter International Inc'
  },
  {
    symbol: 'BB',
    name: 'BlackBerry Ltd'
  },
  {
    symbol: 'BBAI',
    name: 'BigBear.ai Inc'
  },
  {
    symbol: 'BBAI-WS',
    name: 'BigBear.ai Inc Redeemable Warrants each exercisable for one share of Common Stock at an exercise price of 11.50 per share'
  },
  {
    symbol: 'BBAR',
    name: 'BBVA Argentina'
  },
  {
    symbol: 'BBBY',
    name: 'Bed Bath & Beyond Inc'
  },
  {
    symbol: 'BBCP',
    name: 'Concrete Pumping Holdings Inc - Class A'
  },
  {
    symbol: 'BBD',
    name: 'Banco Bradesco S.A.'
  },
  {
    symbol: 'BBDC',
    name: 'Barings BDC Inc'
  },
  {
    symbol: 'BBDO',
    name: 'Banco Bradesco S.A.'
  },
  {
    symbol: 'BBGI',
    name: 'Beasley Broadcast Group Inc - Class A'
  },
  {
    symbol: 'BBI',
    name: 'Brickell Biotech Inc'
  },
  {
    symbol: 'BBIG',
    name: 'Vinco Ventures Inc'
  },
  {
    symbol: 'BBIGV',
    name: 'Vinco Ventures Inc ExDistribution WhenIssued'
  },
  {
    symbol: 'BBIO',
    name: 'BridgeBio Pharma Inc'
  },
  {
    symbol: 'BBLG',
    name: 'Bone Biologics Corp'
  },
  {
    symbol: 'BBLGW',
    name: 'Bone Biologics Corp - Warrants (13/10/2026)'
  },
  {
    symbol: 'BBLN',
    name: 'Babylon Holdings Ltd - Class A'
  },
  {
    symbol: 'BBQ',
    name: 'BBQ Holdings Inc'
  },
  {
    symbol: 'BBSI',
    name: 'Barrett Business Services Inc'
  },
  {
    symbol: 'BBU',
    name: 'Brookfield Business Partners L.P.'
  },
  {
    symbol: 'BBUC',
    name: 'Brookfield Business Corp - Class A - Class A (Sub Voting)'
  },
  {
    symbol: 'BBUC-W',
    name: 'Brookfield Business Corporation Class A Exchangeable Subordinate WhenIssued'
  },
  {
    symbol: 'BBVA',
    name: 'Banco Bilbao Vizcaya Argentaria.'
  },
  {
    symbol: 'BBW',
    name: 'Build A Bear Workshop Inc'
  },
  {
    symbol: 'BBWI',
    name: 'Bath & Body Works Inc'
  },
  {
    symbol: 'BBWI-W',
    name: 'Bath & Body Works Inc Exdistribution WhenIssued'
  },
  {
    symbol: 'BBY',
    name: 'Best Buy Co. Inc'
  },
  {
    symbol: 'BC',
    name: 'Brunswick Corp'
  },
  {
    symbol: 'BC-P-A',
    name: 'Brunswick Corp'
  },
  {
    symbol: 'BC-P-B',
    name: 'Brunswick Corp'
  },
  {
    symbol: 'BC-P-C',
    name: 'Brunswick Corp'
  },
  {
    symbol: 'BCAB',
    name: 'BioAtla Inc'
  },
  {
    symbol: 'BCAC',
    name: 'Brookline Capital Acquisition Corp'
  },
  {
    symbol: 'BCACU',
    name: 'Brookline Capital Acquisition Corp - Units (1 Ord Share & 1/2 War)'
  },
  {
    symbol: 'BCACW',
    name: 'Brookline Capital Acquisition Corp - Warrants (01/09/2025)'
  },
  {
    symbol: 'BCAN',
    name: 'BYND Cannasoft Enterprises Inc'
  },
  {
    symbol: 'BCAT',
    name: 'BlackRock Capital Allocation Trust'
  },
  {
    symbol: 'BCBP',
    name: 'BCB Bancorp Inc (NJ)'
  },
  {
    symbol: 'BCC',
    name: 'Boise Cascade Company'
  },
  {
    symbol: 'BCDA',
    name: 'BioCardia Inc'
  },
  {
    symbol: 'BCDAW',
    name: 'BioCardia Inc - Warrants (26/07/2022)'
  },
  {
    symbol: 'BCE',
    name: 'BCE Inc'
  },
  {
    symbol: 'BCEL',
    name: 'Atreca Inc - Class A'
  },
  {
    symbol: 'BCH',
    name: 'Banco de Chile'
  },
  {
    symbol: 'BCLI',
    name: 'Brainstorm Cell Therapeutics Inc'
  },
  {
    symbol: 'BCML',
    name: 'BayCom Corp'
  },
  {
    symbol: 'BCO',
    name: 'Brink`s Company'
  },
  {
    symbol: 'BCOR',
    name: 'Blucora Inc'
  },
  {
    symbol: 'BCOV',
    name: 'Brightcove Inc'
  },
  {
    symbol: 'BCOW',
    name: '1895 Bancorp of Wisconsin Inc'
  },
  {
    symbol: 'BCPC',
    name: 'Balchem Corp'
  },
  {
    symbol: 'BCRX',
    name: 'Biocryst Pharmaceuticals Inc'
  },
  {
    symbol: 'BCS',
    name: 'Barclays plc'
  },
  {
    symbol: 'BCSA',
    name: 'Blockchain Coinvestors Acquisition Corp I - Class A'
  },
  {
    symbol: 'BCSAU',
    name: 'Blockchain Coinvestors Acquisition Corp I - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'BCSAW',
    name: 'Blockchain Coinvestors Acquisition Corp I - Warrants (01/09/2026)'
  },
  {
    symbol: 'BCSF',
    name: 'Bain Capital Specialty Finance Inc'
  },
  {
    symbol: 'BCTX',
    name: 'BriaCell Therapeutics Corp'
  },
  {
    symbol: 'BCTXW',
    name: 'BriaCell Therapeutics Corp - Warrants (24/02/2025)'
  },
  {
    symbol: 'BCV-P-A',
    name: 'Bancroft Fund Ltd'
  },
  {
    symbol: 'BCYC',
    name: 'Bicycle Therapeutics Plc'
  },
  {
    symbol: 'BDC',
    name: 'Belden Inc'
  },
  {
    symbol: 'BDCX',
    name: 'UBS AG London Branch'
  },
  {
    symbol: 'BDL',
    name: 'Flanigan`s Enterprises Inc'
  },
  {
    symbol: 'BDN',
    name: 'Brandywine Realty Trust'
  },
  {
    symbol: 'BDSX',
    name: 'Biodesix Inc'
  },
  {
    symbol: 'BDTX',
    name: 'Black Diamond Therapeutics Inc'
  },
  {
    symbol: 'BDX',
    name: 'Becton Dickinson And Company'
  },
  {
    symbol: 'BDXA',
    name: 'Becton Dickinson and Company Depositary Shares each Representing a 120th Interest in a Share of 6125 Mandatory Convertible Preferred Stock Series A 100 par'
  },
  {
    symbol: 'BDXB',
    name: 'Becton Dickinson And Company'
  },
  {
    symbol: 'BE',
    name: 'Bloom Energy Corp - Class A'
  },
  {
    symbol: 'BEAM',
    name: 'Beam Therapeutics Inc'
  },
  {
    symbol: 'BEAT',
    name: 'HeartBeam Inc'
  },
  {
    symbol: 'BEATW',
    name: 'HeartBeam Inc - Warrants (31/10/2026)'
  },
  {
    symbol: 'BECN',
    name: 'Beacon Roofing Supply Inc - Class A'
  },
  {
    symbol: 'BEDU',
    name: 'Bright Scholar Education Holdings Ltd'
  },
  {
    symbol: 'BEEM',
    name: 'Beam Global'
  },
  {
    symbol: 'BEEMW',
    name: 'Beam Global - Warrants (30/12/2023)'
  },
  {
    symbol: 'BEKE',
    name: 'KE Holdings Inc'
  },
  {
    symbol: 'BELFA',
    name: 'Bel Fuse Inc - Class A'
  },
  {
    symbol: 'BELFB',
    name: 'Bel Fuse Inc - Class B'
  },
  {
    symbol: 'BEN',
    name: 'Franklin Resources Inc'
  },
  {
    symbol: 'BENE',
    name: 'Benessere Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'BENER',
    name: 'Benessere Capital Acquisition Corp'
  },
  {
    symbol: 'BENEU',
    name: 'Benessere Capital Acquisition Corp - Units (1 Ord Class A 1 Rts & 3/4 War)'
  },
  {
    symbol: 'BENEW',
    name: 'Benessere Capital Acquisition Corp - Warrants (22/12/2025)'
  },
  {
    symbol: 'BEP',
    name: 'Brookfield Renewable Partners LP'
  },
  {
    symbol: 'BEP-P-A',
    name: 'Brookfield Renewable Partners LP 525 Class A Preferred Limited Partnership Units Series 17'
  },
  {
    symbol: 'BEP-W',
    name: 'Brookfield Renewable Partners L.P. Limited Partnership Units ExDistribution When Issued'
  },
  {
    symbol: 'BEPC',
    name: 'Brookfield Renewable Corporation - Class A - Class A (Sub Voting)'
  },
  {
    symbol: 'BEPCW',
    name: 'Brookfield Renewable Corporation Class A Subordinate When Issued'
  },
  {
    symbol: 'BEPH',
    name: 'Brookfield BRP Holdings (Canada) Inc'
  },
  {
    symbol: 'BEPI',
    name: 'Brookfield BRP Holdings (Canada) Inc'
  },
  {
    symbol: 'BEPW',
    name: 'Brookfield Renewable Partners L.P. Limited Partnership Units ExDistribution When Issued'
  },
  {
    symbol: 'BERY',
    name: 'Berry Global Group Inc'
  },
  {
    symbol: 'BERZ',
    name: 'Bank of Montreal'
  },
  {
    symbol: 'BEST',
    name: 'BEST Inc'
  },
  {
    symbol: 'BF-A',
    name: 'Brown-Forman Corp - Class A'
  },
  {
    symbol: 'BF-B',
    name: 'Brown-Forman Corp - Class B'
  },
  {
    symbol: 'BFAC',
    name: 'Battery Future Acquisition Corp - Class A'
  },
  {
    symbol: 'BFAC-U',
    name: 'Battery Future Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'BFAC-WS',
    name: 'Battery Future Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'BFAM',
    name: 'Bright Horizons Family Solutions Inc'
  },
  {
    symbol: 'BFC',
    name: 'Bank First Corp'
  },
  {
    symbol: 'BFH',
    name: 'Bread Financial Holdings Inc'
  },
  {
    symbol: 'BFI',
    name: 'BurgerFi International Inc'
  },
  {
    symbol: 'BFIIW',
    name: 'BurgerFi International Inc - Warrants (16/12/2025)'
  },
  {
    symbol: 'BFIN',
    name: 'Bankfinancial Corp'
  },
  {
    symbol: 'BFLY',
    name: 'Butterfly Network Inc - Class A'
  },
  {
    symbol: 'BFLY-WS',
    name: 'Butterfly Network Inc - Warrants (27/05/2025)'
  },
  {
    symbol: 'BFRI',
    name: 'Biofrontera Inc'
  },
  {
    symbol: 'BFRIW',
    name: 'Biofrontera Inc - Warrants (27/10/2026)'
  },
  {
    symbol: 'BFS',
    name: 'Saul Centers Inc'
  },
  {
    symbol: 'BFS-P-D',
    name: 'Saul Centers Inc Depositary Shares Series D'
  },
  {
    symbol: 'BFS-P-E',
    name: 'Saul Centers Inc. PRF PERPETUAL USD Ser E Rep 1100th'
  },
  {
    symbol: 'BFST',
    name: 'Business First Bancshares Inc'
  },
  {
    symbol: 'BFT-U',
    name: 'Foley Trasimene Acquisition Corp II Units each consisting of one share of Class A common stock and onethird of one warrant'
  },
  {
    symbol: 'BFT-WS',
    name: 'Foley Trasimene Acquisition Corp II Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50 per share'
  },
  {
    symbol: 'BG',
    name: 'Bunge Ltd'
  },
  {
    symbol: 'BGCP',
    name: 'BGC Partners Inc - Class A'
  },
  {
    symbol: 'BGFV',
    name: 'Big 5 Sporting Goods Corp'
  },
  {
    symbol: 'BGI',
    name: 'Birks Group Inc - Class A'
  },
  {
    symbol: 'BGNE',
    name: 'BeiGene Ltd'
  },
  {
    symbol: 'BGRY',
    name: 'Berkshire Grey Inc - Class A'
  },
  {
    symbol: 'BGRYW',
    name: 'Berkshire Grey Inc - Warrants (21/07/2026)'
  },
  {
    symbol: 'BGS',
    name: 'B&G Foods Inc'
  },
  {
    symbol: 'BGSF',
    name: 'BGSF Inc'
  },
  {
    symbol: 'BGSX',
    name: 'Build Acquisition Corp - Class A'
  },
  {
    symbol: 'BGSX-U',
    name: 'Build Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'BGSX-WS',
    name: 'Build Acquisition Corp Redeemable warrants each whole warrant exercisable for one Class A common stock at an exercise price of 11.50'
  },
  {
    symbol: 'BGXX',
    name: 'Bright Green Corp'
  },
  {
    symbol: 'BH',
    name: 'Biglari Holdings Inc - Class B'
  },
  {
    symbol: 'BH-A',
    name: 'Biglari Holdings Inc - Class A'
  },
  {
    symbol: 'BHAC',
    name: 'Crixus BH3 Acquisition Co - Class A'
  },
  {
    symbol: 'BHACU',
    name: 'Crixus BH3 Acquisition Co - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'BHACW',
    name: 'Crixus BH3 Acquisition Co - Warrants (04/10/2026)'
  },
  {
    symbol: 'BHAT',
    name: 'Blue Hat Interactive Entertainment Technology'
  },
  {
    symbol: 'BHB',
    name: 'Bar Harbor Bankshares Inc'
  },
  {
    symbol: 'BHC',
    name: 'Bausch Health Companies Inc'
  },
  {
    symbol: 'BHE',
    name: 'Benchmark Electronics Inc'
  },
  {
    symbol: 'BHF',
    name: 'Brighthouse Financial Inc'
  },
  {
    symbol: 'BHFAL',
    name: 'Brighthouse Financial Inc 625 Junior Subordinated Debentures due 2058'
  },
  {
    symbol: 'BHFAM',
    name: 'Brighthouse Financial Inc'
  },
  {
    symbol: 'BHFAN',
    name: 'Brighthouse Financial Inc'
  },
  {
    symbol: 'BHFAO',
    name: 'Brighthouse Financial Inc'
  },
  {
    symbol: 'BHFAP',
    name: 'Brighthouse Financial Inc. Depositary Shares 6.6 NonCumulative Preferred Stock Series A'
  },
  {
    symbol: 'BHG',
    name: 'Bright Health Group Inc'
  },
  {
    symbol: 'BHIL',
    name: 'Benson Hill Inc'
  },
  {
    symbol: 'BHIL-WS',
    name: 'Benson Hill Inc Wt'
  },
  {
    symbol: 'BHLB',
    name: 'Berkshire Hills Bancorp Inc'
  },
  {
    symbol: 'BHP',
    name: 'BHP Group Ltd'
  },
  {
    symbol: 'BHR',
    name: 'Braemar Hotels & Resorts Inc'
  },
  {
    symbol: 'BHR-P-B',
    name: 'Braemar Hotels & Resorts Inc'
  },
  {
    symbol: 'BHR-P-D',
    name: 'Braemar Hotels & Resorts Inc'
  },
  {
    symbol: 'BHSE',
    name: 'Bull Horn Holdings Corp'
  },
  {
    symbol: 'BHSEU',
    name: 'Bull Horn Holdings Corp - Unit (1 Ordinary share & 1 War)'
  },
  {
    symbol: 'BHSEW',
    name: 'Bull Horn Holdings Corp - Warrants (31/10/2025)'
  },
  {
    symbol: 'BHVN',
    name: 'Biohaven Pharmaceutical Holding Company Ltd'
  },
  {
    symbol: 'BIDU',
    name: 'Baidu Inc'
  },
  {
    symbol: 'BIG',
    name: 'Big Lots Inc'
  },
  {
    symbol: 'BIGC',
    name: 'BigCommerce Holdings Inc Series 1'
  },
  {
    symbol: 'BIGZ',
    name: 'BlackRock Innovation & Growth Trust'
  },
  {
    symbol: 'BIIB',
    name: 'Biogen Inc'
  },
  {
    symbol: 'BILI',
    name: 'Bilibili Inc'
  },
  {
    symbol: 'BILL',
    name: 'Bill.com Holdings Inc'
  },
  {
    symbol: 'BIMI',
    name: 'BIMI International Medical Inc'
  },
  {
    symbol: 'BIO',
    name: 'Bio-Rad Laboratories Inc - Class A'
  },
  {
    symbol: 'BIO-B',
    name: 'Bio-Rad Laboratories Inc - Class B'
  },
  {
    symbol: 'BIOC',
    name: 'Biocept Inc'
  },
  {
    symbol: 'BIOL',
    name: 'Biolase Inc'
  },
  {
    symbol: 'BIOR',
    name: 'Biora Therapeutics Inc'
  },
  {
    symbol: 'BIOS',
    name: 'BioPlus Acquisition Corp - Class A'
  },
  {
    symbol: 'BIOSU',
    name: 'BioPlus Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'BIOSW',
    name: 'BioPlus Acquisition Corp - Warrants (02/12/2026)'
  },
  {
    symbol: 'BIOT',
    name: 'Biotech Acquisition Co - Class A'
  },
  {
    symbol: 'BIOTU',
    name: 'Biotech Acquisition Co - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'BIOTW',
    name: 'Biotech Acquisition Co - Warrants (30/11/2027)'
  },
  {
    symbol: 'BIOX',
    name: 'Bioceres Crop Solutions Corp'
  },
  {
    symbol: 'BIP',
    name: 'Brookfield Infrastructure Partners L.P'
  },
  {
    symbol: 'BIP-P-A',
    name: 'Brookfield Infrastructure Partners L.P'
  },
  {
    symbol: 'BIP-P-B',
    name: 'Brookfield Infrastructure Partners L.P'
  },
  {
    symbol: 'BIPC',
    name: 'Brookfield Infrastructure Corp - Class A (Subordinate Share)'
  },
  {
    symbol: 'BIPH',
    name: 'Brookfield Infrastructure Finance ULC'
  },
  {
    symbol: 'BIPI',
    name: 'BIP Bermuda Holdings I Ltd'
  },
  {
    symbol: 'BIRD',
    name: 'Allbirds Inc Class A'
  },
  {
    symbol: 'BITE',
    name: 'Bite Acquisition Corp'
  },
  {
    symbol: 'BITE-U',
    name: 'Bite Acquisition Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'BITE-WS',
    name: 'Bite Acquisition Corp - Warrants (12/02/2031)'
  },
  {
    symbol: 'BITF',
    name: 'Bitfarms Ltd'
  },
  {
    symbol: 'BIVI',
    name: 'BioVie Inc'
  },
  {
    symbol: 'BJ',
    name: 'BJ`s Wholesale Club Holdings Inc'
  },
  {
    symbol: 'BJDX',
    name: 'Bluejay Diagnostics Inc'
  },
  {
    symbol: 'BJRI',
    name: 'BJ`s Restaurant Inc'
  },
  {
    symbol: 'BK',
    name: 'Bank Of New York Mellon Corp'
  },
  {
    symbol: 'BKCC',
    name: 'BlackRock Capital Investment Corp'
  },
  {
    symbol: 'BKD',
    name: 'Brookdale Senior Living Inc'
  },
  {
    symbol: 'BKE',
    name: 'Buckle Inc'
  },
  {
    symbol: 'BKEP',
    name: 'Blueknight Energy Partners LP'
  },
  {
    symbol: 'BKEPP',
    name: 'Blueknight Energy Partners LP'
  },
  {
    symbol: 'BKH',
    name: 'Black Hills Corporation'
  },
  {
    symbol: 'BKI',
    name: 'Black Knight Inc - Class A'
  },
  {
    symbol: 'BKKT',
    name: 'Bakkt Holdings Inc - Class A'
  },
  {
    symbol: 'BKKT-WS',
    name: 'Bakkt Holdings Inc Warrant'
  },
  {
    symbol: 'BKNG',
    name: 'Booking Holdings Inc'
  },
  {
    symbol: 'BKR',
    name: 'Baker Hughes Co - Class A'
  },
  {
    symbol: 'BKSC',
    name: 'Bank Of South Carolina Corp'
  },
  {
    symbol: 'BKSY',
    name: 'BlackSky Technology Inc - Class A'
  },
  {
    symbol: 'BKSY-WS',
    name: 'BlackSky Technology Inc Wt Exp 10302024'
  },
  {
    symbol: 'BKTI',
    name: 'BK Technologies Corp'
  },
  {
    symbol: 'BKU',
    name: 'BankUnited Inc'
  },
  {
    symbol: 'BKYI',
    name: 'Bio-Key International Inc'
  },
  {
    symbol: 'BL',
    name: 'BlackLine Inc'
  },
  {
    symbol: 'BLBD',
    name: 'Blue Bird Corp'
  },
  {
    symbol: 'BLBX',
    name: 'Blackboxstocks Inc'
  },
  {
    symbol: 'BLCM',
    name: 'Bellicum Pharmaceuticals Inc'
  },
  {
    symbol: 'BLCO',
    name: 'Bausch + Lomb Corp'
  },
  {
    symbol: 'BLCT',
    name: 'BlueCity Holdings Ltd'
  },
  {
    symbol: 'BLD',
    name: 'TopBuild Corp'
  },
  {
    symbol: 'BLDE',
    name: 'Blade Air Mobility Inc - Class A'
  },
  {
    symbol: 'BLDEW',
    name: 'Blade Air Mobility Inc - Warrants (07/05/2026)'
  },
  {
    symbol: 'BLDP',
    name: 'Ballard Power Systems Inc'
  },
  {
    symbol: 'BLDR',
    name: 'Builders Firstsource Inc'
  },
  {
    symbol: 'BLEU',
    name: 'bleuacacia Ltd - Class A'
  },
  {
    symbol: 'BLEUR',
    name: 'bleuacacia Ltd'
  },
  {
    symbol: 'BLEUU',
    name: 'bleuacacia Ltd - Units (1 Ord Share Class A &1Right & 1/2 War)'
  },
  {
    symbol: 'BLEUW',
    name: 'bleuacacia Ltd - Warrants (30/10/2026)'
  },
  {
    symbol: 'BLFS',
    name: 'Biolife Solutions Inc'
  },
  {
    symbol: 'BLFY',
    name: 'Blue Foundry Bancorp'
  },
  {
    symbol: 'BLI',
    name: 'Berkeley Lights Inc'
  },
  {
    symbol: 'BLIN',
    name: 'Bridgeline Digital Inc'
  },
  {
    symbol: 'BLK',
    name: 'Blackrock Inc'
  },
  {
    symbol: 'BLKB',
    name: 'Blackbaud Inc'
  },
  {
    symbol: 'BLMN',
    name: 'Bloomin Brands Inc'
  },
  {
    symbol: 'BLND',
    name: 'Blend Labs Inc - Class A'
  },
  {
    symbol: 'BLNG',
    name: 'Belong Acquisition Corp - Class A'
  },
  {
    symbol: 'BLNGU',
    name: 'Belong Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'BLNGW',
    name: 'Belong Acquisition Corp - Warrants (23/03/2026)'
  },
  {
    symbol: 'BLNK',
    name: 'Blink Charging Company'
  },
  {
    symbol: 'BLNKW',
    name: 'Blink Charging Co - Warrants (31/01/2023)'
  },
  {
    symbol: 'BLPH',
    name: 'Bellerophon Therapeutics Inc'
  },
  {
    symbol: 'BLRX',
    name: 'Bioline Rx Ltd'
  },
  {
    symbol: 'BLSA',
    name: 'BCLS Acquisition Corp - Class A'
  },
  {
    symbol: 'BLTE',
    name: 'Belite Bio Inc'
  },
  {
    symbol: 'BLTS',
    name: 'Bright Lights Acquisition Corp - Class A'
  },
  {
    symbol: 'BLTSU',
    name: 'Bright Lights Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'BLTSW',
    name: 'Bright Lights Acquisition Corp - Warrants (01/01/2028)'
  },
  {
    symbol: 'BLU',
    name: 'Bellus Health Inc'
  },
  {
    symbol: 'BLUA',
    name: 'BlueRiver Acquisition Corp - Class A'
  },
  {
    symbol: 'BLUA-U',
    name: 'BlueRiver Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'BLUA-WS',
    name: 'BlueRiver Acquisition Corp - Warrants (04/01/2026)'
  },
  {
    symbol: 'BLUE',
    name: 'Bluebird bio Inc'
  },
  {
    symbol: 'BLX',
    name: 'Banco Latinoamericano De Comercio Exterior SA - Class E'
  },
  {
    symbol: 'BLZE',
    name: 'Backblaze Inc - Class A'
  },
  {
    symbol: 'BMA',
    name: 'Banco Macro S.A.'
  },
  {
    symbol: 'BMAC',
    name: 'Black Mountain Acquisition Corp - Class A'
  },
  {
    symbol: 'BMAC-U',
    name: 'Black Mountain Acquisition Corp - Units (1 Ord Class A & 0.75 War)'
  },
  {
    symbol: 'BMAC-WS',
    name: 'Black Mountain Acquisition Corp - Warrants (15/10/2027)'
  },
  {
    symbol: 'BMAQ',
    name: 'Blockchain Moon Acquisition Corp'
  },
  {
    symbol: 'BMAQR',
    name: 'Blockchain Moon Acquisition Corp'
  },
  {
    symbol: 'BMAQU',
    name: 'Blockchain Moon Acquisition Corp - Units (1 Ord 1 War & 1 Rts)'
  },
  {
    symbol: 'BMAQW',
    name: 'Blockchain Moon Acquisition Corp - Warrants (14/10/2026)'
  },
  {
    symbol: 'BMBL',
    name: 'Bumble Inc - Class A'
  },
  {
    symbol: 'BMEA',
    name: 'Biomea Fusion Inc'
  },
  {
    symbol: 'BMEZ',
    name: 'BlackRock Health Sciences Trust II'
  },
  {
    symbol: 'BMI',
    name: 'Badger Meter Inc'
  },
  {
    symbol: 'BML-P-G',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BML-P-H',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BML-P-J',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BML-P-L',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'BMO',
    name: 'Bank of Montreal'
  },
  {
    symbol: 'BMRA',
    name: 'Biomerica Inc'
  },
  {
    symbol: 'BMRC',
    name: 'Bank of Marin Bancorp'
  },
  {
    symbol: 'BMRN',
    name: 'Biomarin Pharmaceutical Inc'
  },
  {
    symbol: 'BMTX',
    name: 'BM Technologies Inc - Class A'
  },
  {
    symbol: 'BMTX-WS',
    name: 'BM Technologies Inc - Warrants (30/09/2025)'
  },
  {
    symbol: 'BMY',
    name: 'Bristol-Myers Squibb Company'
  },
  {
    symbol: 'BMYR',
    name: 'BristolMyers Squibb Company Contingent Value Rights'
  },
  {
    symbol: 'BNED',
    name: 'Barnes & Noble Education Inc'
  },
  {
    symbol: 'BNFT',
    name: 'Benefitfocus Inc'
  },
  {
    symbol: 'BNGO',
    name: 'Bionano Genomics Inc'
  },
  {
    symbol: 'BNGOW',
    name: 'Bionano Genomics Inc Warrants 21082023'
  },
  {
    symbol: 'BNIX',
    name: 'Bannix Acquisition Corp'
  },
  {
    symbol: 'BNIXR',
    name: 'Bannix Acquisition Corp'
  },
  {
    symbol: 'BNIXW',
    name: 'Bannix Acquisition Corp - Warrants (31/07/2026)'
  },
  {
    symbol: 'BNL',
    name: 'Broadstone Net Lease Inc'
  },
  {
    symbol: 'BNNR',
    name: 'Banner Acquisition Corp - Class A'
  },
  {
    symbol: 'BNNRU',
    name: 'Banner Acquisition Corp - Units (1 Ord ShareClass A & 1/2 War)'
  },
  {
    symbol: 'BNNRW',
    name: 'Banner Acquisition Corp - Warrants (07/09/2026)'
  },
  {
    symbol: 'BNOX',
    name: 'Bionomics Ltd'
  },
  {
    symbol: 'BNR',
    name: 'Burning Rock Biotech Ltd'
  },
  {
    symbol: 'BNRG',
    name: 'Brenmiller Energy Ltd'
  },
  {
    symbol: 'BNS',
    name: 'Bank Of Nova Scotia'
  },
  {
    symbol: 'BNSO',
    name: 'Bonso Electronics International'
  },
  {
    symbol: 'BNTC',
    name: 'Benitec Biopharma Inc'
  },
  {
    symbol: 'BNTCW',
    name: 'Benitec Biopharma Ltd'
  },
  {
    symbol: 'BNTX',
    name: 'BioNTech SE'
  },
  {
    symbol: 'BOAC',
    name: 'Bluescape Opportunities Acquisition Corp - Class A'
  },
  {
    symbol: 'BOAC-U',
    name: 'Bluescape Opportunities Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'BOAC-WS',
    name: 'Bluescape Opportunities Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'BOAS',
    name: 'BOA Acquisition Corp - Class A'
  },
  {
    symbol: 'BOAS-U',
    name: 'BOA Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'BOAS-WS',
    name: 'BOA Acquisition Corp - Warrants (22/02/2028)'
  },
  {
    symbol: 'BOC',
    name: 'Boston Omaha Corp - Class A'
  },
  {
    symbol: 'BOCN',
    name: 'Blue Ocean Acquisition Corp - Class A'
  },
  {
    symbol: 'BOCNU',
    name: 'Blue Ocean Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'BOCNW',
    name: 'Blue Ocean Acquisition Corp - Warrants (02/12/2026)'
  },
  {
    symbol: 'BODY',
    name: 'Beachbody Company Inc (The) - Class A'
  },
  {
    symbol: 'BODY-WS',
    name: 'Beachbody Company Inc (The) - Warrants (31/12/2027)'
  },
  {
    symbol: 'BOH',
    name: 'Bank of Hawaii Corp'
  },
  {
    symbol: 'BOH-P-A',
    name: 'Bank of Hawaii Corp'
  },
  {
    symbol: 'BOKF',
    name: 'BOK Financial Corp'
  },
  {
    symbol: 'BOLT',
    name: 'Bolt Biotherapeutics Inc'
  },
  {
    symbol: 'BON',
    name: 'Bon Natural Life Ltd'
  },
  {
    symbol: 'BOOM',
    name: 'DMC Global Inc'
  },
  {
    symbol: 'BOOT',
    name: 'Boot Barn Holdings Inc'
  },
  {
    symbol: 'BORR',
    name: 'Borr Drilling Ltd'
  },
  {
    symbol: 'BOSC',
    name: 'B.O.S. Better Online Solutions'
  },
  {
    symbol: 'BOTJ',
    name: 'Bank of James Financial Group Inc'
  },
  {
    symbol: 'BOWL',
    name: 'Bowlero Corp - Class A'
  },
  {
    symbol: 'BOX',
    name: 'Box Inc - Class A'
  },
  {
    symbol: 'BOXD',
    name: 'Boxed Inc'
  },
  {
    symbol: 'BOXD-WS',
    name: 'Boxed Inc - Warrants (18/12/2025)'
  },
  {
    symbol: 'BOXL',
    name: 'Boxlight Corporation - Class A'
  },
  {
    symbol: 'BP',
    name: 'BP plc'
  },
  {
    symbol: 'BPAC',
    name: 'Bullpen Parlay Acquisition Co - Class A'
  },
  {
    symbol: 'BPACU',
    name: 'Bullpen Parlay Acquisition Co - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'BPACW',
    name: 'Bullpen Parlay Acquisition Co - Warrants (03/12/2026)'
  },
  {
    symbol: 'BPMC',
    name: 'Blueprint Medicines Corp'
  },
  {
    symbol: 'BPMP',
    name: 'BP Midstream Partners LP'
  },
  {
    symbol: 'BPOP',
    name: 'Popular Inc'
  },
  {
    symbol: 'BPOPM',
    name: 'Popular Capital Trust II'
  },
  {
    symbol: 'BPRN',
    name: 'Bank of Princeton'
  },
  {
    symbol: 'BPT',
    name: 'BP Prudhoe Bay Royalty Trust'
  },
  {
    symbol: 'BPTH',
    name: 'Bio-Path Holdings Inc'
  },
  {
    symbol: 'BPTS',
    name: 'Biophytis'
  },
  {
    symbol: 'BPYPM',
    name: 'Brookfield Property Preferred LP'
  },
  {
    symbol: 'BPYPN',
    name: 'Brookfield Property Partners L.P.'
  },
  {
    symbol: 'BPYPO',
    name: 'Brookfield Property Partners L.P.'
  },
  {
    symbol: 'BPYPP',
    name: 'Brookfield Property Partners L.P.'
  },
  {
    symbol: 'BQ',
    name: 'Boqii Holding Ltd'
  },
  {
    symbol: 'BR',
    name: 'Broadridge Financial Solutions Inc'
  },
  {
    symbol: 'BRAC',
    name: 'Broad Capital Acquisition Corp'
  },
  {
    symbol: 'BRACR',
    name: 'Broad Capital Acquisition Corp'
  },
  {
    symbol: 'BRACU',
    name: 'Broad Capital Acquisition Corp - Units (1 Ord & 1 Rts)'
  },
  {
    symbol: 'BRAG',
    name: 'Bragg Gaming Group Inc'
  },
  {
    symbol: 'BRBR',
    name: 'Bellring Brands Inc'
  },
  {
    symbol: 'BRBR-W',
    name: 'BellRing Brands Inc When Issued'
  },
  {
    symbol: 'BRBS',
    name: 'Blue Ridge Bankshares Inc (VA)'
  },
  {
    symbol: 'BRC',
    name: 'Brady Corp - Class A'
  },
  {
    symbol: 'BRCC',
    name: 'BRC Inc - Class A'
  },
  {
    symbol: 'BRCN',
    name: 'Burcon Nutrascience Corp'
  },
  {
    symbol: 'BRD',
    name: 'Beard Energy Transition Acquisition Corp - Class A'
  },
  {
    symbol: 'BRD-U',
    name: 'Beard Energy Transition Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'BRD-WS',
    name: 'Beard Energy Transition Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'BRDG',
    name: 'Bridge Investment Group Holdings Inc - Class A'
  },
  {
    symbol: 'BRDS',
    name: 'Bird Global Inc - Class A'
  },
  {
    symbol: 'BRDS-WS',
    name: 'Bird Global Inc - Warrants (01/01/9999)'
  },
  {
    symbol: 'BREZ',
    name: 'Breeze Holdings Acquisition Corp'
  },
  {
    symbol: 'BREZR',
    name: 'Breeze Holdings Acquisition Corp'
  },
  {
    symbol: 'BREZW',
    name: 'Breeze Holdings Acquisition Corp - Warrants (20/11/2022)'
  },
  {
    symbol: 'BRFH',
    name: 'Barfresh Food Group Inc'
  },
  {
    symbol: 'BRFS',
    name: 'BRF S.A.'
  },
  {
    symbol: 'BRG',
    name: 'Bluerock Residential Growth REIT Inc - Class A'
  },
  {
    symbol: 'BRG-P-C',
    name: 'Bluerock Residential Growth REIT Inc 7625 Series C Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'BRG-P-D',
    name: 'Bluerock Residential Growth REIT Inc 7125 Series D Cumulative Preferred Stock 001 par value per share'
  },
  {
    symbol: 'BRID',
    name: 'Bridgford Foods Corporation'
  },
  {
    symbol: 'BRIV',
    name: 'B Riley Principal 250 Merger Corp - Class A'
  },
  {
    symbol: 'BRIVU',
    name: 'B Riley Principal 250 Merger Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'BRIVW',
    name: 'B Riley Principal 250 Merger Corp - Warrants (06/04/2026)'
  },
  {
    symbol: 'BRK-A',
    name: 'Berkshire Hathaway Inc - Class A'
  },
  {
    symbol: 'BRK-B',
    name: 'Berkshire Hathaway Inc - Class B'
  },
  {
    symbol: 'BRKH',
    name: 'BurTech Acquisition Corp - Class A'
  },
  {
    symbol: 'BRKHU',
    name: 'BurTech Acquisition Corp - Units (1 Ord Share Class A & 1 War)'
  },
  {
    symbol: 'BRKHW',
    name: 'BurTech Acquisition Corp - Warrants (18/12/2026)'
  },
  {
    symbol: 'BRKL',
    name: 'Brookline Bancorp Inc'
  },
  {
    symbol: 'BRKR',
    name: 'Bruker Corp'
  },
  {
    symbol: 'BRLI',
    name: 'Brilliant Acquisition Corp'
  },
  {
    symbol: 'BRLIR',
    name: 'Brilliant Acquisition Corp'
  },
  {
    symbol: 'BRLIU',
    name: 'Brilliant Acquisition Corp - Unit (1 Ordinary share 1 War and 1 Rts)'
  },
  {
    symbol: 'BRLIW',
    name: 'Brilliant Acquisition Corp - Warrants (31/03/2025)'
  },
  {
    symbol: 'BRLT',
    name: 'Brilliant Earth Group Inc Class A'
  },
  {
    symbol: 'BRMK',
    name: 'Broadmark Realty Capital Inc'
  },
  {
    symbol: 'BRMK-WS',
    name: 'Broadmark Realty Capital Inc - Warrants (15/11/2024)'
  },
  {
    symbol: 'BRN',
    name: 'Barnwell Industries Inc'
  },
  {
    symbol: 'BRO',
    name: 'Brown & Brown Inc'
  },
  {
    symbol: 'BROG',
    name: 'Brooge Energy Ltd'
  },
  {
    symbol: 'BROGR',
    name: 'Twelve Seas Investment Company Rights'
  },
  {
    symbol: 'BROGW',
    name: 'Brooge Energy Ltd - Warrants (22/12/2024)'
  },
  {
    symbol: 'BROS',
    name: 'Dutch Bros Inc - Class A'
  },
  {
    symbol: 'BRP',
    name: 'BRP Group Inc - Class A'
  },
  {
    symbol: 'BRPM',
    name: 'B. Riley Principal 150 Merger Corp - Class A'
  },
  {
    symbol: 'BRPMU',
    name: 'B. Riley Principal 150 Merger Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'BRPMW',
    name: 'B. Riley Principal 150 Merger Corp - Warrants (01/03/2028)'
  },
  {
    symbol: 'BRQS',
    name: 'Borqs Technologies Inc'
  },
  {
    symbol: 'BRSP',
    name: 'BrightSpire Capital Inc - Class A'
  },
  {
    symbol: 'BRT',
    name: 'BRT Apartments Corp'
  },
  {
    symbol: 'BRTX',
    name: 'BioRestorative Therapies Inc'
  },
  {
    symbol: 'BRW',
    name: 'Saba Capital Income & Opportunities Fund'
  },
  {
    symbol: 'BRX',
    name: 'Brixmor Property Group Inc'
  },
  {
    symbol: 'BRY',
    name: 'Berry Corp'
  },
  {
    symbol: 'BRZE',
    name: 'Braze Inc - Class A'
  },
  {
    symbol: 'BSAC',
    name: 'Banco Santander Chile SA'
  },
  {
    symbol: 'BSAQ',
    name: 'Black Spade Acquisition Co - Class A'
  },
  {
    symbol: 'BSAQ-U',
    name: 'Black Spade Acquisition Co - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'BSAQ-WS',
    name: 'Black Spade Acquisition Co - Warrants (01/01/9999)'
  },
  {
    symbol: 'BSBK',
    name: 'Bogota Financial Corp'
  },
  {
    symbol: 'BSBR',
    name: 'Banco Santander (Brasil) S.A.'
  },
  {
    symbol: 'BSET',
    name: 'Bassett Furniture Industries Inc'
  },
  {
    symbol: 'BSFC',
    name: 'Blue Star Foods Corp'
  },
  {
    symbol: 'BSGA',
    name: 'Blue Safari Group Acquisition Corp - Class A'
  },
  {
    symbol: 'BSGAR',
    name: 'Blue Safari Group Acquisition Corp'
  },
  {
    symbol: 'BSGAU',
    name: 'Blue Safari Group Acquisition Corp - Units (1 Ord Class A & 1 Right)'
  },
  {
    symbol: 'BSGM',
    name: 'Biosig Technologies Inc'
  },
  {
    symbol: 'BSIG',
    name: 'BrightSphere Investment Group Inc'
  },
  {
    symbol: 'BSKY',
    name: 'Big Sky Growth Partners Inc - Class A'
  },
  {
    symbol: 'BSKYU',
    name: 'Big Sky Growth Partners Inc - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'BSKYW',
    name: 'Big Sky Growth Partners Inc - Warrants (01/04/2026)'
  },
  {
    symbol: 'BSM',
    name: 'Black Stone Minerals L.P.'
  },
  {
    symbol: 'BSMX',
    name: 'Banco Santander Mexico S.A.'
  },
  {
    symbol: 'BSQR',
    name: 'BSquare Corp'
  },
  {
    symbol: 'BSRR',
    name: 'Sierra Bancorp'
  },
  {
    symbol: 'BST-R',
    name: 'BlackRock Science and Technology Trust Rights'
  },
  {
    symbol: 'BST-R-W',
    name: 'BlackRock Science and Technology Trust Rights expiring July 14 2021 When Issued'
  },
  {
    symbol: 'BSTZ',
    name: 'BlackRock Science and Technology Trust II'
  },
  {
    symbol: 'BSVN',
    name: 'Bank7 Corp'
  },
  {
    symbol: 'BSX',
    name: 'Boston Scientific Corp'
  },
  {
    symbol: 'BSX-P-A',
    name: ''
  },
  {
    symbol: 'BSY',
    name: 'Bentley Systems Inc - Class B'
  },
  {
    symbol: 'BTAI',
    name: 'BioXcel Therapeutics Inc'
  },
  {
    symbol: 'BTB',
    name: 'Bit Brother Ltd - Class A'
  },
  {
    symbol: 'BTBD',
    name: 'BT Brands Inc'
  },
  {
    symbol: 'BTBDW',
    name: 'BT Brands Inc - Warrants (12/11/2026)'
  },
  {
    symbol: 'BTBT',
    name: 'Bit Digital Inc'
  },
  {
    symbol: 'BTCM',
    name: 'BIT Mining Ltd'
  },
  {
    symbol: 'BTCS',
    name: 'BTCS Inc'
  },
  {
    symbol: 'BTCY',
    name: 'Biotricity Inc'
  },
  {
    symbol: 'BTG',
    name: 'B2gold Corp'
  },
  {
    symbol: 'BTI',
    name: 'British American Tobacco Plc'
  },
  {
    symbol: 'BTMD',
    name: 'biote Corp - Class A'
  },
  {
    symbol: 'BTMDW',
    name: 'biote Corp - Warrants (18/01/2027)'
  },
  {
    symbol: 'BTN',
    name: 'Ballantyne Strong Inc'
  },
  {
    symbol: 'BTOG',
    name: 'Bit Origin Ltd'
  },
  {
    symbol: 'BTRS',
    name: 'BTRS Holdings Inc - Class 1'
  },
  {
    symbol: 'BTTR',
    name: 'Better Choice Company Inc'
  },
  {
    symbol: 'BTTX',
    name: 'Better Therapeutics Inc'
  },
  {
    symbol: 'BTU',
    name: 'Peabody Energy Corp New'
  },
  {
    symbol: 'BTWN',
    name: 'Bridgetown Holdings Ltd - Class A'
  },
  {
    symbol: 'BTWNU',
    name: 'Bridgetown Holdings Ltd - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'BTWNW',
    name: 'Bridgetown Holdings Ltd - Warrants (14/10/2025)'
  },
  {
    symbol: 'BTX',
    name: 'Brooklyn ImmunoTherapeutics Inc'
  },
  {
    symbol: 'BUD',
    name: 'Anheuser-Busch In Bev SA/NV'
  },
  {
    symbol: 'BULZ',
    name: 'Bank of Montreal'
  },
  {
    symbol: 'BUR',
    name: 'Burford Capital Ltd'
  },
  {
    symbol: 'BURL',
    name: 'Burlington Stores Inc'
  },
  {
    symbol: 'BUSE',
    name: 'First Busey Corp'
  },
  {
    symbol: 'BV',
    name: 'BrightView Holdings Inc'
  },
  {
    symbol: 'BVH',
    name: 'Bluegreen Vacations Holding Corporation - Class A'
  },
  {
    symbol: 'BVN',
    name: 'Compania de Minas Buenaventura S.A.'
  },
  {
    symbol: 'BVS',
    name: 'Bioventus Inc - Class A'
  },
  {
    symbol: 'BVXV',
    name: 'Biondvax Pharmaceuticals Ltd'
  },
  {
    symbol: 'BW',
    name: 'Babcock & Wilcox Enterprises Inc'
  },
  {
    symbol: 'BW-P-A',
    name: 'Babcock & Wilcox Enterprises Inc'
  },
  {
    symbol: 'BWA',
    name: 'BorgWarner Inc'
  },
  {
    symbol: 'BWAC',
    name: 'Better World Acquisition Corp'
  },
  {
    symbol: 'BWACU',
    name: 'Better World Acquisition Corp - Units (1 Ord & 1 War)'
  },
  {
    symbol: 'BWACW',
    name: 'Better World Acquisition Corp - Warrants (27/10/2025)'
  },
  {
    symbol: 'BWAQ',
    name: 'Blue World Acquisition Corp - Class A'
  },
  {
    symbol: 'BWAQR',
    name: 'Blue World Acquisition Corp'
  },
  {
    symbol: 'BWAQU',
    name: 'Blue World Acquisition Corp - Units (1 Ord Class A & 1/2 War & 1 Right)'
  },
  {
    symbol: 'BWAQW',
    name: 'Blue World Acquisition Corp - Warrants (10/01/2029)'
  },
  {
    symbol: 'BWAY',
    name: 'Brainsway Ltd'
  },
  {
    symbol: 'BWB',
    name: 'Bridgewater Bancshares Inc'
  },
  {
    symbol: 'BWBBP',
    name: 'Bridgewater Bancshares Inc'
  },
  {
    symbol: 'BWC',
    name: 'Blue Whale Acquisition Corp I - Class A'
  },
  {
    symbol: 'BWCAU',
    name: 'Blue Whale Acquisition Corp I - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'BWCAW',
    name: 'Blue Whale Acquisition Corp I - Warrants (30/07/2026)'
  },
  {
    symbol: 'BWEN',
    name: 'Broadwind Inc'
  },
  {
    symbol: 'BWFG',
    name: 'Bankwell Financial Group Inc'
  },
  {
    symbol: 'BWMN',
    name: 'Bowman Consulting Group Ltd'
  },
  {
    symbol: 'BWMX',
    name: 'Betterware de Mexico S.A.B. de C.V.'
  },
  {
    symbol: 'BWNB',
    name: 'Babcock & Wilcox Enterprises Inc'
  },
  {
    symbol: 'BWSN',
    name: 'Babcock & Wilcox Enterprises Inc'
  },
  {
    symbol: 'BWV',
    name: 'Blue Water Vaccines Inc'
  },
  {
    symbol: 'BWXT',
    name: 'BWX Technologies Inc'
  },
  {
    symbol: 'BX',
    name: 'Blackstone Inc'
  },
  {
    symbol: 'BXC',
    name: 'Bluelinx Hldgs Inc'
  },
  {
    symbol: 'BXMT',
    name: 'Blackstone Mortgage Trust Inc - Class A'
  },
  {
    symbol: 'BXP',
    name: 'Boston Properties Inc'
  },
  {
    symbol: 'BXRX',
    name: 'Baudax Bio Inc'
  },
  {
    symbol: 'BXS-P-A',
    name: 'BancorpSouth Bank'
  },
  {
    symbol: 'BXSL',
    name: 'Blackstone Secured Lending Fund.'
  },
  {
    symbol: 'BY',
    name: 'Byline Bancorp Inc'
  },
  {
    symbol: 'BYD',
    name: 'Boyd Gaming Corp'
  },
  {
    symbol: 'BYFC',
    name: 'Broadway Financial Corp'
  },
  {
    symbol: 'BYN',
    name: 'Banyan Acquisition Corp - Class A'
  },
  {
    symbol: 'BYN-U',
    name: 'Banyan Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'BYN-WS',
    name: 'Banyan Acquisition Corp - Warrants (30/09/2028)'
  },
  {
    symbol: 'BYND',
    name: 'Beyond Meat Inc'
  },
  {
    symbol: 'BYNO',
    name: 'byNordic Acquisition Corporation - Class A'
  },
  {
    symbol: 'BYNOU',
    name: 'byNordic Acquisition Corporation - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'BYNOW',
    name: 'byNordic Acquisition Corporation - Warrants (01/07/2027)'
  },
  {
    symbol: 'BYRN',
    name: 'Byrna Technologies Inc'
  },
  {
    symbol: 'BYSI',
    name: 'BeyondSpring Inc'
  },
  {
    symbol: 'BYTS',
    name: 'BYTE Acquisition Corp - Class A'
  },
  {
    symbol: 'BYTSU',
    name: 'BYTE Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'BYTSW',
    name: 'BYTE Acquisition Corp - Warrants (18/03/2026)'
  },
  {
    symbol: 'BZ',
    name: 'Kanzhun Ltd'
  },
  {
    symbol: 'BZFD',
    name: 'BuzzFeed Inc - Class A'
  },
  {
    symbol: 'BZFDW',
    name: 'BuzzFeed Inc - Warrants (01/12/2026)'
  },
  {
    symbol: 'BZH',
    name: 'Beazer Homes USA Inc'
  },
  {
    symbol: 'BZUN',
    name: 'Baozun Inc'
  },
  {
    symbol: 'C',
    name: 'Citigroup Inc'
  },
  {
    symbol: 'C-P-J',
    name: 'Citigroup Inc'
  },
  {
    symbol: 'C-P-K',
    name: 'Citigroup Inc'
  },
  {
    symbol: 'C-P-N',
    name: 'Citigroup Capital VIII 7875 Fixed rate Floating Rate trust Preferred Securities TruPS'
  },
  {
    symbol: 'CAAP',
    name: 'Corporacion America Airports S.A.'
  },
  {
    symbol: 'CAAS',
    name: 'China Automotive Systems Inc'
  },
  {
    symbol: 'CABA',
    name: 'Cabaletta Bio Inc'
  },
  {
    symbol: 'CABO',
    name: 'Cable One Inc'
  },
  {
    symbol: 'CAC',
    name: 'Camden National Corp'
  },
  {
    symbol: 'CACC',
    name: 'Credit Acceptance Corp'
  },
  {
    symbol: 'CACI',
    name: 'Caci International Inc'
  },
  {
    symbol: 'CADE',
    name: 'Cadence Bancorporation - Class A'
  },
  {
    symbol: 'CADE-P-A',
    name: 'Cadence Bank'
  },
  {
    symbol: 'CADL',
    name: 'Candel Therapeutics Inc'
  },
  {
    symbol: 'CAE',
    name: 'Cae Inc'
  },
  {
    symbol: 'CAG',
    name: 'Conagra Brands Inc'
  },
  {
    symbol: 'CAH',
    name: 'Cardinal Health Inc'
  },
  {
    symbol: 'CAJ',
    name: 'Canon Inc'
  },
  {
    symbol: 'CAKE',
    name: 'Cheesecake Factory Inc'
  },
  {
    symbol: 'CAL',
    name: 'Caleres Inc'
  },
  {
    symbol: 'CALA',
    name: 'Calithera Biosciences Inc'
  },
  {
    symbol: 'CALB',
    name: 'California Bancorp'
  },
  {
    symbol: 'CALM',
    name: 'Cal-Maine Foods Inc'
  },
  {
    symbol: 'CALT',
    name: 'Calliditas Therapeutics AB'
  },
  {
    symbol: 'CALX',
    name: 'Calix Inc'
  },
  {
    symbol: 'CAMP',
    name: 'Calamp Corp'
  },
  {
    symbol: 'CAMT',
    name: 'Camtek Ltd'
  },
  {
    symbol: 'CAN',
    name: 'Canaan Inc'
  },
  {
    symbol: 'CANB',
    name: 'Can B Corp'
  },
  {
    symbol: 'CANF',
    name: 'Can-Fite Biopharma Ltd'
  },
  {
    symbol: 'CANG',
    name: 'Cango Inc'
  },
  {
    symbol: 'CANO',
    name: 'Cano Health Inc - Class A'
  },
  {
    symbol: 'CANO-WS',
    name: 'Cano Health Inc Warrants'
  },
  {
    symbol: 'CAPL',
    name: 'CrossAmerica Partners LP'
  },
  {
    symbol: 'CAPR',
    name: 'Capricor Therapeutics Inc'
  },
  {
    symbol: 'CAR',
    name: 'Avis Budget Group Inc'
  },
  {
    symbol: 'CARA',
    name: 'Cara Therapeutics Inc'
  },
  {
    symbol: 'CARE',
    name: 'Carter Bankshares Inc'
  },
  {
    symbol: 'CARG',
    name: 'CarGurus Inc - Class A'
  },
  {
    symbol: 'CARR',
    name: 'Carrier Global Corp'
  },
  {
    symbol: 'CARS',
    name: 'Cars.com'
  },
  {
    symbol: 'CARV',
    name: 'Carver Bancorp Inc'
  },
  {
    symbol: 'CAS-WS',
    name: 'Cascade Acquisition Corp Redeemable Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50'
  },
  {
    symbol: 'CASA',
    name: 'Casa Systems Inc'
  },
  {
    symbol: 'CASH',
    name: 'Meta Financial Group Inc'
  },
  {
    symbol: 'CASI',
    name: 'CASI Pharmaceuticals Inc'
  },
  {
    symbol: 'CASS',
    name: 'Cass Information Systems Inc'
  },
  {
    symbol: 'CASY',
    name: 'Casey`s General Stores Inc'
  },
  {
    symbol: 'CAT',
    name: 'Caterpillar Inc'
  },
  {
    symbol: 'CATC',
    name: 'Cambridge Bancorp'
  },
  {
    symbol: 'CATO',
    name: 'Cato Corp - Class A'
  },
  {
    symbol: 'CATY',
    name: 'Cathay General Bancorp'
  },
  {
    symbol: 'CB',
    name: 'Chubb Ltd'
  },
  {
    symbol: 'CBAN',
    name: 'Colony Bankcorp Inc'
  },
  {
    symbol: 'CBAT',
    name: 'CBAK Energy Technology Inc'
  },
  {
    symbol: 'CBAY',
    name: 'Cymabay Therapeutics Inc'
  },
  {
    symbol: 'CBD',
    name: 'Cia Brasileira De Distr-pao De Acucar ADR ()'
  },
  {
    symbol: 'CBD-W',
    name: 'Companhia Brasileira de Distribuicao American Depositary Shares ExDistribution When Issued'
  },
  {
    symbol: 'CBFV',
    name: 'CB Financial Services Inc'
  },
  {
    symbol: 'CBIO',
    name: 'Catalyst Biosciences Inc'
  },
  {
    symbol: 'CBL',
    name: 'CBL& Associates Properties Inc - New'
  },
  {
    symbol: 'CBNK',
    name: 'Capital Bancorp Inc'
  },
  {
    symbol: 'CBO',
    name: 'NYSE LISTED TEST STOCK FOR CTS AND CQS'
  },
  {
    symbol: 'CBO-P-A',
    name: ''
  },
  {
    symbol: 'CBOE',
    name: 'Cboe Global Markets Inc'
  },
  {
    symbol: 'CBRE',
    name: 'CBRE Group Inc - Class A'
  },
  {
    symbol: 'CBRG',
    name: 'Chain Bridge I - Class A'
  },
  {
    symbol: 'CBRGU',
    name: 'Chain Bridge I - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'CBRGW',
    name: 'Chain Bridge I - Warrants (10/11/2026)'
  },
  {
    symbol: 'CBRL',
    name: 'Cracker Barrel Old Country Store Inc'
  },
  {
    symbol: 'CBSH',
    name: 'Commerce Bancshares Inc'
  },
  {
    symbol: 'CBT',
    name: 'Cabot Corp'
  },
  {
    symbol: 'CBTX',
    name: 'CBTX Inc'
  },
  {
    symbol: 'CBU',
    name: 'Community Bank System Inc'
  },
  {
    symbol: 'CBX',
    name: 'NYSE LISTED TEST'
  },
  {
    symbol: 'CBZ',
    name: 'Cbiz Inc'
  },
  {
    symbol: 'CC',
    name: 'Chemours Company'
  },
  {
    symbol: 'CCAC-U',
    name: 'CITIC Capital Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'CCAI',
    name: 'Cascadia Acquisition Corp - Class A'
  },
  {
    symbol: 'CCAIU',
    name: 'Cascadia Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'CCAIW',
    name: 'Cascadia Acquisition Corp - Warrants (30/09/2028)'
  },
  {
    symbol: 'CCAP',
    name: 'Crescent Capital BDC Inc'
  },
  {
    symbol: 'CCB',
    name: 'Coastal Financial Corp'
  },
  {
    symbol: 'CCBG',
    name: 'Capital City Bank Group Inc'
  },
  {
    symbol: 'CCC-WS',
    name: 'Churchill Capital Corp Wt Exp 2023'
  },
  {
    symbol: 'CCCC',
    name: 'C4 Therapeutics Inc'
  },
  {
    symbol: 'CCCS',
    name: 'CCC Intelligent Solutions Holdings Inc'
  },
  {
    symbol: 'CCCS-WS',
    name: 'CCC Intelligent Solutions Holdings Inc Warrants'
  },
  {
    symbol: 'CCEL',
    name: 'Cryo-Cell International Inc'
  },
  {
    symbol: 'CCEP',
    name: 'Coca-Cola Europacific Partners Plc'
  },
  {
    symbol: 'CCF',
    name: 'Chase Corp'
  },
  {
    symbol: 'CCI',
    name: 'Crown Castle International Corp'
  },
  {
    symbol: 'CCI-P-A',
    name: 'Crown Castle International Corporation 6875 Mandatory Convertible Preferred Stock Series A'
  },
  {
    symbol: 'CCJ',
    name: 'Cameco Corp'
  },
  {
    symbol: 'CCK',
    name: 'Crown Holdings Inc'
  },
  {
    symbol: 'CCL',
    name: 'Carnival Corp (Paired Stock)'
  },
  {
    symbol: 'CCLP',
    name: 'CSI Compressco LP'
  },
  {
    symbol: 'CCM',
    name: 'Concord Medical Services'
  },
  {
    symbol: 'CCMP',
    name: 'CMC Materials Inc'
  },
  {
    symbol: 'CCNC',
    name: 'Code Chain New Continent Ltd'
  },
  {
    symbol: 'CCNE',
    name: 'CNB Financial Corp (PA)'
  },
  {
    symbol: 'CCNEP',
    name: 'CNB Financial Corp (PA)'
  },
  {
    symbol: 'CCO',
    name: 'Clear Channel Outdoor Holdings Inc'
  },
  {
    symbol: 'CCOI',
    name: 'Cogent Communications Holdings Inc'
  },
  {
    symbol: 'CCRD',
    name: 'CoreCard Corporation - Class A'
  },
  {
    symbol: 'CCRN',
    name: 'Cross Country Healthcares Inc'
  },
  {
    symbol: 'CCS',
    name: 'Century Communities Inc'
  },
  {
    symbol: 'CCSI',
    name: 'CHROMATICS COLOR SCIENCES INTERNATIONAL INC'
  },
  {
    symbol: 'CCSIV',
    name: 'Consensus Cloud Solutions Inc'
  },
  {
    symbol: 'CCTS',
    name: 'Cactus Acquisition Corp 1 Ltd - Class A'
  },
  {
    symbol: 'CCTSU',
    name: 'Cactus Acquisition Corp 1 Ltd - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'CCTSW',
    name: 'Cactus Acquisition Corp 1 Ltd - Warrants(17/08/2028)'
  },
  {
    symbol: 'CCU',
    name: 'Compania Cervecerias Unidas S.A.'
  },
  {
    symbol: 'CCV',
    name: 'Churchill Capital Corp V - Class A'
  },
  {
    symbol: 'CCV-U',
    name: 'Churchill Capital Corp V - Units (1 Ord Class A & 1/4 War)'
  },
  {
    symbol: 'CCV-WS',
    name: 'Churchill Capital Corp V - Warrants (29/10/2027)'
  },
  {
    symbol: 'CCVI',
    name: 'Churchill Capital Corp VI - Class A'
  },
  {
    symbol: 'CCVI-U',
    name: 'Churchill Capital Corp VI - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'CCVI-WS',
    name: 'Churchill Capital Corp VI - Warrants (01/01/9999)'
  },
  {
    symbol: 'CCXI',
    name: 'ChemoCentryx Inc'
  },
  {
    symbol: 'CCZ',
    name: 'Comcast Corp'
  },
  {
    symbol: 'CD',
    name: 'Chindata Group Holdings Ltd'
  },
  {
    symbol: 'CDAK',
    name: 'Codiak Biosciences Inc'
  },
  {
    symbol: 'CDAQ',
    name: 'Compass Digital Acquisition Corp - Class A'
  },
  {
    symbol: 'CDAQU',
    name: 'Compass Digital Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'CDAQW',
    name: 'Compass Digital Acquisition Corp - Warrants (29/09/2026)'
  },
  {
    symbol: 'CDAY',
    name: 'Ceridian HCM Holding Inc'
  },
  {
    symbol: 'CDE',
    name: 'Coeur Mining Inc'
  },
  {
    symbol: 'CDEV',
    name: 'Centennial Resource Development Inc - Class A'
  },
  {
    symbol: 'CDK',
    name: 'CDK Global Inc'
  },
  {
    symbol: 'CDLA',
    name: 'Candela Medical Inc'
  },
  {
    symbol: 'CDLX',
    name: 'Cardlytics Inc'
  },
  {
    symbol: 'CDMO',
    name: 'Avid Bioservices Inc'
  },
  {
    symbol: 'CDNA',
    name: 'Caredx Inc'
  },
  {
    symbol: 'CDNS',
    name: 'Cadence Design Systems Inc'
  },
  {
    symbol: 'CDR',
    name: 'Cedar Realty Trust Inc'
  },
  {
    symbol: 'CDR-P-B',
    name: 'Cedar Realty Trust Inc'
  },
  {
    symbol: 'CDR-P-C',
    name: 'Cedar Realty Trust Inc'
  },
  {
    symbol: 'CDRE',
    name: 'Cadre Holdings Inc'
  },
  {
    symbol: 'CDRO',
    name: 'Codere Online Luxembourg S.A'
  },
  {
    symbol: 'CDROW',
    name: 'Codere Online Luxembourg S.A - Warrants (23/11/2026)'
  },
  {
    symbol: 'CDTX',
    name: 'Cidara Therapeutics Inc'
  },
  {
    symbol: 'CDW',
    name: 'CDW Corp'
  },
  {
    symbol: 'CDXC',
    name: 'Chromadex Corp'
  },
  {
    symbol: 'CDXS',
    name: 'Codexis Inc'
  },
  {
    symbol: 'CDZI',
    name: 'Cadiz Inc'
  },
  {
    symbol: 'CDZIP',
    name: 'Cadiz Inc'
  },
  {
    symbol: 'CE',
    name: 'Celanese Corp - Series A'
  },
  {
    symbol: 'CEA',
    name: 'China Eastern Airlines Corporation Ltd'
  },
  {
    symbol: 'CEAD',
    name: 'CEA Industries Inc'
  },
  {
    symbol: 'CEADW',
    name: 'CEA Industries Inc - Warrants (11/02/2027)'
  },
  {
    symbol: 'CECE',
    name: 'Ceco Environmental Corp'
  },
  {
    symbol: 'CEFD',
    name: 'UBS AG London Branch'
  },
  {
    symbol: 'CEG',
    name: 'Constellation Energy Corporation'
  },
  {
    symbol: 'CEGVV',
    name: 'Constellation Energy Corporation'
  },
  {
    symbol: 'CEI',
    name: 'Camber Energy Inc'
  },
  {
    symbol: 'CEIX',
    name: 'Consol Energy Inc'
  },
  {
    symbol: 'CELC',
    name: 'Celcuity Inc'
  },
  {
    symbol: 'CELG-R',
    name: 'BristolMyers Squibb Company. Contingent Value Rt 12312030'
  },
  {
    symbol: 'CELGR',
    name: 'BristolMyers Squibb Company Celegne Contingent Value Rights'
  },
  {
    symbol: 'CELH',
    name: 'Celsius Holdings Inc'
  },
  {
    symbol: 'CELU',
    name: 'Celularity Inc - Class A'
  },
  {
    symbol: 'CELUW',
    name: 'Celularity Inc - Warrants (16/07/2026)'
  },
  {
    symbol: 'CELZ',
    name: 'Creative Medical Technology Holdings Inc'
  },
  {
    symbol: 'CEMI',
    name: 'Chembio Diagnostics Inc'
  },
  {
    symbol: 'CENN',
    name: 'Cenntro Electric Group Ltd'
  },
  {
    symbol: 'CENQ',
    name: 'CENAQ Energy Corp - Class A'
  },
  {
    symbol: 'CENQU',
    name: 'CENAQ Energy Corp - Units (1 Ord Class A & 0.75 War)'
  },
  {
    symbol: 'CENQW',
    name: 'CENAQ Energy Corp - Warrants (04/02/2026)'
  },
  {
    symbol: 'CENT',
    name: 'Central Garden & Pet Company'
  },
  {
    symbol: 'CENTA',
    name: 'Central Garden & Pet Co. - Class A'
  },
  {
    symbol: 'CENX',
    name: 'Century Aluminum Company'
  },
  {
    symbol: 'CEPU',
    name: 'Central Puerto'
  },
  {
    symbol: 'CEQP',
    name: 'Crestwood Equity Partners LP'
  },
  {
    symbol: 'CEQP-P',
    name: 'Crestwood Equity Partners LP Preferred Units representing limited partner interests'
  },
  {
    symbol: 'CERE',
    name: 'Cerevel Therapeutics Holdings Inc'
  },
  {
    symbol: 'CEREW',
    name: 'Cerevel Therapeutics Holdings Inc - Warrants (27/10/2025)'
  },
  {
    symbol: 'CERS',
    name: 'Cerus Corp'
  },
  {
    symbol: 'CERT',
    name: 'Certara Inc'
  },
  {
    symbol: 'CETX',
    name: 'Cemtrex Inc'
  },
  {
    symbol: 'CETXP',
    name: 'Cemtrex Inc'
  },
  {
    symbol: 'CEVA',
    name: 'Ceva Inc'
  },
  {
    symbol: 'CF',
    name: 'CF Industries Holdings Inc'
  },
  {
    symbol: 'CFB',
    name: 'Crossfirst Bankshares Inc'
  },
  {
    symbol: 'CFBK',
    name: 'CF Bankshares Inc'
  },
  {
    symbol: 'CFFE',
    name: 'CF Acquisition Corp VIII - Class A'
  },
  {
    symbol: 'CFFEU',
    name: 'CF Acquisition Corp VIII - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'CFFEW',
    name: 'CF Acquisition Corp VIII - Warrants (31/03/2028)'
  },
  {
    symbol: 'CFFI',
    name: 'C & F Financial Corp'
  },
  {
    symbol: 'CFFN',
    name: 'Capitol Federal Financial'
  },
  {
    symbol: 'CFFS',
    name: 'CF Acquisition Corp VII - Class A'
  },
  {
    symbol: 'CFFSU',
    name: 'CF Acquisition Corp VII - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'CFFSW',
    name: 'CF Acquisition Corp VII - Warrants (31/03/2028)'
  },
  {
    symbol: 'CFG',
    name: 'Citizens Financial Group Inc'
  },
  {
    symbol: 'CFG-P-D',
    name: 'Citizens Financial Group Inc Depositary Shares Series D'
  },
  {
    symbol: 'CFG-P-E',
    name: 'Citizens Financial Group Inc'
  },
  {
    symbol: 'CFIV',
    name: 'CF Acquisition Corp IV - Class A'
  },
  {
    symbol: 'CFIVU',
    name: 'CF Acquisition Corp IV - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'CFIVW',
    name: 'CF Acquisition Corp IV - Warrants (31/12/2027)'
  },
  {
    symbol: 'CFLT',
    name: 'Confluent Inc Class A'
  },
  {
    symbol: 'CFMS',
    name: 'Conformis Inc'
  },
  {
    symbol: 'CFR',
    name: 'Cullen Frost Bankers Inc'
  },
  {
    symbol: 'CFR-P-A',
    name: 'CullenFrost Bankers Inc Perpetual Preferred Series A'
  },
  {
    symbol: 'CFR-P-A-CL',
    name: 'CullenFrost Bankers Inc. Perpetual Preferred Series A'
  },
  {
    symbol: 'CFR-P-B',
    name: 'Cullen Frost Bankers Inc'
  },
  {
    symbol: 'CFRX',
    name: 'ContraFect Corp'
  },
  {
    symbol: 'CFSB',
    name: 'CFSB Bancorp Inc'
  },
  {
    symbol: 'CFVI',
    name: 'CF Acquisition Corp VI - Class A'
  },
  {
    symbol: 'CFVIU',
    name: 'CF Acquisition Corp VI - Units (1 Ord Class A & 1/4 War)'
  },
  {
    symbol: 'CFVIW',
    name: 'CF Acquisition Corp VI - Warrants (17/02/2026)'
  },
  {
    symbol: 'CG',
    name: 'Carlyle Group Inc (The)'
  },
  {
    symbol: 'CGA',
    name: 'China Green Agriculture Inc'
  },
  {
    symbol: 'CGABL',
    name: 'Carlyle Finance LLC'
  },
  {
    symbol: 'CGAU',
    name: 'Centerra Gold Inc'
  },
  {
    symbol: 'CGBD',
    name: 'Carlyle Secured Lending Inc'
  },
  {
    symbol: 'CGC',
    name: 'Canopy Growth Corporation'
  },
  {
    symbol: 'CGEM',
    name: 'Cullinan Oncology Inc'
  },
  {
    symbol: 'CGEN',
    name: 'Compugen Ltd'
  },
  {
    symbol: 'CGNT',
    name: 'Cognyte Software Ltd'
  },
  {
    symbol: 'CGNX',
    name: 'Cognex Corp'
  },
  {
    symbol: 'CGRN',
    name: 'Capstone Green Energy Corp'
  },
  {
    symbol: 'CGTX',
    name: 'Cognition Therapeutics Inc'
  },
  {
    symbol: 'CHAA',
    name: 'Catcha Investment Corp - Class A'
  },
  {
    symbol: 'CHAA-U',
    name: 'Catcha Investment Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'CHAA-WS',
    name: 'Catcha Investment Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'CHCI',
    name: 'Comstock Holding Co. Inc - Class A'
  },
  {
    symbol: 'CHCO',
    name: 'City Holding Company'
  },
  {
    symbol: 'CHCT',
    name: 'Community Healthcare Trust Inc'
  },
  {
    symbol: 'CHD',
    name: 'Church & Dwight Co. Inc'
  },
  {
    symbol: 'CHDN',
    name: 'Churchill Downs Inc'
  },
  {
    symbol: 'CHE',
    name: 'Chemed Corp'
  },
  {
    symbol: 'CHEA',
    name: 'Chenghe Acquisition Co - Class A'
  },
  {
    symbol: 'CHEAU',
    name: 'Chenghe Acquisition Co - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'CHEAW',
    name: 'Chenghe Acquisition Co - Warrants(22/04/2027)'
  },
  {
    symbol: 'CHEF',
    name: 'Chefs` Warehouse Inc'
  },
  {
    symbol: 'CHEK',
    name: 'Check-Cap Ltd'
  },
  {
    symbol: 'CHEKZ',
    name: 'CheckCap Ltd Warrants Series C 03052023'
  },
  {
    symbol: 'CHGG',
    name: 'Chegg Inc'
  },
  {
    symbol: 'CHH',
    name: 'Choice Hotels International Inc'
  },
  {
    symbol: 'CHK',
    name: 'Chesapeake Energy Corp - New'
  },
  {
    symbol: 'CHKEL',
    name: 'Chesapeake Energy Corp - Warrants - Class C (01/03/2026)'
  },
  {
    symbol: 'CHKEW',
    name: 'Chesapeake Energy Corp - Warrants - Class A (01/03/2026)'
  },
  {
    symbol: 'CHKEZ',
    name: 'Chesapeake Energy Corp - Warrants - Class B (01/03/2026)'
  },
  {
    symbol: 'CHKP',
    name: 'Check Point Software Technolgies'
  },
  {
    symbol: 'CHMG',
    name: 'Chemung Financial Corp'
  },
  {
    symbol: 'CHMI',
    name: 'Cherry Hill Mortgage Investment Corporation'
  },
  {
    symbol: 'CHMI-P-A',
    name: 'Cherry Hill Mortgage Investment Corporation'
  },
  {
    symbol: 'CHMI-P-B',
    name: 'Cherry Hill Mortgage Investment Corporation'
  },
  {
    symbol: 'CHNG',
    name: 'Change Healthcare Inc'
  },
  {
    symbol: 'CHNGV',
    name: 'Change Healthcare Inc'
  },
  {
    symbol: 'CHNR',
    name: 'China Natural Resources Inc'
  },
  {
    symbol: 'CHPT',
    name: 'ChargePoint Holdings Inc - Class A'
  },
  {
    symbol: 'CHRA',
    name: 'Charah Solutions Inc'
  },
  {
    symbol: 'CHRB',
    name: 'Charah Solutions Inc'
  },
  {
    symbol: 'CHRD',
    name: 'Chord Energy Corp - New'
  },
  {
    symbol: 'CHRS',
    name: 'Coherus Biosciences Inc'
  },
  {
    symbol: 'CHRW',
    name: 'C.H. Robinson Worldwide Inc'
  },
  {
    symbol: 'CHS',
    name: 'Chico`s Fas Inc'
  },
  {
    symbol: 'CHSCL',
    name: 'CHS Inc'
  },
  {
    symbol: 'CHSCM',
    name: 'CHS Inc'
  },
  {
    symbol: 'CHSCN',
    name: 'CHS Inc'
  },
  {
    symbol: 'CHSCO',
    name: 'CHS Inc'
  },
  {
    symbol: 'CHSCP',
    name: 'CHS Inc'
  },
  {
    symbol: 'CHT',
    name: 'Chunghwa Telecom'
  },
  {
    symbol: 'CHTR',
    name: 'Charter Communications Inc - Class A'
  },
  {
    symbol: 'CHUY',
    name: 'Chuy`s Holdings Inc'
  },
  {
    symbol: 'CHWA',
    name: 'CHW Acquisition Corp'
  },
  {
    symbol: 'CHWAU',
    name: 'CHW Acquisition Corp - Units (1 Ord & 1 War)'
  },
  {
    symbol: 'CHWAW',
    name: 'CHW Acquisition Corp - Warrants (01/03/2028)'
  },
  {
    symbol: 'CHWY',
    name: 'Chewy Inc - Class A'
  },
  {
    symbol: 'CHX',
    name: 'ChampionX Corporation'
  },
  {
    symbol: 'CHX-W',
    name: 'ChampionX Corporation Additional Shares When Issued'
  },
  {
    symbol: 'CI',
    name: 'Cigna Corp'
  },
  {
    symbol: 'CIA',
    name: 'Citizens Inc - Class A'
  },
  {
    symbol: 'CIAN',
    name: 'Cian Plc'
  },
  {
    symbol: 'CIB',
    name: 'Bancolombia S.A.'
  },
  {
    symbol: 'CIDM',
    name: 'Cinedigm Corp - Class A'
  },
  {
    symbol: 'CIEN',
    name: 'CIENA Corp'
  },
  {
    symbol: 'CIFR',
    name: 'Cipher Mining Inc'
  },
  {
    symbol: 'CIFRW',
    name: 'Cipher Mining Inc - Warrants (26/08/2026)'
  },
  {
    symbol: 'CIG',
    name: 'Cia Energetica De Minas Gerais'
  },
  {
    symbol: 'CIG-C',
    name: 'Cia Energetica De Minas Gerais'
  },
  {
    symbol: 'CIGI',
    name: 'Colliers International Group Inc'
  },
  {
    symbol: 'CIH',
    name: 'China Index Holdings Ltd'
  },
  {
    symbol: 'CIIG',
    name: 'CIIG Capital Partners II Inc - Class A'
  },
  {
    symbol: 'CIIGU',
    name: 'CIIG Capital Partners II Inc - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'CIIGW',
    name: 'CIIG Capital Partners II Inc - Warrants (28/02/2028)'
  },
  {
    symbol: 'CIM',
    name: 'Chimera Investment Corp'
  },
  {
    symbol: 'CIM-P-A',
    name: 'Chimera Investment Corp'
  },
  {
    symbol: 'CIM-P-B',
    name: 'Chimera Investment Corp'
  },
  {
    symbol: 'CIM-P-C',
    name: 'Chimera Investment Corp'
  },
  {
    symbol: 'CIM-P-D',
    name: 'Chimera Investment Corp'
  },
  {
    symbol: 'CINC',
    name: 'CinCor Pharma Inc'
  },
  {
    symbol: 'CINF',
    name: 'Cincinnati Financial Corp'
  },
  {
    symbol: 'CING',
    name: 'Cingulate Inc'
  },
  {
    symbol: 'CINGW',
    name: 'Cingulate Inc - Warrants (03/12/2026)'
  },
  {
    symbol: 'CINT',
    name: 'CI&T Inc Class A'
  },
  {
    symbol: 'CIO',
    name: 'City Office REIT Inc'
  },
  {
    symbol: 'CIO-P-A',
    name: 'City Office REIT Inc'
  },
  {
    symbol: 'CION',
    name: 'CION Invt Corp'
  },
  {
    symbol: 'CIR',
    name: 'Circor International Inc'
  },
  {
    symbol: 'CISO',
    name: 'Cerberus Cyber Sentinel Corp'
  },
  {
    symbol: 'CITE',
    name: 'Cartica Acquisition Corp - Class A'
  },
  {
    symbol: 'CITEU',
    name: 'Cartica Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'CITEW',
    name: 'Cartica Acquisition Corp - Warrants (30/04/2028)'
  },
  {
    symbol: 'CIVB',
    name: 'Civista Bancshares Inc'
  },
  {
    symbol: 'CIVBP',
    name: 'Civista Bancshares Inc'
  },
  {
    symbol: 'CIVI',
    name: 'Civitas Resources Inc New'
  },
  {
    symbol: 'CIX',
    name: 'Compx International Inc - Class A'
  },
  {
    symbol: 'CIXX',
    name: 'CI Financial Corp'
  },
  {
    symbol: 'CIZN',
    name: 'Citizens Holding Company'
  },
  {
    symbol: 'CJJD',
    name: 'China Jo-Jo Drugstores Inc'
  },
  {
    symbol: 'CKPT',
    name: 'Checkpoint Therapeutics Inc'
  },
  {
    symbol: 'CKX',
    name: 'CKX Lands Inc'
  },
  {
    symbol: 'CL',
    name: 'Colgate-Palmolive Company'
  },
  {
    symbol: 'CLA-U',
    name: 'Colonnade Acquisition Corp Units each consisting of one Class A ordinary share and onehalf of one redeemable warrant'
  },
  {
    symbol: 'CLAA',
    name: 'Colonnade Acquisition Corp II - Class A'
  },
  {
    symbol: 'CLAA-U',
    name: 'Colonnade Acquisition Corp II - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'CLAA-WS',
    name: 'Colonnade Acquisition Corp II - Warrants (01/01/9999)'
  },
  {
    symbol: 'CLAQ',
    name: 'CleanTech Acquisition Corp'
  },
  {
    symbol: 'CLAQR',
    name: 'CleanTech Acquisition Corp'
  },
  {
    symbol: 'CLAQU',
    name: 'CleanTech Acquisition Corp - Units (1 Ord Share 1 Rts & 1/2 War)'
  },
  {
    symbol: 'CLAQW',
    name: 'CleanTech Acquisition Corp - Warrants (30/07/2026)'
  },
  {
    symbol: 'CLAR',
    name: 'Clarus Corp'
  },
  {
    symbol: 'CLAS',
    name: 'Class Acceleration Corp - Class A'
  },
  {
    symbol: 'CLAS-U',
    name: 'Class Acceleration Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'CLAS-WS',
    name: 'Class Acceleration Corp - Warrants (31/03/2028)'
  },
  {
    symbol: 'CLAY',
    name: 'Chavant Capital Acquisition Corp'
  },
  {
    symbol: 'CLAYU',
    name: 'Chavant Capital Acquisition Corp - Units (1 Ord Share & 3/4 War)'
  },
  {
    symbol: 'CLAYW',
    name: 'Chavant Capital Acquisition Corp - Warrants (16/07/2021)'
  },
  {
    symbol: 'CLB',
    name: 'Core Laboratories N.V.'
  },
  {
    symbol: 'CLBK',
    name: 'Columbia Financial Inc'
  },
  {
    symbol: 'CLBR',
    name: 'Colombier Acquisition Corp - Class A'
  },
  {
    symbol: 'CLBR-U',
    name: 'Colombier Acquisition Corp Units each consisting of one share of Class A common stock and onethird of one redeemable warrant'
  },
  {
    symbol: 'CLBR-WS',
    name: 'Colombier Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'CLBS',
    name: 'Caladrius Biosciences Inc'
  },
  {
    symbol: 'CLBT',
    name: 'Cellebrite DI Ltd'
  },
  {
    symbol: 'CLBTW',
    name: 'Cellebrite DI Ltd - Warrants (30/08/2026)'
  },
  {
    symbol: 'CLDT',
    name: 'Chatham Lodging Trust'
  },
  {
    symbol: 'CLDT-P-A',
    name: 'Chatham Lodging Trust'
  },
  {
    symbol: 'CLDX',
    name: 'Celldex Therapeutics Inc'
  },
  {
    symbol: 'CLEU',
    name: 'China Liberal Education Holdings Ltd'
  },
  {
    symbol: 'CLF',
    name: 'Cleveland-Cliffs Inc'
  },
  {
    symbol: 'CLFD',
    name: 'Clearfield Inc'
  },
  {
    symbol: 'CLGN',
    name: 'CollPlant Biotechnologies Ltd New'
  },
  {
    symbol: 'CLH',
    name: 'Clean Harbors Inc'
  },
  {
    symbol: 'CLIM',
    name: 'Climate Real Impact Solutions II Acquisition Corp - Class A'
  },
  {
    symbol: 'CLIM-U',
    name: 'Climate Real Impact Solutions II Acquisition Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'CLIM-WS',
    name: 'Climate Real Impact Solutions II Acquisition Corp - Warrants (29/01/2026)'
  },
  {
    symbol: 'CLIN',
    name: 'Clean Earth Acquisitions Corp - Class A'
  },
  {
    symbol: 'CLINR',
    name: 'Clean Earth Acquisitions Corp'
  },
  {
    symbol: 'CLINU',
    name: 'Clean Earth Acquisitions Corp - Units (1 Ord Share Class A 1 Right & 1/2 War)'
  },
  {
    symbol: 'CLINW',
    name: 'Clean Earth Acquisitions Corp - Warrants (01/01/2022)'
  },
  {
    symbol: 'CLIR',
    name: 'ClearSign Technologies Corp'
  },
  {
    symbol: 'CLLS',
    name: 'Cellectis'
  },
  {
    symbol: 'CLMT',
    name: 'Calumet Specialty Products Partners L.P.'
  },
  {
    symbol: 'CLNE',
    name: 'Clean Energy Fuels Corp'
  },
  {
    symbol: 'CLNN',
    name: 'Clene Inc'
  },
  {
    symbol: 'CLNNW',
    name: 'Clene Inc - Warrants (30/12/2025)'
  },
  {
    symbol: 'CLNY-P-B',
    name: 'Colony Capital Inc 825 Series B cumulative redeemable perpetual preferred stock'
  },
  {
    symbol: 'CLNY-P-B-CL',
    name: ''
  },
  {
    symbol: 'CLNY-P-E',
    name: 'Colony Capital Inc 875 Series E cumulative redeemable perpetual preferred stock'
  },
  {
    symbol: 'CLNY-P-E-CL',
    name: ''
  },
  {
    symbol: 'CLNY-P-H',
    name: 'Colony Capital Inc'
  },
  {
    symbol: 'CLNY-P-J',
    name: 'Colony Capital Inc'
  },
  {
    symbol: 'CLOE',
    name: 'Clover Leaf Capital Corp - Class A'
  },
  {
    symbol: 'CLOER',
    name: 'Clover Leaf Capital Corp'
  },
  {
    symbol: 'CLOEU',
    name: 'Clover Leaf Capital Corp - Units (1 Ord Share Class A & 1 Right)'
  },
  {
    symbol: 'CLOV',
    name: 'Clover Health Investments Corp - Class A'
  },
  {
    symbol: 'CLOVW',
    name: 'Clover Health Investments Corp - Warrants (23/08/2021)'
  },
  {
    symbol: 'CLPR',
    name: 'Clipper Realty Inc'
  },
  {
    symbol: 'CLPS',
    name: 'CLPS Inc'
  },
  {
    symbol: 'CLPT',
    name: 'ClearPoint Neuro Inc'
  },
  {
    symbol: 'CLR',
    name: 'Continental Resources Inc (OKLA)'
  },
  {
    symbol: 'CLRB',
    name: 'Cellectar Biosciences Inc'
  },
  {
    symbol: 'CLRC',
    name: 'ClimateRock - Class A'
  },
  {
    symbol: 'CLRCR',
    name: 'ClimateRock'
  },
  {
    symbol: 'CLRCU',
    name: 'ClimateRock - Units (1 Ord Class A 1 Rts & 1/2 War)'
  },
  {
    symbol: 'CLRCW',
    name: 'ClimateRock - Warrants(25/04/2027)'
  },
  {
    symbol: 'CLRM',
    name: 'Clarim Acquisition Corp - Class A'
  },
  {
    symbol: 'CLRMU',
    name: 'Clarim Acquisition Corp - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'CLRMW',
    name: 'Clarim Acquisition Corp - Warrants (05/01/2026)'
  },
  {
    symbol: 'CLRO',
    name: 'ClearOne Inc'
  },
  {
    symbol: 'CLS',
    name: 'Celestica Inc'
  },
  {
    symbol: 'CLSD',
    name: 'Clearside Biomedical Inc'
  },
  {
    symbol: 'CLSK',
    name: 'Cleanspark Inc'
  },
  {
    symbol: 'CLSN',
    name: 'Celsion Corp'
  },
  {
    symbol: 'CLST',
    name: 'Catalyst Bancorp Inc'
  },
  {
    symbol: 'CLVR',
    name: 'Clever Leaves Holdings Inc'
  },
  {
    symbol: 'CLVRW',
    name: 'Clever Leaves Holdings Inc - Warrants (18/12/2025)'
  },
  {
    symbol: 'CLVS',
    name: 'Clovis Oncology Inc'
  },
  {
    symbol: 'CLVT',
    name: 'Clarivate Plc'
  },
  {
    symbol: 'CLVT-P-A',
    name: 'Clarivate Plc'
  },
  {
    symbol: 'CLW',
    name: 'Clearwater Paper Corp'
  },
  {
    symbol: 'CLWT',
    name: 'Euro Tech Holdings Co. Ltd'
  },
  {
    symbol: 'CLX',
    name: 'Clorox Company'
  },
  {
    symbol: 'CLXT',
    name: 'Calyxt Inc'
  },
  {
    symbol: 'CM',
    name: 'Canadian Imperial Bank Of Commerce'
  },
  {
    symbol: 'CMA',
    name: 'Comerica Inc'
  },
  {
    symbol: 'CMAX',
    name: 'CareMax Inc - Class A'
  },
  {
    symbol: 'CMAXW',
    name: 'CareMax Inc - Warrants (08/06/2026)'
  },
  {
    symbol: 'CMBM',
    name: 'Cambium Networks Corp'
  },
  {
    symbol: 'CMC',
    name: 'Commercial Metals Company'
  },
  {
    symbol: 'CMCA',
    name: 'Capitalworks Emerging Markets Acquisition Corp - Class A'
  },
  {
    symbol: 'CMCAU',
    name: 'Capitalworks Emerging Markets Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'CMCAW',
    name: 'Capitalworks Emerging Markets Acquisition Corp - Warrants (19/11/2026)'
  },
  {
    symbol: 'CMCL',
    name: 'Caledonia Mining Corporation Plc'
  },
  {
    symbol: 'CMCM',
    name: 'Cheetah Mobile Inc'
  },
  {
    symbol: 'CMCO',
    name: 'Columbus Mckinnon Corp'
  },
  {
    symbol: 'CMCSA',
    name: 'Comcast Corp - Class A'
  },
  {
    symbol: 'CMCT',
    name: 'Creative Media & Community Trust'
  },
  {
    symbol: 'CMCTP',
    name: 'Creative Media & Community Trust'
  },
  {
    symbol: 'CME',
    name: 'CME Group Inc - Class A'
  },
  {
    symbol: 'CMG',
    name: 'Chipotle Mexican Grill'
  },
  {
    symbol: 'CMI',
    name: 'Cummins Inc'
  },
  {
    symbol: 'CMLS',
    name: 'Cumulus Media Inc - Class A'
  },
  {
    symbol: 'CMLT',
    name: 'EQRx Inc - Class A'
  },
  {
    symbol: 'CMMB',
    name: 'Chemomab Therapeutics Ltd'
  },
  {
    symbol: 'CMP',
    name: 'Compass Minerals International Inc'
  },
  {
    symbol: 'CMPO',
    name: 'CompoSecure Inc - Class A'
  },
  {
    symbol: 'CMPOW',
    name: 'CompoSecure Inc - Warrants (27/12/2026)'
  },
  {
    symbol: 'CMPR',
    name: 'Cimpress plc'
  },
  {
    symbol: 'CMPS',
    name: 'Compass Pathways Plc'
  },
  {
    symbol: 'CMPX',
    name: 'Compass Therapeutics Inc'
  },
  {
    symbol: 'CMRA',
    name: 'Comera Life Sciences Holdings Inc'
  },
  {
    symbol: 'CMRAW',
    name: 'Comera Life Sciences Holdings Inc - Warrants (19/05/2027)'
  },
  {
    symbol: 'CMRE',
    name: 'Costamare Inc'
  },
  {
    symbol: 'CMRE-P-B',
    name: 'Costamare Inc'
  },
  {
    symbol: 'CMRE-P-C',
    name: 'Costamare Inc'
  },
  {
    symbol: 'CMRE-P-D',
    name: 'Costamare Inc'
  },
  {
    symbol: 'CMRE-P-E',
    name: 'Costamare Inc'
  },
  {
    symbol: 'CMRX',
    name: 'Chimerix Inc'
  },
  {
    symbol: 'CMS',
    name: 'CMS Energy Corporation'
  },
  {
    symbol: 'CMS-P-B',
    name: 'Consumers Energy Company'
  },
  {
    symbol: 'CMS-P-C',
    name: 'CMS Energy Corporation'
  },
  {
    symbol: 'CMSA',
    name: 'CMS Energy Corporation'
  },
  {
    symbol: 'CMSC',
    name: 'CMS Energy Corporation'
  },
  {
    symbol: 'CMSD',
    name: 'CMS Energy Corporation'
  },
  {
    symbol: 'CMT',
    name: 'Core Molding Technologies'
  },
  {
    symbol: 'CMTG',
    name: 'Claros Mortgage Trust Inc'
  },
  {
    symbol: 'CMTL',
    name: 'Comtech Telecommunications Corp'
  },
  {
    symbol: 'CNA',
    name: 'CNA Financial Corp'
  },
  {
    symbol: 'CNC',
    name: 'Centene Corp'
  },
  {
    symbol: 'CNCE',
    name: 'Concert Pharmaceuticals Inc'
  },
  {
    symbol: 'CND',
    name: 'Concord Acquisition Corp - Class A'
  },
  {
    symbol: 'CND-U',
    name: 'Concord Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'CND-WS',
    name: 'Concord Acquisition Corp - Warrants (28/11/2025)'
  },
  {
    symbol: 'CNDA',
    name: 'Concord Acquisition Corp II - Class A'
  },
  {
    symbol: 'CNDA-U',
    name: 'Concord Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'CNDA-WS',
    name: 'Concord Acquisition Corp II - Warrants(01/01/9999)'
  },
  {
    symbol: 'CNDB',
    name: 'Concord Acquisition Corp III - Class A'
  },
  {
    symbol: 'CNDB-U',
    name: 'Concord Acquisition Corp III - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'CNDB-WS',
    name: 'Concord Acquisition Corp III - Warrants (01/01/9999)'
  },
  {
    symbol: 'CNDT',
    name: 'Conduent Inc'
  },
  {
    symbol: 'CNET',
    name: 'ZW Data Action Technologies Inc'
  },
  {
    symbol: 'CNEY',
    name: 'CN Energy Group Inc'
  },
  {
    symbol: 'CNF',
    name: 'CNFinance Holdings Ltd'
  },
  {
    symbol: 'CNFR',
    name: 'Conifer Holdings Inc'
  },
  {
    symbol: 'CNFRL',
    name: 'Conifer Holdings Inc'
  },
  {
    symbol: 'CNGL',
    name: 'Canna Global Acquisition Corp - Class A'
  },
  {
    symbol: 'CNGLU',
    name: 'Canna Global Acquisition Corp - Units (1 Ord Share Class A & 1 War)'
  },
  {
    symbol: 'CNGLW',
    name: 'Canna Global Acquisition Corp - Warrants (30/11/2026)'
  },
  {
    symbol: 'CNHI',
    name: 'CNH Industrial NV'
  },
  {
    symbol: 'CNI',
    name: 'Canadian National Railway Company'
  },
  {
    symbol: 'CNK',
    name: 'Cinemark Holdings Inc'
  },
  {
    symbol: 'CNM',
    name: 'Core & Main Inc Class A'
  },
  {
    symbol: 'CNMD',
    name: 'Conmed Corp'
  },
  {
    symbol: 'CNNB',
    name: 'Cincinnati Bancorp Inc'
  },
  {
    symbol: 'CNNE',
    name: 'Cannae Holdings Inc'
  },
  {
    symbol: 'CNO',
    name: 'CNO Financial Group Inc'
  },
  {
    symbol: 'CNO-P-A',
    name: 'CNO Financial Group Inc'
  },
  {
    symbol: 'CNOB',
    name: 'ConnectOne Bancorp Inc'
  },
  {
    symbol: 'CNOBP',
    name: 'ConnectOne Bancorp Inc'
  },
  {
    symbol: 'CNP',
    name: 'Centerpoint Energy Inc'
  },
  {
    symbol: 'CNQ',
    name: 'Canadian Natural Resources Ltd'
  },
  {
    symbol: 'CNR',
    name: 'Cornerstone Building Brands Inc'
  },
  {
    symbol: 'CNS',
    name: 'Cohen & Steers Inc'
  },
  {
    symbol: 'CNSL',
    name: 'Consolidated Communications Holdings Inc'
  },
  {
    symbol: 'CNSP',
    name: 'Cns Pharmaceuticals Inc'
  },
  {
    symbol: 'CNTA',
    name: 'Centessa Pharmaceuticals plc'
  },
  {
    symbol: 'CNTB',
    name: 'Connect Biopharma Holdings Ltd'
  },
  {
    symbol: 'CNTG',
    name: 'Centogene NV'
  },
  {
    symbol: 'CNTQ',
    name: 'Chardan NexTech Acquisition 2 Corp'
  },
  {
    symbol: 'CNTQU',
    name: 'Chardan NexTech Acquisition 2 Corp - Units (1 Ord Share & 3/4War)'
  },
  {
    symbol: 'CNTQW',
    name: 'Chardan NexTech Acquisition 2 Corp - Warrants (29/07/2026)'
  },
  {
    symbol: 'CNTX',
    name: 'Context Therapeutics Inc'
  },
  {
    symbol: 'CNTY',
    name: 'Century Casinos Inc'
  },
  {
    symbol: 'CNVY',
    name: 'Convey Health Solutions Holdings Inc'
  },
  {
    symbol: 'CNX',
    name: 'CNX Resources Corp'
  },
  {
    symbol: 'CNXA',
    name: 'Connexa Sports Technologies Inc'
  },
  {
    symbol: 'CNXC',
    name: 'Concentrix Corporation'
  },
  {
    symbol: 'CNXCV',
    name: 'Concentrix Corporation'
  },
  {
    symbol: 'CNXN',
    name: 'PC Connection Inc'
  },
  {
    symbol: 'CO',
    name: 'Global Cord Blood Corp'
  },
  {
    symbol: 'COCO',
    name: 'Vita Coco Company Inc (The)'
  },
  {
    symbol: 'COCP',
    name: 'Cocrystal Pharma Inc'
  },
  {
    symbol: 'CODA',
    name: 'Coda Octopus Group Inc'
  },
  {
    symbol: 'CODI',
    name: 'Compass Diversified Holdings'
  },
  {
    symbol: 'CODI-P-A',
    name: 'Compass Diversified Holdings 7250 Series A Preferred Shares representing beneficial interest in'
  },
  {
    symbol: 'CODI-P-B',
    name: 'Compass Diversified Holdings 7875 Series B FixedtoFloating Rate Cumulative Preferred Shares representing beneficial interests in'
  },
  {
    symbol: 'CODI-P-C',
    name: 'Compass Diversified Holdings 7.875 PRF PERPETUAL USD 25 Ser C'
  },
  {
    symbol: 'CODX',
    name: 'Co-Diagnostics Inc'
  },
  {
    symbol: 'COE',
    name: 'China Online Education Group'
  },
  {
    symbol: 'COF',
    name: 'Capital One Financial Corp'
  },
  {
    symbol: 'COF-P-I',
    name: 'Capital One Financial Corp. PRF PERPETUAL USD 25 Dp Sh Rp 140th Sr I'
  },
  {
    symbol: 'COF-P-J',
    name: 'Capital One Financial Corp'
  },
  {
    symbol: 'COF-P-K',
    name: 'Capital One Financial Corp'
  },
  {
    symbol: 'COF-P-L',
    name: 'Capital One Financial Corp'
  },
  {
    symbol: 'COF-P-N',
    name: 'Capital One Financial Corp'
  },
  {
    symbol: 'COF-P-P',
    name: 'Capital One Financial Corp Pfd Ser B'
  },
  {
    symbol: 'COF-P-P-CL',
    name: ''
  },
  {
    symbol: 'COFS',
    name: 'Choiceone Financial Services Inc'
  },
  {
    symbol: 'COGT',
    name: 'Cogent Biosciences Inc'
  },
  {
    symbol: 'COHN',
    name: 'Cohen & Company Inc'
  },
  {
    symbol: 'COHU',
    name: 'Cohu Inc'
  },
  {
    symbol: 'COIN',
    name: 'Coinbase Global Inc - Class A'
  },
  {
    symbol: 'COKE',
    name: 'Coca-Cola Consolidated Inc'
  },
  {
    symbol: 'COLB',
    name: 'Columbia Banking System Inc'
  },
  {
    symbol: 'COLD',
    name: 'Americold Realty Trust Inc'
  },
  {
    symbol: 'COLI',
    name: 'Colicity Inc - Class A'
  },
  {
    symbol: 'COLIU',
    name: 'Colicity Inc - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'COLIW',
    name: 'Colicity Inc - Warrants (24/02/2026)'
  },
  {
    symbol: 'COLL',
    name: 'Collegium Pharmaceutical Inc'
  },
  {
    symbol: 'COLM',
    name: 'Columbia Sportswear Company'
  },
  {
    symbol: 'COMM',
    name: 'CommScope Holding Company Inc'
  },
  {
    symbol: 'COMP',
    name: 'Compass Inc - Class A'
  },
  {
    symbol: 'COMS',
    name: 'ComSovereign Holding Corp'
  },
  {
    symbol: 'COMSP',
    name: 'ComSovereign Holding Corp'
  },
  {
    symbol: 'COMSW',
    name: 'ComSovereign Holding Corp - Warrants (18/12/2025)'
  },
  {
    symbol: 'CONE',
    name: 'CyrusOne Inc'
  },
  {
    symbol: 'CONN',
    name: 'Conns Inc'
  },
  {
    symbol: 'CONX',
    name: 'CONX Corp - Class A'
  },
  {
    symbol: 'CONXU',
    name: 'CONX Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'CONXW',
    name: 'CONX Corp - Warrants (30/10/2027)'
  },
  {
    symbol: 'COO',
    name: 'Cooper Companies Inc'
  },
  {
    symbol: 'COOK',
    name: 'Traeger Inc'
  },
  {
    symbol: 'COOL',
    name: 'Corner Growth Acquisition Corp - Class A'
  },
  {
    symbol: 'COOLU',
    name: 'Corner Growth Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'COOLW',
    name: 'Corner Growth Acquisition Corp - Warrants (01/01/2027)'
  },
  {
    symbol: 'COOP',
    name: 'Mr. Cooper Group Inc'
  },
  {
    symbol: 'COP',
    name: 'Conoco Phillips'
  },
  {
    symbol: 'CORR',
    name: 'CorEnergy Infrastructure Trust Inc'
  },
  {
    symbol: 'CORR-P-A',
    name: 'CorEnergy Infrastructure Trust Inc'
  },
  {
    symbol: 'CORS',
    name: 'Corsair Partnering Corp - Class A'
  },
  {
    symbol: 'CORS-U',
    name: 'Corsair Partnering Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'CORS-WS',
    name: 'Corsair Partnering Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'CORT',
    name: 'Corcept Therapeutics Inc'
  },
  {
    symbol: 'CORZ',
    name: 'Core Scientific Inc'
  },
  {
    symbol: 'CORZW',
    name: 'Core Scientific Inc - Warrants (19/01/2027)'
  },
  {
    symbol: 'COSM',
    name: 'Cosmos Holdings Inc'
  },
  {
    symbol: 'COST',
    name: 'Costco Wholesale Corp'
  },
  {
    symbol: 'COTY',
    name: 'Coty Inc - Class A'
  },
  {
    symbol: 'COUP',
    name: 'Coupa Software Inc'
  },
  {
    symbol: 'COUR',
    name: 'Coursera Inc'
  },
  {
    symbol: 'COVA',
    name: 'COVA Acquisition Corp - Class A'
  },
  {
    symbol: 'COVAU',
    name: 'COVA Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'COVAW',
    name: 'COVA Acquisition Corp - Warrants (05/02/2026)'
  },
  {
    symbol: 'COWN',
    name: 'Cowen Inc - Class A'
  },
  {
    symbol: 'COWNL',
    name: 'Cowen Inc'
  },
  {
    symbol: 'CP',
    name: 'Canadian Pacific Railway Ltd'
  },
  {
    symbol: 'CPA',
    name: 'Copa Holdings S.A. - Class A'
  },
  {
    symbol: 'CPAA',
    name: 'Conyers Park III Acquisition Corp - Class A'
  },
  {
    symbol: 'CPAAU',
    name: 'Conyers Park III Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'CPAAW',
    name: 'Conyers Park III Acquisition Corp - Warrants (31/07/2028)'
  },
  {
    symbol: 'CPAC',
    name: 'Cementos Pacasmayo S.A.A.'
  },
  {
    symbol: 'CPAQ',
    name: 'Counter Press Acquisition Corp - Class A'
  },
  {
    symbol: 'CPAQU',
    name: 'Counter Press Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'CPAQW',
    name: 'Counter Press Acquisition Corp - Warrants (07/02/2027)'
  },
  {
    symbol: 'CPAR',
    name: 'Catalyst Partners Acquisition Corp - Class A'
  },
  {
    symbol: 'CPARU',
    name: 'Catalyst Partners Acquisition Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'CPARW',
    name: 'Catalyst Partners Acquisition Corp - Warrants (12/05/2026)'
  },
  {
    symbol: 'CPB',
    name: 'Campbell Soup Company'
  },
  {
    symbol: 'CPE',
    name: 'Callon Petroleum Company'
  },
  {
    symbol: 'CPF',
    name: 'Central Pacific Financial Corp'
  },
  {
    symbol: 'CPG',
    name: 'Crescent Point Energy Corp'
  },
  {
    symbol: 'CPHC',
    name: 'Canterbury Park Holding Corp'
  },
  {
    symbol: 'CPHI',
    name: 'China Pharma Holdings Inc'
  },
  {
    symbol: 'CPIX',
    name: 'Cumberland Pharmaceuticals Inc'
  },
  {
    symbol: 'CPK',
    name: 'Chesapeake Utilities Corp'
  },
  {
    symbol: 'CPLP',
    name: 'Capital Product Partners L P'
  },
  {
    symbol: 'CPNG',
    name: 'Coupang Inc - Class A'
  },
  {
    symbol: 'CPOP',
    name: 'Pop Culture Group Co Ltd - Class A'
  },
  {
    symbol: 'CPRI',
    name: 'Capri Holdings Ltd'
  },
  {
    symbol: 'CPRT',
    name: 'Copart Inc'
  },
  {
    symbol: 'CPRX',
    name: 'Catalyst Pharmaceuticals Inc'
  },
  {
    symbol: 'CPS',
    name: 'Cooper-Standard Holdings Inc'
  },
  {
    symbol: 'CPSH',
    name: 'CPS Technologies Corporation'
  },
  {
    symbol: 'CPSI',
    name: 'Computer Programs & Systems Inc'
  },
  {
    symbol: 'CPSS',
    name: 'Consumer Portfolio Service Inc'
  },
  {
    symbol: 'CPT',
    name: 'Camden Property Trust'
  },
  {
    symbol: 'CPTK',
    name: 'Crown PropTech Acquisitions - Class A'
  },
  {
    symbol: 'CPTK-U',
    name: 'Crown PropTech Acquisitions - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'CPTK-WS',
    name: 'Crown PropTech Acquisitions - Warrants (01/01/9999)'
  },
  {
    symbol: 'CPTN',
    name: 'Cepton Inc'
  },
  {
    symbol: 'CPTNW',
    name: 'Cepton Inc - Warrants (10/02/2027)'
  },
  {
    symbol: 'CPUH',
    name: 'Compute Health Acquisition Corp - Class A'
  },
  {
    symbol: 'CPUH-U',
    name: 'Compute Health Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'CPUH-WS',
    name: 'Compute Health Acquisition Corp - Warrants (25/01/2026)'
  },
  {
    symbol: 'CPZ',
    name: 'Calamos Long/Short Equity & Dynamic Income Trust'
  },
  {
    symbol: 'CQP',
    name: 'Cheniere Energy Partners LP'
  },
  {
    symbol: 'CR',
    name: 'Crane Holdings Company'
  },
  {
    symbol: 'CRAI',
    name: 'CRA International Inc'
  },
  {
    symbol: 'CRBP',
    name: 'Corbus Pharmaceuticals Holdings Inc'
  },
  {
    symbol: 'CRBU',
    name: 'Caribou Biosciences Inc'
  },
  {
    symbol: 'CRC',
    name: 'California Resources Corporation - New'
  },
  {
    symbol: 'CRCT',
    name: 'Cricut Inc - Class A'
  },
  {
    symbol: 'CRD-A',
    name: 'Crawford & Co. - Class A'
  },
  {
    symbol: 'CRD-B',
    name: 'Crawford & Co. - Class B'
  },
  {
    symbol: 'CRDF',
    name: 'Cardiff Oncology Inc'
  },
  {
    symbol: 'CRDL',
    name: 'Cardiol Therapeutics Inc - Class A'
  },
  {
    symbol: 'CRDO',
    name: 'Credo Technology Group Holding Ltd'
  },
  {
    symbol: 'CREC',
    name: 'Crescera Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'CRECU',
    name: 'Crescera Capital Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'CRECW',
    name: 'Crescera Capital Acquisition Corp - Warrants (18/11/2026)'
  },
  {
    symbol: 'CREG',
    name: 'Smart Powerr Corp'
  },
  {
    symbol: 'CRESW',
    name: 'Cresud - Warrants (08/03/2026)'
  },
  {
    symbol: 'CRESY',
    name: 'Cresud'
  },
  {
    symbol: 'CREX',
    name: 'Creative Realities Inc'
  },
  {
    symbol: 'CREXW',
    name: 'Creative Realities Inc Warrants 09112022'
  },
  {
    symbol: 'CRGE',
    name: 'Charge Enterprises Inc'
  },
  {
    symbol: 'CRGY',
    name: 'Crescent Energy Company - Class A'
  },
  {
    symbol: 'CRH',
    name: 'CRH Plc'
  },
  {
    symbol: 'CRHC',
    name: 'Cohn Robbins Holdings Corp - Class A'
  },
  {
    symbol: 'CRHC-U',
    name: 'Cohn Robbins Holdings Corp Units each consisting of one Class A ordinary share and onethird of one redeemable warrant'
  },
  {
    symbol: 'CRHC-WS',
    name: 'Cohn Robbins Holdings Corp - Warrants (28/08/2025)'
  },
  {
    symbol: 'CRI',
    name: 'Carters Inc'
  },
  {
    symbol: 'CRIS',
    name: 'Curis Inc'
  },
  {
    symbol: 'CRK',
    name: 'Comstock Resources Inc'
  },
  {
    symbol: 'CRKN',
    name: 'Crown ElectroKinetics Corp'
  },
  {
    symbol: 'CRL',
    name: 'Charles River Laboratories International Inc'
  },
  {
    symbol: 'CRM',
    name: 'Salesforce Inc'
  },
  {
    symbol: 'CRMD',
    name: 'CorMedix Inc'
  },
  {
    symbol: 'CRMT',
    name: 'Americas Car Mart Inc'
  },
  {
    symbol: 'CRNC',
    name: 'Cerence Inc'
  },
  {
    symbol: 'CRNT',
    name: 'Ceragon Networks Ltd'
  },
  {
    symbol: 'CRNX',
    name: 'Crinetics Pharmaceuticals Inc'
  },
  {
    symbol: 'CRON',
    name: 'Cronos Group Inc'
  },
  {
    symbol: 'CROX',
    name: 'Crocs Inc'
  },
  {
    symbol: 'CRS',
    name: 'Carpenter Technology Corp'
  },
  {
    symbol: 'CRSP',
    name: 'CRISPR Therapeutics AG'
  },
  {
    symbol: 'CRSR',
    name: 'Corsair Gaming Inc'
  },
  {
    symbol: 'CRT',
    name: 'Cross Timbers Royalty Trust'
  },
  {
    symbol: 'CRTD',
    name: 'Creatd Inc'
  },
  {
    symbol: 'CRTDW',
    name: 'Creatd Inc - Warrants (01/01/2025)'
  },
  {
    symbol: 'CRTO',
    name: 'Criteo S.A'
  },
  {
    symbol: 'CRTX',
    name: 'Cortexyme Inc'
  },
  {
    symbol: 'CRU',
    name: 'Crucible Acquisition Corp - Class A'
  },
  {
    symbol: 'CRU-U',
    name: 'Crucible Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'CRU-WS',
    name: 'Crucible Acquisition Corp - Warrants(26/12/2025)'
  },
  {
    symbol: 'CRUS',
    name: 'Cirrus Logic Inc'
  },
  {
    symbol: 'CRVL',
    name: 'Corvel Corp'
  },
  {
    symbol: 'CRVS',
    name: 'Corvus Pharmaceuticals Inc'
  },
  {
    symbol: 'CRWD',
    name: 'Crowdstrike Holdings Inc - Class A'
  },
  {
    symbol: 'CRWS',
    name: 'Crown Crafts Inc'
  },
  {
    symbol: 'CRXT',
    name: 'Clarus Therapeutics Holdings Inc'
  },
  {
    symbol: 'CRXTW',
    name: 'Clarus Therapeutics Holdings Inc - Warrants (09/09/2026)'
  },
  {
    symbol: 'CRZN',
    name: 'Corazon Capital V838 Monoceros Corp - Class A'
  },
  {
    symbol: 'CRZNU',
    name: 'Corazon Capital V838 Monoceros Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'CRZNW',
    name: 'Corazon Capital V838 Monoceros Corp - Warrants (24/03/2026)'
  },
  {
    symbol: 'CS',
    name: 'Credit Suisse Group AG'
  },
  {
    symbol: 'CSAN',
    name: 'Cosan S.A'
  },
  {
    symbol: 'CSAN-W',
    name: 'Cosan S.A. American Depositary Shares each representing one When Issued'
  },
  {
    symbol: 'CSBR',
    name: 'Champions Oncology Inc'
  },
  {
    symbol: 'CSCO',
    name: 'Cisco Systems Inc'
  },
  {
    symbol: 'CSCW',
    name: 'Color Star Technology Co Ltd'
  },
  {
    symbol: 'CSGP',
    name: 'Costar Group Inc'
  },
  {
    symbol: 'CSGS',
    name: 'CSG Systems International Inc'
  },
  {
    symbol: 'CSII',
    name: 'Cardiovascular Systems Inc'
  },
  {
    symbol: 'CSIQ',
    name: 'Canadian Solar Inc'
  },
  {
    symbol: 'CSL',
    name: 'Carlisle Companies Inc'
  },
  {
    symbol: 'CSLM',
    name: 'Consilium Acquisition Corp I Ltd - Class A'
  },
  {
    symbol: 'CSLMR',
    name: 'Consilium Acquisition Corp I Ltd'
  },
  {
    symbol: 'CSLMU',
    name: 'Consilium Acquisition Corp I Ltd - Units (1 Ord Class A 1 Right & 1/2 War)'
  },
  {
    symbol: 'CSLMW',
    name: 'Consilium Acquisition Corp I Ltd - Warrants (12/01/2027)'
  },
  {
    symbol: 'CSPI',
    name: 'CSP Inc'
  },
  {
    symbol: 'CSR',
    name: 'Centerspace'
  },
  {
    symbol: 'CSR-P-C',
    name: 'Centerspace'
  },
  {
    symbol: 'CSSE',
    name: 'Chicken Soup for the Soul Entertainment Inc - Class A'
  },
  {
    symbol: 'CSSEN',
    name: 'Chicken Soup for the Soul Entertainment Inc'
  },
  {
    symbol: 'CSSEP',
    name: 'Chicken Soup for the Soul Entertainment Inc'
  },
  {
    symbol: 'CSTA',
    name: 'Constellation Acquisition Corp I - Class A'
  },
  {
    symbol: 'CSTA-U',
    name: 'Constellation Acquisition Corp I - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'CSTA-WS',
    name: 'Constellation Acquisition Corp I - Warrants (29/01/2028)'
  },
  {
    symbol: 'CSTE',
    name: 'Caesarstone Ltd'
  },
  {
    symbol: 'CSTL',
    name: 'Castle Biosciences Inc'
  },
  {
    symbol: 'CSTM',
    name: 'Constellium SE - Class A'
  },
  {
    symbol: 'CSTR',
    name: 'CapStar Financial Holdings Inc'
  },
  {
    symbol: 'CSV',
    name: 'Carriage Services Inc'
  },
  {
    symbol: 'CSWC',
    name: 'Capital Southwest Corp'
  },
  {
    symbol: 'CSWI',
    name: 'CSW Industrials Inc'
  },
  {
    symbol: 'CSX',
    name: 'CSX Corp'
  },
  {
    symbol: 'CTA',
    name: 'Simplify Managed Futures Strategy ETF'
  },
  {
    symbol: 'CTA-P-A',
    name: 'E.I. Du Pont De Nemours and Company'
  },
  {
    symbol: 'CTA-P-B',
    name: 'E.I. Du Pont De Nemours and Company'
  },
  {
    symbol: 'CTAC-U',
    name: 'Cerberus Telecom Acquisition Corp Units each consisting of one Class A ordinary share and onethird of one redeemable warrant'
  },
  {
    symbol: 'CTAC-WS',
    name: 'Cerberus Telecom Acquisition Corp Warrants included as part of the Units each whole warrant exercisable for one Class A ordinary share at an exercise price of'
  },
  {
    symbol: 'CTAQ',
    name: 'Carney Technology Acquisition Corp II - Class A'
  },
  {
    symbol: 'CTAQU',
    name: 'Carney Technology Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'CTAQW',
    name: 'Carney Technology Acquisition Corp II - Warrants (10/12/2025)'
  },
  {
    symbol: 'CTAS',
    name: 'Cintas Corporation'
  },
  {
    symbol: 'CTBB',
    name: 'Qwest Corporation'
  },
  {
    symbol: 'CTBI',
    name: 'Community Trust Bancorp Inc'
  },
  {
    symbol: 'CTDD',
    name: 'Qwest Corporation 675 Notes due 2057'
  },
  {
    symbol: 'CTEK',
    name: 'CynergisTek Inc'
  },
  {
    symbol: 'CTEST',
    name: ''
  },
  {
    symbol: 'CTG',
    name: 'Computer Task Group Inc'
  },
  {
    symbol: 'CTGO',
    name: 'Contango Ore Inc'
  },
  {
    symbol: 'CTHR',
    name: 'Charles & Colvard Ltd'
  },
  {
    symbol: 'CTIB',
    name: 'Yunhong CTI Ltd'
  },
  {
    symbol: 'CTIC',
    name: 'CTI BioPharma Corp'
  },
  {
    symbol: 'CTKB',
    name: 'Cytek BioSciences Inc'
  },
  {
    symbol: 'CTLP',
    name: 'Cantaloupe Inc'
  },
  {
    symbol: 'CTLT',
    name: 'Catalent Inc'
  },
  {
    symbol: 'CTMX',
    name: 'CytomX Therapeutics Inc'
  },
  {
    symbol: 'CTO',
    name: 'CTO Realty Growth Inc - New - New'
  },
  {
    symbol: 'CTO-P-A',
    name: 'CTO Realty Growth Inc'
  },
  {
    symbol: 'CTOS',
    name: 'Custom Truck One Source Inc'
  },
  {
    symbol: 'CTOS-WS',
    name: 'Custom Truck One Source Inc - Warrants (01/01/2025)'
  },
  {
    symbol: 'CTRA',
    name: 'Coterra Energy Inc'
  },
  {
    symbol: 'CTRE',
    name: 'CareTrust REIT Inc'
  },
  {
    symbol: 'CTRM',
    name: 'Castor Maritime Inc'
  },
  {
    symbol: 'CTRN',
    name: 'Citi Trends Inc'
  },
  {
    symbol: 'CTS',
    name: 'CTS Corp'
  },
  {
    symbol: 'CTSH',
    name: 'Cognizant Technology Solutions Corp - Class A'
  },
  {
    symbol: 'CTSO',
    name: 'Cytosorbents Corp'
  },
  {
    symbol: 'CTT',
    name: 'CatchMark Timber Trust Inc - Class A'
  },
  {
    symbol: 'CTV',
    name: 'Innovid Corp'
  },
  {
    symbol: 'CTV-WS',
    name: 'Innovid Corp - Warrants (17/02/2028)'
  },
  {
    symbol: 'CTVA',
    name: 'Corteva Inc'
  },
  {
    symbol: 'CTXR',
    name: 'Citius Pharmaceuticals Inc'
  },
  {
    symbol: 'CTXRW',
    name: 'Citius Pharmaceuticals Inc - Warrants(02/08/2022)'
  },
  {
    symbol: 'CTXS',
    name: 'Citrix Systems Inc'
  },
  {
    symbol: 'CUBB',
    name: ''
  },
  {
    symbol: 'CUBE',
    name: 'CubeSmart'
  },
  {
    symbol: 'CUBI',
    name: 'Customers Bancorp Inc'
  },
  {
    symbol: 'CUBI-P-E',
    name: 'Customers Bancorp Inc FixedtoFloating Rate NonCumulative Perpetual Preferred Stock Series E'
  },
  {
    symbol: 'CUBI-P-F',
    name: 'Customers Bancorp Inc FixedtoFloating Rate NonCumulative Perpetual Preferred Stock Series F'
  },
  {
    symbol: 'CUE',
    name: 'Cue Biopharma Inc'
  },
  {
    symbol: 'CUEN',
    name: 'Cuentas Inc'
  },
  {
    symbol: 'CUENW',
    name: 'Cuentas Inc - Warrants (01/02/2024)'
  },
  {
    symbol: 'CUK',
    name: 'Carnival plc'
  },
  {
    symbol: 'CULL',
    name: 'Cullman Bancorp Inc'
  },
  {
    symbol: 'CULP',
    name: 'Culp Inc'
  },
  {
    symbol: 'CURI',
    name: 'CuriosityStream Inc - Class A'
  },
  {
    symbol: 'CURIW',
    name: 'CuriosityStream Inc - Warrants (14/10/2025)'
  },
  {
    symbol: 'CURO',
    name: 'CURO Group Holdings Corp'
  },
  {
    symbol: 'CURV',
    name: 'Torrid Holdings Inc'
  },
  {
    symbol: 'CUTR',
    name: 'Cutera Inc'
  },
  {
    symbol: 'CUZ',
    name: 'Cousins Properties Inc'
  },
  {
    symbol: 'CVAC',
    name: 'CureVac N.V.'
  },
  {
    symbol: 'CVBF',
    name: 'CVB Financial Corp'
  },
  {
    symbol: 'CVCO',
    name: 'Cavco Industries Inc'
  },
  {
    symbol: 'CVCY',
    name: 'Central Valley Community Bancorp'
  },
  {
    symbol: 'CVE',
    name: 'Cenovus Energy Inc'
  },
  {
    symbol: 'CVE-WS',
    name: 'Cenovus Energy Inc - Warrants (01/01/2026)'
  },
  {
    symbol: 'CVEO',
    name: 'Civeo Corp'
  },
  {
    symbol: 'CVET',
    name: 'Covetrus Inc'
  },
  {
    symbol: 'CVGI',
    name: 'Commercial Vehicle Group Inc'
  },
  {
    symbol: 'CVGW',
    name: 'Calavo Growers Inc'
  },
  {
    symbol: 'CVI',
    name: 'CVR Energy Inc'
  },
  {
    symbol: 'CVII',
    name: 'Churchill Capital Corp VII - Class A'
  },
  {
    symbol: 'CVII-U',
    name: 'Churchill Capital Corp VII - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'CVII-WS',
    name: 'Churchill Capital Corp VII - Warrants (29/02/2028)'
  },
  {
    symbol: 'CVLG',
    name: 'Covenant Logistics Group Inc - Class A'
  },
  {
    symbol: 'CVLT',
    name: 'Commvault Systems Inc'
  },
  {
    symbol: 'CVLY',
    name: 'Codorus Valley Bancorp Inc'
  },
  {
    symbol: 'CVM',
    name: 'Cel-Sci Corp'
  },
  {
    symbol: 'CVNA',
    name: 'Carvana Co. - Class A'
  },
  {
    symbol: 'CVR',
    name: 'Chicago Rivet & Machine Company'
  },
  {
    symbol: 'CVRX',
    name: 'CVRx Inc'
  },
  {
    symbol: 'CVS',
    name: 'CVS Health Corp'
  },
  {
    symbol: 'CVT',
    name: 'Cvent Holding Corp'
  },
  {
    symbol: 'CVTI',
    name: ''
  },
  {
    symbol: 'CVV',
    name: 'CVD Equipment Corp'
  },
  {
    symbol: 'CVX',
    name: 'Chevron Corp'
  },
  {
    symbol: 'CW',
    name: 'Curtiss-Wright Corp'
  },
  {
    symbol: 'CWAN',
    name: 'Clearwater Analytics Holdings Inc Class A'
  },
  {
    symbol: 'CWBC',
    name: 'Community West Bancshares'
  },
  {
    symbol: 'CWBR',
    name: 'CohBar Inc'
  },
  {
    symbol: 'CWCO',
    name: 'Consolidated Water Co. Ltd'
  },
  {
    symbol: 'CWEN',
    name: 'Clearway Energy Inc - Class C'
  },
  {
    symbol: 'CWEN-A',
    name: 'Clearway Energy Inc - Class A'
  },
  {
    symbol: 'CWENA',
    name: 'Clearway Energy Inc Class A'
  },
  {
    symbol: 'CWH',
    name: 'Camping World Holdings Inc - Class A'
  },
  {
    symbol: 'CWK',
    name: 'Cushman & Wakefield plc'
  },
  {
    symbol: 'CWST',
    name: 'Casella Waste Systems Inc - Class A'
  },
  {
    symbol: 'CWT',
    name: 'California Water Service Group'
  },
  {
    symbol: 'CX',
    name: 'Cemex S.A.B. De C.V.'
  },
  {
    symbol: 'CXAC',
    name: 'C5 Acquisition Corp - Class A'
  },
  {
    symbol: 'CXAC-U',
    name: 'C5 Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'CXAC-WS',
    name: 'C5 Acquisition Corp - Warrants (31/12/2028)'
  },
  {
    symbol: 'CXDO',
    name: 'Crexendo Inc'
  },
  {
    symbol: 'CXM',
    name: 'Sprinklr Inc Class A'
  },
  {
    symbol: 'CXW',
    name: 'CoreCivic Inc'
  },
  {
    symbol: 'CYAD',
    name: 'Celyad Oncology'
  },
  {
    symbol: 'CYAN',
    name: 'Cyanotech Corp'
  },
  {
    symbol: 'CYBE',
    name: 'Cyberoptics Corp'
  },
  {
    symbol: 'CYBN',
    name: 'Cybin Inc'
  },
  {
    symbol: 'CYBR',
    name: 'CyberArk Software Ltd'
  },
  {
    symbol: 'CYCC',
    name: 'Cyclacel Pharmaceuticals Inc'
  },
  {
    symbol: 'CYCCP',
    name: 'Cyclacel Pharmaceuticals Inc'
  },
  {
    symbol: 'CYCN',
    name: 'Cyclerion Therapeutics Inc'
  },
  {
    symbol: 'CYD',
    name: 'China Yuchai International'
  },
  {
    symbol: 'CYH',
    name: 'Community Health Systems Inc'
  },
  {
    symbol: 'CYN',
    name: 'Cyngn Inc'
  },
  {
    symbol: 'CYRN',
    name: 'CYREN Ltd'
  },
  {
    symbol: 'CYRX',
    name: 'CryoPort Inc'
  },
  {
    symbol: 'CYRXW',
    name: 'CryoPort Inc Wt Exp 06302020'
  },
  {
    symbol: 'CYT',
    name: 'Cyteir Therapeutics Inc'
  },
  {
    symbol: 'CYTH',
    name: 'Cyclo Therapeutics Inc - Class A'
  },
  {
    symbol: 'CYTHW',
    name: 'Cyclo Therapeutics Inc - Warrants (14/11/2025)'
  },
  {
    symbol: 'CYTK',
    name: 'Cytokinetics Inc'
  },
  {
    symbol: 'CYTO',
    name: 'Altamira Therapeutics Ltd'
  },
  {
    symbol: 'CYXT',
    name: 'Cyxtera Technologies Inc - Class A'
  },
  {
    symbol: 'CZFS',
    name: 'Citizens Financial Services Inc'
  },
  {
    symbol: 'CZNC',
    name: 'Citizens & Northern Corp'
  },
  {
    symbol: 'CZOO',
    name: 'Cazoo Group Ltd - Class A'
  },
  {
    symbol: 'CZOO-WS',
    name: 'Cazoo Group Ltd Wt'
  },
  {
    symbol: 'CZR',
    name: 'Caesars Entertainment Inc'
  },
  {
    symbol: 'CZWI',
    name: 'Citizens Community Bancorp Inc MD'
  },
  {
    symbol: 'D',
    name: 'Dominion Energy Inc'
  },
  {
    symbol: 'DAC',
    name: 'Danaos Corporation'
  },
  {
    symbol: 'DADA',
    name: 'Dada Nexus Ltd'
  },
  {
    symbol: 'DAIO',
    name: 'Data io Corp'
  },
  {
    symbol: 'DAKT',
    name: 'Daktronics Inc'
  },
  {
    symbol: 'DAL',
    name: 'Delta Air Lines Inc'
  },
  {
    symbol: 'DALN',
    name: 'DallasNews Corporation - Class A'
  },
  {
    symbol: 'DALS',
    name: 'DA32 Life Science Tech Acquisition Corp - Class A'
  },
  {
    symbol: 'DAN',
    name: 'Dana Inc'
  },
  {
    symbol: 'DAO',
    name: 'Youdao Inc'
  },
  {
    symbol: 'DAOO',
    name: 'Crypto 1 Acquisition Corp - Class A'
  },
  {
    symbol: 'DAOOU',
    name: 'Crypto 1 Acquisition Corp - Units (1 Ord Share Class A & 3/4 War)'
  },
  {
    symbol: 'DAOOW',
    name: 'Crypto 1 Acquisition Corp - Warrants (30/04/2028)'
  },
  {
    symbol: 'DAR',
    name: 'Darling Ingredients Inc'
  },
  {
    symbol: 'DARE',
    name: 'Dare Bioscience Inc'
  },
  {
    symbol: 'DASH',
    name: 'DoorDash Inc - Class A'
  },
  {
    symbol: 'DATS',
    name: 'DatChat Inc'
  },
  {
    symbol: 'DATSW',
    name: 'DatChat Inc - Warrants - Series A (13/08/2024)'
  },
  {
    symbol: 'DAVA',
    name: 'Endava plc'
  },
  {
    symbol: 'DAVE',
    name: 'Dave Inc - Class A'
  },
  {
    symbol: 'DAVEW',
    name: 'Dave Inc - Warrants (05/01/2026)'
  },
  {
    symbol: 'DAWN',
    name: 'Day One Biopharmaceuticals Inc'
  },
  {
    symbol: 'DB',
    name: 'Deutsche Bank AG'
  },
  {
    symbol: 'DBD',
    name: 'Diebold Nixdorf Inc'
  },
  {
    symbol: 'DBGI',
    name: 'Digital Brands Group Inc'
  },
  {
    symbol: 'DBGIW',
    name: 'Digital Brands Group Inc - Warrants (01/05/2026)'
  },
  {
    symbol: 'DBI',
    name: 'Designer Brands Inc - Class A'
  },
  {
    symbol: 'DBRG',
    name: 'DigitalBridge Group Inc - Class A'
  },
  {
    symbol: 'DBRG-P-G',
    name: 'DigitalBridge Group Inc 7.50 Cum Red Perp Pfd Ser G'
  },
  {
    symbol: 'DBRG-P-H',
    name: 'DigitalBridge Group Inc 7.125 Cum Red Perp Pfd Ser H'
  },
  {
    symbol: 'DBRG-P-I',
    name: 'DigitalBridge Group Inc 7.15 Cum Red Perp Pfd Ser I'
  },
  {
    symbol: 'DBRG-P-J',
    name: 'DigitalBridge Group Inc 7.125 Cum Red Perp Pfd Ser J'
  },
  {
    symbol: 'DBTX',
    name: 'Decibel Therapeutics Inc'
  },
  {
    symbol: 'DBVT',
    name: 'DBV Technologies'
  },
  {
    symbol: 'DBX',
    name: 'Dropbox Inc - Class A'
  },
  {
    symbol: 'DC',
    name: 'Dakota Gold Corp'
  },
  {
    symbol: 'DCBO',
    name: 'Docebo Inc'
  },
  {
    symbol: 'DCFC',
    name: 'Tritium DCFC Ltd'
  },
  {
    symbol: 'DCFCW',
    name: 'Tritium DCFC Ltd - Warrants (13/01/2027)'
  },
  {
    symbol: 'DCGO',
    name: 'DocGo Inc'
  },
  {
    symbol: 'DCGOW',
    name: 'DocGo Inc - Warrants (05/11/2026)'
  },
  {
    symbol: 'DCI',
    name: 'Donaldson Co. Inc'
  },
  {
    symbol: 'DCO',
    name: 'Ducommun Inc'
  },
  {
    symbol: 'DCOM',
    name: 'Dime Community Bancshares Inc'
  },
  {
    symbol: 'DCOMP',
    name: 'Dime Community Bancshares Inc'
  },
  {
    symbol: 'DCP',
    name: 'DCP Midstream LP'
  },
  {
    symbol: 'DCP-P-B',
    name: 'DCP Midstream LP 7875 Series B FixedtoFloating Rate Cumulative Redeemable Perpetual Preferred Units'
  },
  {
    symbol: 'DCP-P-C',
    name: 'DCP Midstream LP 795 Series C FixedtoFloating Rate Cumulative Redeemable Perpetual Preferred Units'
  },
  {
    symbol: 'DCPH',
    name: 'Deciphera Pharmaceuticals Inc'
  },
  {
    symbol: 'DCRD',
    name: 'Decarbonization Plus Acquisition Corp IV - Class A'
  },
  {
    symbol: 'DCRDU',
    name: 'Decarbonization Plus Acquisition Corp IV - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'DCRDW',
    name: 'Decarbonization Plus Acquisition Corp IV - Warrants (15/07/2026)'
  },
  {
    symbol: 'DCT',
    name: 'Duck Creek Technologies Inc'
  },
  {
    symbol: 'DCTH',
    name: 'Delcath Systems Inc'
  },
  {
    symbol: 'DD',
    name: 'DuPont de Nemours Inc'
  },
  {
    symbol: 'DD-WD',
    name: 'DuPont de Nemours Inc When Distributed'
  },
  {
    symbol: 'DDD',
    name: '3D Systems Corp'
  },
  {
    symbol: 'DDI',
    name: 'DoubleDown Interactive Co Ltd'
  },
  {
    symbol: 'DDL',
    name: 'Dingdong (Cayman) Ltd'
  },
  {
    symbol: 'DDOG',
    name: 'Datadog Inc - Class A'
  },
  {
    symbol: 'DDS',
    name: 'Dillard`s Inc - Class A'
  },
  {
    symbol: 'DDT',
    name: 'Dillards Capital Trust I'
  },
  {
    symbol: 'DE',
    name: 'Deere & Company'
  },
  {
    symbol: 'DEA',
    name: 'Easterly Government Properties Inc'
  },
  {
    symbol: 'DECA',
    name: 'Denali Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'DECAU',
    name: 'Denali Capital Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'DECAW',
    name: 'Denali Capital Acquisition Corp - Warrants (28/03/2027)'
  },
  {
    symbol: 'DECK',
    name: 'Deckers Outdoor Corp'
  },
  {
    symbol: 'DEI',
    name: 'Douglas Emmett Inc'
  },
  {
    symbol: 'DELL',
    name: 'Dell Technologies Inc - Class C'
  },
  {
    symbol: 'DEN',
    name: 'Denbury Inc - New'
  },
  {
    symbol: 'DENN',
    name: 'Denny`s Corp'
  },
  {
    symbol: 'DEO',
    name: 'Diageo plc'
  },
  {
    symbol: 'DERM',
    name: 'Journey Medical Corp'
  },
  {
    symbol: 'DESP',
    name: 'Despegar.com Corp'
  },
  {
    symbol: 'DFFN',
    name: 'Diffusion Pharmaceuticals Inc'
  },
  {
    symbol: 'DFH',
    name: 'Dream Finders Homes Inc - Class A'
  },
  {
    symbol: 'DFIN',
    name: 'Donnelley Financial Solutions Inc'
  },
  {
    symbol: 'DFS',
    name: 'Discover Financial Services'
  },
  {
    symbol: 'DG',
    name: 'Dollar General Corp'
  },
  {
    symbol: 'DGHI',
    name: 'Digihost Technology Inc'
  },
  {
    symbol: 'DGICA',
    name: 'Donegal Group Inc - Class A'
  },
  {
    symbol: 'DGICB',
    name: 'Donegal Group Inc - Class B'
  },
  {
    symbol: 'DGII',
    name: 'Digi International Inc'
  },
  {
    symbol: 'DGLD',
    name: ''
  },
  {
    symbol: 'DGLY',
    name: 'Digital Ally Inc'
  },
  {
    symbol: 'DGNU',
    name: 'Dragoneer Growth Opportunities Corp III - Class A'
  },
  {
    symbol: 'DGX',
    name: 'Quest Diagnostics Inc'
  },
  {
    symbol: 'DH',
    name: 'Definitive Healthcare Corp - Class A'
  },
  {
    symbol: 'DHAC',
    name: 'Digital Health Acquisition Corp'
  },
  {
    symbol: 'DHACU',
    name: 'Digital Health Acquisition Corp - Unit (1 Ordinary share & 1 Wrt)'
  },
  {
    symbol: 'DHACW',
    name: 'Digital Health Acquisition Corp - Warrants(02/11/2026)'
  },
  {
    symbol: 'DHBC',
    name: 'DHB Capital Corp - Class A'
  },
  {
    symbol: 'DHBCU',
    name: 'DHB Capital Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'DHBCW',
    name: 'DHB Capital Corp - Warrants (31/03/2028)'
  },
  {
    symbol: 'DHC',
    name: 'Diversified Healthcare Trust'
  },
  {
    symbol: 'DHCA',
    name: 'DHC Acquisition Corp - Class A'
  },
  {
    symbol: 'DHCAU',
    name: 'DHC Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'DHCAW',
    name: 'DHC Acquisition Corp - Warrants (25/02/2026)'
  },
  {
    symbol: 'DHCNI',
    name: 'Diversified Healthcare Trust'
  },
  {
    symbol: 'DHCNL',
    name: 'Diversified Healthcare Trust'
  },
  {
    symbol: 'DHHC',
    name: 'DiamondHead Holdings Corp - Class A'
  },
  {
    symbol: 'DHHCU',
    name: 'DiamondHead Holdings Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'DHHCW',
    name: 'DiamondHead Holdings Corp - Warrants (21/01/2026)'
  },
  {
    symbol: 'DHI',
    name: 'D.R. Horton Inc'
  },
  {
    symbol: 'DHIL',
    name: 'Diamond Hill Investment Group Inc - Class A'
  },
  {
    symbol: 'DHR',
    name: 'Danaher Corp'
  },
  {
    symbol: 'DHR-P-B',
    name: ''
  },
  {
    symbol: 'DHT',
    name: 'DHT Holdings Inc'
  },
  {
    symbol: 'DHX',
    name: 'DHI Group Inc'
  },
  {
    symbol: 'DIBS',
    name: '1stdibs.com Inc'
  },
  {
    symbol: 'DICE',
    name: 'DICE Therapeutics Inc'
  },
  {
    symbol: 'DILA',
    name: 'DILA Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'DILAU',
    name: 'DILA Capital Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'DILAW',
    name: 'DILA Capital Acquisition Corp - Warrants (09/06/2026)'
  },
  {
    symbol: 'DIN',
    name: 'Dine Brands Global Inc'
  },
  {
    symbol: 'DINO',
    name: 'HF Sinclair Corporation'
  },
  {
    symbol: 'DIOD',
    name: 'Diodes Inc'
  },
  {
    symbol: 'DIS',
    name: 'Walt Disney Co (The)'
  },
  {
    symbol: 'DISA',
    name: 'Disruptive Acquisition Corp I - Class A'
  },
  {
    symbol: 'DISAU',
    name: 'Disruptive Acquisition Corp I - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'DISAW',
    name: 'Disruptive Acquisition Corp I - Warrants (06/03/2026)'
  },
  {
    symbol: 'DISCA',
    name: ''
  },
  {
    symbol: 'DISH',
    name: 'Dish Network Corp - Class A'
  },
  {
    symbol: 'DISHR',
    name: 'DISH Network Corp Rt'
  },
  {
    symbol: 'DIT',
    name: 'Amcon Distributing Company'
  },
  {
    symbol: 'DJCO',
    name: 'Daily Journal Corporation'
  },
  {
    symbol: 'DK',
    name: 'Delek US Holdings Inc'
  },
  {
    symbol: 'DKDCA',
    name: 'Data Knights Acquisition Corp - Class A'
  },
  {
    symbol: 'DKDCU',
    name: 'Data Knights Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'DKDCW',
    name: 'Data Knights Acquisition Corp - Warrants (05/05/2026)'
  },
  {
    symbol: 'DKL',
    name: 'Delek Logistics Partners LP'
  },
  {
    symbol: 'DKNG',
    name: 'DraftKings Inc - Class A'
  },
  {
    symbol: 'DKS',
    name: 'Dicks Sporting Goods Inc'
  },
  {
    symbol: 'DKT',
    name: 'Deutsch Bk Contingent Cap Tr V Tr Pfd Secs'
  },
  {
    symbol: 'DLA',
    name: 'Delta Apparel Inc'
  },
  {
    symbol: 'DLB',
    name: 'Dolby Laboratories Inc - Class A'
  },
  {
    symbol: 'DLCA',
    name: 'Deep Lake Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'DLCAU',
    name: 'Deep Lake Capital Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'DLCAW',
    name: 'Deep Lake Capital Acquisition Corp - Warrants (04/01/2026)'
  },
  {
    symbol: 'DLHC',
    name: 'DLH Holdings Corp'
  },
  {
    symbol: 'DLNG',
    name: 'Dynagas LNG Partners LP'
  },
  {
    symbol: 'DLNG-P-A',
    name: 'Dynagas LNG Partners LP 900 Series A Cumulative Redeemable Preferred Units'
  },
  {
    symbol: 'DLNG-P-B',
    name: 'Dynagas LNG Partners LP Pfd Unit Ser B FixedFltg'
  },
  {
    symbol: 'DLO',
    name: 'DLocal Ltd Class A'
  },
  {
    symbol: 'DLPN',
    name: 'Dolphin Entertainment Inc'
  },
  {
    symbol: 'DLR',
    name: 'Digital Realty Trust Inc'
  },
  {
    symbol: 'DLR-P-J',
    name: 'Digital Realty Trust Inc'
  },
  {
    symbol: 'DLR-P-K',
    name: 'Digital Realty Trust Inc'
  },
  {
    symbol: 'DLR-P-L',
    name: ''
  },
  {
    symbol: 'DLTH',
    name: 'Duluth Holdings Inc - Class B'
  },
  {
    symbol: 'DLTR',
    name: 'Dollar Tree Inc'
  },
  {
    symbol: 'DLX',
    name: 'Deluxe Corp'
  },
  {
    symbol: 'DLY',
    name: 'DoubleLine Yield Opportunities Fund'
  },
  {
    symbol: 'DM',
    name: 'Desktop Metal Inc - Class A'
  },
  {
    symbol: 'DM-WS',
    name: 'Desktop Metal Inc Wt Exp 03312026'
  },
  {
    symbol: 'DMA',
    name: 'Destra Multi-Alternative Fund'
  },
  {
    symbol: 'DMAC',
    name: 'DiaMedica Therapeutics Inc'
  },
  {
    symbol: 'DMAQ',
    name: 'Deep Medicine Acquisition Corp - Class A'
  },
  {
    symbol: 'DMAQR',
    name: 'Deep Medicine Acquisition Corp'
  },
  {
    symbol: 'DMLP',
    name: 'Dorchester Minerals LP'
  },
  {
    symbol: 'DMRC',
    name: 'Digimarc Corporation'
  },
  {
    symbol: 'DMS',
    name: 'Digital Media Solutions Inc - Class A'
  },
  {
    symbol: 'DMS-WS',
    name: 'Digital Media Solutions Inc - Warrants (15/07/2025)'
  },
  {
    symbol: 'DMTK',
    name: 'DermTech Inc'
  },
  {
    symbol: 'DMYD-U',
    name: 'dMY Technology Group Inc II Units each consisting of one share of Class A common stock and onethird of one redeemable warrant'
  },
  {
    symbol: 'DMYS',
    name: 'dMY Technology Group Inc VI - Class A'
  },
  {
    symbol: 'DMYS-U',
    name: 'dMY Technology Group Inc VI - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'DMYS-WS',
    name: 'dMY Technology Group Inc VI - Warrants (01/01/9999)'
  },
  {
    symbol: 'DMYT-U',
    name: 'Rush Street Interactive Inc - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'DNA',
    name: 'Ginkgo Bioworks Holdings Inc - Class A'
  },
  {
    symbol: 'DNA-WS',
    name: 'Ginkgo Bioworks Holdings Inc - Warrants (23/02/2026)'
  },
  {
    symbol: 'DNAA',
    name: 'Social Capital Suvretta Holdings Corp I - Class A'
  },
  {
    symbol: 'DNAB',
    name: 'Social Capital Suvretta Holdings Corp II - Class A'
  },
  {
    symbol: 'DNAC',
    name: 'Social Capital Suvretta Holdings Corp III - Class A'
  },
  {
    symbol: 'DNAD',
    name: 'Social Capital Suvretta Holdings Corp IV - Class A'
  },
  {
    symbol: 'DNAY',
    name: 'Codex DNA Inc'
  },
  {
    symbol: 'DNB',
    name: 'Dun & Bradstreet Holdings Inc'
  },
  {
    symbol: 'DNLI',
    name: 'Denali Therapeutics Inc'
  },
  {
    symbol: 'DNMR',
    name: 'Danimer Scientific Inc - Class A'
  },
  {
    symbol: 'DNN',
    name: 'Denison Mines Corp'
  },
  {
    symbol: 'DNOW',
    name: 'NOW Inc'
  },
  {
    symbol: 'DNUT',
    name: 'Krispy Kreme Inc'
  },
  {
    symbol: 'DNZ',
    name: 'D and Z Media Acquisition Corp - Class A'
  },
  {
    symbol: 'DNZ-U',
    name: 'D and Z Media Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'DNZ-WS',
    name: 'D and Z Media Acquisition Corp - Warrants (27/01/2026)'
  },
  {
    symbol: 'DO',
    name: 'Diamond Offshore Drilling Inc'
  },
  {
    symbol: 'DOC',
    name: 'Physicians Realty Trust'
  },
  {
    symbol: 'DOCN',
    name: 'DigitalOcean Holdings Inc'
  },
  {
    symbol: 'DOCS',
    name: 'Doximity Inc - Class A'
  },
  {
    symbol: 'DOCU',
    name: 'DocuSign Inc'
  },
  {
    symbol: 'DOGZ',
    name: 'Dogness (International) Corp - Class A'
  },
  {
    symbol: 'DOLE',
    name: 'Dole plc'
  },
  {
    symbol: 'DOMA',
    name: 'Doma Holdings Inc - New'
  },
  {
    symbol: 'DOMA-WS',
    name: 'Doma Holdings Inc Wt Exp 07282026'
  },
  {
    symbol: 'DOMO',
    name: 'Domo Inc - Class B'
  },
  {
    symbol: 'DOOO',
    name: 'BRP Inc'
  },
  {
    symbol: 'DOOR',
    name: 'Masonite International Corp'
  },
  {
    symbol: 'DORM',
    name: 'Dorman Products Inc'
  },
  {
    symbol: 'DOUG',
    name: 'Douglas Elliman Inc'
  },
  {
    symbol: 'DOV',
    name: 'Dover Corp'
  },
  {
    symbol: 'DOW',
    name: 'Dow Inc'
  },
  {
    symbol: 'DOX',
    name: 'Amdocs Ltd'
  },
  {
    symbol: 'DOYU',
    name: 'DouYu International Holdings Ltd'
  },
  {
    symbol: 'DPCS',
    name: 'DP Cap Acquisition Corp I - Class A'
  },
  {
    symbol: 'DPCSU',
    name: 'DP Cap Acquisition Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'DPCSW',
    name: 'DP Cap Acquisition Corp I - Warrants (08/11/2026)'
  },
  {
    symbol: 'DPRO',
    name: 'Draganfly Inc'
  },
  {
    symbol: 'DPSI',
    name: 'DecisionPoint Systems Inc'
  },
  {
    symbol: 'DPW',
    name: ''
  },
  {
    symbol: 'DPZ',
    name: 'Dominos Pizza Inc'
  },
  {
    symbol: 'DQ',
    name: 'Daqo New Energy Corp'
  },
  {
    symbol: 'DRAY',
    name: 'Macondray Capital Acquisition Corp I - Class A'
  },
  {
    symbol: 'DRAYU',
    name: 'Macondray Capital Acquisition Corp I - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'DRAYW',
    name: 'Macondray Capital Acquisition Corp I - Warrants (31/05/2028)'
  },
  {
    symbol: 'DRCT',
    name: 'Direct Digital Holdings Inc Class A'
  },
  {
    symbol: 'DRCTW',
    name: 'Direct Digital Holdings Inc - Warrants (03/02/2027)'
  },
  {
    symbol: 'DRD',
    name: 'DRDGold Ltd'
  },
  {
    symbol: 'DRE',
    name: 'Duke Realty Corp'
  },
  {
    symbol: 'DRH',
    name: 'Diamondrock Hospitality Company'
  },
  {
    symbol: 'DRH-P-A',
    name: 'Diamondrock Hospitality Company'
  },
  {
    symbol: 'DRI',
    name: 'Darden Restaurants Inc'
  },
  {
    symbol: 'DRIO',
    name: 'DarioHealth Corp'
  },
  {
    symbol: 'DRMA',
    name: 'Dermata Therapeutics Inc'
  },
  {
    symbol: 'DRMAW',
    name: 'Dermata Therapeutics Inc - Warrants (13/08/2026)'
  },
  {
    symbol: 'DRQ',
    name: 'Dril-Quip Inc'
  },
  {
    symbol: 'DRRX',
    name: 'Durect Corp'
  },
  {
    symbol: 'DRTS',
    name: 'Alpha Tau Medical Ltd'
  },
  {
    symbol: 'DRTSW',
    name: 'Alpha Tau Medical Ltd - Warrants (07/03/2027)'
  },
  {
    symbol: 'DRTT',
    name: 'DIRTT Environmental Solutions Ltd'
  },
  {
    symbol: 'DRUG',
    name: 'Bright Minds Biosciences Inc'
  },
  {
    symbol: 'DRVN',
    name: 'Driven Brands Holdings Inc'
  },
  {
    symbol: 'DS',
    name: 'Drive Shack Inc'
  },
  {
    symbol: 'DS-P-B',
    name: 'Drive Shack Inc Preferred Series B'
  },
  {
    symbol: 'DS-P-C',
    name: 'Drive Shack Inc Preferred Series C'
  },
  {
    symbol: 'DS-P-D',
    name: 'Drive Shack Inc Pfd Ser D'
  },
  {
    symbol: 'DSAC',
    name: 'Duddell Street Acquisition Corp - Class A'
  },
  {
    symbol: 'DSACU',
    name: 'Duddell Street Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'DSACW',
    name: 'Duddell Street Acquisition Corp - Warrants (21/10/2025)'
  },
  {
    symbol: 'DSAQ',
    name: 'Direct Selling Acquisition Corp - Class A'
  },
  {
    symbol: 'DSAQ-U',
    name: 'Direct Selling Acquisition Corp Units each consisting of one share of Class A common stock and onehalf of redeemable warrant'
  },
  {
    symbol: 'DSAQ-WS',
    name: 'Direct Selling Acquisition Corp - Warrants (30/09/2028)'
  },
  {
    symbol: 'DSEY',
    name: 'Diversey Holdings Ltd'
  },
  {
    symbol: 'DSGN',
    name: 'Design Therapeutics Inc'
  },
  {
    symbol: 'DSGR',
    name: 'Distribution Solutions Group Inc'
  },
  {
    symbol: 'DSGX',
    name: 'Descartes Systems Group Inc'
  },
  {
    symbol: 'DSKE',
    name: 'Daseke Inc'
  },
  {
    symbol: 'DSLV',
    name: ''
  },
  {
    symbol: 'DSP',
    name: 'Viant Technology Inc - Class A'
  },
  {
    symbol: 'DSS',
    name: 'DSS Inc'
  },
  {
    symbol: 'DSWL',
    name: 'Deswell Industries Inc'
  },
  {
    symbol: 'DSX',
    name: 'Diana Shipping Inc'
  },
  {
    symbol: 'DSX-P-B',
    name: 'Diana Shipping Inc Perpetual Preferred Shares Series B Marshall Islands'
  },
  {
    symbol: 'DT',
    name: 'Dynatrace Inc'
  },
  {
    symbol: 'DTB',
    name: 'DTE Energy Company'
  },
  {
    symbol: 'DTC',
    name: 'Solo Brands Inc - Class A'
  },
  {
    symbol: 'DTE',
    name: 'DTE Energy Company'
  },
  {
    symbol: 'DTE 6.25',
    name: 'DTE Energy Company'
  },
  {
    symbol: 'DTE-W',
    name: 'DTE Energy Company ExDistribution When Issued'
  },
  {
    symbol: 'DTEA',
    name: 'Davidstea Inc'
  },
  {
    symbol: 'DTG',
    name: 'DTE Energy Company'
  },
  {
    symbol: 'DTIL',
    name: 'Precision Biosciences Inc'
  },
  {
    symbol: 'DTLA-P',
    name: 'Brookfield DTLA Inc 7625 Series A Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'DTM',
    name: 'DT Midstream Inc'
  },
  {
    symbol: 'DTM-W',
    name: 'DT Midstream Inc When Issued'
  },
  {
    symbol: 'DTOC',
    name: 'Digital Transformation Opportunities Corp - Class A'
  },
  {
    symbol: 'DTOCU',
    name: 'Digital Transformation Opportunities Corp - Units (1 Ord Class A & 1/4 War)'
  },
  {
    symbol: 'DTOCW',
    name: 'Digital Transformation Opportunities Corp - Warrants (31/03/2028)'
  },
  {
    symbol: 'DTRT',
    name: 'DTRT Health Acquisition Corp - Class A'
  },
  {
    symbol: 'DTRTU',
    name: 'DTRT Health Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'DTRTW',
    name: 'DTRT Health Acquisition Corp - Warrants (31/08/2029)'
  },
  {
    symbol: 'DTSS',
    name: 'Datasea Inc'
  },
  {
    symbol: 'DTST',
    name: 'Data Storage Corp'
  },
  {
    symbol: 'DTSTW',
    name: 'Data Storage Corp - Warrants (13/05/2026)'
  },
  {
    symbol: 'DTW',
    name: 'DTE Energy Company'
  },
  {
    symbol: 'DUET',
    name: 'DUET Acquisition Corp - Class A'
  },
  {
    symbol: 'DUETU',
    name: 'DUET Acquisition Corp - Units (1 Ord Share Class A & 1 War)'
  },
  {
    symbol: 'DUETW',
    name: 'DUET Acquisition Corp - Warrants (18/01/2027)'
  },
  {
    symbol: 'DUK',
    name: 'Duke Energy Corp'
  },
  {
    symbol: 'DUK-P-A',
    name: 'Duke Energy Corporation Depositary Shares Series A'
  },
  {
    symbol: 'DUKB',
    name: 'Duke Energy Corporation 5625 Junior Subordinated Debentures due 2078'
  },
  {
    symbol: 'DUNE',
    name: 'Dune Acquisition Corporation - Class A'
  },
  {
    symbol: 'DUNEU',
    name: 'Dune Acquisition Corporation - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'DUNEW',
    name: 'Dune Acquisition Corporation - Warrants (17/12/2025)'
  },
  {
    symbol: 'DUO',
    name: 'Fangdd Network Group Ltd'
  },
  {
    symbol: 'DUOL',
    name: 'Duolingo Inc - Class A'
  },
  {
    symbol: 'DUOT',
    name: 'Duos Technologies Group Inc'
  },
  {
    symbol: 'DV',
    name: 'DoubleVerify Holdings Inc'
  },
  {
    symbol: 'DVA',
    name: 'DaVita Inc'
  },
  {
    symbol: 'DVAX',
    name: 'Dynavax Technologies Corp'
  },
  {
    symbol: 'DVN',
    name: 'Devon Energy Corp'
  },
  {
    symbol: 'DWAC',
    name: 'Digital World Acquisition Corp - Class A'
  },
  {
    symbol: 'DWACU',
    name: 'Digital World Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'DWACW',
    name: 'Digital World Acquisition Corp - Warrants (30/06/2028)'
  },
  {
    symbol: 'DWIN',
    name: 'Delwinds Insurance Acquisition Corp - Class A'
  },
  {
    symbol: 'DWIN-U',
    name: 'Delwinds Insurance Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'DWIN-WS',
    name: 'Delwinds Insurance Acquisition Corp - Warrants (01/08/2027)'
  },
  {
    symbol: 'DWSN',
    name: 'Dawson Geophysical Company'
  },
  {
    symbol: 'DX',
    name: 'Dynex Capital Inc'
  },
  {
    symbol: 'DX-P-A',
    name: 'Dynex Capital Inc Preferred Stock Series A'
  },
  {
    symbol: 'DX-P-A-CL',
    name: 'Dynex Capital Inc. Preferred Stock Series A'
  },
  {
    symbol: 'DX-P-C',
    name: 'Dynex Capital Inc'
  },
  {
    symbol: 'DXB',
    name: 'Deutsche Bk Contingent Cap TR II Tr Pfd Sec'
  },
  {
    symbol: 'DXB-CL',
    name: 'Deutsche Bk Contingent Cap TR II Tr Pfd Sec'
  },
  {
    symbol: 'DXBCL',
    name: 'Deutsche Bk Contingent Cap TR II Tr Pfd Sec'
  },
  {
    symbol: 'DXC',
    name: 'DXC Technology Company'
  },
  {
    symbol: 'DXCM',
    name: 'Dexcom Inc'
  },
  {
    symbol: 'DXF',
    name: 'Dunxin Financial Holdings Ltd.'
  },
  {
    symbol: 'DXLG',
    name: 'Destination XL Group Inc'
  },
  {
    symbol: 'DXPE',
    name: 'DXP Enterprises Inc'
  },
  {
    symbol: 'DXR',
    name: 'Daxor Corp'
  },
  {
    symbol: 'DXYN',
    name: 'Dixie Group Inc'
  },
  {
    symbol: 'DY',
    name: 'Dycom Industries Inc'
  },
  {
    symbol: 'DYAI',
    name: 'Dyadic International Inc DE'
  },
  {
    symbol: 'DYFN',
    name: 'Angel Oak Dynamic Financial Strategies Income Term Trust'
  },
  {
    symbol: 'DYN',
    name: 'Dyne Therapeutics Inc'
  },
  {
    symbol: 'DYNT',
    name: 'Dynatronics Corp'
  },
  {
    symbol: 'DZSI',
    name: 'DZS Inc'
  },
  {
    symbol: 'E',
    name: 'Eni Spa'
  },
  {
    symbol: 'EA',
    name: 'Electronic Arts Inc'
  },
  {
    symbol: 'EAC',
    name: 'Edify Acquisition Corp - Class A'
  },
  {
    symbol: 'EACPU',
    name: 'Edify Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'EACPW',
    name: 'Edify Acquisition Corp - Warrants (25/11/2025)'
  },
  {
    symbol: 'EAF',
    name: 'GrafTech International Ltd'
  },
  {
    symbol: 'EAI',
    name: 'Entergy Arkansas LLC'
  },
  {
    symbol: 'EAR',
    name: 'Eargo Inc'
  },
  {
    symbol: 'EARN',
    name: 'Ellington Residential Mortgage REIT'
  },
  {
    symbol: 'EAST',
    name: 'Eastside Distilling Inc'
  },
  {
    symbol: 'EAT',
    name: 'Brinker International Inc'
  },
  {
    symbol: 'EB',
    name: 'Eventbrite Inc - Class A'
  },
  {
    symbol: 'EBAC',
    name: 'European Biotech Acquisition Corp - Class A'
  },
  {
    symbol: 'EBACU',
    name: 'European Biotech Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'EBACW',
    name: 'European Biotech Acquisition Corp - Warrants (06/03/2026)'
  },
  {
    symbol: 'EBAY',
    name: 'EBay Inc'
  },
  {
    symbol: 'EBC',
    name: 'Eastern Bankshares Inc'
  },
  {
    symbol: 'EBET',
    name: 'EBET Inc'
  },
  {
    symbol: 'EBF',
    name: 'Ennis Inc'
  },
  {
    symbol: 'EBIX',
    name: 'Ebix Inc'
  },
  {
    symbol: 'EBMT',
    name: 'Eagle Bancorp Montana Inc'
  },
  {
    symbol: 'EBON',
    name: 'Ebang International Holdings Inc - Class A'
  },
  {
    symbol: 'EBR',
    name: 'Centrais Eletricas Brasileiras S.A.'
  },
  {
    symbol: 'EBR-B',
    name: 'Centrais Eletricas Brasileiras S.A.'
  },
  {
    symbol: 'EBS',
    name: 'Emergent Biosolutions Inc'
  },
  {
    symbol: 'EBTC',
    name: 'Enterprise Bancorp Inc'
  },
  {
    symbol: 'EC',
    name: 'Ecopetrol SA'
  },
  {
    symbol: 'ECAT',
    name: 'BlackRock ESG Capital Allocation Trust'
  },
  {
    symbol: 'ECC-P-D',
    name: 'Eagle Point Credit Company Inc'
  },
  {
    symbol: 'ECCA',
    name: 'Eagle Point Credit Company Inc 775 Pfd Ser A 2022'
  },
  {
    symbol: 'ECCA-CL',
    name: ''
  },
  {
    symbol: 'ECCACL',
    name: 'Eagle Point Credit Company Inc. Series A Term Preferred Stock due 2022'
  },
  {
    symbol: 'ECCC',
    name: 'Eagle Point Credit Company Inc'
  },
  {
    symbol: 'ECCV',
    name: 'Eagle Point Credit Company Inc'
  },
  {
    symbol: 'ECCW',
    name: 'Eagle Point Credit Company Inc'
  },
  {
    symbol: 'ECCX',
    name: 'Eagle Point Credit Company Inc'
  },
  {
    symbol: 'ECL',
    name: 'Ecolab Inc'
  },
  {
    symbol: 'ECL-WD',
    name: 'Ecolab Inc. When Distributed'
  },
  {
    symbol: 'ECOM',
    name: 'ChannelAdvisor Corp'
  },
  {
    symbol: 'ECOR',
    name: 'ElectroCore Inc'
  },
  {
    symbol: 'ECPG',
    name: 'Encore Capital Group Inc'
  },
  {
    symbol: 'ECT',
    name: 'Eca Marcellus Trust I'
  },
  {
    symbol: 'ECVT',
    name: 'Ecovyst Inc'
  },
  {
    symbol: 'ED',
    name: 'Consolidated Edison Inc'
  },
  {
    symbol: 'EDAP',
    name: 'EDAP TMS S.A.'
  },
  {
    symbol: 'EDBL',
    name: 'Edible Garden AG Inc'
  },
  {
    symbol: 'EDBLW',
    name: 'Edible Garden AG Inc - Warrants(18/04/2027)'
  },
  {
    symbol: 'EDIT',
    name: 'Editas Medicine Inc'
  },
  {
    symbol: 'EDN',
    name: 'Empresa Distribuidora y Comercial Norte S.A.'
  },
  {
    symbol: 'EDNC',
    name: 'Endurance Acquisition Corp - Class A'
  },
  {
    symbol: 'EDNCU',
    name: 'Endurance Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'EDNCW',
    name: 'Endurance Acquisition Corp - Warrants (01/09/2026)'
  },
  {
    symbol: 'EDR',
    name: 'Endeavor Group Holdings Inc - Class A'
  },
  {
    symbol: 'EDRY',
    name: 'EuroDry Ltd'
  },
  {
    symbol: 'EDSA',
    name: 'Edesa Biotech Inc'
  },
  {
    symbol: 'EDTK',
    name: 'Skillful Craftsman Education Technology Ltd'
  },
  {
    symbol: 'EDTX',
    name: 'EdtechX Holdings Acquisition Corp II - Class A'
  },
  {
    symbol: 'EDTXU',
    name: 'EdtechX Holdings Acquisition Corp II - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'EDTXW',
    name: 'EdtechX Holdings Acquisition Corp II - Warrants (10/12/2025)'
  },
  {
    symbol: 'EDU',
    name: 'New Oriental Education & Technology Group Inc'
  },
  {
    symbol: 'EDUC',
    name: 'Educational Development Corp'
  },
  {
    symbol: 'EE',
    name: 'Excelerate Energy Inc - Class A'
  },
  {
    symbol: 'EEFT',
    name: 'Euronet Worldwide Inc'
  },
  {
    symbol: 'EEIQ',
    name: 'Elite Education Group International Ltd'
  },
  {
    symbol: 'EEX',
    name: 'Emerald Holding Inc'
  },
  {
    symbol: 'EFC',
    name: 'Ellington Financial Inc'
  },
  {
    symbol: 'EFC-P-A',
    name: 'Ellington Financial Inc'
  },
  {
    symbol: 'EFC-P-B',
    name: 'Ellington Financial Inc'
  },
  {
    symbol: 'EFOI',
    name: 'Energy Focus Inc'
  },
  {
    symbol: 'EFSC',
    name: 'Enterprise Financial Services Corp'
  },
  {
    symbol: 'EFSCP',
    name: 'Enterprise Financial Services Corp'
  },
  {
    symbol: 'EFSH',
    name: '1847 Holdings LLC'
  },
  {
    symbol: 'EFTR',
    name: 'eFFECTOR Therapeutics Inc'
  },
  {
    symbol: 'EFTRW',
    name: 'eFFECTOR Therapeutics Inc - Warrants (26/08/2026)'
  },
  {
    symbol: 'EFX',
    name: 'Equifax Inc'
  },
  {
    symbol: 'EGAN',
    name: 'eGain Corp'
  },
  {
    symbol: 'EGBN',
    name: 'Eagle Bancorp Inc (MD)'
  },
  {
    symbol: 'EGGF',
    name: 'EG Acquisition Corp - Class A'
  },
  {
    symbol: 'EGGF-U',
    name: 'EG Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'EGGF-WS',
    name: 'EG Acquisition Corp - Warrants (28/05/2028)'
  },
  {
    symbol: 'EGHT',
    name: '8X8 Inc'
  },
  {
    symbol: 'EGIO',
    name: 'Edgio Inc'
  },
  {
    symbol: 'EGLE',
    name: 'Eagle Bulk Shipping Inc'
  },
  {
    symbol: 'EGLX',
    name: 'Enthusiast Gaming Holdings Inc'
  },
  {
    symbol: 'EGO',
    name: 'Eldorado Gold Corp'
  },
  {
    symbol: 'EGP',
    name: 'Eastgroup Properties Inc'
  },
  {
    symbol: 'EGRX',
    name: 'Eagle Pharmaceuticals Inc'
  },
  {
    symbol: 'EGY',
    name: 'VAALCO Energy Inc'
  },
  {
    symbol: 'EH',
    name: 'EHang Holdings Ltd'
  },
  {
    symbol: 'EHAB',
    name: 'Enhabit Inc'
  },
  {
    symbol: 'EHAB-W',
    name: 'Enhabit Inc WhenIssued'
  },
  {
    symbol: 'EHC',
    name: 'Encompass Health Corp'
  },
  {
    symbol: 'EHC-W',
    name: 'Encompass Health Corporation WhenIssued'
  },
  {
    symbol: 'EHTH',
    name: 'eHealth Inc'
  },
  {
    symbol: 'EIC',
    name: 'Eagle Point Income Company Inc'
  },
  {
    symbol: 'EICA',
    name: 'Eagle Point Income Company Inc'
  },
  {
    symbol: 'EIG',
    name: 'Employers Holdings Inc'
  },
  {
    symbol: 'EIGR',
    name: 'Eiger BioPharmaceuticals Inc'
  },
  {
    symbol: 'EIX',
    name: 'Edison International'
  },
  {
    symbol: 'EJFA',
    name: 'EJF Acquisition Corp - Class A'
  },
  {
    symbol: 'EJFAU',
    name: 'EJF Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'EJFAW',
    name: 'EJF Acquisition Corp - Warrants (10/03/2026)'
  },
  {
    symbol: 'EJH',
    name: 'E-Home Household Service Holdings Ltd'
  },
  {
    symbol: 'EKSO',
    name: 'Ekso Bionics Holdings Inc'
  },
  {
    symbol: 'EL',
    name: 'Estee Lauder Cos. Inc - Class A'
  },
  {
    symbol: 'ELA',
    name: 'Envela Corp'
  },
  {
    symbol: 'ELAN',
    name: 'Elanco Animal Health Inc'
  },
  {
    symbol: 'ELAT',
    name: 'Elanco Animal Health Inc - Units ( Purchase Contract & Senior Amortizing Note)'
  },
  {
    symbol: 'ELBM',
    name: 'Electra Battery Materials Corp'
  },
  {
    symbol: 'ELC',
    name: 'Entergy Louisiana LLC'
  },
  {
    symbol: 'ELDN',
    name: 'Eledon Pharmaceuticals Inc'
  },
  {
    symbol: 'ELEV',
    name: 'Elevation Oncology Inc'
  },
  {
    symbol: 'ELF',
    name: 'e.l.f. Beauty Inc'
  },
  {
    symbol: 'ELLO',
    name: 'Ellomay Capital Ltd'
  },
  {
    symbol: 'ELMD',
    name: 'Electromed Inc'
  },
  {
    symbol: 'ELOX',
    name: 'Eloxx Pharmaceuticals Inc'
  },
  {
    symbol: 'ELP',
    name: 'Cia Paranaense De Energia Copel'
  },
  {
    symbol: 'ELS',
    name: 'Equity Lifestyle Properties Inc'
  },
  {
    symbol: 'ELSE',
    name: 'Electro-Sensors Inc'
  },
  {
    symbol: 'ELTK',
    name: 'Eltek Ltd'
  },
  {
    symbol: 'ELV',
    name: 'Elevance Health Inc'
  },
  {
    symbol: 'ELVT',
    name: 'Elevate Credit Inc'
  },
  {
    symbol: 'ELY',
    name: 'Callaway Golf Company'
  },
  {
    symbol: 'ELYM',
    name: 'Eliem Therapeutics Inc'
  },
  {
    symbol: 'ELYS',
    name: 'Elys Game Technology Corp'
  },
  {
    symbol: 'EM',
    name: 'Smart Share Global Ltd'
  },
  {
    symbol: 'EMAN',
    name: 'EMagin Corp'
  },
  {
    symbol: 'EMBC',
    name: 'Embecta Corp'
  },
  {
    symbol: 'EMBCV',
    name: 'Embecta Corp'
  },
  {
    symbol: 'EMBK',
    name: 'Embark Technology Inc'
  },
  {
    symbol: 'EMBKW',
    name: 'Embark Technology Inc Warrant'
  },
  {
    symbol: 'EMCF',
    name: 'Emclaire Financial Corp'
  },
  {
    symbol: 'EME',
    name: 'Emcor Group Inc'
  },
  {
    symbol: 'EMKR',
    name: 'Emcore Corp'
  },
  {
    symbol: 'EML',
    name: 'Eastern Company'
  },
  {
    symbol: 'EMLD',
    name: 'FTAC Emerald Acquisition Corp - Class A'
  },
  {
    symbol: 'EMLDU',
    name: 'FTAC Emerald Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'EMLDW',
    name: 'FTAC Emerald Acquisition Corp - Warrants (19/10/2028)'
  },
  {
    symbol: 'EMN',
    name: 'Eastman Chemical Company'
  },
  {
    symbol: 'EMP',
    name: 'Entergy Mississippi Inc First Mortgage Bonds 490 Series Due October 1 2066'
  },
  {
    symbol: 'EMR',
    name: 'Emerson Electric Company'
  },
  {
    symbol: 'EMWP',
    name: 'Eros Media World PLC - Class A'
  },
  {
    symbol: 'EMX',
    name: 'EMX Royalty Corp'
  },
  {
    symbol: 'ENB',
    name: 'Enbridge Inc'
  },
  {
    symbol: 'ENBA',
    name: 'Enbridge Inc'
  },
  {
    symbol: 'ENCP',
    name: 'Energem Corp - Class A'
  },
  {
    symbol: 'ENCPU',
    name: 'Energem Corp - Units (1 Ord Share Class A & 1 War)'
  },
  {
    symbol: 'ENCPW',
    name: 'Energem Corp - Warrants (15/11/2026)'
  },
  {
    symbol: 'ENDP',
    name: 'Endo International plc'
  },
  {
    symbol: 'ENER',
    name: 'Accretion Acquisition Corp'
  },
  {
    symbol: 'ENERR',
    name: 'Accretion Acquisition Corp'
  },
  {
    symbol: 'ENERU',
    name: 'Accretion Acquisition Corp - Units (1 1 Rights & 1/2 War)'
  },
  {
    symbol: 'ENERW',
    name: 'Accretion Acquisition Corp - Warrants (01/03/2028)'
  },
  {
    symbol: 'ENFN',
    name: 'Enfusion Inc - Class A'
  },
  {
    symbol: 'ENG',
    name: 'Englobal Corporation'
  },
  {
    symbol: 'ENIA',
    name: ''
  },
  {
    symbol: 'ENIC',
    name: 'Enel Chile S.A.'
  },
  {
    symbol: 'ENJ',
    name: 'Entergy New Orleans Inc'
  },
  {
    symbol: 'ENLC',
    name: 'Enlink Midstream LLC'
  },
  {
    symbol: 'ENLV',
    name: 'Enlivex Therapeutics Ltd'
  },
  {
    symbol: 'ENO',
    name: 'Entergy New Orleans Inc'
  },
  {
    symbol: 'ENOB',
    name: 'Enochian Biosciences Inc'
  },
  {
    symbol: 'ENOV',
    name: 'Enovis Corp'
  },
  {
    symbol: 'ENPC',
    name: 'Executive Network Partnering Corporation - Class A'
  },
  {
    symbol: 'ENPC-U',
    name: 'Executive Network Partnering Corporation - Units (1 Ord Class A & 1/4 War)'
  },
  {
    symbol: 'ENPC-WS',
    name: 'Executive Network Partnering Corporation - Warrants(25/09/2028)'
  },
  {
    symbol: 'ENPH',
    name: 'Enphase Energy Inc'
  },
  {
    symbol: 'ENR',
    name: 'Energizer Holdings Inc'
  },
  {
    symbol: 'ENS',
    name: 'Enersys'
  },
  {
    symbol: 'ENSC',
    name: 'Ensysce Biosciences Inc'
  },
  {
    symbol: 'ENSG',
    name: 'Ensign Group Inc'
  },
  {
    symbol: 'ENSV',
    name: 'Enservco Corp'
  },
  {
    symbol: 'ENTA',
    name: 'Enanta Pharmaceuticals Inc'
  },
  {
    symbol: 'ENTF',
    name: 'Enterprise 4.0 Technology Acquisition Corp - Class A'
  },
  {
    symbol: 'ENTFU',
    name: 'Enterprise 4.0 Technology Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'ENTFW',
    name: 'Enterprise 4.0 Technology Acquisition Corp - Warrants (14/10/2026)'
  },
  {
    symbol: 'ENTG',
    name: 'Entegris Inc'
  },
  {
    symbol: 'ENTX',
    name: 'Entera Bio Ltd'
  },
  {
    symbol: 'ENTXW',
    name: 'Entera Bio Ltd - Warrants (27/06/2023)'
  },
  {
    symbol: 'ENV',
    name: 'Envestnet Inc'
  },
  {
    symbol: 'ENVA',
    name: 'Enova International Inc'
  },
  {
    symbol: 'ENVB',
    name: 'Enveric Biosciences Inc'
  },
  {
    symbol: 'ENVX',
    name: 'Enovix Corporation'
  },
  {
    symbol: 'ENZ',
    name: 'Enzo Biochem Inc'
  },
  {
    symbol: 'EOCW',
    name: 'Elliott Opportunity II Corp - Class A'
  },
  {
    symbol: 'EOCW-U',
    name: 'Elliott Opportunity II Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'EOCW-WS',
    name: 'Elliott Opportunity II Corp - Warrants (02/03/2026)'
  },
  {
    symbol: 'EOG',
    name: 'EOG Resources Inc'
  },
  {
    symbol: 'EOLS',
    name: 'Evolus Inc'
  },
  {
    symbol: 'EOSE',
    name: 'Eos Energy Enterprises Inc - Class A'
  },
  {
    symbol: 'EOSEW',
    name: 'Eos Energy Enterprises Inc - Warrants (06/05/2026)'
  },
  {
    symbol: 'EP',
    name: 'Empire Petroleum Corporation'
  },
  {
    symbol: 'EP-P-C',
    name: 'El Paso Corporation Preferred Stock'
  },
  {
    symbol: 'EPAC',
    name: 'Enerpac Tool Group Corp - Class A'
  },
  {
    symbol: 'EPAM',
    name: 'EPAM Systems Inc'
  },
  {
    symbol: 'EPC',
    name: 'Edgewell Personal Care Company'
  },
  {
    symbol: 'EPD',
    name: 'Enterprise Products Partners L P'
  },
  {
    symbol: 'EPHY',
    name: 'Epiphany Technology Acquisition Corp - Class A'
  },
  {
    symbol: 'EPHYU',
    name: 'Epiphany Technology Acquisition Corp - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'EPHYW',
    name: 'Epiphany Technology Acquisition Corp - Warrants (06/01/2026)'
  },
  {
    symbol: 'EPIX',
    name: 'Essa Pharma Inc'
  },
  {
    symbol: 'EPM',
    name: 'Evolution Petroleum Corporation'
  },
  {
    symbol: 'EPR',
    name: 'EPR Properties'
  },
  {
    symbol: 'EPR-P-C',
    name: 'EPR Properties 575 Series C Cumulative Convertible Preferred Shares'
  },
  {
    symbol: 'EPR-P-E',
    name: 'EPR Properties'
  },
  {
    symbol: 'EPR-P-G',
    name: 'EPR Properties 5750 Series G Cumulative Redeemable Preferred Shares'
  },
  {
    symbol: 'EPRT',
    name: 'Essential Properties Realty Trust Inc'
  },
  {
    symbol: 'EPSN',
    name: 'Epsilon Energy Ltd'
  },
  {
    symbol: 'EPWR',
    name: 'Empowerment & Inclusion Capital I Corp - Class A'
  },
  {
    symbol: 'EPWR-U',
    name: 'Empowerment & Inclusion Capital I Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'EPWR-WS',
    name: 'Empowerment & Inclusion Capital I Corp - Warrants(12/01/2028)'
  },
  {
    symbol: 'EPZM',
    name: 'Epizyme Inc'
  },
  {
    symbol: 'EQ',
    name: 'Equillium Inc'
  },
  {
    symbol: 'EQBK',
    name: 'Equity Bancshares Inc - Class A'
  },
  {
    symbol: 'EQC',
    name: 'Equity Commonwealth'
  },
  {
    symbol: 'EQC-P-D',
    name: 'Equity Commonwealth 650 Pfd Conv Shs Ser D'
  },
  {
    symbol: 'EQD',
    name: 'Equity Distribution Acquisition Corp - Class A'
  },
  {
    symbol: 'EQD-U',
    name: 'Equity Distribution Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'EQD-WS',
    name: 'Equity Distribution Acquisition Corp - Warrants (09/09/2025)'
  },
  {
    symbol: 'EQH',
    name: 'Equitable Holdings Inc'
  },
  {
    symbol: 'EQH-P-A',
    name: 'Equitable Holdings Inc'
  },
  {
    symbol: 'EQH-P-C',
    name: 'Equitable Holdings Inc'
  },
  {
    symbol: 'EQHA',
    name: 'EQ Health Acquisition Corp - Class A'
  },
  {
    symbol: 'EQHA-U',
    name: 'EQ Health Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'EQHA-WS',
    name: 'EQ Health Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'EQIX',
    name: 'Equinix Inc'
  },
  {
    symbol: 'EQNR',
    name: 'Equinor ASA'
  },
  {
    symbol: 'EQOS',
    name: 'Eqonex Ltd'
  },
  {
    symbol: 'EQR',
    name: 'Equity Residential Properties Trust'
  },
  {
    symbol: 'EQRX',
    name: 'EQRx Inc'
  },
  {
    symbol: 'EQRXW',
    name: 'EQRx Inc - Warrants (17/12/2026)'
  },
  {
    symbol: 'EQS',
    name: 'Equus Total Return Inc'
  },
  {
    symbol: 'EQT',
    name: 'EQT Corp'
  },
  {
    symbol: 'EQX',
    name: 'Equinox Gold Corp'
  },
  {
    symbol: 'ERAS',
    name: 'Erasca Inc'
  },
  {
    symbol: 'ERES',
    name: 'East Resources Acquisition Co - Class A'
  },
  {
    symbol: 'ERESU',
    name: 'East Resources Acquisition Co - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ERESW',
    name: 'East Resources Acquisition Co - Warrants (01/07/2027)'
  },
  {
    symbol: 'ERF',
    name: 'Enerplus Corporation'
  },
  {
    symbol: 'ERIC',
    name: 'Telefonaktiebolaget L M Ericsson'
  },
  {
    symbol: 'ERIE',
    name: 'Erie Indemnity Co. - Class A'
  },
  {
    symbol: 'ERII',
    name: 'Energy Recovery Inc'
  },
  {
    symbol: 'ERJ',
    name: 'Embraer S.A.'
  },
  {
    symbol: 'ERYP',
    name: 'Erytech Pharma'
  },
  {
    symbol: 'ES',
    name: 'Eversource Energy'
  },
  {
    symbol: 'ESAB',
    name: 'ESAB Corp'
  },
  {
    symbol: 'ESAB-W',
    name: 'ESAB Corporation WhenIssued'
  },
  {
    symbol: 'ESAC',
    name: 'Esgen Acquisition Corp - Class A'
  },
  {
    symbol: 'ESACU',
    name: 'Esgen Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ESACW',
    name: 'Esgen Acquisition Corp - Warrants (18/10/2026)'
  },
  {
    symbol: 'ESBA',
    name: 'Empire State Realty OP LP'
  },
  {
    symbol: 'ESCA',
    name: 'Escalade Inc'
  },
  {
    symbol: 'ESE',
    name: 'Esco Technologies Inc'
  },
  {
    symbol: 'ESEA',
    name: 'Euroseas Ltd'
  },
  {
    symbol: 'ESGR',
    name: 'Enstar Group Ltd'
  },
  {
    symbol: 'ESGRO',
    name: 'Enstar Group Ltd Depositary Shs Each Repstg 11000 Int Sh Perpetual Non Cumulative Pref Sh'
  },
  {
    symbol: 'ESGRP',
    name: 'Enstar Group Limited Depositary Shares Each Representing 11000th of an interest in Preference Shares'
  },
  {
    symbol: 'ESI',
    name: 'Element Solutions Inc'
  },
  {
    symbol: 'ESLT',
    name: 'Elbit Systems Ltd'
  },
  {
    symbol: 'ESM',
    name: 'ESM Acquisition Corp - Class A'
  },
  {
    symbol: 'ESM-U',
    name: 'ESM Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'ESM-WS',
    name: 'ESM Acquisition Corp - Warrants (02/02/2026)'
  },
  {
    symbol: 'ESMT',
    name: 'Engagesmart Inc'
  },
  {
    symbol: 'ESNT',
    name: 'Essent Group Ltd'
  },
  {
    symbol: 'ESOA',
    name: 'Energy Services of America Corp'
  },
  {
    symbol: 'ESP',
    name: 'Espey Manufacturing & Electronics Corp'
  },
  {
    symbol: 'ESPR',
    name: 'Esperion Therapeutics Inc'
  },
  {
    symbol: 'ESQ',
    name: 'Esquire Financial Holdings Inc'
  },
  {
    symbol: 'ESRT',
    name: 'Empire State Realty Trust Inc - Class A'
  },
  {
    symbol: 'ESS',
    name: 'Essex Property Trust Inc'
  },
  {
    symbol: 'ESSA',
    name: 'ESSA Bancorp Inc'
  },
  {
    symbol: 'ESSC',
    name: 'East Stone Acquisition Corp'
  },
  {
    symbol: 'ESSCR',
    name: 'East Stone Acquisition Corp'
  },
  {
    symbol: 'ESSCU',
    name: 'East Stone Acquisition Corp - Units (1 Ord 1 Right & 1 Warrant)'
  },
  {
    symbol: 'ESSCW',
    name: 'East Stone Acquisition Corp - Warrants (31/12/2026)'
  },
  {
    symbol: 'ESTA',
    name: 'Establishment Labs Holdings Inc'
  },
  {
    symbol: 'ESTC',
    name: 'Elastic N.V'
  },
  {
    symbol: 'ESTE',
    name: 'Earthstone Energy Inc - Class A'
  },
  {
    symbol: 'ET',
    name: 'Energy Transfer LP'
  },
  {
    symbol: 'ET-P-C',
    name: 'Energy Transfer LP'
  },
  {
    symbol: 'ET-P-D',
    name: 'Energy Transfer LP'
  },
  {
    symbol: 'ET-P-E',
    name: 'Energy Transfer LP'
  },
  {
    symbol: 'ETAC',
    name: 'E.Merge Technology Acquisition Corp - Class A'
  },
  {
    symbol: 'ETACU',
    name: 'E.Merge Technology Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'ETACW',
    name: 'E.Merge Technology Acquisition Corp - Warrants (30/07/2025)'
  },
  {
    symbol: 'ETD',
    name: 'Ethan Allen Interiors Inc'
  },
  {
    symbol: 'ETI-P',
    name: 'Entergy Texas Inc'
  },
  {
    symbol: 'ETN',
    name: 'Eaton Corporation plc'
  },
  {
    symbol: 'ETNB',
    name: '89bio Inc'
  },
  {
    symbol: 'ETON',
    name: 'Eton Pharmaceuticals Inc'
  },
  {
    symbol: 'ETR',
    name: 'Entergy Corp'
  },
  {
    symbol: 'ETRN',
    name: 'Equitrans Midstream Corporation'
  },
  {
    symbol: 'ETSY',
    name: 'Etsy Inc'
  },
  {
    symbol: 'ETTX',
    name: 'Entasis Therapeutics Holdings Inc'
  },
  {
    symbol: 'ETWO',
    name: 'E2open Parent Holdings Inc - Class A'
  },
  {
    symbol: 'ETWO-WS',
    name: 'E2open Parent Holdings Inc - Warrants (04/02/2026)'
  },
  {
    symbol: 'EUCR',
    name: 'Eucrates Biomedical Acquisition Corp'
  },
  {
    symbol: 'EUCRU',
    name: 'Eucrates Biomedical Acquisition Corp - Units (1 Ord & 1/3 War)'
  },
  {
    symbol: 'EUCRW',
    name: 'Eucrates Biomedical Acquisition Corp - Warrants (23/10/2027)'
  },
  {
    symbol: 'EURN',
    name: 'Euronav NV'
  },
  {
    symbol: 'EVA',
    name: 'Enviva Inc'
  },
  {
    symbol: 'EVAX',
    name: 'Evaxion Biotech A/S'
  },
  {
    symbol: 'EVBG',
    name: 'Everbridge Inc'
  },
  {
    symbol: 'EVBN',
    name: 'Evans Bancorp Inc'
  },
  {
    symbol: 'EVC',
    name: 'Entravision Communications Corp - Class A'
  },
  {
    symbol: 'EVCM',
    name: 'EverCommerce Inc'
  },
  {
    symbol: 'EVE',
    name: 'EVe Mobility Acquisition Corp - Class A'
  },
  {
    symbol: 'EVE-U',
    name: 'EVe Mobility Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'EVE-WS',
    name: 'EVe Mobility Acquisition Corp - Warrants (31/12/2028)'
  },
  {
    symbol: 'EVER',
    name: 'EverQuote Inc - Class A'
  },
  {
    symbol: 'EVEX',
    name: 'Eve Holding Inc'
  },
  {
    symbol: 'EVEX-WS',
    name: 'Eve Holding Inc Warrants each exercisable for one share of Common Stock at an exercise price of 11.50 per share'
  },
  {
    symbol: 'EVFM',
    name: 'Evofem Biosciences Inc'
  },
  {
    symbol: 'EVGN',
    name: 'Evogene Ltd'
  },
  {
    symbol: 'EVGO',
    name: 'EVgo Inc - Class A'
  },
  {
    symbol: 'EVGOW',
    name: 'EVgo Inc - Warrants (28/06/2026)'
  },
  {
    symbol: 'EVGR',
    name: 'Evergreen Corp - Class A'
  },
  {
    symbol: 'EVGRU',
    name: 'Evergreen Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'EVGRW',
    name: 'Evergreen Corp - Warrants(08/02/2027)'
  },
  {
    symbol: 'EVH',
    name: 'Evolent Health Inc - Class A'
  },
  {
    symbol: 'EVI',
    name: 'EVI Industries Inc'
  },
  {
    symbol: 'EVK',
    name: 'Ever-Glory International Group Inc'
  },
  {
    symbol: 'EVLO',
    name: 'Evelo Biosciences Inc'
  },
  {
    symbol: 'EVLV',
    name: 'Evolv Technologies Holdings Inc - Class A'
  },
  {
    symbol: 'EVO',
    name: 'Evotec SE'
  },
  {
    symbol: 'EVOJ',
    name: 'Evo Acquisition Corp - Class A'
  },
  {
    symbol: 'EVOJU',
    name: 'Evo Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'EVOJW',
    name: 'Evo Acquisition Corp - Warrants (04/01/2026)'
  },
  {
    symbol: 'EVOK',
    name: 'Evoke Pharma Inc'
  },
  {
    symbol: 'EVOP',
    name: 'EVO Payments Inc - Class A'
  },
  {
    symbol: 'EVR',
    name: 'Evercore Inc - Class A'
  },
  {
    symbol: 'EVRG',
    name: 'Evergy Inc'
  },
  {
    symbol: 'EVRI',
    name: 'Everi Holdings Inc'
  },
  {
    symbol: 'EVTC',
    name: 'Evertec Inc'
  },
  {
    symbol: 'EVTL',
    name: 'Vertical Aerospace Ltd'
  },
  {
    symbol: 'EVTL-WS',
    name: 'Vertical Aerospace Ltd Warrants each whole warrant exercisable for one ordinary share at an exercise price of 11.50 per share'
  },
  {
    symbol: 'EVTV',
    name: 'Envirotech Vehicles Inc'
  },
  {
    symbol: 'EW',
    name: 'Edwards Lifesciences Corp'
  },
  {
    symbol: 'EWBC',
    name: 'East West Bancorp Inc'
  },
  {
    symbol: 'EWCZ',
    name: 'European Wax Center Inc - Class A'
  },
  {
    symbol: 'EWTX',
    name: 'Edgewise Therapeutics Inc'
  },
  {
    symbol: 'EXAI',
    name: 'Exscientia Plc'
  },
  {
    symbol: 'EXAS',
    name: 'Exact Sciences Corp'
  },
  {
    symbol: 'EXC',
    name: 'Exelon Corp'
  },
  {
    symbol: 'EXCVV',
    name: 'Exelon Corporation'
  },
  {
    symbol: 'EXEL',
    name: 'Exelixis Inc'
  },
  {
    symbol: 'EXFY',
    name: 'Expensify Inc - Class A'
  },
  {
    symbol: 'EXK',
    name: 'Endeavour Silver Corp'
  },
  {
    symbol: 'EXLS',
    name: 'Exlservice Hldgs Inc'
  },
  {
    symbol: 'EXN',
    name: 'Excellon Resources Inc'
  },
  {
    symbol: 'EXP',
    name: 'Eagle Materials Inc'
  },
  {
    symbol: 'EXPD',
    name: 'Expeditors International Of Washington Inc'
  },
  {
    symbol: 'EXPE',
    name: 'Expedia Group Inc'
  },
  {
    symbol: 'EXPI',
    name: 'eXp World Holdings Inc'
  },
  {
    symbol: 'EXPO',
    name: 'Exponent Inc'
  },
  {
    symbol: 'EXPR',
    name: 'Express Inc'
  },
  {
    symbol: 'EXR',
    name: 'Extra Space Storage Inc'
  },
  {
    symbol: 'EXTN',
    name: 'Exterran Corp'
  },
  {
    symbol: 'EXTR',
    name: 'Extreme Networks Inc'
  },
  {
    symbol: 'EYE',
    name: 'National Vision Holdings Inc'
  },
  {
    symbol: 'EYEGW',
    name: 'Eyegate Pharmaceuticals Inc Wt Exp 2020'
  },
  {
    symbol: 'EYEN',
    name: 'Eyenovia Inc'
  },
  {
    symbol: 'EYES',
    name: 'Second Sight Medical Products Inc'
  },
  {
    symbol: 'EYESW',
    name: 'Second Sight Medical Products Inc - Warrants (14/03/2024)'
  },
  {
    symbol: 'EYPT',
    name: 'EyePoint Pharmaceuticals Inc'
  },
  {
    symbol: 'EZFL',
    name: 'EzFill Holdings Inc'
  },
  {
    symbol: 'EZGO',
    name: 'EZGO Technologies Ltd'
  },
  {
    symbol: 'EZPW',
    name: 'EZCorp Inc - Class A'
  },
  {
    symbol: 'F',
    name: 'Ford Motor Company'
  },
  {
    symbol: 'F-P-B',
    name: 'Ford Motor Company 620 Notes due June 1 2059'
  },
  {
    symbol: 'F-P-C',
    name: ''
  },
  {
    symbol: 'FA',
    name: 'First Advantage Corp'
  },
  {
    symbol: 'FACA',
    name: 'Figure Acquisition Corp I - Class A'
  },
  {
    symbol: 'FACA-U',
    name: 'Figure Acquisition Corp I - Units (1 Ord Class A & 1/4 War)'
  },
  {
    symbol: 'FACA-WS',
    name: 'Figure Acquisition Corp I - Warrants (31/03/2028)'
  },
  {
    symbol: 'FACT',
    name: 'Freedom Acquisition I Corp - Class A'
  },
  {
    symbol: 'FACT-U',
    name: 'Freedom Acquisition I Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'FACT-WS',
    name: 'Freedom Acquisition I Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'FAF',
    name: 'First American Financial Corp'
  },
  {
    symbol: 'FAMI',
    name: 'Farmmi Inc'
  },
  {
    symbol: 'FANG',
    name: 'Diamondback Energy Inc'
  },
  {
    symbol: 'FANH',
    name: 'Fanhua Inc'
  },
  {
    symbol: 'FARM',
    name: 'Farmer Bros. Company'
  },
  {
    symbol: 'FARO',
    name: 'Faro Technologies Inc'
  },
  {
    symbol: 'FAST',
    name: 'Fastenal Company'
  },
  {
    symbol: 'FAT',
    name: 'FAT Brands Inc - Class A'
  },
  {
    symbol: 'FATBB',
    name: 'FAT Brands Inc - Class B'
  },
  {
    symbol: 'FATBP',
    name: 'FAT Brands Inc'
  },
  {
    symbol: 'FATBW',
    name: 'FAT Brands Inc - Warrants (16/07/2025)'
  },
  {
    symbol: 'FATE',
    name: 'Fate Therapeutics Inc'
  },
  {
    symbol: 'FATH',
    name: 'Fathom Digital Manufacturing Corporation - Class A'
  },
  {
    symbol: 'FATH-WS',
    name: 'Fathom Digital Manufacturing Corporation - Warrants (01/01/9999)'
  },
  {
    symbol: 'FATP',
    name: 'Fat Projects Acquisition Corp - Class A'
  },
  {
    symbol: 'FATPU',
    name: 'Fat Projects Acquisition Corp - Units (1 Ord Share Class A & 1 War)'
  },
  {
    symbol: 'FATPW',
    name: 'Fat Projects Acquisition Corp - Warrants (31/08/2026)'
  },
  {
    symbol: 'FBC',
    name: 'Flagstar Bancorp Inc'
  },
  {
    symbol: 'FBHS',
    name: 'Fortune Brands Home & Security Inc'
  },
  {
    symbol: 'FBIO',
    name: 'Fortress Biotech Inc'
  },
  {
    symbol: 'FBIOP',
    name: 'Fortress Biotech Inc'
  },
  {
    symbol: 'FBIZ',
    name: 'First Business Financial Services Inc'
  },
  {
    symbol: 'FBK',
    name: 'FB Financial Corp'
  },
  {
    symbol: 'FBMS',
    name: 'First Bancshares Inc Miss'
  },
  {
    symbol: 'FBNC',
    name: 'First Bancorp'
  },
  {
    symbol: 'FBP',
    name: 'First Bancorp PR'
  },
  {
    symbol: 'FBRT',
    name: 'Franklin BSP Realty Trust Inc'
  },
  {
    symbol: 'FBRT-P-E',
    name: 'Franklin BSP Realty Trust Inc'
  },
  {
    symbol: 'FBRX',
    name: 'Forte Biosciences Inc'
  },
  {
    symbol: 'FC',
    name: 'Franklin Covey Company'
  },
  {
    symbol: 'FCAP',
    name: 'First Capital Inc'
  },
  {
    symbol: 'FCAX',
    name: 'Fortress Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'FCAX-U',
    name: 'Fortress Capital Acquisition Corp - Units (1 Ord Class A & 1/5 War)'
  },
  {
    symbol: 'FCAX-WS',
    name: 'Fortress Capital Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'FCBC',
    name: 'First Community Bankshares Inc'
  },
  {
    symbol: 'FCCO',
    name: 'First Community Corp'
  },
  {
    symbol: 'FCEL',
    name: 'Fuelcell Energy Inc'
  },
  {
    symbol: 'FCF',
    name: 'First Commonwealth Financial Corp'
  },
  {
    symbol: 'FCFS',
    name: 'FirstCash Holdings Inc'
  },
  {
    symbol: 'FCN',
    name: 'FTI Consulting Inc'
  },
  {
    symbol: 'FCNCA',
    name: 'First Citizens Bancshares Inc (NC) - Class A'
  },
  {
    symbol: 'FCNCO',
    name: 'First Citizens Bancshares Inc (NC)'
  },
  {
    symbol: 'FCNCP',
    name: 'First Citizens Bancshares Inc (NC)'
  },
  {
    symbol: 'FCPT',
    name: 'Four Corners Property Trust Inc'
  },
  {
    symbol: 'FCRD',
    name: 'First Eagle Alternative Capital BDC Inc'
  },
  {
    symbol: 'FCRX',
    name: 'First Eagle Alternative Capital BDC Inc'
  },
  {
    symbol: 'FCUV',
    name: 'Focus Universal Inc'
  },
  {
    symbol: 'FCX',
    name: 'Freeport-McMoRan Inc'
  },
  {
    symbol: 'FDBC',
    name: 'Fidelity D&D Bancorp Inc'
  },
  {
    symbol: 'FDMT',
    name: '4D Molecular Therapeutics Inc'
  },
  {
    symbol: 'FDP',
    name: 'Fresh Del Monte Produce Inc'
  },
  {
    symbol: 'FDS',
    name: 'Factset Research Systems Inc'
  },
  {
    symbol: 'FDUS',
    name: 'Fidus Investment Corp'
  },
  {
    symbol: 'FDX',
    name: 'Fedex Corp'
  },
  {
    symbol: 'FE',
    name: 'Firstenergy Corp'
  },
  {
    symbol: 'FEAM',
    name: '5E Advanced Materials Inc'
  },
  {
    symbol: 'FEDL',
    name: 'ETRACS 2x Leveraged IFED Invest with the Fed TR Index ETN'
  },
  {
    symbol: 'FEDU',
    name: 'Four Seasons Education (Cayman) Inc'
  },
  {
    symbol: 'FEIM',
    name: 'Frequency Electronics Inc'
  },
  {
    symbol: 'FELE',
    name: 'Franklin Electric Co. Inc'
  },
  {
    symbol: 'FEMY',
    name: 'Femasys Inc'
  },
  {
    symbol: 'FENC',
    name: 'Fennec Pharmaceuticals Inc'
  },
  {
    symbol: 'FENG',
    name: 'Phoenix New Media Ltd'
  },
  {
    symbol: 'FERG',
    name: 'Ferguson Plc.'
  },
  {
    symbol: 'FET',
    name: 'Forum Energy Technologies Inc'
  },
  {
    symbol: 'FEXD',
    name: 'Fintech Ecosystem Development Corp - Class A'
  },
  {
    symbol: 'FEXDR',
    name: 'Fintech Ecosystem Development Corp'
  },
  {
    symbol: 'FEXDU',
    name: 'Fintech Ecosystem Development Corp - Units (1 Ord Share Class A 1 Right & 1/2 War)'
  },
  {
    symbol: 'FEXDW',
    name: 'Fintech Ecosystem Development Corp - Warrants (01/04/2026)'
  },
  {
    symbol: 'FF',
    name: 'Futurefuel Corp'
  },
  {
    symbol: 'FFBC',
    name: 'First Financial Bancorp'
  },
  {
    symbol: 'FFBW',
    name: 'FFBW Inc'
  },
  {
    symbol: 'FFHL',
    name: 'Fuwei Films (Holdings) Company'
  },
  {
    symbol: 'FFIC',
    name: 'Flushing Financial Corp'
  },
  {
    symbol: 'FFIE',
    name: 'Faraday Future Intelligent Electric Inc'
  },
  {
    symbol: 'FFIEW',
    name: 'Faraday Future Intelligent Electric Inc - Warrants (21/07/2026)'
  },
  {
    symbol: 'FFIN',
    name: 'First Financial Bankshares Inc'
  },
  {
    symbol: 'FFIV',
    name: 'F5 Inc'
  },
  {
    symbol: 'FFNW',
    name: 'First Financial Northwest Inc'
  },
  {
    symbol: 'FFWM',
    name: 'First Foundation Inc'
  },
  {
    symbol: 'FG-WS',
    name: 'FGL Holdings Warrants'
  },
  {
    symbol: 'FGBI',
    name: 'First Guaranty Bancshares Inc'
  },
  {
    symbol: 'FGBIP',
    name: 'First Guaranty Bancshares Inc'
  },
  {
    symbol: 'FGEN',
    name: 'FibroGen Inc'
  },
  {
    symbol: 'FGF',
    name: 'FG Financial Group Inc'
  },
  {
    symbol: 'FGFPP',
    name: 'FG Financial Group Inc'
  },
  {
    symbol: 'FGI',
    name: 'FGI Industries Ltd'
  },
  {
    symbol: 'FGIWW',
    name: 'FGI Industries Ltd - Warrants (21/01/2027)'
  },
  {
    symbol: 'FGMC',
    name: 'FG Merger Corp'
  },
  {
    symbol: 'FGMCU',
    name: 'FG Merger Corp - Units (1 Ord & 3/4 War)'
  },
  {
    symbol: 'FGMCW',
    name: 'FG Merger Corp - Warrants (17/06/2027)'
  },
  {
    symbol: 'FHB',
    name: 'First Hawaiian Inc'
  },
  {
    symbol: 'FHI',
    name: 'Federated Hermes Inc - Class B'
  },
  {
    symbol: 'FHLT',
    name: 'Future Health ESG Corp'
  },
  {
    symbol: 'FHLTU',
    name: 'Future Health ESG Corp - Units (1 Ord Share & 1/2 War)'
  },
  {
    symbol: 'FHLTW',
    name: 'Future Health ESG Corp - Warrants (09/09/2026)'
  },
  {
    symbol: 'FHN',
    name: 'First Horizon Corporation'
  },
  {
    symbol: 'FHN-P-B',
    name: 'First Horizon Corporation'
  },
  {
    symbol: 'FHN-P-C',
    name: 'First Horizon Corporation'
  },
  {
    symbol: 'FHN-P-D',
    name: 'First Horizon Corporation'
  },
  {
    symbol: 'FHN-P-E',
    name: 'First Horizon Corporation'
  },
  {
    symbol: 'FHN-P-F',
    name: 'First Horizon Corporation'
  },
  {
    symbol: 'FHS',
    name: 'First High-School Education Group Co Ltd'
  },
  {
    symbol: 'FHTX',
    name: 'Foghorn Therapeutics Inc'
  },
  {
    symbol: 'FIAC',
    name: 'Focus Impact Acquisition Corp - Class A'
  },
  {
    symbol: 'FIACU',
    name: 'Focus Impact Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'FIACW',
    name: 'Focus Impact Acquisition Corp - Warrants(28/10/2026)'
  },
  {
    symbol: 'FIBK',
    name: 'First Interstate BancSystem Inc - Class A'
  },
  {
    symbol: 'FICO',
    name: 'Fair Isaac Corp'
  },
  {
    symbol: 'FICV',
    name: 'Frontier Investment Corp - Class A'
  },
  {
    symbol: 'FICVU',
    name: 'Frontier Investment Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'FICVW',
    name: 'Frontier Investment Corp - Warrants (29/06/2026)'
  },
  {
    symbol: 'FIGS',
    name: 'Figs Inc - Class A'
  },
  {
    symbol: 'FINM',
    name: 'Marlin Technology Corp - Class A'
  },
  {
    symbol: 'FINMU',
    name: 'Marlin Technology Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'FINMW',
    name: 'Marlin Technology Corp - Warrants (12/01/2026)'
  },
  {
    symbol: 'FINS',
    name: 'Angel Oak Financial Strategies Income Term Trust'
  },
  {
    symbol: 'FINS-R',
    name: 'Angel Oak Rights'
  },
  {
    symbol: 'FINS-R-W',
    name: 'Angel Oak Financial Strategies Income Term Trust Rights expires October 14 2021 When Issued'
  },
  {
    symbol: 'FINV',
    name: 'FinVolution Group'
  },
  {
    symbol: 'FINW',
    name: 'FinWise Bancorp'
  },
  {
    symbol: 'FIS',
    name: 'Fidelity National Information Services Inc'
  },
  {
    symbol: 'FISI',
    name: 'Financial Institutions Inc'
  },
  {
    symbol: 'FISK',
    name: 'Empire State Realty OP LP'
  },
  {
    symbol: 'FISV',
    name: 'Fiserv Inc'
  },
  {
    symbol: 'FITB',
    name: 'Fifth Third Bancorp'
  },
  {
    symbol: 'FITBI',
    name: 'Fifth Third Bancorp'
  },
  {
    symbol: 'FITBO',
    name: 'Fifth Third Bancorp'
  },
  {
    symbol: 'FITBP',
    name: 'Fifth Third Bancorp'
  },
  {
    symbol: 'FIVE',
    name: 'Five Below Inc'
  },
  {
    symbol: 'FIVN',
    name: 'Five9 Inc'
  },
  {
    symbol: 'FIX',
    name: 'Comfort Systems USA Inc'
  },
  {
    symbol: 'FIXX',
    name: 'Homology Medicines Inc'
  },
  {
    symbol: 'FIZZ',
    name: 'National Beverage Corp'
  },
  {
    symbol: 'FKWL',
    name: 'Franklin Wireless Corp'
  },
  {
    symbol: 'FL',
    name: 'Foot Locker Inc'
  },
  {
    symbol: 'FLAC',
    name: 'Frazier Lifesciences Acquisition Corp - Class A'
  },
  {
    symbol: 'FLACU',
    name: 'Frazier Lifesciences Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'FLACW',
    name: 'Frazier Lifesciences Acquisition Corp - Warrants (09/12/2025)'
  },
  {
    symbol: 'FLAG',
    name: 'First Light Acquisition Group Inc - Class A'
  },
  {
    symbol: 'FLAG-U',
    name: 'First Light Acquisition Group Inc - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'FLAG-WS',
    name: 'First Light Acquisition Group Inc Redeemable Warrants each whole warrant exercisable for one share of Class A common stock at an exercise price of 11.50 per s'
  },
  {
    symbol: 'FLEX',
    name: 'Flex Ltd'
  },
  {
    symbol: 'FLFVU',
    name: 'Feutune Light Acquisition Corp - Units (1 Ord Class A 1 War & 1 Right)'
  },
  {
    symbol: 'FLGC',
    name: 'Flora Growth Corp'
  },
  {
    symbol: 'FLGT',
    name: 'Fulgent Genetics Inc'
  },
  {
    symbol: 'FLIC',
    name: 'First Of Long Island Corp'
  },
  {
    symbol: 'FLL',
    name: 'Full House Resorts Inc'
  },
  {
    symbol: 'FLME',
    name: 'Flame Acquisition Corp - Class A'
  },
  {
    symbol: 'FLME-U',
    name: 'Flame Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'FLME-WS',
    name: 'Flame Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'FLNC',
    name: 'Fluence Energy Inc - Class A'
  },
  {
    symbol: 'FLNG',
    name: 'Flex Lng Ltd'
  },
  {
    symbol: 'FLNT',
    name: 'Fluent Inc'
  },
  {
    symbol: 'FLO',
    name: 'Flowers Foods Inc'
  },
  {
    symbol: 'FLR',
    name: 'Fluor Corporation'
  },
  {
    symbol: 'FLS',
    name: 'Flowserve Corp'
  },
  {
    symbol: 'FLT',
    name: 'Fleetcor Technologies Inc'
  },
  {
    symbol: 'FLUX',
    name: 'Flux Power Holdings Inc'
  },
  {
    symbol: 'FLWS',
    name: '1-800 Flowers.com Inc - Class A'
  },
  {
    symbol: 'FLXS',
    name: 'Flexsteel Industries Inc'
  },
  {
    symbol: 'FLYA',
    name: 'SOAR Technology Acquisition Corp - Class A'
  },
  {
    symbol: 'FLYA-U',
    name: 'SOAR Technology Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'FLYA-WS',
    name: 'SOAR Technology Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'FLYD',
    name: 'Bank of Montreal'
  },
  {
    symbol: 'FLYU',
    name: 'Bank of Montreal'
  },
  {
    symbol: 'FLYW',
    name: 'Flywire Corp'
  },
  {
    symbol: 'FMAC-WS',
    name: 'Starry Group Holdings Inc - Warrants (26/09/2025)'
  },
  {
    symbol: 'FMAO',
    name: 'Farmers & Merchants Bancorp Inc'
  },
  {
    symbol: 'FMBH',
    name: 'First Mid Bancshares Inc'
  },
  {
    symbol: 'FMC',
    name: 'FMC Corp'
  },
  {
    symbol: 'FMIV',
    name: 'Forum Merger IV Corp - Class A'
  },
  {
    symbol: 'FMIVU',
    name: 'Forum Merger IV Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'FMIVW',
    name: 'Forum Merger IV Corp - Warrants (15/03/2028)'
  },
  {
    symbol: 'FMNB',
    name: 'Farmers National Banc Corp'
  },
  {
    symbol: 'FMS',
    name: 'Fresenius Medical Care AG & Co. KGaA'
  },
  {
    symbol: 'FMTX',
    name: 'Forma Therapeutics Holdings Inc'
  },
  {
    symbol: 'FMX',
    name: 'Fomento Economico Mexicano S.A.B. de C.V.'
  },
  {
    symbol: 'FN',
    name: 'Fabrinet'
  },
  {
    symbol: 'FNA',
    name: 'Paragon 28 Inc'
  },
  {
    symbol: 'FNB',
    name: 'F.N.B. Corp'
  },
  {
    symbol: 'FNB-P-E',
    name: 'F.N.B. Corp'
  },
  {
    symbol: 'FNCB',
    name: 'FNCB Bancorp Inc'
  },
  {
    symbol: 'FNCH',
    name: 'Finch Therapeutics Group Inc'
  },
  {
    symbol: 'FND',
    name: 'Floor & Decor Holdings Inc - Class A'
  },
  {
    symbol: 'FNF',
    name: 'Fidelity National Financial Inc'
  },
  {
    symbol: 'FNGR',
    name: 'FingerMotion Inc'
  },
  {
    symbol: 'FNGS',
    name: 'Bank of Montreal'
  },
  {
    symbol: 'FNHC',
    name: 'FedNat Holding Company'
  },
  {
    symbol: 'FNKO',
    name: 'Funko Inc - Class A'
  },
  {
    symbol: 'FNLC',
    name: 'First Bancorp Inc (ME)'
  },
  {
    symbol: 'FNV',
    name: 'Franco-Nevada Corporation'
  },
  {
    symbol: 'FNVT',
    name: 'Finnovate Acquisition Corp - Class A'
  },
  {
    symbol: 'FNVTU',
    name: 'Finnovate Acquisition Corp - Units (1 Ord Class A & 3/4 War)'
  },
  {
    symbol: 'FNVTW',
    name: 'Finnovate Acquisition Corp - Warrants (30/09/2026)'
  },
  {
    symbol: 'FNWB',
    name: 'First Northwest Bancorp'
  },
  {
    symbol: 'FNWD',
    name: 'Finward Bancorp'
  },
  {
    symbol: 'FOA',
    name: 'Finance of America Companies Inc'
  },
  {
    symbol: 'FOA-WS',
    name: 'Finance of America Companies Inc - Warrants (08/04/2026)'
  },
  {
    symbol: 'FOCS',
    name: 'Focus Financial Partners Inc - Class A'
  },
  {
    symbol: 'FOLD',
    name: 'Amicus Therapeutics Inc'
  },
  {
    symbol: 'FONR',
    name: 'Fonar Corp'
  },
  {
    symbol: 'FOR',
    name: 'Forestar Group Inc New'
  },
  {
    symbol: 'FORA',
    name: 'Forian Inc'
  },
  {
    symbol: 'FORD',
    name: 'Forward Industries Inc'
  },
  {
    symbol: 'FORG',
    name: 'ForgeRock Inc - Class A'
  },
  {
    symbol: 'FORM',
    name: 'FormFactor Inc'
  },
  {
    symbol: 'FORR',
    name: 'Forrester Research Inc'
  },
  {
    symbol: 'FORTY',
    name: 'Formula Systems (1985) Ltd'
  },
  {
    symbol: 'FOSL',
    name: 'Fossil Group Inc'
  },
  {
    symbol: 'FOSLL',
    name: 'Fossil Group Inc'
  },
  {
    symbol: 'FOUN',
    name: 'Founder SPAC - Class A'
  },
  {
    symbol: 'FOUNU',
    name: 'Founder SPAC - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'FOUNW',
    name: 'Founder SPAC - Warrants (15/07/2028)'
  },
  {
    symbol: 'FOUR',
    name: 'Shift4 Payments Inc - Class A'
  },
  {
    symbol: 'FOX',
    name: 'Fox Corporation - Class B'
  },
  {
    symbol: 'FOXA',
    name: 'Fox Corporation - Class A'
  },
  {
    symbol: 'FOXF',
    name: 'Fox Factory Holding Corp'
  },
  {
    symbol: 'FOXW',
    name: 'FoxWayne Enterprises Acquisition Corp - Class A'
  },
  {
    symbol: 'FOXWU',
    name: 'FoxWayne Enterprises Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'FOXWW',
    name: 'FoxWayne Enterprises Acquisition Corp - Warrants (12/01/2026)'
  },
  {
    symbol: 'FPAC',
    name: 'Far Peak Acquisition Corp - Class A'
  },
  {
    symbol: 'FPAC-WS',
    name: 'Far Peak Acquisition Corp - Warrants (07/12/2025)'
  },
  {
    symbol: 'FPAY',
    name: 'FlexShopper Inc'
  },
  {
    symbol: 'FPH',
    name: 'Five Point Holdings LLC - Class A'
  },
  {
    symbol: 'FPI',
    name: 'Farmland Partners Inc'
  },
  {
    symbol: 'FPI-P-B',
    name: 'Farmland Partners Inc Series B Participating Preferred Stock'
  },
  {
    symbol: 'FR',
    name: 'First Industrial Realty Trust Inc'
  },
  {
    symbol: 'FRAF',
    name: 'Franklin Financial Services Corp'
  },
  {
    symbol: 'FRBA',
    name: 'First Bank (NJ)'
  },
  {
    symbol: 'FRBK',
    name: 'Republic First Bancorp Inc'
  },
  {
    symbol: 'FRBN',
    name: 'Forbion European Acquisition Corp - Class A'
  },
  {
    symbol: 'FRBNU',
    name: 'Forbion European Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'FRBNW',
    name: 'Forbion European Acquisition Corp - Warrants (10/12/2026)'
  },
  {
    symbol: 'FRC',
    name: 'First Republic Bank'
  },
  {
    symbol: 'FRC-P-H',
    name: 'First Republic Bank'
  },
  {
    symbol: 'FRC-P-I',
    name: 'First Republic Bank'
  },
  {
    symbol: 'FRC-P-J',
    name: 'First Republic Bank'
  },
  {
    symbol: 'FRC-P-K',
    name: 'First Republic Bank'
  },
  {
    symbol: 'FRC-P-L',
    name: 'First Republic Bank'
  },
  {
    symbol: 'FRC-P-M',
    name: 'First Republic Bank'
  },
  {
    symbol: 'FRC-P-N',
    name: 'First Republic Bank Depositary Shares Series N'
  },
  {
    symbol: 'FRD',
    name: 'Friedman Industries Inc'
  },
  {
    symbol: 'FREE',
    name: 'Whole Earth Brands Inc - Class A'
  },
  {
    symbol: 'FREEW',
    name: 'Whole Earth Brands Inc. Warrant'
  },
  {
    symbol: 'FREQ',
    name: 'Frequency Therapeutics Inc'
  },
  {
    symbol: 'FREY',
    name: 'FREYR Battery'
  },
  {
    symbol: 'FREY-WS',
    name: 'FREYR Battery - Warrants (01/01/9999)'
  },
  {
    symbol: 'FRG',
    name: 'Franchise Group Inc - Class A'
  },
  {
    symbol: 'FRGAP',
    name: 'Franchise Group Inc'
  },
  {
    symbol: 'FRGE',
    name: 'Forge Global Holdings Inc - Class A'
  },
  {
    symbol: 'FRGI',
    name: 'Fiesta Restaurant Group Inc'
  },
  {
    symbol: 'FRGT',
    name: 'Freight Technologies Inc'
  },
  {
    symbol: 'FRHC',
    name: 'Freedom Holding Corp'
  },
  {
    symbol: 'FRLA',
    name: 'Fortune Rise Acquisition Corp - Class A'
  },
  {
    symbol: 'FRLAU',
    name: 'Fortune Rise Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'FRLAW',
    name: 'Fortune Rise Acquisition Corp - Warrants (06/12/2027)'
  },
  {
    symbol: 'FRLN',
    name: 'Freeline Therapeutics Holdings plc'
  },
  {
    symbol: 'FRME',
    name: 'First Merchants Corp'
  },
  {
    symbol: 'FRMEP',
    name: 'First Merchants Corp'
  },
  {
    symbol: 'FRO',
    name: 'Frontline Ltd'
  },
  {
    symbol: 'FROG',
    name: 'JFrog Ltd'
  },
  {
    symbol: 'FRON',
    name: 'Frontier Acquisition Corp - Class A'
  },
  {
    symbol: 'FRONU',
    name: 'Frontier Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'FRONW',
    name: 'Frontier Acquisition Corp - Warrants (01/03/2026)'
  },
  {
    symbol: 'FRPH',
    name: 'FRP Holdings Inc'
  },
  {
    symbol: 'FRPT',
    name: 'Freshpet Inc'
  },
  {
    symbol: 'FRSG',
    name: 'First Reserve Sustainable Growth Corp - Class A'
  },
  {
    symbol: 'FRSGU',
    name: 'First Reserve Sustainable Growth Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'FRSGW',
    name: 'First Reserve Sustainable Growth Corp - Warrants (05/03/2026)'
  },
  {
    symbol: 'FRSH',
    name: 'Freshworks Inc Class A'
  },
  {
    symbol: 'FRST',
    name: 'Primis Financial Corp'
  },
  {
    symbol: 'FRSX',
    name: 'Foresight Autonomous Holdings Ltd'
  },
  {
    symbol: 'FRT',
    name: 'Federal Realty Investment Trust.'
  },
  {
    symbol: 'FRT-P-C',
    name: 'Federal Realty Investment Trust.'
  },
  {
    symbol: 'FRW',
    name: 'PWP Forward Acquisition Corp I - Class A'
  },
  {
    symbol: 'FRWAU',
    name: 'PWP Forward Acquisition Corp I - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'FRWAW',
    name: 'PWP Forward Acquisition Corp I - Warrants (09/03/2026)'
  },
  {
    symbol: 'FRXB',
    name: 'Forest Road Acquisition Corp II - Class A'
  },
  {
    symbol: 'FRXB-U',
    name: 'Forest Road Acquisition Corp II - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'FRXB-WS',
    name: 'Forest Road Acquisition Corp II Redeemable Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50'
  },
  {
    symbol: 'FSBC',
    name: 'Five Star Bancorp'
  },
  {
    symbol: 'FSBW',
    name: 'FS Bancorp Inc'
  },
  {
    symbol: 'FSEA',
    name: 'First Seacoast Bancorp'
  },
  {
    symbol: 'FSFG',
    name: 'First Savings Financial Group Inc'
  },
  {
    symbol: 'FSI',
    name: 'Flexible Solutions International Inc'
  },
  {
    symbol: 'FSK',
    name: 'FS KKR Capital Corp'
  },
  {
    symbol: 'FSLR',
    name: 'First Solar Inc'
  },
  {
    symbol: 'FSLY',
    name: 'Fastly Inc - Class A'
  },
  {
    symbol: 'FSM',
    name: 'Fortuna Silver Mines Inc'
  },
  {
    symbol: 'FSNB',
    name: 'Fusion Acquisition Corp II - Class A'
  },
  {
    symbol: 'FSNB-U',
    name: 'Fusion Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'FSNB-WS',
    name: 'Fusion Acquisition Corp II - Warrants (29/02/2028)'
  },
  {
    symbol: 'FSP',
    name: 'Franklin Street Properties Corp'
  },
  {
    symbol: 'FSR',
    name: 'Fisker Inc - Class A'
  },
  {
    symbol: 'FSRD',
    name: 'Fast Radius Inc - Class A'
  },
  {
    symbol: 'FSRDW',
    name: 'Fast Radius Inc - Warrants (07/02/2027)'
  },
  {
    symbol: 'FSRX',
    name: 'FinServ Acquisition Corp II - Class A'
  },
  {
    symbol: 'FSRXU',
    name: 'FinServ Acquisition Corp II - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'FSRXW',
    name: 'FinServ Acquisition Corp II - Warrants (17/02/2026)'
  },
  {
    symbol: 'FSS',
    name: 'Federal Signal Corp'
  },
  {
    symbol: 'FSSI',
    name: 'Fortistar Sustainable Solutions Corp - Class A'
  },
  {
    symbol: 'FSSIU',
    name: 'Fortistar Sustainable Solutions Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'FSSIW',
    name: 'Fortistar Sustainable Solutions Corp - Warrants (14/01/2026)'
  },
  {
    symbol: 'FST',
    name: 'FAST Acquisition Corp - Class A'
  },
  {
    symbol: 'FST-U',
    name: 'FAST Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'FST-WS',
    name: 'FAST Acquisition Corp - Warrants (25/08/2027)'
  },
  {
    symbol: 'FSTR',
    name: 'L.B. Foster Co. - Class A'
  },
  {
    symbol: 'FSTX',
    name: 'F-star Therapeutics Inc'
  },
  {
    symbol: 'FSV',
    name: 'FirstService Corp'
  },
  {
    symbol: 'FTAA',
    name: 'FTAC Athena Acquisition Corp - Class A'
  },
  {
    symbol: 'FTAAU',
    name: 'FTAC Athena Acquisition Corp - Units (1 Ord Class A & 1/4 War)'
  },
  {
    symbol: 'FTAAW',
    name: 'FTAC Athena Acquisition Corp - Warrants (01/03/2026)'
  },
  {
    symbol: 'FTAI',
    name: 'Fortress Transportation and Infrastructure Investors LLC - Class A'
  },
  {
    symbol: 'FTAIN',
    name: 'Fortress Transportation and Infrastructure Investors LLC'
  },
  {
    symbol: 'FTAIO',
    name: 'Fortress Transportation and Infrastructure Investors LLC'
  },
  {
    symbol: 'FTAIP',
    name: 'Fortress Transportation and Infrastructure Investors LLC'
  },
  {
    symbol: 'FTCH',
    name: 'Farfetch Ltd - Class A'
  },
  {
    symbol: 'FTCI',
    name: 'FTC Solar Inc'
  },
  {
    symbol: 'FTCV',
    name: 'FinTech Acquisition Corp V - Class A'
  },
  {
    symbol: 'FTCVU',
    name: 'FinTech Acquisition Corp V - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'FTCVW',
    name: 'FinTech Acquisition Corp V - Warrants (09/12/2025)'
  },
  {
    symbol: 'FTDR',
    name: 'Frontdoor Inc'
  },
  {
    symbol: 'FTEK',
    name: 'Fuel Tech Inc'
  },
  {
    symbol: 'FTEV',
    name: 'FinTech Evolution Acquisition Group - Class A'
  },
  {
    symbol: 'FTEV-U',
    name: 'FinTech Evolution Acquisition Group - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'FTEV-WS',
    name: 'FinTech Evolution Acquisition Group Redeemable Warrants each whole warrant exercisable for one Class A Ordinary Share for 11.50 per share'
  },
  {
    symbol: 'FTFT',
    name: 'Future FinTech Group Inc'
  },
  {
    symbol: 'FTHM',
    name: 'Fathom Holdings Inc'
  },
  {
    symbol: 'FTHY',
    name: 'First Trust High Yield Opportunities 2027 Term Fund'
  },
  {
    symbol: 'FTI',
    name: 'TechnipFMC plc'
  },
  {
    symbol: 'FTII',
    name: 'FutureTech II Acquisition Corp - Class A'
  },
  {
    symbol: 'FTIIU',
    name: 'FutureTech II Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'FTIIW',
    name: 'FutureTech II Acquisition Corp - Warrants (23/12/2022)'
  },
  {
    symbol: 'FTK',
    name: 'Flotek Industries Inc'
  },
  {
    symbol: 'FTNT',
    name: 'Fortinet Inc'
  },
  {
    symbol: 'FTNW',
    name: 'FTE Networks Inc'
  },
  {
    symbol: 'FTPA',
    name: 'FTAC Parnassus Acquisition Corp - Class A'
  },
  {
    symbol: 'FTPAU',
    name: 'FTAC Parnassus Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'FTPAW',
    name: 'FTAC Parnassus Acquisition Corp - Warrants (10/03/2026)'
  },
  {
    symbol: 'FTRP',
    name: 'Field Trip Health Ltd'
  },
  {
    symbol: 'FTS',
    name: 'Fortis Inc'
  },
  {
    symbol: 'FTV',
    name: 'Fortive Corp'
  },
  {
    symbol: 'FTVI',
    name: 'FinTech Acquisition Corp VI - Class A'
  },
  {
    symbol: 'FTVIU',
    name: 'FinTech Acquisition Corp VI - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'FTVIW',
    name: 'FinTech Acquisition Corp VI - Warrants (23/06/2026)'
  },
  {
    symbol: 'FUBO',
    name: 'fuboTV Inc'
  },
  {
    symbol: 'FUL',
    name: 'H.B. Fuller Company'
  },
  {
    symbol: 'FULC',
    name: 'Fulcrum Therapeutics Inc'
  },
  {
    symbol: 'FULT',
    name: 'Fulton Financial Corp'
  },
  {
    symbol: 'FULTP',
    name: 'Fulton Financial Corp'
  },
  {
    symbol: 'FUN',
    name: 'Cedar Fair L.P.'
  },
  {
    symbol: 'FUNC',
    name: 'First United Corporation'
  },
  {
    symbol: 'FUND',
    name: 'Sprott Focus Trust Inc'
  },
  {
    symbol: 'FURY',
    name: 'Fury Gold Mines Ltd'
  },
  {
    symbol: 'FUSB',
    name: 'First US Bancshares Inc'
  },
  {
    symbol: 'FUSN',
    name: 'Fusion Pharmaceuticals Inc'
  },
  {
    symbol: 'FUTU',
    name: 'Futu Holdings Ltd'
  },
  {
    symbol: 'FUV',
    name: 'Arcimoto Inc'
  },
  {
    symbol: 'FVAC-U',
    name: 'MP Materials Corporation - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'FVAM',
    name: '5:01 Acquisition Corp - Class A'
  },
  {
    symbol: 'FVCB',
    name: 'FVCBankcorp Inc'
  },
  {
    symbol: 'FVIV',
    name: 'Fortress Value Acquisition Corp IV - Class A'
  },
  {
    symbol: 'FVIV-U',
    name: 'Fortress Value Acquisition Corp IV - Units (1 Ord Share Class A & 1/8 War)'
  },
  {
    symbol: 'FVIV-WS',
    name: 'Fortress Value Acquisition Corp IV - Warrants (01/01/9999)'
  },
  {
    symbol: 'FVRR',
    name: 'Fiverr International Ltd'
  },
  {
    symbol: 'FVT',
    name: 'Fortress Value Acquisition Corp III - Class A'
  },
  {
    symbol: 'FVT-U',
    name: 'Fortress Value Acquisition Corp III - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'FVT-WS',
    name: 'Fortress Value Acquisition Corp III - Warrants (31/12/2027)'
  },
  {
    symbol: 'FWAC',
    name: 'Fifth Wall Acquisition Corp III - Class A'
  },
  {
    symbol: 'FWBI',
    name: 'First Wave BioPharma Inc'
  },
  {
    symbol: 'FWONA',
    name: 'Liberty Media Corp (Tracking Stock -Liberty Formula 1) Series A'
  },
  {
    symbol: 'FWONK',
    name: 'Liberty Media Corp (Tracking Stock -Liberty Formula 1) Series C'
  },
  {
    symbol: 'FWP',
    name: 'Forward Pharma A/S'
  },
  {
    symbol: 'FWRD',
    name: 'Forward Air Corp'
  },
  {
    symbol: 'FWRG',
    name: 'First Watch Restaurant Group Inc'
  },
  {
    symbol: 'FXCO',
    name: 'Financial Strategies Acquisition Corp - Class A'
  },
  {
    symbol: 'FXCOR',
    name: 'Financial Strategies Acquisition Corp'
  },
  {
    symbol: 'FXCOW',
    name: 'Financial Strategies Acquisition Corp - Warrants (31/03/2028)'
  },
  {
    symbol: 'FXLV',
    name: 'F45 Training Holdings Inc'
  },
  {
    symbol: 'FXNC',
    name: 'First National Corp (Strasburg VA)'
  },
  {
    symbol: 'FYBR',
    name: 'Frontier Communications Parent Inc'
  },
  {
    symbol: 'FZT',
    name: 'FAST Acquisition Corp II - Class A'
  },
  {
    symbol: 'FZT-U',
    name: 'FAST Acquisition Corp II - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'FZT-WS',
    name: 'FAST Acquisition Corp II - Warrants (16/03/2026)'
  },
  {
    symbol: 'G',
    name: 'Genpact Ltd'
  },
  {
    symbol: 'GAB-P-D',
    name: 'Gabelli Equity Trust Inc The Preferred Stock Series D'
  },
  {
    symbol: 'GAB-P-G',
    name: 'Gabelli Equity Trust Inc'
  },
  {
    symbol: 'GAB-P-H',
    name: 'Gabelli Equity Trust Inc'
  },
  {
    symbol: 'GAB-P-K',
    name: 'Gabelli Equity Trust Inc'
  },
  {
    symbol: 'GAB-R',
    name: 'Gabelli Equity Trust Inc Rights 7142021'
  },
  {
    symbol: 'GABC',
    name: 'German American Bancorp Inc'
  },
  {
    symbol: 'GACQ',
    name: 'Global Consumer Acquisition Corp'
  },
  {
    symbol: 'GACQU',
    name: 'Global Consumer Acquisition Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'GACQW',
    name: 'Global Consumer Acquisition Corp - Warrants (21/05/2026)'
  },
  {
    symbol: 'GAIA',
    name: 'Gaia Inc - Class A'
  },
  {
    symbol: 'GAIN',
    name: 'Gladstone Investment Corporation'
  },
  {
    symbol: 'GAINN',
    name: 'Gladstone Investment Corporation'
  },
  {
    symbol: 'GAINZ',
    name: 'Gladstone Investment Corporation'
  },
  {
    symbol: 'GALT',
    name: 'Galectin Therapeutics Inc'
  },
  {
    symbol: 'GAM-P-B',
    name: 'General American Investors Co. Inc'
  },
  {
    symbol: 'GAMB',
    name: 'Gambling.com Group Ltd'
  },
  {
    symbol: 'GAMC',
    name: 'Golden Arrow Merger Corp - Class A'
  },
  {
    symbol: 'GAMCU',
    name: 'Golden Arrow Merger Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'GAMCW',
    name: 'Golden Arrow Merger Corp - Warrants (31/07/2026)'
  },
  {
    symbol: 'GAME',
    name: 'Engine Gaming and Media Inc'
  },
  {
    symbol: 'GAN',
    name: 'GAN Ltd'
  },
  {
    symbol: 'GANX',
    name: 'Gain Therapeutics Inc'
  },
  {
    symbol: 'GAPA',
    name: 'G&P acquisition Corp - Class A'
  },
  {
    symbol: 'GAPA-U',
    name: 'G&P acquisition corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'GAPA-WS',
    name: 'G&P acquisition Corp - Warrants (28/02/2028)'
  },
  {
    symbol: 'GAQ',
    name: 'Generation Asia I Acquisition Ltd - Class A'
  },
  {
    symbol: 'GAQ-U',
    name: 'Generation Asia I Acquisition Ltd - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'GAQ-WS',
    name: 'Generation Asia I Acquisition Ltd - Warrants (01/01/9999)'
  },
  {
    symbol: 'GASS',
    name: 'StealthGas Inc'
  },
  {
    symbol: 'GATE',
    name: 'Marblegate Acquisition Corp - Series A'
  },
  {
    symbol: 'GATEU',
    name: 'Marblegate Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'GATEW',
    name: 'Marblegate Acquisition Corp - Warrants (31/08/2026)'
  },
  {
    symbol: 'GATO',
    name: 'Gatos Silver Inc'
  },
  {
    symbol: 'GATX',
    name: 'GATX Corp'
  },
  {
    symbol: 'GAU',
    name: 'Galiano Gold Inc'
  },
  {
    symbol: 'GB',
    name: 'Global Blue Group Holding AG'
  },
  {
    symbol: 'GB-WS',
    name: 'Global Blue Group Holding AG - Warrants (28/08/2025)'
  },
  {
    symbol: 'GBBK',
    name: 'Global Blockchain Acquisition Corp - Class A'
  },
  {
    symbol: 'GBBKR',
    name: 'Global Blockchain Acquisition Corp'
  },
  {
    symbol: 'GBBKW',
    name: 'Global Blockchain Acquisition Corp - Warrants (09/05/2027)'
  },
  {
    symbol: 'GBCI',
    name: 'Glacier Bancorp Inc'
  },
  {
    symbol: 'GBDC',
    name: 'Golub Capital BDC Inc'
  },
  {
    symbol: 'GBIO',
    name: 'Generation Bio Company'
  },
  {
    symbol: 'GBL',
    name: 'Gamco Investors Inc - Class A'
  },
  {
    symbol: 'GBLI',
    name: 'Global Indemnity Group LLC - Class A'
  },
  {
    symbol: 'GBLL',
    name: 'Green Ballast Inc'
  },
  {
    symbol: 'GBNH',
    name: 'Greenbrook TMS Inc'
  },
  {
    symbol: 'GBNY',
    name: 'Generations Bancorp NY Inc'
  },
  {
    symbol: 'GBOX',
    name: 'GreenBox POS'
  },
  {
    symbol: 'GBR',
    name: 'New Concept Energy Inc'
  },
  {
    symbol: 'GBRG',
    name: 'Goldenbridge Acquisition Ltd'
  },
  {
    symbol: 'GBRGR',
    name: 'Goldenbridge Acquisition Ltd'
  },
  {
    symbol: 'GBRGU',
    name: 'Goldenbridge Acquisition Ltd - Units (1 Ord shares1 Warr & 1 Rts )'
  },
  {
    symbol: 'GBRGW',
    name: 'Goldenbridge Acquisition Ltd - Warrants (02/03/2026)'
  },
  {
    symbol: 'GBS',
    name: 'GBS Inc'
  },
  {
    symbol: 'GBT',
    name: 'Global Blood Therapeutics Inc'
  },
  {
    symbol: 'GBTG',
    name: 'Global Business Travel Group Inc - Class A'
  },
  {
    symbol: 'GBTG-WS',
    name: 'Global Business Travel Group Inc - Warrants (29/10/2027)'
  },
  {
    symbol: 'GBUG',
    name: 'Barclays Bank PLC'
  },
  {
    symbol: 'GBX',
    name: 'Greenbrier Cos. Inc'
  },
  {
    symbol: 'GCAC',
    name: 'Cepton Inc - Class A'
  },
  {
    symbol: 'GCBC',
    name: 'Greene County Bancorp Inc'
  },
  {
    symbol: 'GCI',
    name: 'Gannett Co Inc'
  },
  {
    symbol: 'GCMG',
    name: 'GCM Grosvenor Inc - Class A'
  },
  {
    symbol: 'GCMGW',
    name: 'GCM Grosvenor Inc - Warrants (17/11/2025)'
  },
  {
    symbol: 'GCO',
    name: 'Genesco Inc'
  },
  {
    symbol: 'GCP',
    name: 'GCP Applied Technologies Inc'
  },
  {
    symbol: 'GCTK',
    name: 'GlucoTrack Inc'
  },
  {
    symbol: 'GD',
    name: 'General Dynamics Corp'
  },
  {
    symbol: 'GDDY',
    name: 'Godaddy Inc - Class A'
  },
  {
    symbol: 'GDEN',
    name: 'Golden Entertainment Inc'
  },
  {
    symbol: 'GDEV',
    name: 'Nexters Inc'
  },
  {
    symbol: 'GDEVW',
    name: 'Nexters Inc - Warrants (26/08/2026)'
  },
  {
    symbol: 'GDL-P-C',
    name: 'GDL Fund'
  },
  {
    symbol: 'GDNR',
    name: 'Gardiner Healthcare Acquisitions Corp'
  },
  {
    symbol: 'GDNRU',
    name: 'Gardiner Healthcare Acquisitions Corp - Units (1 Ord & 1 War)'
  },
  {
    symbol: 'GDNRW',
    name: 'Gardiner Healthcare Acquisitions Corp - Warrants (30/07/2028)'
  },
  {
    symbol: 'GDOT',
    name: 'Green Dot Corp - Class A'
  },
  {
    symbol: 'GDRX',
    name: 'GoodRx Holdings Inc - Class A'
  },
  {
    symbol: 'GDS',
    name: 'GDS Holdings Ltd'
  },
  {
    symbol: 'GDST',
    name: 'Goldenstone Acquisition Ltd'
  },
  {
    symbol: 'GDSTR',
    name: 'Goldenstone Acquisition Ltd'
  },
  {
    symbol: 'GDSTU',
    name: 'Goldenstone Acquisition Ltd - Units (1 Ord 1 War & 1 Rts)'
  },
  {
    symbol: 'GDSTW',
    name: 'Goldenstone Acquisition Ltd - Warrants (15/07/2026)'
  },
  {
    symbol: 'GDV-P-D',
    name: 'Gabelli Dividend Pfd Series D'
  },
  {
    symbol: 'GDV-P-H',
    name: 'Gabelli Dividend & Income Trust'
  },
  {
    symbol: 'GDV-P-K',
    name: 'Gabelli Dividend & Income Trust'
  },
  {
    symbol: 'GDXD',
    name: 'Bank of Montreal'
  },
  {
    symbol: 'GDXU',
    name: 'Bank of Montreal'
  },
  {
    symbol: 'GDYN',
    name: 'Grid Dynamics Holdings Inc - Class A'
  },
  {
    symbol: 'GDYNW',
    name: 'Grid Dynamics Holdings Inc - Warrants (05/03/2025)'
  },
  {
    symbol: 'GE',
    name: 'General Electric Company'
  },
  {
    symbol: 'GECC',
    name: 'Great Elm Capital Corp'
  },
  {
    symbol: 'GECCM',
    name: 'Great Elm Capital Corp'
  },
  {
    symbol: 'GECCN',
    name: 'Great Elm Capital Corp'
  },
  {
    symbol: 'GECCO',
    name: 'Great Elm Capital Corp'
  },
  {
    symbol: 'GEEX',
    name: 'Games & Esports Experience Acquisition Corp - Class A'
  },
  {
    symbol: 'GEEXU',
    name: 'Games & Esports Experience Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'GEEXW',
    name: 'Games & Esports Experience Acquisition Corp - Warrants (01/12/2026)'
  },
  {
    symbol: 'GEF',
    name: 'Greif Inc - Class A'
  },
  {
    symbol: 'GEF-B',
    name: 'Greif Inc - Class B'
  },
  {
    symbol: 'GEG',
    name: 'Great Elm Group Inc'
  },
  {
    symbol: 'GEGGL',
    name: 'Great Elm Group Inc'
  },
  {
    symbol: 'GEHI',
    name: 'Gravitas Education Holdings Inc'
  },
  {
    symbol: 'GEL',
    name: 'Genesis Energy L.P.'
  },
  {
    symbol: 'GENC',
    name: 'Gencor Industries Inc'
  },
  {
    symbol: 'GENE',
    name: 'Genetic Technologies Ltd'
  },
  {
    symbol: 'GENI',
    name: 'Genius Sports Ltd'
  },
  {
    symbol: 'GENI-WS',
    name: 'Genius Sports Ltd - Warrants (20/04/2026)'
  },
  {
    symbol: 'GENQ',
    name: 'Genesis Unicorn Capital Corp - Class A'
  },
  {
    symbol: 'GENQU',
    name: 'Genesis Unicorn Capital Corp - Units (1 Ord Share Class A & 1 War)'
  },
  {
    symbol: 'GENQW',
    name: 'Genesis Unicorn Capital Corp - Warrants (30/06/2026)'
  },
  {
    symbol: 'GEO',
    name: 'Geo Group Inc'
  },
  {
    symbol: 'GEOS',
    name: 'Geospace Technologies Corp'
  },
  {
    symbol: 'GERN',
    name: 'Geron Corp'
  },
  {
    symbol: 'GES',
    name: 'Guess Inc'
  },
  {
    symbol: 'GET',
    name: 'Getnet Adquirencia E Servicos Para Meios De Pagamento S.A'
  },
  {
    symbol: 'GETVV',
    name: 'Getnet Adquirencia e Servicos para Meios de Pagamento S.A. American Depositary Shares WI'
  },
  {
    symbol: 'GEVO',
    name: 'Gevo Inc'
  },
  {
    symbol: 'GFAI',
    name: 'Guardforce AI Co Ltd'
  },
  {
    symbol: 'GFAIW',
    name: 'Guardforce AI Co Ltd - Warrants (01/09/2026)'
  },
  {
    symbol: 'GFF',
    name: 'Griffon Corp'
  },
  {
    symbol: 'GFGD',
    name: 'Growth for Good Acquisition Corp (The) - Class A'
  },
  {
    symbol: 'GFGDR',
    name: 'Growth for Good Acquisition Corp (The)'
  },
  {
    symbol: 'GFGDU',
    name: 'Growth for Good Acquisition Corp (The) - Units (1 Ord Class A 1 Rts & 1/2 War)'
  },
  {
    symbol: 'GFGDW',
    name: 'Growth for Good Acquisition Corp (The) - Warrants (12/11/2026)'
  },
  {
    symbol: 'GFI',
    name: 'Gold Fields Ltd'
  },
  {
    symbol: 'GFL',
    name: 'GFL Environmental Inc (Sub Voting)'
  },
  {
    symbol: 'GFLU',
    name: 'GFL Environmental Inc'
  },
  {
    symbol: 'GFOR',
    name: 'Graf Acquisition Corp IV'
  },
  {
    symbol: 'GFOR-U',
    name: 'Graf Acquisition Corp IV - Units (1 Ord & 1/5 War)'
  },
  {
    symbol: 'GFOR-WS',
    name: 'Graf Acquisition Corp IV - Warrants (31/05/2028)'
  },
  {
    symbol: 'GFS',
    name: 'GlobalFoundries Inc'
  },
  {
    symbol: 'GFX',
    name: 'Golden Falcon Acquisition Corp - Class A'
  },
  {
    symbol: 'GFX-U',
    name: 'Golden Falcon Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'GFX-WS',
    name: 'Golden Falcon Acquisition Corp - Warrants (04/11/2026)'
  },
  {
    symbol: 'GGAA',
    name: 'Genesis Growth Tech Acquisition Corp - Class A'
  },
  {
    symbol: 'GGAAU',
    name: 'Genesis Growth Tech Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'GGAAW',
    name: 'Genesis Growth Tech Acquisition Corp - Warrants (08/12/2026)'
  },
  {
    symbol: 'GGAL',
    name: 'Grupo Financiero Galicia'
  },
  {
    symbol: 'GGB',
    name: 'Gerdau S.A.'
  },
  {
    symbol: 'GGE',
    name: 'Green Giant Inc'
  },
  {
    symbol: 'GGG',
    name: 'Graco Inc'
  },
  {
    symbol: 'GGGV',
    name: 'G3 VRM Acquisition Corp - Class A'
  },
  {
    symbol: 'GGGVR',
    name: 'G3 VRM Acquisition Corp'
  },
  {
    symbol: 'GGGVU',
    name: 'G3 VRM Acquisition Corp - Units (1 Ord Class A & 1 Rts)'
  },
  {
    symbol: 'GGMC',
    name: 'Glenfarne Merger Corp - Class A'
  },
  {
    symbol: 'GGMCU',
    name: 'Glenfarne Merger Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'GGMCW',
    name: 'Glenfarne Merger Corp - Warrants (17/03/2026)'
  },
  {
    symbol: 'GGN-P-B',
    name: 'GAMCO Global Gold Natural Resources & Income Trust'
  },
  {
    symbol: 'GGO',
    name: 'Gabelli Go Anywhere Trust'
  },
  {
    symbol: 'GGPI',
    name: 'Gores Guggenheim Inc - Class A'
  },
  {
    symbol: 'GGPIU',
    name: 'Gores Guggenheim Inc - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'GGPIW',
    name: 'Gores Guggenheim Inc - Warrants (31/03/2028)'
  },
  {
    symbol: 'GGR',
    name: 'Gogoro Inc - Class A'
  },
  {
    symbol: 'GGROW',
    name: 'Gogoro Inc - Warrants (04/04/2027)'
  },
  {
    symbol: 'GGT-P-B',
    name: 'Gabelli MultiMedia Trust Inc The Preferred Series B'
  },
  {
    symbol: 'GGT-P-E',
    name: 'Gabelli Multimedia Trust Inc'
  },
  {
    symbol: 'GGT-P-G',
    name: 'Gabelli Multimedia Trust Inc'
  },
  {
    symbol: 'GGT-R',
    name: 'Gabelli MultiMedia Trust Inc The Rights expiring 8252021'
  },
  {
    symbol: 'GH',
    name: 'Guardant Health Inc'
  },
  {
    symbol: 'GHAC',
    name: 'Gaming & Hospitality Acquisition Corp - Class A'
  },
  {
    symbol: 'GHACU',
    name: 'Gaming & Hospitality Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'GHACW',
    name: 'Gaming & Hospitality Acquisition Corp - Warrants (30/03/2026)'
  },
  {
    symbol: 'GHC',
    name: 'Graham Holdings Co. - Class B'
  },
  {
    symbol: 'GHG',
    name: 'GreenTree Hospitality Group Ltd'
  },
  {
    symbol: 'GHIX',
    name: 'Gores Holdings IX Inc - Class A'
  },
  {
    symbol: 'GHIXU',
    name: 'Gores Holdings IX Inc - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'GHIXW',
    name: 'Gores Holdings IX Inc - Warrants (31/01/2027)'
  },
  {
    symbol: 'GHL',
    name: 'Greenhill & Co Inc'
  },
  {
    symbol: 'GHLD',
    name: 'Guild Holdings Co - Class A'
  },
  {
    symbol: 'GHM',
    name: 'Graham Corp'
  },
  {
    symbol: 'GHRS',
    name: 'GH Research PLC'
  },
  {
    symbol: 'GHSI',
    name: 'Guardion Health Sciences Inc'
  },
  {
    symbol: 'GIA',
    name: 'GigCapital5 Inc'
  },
  {
    symbol: 'GIA-U',
    name: 'GigCapital5 Inc - Units (1 Ord & 1War)'
  },
  {
    symbol: 'GIA-WS',
    name: 'GigCapital5 Inc - Warrants (01/01/9999)'
  },
  {
    symbol: 'GIAC',
    name: 'Gesher I Acquisition Corp'
  },
  {
    symbol: 'GIACU',
    name: 'Gesher I Acquisition Corp - Units (1 Ord Share & 1/2 War)'
  },
  {
    symbol: 'GIACW',
    name: 'Gesher I Acquisition Corp - Warrants (16/04/2028)'
  },
  {
    symbol: 'GIB',
    name: 'CGI Inc - Class A'
  },
  {
    symbol: 'GIC',
    name: 'Global Industrial Company'
  },
  {
    symbol: 'GIFI',
    name: 'Gulf Island Fabrication Inc'
  },
  {
    symbol: 'GIGM',
    name: 'Gigamedia'
  },
  {
    symbol: 'GIII',
    name: 'G-III Apparel Group Ltd'
  },
  {
    symbol: 'GIIX',
    name: 'Gores Holdings VIII Inc - Class A'
  },
  {
    symbol: 'GIIXU',
    name: 'Gores Holdings VIII Inc - Units (1 Ord Share Class A & 1/8 War)'
  },
  {
    symbol: 'GIIXW',
    name: 'Gores Holdings VIII Inc - Warrants (01/02/2028)'
  },
  {
    symbol: 'GIK-WS',
    name: 'Lightning eMotors Inc - Warrants (18/05/2025)'
  },
  {
    symbol: 'GIL',
    name: 'Gildan Activewear Inc'
  },
  {
    symbol: 'GILD',
    name: 'Gilead Sciences Inc'
  },
  {
    symbol: 'GILT',
    name: 'Gilat Satellite Networks'
  },
  {
    symbol: 'GIPR',
    name: 'Generation Income Properties Inc'
  },
  {
    symbol: 'GIPRW',
    name: 'Generation Income Properties Inc - Warrants (03/09/2026)'
  },
  {
    symbol: 'GIS',
    name: 'General Mills Inc'
  },
  {
    symbol: 'GIW',
    name: 'GigInternational1 Inc'
  },
  {
    symbol: 'GIWWU',
    name: 'GigInternational1 Inc - Units (1 Ord Share & 1/2 War)'
  },
  {
    symbol: 'GIWWW',
    name: 'GigInternational1 Inc - Warrants (19/04/2026)'
  },
  {
    symbol: 'GIX-U',
    name: 'Gigcapital2 Inc - Units (1 Ord Share 1 Rts & 1 Wrt)'
  },
  {
    symbol: 'GIXR',
    name: 'GigCapital2 Inc. Rights each exchangeable into onetwentieth of a share of Common Stock'
  },
  {
    symbol: 'GJH',
    name: 'Synthetic FixedIncome Securities Inc 6375 STRATS Cl A1'
  },
  {
    symbol: 'GJO',
    name: 'Synthetic FixedIncome Securities Inc Synthetic FixedIncome Securities Inc on behalf of STRATSSM Trust for WalMart Stores Inc Securities Series 2004'
  },
  {
    symbol: 'GJP',
    name: 'Synthetic FixedIncome Securities Inc Synthetic FixedIncome Securities Inc on behalf of STRATS SM Trust for Dominion Resources Inc Securities Series 2'
  },
  {
    symbol: 'GJR',
    name: 'Synthetic FixedIncome Securities Inc STRATS Trust for ProcterGamble Securities Series 20061'
  },
  {
    symbol: 'GJS',
    name: 'Synthetic Fixed-Income Securities Inc'
  },
  {
    symbol: 'GJT',
    name: 'Synthetic FixedIncome Securities Inc Synthetic FixedIncome Securities Inc Floating Rate Structured Repackaged AssetBacked Trust Securities Certificates'
  },
  {
    symbol: 'GJV',
    name: 'Synthetic FixedIncome Securities Inc 700 Fixed Rate Structured Repackaged AssetBacked Trust Securities STRATS'
  },
  {
    symbol: 'GKOS',
    name: 'Glaukos Corporation'
  },
  {
    symbol: 'GL',
    name: 'Globe Life Inc'
  },
  {
    symbol: 'GL-P-C',
    name: 'Torchmark Corporation 6125 Junior Subordinated Debentures due 2056'
  },
  {
    symbol: 'GL-P-D',
    name: 'Globe Life Inc'
  },
  {
    symbol: 'GLAD',
    name: 'Gladstone Capital Corp'
  },
  {
    symbol: 'GLBE',
    name: 'Global E Online Ltd'
  },
  {
    symbol: 'GLBL',
    name: 'Cartesian Growth Corp - Class A'
  },
  {
    symbol: 'GLBLU',
    name: 'Cartesian Growth Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'GLBLW',
    name: 'Cartesian Growth Corp - Warrants (26/02/2028)'
  },
  {
    symbol: 'GLBS',
    name: 'Globus Maritime Ltd'
  },
  {
    symbol: 'GLBZ',
    name: 'Glen Burnie Bancorp'
  },
  {
    symbol: 'GLDD',
    name: 'Great Lakes Dredge & Dock Corporation'
  },
  {
    symbol: 'GLDG',
    name: 'GoldMining Inc'
  },
  {
    symbol: 'GLEE',
    name: 'Gladstone Acquisition Corp - Class A'
  },
  {
    symbol: 'GLEEU',
    name: 'Gladstone Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'GLEEW',
    name: 'Gladstone Acquisition Corp - Warrants (01/04/2026)'
  },
  {
    symbol: 'GLEO-U',
    name: 'Galileo Acquisition Corp - Units (1 Ordinary share & 1 Warr)'
  },
  {
    symbol: 'GLG',
    name: 'TD Holdings Inc'
  },
  {
    symbol: 'GLHA',
    name: 'Glass Houses Acquisition Corp - Class A'
  },
  {
    symbol: 'GLHAU',
    name: 'Glass Houses Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'GLHAW',
    name: 'Glass Houses Acquisition Corp - Warrants (01/03/2028)'
  },
  {
    symbol: 'GLLI',
    name: 'Globalink Investment Inc'
  },
  {
    symbol: 'GLLIR',
    name: 'Globalink Investment Inc'
  },
  {
    symbol: 'GLLIU',
    name: 'Globalink Investment Inc - Units (1 Ord 1 Rts & 1 War)'
  },
  {
    symbol: 'GLLIW',
    name: 'Globalink Investment Inc - Warrants(06/12/2026)'
  },
  {
    symbol: 'GLMD',
    name: 'Galmed Pharmaceuticals Ltd'
  },
  {
    symbol: 'GLNG',
    name: 'Golar Lng'
  },
  {
    symbol: 'GLOB',
    name: 'Globant S.A.'
  },
  {
    symbol: 'GLOG-P-A',
    name: 'GasLog Ltd'
  },
  {
    symbol: 'GLOP',
    name: 'Gaslog Partners LP'
  },
  {
    symbol: 'GLOP-P-A',
    name: 'Gaslog Partners LP'
  },
  {
    symbol: 'GLOP-P-B',
    name: 'Gaslog Partners LP'
  },
  {
    symbol: 'GLOP-P-C',
    name: 'Gaslog Partners LP'
  },
  {
    symbol: 'GLP',
    name: 'Global Partners LP'
  },
  {
    symbol: 'GLP-P-A',
    name: 'Global Partners LP 975 Series A FixedtoFloating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests'
  },
  {
    symbol: 'GLP-P-B',
    name: 'Global Partners LP'
  },
  {
    symbol: 'GLPG',
    name: 'Galapagos NV'
  },
  {
    symbol: 'GLPI',
    name: 'Gaming and Leisure Properties Inc'
  },
  {
    symbol: 'GLRE',
    name: 'Greenlight Capital Re Ltd - Class A'
  },
  {
    symbol: 'GLS',
    name: 'Gelesis Holdings Inc'
  },
  {
    symbol: 'GLS-WS',
    name: 'Gelesis Holdings Inc - Warrants (13/01/2027)'
  },
  {
    symbol: 'GLSI',
    name: 'Greenwich LifeSciences Inc'
  },
  {
    symbol: 'GLSPT',
    name: 'Global SPAC Partners Co - Subunit (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'GLSPU',
    name: 'Global SPAC Partners Co - Units (1 Subunit & 1/2 War)'
  },
  {
    symbol: 'GLSPW',
    name: 'Global SPAC Partners Co - Warrants (12/03/2026)'
  },
  {
    symbol: 'GLT',
    name: 'Glatfelter Corporation'
  },
  {
    symbol: 'GLTA',
    name: 'Galata Acquisition Corp - Class A'
  },
  {
    symbol: 'GLTA-U',
    name: 'Galata Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'GLTA-WS',
    name: 'Galata Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'GLTO',
    name: 'Galecto Inc'
  },
  {
    symbol: 'GLU-P-A',
    name: 'Gabelli Global Utility & Income Trust.'
  },
  {
    symbol: 'GLU-P-B',
    name: 'Gabelli Global Utility & Income Trust.'
  },
  {
    symbol: 'GLUE',
    name: 'Monte Rosa Therapeutics Inc'
  },
  {
    symbol: 'GLW',
    name: 'Corning Inc'
  },
  {
    symbol: 'GLYC',
    name: 'GlycoMimetics Inc'
  },
  {
    symbol: 'GM',
    name: 'General Motors Company'
  },
  {
    symbol: 'GMAB',
    name: 'Genmab'
  },
  {
    symbol: 'GMBL',
    name: 'Esports Entertainment Group Inc'
  },
  {
    symbol: 'GMBLP',
    name: 'Esports Entertainment Group Inc'
  },
  {
    symbol: 'GMBLW',
    name: 'Esports Entertainment Group Inc - Warrants (31/03/2025)'
  },
  {
    symbol: 'GMBLZ',
    name: 'Esports Entertainment Group Inc - Warrants (02/03/2027)'
  },
  {
    symbol: 'GMBT',
    name: 'Pivotal Holdings Corp - Class A'
  },
  {
    symbol: 'GMBTU',
    name: 'Pivotal Holdings Corp - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'GMBTW',
    name: 'Pivotal Holdings Corp - Warrants (19/01/2026)'
  },
  {
    symbol: 'GMDA',
    name: 'Gamida Cell Ltd'
  },
  {
    symbol: 'GME',
    name: 'Gamestop Corporation - Class A'
  },
  {
    symbol: 'GMED',
    name: 'Globus Medical Inc - Class A'
  },
  {
    symbol: 'GMFI',
    name: 'Aetherium Acquisition Corp - Class A'
  },
  {
    symbol: 'GMFIU',
    name: 'Aetherium Acquisition Corp - Units (1 Ord Share Class A & 1 War)'
  },
  {
    symbol: 'GMFIW',
    name: 'Aetherium Acquisition Corp - Warrants (21/12/2026)'
  },
  {
    symbol: 'GMGI',
    name: 'Golden Matrix Group Inc'
  },
  {
    symbol: 'GMGT',
    name: 'Gaming Technologies Inc'
  },
  {
    symbol: 'GMII',
    name: ''
  },
  {
    symbol: 'GMRE',
    name: 'Global Medical REIT Inc'
  },
  {
    symbol: 'GMRE-P-A',
    name: 'Global Medical REIT Inc Series A Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'GMS',
    name: 'GMS Inc'
  },
  {
    symbol: 'GMTX',
    name: 'Gemini Therapeutics Inc'
  },
  {
    symbol: 'GMVD',
    name: 'G Medical Innovations Holdings Ltd'
  },
  {
    symbol: 'GMVDW',
    name: 'G Medical Innovations Holdings Ltd - Warrants (30/06/2025)'
  },
  {
    symbol: 'GNAC',
    name: 'Group Nine Acquisition Corp - Class A'
  },
  {
    symbol: 'GNACU',
    name: 'Group Nine Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'GNACW',
    name: 'Group Nine Acquisition Corp - Warrants (15/01/2026)'
  },
  {
    symbol: 'GNE',
    name: 'Genie Energy Ltd - Class B'
  },
  {
    symbol: 'GNE-P-A',
    name: 'Genie Energy Ltd'
  },
  {
    symbol: 'GNFT',
    name: 'Genfit'
  },
  {
    symbol: 'GNK',
    name: 'Genco Shipping & Trading Ltd'
  },
  {
    symbol: 'GNL',
    name: 'Global Net Lease Inc'
  },
  {
    symbol: 'GNL-P-A',
    name: 'Global Net Lease Inc 725 Series A Cumulative Redeemable Preferred Stock 001 par value per share'
  },
  {
    symbol: 'GNL-P-B',
    name: 'Global Net Lease Inc'
  },
  {
    symbol: 'GNLN',
    name: 'Greenlane Holdings Inc - Class A'
  },
  {
    symbol: 'GNPK-WS',
    name: 'Genesis Park Acquisition Corp Redeemable Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50 per share'
  },
  {
    symbol: 'GNPX',
    name: 'Genprex Inc'
  },
  {
    symbol: 'GNRC',
    name: 'Generac Holdings Inc'
  },
  {
    symbol: 'GNS',
    name: 'Genius Group Ltd'
  },
  {
    symbol: 'GNSS',
    name: 'Genasys Inc'
  },
  {
    symbol: 'GNT-P-A',
    name: 'GAMCO Natural Resources Gold & Income Trust'
  },
  {
    symbol: 'GNTA',
    name: 'Genenta Science SpA'
  },
  {
    symbol: 'GNTX',
    name: 'Gentex Corp'
  },
  {
    symbol: 'GNTY',
    name: 'Guaranty Bancshares Inc (TX)'
  },
  {
    symbol: 'GNUS',
    name: 'Genius Brands International Inc'
  },
  {
    symbol: 'GNW',
    name: 'Genworth Financial Inc - Class A'
  },
  {
    symbol: 'GO',
    name: 'Grocery Outlet Holding Corp'
  },
  {
    symbol: 'GOAC',
    name: 'GO Acquisition Corp - Class A'
  },
  {
    symbol: 'GOAC-U',
    name: 'GO Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'GOAC-WS',
    name: 'GO Acquisition Corp - Warrants (31/08/2027)'
  },
  {
    symbol: 'GOBI',
    name: 'Gobi Acquisition Corp Class A'
  },
  {
    symbol: 'GOCO',
    name: 'GoHealth Inc - Class A'
  },
  {
    symbol: 'GOED',
    name: '1847 Goedeker Inc'
  },
  {
    symbol: 'GOED-WS',
    name: '1847 Goedeker Inc - Warrants (01/01/9999)'
  },
  {
    symbol: 'GOEV',
    name: 'Canoo Inc - Class A'
  },
  {
    symbol: 'GOEVW',
    name: 'Canoo Inc - Warrants (05/09/2025)'
  },
  {
    symbol: 'GOGL',
    name: 'Golden Ocean Group Ltd'
  },
  {
    symbol: 'GOGN',
    name: 'GoGreen Investments Corp - Class A'
  },
  {
    symbol: 'GOGN-U',
    name: 'GoGreen Investments Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'GOGN-WS',
    name: 'GoGreen Investments Corp - Warrants (31/05/2028)'
  },
  {
    symbol: 'GOGO',
    name: 'Gogo Inc'
  },
  {
    symbol: 'GOL',
    name: 'Gol Linhas Aereas Inteligentes S.A.'
  },
  {
    symbol: 'GOLD',
    name: 'Barrick Gold Corp'
  },
  {
    symbol: 'GOLF',
    name: 'Acushnet Holdings Corp'
  },
  {
    symbol: 'GOOD',
    name: 'Gladstone Commercial Corp'
  },
  {
    symbol: 'GOODN',
    name: 'Gladstone Commercial Corp'
  },
  {
    symbol: 'GOODO',
    name: 'Gladstone Commercial Corp'
  },
  {
    symbol: 'GOOG',
    name: 'Alphabet Inc - Class C'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc - Class A'
  },
  {
    symbol: 'GOOS',
    name: 'Canada Goose Holdings Inc (Subord Vot Shs)'
  },
  {
    symbol: 'GORO',
    name: 'Gold Resource Corporation'
  },
  {
    symbol: 'GOSS',
    name: 'Gossamer Bio Inc'
  },
  {
    symbol: 'GOTU',
    name: 'Gaotu Techedu Inc'
  },
  {
    symbol: 'GOVX',
    name: 'Geovax Labs Inc'
  },
  {
    symbol: 'GOVXW',
    name: 'Geovax Labs Inc - Warrants (01/01/2025)'
  },
  {
    symbol: 'GP',
    name: 'GreenPower Motor Company Inc'
  },
  {
    symbol: 'GPAC',
    name: 'Global Partner Acquisition Corp II - Class A'
  },
  {
    symbol: 'GPACU',
    name: 'Global Partner Acquisition Corp II - Units (1 Ord Class A 1/6 War & 1 CVR )'
  },
  {
    symbol: 'GPACW',
    name: 'Global Partner Acquisition Corp II - Warrants (06/01/2026)'
  },
  {
    symbol: 'GPAQW',
    name: 'Gordon Pointe Acquisition Corp Warrant'
  },
  {
    symbol: 'GPC',
    name: 'Genuine Parts Company'
  },
  {
    symbol: 'GPCO',
    name: 'Golden Path Acquisition Corp'
  },
  {
    symbol: 'GPCOR',
    name: 'Golden Path Acquisition Corp'
  },
  {
    symbol: 'GPCOU',
    name: 'Golden Path Acquisition Corp - Units (1 Ord 1 Right & 1 War)'
  },
  {
    symbol: 'GPCOW',
    name: 'Golden Path Acquisition Corp - Warrants (31/01/2028)'
  },
  {
    symbol: 'GPI',
    name: 'Group 1 Automotive Inc'
  },
  {
    symbol: 'GPJA',
    name: 'Georgia Power Company'
  },
  {
    symbol: 'GPK',
    name: 'Graphic Packaging Holding Company'
  },
  {
    symbol: 'GPL',
    name: 'Great Panther Mining Ltd'
  },
  {
    symbol: 'GPMT',
    name: 'Granite Point Mortgage Trust Inc'
  },
  {
    symbol: 'GPMT-P-A',
    name: 'Granite Point Mortgage Trust Inc'
  },
  {
    symbol: 'GPN',
    name: 'Global Payments Inc'
  },
  {
    symbol: 'GPOR',
    name: 'Gulfport Energy Corp (New)'
  },
  {
    symbol: 'GPP',
    name: 'Green Plains Partners LP'
  },
  {
    symbol: 'GPRE',
    name: 'Green Plains Inc'
  },
  {
    symbol: 'GPRK',
    name: 'Geopark Ltd'
  },
  {
    symbol: 'GPRO',
    name: 'GoPro Inc - Class A'
  },
  {
    symbol: 'GPS',
    name: 'Gap Inc'
  },
  {
    symbol: 'GRAB',
    name: 'Grab Holdings Ltd - Class A'
  },
  {
    symbol: 'GRABW',
    name: 'Grab Holdings Ltd - Warrants (01/12/2026)'
  },
  {
    symbol: 'GRAY',
    name: 'Graybug Vision Inc'
  },
  {
    symbol: 'GRBK',
    name: 'Green Brick Partners Inc'
  },
  {
    symbol: 'GRBK-P-A',
    name: 'Green Brick Partners Inc'
  },
  {
    symbol: 'GRC',
    name: 'Gorman-Rupp Company'
  },
  {
    symbol: 'GRCL',
    name: 'Gracell Biotechnologies Inc'
  },
  {
    symbol: 'GRCY',
    name: 'Greencity Acquisition Corp'
  },
  {
    symbol: 'GRCYU',
    name: 'Greencity Acquisition Corp - Units (1 Ord Share & 1 War)'
  },
  {
    symbol: 'GRCYW',
    name: 'Greencity Acquisition Corp - Warrants (28/04/2027)'
  },
  {
    symbol: 'GREE',
    name: 'Greenidge Generation Holdings Inc - Class A'
  },
  {
    symbol: 'GREEL',
    name: 'Greenidge Generation Holdings Inc'
  },
  {
    symbol: 'GRFS',
    name: 'Grifols SA'
  },
  {
    symbol: 'GRIL',
    name: 'Muscle Maker Inc'
  },
  {
    symbol: 'GRIN',
    name: 'Grindrod Shipping Holdings Ltd'
  },
  {
    symbol: 'GRMN',
    name: 'Garmin Ltd'
  },
  {
    symbol: 'GRNA',
    name: 'GreenLight Biosciences Inc'
  },
  {
    symbol: 'GRNAW',
    name: 'GreenLight Biosciences Inc - Warrants (30/09/2027)'
  },
  {
    symbol: 'GRNQ',
    name: 'Greenpro Capital Corp'
  },
  {
    symbol: 'GROM',
    name: 'Grom Social Enterprises Inc'
  },
  {
    symbol: 'GROMW',
    name: 'Grom Social Enterprises Inc - Warrants (17/06/2026)'
  },
  {
    symbol: 'GROV',
    name: 'Grove Collaborative Holdings Inc - Class A'
  },
  {
    symbol: 'GROV-WS',
    name: 'Grove Collaborative Holdings Inc Redeemable Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50'
  },
  {
    symbol: 'GROW',
    name: 'U.S. Global Investors Inc - Class A'
  },
  {
    symbol: 'GROY',
    name: 'Gold Royalty Corp'
  },
  {
    symbol: 'GROY-WS',
    name: 'Gold Royalty Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'GRP-U',
    name: 'Granite Real Estate Investment Trust - Units'
  },
  {
    symbol: 'GRPH',
    name: 'Graphite Bio Inc'
  },
  {
    symbol: 'GRPN',
    name: 'Groupon Inc'
  },
  {
    symbol: 'GRSHU',
    name: 'Gores Holdings Inc Unit 1 Com 1 Wt Exp'
  },
  {
    symbol: 'GRTS',
    name: 'Gritstone Bio Inc'
  },
  {
    symbol: 'GRTX',
    name: 'Galera Therapeutics Inc'
  },
  {
    symbol: 'GRVI',
    name: 'Grove Inc'
  },
  {
    symbol: 'GRVY',
    name: 'Gravity Co Ltd'
  },
  {
    symbol: 'GRWG',
    name: 'GrowGeneration Corp'
  },
  {
    symbol: 'GRX-P-A',
    name: 'Gabelli Healthcare PFD SER A'
  },
  {
    symbol: 'GRX-P-A-CL',
    name: 'Gabelli Healthcare PFD SER A'
  },
  {
    symbol: 'GS',
    name: 'Goldman Sachs Group Inc'
  },
  {
    symbol: 'GS-P-A',
    name: 'Goldman Sachs Group Inc'
  },
  {
    symbol: 'GS-P-C',
    name: 'Goldman Sachs Group Inc'
  },
  {
    symbol: 'GS-P-D',
    name: 'Goldman Sachs Group Inc'
  },
  {
    symbol: 'GS-P-J',
    name: 'Goldman Sachs Group Inc'
  },
  {
    symbol: 'GS-P-K',
    name: 'Goldman Sachs Group Inc'
  },
  {
    symbol: 'GSAH',
    name: ''
  },
  {
    symbol: 'GSAQ',
    name: 'Global Synergy Acquisition Corp - Class A'
  },
  {
    symbol: 'GSAQU',
    name: 'Global Synergy Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'GSAQW',
    name: 'Global Synergy Acquisition Corp - Warrants (01/01/2025)'
  },
  {
    symbol: 'GSAT',
    name: 'Globalstar Inc'
  },
  {
    symbol: 'GSBC',
    name: 'Great Southern Bancorp Inc'
  },
  {
    symbol: 'GSBD',
    name: 'Goldman Sachs BDC Inc'
  },
  {
    symbol: 'GSEV',
    name: 'Gores Holdings VII Inc - Class A'
  },
  {
    symbol: 'GSEVU',
    name: 'Gores Holdings VII Inc - Units (1 Ord Share Class A & 1/8 War)'
  },
  {
    symbol: 'GSEVW',
    name: 'Gores Holdings VII Inc - Warrants (04/02/2026)'
  },
  {
    symbol: 'GSHD',
    name: 'Goosehead Insurance Inc - Class A'
  },
  {
    symbol: 'GSIT',
    name: 'GSI Technology Inc'
  },
  {
    symbol: 'GSK',
    name: 'GSK Plc'
  },
  {
    symbol: 'GSL',
    name: 'Global Ship Lease Inc - Class A'
  },
  {
    symbol: 'GSL-P-B',
    name: 'Global Ship Lease Inc'
  },
  {
    symbol: 'GSLD',
    name: 'Global Ship Lease Inc'
  },
  {
    symbol: 'GSM',
    name: 'Ferroglobe Plc'
  },
  {
    symbol: 'GSMG',
    name: 'Glory Star New Media Group Holdings Ltd'
  },
  {
    symbol: 'GSMGW',
    name: 'Glory Star New Media Group Holdings Ltd'
  },
  {
    symbol: 'GSQB',
    name: 'G Squared Ascend II Inc - Class A'
  },
  {
    symbol: 'GSQB-U',
    name: 'G Squared Ascend II Inc - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'GSQB-WS',
    name: 'G Squared Ascend II Inc - Warrants (31/12/2026)'
  },
  {
    symbol: 'GSQD',
    name: 'G Squared Ascend I Inc - Class A'
  },
  {
    symbol: 'GSQD-U',
    name: 'G Squared Ascend I Inc - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'GSQD-WS',
    name: 'G Squared Ascend I Inc - Warrants (01/02/2026)'
  },
  {
    symbol: 'GSRM',
    name: 'GSR II Meteora Acquisition Corp - Class A'
  },
  {
    symbol: 'GSRMR',
    name: 'GSR II Meteora Acquisition Corp'
  },
  {
    symbol: 'GSRMU',
    name: 'GSR II Meteora Acquisition Corp - Units (1 Ord Class A 1/16 Rights & 1 War)'
  },
  {
    symbol: 'GSRMW',
    name: 'GSR II Meteora Acquisition Corp - Warrants (24/02/2027)'
  },
  {
    symbol: 'GSUN',
    name: 'Golden Sun Education Group Ltd - Class A'
  },
  {
    symbol: 'GSV',
    name: 'Gold Standard Ventures Corp'
  },
  {
    symbol: 'GT',
    name: 'Goodyear Tire & Rubber Company'
  },
  {
    symbol: 'GTAC',
    name: 'Global Technology Acquisition Corp I - Class A'
  },
  {
    symbol: 'GTACU',
    name: 'Global Technology Acquisition Corp I - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'GTACW',
    name: 'Global Technology Acquisition Corp I - Warrants (19/10/2026)'
  },
  {
    symbol: 'GTBP',
    name: 'GT Biopharma Inc'
  },
  {
    symbol: 'GTE',
    name: 'Gran Tierra Energy Inc'
  },
  {
    symbol: 'GTEC',
    name: 'Greenland Technologies Holding Corp'
  },
  {
    symbol: 'GTES',
    name: 'Gates Industrial Corporation plc'
  },
  {
    symbol: 'GTH',
    name: 'Genetron Holdings Ltd'
  },
  {
    symbol: 'GTHX',
    name: 'G1 Therapeutics Inc'
  },
  {
    symbol: 'GTIM',
    name: 'Good Times Restaurants Inc'
  },
  {
    symbol: 'GTLB',
    name: 'Gitlab Inc - Class A'
  },
  {
    symbol: 'GTLS',
    name: 'Chart Industries Inc'
  },
  {
    symbol: 'GTN',
    name: 'Gray Television Inc'
  },
  {
    symbol: 'GTN-A',
    name: 'Gray Television Inc - Class A'
  },
  {
    symbol: 'GTPA',
    name: 'Gores Technology Partners Inc - Class A'
  },
  {
    symbol: 'GTPAU',
    name: 'Gores Technology Partners Inc - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'GTPAW',
    name: 'Gores Technology Partners Inc - Warrants (28/02/2028)'
  },
  {
    symbol: 'GTPB',
    name: 'Gores Technology Partners II Inc - Class A'
  },
  {
    symbol: 'GTPBU',
    name: 'Gores Technology Partners II Inc - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'GTPBW',
    name: 'Gores Technology Partners II Inc - Warrants (28/02/2028)'
  },
  {
    symbol: 'GTX',
    name: 'Garrett Motion Inc - New'
  },
  {
    symbol: 'GTXAP',
    name: 'Garrett Motion Inc'
  },
  {
    symbol: 'GTY',
    name: 'Getty Realty Corp'
  },
  {
    symbol: 'GTYH',
    name: 'GTY Technology Holdings Inc'
  },
  {
    symbol: 'GUG',
    name: 'Guggenheim Active Allocation Fund'
  },
  {
    symbol: 'GURE',
    name: 'Gulf Resources Inc'
  },
  {
    symbol: 'GUT-P-C',
    name: 'Gabelli Utility Trust'
  },
  {
    symbol: 'GUT-R',
    name: 'Gabelli Utility Trust The Rights expiring April 14 2021'
  },
  {
    symbol: 'GUT-R-W',
    name: 'Gabelli Utility Trust The Rights expiring April 14 2021 When Issued'
  },
  {
    symbol: 'GVA',
    name: 'Granite Construction Inc'
  },
  {
    symbol: 'GVCI',
    name: 'Green Visor Financial Technology Acquisition Corp I - Class A'
  },
  {
    symbol: 'GVCIU',
    name: 'Green Visor Financial Technology Acquisition Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'GVCIW',
    name: 'Green Visor Financial Technology Acquisition Corp I - Warrants (27/10/2026)'
  },
  {
    symbol: 'GVP',
    name: 'GSE Systems Inc'
  },
  {
    symbol: 'GWAV',
    name: 'Greenwave Technology Solutions Inc'
  },
  {
    symbol: 'GWH',
    name: 'ESS Tech Inc'
  },
  {
    symbol: 'GWH-WS',
    name: 'ESS Tech Inc Warrant'
  },
  {
    symbol: 'GWII',
    name: 'Good Works II Acquisition Corp'
  },
  {
    symbol: 'GWIIW',
    name: 'Good Works II Acquisition Corp - Warrants (01/02/2028)'
  },
  {
    symbol: 'GWRE',
    name: 'Guidewire Software Inc'
  },
  {
    symbol: 'GWRS',
    name: 'Global Water Resources Inc'
  },
  {
    symbol: 'GWW',
    name: 'W.W. Grainger Inc'
  },
  {
    symbol: 'GXII',
    name: 'GX Acquisition Corp II - Class A'
  },
  {
    symbol: 'GXIIU',
    name: 'GX Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'GXIIW',
    name: 'GX Acquisition Corp II - Warrants (17/03/2026)'
  },
  {
    symbol: 'GXO',
    name: 'GXO Logistics Inc'
  },
  {
    symbol: 'GXO-W',
    name: 'GXO Logistics Inc WhenIssued'
  },
  {
    symbol: 'GYB',
    name: 'CABCO Series 2004101 Trust Goldman Sachs Capital I Floating Rate Callable Certificates'
  },
  {
    symbol: 'GYRO',
    name: 'Gyrodyne LLC'
  },
  {
    symbol: 'H',
    name: 'Hyatt Hotels Corporation - Class A'
  },
  {
    symbol: 'HA',
    name: 'Hawaiian Holdings Inc'
  },
  {
    symbol: 'HAAC',
    name: 'Health Assurance Acquisition Corp - Class A'
  },
  {
    symbol: 'HAACU',
    name: 'Health Assurance Acquisition Corp - Units (1 Ord Class A & 1/4 War)'
  },
  {
    symbol: 'HAACW',
    name: 'Health Assurance Acquisition Corp - Warrants(12/11/2025)'
  },
  {
    symbol: 'HAE',
    name: 'Haemonetics Corp'
  },
  {
    symbol: 'HAFC',
    name: 'Hanmi Financial Corp'
  },
  {
    symbol: 'HAIA',
    name: 'Healthcare AI Acquisition Corp - Class A'
  },
  {
    symbol: 'HAIAU',
    name: 'Healthcare AI Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'HAIAW',
    name: 'Healthcare AI Acquisition Corp - Warrants (07/12/2026)'
  },
  {
    symbol: 'HAIN',
    name: 'Hain Celestial Group Inc'
  },
  {
    symbol: 'HAL',
    name: 'Halliburton Company'
  },
  {
    symbol: 'HALL',
    name: 'Hallmark Financial Services Inc'
  },
  {
    symbol: 'HALO',
    name: 'Halozyme Therapeutics Inc'
  },
  {
    symbol: 'HAPP',
    name: 'Happiness Development Group Ltd - Class A'
  },
  {
    symbol: 'HARP',
    name: 'Harpoon Therapeutics Inc'
  },
  {
    symbol: 'HAS',
    name: 'Hasbro Inc'
  },
  {
    symbol: 'HASI',
    name: 'Hannon Armstrong Sustainable Infrastructure capital Inc'
  },
  {
    symbol: 'HAYN',
    name: 'Haynes International Inc'
  },
  {
    symbol: 'HAYW',
    name: 'Hayward Holdings Inc'
  },
  {
    symbol: 'HBAN',
    name: 'Huntington Bancshares Inc'
  },
  {
    symbol: 'HBANM',
    name: 'Huntington Bancshares Inc'
  },
  {
    symbol: 'HBANP',
    name: 'Huntington Bancshares Inc'
  },
  {
    symbol: 'HBB',
    name: 'Hamilton Beach Brands Holding Co - Class A'
  },
  {
    symbol: 'HBCP',
    name: 'Home Bancorp Inc'
  },
  {
    symbol: 'HBI',
    name: 'Hanesbrands Inc'
  },
  {
    symbol: 'HBIO',
    name: 'Harvard Bioscience Inc'
  },
  {
    symbol: 'HBM',
    name: 'Hudbay Minerals Inc'
  },
  {
    symbol: 'HBNC',
    name: 'Horizon Bancorp Inc (IN)'
  },
  {
    symbol: 'HBT',
    name: 'HBT Financial Inc'
  },
  {
    symbol: 'HCA',
    name: 'HCA Healthcare Inc'
  },
  {
    symbol: 'HCAR',
    name: 'Healthcare Services Acquisition Corp - Class A'
  },
  {
    symbol: 'HCARU',
    name: 'Healthcare Services Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'HCARW',
    name: 'Healthcare Services Acquisition Corp - Warrants (18/11/2025)'
  },
  {
    symbol: 'HCAT',
    name: 'Health Catalyst Inc'
  },
  {
    symbol: 'HCC',
    name: 'Warrior Met Coal Inc'
  },
  {
    symbol: 'HCCI',
    name: 'Heritage-Crystal Clean Inc'
  },
  {
    symbol: 'HCDI',
    name: 'Harbor Custom Development Inc'
  },
  {
    symbol: 'HCDIP',
    name: 'Harbor Custom Development Inc'
  },
  {
    symbol: 'HCDIW',
    name: 'Harbor Custom Development Inc - Warrants (09/05/2026)'
  },
  {
    symbol: 'HCDIZ',
    name: 'Harbor Custom Development Inc - Warrants (07/10/2026)'
  },
  {
    symbol: 'HCI',
    name: 'HCI Group Inc'
  },
  {
    symbol: 'HCIC',
    name: 'Hennessy Capital Investment Corp V - Class A'
  },
  {
    symbol: 'HCICU',
    name: 'Hennessy Capital Investment Corp V - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'HCICW',
    name: 'Hennessy Capital Investment Corp V - Warrants (15/01/2025)'
  },
  {
    symbol: 'HCII',
    name: 'Hudson Executive Investment Corp II - Class A'
  },
  {
    symbol: 'HCIIU',
    name: 'Hudson Executive Investment Corp II - Units (1 Ord Class A & 1/4 War)'
  },
  {
    symbol: 'HCIIW',
    name: 'Hudson Executive Investment Corp II - Warrants (31/01/2027)'
  },
  {
    symbol: 'HCKT',
    name: 'Hackett Group Inc (The)'
  },
  {
    symbol: 'HCM',
    name: 'HUTCHMED (China) Ltd'
  },
  {
    symbol: 'HCMA',
    name: 'Hcm Acquisition Corp - Class A'
  },
  {
    symbol: 'HCMAU',
    name: 'Hcm Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'HCMAW',
    name: 'Hcm Acquisition Corp - Warrants (20/01/2027)'
  },
  {
    symbol: 'HCNE',
    name: 'Jaws Hurricane Acquisition Corp - Class A'
  },
  {
    symbol: 'HCNEU',
    name: 'Jaws Hurricane Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'HCNEW',
    name: 'Jaws Hurricane Acquisition Corp - Warrants (26/03/2026)'
  },
  {
    symbol: 'HCP',
    name: 'HashiCorp Inc - Class A'
  },
  {
    symbol: 'HCSG',
    name: 'Healthcare Services Group Inc'
  },
  {
    symbol: 'HCTI',
    name: 'Healthcare Triangle Inc'
  },
  {
    symbol: 'HCVI',
    name: 'Hennessy Capital Investment Corp VI - Class A'
  },
  {
    symbol: 'HCVIU',
    name: 'Hennessy Capital Investment Corp VI - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'HCVIW',
    name: 'Hennessy Capital Investment Corp VI - Warrants (10/06/2026)'
  },
  {
    symbol: 'HCWB',
    name: 'HCW Biologics Inc'
  },
  {
    symbol: 'HCXY',
    name: 'Hercules Capital Inc 625 Notes due 2033'
  },
  {
    symbol: 'HD',
    name: 'Home Depot Inc'
  },
  {
    symbol: 'HDB',
    name: 'HDFC Bank Ltd'
  },
  {
    symbol: 'HDSN',
    name: 'Hudson Technologies Inc'
  },
  {
    symbol: 'HE',
    name: 'Hawaiian Electric Industries Inc'
  },
  {
    symbol: 'HEAR',
    name: 'Turtle Beach Corp'
  },
  {
    symbol: 'HEES',
    name: 'H&E Equipment Services Inc'
  },
  {
    symbol: 'HEI',
    name: 'Heico Corp'
  },
  {
    symbol: 'HEI-A',
    name: 'Heico Corp - Class A'
  },
  {
    symbol: 'HELE',
    name: 'Helen of Troy Ltd'
  },
  {
    symbol: 'HEP',
    name: 'Holly Energy Partners L.P.'
  },
  {
    symbol: 'HEPA',
    name: 'Hepion Pharmaceuticals Inc'
  },
  {
    symbol: 'HEPS',
    name: 'D-MARKET Electronic Services & Trading'
  },
  {
    symbol: 'HERA',
    name: 'FTAC Hera Acquisition Corp - Class A'
  },
  {
    symbol: 'HERAU',
    name: 'FTAC Hera Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'HERAW',
    name: 'FTAC Hera Acquisition Corp - Warrants (28/02/2026)'
  },
  {
    symbol: 'HES',
    name: 'Hess Corporation'
  },
  {
    symbol: 'HESM',
    name: 'Hess Midstream LP - Class A'
  },
  {
    symbol: 'HEXO',
    name: 'HEXO Corp'
  },
  {
    symbol: 'HFBL',
    name: 'Home Federal Bancorp Inc (Louisiana)'
  },
  {
    symbol: 'HFFG',
    name: 'HF Foods Group Inc'
  },
  {
    symbol: 'HFRO-P-A',
    name: 'Highland Income Fund'
  },
  {
    symbol: 'HFWA',
    name: 'Heritage Financial Corp'
  },
  {
    symbol: 'HGBL',
    name: 'Heritage Global Inc'
  },
  {
    symbol: 'HGEN',
    name: 'Humanigen Inc'
  },
  {
    symbol: 'HGLB',
    name: 'Highland Global Allocation Fund'
  },
  {
    symbol: 'HGTY',
    name: 'Hagerty Inc - Class A'
  },
  {
    symbol: 'HGTY-WS',
    name: 'Hagerty Inc - Warrants (01/01/9999)'
  },
  {
    symbol: 'HGV',
    name: 'Hilton Grand Vacations Inc'
  },
  {
    symbol: 'HHC',
    name: 'Howard Hughes Corporation'
  },
  {
    symbol: 'HHGC',
    name: 'HHG Capital Corp'
  },
  {
    symbol: 'HHGCR',
    name: 'HHG Capital Corp'
  },
  {
    symbol: 'HHGCU',
    name: 'HHG Capital Corp - Units (1 Ord 1 War & 1 Rts)'
  },
  {
    symbol: 'HHGCW',
    name: 'HHG Capital Corp - Warrants (25/02/2026)'
  },
  {
    symbol: 'HHLA',
    name: 'HH&L Acquisition Co - Class A'
  },
  {
    symbol: 'HHLA-U',
    name: 'HH&L Acquisition Co - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'HHLA-WS',
    name: 'HH&L Acquisition Co - Warrants (02/04/2026)'
  },
  {
    symbol: 'HHR',
    name: 'HeadHunter Group PLC'
  },
  {
    symbol: 'HHS',
    name: 'Harte-Hanks Inc'
  },
  {
    symbol: 'HI',
    name: 'Hillenbrand Inc'
  },
  {
    symbol: 'HIBB',
    name: 'Hibbett Inc'
  },
  {
    symbol: 'HIBL',
    name: 'Direxion Daily S&P 500 High Beta Bull 3X Shares'
  },
  {
    symbol: 'HIBS',
    name: 'Direxion Daily S&P 500 High Beta Bear 3X Shares'
  },
  {
    symbol: 'HIFS',
    name: 'Hingham Institution For Savings'
  },
  {
    symbol: 'HIG',
    name: 'Hartford Financial Services Group Inc'
  },
  {
    symbol: 'HIG-P-G',
    name: 'Hartford Financial Services Group Inc'
  },
  {
    symbol: 'HIGA',
    name: 'H.I.G. Acquisition Corp - Class A'
  },
  {
    symbol: 'HIGA-U',
    name: 'H.I.G. Acquisition Corp Units each consisting of one Class A ordinary share 0.0001 par value and onethird of one redeemable warrant'
  },
  {
    symbol: 'HIGA-WS',
    name: 'H.I.G. Acquisition Corp Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'HIHO',
    name: 'Highway Holdings Ltd'
  },
  {
    symbol: 'HII',
    name: 'Huntington Ingalls Industries Inc'
  },
  {
    symbol: 'HIII',
    name: 'Hudson Executive Investment Corp III - Class A'
  },
  {
    symbol: 'HIIIU',
    name: 'Hudson Executive Investment Corp III - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'HIIIW',
    name: 'Hudson Executive Investment Corp III - Warrants (22/02/2026)'
  },
  {
    symbol: 'HIL',
    name: 'Hill International Inc'
  },
  {
    symbol: 'HILS',
    name: 'Hillstream BioPharma Inc'
  },
  {
    symbol: 'HIMS',
    name: 'Hims & Hers Health Inc - Class A'
  },
  {
    symbol: 'HIMX',
    name: 'Himax Technologies'
  },
  {
    symbol: 'HIPO',
    name: 'Hippo Holdings Inc'
  },
  {
    symbol: 'HIPO-WS',
    name: 'Hippo Holdings Inc - Warrants (16/09/2025)'
  },
  {
    symbol: 'HITI',
    name: 'High Tide Inc'
  },
  {
    symbol: 'HIVE',
    name: 'HIVE Blockchain Technologies Ltd'
  },
  {
    symbol: 'HIW',
    name: 'Highwoods Properties Inc'
  },
  {
    symbol: 'HIX-R',
    name: 'Western Asset High Income Fund II Inc Rights expiring May 6 2022 Rights'
  },
  {
    symbol: 'HIX-R-W',
    name: 'Western Asset High Income Fund II Inc Rights expiring May 6 2022 Rights when issued'
  },
  {
    symbol: 'HJV',
    name: 'MS Structured Asset Corp SATURNS JC Penney Company Inc DebBkd Series 20071 70'
  },
  {
    symbol: 'HL',
    name: 'Hecla Mining Company'
  },
  {
    symbol: 'HL-P-B',
    name: 'Hecla Mining Company'
  },
  {
    symbol: 'HLAH',
    name: 'Hamilton Lane Alliance Holdings I Inc - Class A'
  },
  {
    symbol: 'HLAHU',
    name: 'Hamilton Lane Alliance Holdings I Inc - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'HLAHW',
    name: 'Hamilton Lane Alliance Holdings I Inc - Warrants (12/01/2026)'
  },
  {
    symbol: 'HLBZ',
    name: 'Helbiz Inc - Class A'
  },
  {
    symbol: 'HLBZW',
    name: 'Helbiz Inc - Warrants (28/10/2024)'
  },
  {
    symbol: 'HLF',
    name: 'Herbalife Nutrition Ltd'
  },
  {
    symbol: 'HLG',
    name: 'Hailiang Education Group Inc'
  },
  {
    symbol: 'HLGN',
    name: 'Heliogen Inc - Class A'
  },
  {
    symbol: 'HLGN-WS',
    name: 'Heliogen Inc Wt'
  },
  {
    symbol: 'HLI',
    name: 'Houlihan Lokey Inc - Class A'
  },
  {
    symbol: 'HLIO',
    name: 'Helios Technologies Inc'
  },
  {
    symbol: 'HLIT',
    name: 'Harmonic Inc'
  },
  {
    symbol: 'HLLY',
    name: 'Holley Inc - Class A'
  },
  {
    symbol: 'HLLY-WS',
    name: 'Holley Inc - Warrants (30/11/2027)'
  },
  {
    symbol: 'HLM-P',
    name: 'Hillman Group Capital Trust Preferred Stock'
  },
  {
    symbol: 'HLMN',
    name: 'Hillman Solutions Corp'
  },
  {
    symbol: 'HLNE',
    name: 'Hamilton Lane Inc - Class A'
  },
  {
    symbol: 'HLT',
    name: 'Hilton Worldwide Holdings Inc'
  },
  {
    symbol: 'HLTH',
    name: 'Cue Health Inc'
  },
  {
    symbol: 'HLVX',
    name: 'HilleVax Inc'
  },
  {
    symbol: 'HLX',
    name: 'Helix Energy Solutions Group Inc'
  },
  {
    symbol: 'HMA',
    name: 'Heartland Media Acquisition Corp - Class A'
  },
  {
    symbol: 'HMA-U',
    name: 'Heartland Media Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'HMA-WS',
    name: 'Heartland Media Acquisition Corp - Warrants(01/01/9999)'
  },
  {
    symbol: 'HMC',
    name: 'Honda Motor'
  },
  {
    symbol: 'HMCO',
    name: 'HumanCo Acquisition Corp - Class A'
  },
  {
    symbol: 'HMCOU',
    name: 'HumanCo Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'HMCOW',
    name: 'HumanCo Acquisition Corp - Warrants (08/12/2025)'
  },
  {
    symbol: 'HMLP',
    name: 'Hoegh LNG Partners LP'
  },
  {
    symbol: 'HMLP-P-A',
    name: 'Hoegh LNG Partners LP'
  },
  {
    symbol: 'HMN',
    name: 'Horace Mann Educators Corp'
  },
  {
    symbol: 'HMNF',
    name: 'HMN Financial Inc'
  },
  {
    symbol: 'HMPT',
    name: 'Home Point Capital Inc'
  },
  {
    symbol: 'HMST',
    name: 'HomeStreet Inc'
  },
  {
    symbol: 'HMTV',
    name: 'Hemisphere Media Group Inc - Class A'
  },
  {
    symbol: 'HMY',
    name: 'Harmony Gold Mining Co Ltd'
  },
  {
    symbol: 'HNGR',
    name: 'Hanger Inc'
  },
  {
    symbol: 'HNI',
    name: 'HNI Corp'
  },
  {
    symbol: 'HNNA',
    name: 'Hennessy Advisors Inc'
  },
  {
    symbol: 'HNNAZ',
    name: 'Hennessy Advisors Inc'
  },
  {
    symbol: 'HNRA',
    name: 'HNR Acquisition Corp'
  },
  {
    symbol: 'HNRA-U',
    name: 'HNR Acquisition Corp - Units (1 Ord & 1 War)'
  },
  {
    symbol: 'HNRG',
    name: 'Hallador Energy Company'
  },
  {
    symbol: 'HNST',
    name: 'Honest Company Inc (The )'
  },
  {
    symbol: 'HNVR',
    name: 'Hanover Bancorp Inc'
  },
  {
    symbol: 'HOFT',
    name: 'Hooker Furnishings Corporation'
  },
  {
    symbol: 'HOFV',
    name: 'Hall of Fame Resort & Entertainment Company'
  },
  {
    symbol: 'HOFVW',
    name: 'Hall of Fame Resort & Entertainment Company - Warrants (24/01/2023)'
  },
  {
    symbol: 'HOG',
    name: 'Harley-Davidson Inc'
  },
  {
    symbol: 'HOLI',
    name: 'Hollysys Automation Technologies Ltd'
  },
  {
    symbol: 'HOLX',
    name: 'Hologic Inc'
  },
  {
    symbol: 'HOMB',
    name: 'Home Bancshares Inc'
  },
  {
    symbol: 'HON',
    name: 'Honeywell International Inc'
  },
  {
    symbol: 'HONE',
    name: 'HarborOne Bancorp Inc'
  },
  {
    symbol: 'HOOD',
    name: 'Robinhood Markets Inc - Class A'
  },
  {
    symbol: 'HOOK',
    name: 'Hookipa Pharma Inc'
  },
  {
    symbol: 'HOPE',
    name: 'Hope Bancorp Inc'
  },
  {
    symbol: 'HORI',
    name: 'Emerging Markets Horizon Corp - Class A'
  },
  {
    symbol: 'HORIU',
    name: 'Emerging Markets Horizon Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'HORIW',
    name: 'Emerging Markets Horizon Corp - Warrants (16/11/2026)'
  },
  {
    symbol: 'HOTH',
    name: 'Hoth Therapeutics Inc'
  },
  {
    symbol: 'HOUR',
    name: 'Hour Loop Inc'
  },
  {
    symbol: 'HOUS',
    name: 'Anywhere Real Estate Inc'
  },
  {
    symbol: 'HOV',
    name: 'Hovnanian Enterprises Inc - Class A'
  },
  {
    symbol: 'HOVNP',
    name: 'Hovnanian Enterprises Inc'
  },
  {
    symbol: 'HOWL',
    name: 'Werewolf Therapeutics Inc'
  },
  {
    symbol: 'HP',
    name: 'Helmerich & Payne Inc'
  },
  {
    symbol: 'HPE',
    name: 'Hewlett Packard Enterprise Company'
  },
  {
    symbol: 'HPK',
    name: 'HighPeak Energy Inc'
  },
  {
    symbol: 'HPKEW',
    name: 'HighPeak Energy Inc - Warrants (21/08/2025)'
  },
  {
    symbol: 'HPLT',
    name: 'Home Plate Acquisition Corp - Class A'
  },
  {
    symbol: 'HPLTU',
    name: 'Home Plate Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'HPLTW',
    name: 'Home Plate Acquisition Corp - Warrants (30/09/2026)'
  },
  {
    symbol: 'HPP',
    name: 'Hudson Pacific Properties Inc'
  },
  {
    symbol: 'HPP-P-C',
    name: 'Hudson Pacific Properties Inc'
  },
  {
    symbol: 'HPQ',
    name: 'HP Inc'
  },
  {
    symbol: 'HPX',
    name: 'HPX Corp - Class A'
  },
  {
    symbol: 'HPX-U',
    name: 'HPX Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'HPX-WS',
    name: 'HPX Corp - Warrants (14/07/2025)'
  },
  {
    symbol: 'HQI',
    name: 'HireQuest Inc'
  },
  {
    symbol: 'HQY',
    name: 'Healthequity Inc'
  },
  {
    symbol: 'HR',
    name: 'Healthcare Realty Trust Inc'
  },
  {
    symbol: 'HRB',
    name: 'H&R Block Inc'
  },
  {
    symbol: 'HRI',
    name: 'Herc Holdings Inc'
  },
  {
    symbol: 'HRL',
    name: 'Hormel Foods Corp'
  },
  {
    symbol: 'HRMY',
    name: 'Harmony Biosciences Holdings Inc'
  },
  {
    symbol: 'HROW',
    name: 'Harrow Health Inc'
  },
  {
    symbol: 'HROWL',
    name: 'Harrow Health Inc'
  },
  {
    symbol: 'HRT',
    name: 'HireRight Holdings Corp'
  },
  {
    symbol: 'HRTG',
    name: 'Heritage Insurance Holdings Inc'
  },
  {
    symbol: 'HRTX',
    name: 'Heron Therapeutics Inc'
  },
  {
    symbol: 'HRZN',
    name: 'Horizon Technology Finance Corp'
  },
  {
    symbol: 'HSAC',
    name: 'Health Sciences Acquisitions Corp'
  },
  {
    symbol: 'HSAQ',
    name: 'Health Sciences Acquisitions Corp 2'
  },
  {
    symbol: 'HSBC',
    name: 'HSBC Holdings plc'
  },
  {
    symbol: 'HSC',
    name: 'Harsco Corp'
  },
  {
    symbol: 'HSCS',
    name: 'Heart Test Laboratories Inc'
  },
  {
    symbol: 'HSCSW',
    name: 'Heart Test Laboratories Inc - Warrants(15/06/2027)'
  },
  {
    symbol: 'HSDT',
    name: 'Helius Medical Technologies Inc - Class A'
  },
  {
    symbol: 'HSIC',
    name: 'Henry Schein Inc'
  },
  {
    symbol: 'HSII',
    name: 'Heidrick & Struggles International Inc'
  },
  {
    symbol: 'HSKA',
    name: 'Heska Corp (Restricted Voting)'
  },
  {
    symbol: 'HSON',
    name: 'Hudson Global Inc'
  },
  {
    symbol: 'HST',
    name: 'Host Hotels & Resorts Inc'
  },
  {
    symbol: 'HSTM',
    name: 'Healthstream Inc'
  },
  {
    symbol: 'HSTO',
    name: 'Histogen Inc'
  },
  {
    symbol: 'HSY',
    name: 'Hershey Company'
  },
  {
    symbol: 'HT',
    name: 'Hersha Hospitality Trust'
  },
  {
    symbol: 'HT-P-C',
    name: 'Hersha Hospitality Trust 6875 Series C Cumulative Redeemable Preferred Shares of Beneficial Interest'
  },
  {
    symbol: 'HT-P-D',
    name: 'Hersha Hospitality Trust 650 Series D Cumulative Redeemable Preferred Shares of Beneficial Interest 001 par value per share'
  },
  {
    symbol: 'HT-P-E',
    name: 'Hersha Hospitality Trust 650 Series E Cumulative Redeemable Preferred Shares of Beneficial Interest'
  },
  {
    symbol: 'HTA',
    name: 'Healthcare Trust of America Inc - Class A'
  },
  {
    symbol: 'HTAQ',
    name: 'Hunt Companies Acquisition Corp I - Class A'
  },
  {
    symbol: 'HTAQ-U',
    name: 'Hunt Companies Acquisition Corp I - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'HTAQ-WS',
    name: 'Hunt Companies Acquisition Corp I - Warrants (01/01/9999)'
  },
  {
    symbol: 'HTBI',
    name: 'HomeTrust Bancshares Inc'
  },
  {
    symbol: 'HTBK',
    name: 'Heritage Commerce Corp'
  },
  {
    symbol: 'HTCR',
    name: 'HeartCore Enterprises Inc'
  },
  {
    symbol: 'HTFB',
    name: 'Horizon Technology Finance Corp'
  },
  {
    symbol: 'HTFC',
    name: 'Horizon Technology Finance Corp'
  },
  {
    symbol: 'HTGC',
    name: 'Hercules Capital Inc'
  },
  {
    symbol: 'HTGM',
    name: 'HTG Molecular Diagnostics Inc'
  },
  {
    symbol: 'HTH',
    name: 'Hilltop Holdings Inc'
  },
  {
    symbol: 'HTHT',
    name: 'Huazhu Group Ltd'
  },
  {
    symbol: 'HTIA',
    name: 'Healthcare Trust Inc'
  },
  {
    symbol: 'HTIBP',
    name: 'Healthcare Trust Inc'
  },
  {
    symbol: 'HTLD',
    name: 'Heartland Express Inc'
  },
  {
    symbol: 'HTLF',
    name: 'Heartland Financial USA Inc'
  },
  {
    symbol: 'HTLFP',
    name: 'Heartland Financial USA Inc'
  },
  {
    symbol: 'HTOO',
    name: 'Fusion Fuel Green Ltd - Class A'
  },
  {
    symbol: 'HTOOW',
    name: 'Fusion Fuel Green Ltd - Warrants (01/01/2023)'
  },
  {
    symbol: 'HTPA',
    name: 'Highland Transcend Partners I Corp - Class A'
  },
  {
    symbol: 'HTPA-U',
    name: 'Highland Transcend Partners I Corp Units each consisting of one Class A ordinary share and onethird of one redeemable warrant'
  },
  {
    symbol: 'HTPA-WS',
    name: 'Highland Transcend Partners I Corp - Warrants (02/12/2025)'
  },
  {
    symbol: 'HTZ',
    name: 'Hertz Global Holdings Inc (New)'
  },
  {
    symbol: 'HTZWW',
    name: 'Hertz Global Holdings Inc - Warrants (30/06/2051)'
  },
  {
    symbol: 'HUBB',
    name: 'Hubbell Inc'
  },
  {
    symbol: 'HUBG',
    name: 'Hub Group Inc - Class A'
  },
  {
    symbol: 'HUBS',
    name: 'HubSpot Inc'
  },
  {
    symbol: 'HUDI',
    name: 'Huadi International Group Co Ltd'
  },
  {
    symbol: 'HUGE',
    name: 'FSD Pharma Inc - Class B - Class B (Sub Voting)'
  },
  {
    symbol: 'HUGS',
    name: 'USHG Acquisition Corp - Class A'
  },
  {
    symbol: 'HUGS-U',
    name: 'USHG Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'HUGS-WS',
    name: 'USHG Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'HUIZ',
    name: 'Huize Holding Ltd'
  },
  {
    symbol: 'HUM',
    name: 'Humana Inc'
  },
  {
    symbol: 'HUMA',
    name: 'Humacyte Inc'
  },
  {
    symbol: 'HUMAW',
    name: 'Humacyte Inc - Warrants (27/08/2026)'
  },
  {
    symbol: 'HUN',
    name: 'Huntsman Corp'
  },
  {
    symbol: 'HURC',
    name: 'Hurco Companies Inc'
  },
  {
    symbol: 'HURN',
    name: 'Huron Consulting Group Inc'
  },
  {
    symbol: 'HUSA',
    name: 'Houston American Energy Corp'
  },
  {
    symbol: 'HUT',
    name: 'Hut 8 Mining Corp'
  },
  {
    symbol: 'HUYA',
    name: 'HUYA Inc'
  },
  {
    symbol: 'HVBC',
    name: 'HV Bancorp Inc'
  },
  {
    symbol: 'HVT',
    name: 'Haverty Furniture Cos. Inc'
  },
  {
    symbol: 'HVT-A',
    name: 'Haverty Furniture Cos. Inc - Class A'
  },
  {
    symbol: 'HWBK',
    name: 'Hawthorn Bancshares Inc'
  },
  {
    symbol: 'HWC',
    name: 'Hancock Whitney Corp'
  },
  {
    symbol: 'HWCPZ',
    name: 'Hancock Whitney Corporation 6.25 Subordinated Notes due 2060'
  },
  {
    symbol: 'HWEL',
    name: 'Healthwell Acquisition Corp I - Class A'
  },
  {
    symbol: 'HWELU',
    name: 'Healthwell Acquisition Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'HWELW',
    name: 'Healthwell Acquisition Corp I - Warrants (01/04/2028)'
  },
  {
    symbol: 'HWKN',
    name: 'Hawkins Inc'
  },
  {
    symbol: 'HWKZ',
    name: 'Hawks Acquisition Corp - Class A'
  },
  {
    symbol: 'HWKZ-U',
    name: 'Hawks Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'HWKZ-WS',
    name: 'Hawks Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'HWM',
    name: 'Howmet Aerospace Inc'
  },
  {
    symbol: 'HXL',
    name: 'Hexcel Corp'
  },
  {
    symbol: 'HY',
    name: 'Hyster-Yale Materials Handling Inc - Class A'
  },
  {
    symbol: 'HYFM',
    name: 'Hydrofarm Holdings Group Inc'
  },
  {
    symbol: 'HYLN',
    name: 'Hyliion Holdings Corporation - Class A'
  },
  {
    symbol: 'HYLN-WS',
    name: 'Hyliion Holdings Corp Wt Exp 10012025'
  },
  {
    symbol: 'HYMC',
    name: 'Hycroft Mining Holding Corporation - Class A'
  },
  {
    symbol: 'HYMCL',
    name: 'Hycroft Mining Holding Corporation - Warrants (01/01/9999)'
  },
  {
    symbol: 'HYMCZ',
    name: 'Hycroft Mining Holding Corporation - Warrants(22/10/2022)'
  },
  {
    symbol: 'HYPR',
    name: 'Hyperfine Inc - Class A'
  },
  {
    symbol: 'HYRE',
    name: 'HyreCar Inc'
  },
  {
    symbol: 'HYW',
    name: 'Hywin Holdings Ltd'
  },
  {
    symbol: 'HYZN',
    name: 'Hyzon Motors Inc - Class A'
  },
  {
    symbol: 'HYZNW',
    name: 'Hyzon Motors Inc - Warrants (02/10/2025)'
  },
  {
    symbol: 'HZAC-U',
    name: 'Horizon Acquisition Corporation Units each consisting of one Class A and onethird of one Redeemable warrant'
  },
  {
    symbol: 'HZAC-WS',
    name: 'Vivid Seats Inc - Warrants (18/10/2026)'
  },
  {
    symbol: 'HZN',
    name: 'Horizon Global Corp'
  },
  {
    symbol: 'HZNP',
    name: 'Horizon Therapeutics Plc'
  },
  {
    symbol: 'HZO',
    name: 'Marinemax Inc'
  },
  {
    symbol: 'HZON',
    name: 'Horizon Acquisition Corp II - Class A'
  },
  {
    symbol: 'HZON-U',
    name: 'Horizon Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'HZON-WS',
    name: 'Horizon Acquisition Corporation II Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'IAA',
    name: 'IAA Inc'
  },
  {
    symbol: 'IAC',
    name: 'IAC InterActiveCorp. - New'
  },
  {
    symbol: 'IACA-WS',
    name: 'Taboola.com Ltd - Warrants (29/06/2026)'
  },
  {
    symbol: 'IACC',
    name: 'ION Acquisition Corp 3 Ltd - Class A'
  },
  {
    symbol: 'IAG',
    name: 'Iamgold Corp'
  },
  {
    symbol: 'IART',
    name: 'Integra Lifesciences Holdings Corp'
  },
  {
    symbol: 'IAS',
    name: 'Integral Ad Science Holding Corp'
  },
  {
    symbol: 'IAUX',
    name: 'i80 Gold Corp'
  },
  {
    symbol: 'IBA',
    name: 'Industrias Bachoco S.A.B. DE C.V.'
  },
  {
    symbol: 'IBCP',
    name: 'Independent Bank Corporation (Ionia MI)'
  },
  {
    symbol: 'IBER',
    name: 'Ibere Pharmaceuticals - Class A'
  },
  {
    symbol: 'IBER-U',
    name: 'Ibere Pharmaceuticals - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'IBER-WS',
    name: 'Ibere Pharmaceuticals - Warrants (01/03/2028)'
  },
  {
    symbol: 'IBEX',
    name: 'IBEX Ltd'
  },
  {
    symbol: 'IBIO',
    name: 'iBio Inc'
  },
  {
    symbol: 'IBKCN',
    name: 'IBERIABANK Corp Dep Shs Repstg 1400th Int FxdFltg Non Cum Perp Pfd Ser D'
  },
  {
    symbol: 'IBKCO',
    name: 'IBKCO'
  },
  {
    symbol: 'IBKCP',
    name: 'IBKCP'
  },
  {
    symbol: 'IBKR',
    name: 'Interactive Brokers Group Inc - Class A'
  },
  {
    symbol: 'IBM',
    name: 'International Business Machines Corp'
  },
  {
    symbol: 'IBM-W',
    name: 'International Business Machines Corporation ExDistribution When Issued'
  },
  {
    symbol: 'IBN',
    name: 'ICICI Bank Ltd'
  },
  {
    symbol: 'IBOC',
    name: 'International Bancshares Corp'
  },
  {
    symbol: 'IBP',
    name: 'Installed Building Products Inc'
  },
  {
    symbol: 'IBRX',
    name: 'ImmunityBio Inc'
  },
  {
    symbol: 'IBTX',
    name: 'Independent Bank Group Inc'
  },
  {
    symbol: 'ICAD',
    name: 'Icad Inc'
  },
  {
    symbol: 'ICCC',
    name: 'Immucell Corp'
  },
  {
    symbol: 'ICCH',
    name: 'ICC Holdings Inc'
  },
  {
    symbol: 'ICCM',
    name: 'IceCure Medical Ltd'
  },
  {
    symbol: 'ICD',
    name: 'Independence Contract Drilling Inc'
  },
  {
    symbol: 'ICE',
    name: 'Intercontinental Exchange Inc'
  },
  {
    symbol: 'ICFI',
    name: 'ICF International Inc'
  },
  {
    symbol: 'ICHR',
    name: 'Ichor Holdings Ltd'
  },
  {
    symbol: 'ICL',
    name: 'ICL Group Ltd'
  },
  {
    symbol: 'ICLK',
    name: 'iClick Interactive Asia Group Ltd'
  },
  {
    symbol: 'ICLR',
    name: 'Icon Plc'
  },
  {
    symbol: 'ICMB',
    name: 'Investcorp Credit Management BDC Inc'
  },
  {
    symbol: 'ICNC',
    name: 'Iconic Sports Acquisition Corp - Class A'
  },
  {
    symbol: 'ICNC-U',
    name: 'Iconic Sports Acquisition Corp Units'
  },
  {
    symbol: 'ICNC-WS',
    name: 'Iconic Sports Acquisition Corp - Warrants (12/10/2026)'
  },
  {
    symbol: 'ICPT',
    name: 'Intercept Pharmaceuticals Inc'
  },
  {
    symbol: 'ICR-P-A',
    name: 'InPoint Commercial Real Estate Income Inc'
  },
  {
    symbol: 'ICUI',
    name: 'ICU Medical Inc'
  },
  {
    symbol: 'ICVX',
    name: 'Icosavax Inc'
  },
  {
    symbol: 'ID',
    name: 'L1 IDENTITY SOLUTIONS INC.'
  },
  {
    symbol: 'IDA',
    name: 'Idacorp Inc'
  },
  {
    symbol: 'IDAI',
    name: 'T Stamp Inc - Class A'
  },
  {
    symbol: 'IDBA',
    name: 'IDEX Biometrics ASA'
  },
  {
    symbol: 'IDCC',
    name: 'Interdigital Inc'
  },
  {
    symbol: 'IDEX',
    name: 'Ideanomics Inc'
  },
  {
    symbol: 'IDN',
    name: 'Intellicheck Inc'
  },
  {
    symbol: 'IDR',
    name: 'Idaho Strategic Resources Inc'
  },
  {
    symbol: 'IDRA',
    name: 'Idera Pharmaceuticals Inc'
  },
  {
    symbol: 'IDT',
    name: 'IDT Corp - Class B'
  },
  {
    symbol: 'IDW',
    name: 'IDW Media Holdings Inc - Class B'
  },
  {
    symbol: 'IDXX',
    name: 'Idexx Laboratories Inc'
  },
  {
    symbol: 'IDYA',
    name: 'Ideaya Biosciences Inc'
  },
  {
    symbol: 'IE',
    name: 'Ivanhoe Electric Inc'
  },
  {
    symbol: 'IEA',
    name: 'Infrastructure and Energy Alternatives Inc'
  },
  {
    symbol: 'IEAWW',
    name: 'Infrastructure and Energy Alternatives Inc - Warrants (20/05/2021)'
  },
  {
    symbol: 'IEP',
    name: 'Icahn Enterprises L P'
  },
  {
    symbol: 'IESC',
    name: 'IES Holdings Inc'
  },
  {
    symbol: 'IEX',
    name: 'Idex Corporation'
  },
  {
    symbol: 'IFBD',
    name: 'Infobird Co Ltd'
  },
  {
    symbol: 'IFED',
    name: 'ETRACS IFED Invest with the Fed TR Index ETN'
  },
  {
    symbol: 'IFF',
    name: 'International Flavors & Fragrances Inc'
  },
  {
    symbol: 'IFF-W',
    name: 'International Flavors & Fragrances Inc Additional Shares When Issued'
  },
  {
    symbol: 'IFIN',
    name: 'InFinT Acquisition Corporation - Class A'
  },
  {
    symbol: 'IFIN-U',
    name: 'InFinT Acquisition Corporation - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'IFIN-WS',
    name: 'InFinT Acquisition Corporation - Warrants (01/01/9999)'
  },
  {
    symbol: 'IFRX',
    name: 'InflaRx N.V.'
  },
  {
    symbol: 'IFS',
    name: 'Intercorp Financial Services Inc'
  },
  {
    symbol: 'IGAC',
    name: 'IG Acquisition Corp - Class A'
  },
  {
    symbol: 'IGACU',
    name: 'IG Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'IGACW',
    name: 'IG Acquisition Corp - Warrants (21/09/2025)'
  },
  {
    symbol: 'IGC',
    name: 'India Globalization Capital Inc'
  },
  {
    symbol: 'IGIC',
    name: 'International General Insurance Holdings Ltd'
  },
  {
    symbol: 'IGICW',
    name: 'International General Insurance Holdings Ltd - Warrants (17/03/2025)'
  },
  {
    symbol: 'IGMS',
    name: 'IGM Biosciences Inc'
  },
  {
    symbol: 'IGNY',
    name: 'Ignyte Acquisition Corp'
  },
  {
    symbol: 'IGNYU',
    name: 'Ignyte Acquisition Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'IGNYW',
    name: 'Ignyte Acquisition Corp - Warrants (05/01/2026)'
  },
  {
    symbol: 'IGT',
    name: 'International Game Technology PLC'
  },
  {
    symbol: 'IGTA',
    name: 'Inception Growth Acquisition Ltd'
  },
  {
    symbol: 'IGTAR',
    name: 'Inception Growth Acquisition Ltd'
  },
  {
    symbol: 'IGTAU',
    name: 'Inception Growth Acquisition Ltd - Units (1 Ord 1/2 War & 1 Rts)'
  },
  {
    symbol: 'IGTAW',
    name: 'Inception Growth Acquisition Ltd - Warrants(15/10/2026)'
  },
  {
    symbol: 'IGZ',
    name: 'NYSE ARCA LISTED TEST STOCK FOR CTS CQS'
  },
  {
    symbol: 'IH',
    name: 'iHuman Inc'
  },
  {
    symbol: 'IHG',
    name: 'Intercontinental Hotels Group'
  },
  {
    symbol: 'IHRT',
    name: 'iHeartMedia Inc - Class A New'
  },
  {
    symbol: 'IHS',
    name: 'IHS Holding Ltd'
  },
  {
    symbol: 'IHT',
    name: 'Innsuites Hospitality Trust'
  },
  {
    symbol: 'III',
    name: 'Information Services Group Inc'
  },
  {
    symbol: 'IIII',
    name: 'INSU Acquisition Corp III - Class A'
  },
  {
    symbol: 'IIIIU',
    name: 'INSU Acquisition Corp III - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'IIIIW',
    name: 'INSU Acquisition Corp III - Warrants (31/12/2026)'
  },
  {
    symbol: 'IIIN',
    name: 'Insteel Industries Inc'
  },
  {
    symbol: 'IIIV',
    name: 'i3 Verticals Inc - Class A'
  },
  {
    symbol: 'IINN',
    name: 'Inspira Technologies Oxy B.H.N. Ltd'
  },
  {
    symbol: 'IINNW',
    name: 'Inspira Technologies Oxy B.H.N. Ltd - Warrants (30/06/2026)'
  },
  {
    symbol: 'IIPR',
    name: 'Innovative Industrial Properties Inc'
  },
  {
    symbol: 'IIPR-P-A',
    name: 'Innovative Industrial Properties Inc'
  },
  {
    symbol: 'IIVI',
    name: 'Ii-Vi Inc'
  },
  {
    symbol: 'IIVIP',
    name: 'Ii-Vi Inc'
  },
  {
    symbol: 'IKNA',
    name: 'Ikena Oncology Inc'
  },
  {
    symbol: 'IKT',
    name: 'Inhibikase Therapeutics Inc'
  },
  {
    symbol: 'ILMN',
    name: 'Illumina Inc'
  },
  {
    symbol: 'ILPT',
    name: 'Industrial Logistics Properties Trust'
  },
  {
    symbol: 'IMAB',
    name: 'I-Mab'
  },
  {
    symbol: 'IMAC',
    name: 'IMAC Holdings Inc'
  },
  {
    symbol: 'IMACW',
    name: 'IMAC Holdings Inc - Warrants (13/12/2023)'
  },
  {
    symbol: 'IMAQ',
    name: 'International Media Acquisition Corp'
  },
  {
    symbol: 'IMAQR',
    name: 'International Media Acquisition Corp'
  },
  {
    symbol: 'IMAQU',
    name: 'International Media Acquisition Corp - Units (1 Ord 1 Rts & 1 War)'
  },
  {
    symbol: 'IMAQW',
    name: 'International Media Acquisition Corp - Warrants (21/07/2026)'
  },
  {
    symbol: 'IMAX',
    name: 'Imax Corp'
  },
  {
    symbol: 'IMBI',
    name: 'iMedia Brands Inc - Class A'
  },
  {
    symbol: 'IMBIL',
    name: 'iMedia Brands Inc'
  },
  {
    symbol: 'IMCC',
    name: 'IM Cannabis Corp'
  },
  {
    symbol: 'IMCR',
    name: 'Immunocore Holdings plc'
  },
  {
    symbol: 'IMGN',
    name: 'Immunogen Inc'
  },
  {
    symbol: 'IMGO',
    name: 'Imago BioSciences Inc'
  },
  {
    symbol: 'IMKTA',
    name: 'Ingles Markets Inc - Class A'
  },
  {
    symbol: 'IMMP',
    name: 'Immutep Ltd'
  },
  {
    symbol: 'IMMR',
    name: 'Immersion Corp'
  },
  {
    symbol: 'IMMX',
    name: 'Immix Biopharma Inc'
  },
  {
    symbol: 'IMNM',
    name: 'Immunome Inc'
  },
  {
    symbol: 'IMO',
    name: 'Imperial Oil Ltd'
  },
  {
    symbol: 'IMOS',
    name: 'Chipmos Technologies Inc'
  },
  {
    symbol: 'IMPL',
    name: 'Impel Pharmaceuticals Inc'
  },
  {
    symbol: 'IMPP',
    name: 'Imperial Petroleum Inc'
  },
  {
    symbol: 'IMPPP',
    name: 'Imperial Petroleum Inc'
  },
  {
    symbol: 'IMPX',
    name: 'AEA-Bridges Impact Corp - Class A'
  },
  {
    symbol: 'IMPX-U',
    name: 'AEA-Bridges Impact Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'IMPX-WS',
    name: 'AEA-Bridges Impact Corp - Warrants (19/09/2025)'
  },
  {
    symbol: 'IMRA',
    name: 'Imara Inc'
  },
  {
    symbol: 'IMRN',
    name: 'Immuron Ltd'
  },
  {
    symbol: 'IMRNW',
    name: 'Immuron Ltd - Warrants (12/05/2022)'
  },
  {
    symbol: 'IMRX',
    name: 'Immuneering Corp Class A'
  },
  {
    symbol: 'IMTE',
    name: 'Integrated Media Technology Ltd'
  },
  {
    symbol: 'IMTX',
    name: 'Immatics N.V'
  },
  {
    symbol: 'IMTXW',
    name: 'Immatics N.V - Warrants (01/07/2025)'
  },
  {
    symbol: 'IMUX',
    name: 'Immunic Inc'
  },
  {
    symbol: 'IMV',
    name: 'IMV Inc'
  },
  {
    symbol: 'IMVT',
    name: 'Immunovant Inc'
  },
  {
    symbol: 'IMXI',
    name: 'International Money Express Inc'
  },
  {
    symbol: 'INAB',
    name: 'IN8bio Inc'
  },
  {
    symbol: 'INAQ',
    name: 'Insight Acquisition Corp - Class A'
  },
  {
    symbol: 'INAQ-U',
    name: 'Insight Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'INAQ-WS',
    name: 'Insight Acquisition Corp - Warrants(26/08/2026)'
  },
  {
    symbol: 'INBK',
    name: 'First Internet Bancorp'
  },
  {
    symbol: 'INBKZ',
    name: 'First Internet Bancorp FXDFR NT REDEEM 30062029 USD 25'
  },
  {
    symbol: 'INBX',
    name: 'Inhibrx Inc'
  },
  {
    symbol: 'INCR',
    name: 'INC Research Holdings Inc'
  },
  {
    symbol: 'INCY',
    name: 'Incyte Corp'
  },
  {
    symbol: 'INDB',
    name: 'Independent Bank Corp'
  },
  {
    symbol: 'INDI',
    name: 'Indie Semiconductor Inc - Class A'
  },
  {
    symbol: 'INDIW',
    name: 'Indie Semiconductor Inc - Warrants (10/06/2026)'
  },
  {
    symbol: 'INDO',
    name: 'Indonesia Energy Corp Ltd'
  },
  {
    symbol: 'INDP',
    name: 'Indaptus Therapeutics Inc'
  },
  {
    symbol: 'INDT',
    name: 'INDUS Realty Trust Inc'
  },
  {
    symbol: 'INFA',
    name: 'Informatica Inc - Class A'
  },
  {
    symbol: 'INFI',
    name: 'Infinity Pharmaceuticals Inc'
  },
  {
    symbol: 'INFN',
    name: 'Infinera Corp'
  },
  {
    symbol: 'INFU',
    name: 'InfuSystem Holdings Inc'
  },
  {
    symbol: 'INFY',
    name: 'Infosys Ltd'
  },
  {
    symbol: 'ING',
    name: 'ING Groep N.V.'
  },
  {
    symbol: 'INGN',
    name: 'Inogen Inc'
  },
  {
    symbol: 'INGR',
    name: 'Ingredion Inc'
  },
  {
    symbol: 'INKA',
    name: 'KludeIn I Acquisition Corp - Class A'
  },
  {
    symbol: 'INKAU',
    name: 'KludeIn I Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'INKAW',
    name: 'KludeIn I Acquisition Corp - Warrants (06/01/2025)'
  },
  {
    symbol: 'INKT',
    name: 'MiNK Therapeutics Inc'
  },
  {
    symbol: 'INM',
    name: 'InMed Pharmaceuticals Inc'
  },
  {
    symbol: 'INMB',
    name: 'INmune Bio Inc'
  },
  {
    symbol: 'INMD',
    name: 'Inmode Ltd'
  },
  {
    symbol: 'INN',
    name: 'Summit Hotel Properties Inc'
  },
  {
    symbol: 'INN-P-E',
    name: 'Summit Hotel Properties Inc'
  },
  {
    symbol: 'INN-P-F',
    name: 'Summit Hotel Properties Inc'
  },
  {
    symbol: 'INNO',
    name: 'Harbor Disruptive Innovation ETF'
  },
  {
    symbol: 'INNV',
    name: 'InnovAge Holding Corp'
  },
  {
    symbol: 'INO',
    name: 'Inovio Pharmaceuticals Inc'
  },
  {
    symbol: 'INOD',
    name: 'Innodata Inc'
  },
  {
    symbol: 'INPX',
    name: 'Inpixon'
  },
  {
    symbol: 'INSE',
    name: 'Inspired Entertainment Inc'
  },
  {
    symbol: 'INSG',
    name: 'Inseego Corp'
  },
  {
    symbol: 'INSM',
    name: 'Insmed Inc'
  },
  {
    symbol: 'INSP',
    name: 'Inspire Medical Systems Inc'
  },
  {
    symbol: 'INST',
    name: 'Instructure Holdings Inc'
  },
  {
    symbol: 'INSW',
    name: 'International Seaways Inc'
  },
  {
    symbol: 'INSW-P-A',
    name: 'International Seaways Inc 850 Senior Notes due June 30 2023'
  },
  {
    symbol: 'INT',
    name: 'World Fuel Services Corp'
  },
  {
    symbol: 'INTA',
    name: 'Intapp Inc'
  },
  {
    symbol: 'INTC',
    name: 'Intel Corp'
  },
  {
    symbol: 'INTE',
    name: 'Integral Acquisition Corp 1 - Class A'
  },
  {
    symbol: 'INTEU',
    name: 'Integral Acquisition Corp 1 - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'INTEW',
    name: 'Integral Acquisition Corp 1 - Warrants (31/05/2028)'
  },
  {
    symbol: 'INTG',
    name: 'Intergroup Corp'
  },
  {
    symbol: 'INTL',
    name: ''
  },
  {
    symbol: 'INTR',
    name: 'Inter & Co Inc - Class A'
  },
  {
    symbol: 'INTT',
    name: 'Intest Corp'
  },
  {
    symbol: 'INTU',
    name: 'Intuit Inc'
  },
  {
    symbol: 'INTZ',
    name: 'Intrusion Inc'
  },
  {
    symbol: 'INUV',
    name: 'Inuvo Inc'
  },
  {
    symbol: 'INVA',
    name: 'Innoviva Inc'
  },
  {
    symbol: 'INVE',
    name: 'Identiv Inc'
  },
  {
    symbol: 'INVH',
    name: 'Invitation Homes Inc'
  },
  {
    symbol: 'INVO',
    name: 'INVO Bioscience Inc'
  },
  {
    symbol: 'INVZ',
    name: 'Innoviz Technologies Ltd'
  },
  {
    symbol: 'INVZW',
    name: 'Innoviz Technologies Ltd - Warrants (05/04/2026)'
  },
  {
    symbol: 'INZY',
    name: 'Inozyme Pharma Inc'
  },
  {
    symbol: 'IOAC',
    name: 'Innovative International Acquisition Corp - Class A'
  },
  {
    symbol: 'IOACU',
    name: 'Innovative International Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'IOACW',
    name: 'Innovative International Acquisition Corp - Warrants (26/10/2026)'
  },
  {
    symbol: 'IOBT',
    name: 'IO Biotech Inc'
  },
  {
    symbol: 'IONM',
    name: 'Assure Holdings Corp'
  },
  {
    symbol: 'IONQ',
    name: 'IonQ Inc'
  },
  {
    symbol: 'IONQ-WS',
    name: 'IonQ Inc - Warrants(01/01/9999)'
  },
  {
    symbol: 'IONR',
    name: 'ioneer Ltd'
  },
  {
    symbol: 'IONS',
    name: 'Ionis Pharmaceuticals Inc'
  },
  {
    symbol: 'IOR',
    name: 'Income Opportunity Realty Investors Inc'
  },
  {
    symbol: 'IOSP',
    name: 'Innospec Inc'
  },
  {
    symbol: 'IOT',
    name: 'Samsara Inc - Class A'
  },
  {
    symbol: 'IOVA',
    name: 'Iovance Biotherapeutics Inc'
  },
  {
    symbol: 'IP',
    name: 'International Paper Company'
  },
  {
    symbol: 'IPA',
    name: 'ImmunoPrecise Antibodies Ltd'
  },
  {
    symbol: 'IPAR',
    name: 'Inter Parfums Inc'
  },
  {
    symbol: 'IPAX',
    name: 'Inflection Point Acquisition Corp - Class A'
  },
  {
    symbol: 'IPAXU',
    name: 'Inflection Point Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'IPAXW',
    name: 'Inflection Point Acquisition Corp - Warrants (21/09/2026)'
  },
  {
    symbol: 'IPB',
    name: 'Merrill Lynch Depositor Inc'
  },
  {
    symbol: 'IPDN',
    name: 'Professional Diversity Network Inc'
  },
  {
    symbol: 'IPG',
    name: 'Interpublic Group Of Cos. Inc'
  },
  {
    symbol: 'IPGP',
    name: 'IPG Photonics Corp'
  },
  {
    symbol: 'IPHA',
    name: 'Innate Pharma'
  },
  {
    symbol: 'IPI',
    name: 'Intrepid Potash Inc'
  },
  {
    symbol: 'IPOB-U',
    name: 'Social Capital Hedosophia Holdings Corp II Unit 1 Cl A & 14 Wt'
  },
  {
    symbol: 'IPOC-U',
    name: 'Social Capital Hedosophia Holdings Corp III Unit 1 Com & 14 Wt'
  },
  {
    symbol: 'IPOD',
    name: 'Social Capital Hedosophia Holdings Corp IV - Class A'
  },
  {
    symbol: 'IPOD-U',
    name: 'Social Capital Hedosophia Holdings Corp IV - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'IPOD-WS',
    name: 'Social Capital Hedosophia Holdings Corp IV - Warrants (26/09/2025)'
  },
  {
    symbol: 'IPOE-WS',
    name: 'Social Capital Hedosophia Holdings Corp V Redeemable Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'IPOF',
    name: 'Social Capital Hedosophia Holdings Corp VI - Class A'
  },
  {
    symbol: 'IPOF-U',
    name: 'Social Capital Hedosophia Holdings Corp VI - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'IPOF-WS',
    name: 'Social Capital Hedosophia Holdings Corp VI Redeemable warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'IPSC',
    name: 'Century Therapeutics Inc'
  },
  {
    symbol: 'IPVA',
    name: 'InterPrivate II Acquisition Corp - Class A'
  },
  {
    symbol: 'IPVA-U',
    name: 'InterPrivate II Acquisition Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'IPVA-WS',
    name: 'InterPrivate II Acquisition Corp Warrants each whole warrant exercisable for one share of Class A common stock at an exercise price of 11.50 per share'
  },
  {
    symbol: 'IPVF',
    name: 'InterPrivate III Financial Partners Inc - Class A'
  },
  {
    symbol: 'IPVF-U',
    name: 'InterPrivate III Financial Partners Inc - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'IPVF-WS',
    name: 'InterPrivate III Financial Partners Inc - Warrants (01/01/9999)'
  },
  {
    symbol: 'IPVI',
    name: 'InterPrivate IV InfraTech Partners Inc - Class A'
  },
  {
    symbol: 'IPVIU',
    name: 'InterPrivate IV InfraTech Partners Inc - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'IPVIW',
    name: 'InterPrivate IV InfraTech Partners Inc - Warrants (05/03/2026)'
  },
  {
    symbol: 'IPW',
    name: 'iPower Inc'
  },
  {
    symbol: 'IPWR',
    name: 'Ideal Power Inc'
  },
  {
    symbol: 'IPX',
    name: 'IperionX Ltd'
  },
  {
    symbol: 'IQ',
    name: 'iQIYI Inc'
  },
  {
    symbol: 'IQMD',
    name: 'Intelligent Medicine Acquisition Corp - Class A'
  },
  {
    symbol: 'IQMDU',
    name: 'Intelligent Medicine Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'IQMDW',
    name: 'Intelligent Medicine Acquisition Corp - Warrants - (05/11/2026)'
  },
  {
    symbol: 'IQV',
    name: 'IQVIA Holdings Inc'
  },
  {
    symbol: 'IR',
    name: 'Ingersoll-Rand Inc'
  },
  {
    symbol: 'IRBT',
    name: 'Irobot Corp'
  },
  {
    symbol: 'IRDM',
    name: 'Iridium Communications Inc'
  },
  {
    symbol: 'IREN',
    name: 'Iris Energy Ltd'
  },
  {
    symbol: 'IRIX',
    name: 'IRIDEX Corp'
  },
  {
    symbol: 'IRM',
    name: 'Iron Mountain Inc'
  },
  {
    symbol: 'IRMD',
    name: 'Iradimed Corp'
  },
  {
    symbol: 'IRNT',
    name: 'IronNet Inc'
  },
  {
    symbol: 'IRNT-WS',
    name: 'IronNet Inc - Warrants (26/08/2026)'
  },
  {
    symbol: 'IROQ',
    name: 'IF Bancorp Inc'
  },
  {
    symbol: 'IRRX',
    name: 'Integrated Rail and Resources Acquisition Corp - Class A'
  },
  {
    symbol: 'IRRX-U',
    name: 'Integrated Rail and Resources Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'IRRX-WS',
    name: 'Integrated Rail and Resources Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'IRS',
    name: 'Irsa Inversiones Y Representaciones S.A.'
  },
  {
    symbol: 'IRS-WS',
    name: 'Irsa Inversiones Y Representaciones S.A. - Warrants (13/05/2026)'
  },
  {
    symbol: 'IRT',
    name: 'Independence Realty Trust Inc'
  },
  {
    symbol: 'IRTC',
    name: 'iRhythm Technologies Inc'
  },
  {
    symbol: 'IRWD',
    name: 'Ironwood Pharmaceuticals Inc - Class A'
  },
  {
    symbol: 'IS',
    name: 'ironSource Ltd - Class A'
  },
  {
    symbol: 'ISAA',
    name: 'Iron Spark I Inc - Class A'
  },
  {
    symbol: 'ISDR',
    name: 'Issuer Direct Corp'
  },
  {
    symbol: 'ISEE',
    name: 'IVERIC bio Inc'
  },
  {
    symbol: 'ISG',
    name: 'ING Group NV Perpetual Dent Secs 6125'
  },
  {
    symbol: 'ISG-CL',
    name: 'ING Group N.V. Perpetual Dent Secs 6.125'
  },
  {
    symbol: 'ISIG',
    name: 'Insignia Systems Inc'
  },
  {
    symbol: 'ISLE',
    name: 'Isleworth Healthcare Acquisition Corp'
  },
  {
    symbol: 'ISLEW',
    name: 'Isleworth Healthcare Acquisition Corp - Warrants (02/08/2027)'
  },
  {
    symbol: 'ISO',
    name: 'IsoPlexis Corp'
  },
  {
    symbol: 'ISOS-WS',
    name: 'Isos Acquisition Corporation Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'ISPC',
    name: 'iSpecimen Inc'
  },
  {
    symbol: 'ISPO',
    name: 'Inspirato Incorporated - Class A'
  },
  {
    symbol: 'ISPOW',
    name: 'Inspirato Incorporated - Warrants (11/02/2027)'
  },
  {
    symbol: 'ISR',
    name: 'Isoray Inc'
  },
  {
    symbol: 'ISRG',
    name: 'Intuitive Surgical Inc'
  },
  {
    symbol: 'ISSC',
    name: 'Innovative Solutions And Support Inc'
  },
  {
    symbol: 'ISTR',
    name: 'Investar Holding Corp'
  },
  {
    symbol: 'ISUN',
    name: 'iSun Inc'
  },
  {
    symbol: 'IT',
    name: 'Gartner Inc'
  },
  {
    symbol: 'ITAQ',
    name: 'Industrial Tech Acquisitions II Inc - Class A'
  },
  {
    symbol: 'ITAQU',
    name: 'Industrial Tech Acquisitions II Inc - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ITAQW',
    name: 'Industrial Tech Acquisitions II Inc - Warrants (31/03/2028)'
  },
  {
    symbol: 'ITCB',
    name: 'Itau Corpbanca'
  },
  {
    symbol: 'ITCB-R',
    name: 'Itau CorpBanca Rights expires October 26 2021'
  },
  {
    symbol: 'ITCI',
    name: 'Intra-Cellular Therapies Inc'
  },
  {
    symbol: 'ITGR',
    name: 'Integer Holdings Corp'
  },
  {
    symbol: 'ITHX',
    name: 'ITHAX Acquisition Corp - Class A'
  },
  {
    symbol: 'ITHXU',
    name: 'ITHAX Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ITHXW',
    name: 'ITHAX Acquisition Corp - Warrants (31/12/2027)'
  },
  {
    symbol: 'ITI',
    name: 'Iteris Inc'
  },
  {
    symbol: 'ITIC',
    name: 'Investors Title Company'
  },
  {
    symbol: 'ITOS',
    name: 'ITeos Therapeutics Inc'
  },
  {
    symbol: 'ITP',
    name: 'IT Tech Packaging Inc'
  },
  {
    symbol: 'ITQ',
    name: 'Itiquira Acquisition Corp - Class A'
  },
  {
    symbol: 'ITQRU',
    name: 'Itiquira Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ITQRW',
    name: 'Itiquira Acquisition Corp - Warrants (03/02/2026)'
  },
  {
    symbol: 'ITRG',
    name: 'Integra Resources Corp'
  },
  {
    symbol: 'ITRI',
    name: 'Itron Inc'
  },
  {
    symbol: 'ITRM',
    name: 'Iterum Therapeutics Plc'
  },
  {
    symbol: 'ITRN',
    name: 'Ituran Location And Control Ltd'
  },
  {
    symbol: 'ITT',
    name: 'ITT Inc'
  },
  {
    symbol: 'ITUB',
    name: 'Itau Unibanco Holding S.A.'
  },
  {
    symbol: 'ITW',
    name: 'Illinois Tool Works Inc'
  },
  {
    symbol: 'IVA',
    name: 'Inventiva'
  },
  {
    symbol: 'IVAC',
    name: 'Intevac Inc'
  },
  {
    symbol: 'IVC',
    name: 'Invacare Corp'
  },
  {
    symbol: 'IVCA',
    name: 'Investcorp India Acquisition Corp - Class A'
  },
  {
    symbol: 'IVCAU',
    name: 'Investcorp India Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'IVCAW',
    name: 'Investcorp India Acquisition Corp - Warrants (01/06/2028)'
  },
  {
    symbol: 'IVCB',
    name: 'Investcorp Europe Acquisition Corp I - Class A'
  },
  {
    symbol: 'IVCBU',
    name: 'Investcorp Europe Acquisition Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'IVCBW',
    name: 'Investcorp Europe Acquisition Corp I - Warrants (15/12/2026)'
  },
  {
    symbol: 'IVCP',
    name: 'Swiftmerge Acquisition Corp - Class A'
  },
  {
    symbol: 'IVCPU',
    name: 'Swiftmerge Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'IVCPW',
    name: 'Swiftmerge Acquisition Corp - Warrants (13/12/2026)'
  },
  {
    symbol: 'IVDA',
    name: 'Iveda Solutions Inc'
  },
  {
    symbol: 'IVDAW',
    name: 'Iveda Solutions Inc - Warrants (01/04/2027)'
  },
  {
    symbol: 'IVR',
    name: 'Invesco Mortgage Capital Inc'
  },
  {
    symbol: 'IVR-P-B',
    name: 'Invesco Mortgage Capital Inc Preferred Series B Cum Fxd to Fltg'
  },
  {
    symbol: 'IVR-P-C',
    name: 'Invesco Mortgage Capital Inc'
  },
  {
    symbol: 'IVT',
    name: 'InvenTrust Properties Corp'
  },
  {
    symbol: 'IVZ',
    name: 'Invesco Ltd'
  },
  {
    symbol: 'IWFL',
    name: 'UBS AG London Branch'
  },
  {
    symbol: 'IWML',
    name: 'UBS AG London Branch'
  },
  {
    symbol: 'IX',
    name: 'Orix Corporation'
  },
  {
    symbol: 'IXAQ',
    name: 'IX Acquisition Corp - Class A'
  },
  {
    symbol: 'IXAQU',
    name: 'IX Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'IXAQW',
    name: 'IX Acquisition Corp - Warrants (31/07/2028)'
  },
  {
    symbol: 'IXHL',
    name: 'Incannex Healthcare Ltd'
  },
  {
    symbol: 'IXSE',
    name: 'WISDOMTREE INDIA EX-STATE-OWNED ENTERPRISES FUND N/A'
  },
  {
    symbol: 'IZEA',
    name: 'IZEA Worldwide Inc'
  },
  {
    symbol: 'J',
    name: 'Jacobs Engineering Group Inc'
  },
  {
    symbol: 'JACK',
    name: 'Jack In The Box Inc'
  },
  {
    symbol: 'JAGX',
    name: 'Jaguar Health Inc'
  },
  {
    symbol: 'JAKK',
    name: 'Jakks Pacific Inc'
  },
  {
    symbol: 'JAMF',
    name: 'Jamf Holding Corp'
  },
  {
    symbol: 'JAN',
    name: 'JanOne Inc'
  },
  {
    symbol: 'JANX',
    name: 'Janux Therapeutics Inc'
  },
  {
    symbol: 'JAQC',
    name: 'Jupiter Acquisition Corp'
  },
  {
    symbol: 'JAQCU',
    name: 'Jupiter Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'JAQCW',
    name: 'Jupiter Acquisition Corp - Warrants (04/09/2025)'
  },
  {
    symbol: 'JATT',
    name: 'JATT Acquisition Corp - Class A'
  },
  {
    symbol: 'JATT-U',
    name: 'JATT Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'JATT-WS',
    name: 'JATT Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'JAZZ',
    name: 'Jazz Pharmaceuticals plc'
  },
  {
    symbol: 'JBGS',
    name: 'JBG SMITH Properties'
  },
  {
    symbol: 'JBHT',
    name: 'J.B. Hunt Transport Services Inc'
  },
  {
    symbol: 'JBI',
    name: 'Janus International Group Inc - Class A'
  },
  {
    symbol: 'JBI-WS',
    name: 'Janus International Group Inc Warrants each exercisable for one share of Common Stock at an exercise price of 11.50 per share'
  },
  {
    symbol: 'JBK',
    name: 'Lehman ABS Corp'
  },
  {
    symbol: 'JBL',
    name: 'Jabil Inc'
  },
  {
    symbol: 'JBLU',
    name: 'Jetblue Airways Corp'
  },
  {
    symbol: 'JBN',
    name: 'Select Asset Inc Select Asset Inc on behalf of Corporate Backed Callable Trust Certificates JC Penney Debenture Backed Series 20071 Trust'
  },
  {
    symbol: 'JBR',
    name: 'Select Asset Inc Corporate Backed Callable Trust Certificates JC Penney DebentureBacked Series 20061 Class A1'
  },
  {
    symbol: 'JBSS',
    name: 'Sanfilippo (John B.) & Son Inc'
  },
  {
    symbol: 'JBT',
    name: 'John Bean Technologies Corp'
  },
  {
    symbol: 'JCAP-P-B',
    name: 'Jernigan Capital Inc'
  },
  {
    symbol: 'JCI',
    name: 'Johnson Controls International plc'
  },
  {
    symbol: 'JCIC',
    name: 'Jack Creek Investment Corp - Class A'
  },
  {
    symbol: 'JCICU',
    name: 'Jack Creek Investment Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'JCICW',
    name: 'Jack Creek Investment Corp - Warrants (01/10/2025)'
  },
  {
    symbol: 'JCO',
    name: 'Nuveen Credit Opportunities 2022 Target Term Fund'
  },
  {
    symbol: 'JCSE',
    name: 'JE Cleantech Holdings Ltd'
  },
  {
    symbol: 'JCTCF',
    name: 'Jewett-Cameron Trading Co. Ltd'
  },
  {
    symbol: 'JD',
    name: 'JD.com Inc'
  },
  {
    symbol: 'JEF',
    name: 'Jefferies Financial Group Inc'
  },
  {
    symbol: 'JELD',
    name: 'JELD-WEN Holding Inc'
  },
  {
    symbol: 'JFIN',
    name: 'Jiayin Group Inc'
  },
  {
    symbol: 'JFU',
    name: '9F Inc'
  },
  {
    symbol: 'JG',
    name: 'Aurora Mobile Ltd'
  },
  {
    symbol: 'JGGC',
    name: 'Jaguar Global Growth Corp I - Class A'
  },
  {
    symbol: 'JGGCR',
    name: 'Jaguar Global Growth Corp I'
  },
  {
    symbol: 'JGGCU',
    name: 'Jaguar Global Growth Corp I - Units (1 Ord Class A 1 Right & 1/2 War)'
  },
  {
    symbol: 'JGGCW',
    name: 'Jaguar Global Growth Corp I - Warrants (01/01/2027)'
  },
  {
    symbol: 'JHAA',
    name: 'Nuveen Corporate Income 2023 Target Term Fund'
  },
  {
    symbol: 'JHG',
    name: 'Janus Henderson Group plc'
  },
  {
    symbol: 'JHX',
    name: 'James Hardie Industries plc'
  },
  {
    symbol: 'JILL',
    name: 'J.Jill Inc'
  },
  {
    symbol: 'JJSF',
    name: 'J&J Snack Foods Corp'
  },
  {
    symbol: 'JKHY',
    name: 'Jack Henry & Associates Inc'
  },
  {
    symbol: 'JKS',
    name: 'JinkoSolar Holding Co. Ltd'
  },
  {
    symbol: 'JLL',
    name: 'Jones Lang Lasalle Inc'
  },
  {
    symbol: 'JMAC',
    name: 'Maxpro Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'JMACU',
    name: 'Maxpro Capital Acquisition Corp - Units (1 Ord Share Class A & 1 War)'
  },
  {
    symbol: 'JMACW',
    name: 'Maxpro Capital Acquisition Corp - Warrants (27/09/2026)'
  },
  {
    symbol: 'JMIA',
    name: 'Jumia Technologies Ag'
  },
  {
    symbol: 'JMSB',
    name: 'John Marshall Bancorp Inc'
  },
  {
    symbol: 'JNCE',
    name: 'Jounce Therapeutics Inc'
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson'
  },
  {
    symbol: 'JNPR',
    name: 'Juniper Networks Inc'
  },
  {
    symbol: 'JOAN',
    name: 'JOANN Inc'
  },
  {
    symbol: 'JOB',
    name: 'GEE Group Inc'
  },
  {
    symbol: 'JOBY',
    name: 'Joby Aviation Inc - Class A'
  },
  {
    symbol: 'JOBY-WS',
    name: 'Joby Aviation Inc - Warrants (16/09/2025)'
  },
  {
    symbol: 'JOE',
    name: 'St. Joe Company'
  },
  {
    symbol: 'JOFF',
    name: 'Joff Fintech Acquisition Corp - Class A'
  },
  {
    symbol: 'JOFFU',
    name: 'Joff Fintech Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'JOFFW',
    name: 'Joff Fintech Acquisition Corp - Warrants (25/11/2025)'
  },
  {
    symbol: 'JOUT',
    name: 'Johnson Outdoors Inc - Class A'
  },
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase & Company'
  },
  {
    symbol: 'JPM-P-C',
    name: 'JPMorgan Chase & Company'
  },
  {
    symbol: 'JPM-P-D',
    name: 'JPMorgan Chase & Company'
  },
  {
    symbol: 'JPM-P-F',
    name: 'J P Morgan Chase Company Depositary Shares Series Y'
  },
  {
    symbol: 'JPM-P-F-CL',
    name: ''
  },
  {
    symbol: 'JPM-P-G',
    name: 'JPMorgan Chase & Company'
  },
  {
    symbol: 'JPM-P-J',
    name: ''
  },
  {
    symbol: 'JPM-P-K',
    name: 'JPMorgan Chase & Company'
  },
  {
    symbol: 'JPM-P-L',
    name: 'JPMorgan Chase & Company'
  },
  {
    symbol: 'JPM-P-M',
    name: 'J P Morgan Chase & Co Depositary Shares Series M'
  },
  {
    symbol: 'JRSH',
    name: 'Jerash holdings (US) Inc'
  },
  {
    symbol: 'JRVR',
    name: 'James River Group Holdings Ltd'
  },
  {
    symbol: 'JSM',
    name: 'Navient Corp'
  },
  {
    symbol: 'JSPR',
    name: 'Jasper Therapeutics Inc'
  },
  {
    symbol: 'JSPRW',
    name: 'Jasper Therapeutics Inc - Warrants (24/09/2026)'
  },
  {
    symbol: 'JT',
    name: 'Jianpu Technology Inc'
  },
  {
    symbol: 'JUGG',
    name: 'Jaws Juggernaut Acquisition Corp - Class A'
  },
  {
    symbol: 'JUGGU',
    name: 'Jaws Juggernaut Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'JUGGW',
    name: 'Jaws Juggernaut Acquisition Corp - Warrants (17/06/2026)'
  },
  {
    symbol: 'JUN',
    name: 'Juniper II Corp - Class A'
  },
  {
    symbol: 'JUN-U',
    name: 'Juniper II Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'JUN-WS',
    name: 'Juniper II Corp - Warrants(01/01/9999)'
  },
  {
    symbol: 'JUPW',
    name: 'Jupiter Wellness Inc'
  },
  {
    symbol: 'JUPWW',
    name: 'Jupiter Wellness Inc - Warrants (01/10/2025)'
  },
  {
    symbol: 'JVA',
    name: 'Coffee Holding Co Inc'
  },
  {
    symbol: 'JWAC',
    name: 'Jupiter Wellness Acquisition Corp - Class A'
  },
  {
    symbol: 'JWACR',
    name: 'Jupiter Wellness Acquisition Corp'
  },
  {
    symbol: 'JWEL',
    name: 'Jowell Global Ltd'
  },
  {
    symbol: 'JWN',
    name: 'Nordstrom Inc'
  },
  {
    symbol: 'JWS-U',
    name: 'Jaws Acquisition Corp - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'JWSM',
    name: 'Jaws Mustang Acquisition Corporation - Class A'
  },
  {
    symbol: 'JWSM-U',
    name: 'Jaws Mustang Acquisition Corporation - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'JWSM-WS',
    name: 'Jaws Mustang Acquisition Corporation - Warrants (30/01/2026)'
  },
  {
    symbol: 'JXN',
    name: 'Jackson Financial Inc - Class A'
  },
  {
    symbol: 'JXN-W',
    name: 'Jackson Financial Inc Class A Whenissued'
  },
  {
    symbol: 'JYAC',
    name: 'Jiya Acquisition Corp - Class A'
  },
  {
    symbol: 'JYNT',
    name: 'Joint Corp'
  },
  {
    symbol: 'JZXN',
    name: 'Jiuzi Holdings Inc'
  },
  {
    symbol: 'K',
    name: 'Kellogg Company'
  },
  {
    symbol: 'KACL',
    name: 'Kairous Acquisition Corp Ltd'
  },
  {
    symbol: 'KACLR',
    name: 'Kairous Acquisition Corp Ltd'
  },
  {
    symbol: 'KACLU',
    name: 'Kairous Acquisition Corp Ltd - Units (1 Ord Share & 1/2 War & 1 Right)'
  },
  {
    symbol: 'KACLW',
    name: 'Kairous Acquisition Corp Ltd - Warrants (15/09/2026)'
  },
  {
    symbol: 'KAHC',
    name: 'KKR Acquisition Holdings I Corp - Class A'
  },
  {
    symbol: 'KAHC-U',
    name: 'KKR Acquisition Holdings I Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'KAHC-WS',
    name: 'KKR Acquisition Holdings I Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'KAI',
    name: 'Kadant Inc'
  },
  {
    symbol: 'KAII',
    name: 'Kismet Acquisition Two Corp - Class A'
  },
  {
    symbol: 'KAIIU',
    name: 'Kismet Acquisition Two Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'KAIIW',
    name: 'Kismet Acquisition Two Corp - Warrants (10/02/2026)'
  },
  {
    symbol: 'KAIR',
    name: 'Kairos Acquisition Corp - Class A'
  },
  {
    symbol: 'KAIRU',
    name: 'Kairos Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'KAIRW',
    name: 'Kairos Acquisition Corp - Warrants (07/01/2026)'
  },
  {
    symbol: 'KAL',
    name: 'Kalera Public Ltd Company - Class A'
  },
  {
    symbol: 'KALA',
    name: 'Kala Pharmaceuticals Inc'
  },
  {
    symbol: 'KALU',
    name: 'Kaiser Aluminum Corp'
  },
  {
    symbol: 'KALV',
    name: 'KalVista Pharmaceuticals Inc'
  },
  {
    symbol: 'KALWW',
    name: 'Kalera Public Ltd Company - Warrants(27/06/2027)'
  },
  {
    symbol: 'KAMN',
    name: 'Kaman Corp'
  },
  {
    symbol: 'KAR',
    name: 'KAR Auction Services Inc'
  },
  {
    symbol: 'KARO',
    name: 'Karooooo Ltd'
  },
  {
    symbol: 'KAVL',
    name: 'Kaival Brands Innovations Group Inc'
  },
  {
    symbol: 'KB',
    name: 'KB Financial Group Inc'
  },
  {
    symbol: 'KBAL',
    name: 'Kimball International Inc - Class B'
  },
  {
    symbol: 'KBH',
    name: 'KB Home'
  },
  {
    symbol: 'KBNT',
    name: 'Kubient Inc'
  },
  {
    symbol: 'KBNTW',
    name: 'Kubient Inc - Warrants (09/07/2025)'
  },
  {
    symbol: 'KBR',
    name: 'KBR Inc'
  },
  {
    symbol: 'KC',
    name: 'Kingsoft Cloud Holdings Ltd'
  },
  {
    symbol: 'KCA-U',
    name: 'Kensington Capital Acquisition Corp IV - Units (1Ord Class A &1Class 2 war)'
  },
  {
    symbol: 'KCAC',
    name: 'Kensington Capital Acquisition Corp II - Class A'
  },
  {
    symbol: 'KCAC-U',
    name: 'Kensington Capital Acquisition Corp IV - Units (1 Ord Class A & One Class 1 War & One Class 2 war)'
  },
  {
    symbol: 'KCAC-WS',
    name: 'Kensington Capital Acquisition Corp II - Warrants (23/02/2026)'
  },
  {
    symbol: 'KCAC-WS-A',
    name: 'Kensington Capital Acquisition Corp IV Class 1 redeemable warrants each exercisable for one Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'KCGI',
    name: 'Kensington Capital Acquisition Corp V - Class A'
  },
  {
    symbol: 'KCGI-U',
    name: 'Kensington Capital Acquisition Corp V - Units (1 Ord Share Class A & 3/4 War)'
  },
  {
    symbol: 'KCGI-WS',
    name: 'Kensington Capital Acquisition Corp V Redeemable warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'KD',
    name: 'Kyndryl Holdings Inc'
  },
  {
    symbol: 'KD-W',
    name: 'Kyndryl Holdings Inc WhenIssued'
  },
  {
    symbol: 'KDNY',
    name: 'Chinook Therapeutics Inc'
  },
  {
    symbol: 'KDP',
    name: 'Keurig Dr Pepper Inc'
  },
  {
    symbol: 'KE',
    name: 'Kimball Electronics Inc'
  },
  {
    symbol: 'KELYA',
    name: 'Kelly Services Inc - Class A'
  },
  {
    symbol: 'KELYB',
    name: 'Kelly Services Inc - Class B'
  },
  {
    symbol: 'KEN',
    name: 'Kenon Holdings Ltd'
  },
  {
    symbol: 'KEP',
    name: 'Korea Electric Power'
  },
  {
    symbol: 'KEQU',
    name: 'Kewaunee Scientific Corporation'
  },
  {
    symbol: 'KERN',
    name: 'Akerna Corp'
  },
  {
    symbol: 'KERNW',
    name: 'Akerna Corp - Warrants (30/01/2023)'
  },
  {
    symbol: 'KEX',
    name: 'Kirby Corp'
  },
  {
    symbol: 'KEY',
    name: 'Keycorp'
  },
  {
    symbol: 'KEY-P-I',
    name: 'Keycorp'
  },
  {
    symbol: 'KEY-P-J',
    name: 'Keycorp'
  },
  {
    symbol: 'KEY-P-K',
    name: 'Keycorp'
  },
  {
    symbol: 'KEYS',
    name: 'Keysight Technologies Inc'
  },
  {
    symbol: 'KFFB',
    name: 'Kentucky First Federal Bancorp'
  },
  {
    symbol: 'KFRC',
    name: 'Kforce Inc'
  },
  {
    symbol: 'KFS',
    name: 'Kingsway Financial Services Inc'
  },
  {
    symbol: 'KFY',
    name: 'Korn Ferry'
  },
  {
    symbol: 'KGC',
    name: 'Kinross Gold Corp'
  },
  {
    symbol: 'KHC',
    name: 'Kraft Heinz Company'
  },
  {
    symbol: 'KIDS',
    name: 'OrthoPediatrics Corp'
  },
  {
    symbol: 'KIII',
    name: 'Kismet Acquisition Three Corp - Class A'
  },
  {
    symbol: 'KIIIU',
    name: 'Kismet Acquisition Three Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'KIIIW',
    name: 'Kismet Acquisition Three Corp - Warrants (30/06/2026)'
  },
  {
    symbol: 'KIM',
    name: 'Kimco Realty Corp'
  },
  {
    symbol: 'KIM-P-J',
    name: 'Kimco Realty Corporation Depositary Sh Repstg 11000th Pfd CL J'
  },
  {
    symbol: 'KIM-P-L',
    name: 'Kimco Realty Corporation Class L Depositary Shares each of which represents a oneone thousandth fractional interest in a share of 5125 Class L Cumulative Red'
  },
  {
    symbol: 'KIM-P-M',
    name: 'Kimco Realty Corporation Class M Depositary Shares each of which represents a oneone thousandth fractional interest in a share of 525 Class M Cumulative Rede'
  },
  {
    symbol: 'KIND',
    name: 'Nextdoor Holdings Inc - Class A'
  },
  {
    symbol: 'KINS',
    name: 'Kingstone Cos. Inc'
  },
  {
    symbol: 'KINZ',
    name: 'KINS Technology Group Inc - Class A'
  },
  {
    symbol: 'KINZU',
    name: 'KINS Technology Group Inc - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'KINZW',
    name: 'KINS Technology Group Inc - Warrants (14/10/2025)'
  },
  {
    symbol: 'KIQ',
    name: 'Kelso Technologies Inc'
  },
  {
    symbol: 'KIRK',
    name: 'Kirkland`s Inc'
  },
  {
    symbol: 'KKR',
    name: 'KKR & Co. Inc'
  },
  {
    symbol: 'KKR-P-C',
    name: 'KKR & Co. Inc'
  },
  {
    symbol: 'KKRS',
    name: 'KKR Group Finance Co. IX LLC'
  },
  {
    symbol: 'KLAC',
    name: 'KLA Corp'
  },
  {
    symbol: 'KLAQ',
    name: 'KL Acquisition Corp - Class A'
  },
  {
    symbol: 'KLAQU',
    name: 'KL Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'KLAQW',
    name: 'KL Acquisition Corp - Warrants (06/11/2025)'
  },
  {
    symbol: 'KLIC',
    name: 'Kulicke & Soffa Industries Inc'
  },
  {
    symbol: 'KLR',
    name: 'Kaleyra Inc'
  },
  {
    symbol: 'KLR-WS',
    name: 'Kaleyra Inc - Warrants (06/03/2025)'
  },
  {
    symbol: 'KLTR',
    name: 'Kaltura Inc'
  },
  {
    symbol: 'KLXE',
    name: 'KLX Energy Services Holdings Inc'
  },
  {
    symbol: 'KMB',
    name: 'Kimberly-Clark Corp'
  },
  {
    symbol: 'KMDA',
    name: 'Kamada Ltd'
  },
  {
    symbol: 'KMI',
    name: 'Kinder Morgan Inc - Class P'
  },
  {
    symbol: 'KMPB',
    name: 'Kemper Corporation'
  },
  {
    symbol: 'KMPH',
    name: ''
  },
  {
    symbol: 'KMPR',
    name: 'Kemper Corporation'
  },
  {
    symbol: 'KMT',
    name: 'Kennametal Inc'
  },
  {
    symbol: 'KMX',
    name: 'Carmax Inc'
  },
  {
    symbol: 'KN',
    name: 'Knowles Corp'
  },
  {
    symbol: 'KNBE',
    name: 'KnowBe4 Inc - Class A'
  },
  {
    symbol: 'KNDI',
    name: 'Kandi Technologies Group Inc'
  },
  {
    symbol: 'KNOP',
    name: 'KNOT Offshore Partners LP'
  },
  {
    symbol: 'KNSA',
    name: 'Kiniksa Pharmaceuticals Ltd - Class A'
  },
  {
    symbol: 'KNSL',
    name: 'Kinsale Capital Group Inc'
  },
  {
    symbol: 'KNSW',
    name: 'KnightSwan Acquisition Corp - Class A'
  },
  {
    symbol: 'KNSW-U',
    name: 'KnightSwan Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'KNSW-WS',
    name: 'KnightSwan Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'KNTE',
    name: 'Kinnate Biopharma Inc'
  },
  {
    symbol: 'KNTK',
    name: 'Kinetik Holdings Inc - Class A'
  },
  {
    symbol: 'KNX',
    name: 'Knight-Swift Transportation Holdings Inc - Class A'
  },
  {
    symbol: 'KO',
    name: 'Coca-Cola Company'
  },
  {
    symbol: 'KOD',
    name: 'Kodiak Sciences Inc'
  },
  {
    symbol: 'KODK',
    name: 'Eastman Kodak Company'
  },
  {
    symbol: 'KOF',
    name: 'Coca-Cola Femsa S.A.B. DE C.V.'
  },
  {
    symbol: 'KOP',
    name: 'Koppers Holdings Inc'
  },
  {
    symbol: 'KOPN',
    name: 'Kopin Corp'
  },
  {
    symbol: 'KORE',
    name: 'Kore Group Holdings Inc'
  },
  {
    symbol: 'KORE-WS',
    name: 'Kore Group Holdings Inc - Warrants (01/01/9999)'
  },
  {
    symbol: 'KOS',
    name: 'Kosmos Energy Ltd'
  },
  {
    symbol: 'KOSS',
    name: 'Koss Corp'
  },
  {
    symbol: 'KPLT',
    name: 'Katapult Holdings Inc'
  },
  {
    symbol: 'KPLTW',
    name: 'Katapult Holdings Inc - Warrants (09/06/2026)'
  },
  {
    symbol: 'KPRX',
    name: 'Kiora Pharmaceuticals Inc'
  },
  {
    symbol: 'KPTI',
    name: 'Karyopharm Therapeutics Inc'
  },
  {
    symbol: 'KR',
    name: 'Kroger Company'
  },
  {
    symbol: 'KRBP',
    name: 'Kiromic BioPharma Inc'
  },
  {
    symbol: 'KRC',
    name: 'Kilroy Realty Corp'
  },
  {
    symbol: 'KREF',
    name: 'KKR Real Estate Finance Trust Inc'
  },
  {
    symbol: 'KREF-P-A',
    name: 'KKR Real Estate Finance Trust Inc 6.50 Series A Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'KRG',
    name: 'Kite Realty Group Trust'
  },
  {
    symbol: 'KRKR',
    name: '36Kr Holdings Inc'
  },
  {
    symbol: 'KRMD',
    name: 'KORU Medical Systems Inc'
  },
  {
    symbol: 'KRNL',
    name: 'Kernel Group Holdings Inc - Class A'
  },
  {
    symbol: 'KRNLU',
    name: 'Kernel Group Holdings Inc - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'KRNLW',
    name: 'Kernel Group Holdings Inc - Warrants (02/02/2026)'
  },
  {
    symbol: 'KRNT',
    name: 'Kornit Digital Ltd'
  },
  {
    symbol: 'KRNY',
    name: 'Kearny Financial Corp'
  },
  {
    symbol: 'KRO',
    name: 'Kronos Worldwide Inc'
  },
  {
    symbol: 'KRON',
    name: 'Kronos Bio Inc'
  },
  {
    symbol: 'KROS',
    name: 'Keros Therapeutics Inc'
  },
  {
    symbol: 'KRP',
    name: 'Kimbell Royalty Partners LP'
  },
  {
    symbol: 'KRT',
    name: 'Karat Packaging Inc'
  },
  {
    symbol: 'KRTX',
    name: 'Karuna Therapeutics Inc'
  },
  {
    symbol: 'KRUS',
    name: 'Kura Sushi USA Inc - Class A'
  },
  {
    symbol: 'KRYS',
    name: 'Krystal Biotech Inc'
  },
  {
    symbol: 'KSCP',
    name: 'Knightscope Inc - Class A'
  },
  {
    symbol: 'KSI',
    name: 'Kadem Sustainable Impact Corp - Class A'
  },
  {
    symbol: 'KSICU',
    name: 'Kadem Sustainable Impact Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'KSICW',
    name: 'Kadem Sustainable Impact Corp - Warrants (17/03/2026)'
  },
  {
    symbol: 'KSPN',
    name: 'Kaspien Holdings Inc'
  },
  {
    symbol: 'KSS',
    name: 'Kohl`s Corp'
  },
  {
    symbol: 'KT',
    name: 'KT Corporation'
  },
  {
    symbol: 'KTB',
    name: 'Kontoor Brands Inc'
  },
  {
    symbol: 'KTCC',
    name: 'Key Tronic Corp'
  },
  {
    symbol: 'KTH',
    name: 'Structures Products Cp 8 CorTS Issued by Peco Energy Cap Tr II Preferred Stock'
  },
  {
    symbol: 'KTN',
    name: 'Structured Products Corp 8205 CorTS 8205 Corporate Backed Trust Securities CorTS'
  },
  {
    symbol: 'KTOS',
    name: 'Kratos Defense & Security Solutions Inc'
  },
  {
    symbol: 'KTP',
    name: 'Corts 7625 Pfd'
  },
  {
    symbol: 'KTRA',
    name: 'Kintara Therapeutics Inc'
  },
  {
    symbol: 'KTTA',
    name: 'Pasithea Therapeutics Corp'
  },
  {
    symbol: 'KTTAW',
    name: 'Pasithea Therapeutics Corp - Warrants (11/08/2026)'
  },
  {
    symbol: 'KUKE',
    name: 'Kuke Music Holding Ltd'
  },
  {
    symbol: 'KULR',
    name: 'KULR Technology Group Inc'
  },
  {
    symbol: 'KURA',
    name: 'Kura Oncology Inc'
  },
  {
    symbol: 'KVHI',
    name: 'KVH Industries Inc'
  },
  {
    symbol: 'KVSA',
    name: 'Khosla Ventures Acquisition Co - Class A'
  },
  {
    symbol: 'KVSC',
    name: 'Khosla Ventures Acquisition Co III - Class A'
  },
  {
    symbol: 'KW',
    name: 'Kennedy-Wilson Holdings Inc'
  },
  {
    symbol: 'KWAC',
    name: 'Kingswood Acquisition Corp - Class A'
  },
  {
    symbol: 'KWAC-U',
    name: 'Kingswood Acquisition Corp - Units (1 Ord Share Class A & 3/4 War)'
  },
  {
    symbol: 'KWAC-WS',
    name: 'Kingswood Acquisition Corp - Warrants (01/05/2027)'
  },
  {
    symbol: 'KWR',
    name: 'Quaker Houghton'
  },
  {
    symbol: 'KXIN',
    name: 'Kaixin Auto Holdings'
  },
  {
    symbol: 'KYCH',
    name: 'Keyarch Acquisition Corp - Class A'
  },
  {
    symbol: 'KYCHR',
    name: 'Keyarch Acquisition Corp'
  },
  {
    symbol: 'KYCHU',
    name: 'Keyarch Acquisition Corp - Units (1 Ord Class A1Rights & 1/2 War)'
  },
  {
    symbol: 'KYCHW',
    name: 'Keyarch Acquisition Corp - Warrants (24/01/2027)'
  },
  {
    symbol: 'KYMR',
    name: 'Kymera Therapeutics Inc'
  },
  {
    symbol: 'KYN-P-F',
    name: 'Kayne Anderson MLP Investment Company 350 Series F Mandatory Redeemable Preferred Shares 2500 Liquidation Preference per share'
  },
  {
    symbol: 'KYN-P-F-CL',
    name: ''
  },
  {
    symbol: 'KZIA',
    name: 'Kazia Therapeutics Ltd'
  },
  {
    symbol: 'KZR',
    name: 'Kezar Life Sciences Inc'
  },
  {
    symbol: 'L',
    name: 'Loews Corp'
  },
  {
    symbol: 'LAAA',
    name: 'Lakeshore Acquisition I Corp'
  },
  {
    symbol: 'LAAAU',
    name: 'Lakeshore Acquisition I Corp - Units (1 Ord Share & 3/4 War)'
  },
  {
    symbol: 'LAAAW',
    name: 'Lakeshore Acquisition I Corp - Warrants (04/06/2026)'
  },
  {
    symbol: 'LAB',
    name: 'Standard BioTools Inc'
  },
  {
    symbol: 'LABP',
    name: 'Landos Biopharma Inc'
  },
  {
    symbol: 'LAC',
    name: 'Lithium Americas Corp'
  },
  {
    symbol: 'LAD',
    name: 'Lithia Motors Inc - Class A'
  },
  {
    symbol: 'LADR',
    name: 'Ladder Capital Corp - Class A'
  },
  {
    symbol: 'LAKE',
    name: 'Lakeland Industries Inc'
  },
  {
    symbol: 'LAMR',
    name: 'Lamar Advertising Co - Class A'
  },
  {
    symbol: 'LANC',
    name: 'Lancaster Colony Corp'
  },
  {
    symbol: 'LAND',
    name: 'Gladstone Land Corp'
  },
  {
    symbol: 'LANDM',
    name: 'Gladstone Land Corp'
  },
  {
    symbol: 'LANDO',
    name: 'Gladstone Land Corp'
  },
  {
    symbol: 'LARK',
    name: 'Landmark Bancorp Inc'
  },
  {
    symbol: 'LASR',
    name: 'nLIGHT Inc'
  },
  {
    symbol: 'LATG',
    name: 'LatAmGrowth SPAC - Class A'
  },
  {
    symbol: 'LATGU',
    name: 'LatAmGrowth SPAC - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'LATGW',
    name: 'LatAmGrowth SPAC - Warrants (20/01/2027)'
  },
  {
    symbol: 'LAUR',
    name: 'Laureate Education Inc'
  },
  {
    symbol: 'LAW',
    name: 'CS Disco Inc'
  },
  {
    symbol: 'LAX',
    name: '8i Acquisition 2 Corp'
  },
  {
    symbol: 'LAXXR',
    name: '8i Acquisition 2 Corp'
  },
  {
    symbol: 'LAXXU',
    name: '8i Acquisition 2 Corp - Unit (1 Ordinary share & 1 Wrt & 1 Rts)'
  },
  {
    symbol: 'LAXXW',
    name: '8i Acquisition 2 Corp - Warrants (24/09/2026)'
  },
  {
    symbol: 'LAZ',
    name: 'Lazard Ltd - Class A'
  },
  {
    symbol: 'LAZR',
    name: 'Luminar Technologies Inc - Class A'
  },
  {
    symbol: 'LAZY',
    name: 'Lazydays Holdings Inc'
  },
  {
    symbol: 'LBAI',
    name: 'Lakeland Bancorp Inc'
  },
  {
    symbol: 'LBBB',
    name: 'Lakeshore Acquisition II Corp'
  },
  {
    symbol: 'LBBBR',
    name: 'Lakeshore Acquisition II Corp'
  },
  {
    symbol: 'LBBBU',
    name: 'Lakeshore Acquisition II Corp - Units (1 Ord 1/2 War & 1 Right)'
  },
  {
    symbol: 'LBBBW',
    name: 'Lakeshore Acquisition II Corp - Warrants (18/11/2026)'
  },
  {
    symbol: 'LBC',
    name: 'Luther Burbank Corp'
  },
  {
    symbol: 'LBPH',
    name: 'Longboard Pharmaceuticals Inc'
  },
  {
    symbol: 'LBPS',
    name: '4d Pharma Plc'
  },
  {
    symbol: 'LBRDA',
    name: 'Liberty Broadband Corp - Series A'
  },
  {
    symbol: 'LBRDK',
    name: 'Liberty Broadband Corp - Series C'
  },
  {
    symbol: 'LBRDP',
    name: 'Liberty Broadband Corp'
  },
  {
    symbol: 'LBRT',
    name: 'Liberty Energy Inc - Class A'
  },
  {
    symbol: 'LBTYA',
    name: 'Liberty Global plc - Class A'
  },
  {
    symbol: 'LBTYB',
    name: 'Liberty Global plc - Class B'
  },
  {
    symbol: 'LBTYK',
    name: 'Liberty Global plc - Class C'
  },
  {
    symbol: 'LC',
    name: 'LendingClub Corp'
  },
  {
    symbol: 'LCA',
    name: 'Landcadia Holdings IV Inc - Class A'
  },
  {
    symbol: 'LCAA',
    name: 'L Catterton Asia Acquisition Corp - Class A'
  },
  {
    symbol: 'LCAAU',
    name: 'L Catterton Asia Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'LCAAW',
    name: 'L Catterton Asia Acquisition Corp - Warrants (08/03/2026)'
  },
  {
    symbol: 'LCAHU',
    name: 'Landcadia Holdings IV Inc - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'LCAHW',
    name: 'Landcadia Holdings IV Inc - Warrants (19/03/2025)'
  },
  {
    symbol: 'LCAP',
    name: ''
  },
  {
    symbol: 'LCFY',
    name: 'Locafy Ltd'
  },
  {
    symbol: 'LCFYW',
    name: 'Locafy Ltd - Warrants (23/03/2027)'
  },
  {
    symbol: 'LCI',
    name: 'Lannett Co. Inc'
  },
  {
    symbol: 'LCID',
    name: 'Lucid Group Inc'
  },
  {
    symbol: 'LCII',
    name: 'LCI Industries'
  },
  {
    symbol: 'LCNB',
    name: 'LCNB Corp'
  },
  {
    symbol: 'LCTX',
    name: 'Lineage Cell Therapeutics Inc'
  },
  {
    symbol: 'LCUT',
    name: 'Lifetime Brands Inc'
  },
  {
    symbol: 'LCW',
    name: 'Learn CW Investment Corp - Class A'
  },
  {
    symbol: 'LCW-U',
    name: 'Learn CW Investment Corporation Units each consisting of one Class A ordinary share and onehalf of one redeemable warrant'
  },
  {
    symbol: 'LCW-WS',
    name: 'Learn CW Investment Corp - Warrants (08/10/2026)'
  },
  {
    symbol: 'LDHA',
    name: 'LDH Growth Corp I - Class A'
  },
  {
    symbol: 'LDHAU',
    name: 'LDH Growth Corp I - Units (1 Ord Class A & 1/5 War)'
  },
  {
    symbol: 'LDHAW',
    name: 'LDH Growth Corp I - Warrants (17/03/2026)'
  },
  {
    symbol: 'LDI',
    name: 'LoanDepot Inc - Class A'
  },
  {
    symbol: 'LDOS',
    name: 'Leidos Holdings Inc'
  },
  {
    symbol: 'LE',
    name: 'Lands` End Inc'
  },
  {
    symbol: 'LEA',
    name: 'Lear Corp'
  },
  {
    symbol: 'LEAP',
    name: 'Ribbit LEAP Ltd - Class A'
  },
  {
    symbol: 'LEAP-U',
    name: 'Ribbit LEAP Ltd - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'LEAP-WS',
    name: 'Ribbit LEAP Ltd - Warrants (09/09/2025)'
  },
  {
    symbol: 'LECO',
    name: 'Lincoln Electric Holdings Inc'
  },
  {
    symbol: 'LEDS',
    name: 'Semileds Corp'
  },
  {
    symbol: 'LEE',
    name: 'Lee Enterprises Inc'
  },
  {
    symbol: 'LEG',
    name: 'Leggett & Platt Inc'
  },
  {
    symbol: 'LEGA',
    name: 'Lead Edge Growth Opportunities Ltd - Class A'
  },
  {
    symbol: 'LEGAU',
    name: 'Lead Edge Growth Opportunities Ltd - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'LEGAW',
    name: 'Lead Edge Growth Opportunities Ltd - Warrants (01/04/2026)'
  },
  {
    symbol: 'LEGH',
    name: 'Legacy Housing Corp'
  },
  {
    symbol: 'LEGN',
    name: 'Legend Biotech Corp'
  },
  {
    symbol: 'LEGO',
    name: 'Legato Merger Corp'
  },
  {
    symbol: 'LEGOU',
    name: 'Legato Merger Corp - Units (1 Ord & 1 War)'
  },
  {
    symbol: 'LEGOW',
    name: 'Legato Merger Corp - Warrants (31/12/2025)'
  },
  {
    symbol: 'LEJU',
    name: 'Leju Holdings Ltd'
  },
  {
    symbol: 'LEN',
    name: 'Lennar Corp - Class A'
  },
  {
    symbol: 'LEN-B',
    name: 'Lennar Corp - Class B'
  },
  {
    symbol: 'LESL',
    name: 'Leslies Inc'
  },
  {
    symbol: 'LEU',
    name: 'Centrus Energy Corp - Class A'
  },
  {
    symbol: 'LEV',
    name: 'Lion Electric Co (The)'
  },
  {
    symbol: 'LEV-WS',
    name: 'Lion Electric Co (The) - Warrants (06/05/2026)'
  },
  {
    symbol: 'LEVI',
    name: 'Levi Strauss & Co. Cls A'
  },
  {
    symbol: 'LEXX',
    name: 'Lexaria Bioscience Corp'
  },
  {
    symbol: 'LEXXW',
    name: 'Lexaria Bioscience Corp - Warrants (11/01/2026)'
  },
  {
    symbol: 'LFAC',
    name: 'LF Capital Acquisition Corp II - Class A'
  },
  {
    symbol: 'LFACU',
    name: 'LF Capital Acquisition Corp II - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'LFACW',
    name: 'LF Capital Acquisition Corp II - Warrants(15/05/2028)'
  },
  {
    symbol: 'LFC',
    name: 'China Life Insurance Company'
  },
  {
    symbol: 'LFG',
    name: 'Archaea Energy Inc - Class A'
  },
  {
    symbol: 'LFG-WS',
    name: 'Archaea Energy Inc Wt Exp 10262027'
  },
  {
    symbol: 'LFLY',
    name: 'Leafly Holdings Inc'
  },
  {
    symbol: 'LFLYW',
    name: 'Leafly Holdings Inc - Warrants (07/02/2027)'
  },
  {
    symbol: 'LFMD',
    name: 'LifeMD Inc'
  },
  {
    symbol: 'LFMDP',
    name: 'LifeMD Inc'
  },
  {
    symbol: 'LFST',
    name: 'LifeStance Health Group Inc'
  },
  {
    symbol: 'LFT',
    name: 'Lument Finance Trust Inc'
  },
  {
    symbol: 'LFT-P-A',
    name: 'Lument Finance Trust Inc'
  },
  {
    symbol: 'LFT-R',
    name: 'Lument Finance Trust Inc Rights Expiring February 11 2022 Rights'
  },
  {
    symbol: 'LFT-R-W',
    name: 'Lument Finance Trust Inc Rights Expiring February 11 2022 Rights when issued'
  },
  {
    symbol: 'LFTR',
    name: 'Lefteris Acquisition Corp - Class A'
  },
  {
    symbol: 'LFTRU',
    name: 'Lefteris Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'LFTRW',
    name: 'Lefteris Acquisition Corp - Warrants (01/11/2025)'
  },
  {
    symbol: 'LFUS',
    name: 'Littelfuse Inc'
  },
  {
    symbol: 'LFVN',
    name: 'Lifevantage Corporation'
  },
  {
    symbol: 'LGAC',
    name: 'Lazard Growth Acquisition Corp I'
  },
  {
    symbol: 'LGACU',
    name: 'Lazard Growth Acquisition Corp I - Units (1 Ord Class A & 1/5 War)'
  },
  {
    symbol: 'LGACW',
    name: 'Lazard Growth Acquisition Corp I - Warrants (10/02/2026)'
  },
  {
    symbol: 'LGC-U',
    name: 'PARTS iD Inc - Units (1 Class A & 1 Warrant)'
  },
  {
    symbol: 'LGF-A',
    name: 'Lions Gate Entertainment Corp - Class A'
  },
  {
    symbol: 'LGF-B',
    name: 'Lions Gate Entertainment Corp - Class B'
  },
  {
    symbol: 'LGHL',
    name: 'Lion Group Holding Ltd'
  },
  {
    symbol: 'LGHLW',
    name: 'Lion Group Holding Ltd - Warrants (17/06/2025)'
  },
  {
    symbol: 'LGIH',
    name: 'LGI Homes Inc'
  },
  {
    symbol: 'LGL',
    name: 'LGL Group Inc'
  },
  {
    symbol: 'LGL-WS',
    name: 'LGL Group Inc - Warrants (16/11/2025)'
  },
  {
    symbol: 'LGMK',
    name: 'LogicMark Inc'
  },
  {
    symbol: 'LGND',
    name: 'Ligand Pharmaceuticals Inc - Class B'
  },
  {
    symbol: 'LGO',
    name: 'Largo Inc'
  },
  {
    symbol: 'LGST',
    name: 'Semper Paratus Acquisition Corp - Class A'
  },
  {
    symbol: 'LGSTU',
    name: 'Semper Paratus Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'LGSTW',
    name: 'Semper Paratus Acquisition Corp - Warrants (04/11/2026)'
  },
  {
    symbol: 'LGTO',
    name: 'Legato Merger Corp II - Class A'
  },
  {
    symbol: 'LGTOU',
    name: 'Legato Merger Corp II - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'LGTOW',
    name: 'Legato Merger Corp II - Warrants (01/09/2026)'
  },
  {
    symbol: 'LGV',
    name: 'Longview Acquisition Corp II - Class A'
  },
  {
    symbol: 'LGV-U',
    name: 'Longview Acquisition Corp II - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'LGV-WS',
    name: 'Longview Acquisition Corp II - Warrants (01/01/9999)'
  },
  {
    symbol: 'LGVC',
    name: 'LAMF Global Ventures Corp I - Class A'
  },
  {
    symbol: 'LGVCU',
    name: 'LAMF Global Ventures Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'LGVCW',
    name: 'LAMF Global Ventures Corp I - Warrants (05/11/2026)'
  },
  {
    symbol: 'LGVN',
    name: 'Longeveron Inc - Class A'
  },
  {
    symbol: 'LH',
    name: 'Laboratory Corp Of America Holdings'
  },
  {
    symbol: 'LHAA',
    name: 'Lerer Hippeau Acquisition Corp - Class A'
  },
  {
    symbol: 'LHC',
    name: 'Leo Holdings Corp II - Class A'
  },
  {
    symbol: 'LHC-U',
    name: 'Leo Holdings Corp II - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'LHC-WS',
    name: 'Leo Holdings Corp II - Warrants (07/01/2028)'
  },
  {
    symbol: 'LHCG',
    name: 'LHC Group Inc'
  },
  {
    symbol: 'LHDX',
    name: 'Lucira Health Inc'
  },
  {
    symbol: 'LHX',
    name: 'L3Harris Technologies Inc'
  },
  {
    symbol: 'LI',
    name: 'Li Auto Inc'
  },
  {
    symbol: 'LIAN',
    name: 'LianBio'
  },
  {
    symbol: 'LIBY',
    name: 'Liberty Resources Acquisition Corp - Class A'
  },
  {
    symbol: 'LIBYU',
    name: 'Liberty Resources Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'LIBYW',
    name: 'Liberty Resources Acquisition Corp - Warrants - (31/10/2028)'
  },
  {
    symbol: 'LICY',
    name: 'Li-Cycle Holdings Corp - Class A'
  },
  {
    symbol: 'LICY-WS',
    name: 'LiCycle Holdings Corp Redeemable Warrants each whole warrant exercisable for one Common Share at an exercise price of 11.50'
  },
  {
    symbol: 'LIDR',
    name: 'AEye Inc - Class A'
  },
  {
    symbol: 'LIDRW',
    name: 'AEye Inc - Warrants (16/08/2026)'
  },
  {
    symbol: 'LIFE',
    name: 'Atyr Pharma Inc'
  },
  {
    symbol: 'LII',
    name: 'Lennox International Inc'
  },
  {
    symbol: 'LILA',
    name: 'Liberty Latin America Ltd - Class A'
  },
  {
    symbol: 'LILAK',
    name: 'Liberty Latin America Ltd - Class C'
  },
  {
    symbol: 'LILM',
    name: 'Lilium N.V - Class A'
  },
  {
    symbol: 'LILMW',
    name: 'Lilium N.V - Warrants (14/09/2026)'
  },
  {
    symbol: 'LILRV',
    name: 'Liberty Latin America Ltd Subscription Rights When Issued'
  },
  {
    symbol: 'LIN',
    name: 'Linde Plc'
  },
  {
    symbol: 'LINC',
    name: 'Lincoln Educational Services Corp'
  },
  {
    symbol: 'LIND',
    name: 'Lindblad Expeditions Holdings Inc'
  },
  {
    symbol: 'LINK',
    name: 'Interlink Electronics'
  },
  {
    symbol: 'LION',
    name: 'Lionheart III Corp - Class A'
  },
  {
    symbol: 'LIONU',
    name: 'Lionheart III Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'LIONW',
    name: 'Lionheart III Corp - Warrants (09/11/2026)'
  },
  {
    symbol: 'LIQT',
    name: 'LiqTech International Inc'
  },
  {
    symbol: 'LITB',
    name: 'LightInTheBox Holding Co Ltd'
  },
  {
    symbol: 'LITE',
    name: 'Lumentum Holdings Inc'
  },
  {
    symbol: 'LITM',
    name: 'Snow Lake Resources Ltd'
  },
  {
    symbol: 'LITT',
    name: 'Logistics Innovation Technologies Corp - Class A'
  },
  {
    symbol: 'LITTU',
    name: 'Logistics Innovation Technologies Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'LITTW',
    name: 'Logistics Innovation Technologies Corp - Warrants (10/06/2026)'
  },
  {
    symbol: 'LIVB',
    name: 'LIV Capital Acquisition Corp II - Class A'
  },
  {
    symbol: 'LIVBU',
    name: 'LIV Capital Acquisition Corp II - Units (1 Ord Share Class A & 3/4 War)'
  },
  {
    symbol: 'LIVBW',
    name: 'LIV Capital Acquisition Corp II - Warrants (07/02/2027)'
  },
  {
    symbol: 'LIVE',
    name: 'Live Ventures Inc'
  },
  {
    symbol: 'LIVN',
    name: 'LivaNova PLC'
  },
  {
    symbol: 'LIXT',
    name: 'Lixte Biotechnology Holdings Inc'
  },
  {
    symbol: 'LIXTW',
    name: 'Lixte Biotechnology Holdings Inc - Warrants (01/01/2025)'
  },
  {
    symbol: 'LIZI',
    name: 'Lizhi Inc'
  },
  {
    symbol: 'LJAQ',
    name: 'Lightjump Acquisition Corp'
  },
  {
    symbol: 'LJAQU',
    name: 'Lightjump Acquisition Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'LJAQW',
    name: 'Lightjump Acquisition Corp - Warrants (06/01/2026)'
  },
  {
    symbol: 'LJPC',
    name: 'La Jolla Pharmaceutical Company'
  },
  {
    symbol: 'LKCO',
    name: 'Luokung Technology Corp'
  },
  {
    symbol: 'LKFN',
    name: 'Lakeland Financial Corp'
  },
  {
    symbol: 'LKQ',
    name: 'LKQ Corp'
  },
  {
    symbol: 'LL',
    name: 'LL Flooring Holdings Inc'
  },
  {
    symbol: 'LLAP',
    name: 'Terran Orbital Corp - Class A'
  },
  {
    symbol: 'LLAP-WS',
    name: 'Terran Orbital Corp - Warrants (09/03/2028)'
  },
  {
    symbol: 'LLL',
    name: 'JX Luxventure Ltd'
  },
  {
    symbol: 'LLY',
    name: 'Lilly(Eli) & Company'
  },
  {
    symbol: 'LMACA',
    name: 'Liberty Media Acquisition Corp - Series A'
  },
  {
    symbol: 'LMACU',
    name: 'Liberty Media Acquisition Corp - Units (1 Ord Share Ser A & 1/5 War)'
  },
  {
    symbol: 'LMACW',
    name: 'Liberty Media Acquisition Corp - Warrants (22/01/2026)'
  },
  {
    symbol: 'LMAO',
    name: 'LMF Acquisition Opportunities Inc - Class A'
  },
  {
    symbol: 'LMAOU',
    name: 'LMF Acquisition Opportunities Inc - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'LMAOW',
    name: 'LMF Acquisition Opportunities Inc - Warrants (26/01/2026)'
  },
  {
    symbol: 'LMAT',
    name: 'Lemaitre Vascular Inc'
  },
  {
    symbol: 'LMB',
    name: 'Limbach Holdings Inc'
  },
  {
    symbol: 'LMDX',
    name: 'LumiraDx Ltd'
  },
  {
    symbol: 'LMDXW',
    name: 'LumiraDx Ltd - Warrants (28/09/2026)'
  },
  {
    symbol: 'LMFA',
    name: 'LM Funding America Inc'
  },
  {
    symbol: 'LMND',
    name: 'Lemonade Inc'
  },
  {
    symbol: 'LMNL',
    name: 'Liminal Biosciences Inc'
  },
  {
    symbol: 'LMNR',
    name: 'Limoneira Company'
  },
  {
    symbol: 'LMPX',
    name: 'Lmp Automotive Holdings Inc'
  },
  {
    symbol: 'LMST',
    name: 'Limestone Bancorp Inc'
  },
  {
    symbol: 'LMT',
    name: 'Lockheed Martin Corp'
  },
  {
    symbol: 'LNC',
    name: 'Lincoln National Corp'
  },
  {
    symbol: 'LND',
    name: 'Brasilagro Companhia Brasileira De Propriedade Agricola'
  },
  {
    symbol: 'LNDC',
    name: 'Landec Corp'
  },
  {
    symbol: 'LNFA',
    name: 'L&F Acquisition Corp - Class A'
  },
  {
    symbol: 'LNFA-U',
    name: 'L&F Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'LNFA-WS',
    name: 'L&F Acquisition Corp - Warrants (23/05/2027)'
  },
  {
    symbol: 'LNG',
    name: 'Cheniere Energy Inc'
  },
  {
    symbol: 'LNN',
    name: 'Lindsay Corporation'
  },
  {
    symbol: 'LNSR',
    name: 'LENSAR Inc'
  },
  {
    symbol: 'LNT',
    name: 'Alliant Energy Corp'
  },
  {
    symbol: 'LNTH',
    name: 'Lantheus Holdings Inc'
  },
  {
    symbol: 'LNW',
    name: 'Light & Wonder Inc'
  },
  {
    symbol: 'LOAK-U',
    name: 'Danimer Scientific Inc - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'LOAN',
    name: 'Manhattan Bridge Capital Inc'
  },
  {
    symbol: 'LOB',
    name: 'Live Oak Bancshares Inc'
  },
  {
    symbol: 'LOCC',
    name: 'Live Oak Crestview Climate Acquisition Corp - Class A'
  },
  {
    symbol: 'LOCC-U',
    name: 'Live Oak Crestview Climate Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'LOCC-WS',
    name: 'Live Oak Crestview Climate Acquisition Corp - Warrants (27/09/2028)'
  },
  {
    symbol: 'LOCL',
    name: 'Local Bounti Corp - Class A'
  },
  {
    symbol: 'LOCL-WS',
    name: 'Local Bounti Corp - Warrants (02/03/2028)'
  },
  {
    symbol: 'LOCO',
    name: 'El Pollo Loco Holdings Inc'
  },
  {
    symbol: 'LODE',
    name: 'Comstock Inc'
  },
  {
    symbol: 'LOGC',
    name: 'LogicBio Therapeutics Inc'
  },
  {
    symbol: 'LOGI',
    name: 'Logitech International S.A.'
  },
  {
    symbol: 'LOKM',
    name: 'Live Oak Mobility Acquisition Corp - Class A'
  },
  {
    symbol: 'LOKM-U',
    name: 'Live Oak Mobility Acquisition Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'LOKM-WS',
    name: 'Live Oak Mobility Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'LOMA',
    name: 'Loma Negra Compania Industrial Argentina Sociedad Anonima'
  },
  {
    symbol: 'LOOP',
    name: 'Loop Industries Inc'
  },
  {
    symbol: 'LOPE',
    name: 'Grand Canyon Education Inc'
  },
  {
    symbol: 'LOTZ',
    name: 'CarLotz Inc - Class A'
  },
  {
    symbol: 'LOTZW',
    name: 'CarLotz Inc - Warrants (26/02/2026)'
  },
  {
    symbol: 'LOV',
    name: 'Spark Networks SE'
  },
  {
    symbol: 'LOVE',
    name: 'Lovesac Company'
  },
  {
    symbol: 'LOW',
    name: 'Lowe`s Cos. Inc'
  },
  {
    symbol: 'LPCN',
    name: 'Lipocine Inc'
  },
  {
    symbol: 'LPG',
    name: 'Dorian LPG Ltd'
  },
  {
    symbol: 'LPI',
    name: 'Laredo Petroleum Inc'
  },
  {
    symbol: 'LPL',
    name: 'LG Display Co Ltd'
  },
  {
    symbol: 'LPLA',
    name: 'LPL Financial Holdings Inc'
  },
  {
    symbol: 'LPRO',
    name: 'Open Lending Corp - Class A'
  },
  {
    symbol: 'LPSN',
    name: 'Liveperson Inc'
  },
  {
    symbol: 'LPTH',
    name: 'Lightpath Technologies Inc - Class A'
  },
  {
    symbol: 'LPTX',
    name: 'Leap Therapeutics Inc'
  },
  {
    symbol: 'LPX',
    name: 'Louisiana-Pacific Corp'
  },
  {
    symbol: 'LQDA',
    name: 'Liquidia Corp'
  },
  {
    symbol: 'LQDT',
    name: 'Liquidity Services Inc'
  },
  {
    symbol: 'LRCX',
    name: 'Lam Research Corp'
  },
  {
    symbol: 'LRFC',
    name: 'Logan Ridge Finance Corporation'
  },
  {
    symbol: 'LRMR',
    name: 'Larimar Therapeutics Inc'
  },
  {
    symbol: 'LRN',
    name: 'Stride Inc'
  },
  {
    symbol: 'LSAK',
    name: 'Lesaka Technologies Inc'
  },
  {
    symbol: 'LSBK',
    name: 'Lake Shore Bancorp'
  },
  {
    symbol: 'LSCC',
    name: 'Lattice Semiconductor Corp'
  },
  {
    symbol: 'LSEA',
    name: 'Landsea Homes Corporation - Class A'
  },
  {
    symbol: 'LSF',
    name: 'Laird Superfood Inc'
  },
  {
    symbol: 'LSI',
    name: 'Life Storage Inc'
  },
  {
    symbol: 'LSPD',
    name: 'Lightspeed Commerce Inc (Sub Voting)'
  },
  {
    symbol: 'LSPR',
    name: 'Larkspur Health Acquisition Corp - Class A'
  },
  {
    symbol: 'LSPRU',
    name: 'Larkspur Health Acquisition Corp - Units (1 Ord Share Class A & 3/4 War)'
  },
  {
    symbol: 'LSPRW',
    name: 'Larkspur Health Acquisition Corp - Warrants (20/12/2026)'
  },
  {
    symbol: 'LSTR',
    name: 'Landstar System Inc'
  },
  {
    symbol: 'LSXMA',
    name: 'Liberty Media Corp (Tracking Stock - SiriusXM) Series A'
  },
  {
    symbol: 'LSXMB',
    name: 'Liberty Media Corp (Tracking Stock - SiriusXM) Series B'
  },
  {
    symbol: 'LSXMK',
    name: 'Liberty Media Corp (Tracking Stock - SiriusXM) Series C'
  },
  {
    symbol: 'LTBR',
    name: 'Lightbridge Corp'
  },
  {
    symbol: 'LTC',
    name: 'LTC Properties Inc'
  },
  {
    symbol: 'LTCH',
    name: 'Latch Inc'
  },
  {
    symbol: 'LTCHW',
    name: 'Latch Inc - Warrants (04/06/2026)'
  },
  {
    symbol: 'LTH',
    name: 'Life Time Group Holdings Inc'
  },
  {
    symbol: 'LTHM',
    name: 'Livent Corp'
  },
  {
    symbol: 'LTRN',
    name: 'Lantern Pharma Inc'
  },
  {
    symbol: 'LTRPA',
    name: 'Liberty TripAdvisor Holdings Inc - Series A'
  },
  {
    symbol: 'LTRPB',
    name: 'Liberty TripAdvisor Holdings Inc - Series B'
  },
  {
    symbol: 'LTRX',
    name: 'Lantronix Inc'
  },
  {
    symbol: 'LTRY',
    name: 'Lottery.com Inc'
  },
  {
    symbol: 'LTRYW',
    name: 'Lottery.com Inc - Warrants (29/10/2026)'
  },
  {
    symbol: 'LTS-P-A',
    name: 'Ladenburg Thalmann Financial Services Inc 800 Series A Cumulative Redeemable Preferred Stock Liquidation Preference 2500 per share'
  },
  {
    symbol: 'LU',
    name: 'Lufax Holding Ltd'
  },
  {
    symbol: 'LUCD',
    name: 'Lucid Diagnostics Inc'
  },
  {
    symbol: 'LULU',
    name: 'Lululemon Athletica Inc'
  },
  {
    symbol: 'LUMN',
    name: 'Lumen Technologies Inc'
  },
  {
    symbol: 'LUMO',
    name: 'Lumos Pharma Inc'
  },
  {
    symbol: 'LUNA',
    name: 'Luna Innovations Inc'
  },
  {
    symbol: 'LUNG',
    name: 'Pulmonx Corp'
  },
  {
    symbol: 'LUV',
    name: 'Southwest Airlines Company'
  },
  {
    symbol: 'LUXA',
    name: 'Lux Health Tech Acquisition Corp - Class A'
  },
  {
    symbol: 'LUXAU',
    name: 'Lux Health Tech Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'LUXAW',
    name: 'Lux Health Tech Acquisition Corp - Warrants(30/11/2027)'
  },
  {
    symbol: 'LVAC',
    name: 'Lava Medtech Acquisition Corp - Class A'
  },
  {
    symbol: 'LVACU',
    name: 'Lava Medtech Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'LVACW',
    name: 'Lava Medtech Acquisition Corp - Warrants (21/10/2026)'
  },
  {
    symbol: 'LVLU',
    name: 'Lulus Fashion Lounge Holdings Inc'
  },
  {
    symbol: 'LVO',
    name: 'LiveOne Inc'
  },
  {
    symbol: 'LVOX',
    name: 'LiveVox Holdings Inc - Class A'
  },
  {
    symbol: 'LVOXU',
    name: 'LiveVox Holdings Inc - Unit (1 Ordinary share Cls A & 1/2 Wrt)'
  },
  {
    symbol: 'LVOXW',
    name: 'LiveVox Holdings Inc - Warrants (18/06/2026)'
  },
  {
    symbol: 'LVRA',
    name: 'Levere Holdings Corp - Class A'
  },
  {
    symbol: 'LVRAU',
    name: 'Levere Holdings Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'LVRAW',
    name: 'Levere Holdings Corp - Warrants (09/03/2026)'
  },
  {
    symbol: 'LVS',
    name: 'Las Vegas Sands Corp'
  },
  {
    symbol: 'LVTX',
    name: 'LAVA Therapeutics NV'
  },
  {
    symbol: 'LW',
    name: 'Lamb Weston Holdings Inc'
  },
  {
    symbol: 'LWAY',
    name: 'Lifeway Foods Inc'
  },
  {
    symbol: 'LWLG',
    name: 'Lightwave Logic Inc'
  },
  {
    symbol: 'LX',
    name: 'LexinFintech Holdings Ltd'
  },
  {
    symbol: 'LXEH',
    name: 'Lixiang Education Holding Co Ltd'
  },
  {
    symbol: 'LXFR',
    name: 'Luxfer Holdings PLC'
  },
  {
    symbol: 'LXP',
    name: 'LXP Industrial Trust'
  },
  {
    symbol: 'LXP-P-C',
    name: 'LXP Industrial Trust'
  },
  {
    symbol: 'LXRX',
    name: 'Lexicon Pharmaceuticals Inc'
  },
  {
    symbol: 'LXU',
    name: 'LSB Industries Inc'
  },
  {
    symbol: 'LYB',
    name: 'LyondellBasell Industries NV - Class A'
  },
  {
    symbol: 'LYEL',
    name: 'Lyell Immunopharma Inc'
  },
  {
    symbol: 'LYFT',
    name: 'Lyft Inc Cls A'
  },
  {
    symbol: 'LYG',
    name: 'Lloyds Banking Group plc'
  },
  {
    symbol: 'LYL',
    name: 'Dragon Victory International Ltd'
  },
  {
    symbol: 'LYLT',
    name: 'Loyalty Ventures Inc'
  },
  {
    symbol: 'LYLTV',
    name: 'Loyalty Ventures Inc'
  },
  {
    symbol: 'LYRA',
    name: 'Lyra Therapeutics Inc'
  },
  {
    symbol: 'LYT',
    name: 'Lytus Technologies Holdings PTV Ltd'
  },
  {
    symbol: 'LYTS',
    name: 'LSI Industries Inc'
  },
  {
    symbol: 'LYV',
    name: 'Live Nation Entertainment Inc'
  },
  {
    symbol: 'LZ',
    name: 'LegalZoom.com Inc'
  },
  {
    symbol: 'LZB',
    name: 'La-Z-Boy Inc'
  },
  {
    symbol: 'M',
    name: 'Macy`s Inc'
  },
  {
    symbol: 'MA',
    name: 'Mastercard Incorporated - Class A'
  },
  {
    symbol: 'MAA',
    name: 'Mid-America Apartment Communities Inc'
  },
  {
    symbol: 'MAA-P-I',
    name: 'Mid-America Apartment Communities Inc'
  },
  {
    symbol: 'MAAQ',
    name: 'Mana Capital Acquisition Corp'
  },
  {
    symbol: 'MAAQR',
    name: 'Mana Capital Acquisition Corp'
  },
  {
    symbol: 'MAAQU',
    name: 'Mana Capital Acquisition Corp - Units (1 Ord Share & 1/2 War & 1 Right)'
  },
  {
    symbol: 'MAAQW',
    name: 'Mana Capital Acquisition Corp - Warrants (11/11/2026)'
  },
  {
    symbol: 'MAC',
    name: 'Macerich Company'
  },
  {
    symbol: 'MACA',
    name: 'Moringa Acquisition Corp - Class A'
  },
  {
    symbol: 'MACAU',
    name: 'Moringa Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'MACAW',
    name: 'Moringa Acquisition Corp - Warrants (19/02/2026)'
  },
  {
    symbol: 'MACC',
    name: 'Mission Advancement Corp - Class A'
  },
  {
    symbol: 'MACC-U',
    name: 'Mission Advancement Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'MACC-WS',
    name: 'Mission Advancement Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'MACK',
    name: 'Merrimack Pharmaceuticals Inc'
  },
  {
    symbol: 'MAG',
    name: 'MAG Silver Corp'
  },
  {
    symbol: 'MAIN',
    name: 'Main Street Capital Corporation'
  },
  {
    symbol: 'MAN',
    name: 'ManpowerGroup'
  },
  {
    symbol: 'MANH',
    name: 'Manhattan Associates Inc'
  },
  {
    symbol: 'MANT',
    name: 'Mantech International Corp - Class A'
  },
  {
    symbol: 'MANU',
    name: 'Manchester United Plc. - Class A'
  },
  {
    symbol: 'MAPS',
    name: 'WM Technology Inc - Class A'
  },
  {
    symbol: 'MAPSW',
    name: 'WM Technology Inc - Warrants (16/06/2026)'
  },
  {
    symbol: 'MAQC',
    name: 'Maquia Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'MAQCU',
    name: 'Maquia Capital Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'MAQCW',
    name: 'Maquia Capital Acquisition Corp - Warrants (05/05/2026)'
  },
  {
    symbol: 'MAR',
    name: 'Marriott International Inc - Class A'
  },
  {
    symbol: 'MARA',
    name: 'Marathon Digital Holdings Inc'
  },
  {
    symbol: 'MARK',
    name: 'Remark Holdings Inc'
  },
  {
    symbol: 'MARPS',
    name: 'Marine Petroleum Trust'
  },
  {
    symbol: 'MAS',
    name: 'Masco Corp'
  },
  {
    symbol: 'MASI',
    name: 'Masimo Corp'
  },
  {
    symbol: 'MASS',
    name: '908 Devices Inc'
  },
  {
    symbol: 'MAT',
    name: 'Mattel Inc'
  },
  {
    symbol: 'MATV',
    name: 'Mativ Holdings Inc'
  },
  {
    symbol: 'MATW',
    name: 'Matthews International Corp - Class A'
  },
  {
    symbol: 'MATX',
    name: 'Matson Inc'
  },
  {
    symbol: 'MAX',
    name: 'MediaAlpha Inc - Class A'
  },
  {
    symbol: 'MAXN',
    name: 'Maxeon Solar Technologies Ltd'
  },
  {
    symbol: 'MAXR',
    name: 'Maxar Technologies Inc'
  },
  {
    symbol: 'MAYS',
    name: 'J.W. Mays Inc'
  },
  {
    symbol: 'MBAC',
    name: 'M3 Brigade Acquisition II Corp - Class A'
  },
  {
    symbol: 'MBAC-U',
    name: 'M3 Brigade Acquisition II Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'MBAC-WS',
    name: 'M3 Brigade Acquisition II Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'MBCN',
    name: 'Middlefield Banc Corp'
  },
  {
    symbol: 'MBI',
    name: 'MBIA Inc'
  },
  {
    symbol: 'MBII',
    name: 'Marrone Bio Innovations Inc'
  },
  {
    symbol: 'MBIN',
    name: 'Merchants Bancorp'
  },
  {
    symbol: 'MBINN',
    name: 'Merchants Bancorp Depositary Shares 6.00 Fixed Rate Series C NonCumulative Perpetual Preferred Stock'
  },
  {
    symbol: 'MBINO',
    name: 'Merchants Bancorp'
  },
  {
    symbol: 'MBINP',
    name: 'Merchants Bancorp'
  },
  {
    symbol: 'MBIO',
    name: 'Mustang Bio Inc'
  },
  {
    symbol: 'MBNKP',
    name: 'Medallion Bank'
  },
  {
    symbol: 'MBOT',
    name: 'Microbot Medical Inc'
  },
  {
    symbol: 'MBRX',
    name: 'Moleculin Biotech Inc'
  },
  {
    symbol: 'MBSC',
    name: 'M3 Brigade Acquisition III Corp - Class A'
  },
  {
    symbol: 'MBSC-U',
    name: 'M3 Brigade Acquisition III Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'MBSC-WS',
    name: 'M3 Brigade Acquisition III Corp - Warrants (31/07/2028)'
  },
  {
    symbol: 'MBT',
    name: 'Mobile Telesystems PJSC'
  },
  {
    symbol: 'MBTC',
    name: 'Nocturne Acquisition Corp'
  },
  {
    symbol: 'MBTCR',
    name: 'Nocturne Acquisition Corp'
  },
  {
    symbol: 'MBTCU',
    name: 'Nocturne Acquisition Corp - Units (1 & 1 Rights)'
  },
  {
    symbol: 'MBUU',
    name: 'Malibu Boats Inc - Class A'
  },
  {
    symbol: 'MBWM',
    name: 'Mercantile Bank Corp'
  },
  {
    symbol: 'MC',
    name: 'Moelis & Co - Class A'
  },
  {
    symbol: 'MCAA',
    name: 'Mountain & Co I Acquisition Corp - Class A'
  },
  {
    symbol: 'MCAAU',
    name: 'Mountain & Co I Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'MCAAW',
    name: 'Mountain & Co I Acquisition Corp - Warrants - (04/11/2026)'
  },
  {
    symbol: 'MCAC',
    name: 'Monterey Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'MCACR',
    name: 'Monterey Capital Acquisition Corp'
  },
  {
    symbol: 'MCACU',
    name: 'Monterey Capital Acquisition Corp - Units (1 Ord Class A 1 War & 1 Right)'
  },
  {
    symbol: 'MCACW',
    name: 'Monterey Capital Acquisition Corp - Warrants (10/05/2027)'
  },
  {
    symbol: 'MCAE',
    name: 'Mountain Crest Acquisition Corp III'
  },
  {
    symbol: 'MCAER',
    name: 'Mountain Crest Acquisition Corp III'
  },
  {
    symbol: 'MCAEU',
    name: 'Mountain Crest Acquisition Corp III - Units (1 Ord Share & 1 Right )'
  },
  {
    symbol: 'MCAF',
    name: 'Mountain Crest Acquisition Corp IV'
  },
  {
    symbol: 'MCAFR',
    name: 'Mountain Crest Acquisition Corp IV'
  },
  {
    symbol: 'MCAFU',
    name: 'Mountain Crest Acquisition Corp IV - Units (1 & 1 Rights)'
  },
  {
    symbol: 'MCAG',
    name: 'Mountain Crest Acquisition Corp V'
  },
  {
    symbol: 'MCAGR',
    name: 'Mountain Crest Acquisition Corp V'
  },
  {
    symbol: 'MCAGU',
    name: 'Mountain Crest Acquisition Corp V - Units (1 1 Rights)'
  },
  {
    symbol: 'MCB',
    name: 'Metropolitan Bank Holding Corp'
  },
  {
    symbol: 'MCBC',
    name: 'Macatawa Bank Corp'
  },
  {
    symbol: 'MCBS',
    name: 'MetroCity Bankshares Inc'
  },
  {
    symbol: 'MCD',
    name: 'McDonald`s Corp'
  },
  {
    symbol: 'MCFT',
    name: 'MasterCraft Boat Holdings Inc'
  },
  {
    symbol: 'MCG',
    name: 'Membership Collective Group Inc Class A'
  },
  {
    symbol: 'MCHP',
    name: 'Microchip Technology Inc'
  },
  {
    symbol: 'MCHX',
    name: 'Marchex Inc - Class B'
  },
  {
    symbol: 'MCK',
    name: 'Mckesson Corporation'
  },
  {
    symbol: 'MCK-WD',
    name: 'McKesson Corporation When Distributed'
  },
  {
    symbol: 'MCLD',
    name: 'mCloud Technologies Corp'
  },
  {
    symbol: 'MCLDW',
    name: 'mCloud Technologies Corp - Warrants (29/11/2026)'
  },
  {
    symbol: 'MCO',
    name: 'Moody`s Corp'
  },
  {
    symbol: 'MCRB',
    name: 'Seres Therapeutics Inc'
  },
  {
    symbol: 'MCRI',
    name: 'Monarch Casino & Resort Inc'
  },
  {
    symbol: 'MCS',
    name: 'Marcus Corp'
  },
  {
    symbol: 'MCW',
    name: 'Mister Car Wash Inc'
  },
  {
    symbol: 'MCY',
    name: 'Mercury General Corp'
  },
  {
    symbol: 'MD',
    name: 'Pediatrix Medical Group Inc'
  },
  {
    symbol: 'MDB',
    name: 'MongoDB Inc - Class A'
  },
  {
    symbol: 'MDC',
    name: 'M.D.C. Holdings Inc'
  },
  {
    symbol: 'MDGL',
    name: 'Madrigal Pharmaceuticals Inc'
  },
  {
    symbol: 'MDGS',
    name: 'Medigus Ltd'
  },
  {
    symbol: 'MDGSW',
    name: 'Medigus Ltd Warrants Series C 23072023'
  },
  {
    symbol: 'MDH',
    name: 'MDH Acquisition Corp - Class A'
  },
  {
    symbol: 'MDH-U',
    name: 'MDH Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'MDH-WS',
    name: 'MDH Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'MDIA',
    name: 'MediaCo Holding Inc - Class A'
  },
  {
    symbol: 'MDJH',
    name: 'MDJM Ltd'
  },
  {
    symbol: 'MDLZ',
    name: 'Mondelez International Inc - Class A'
  },
  {
    symbol: 'MDNA',
    name: 'Medicenna Therapeutics Corp'
  },
  {
    symbol: 'MDRR',
    name: 'Medalist Diversified REIT Inc'
  },
  {
    symbol: 'MDRRP',
    name: 'Medalist Diversified REIT Inc'
  },
  {
    symbol: 'MDRX',
    name: 'Allscripts Healthcare Solutions Inc'
  },
  {
    symbol: 'MDT',
    name: 'Medtronic Plc'
  },
  {
    symbol: 'MDU',
    name: 'MDU Resources Group Inc'
  },
  {
    symbol: 'MDV',
    name: 'Modiv Inc - Class C'
  },
  {
    symbol: 'MDV-P-A',
    name: 'Modiv Inc'
  },
  {
    symbol: 'MDVL',
    name: 'MedAvail Holdings Inc'
  },
  {
    symbol: 'MDWD',
    name: 'MediWound Ltd'
  },
  {
    symbol: 'MDWT',
    name: 'Midwest Hldg Inc'
  },
  {
    symbol: 'MDXG',
    name: 'Mimedx Group Inc'
  },
  {
    symbol: 'MDXH',
    name: 'MDxHealth SA'
  },
  {
    symbol: 'ME',
    name: '23andMe Holding Co - Class A'
  },
  {
    symbol: 'MEAC',
    name: 'Mercury Ecommerce Acquisition Corp - Class A'
  },
  {
    symbol: 'MEACU',
    name: 'Mercury Ecommerce Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'MEACW',
    name: 'Mercury Ecommerce Acquisition Corp - Warrants (27/07/2026)'
  },
  {
    symbol: 'MEC',
    name: 'Mayville Engineering Company Inc'
  },
  {
    symbol: 'MED',
    name: 'Medifast Inc'
  },
  {
    symbol: 'MEDP',
    name: 'Medpace Holdings Inc'
  },
  {
    symbol: 'MEDS',
    name: 'Trxade Health Inc'
  },
  {
    symbol: 'MEG',
    name: 'Montrose Environmental Group Inc'
  },
  {
    symbol: 'MEGI',
    name: 'MainStay CBRE Global Infrastructure Megatrends Fund'
  },
  {
    symbol: 'MEI',
    name: 'Methode Electronics Inc'
  },
  {
    symbol: 'MEIP',
    name: 'MEI Pharma Inc'
  },
  {
    symbol: 'MEKA',
    name: 'MELI Kaszek Pioneer Corp - Class A'
  },
  {
    symbol: 'MELI',
    name: 'MercadoLibre Inc'
  },
  {
    symbol: 'MEOA',
    name: 'Minority Equality Opportunities Acquisition Inc - Class A'
  },
  {
    symbol: 'MEOAU',
    name: 'Minority Equality Opportunities Acquisition Inc - Units (1 Ord Share Class A & 1 War)'
  },
  {
    symbol: 'MEOAW',
    name: 'Minority Equality Opportunities Acquisition Inc - Warrants (26/08/2026)'
  },
  {
    symbol: 'MEOH',
    name: 'Methanex Corp'
  },
  {
    symbol: 'MER-P-K',
    name: 'Bank Of America Corp'
  },
  {
    symbol: 'MERC',
    name: 'Mercer International Inc'
  },
  {
    symbol: 'MESA',
    name: 'Mesa Air Group Inc'
  },
  {
    symbol: 'MESO',
    name: 'Mesoblast Ltd'
  },
  {
    symbol: 'MET',
    name: 'Metlife Inc'
  },
  {
    symbol: 'MET-P-A',
    name: 'Metlife Inc'
  },
  {
    symbol: 'MET-P-E',
    name: 'Metlife Inc'
  },
  {
    symbol: 'MET-P-F',
    name: 'Metlife Inc 4.75 PRF PERPETUAL USD 25 11000th int Ser F'
  },
  {
    symbol: 'META',
    name: 'Meta Platforms Inc - Class A'
  },
  {
    symbol: 'METC',
    name: 'Ramaco Resources Inc'
  },
  {
    symbol: 'METCL',
    name: 'Ramaco Resources Inc'
  },
  {
    symbol: 'METX',
    name: 'Meten Holding Group Ltd'
  },
  {
    symbol: 'METXW',
    name: 'Meten Holding Group Ltd - Warrants (31/03/2025)'
  },
  {
    symbol: 'MF',
    name: 'Missfresh Ltd'
  },
  {
    symbol: 'MFA',
    name: 'MFA Financial Inc'
  },
  {
    symbol: 'MFA-P-B',
    name: 'MFA Financial Inc'
  },
  {
    symbol: 'MFA-P-C',
    name: 'MFA Financial Inc'
  },
  {
    symbol: 'MFC',
    name: 'Manulife Financial Corp'
  },
  {
    symbol: 'MFG',
    name: 'Mizuho Financial Group Inc'
  },
  {
    symbol: 'MFGP',
    name: 'Micro Focus International Plc'
  },
  {
    symbol: 'MFH',
    name: 'Mercurity Fintech Holding Inc'
  },
  {
    symbol: 'MFIN',
    name: 'Medallion Financial Corp'
  },
  {
    symbol: 'MG',
    name: 'Mistras Group Inc'
  },
  {
    symbol: 'MGA',
    name: 'Magna International Inc'
  },
  {
    symbol: 'MGEE',
    name: 'MGE Energy Inc'
  },
  {
    symbol: 'MGI',
    name: 'Moneygram International Inc'
  },
  {
    symbol: 'MGIC',
    name: 'Magic Software Enterprises Ltd'
  },
  {
    symbol: 'MGLD',
    name: 'Marygold Companies Inc (The)'
  },
  {
    symbol: 'MGM',
    name: 'MGM Resorts International'
  },
  {
    symbol: 'MGNI',
    name: 'Magnite Inc'
  },
  {
    symbol: 'MGNX',
    name: 'Macrogenics Inc'
  },
  {
    symbol: 'MGP',
    name: 'MGM Growth Properties LLC - Class A'
  },
  {
    symbol: 'MGPI',
    name: 'MGP Ingredients Inc'
  },
  {
    symbol: 'MGR',
    name: 'Affiliated Managers Group Inc'
  },
  {
    symbol: 'MGRB',
    name: 'Affiliated Managers Group Inc'
  },
  {
    symbol: 'MGRC',
    name: 'McGrath Rentcorp'
  },
  {
    symbol: 'MGRD',
    name: 'Affiliated Managers Group Inc'
  },
  {
    symbol: 'MGTA',
    name: 'Magenta Therapeutics Inc'
  },
  {
    symbol: 'MGTX',
    name: 'MeiraGTx Holdings plc'
  },
  {
    symbol: 'MGY',
    name: 'Magnolia Oil & Gas Corp - Class A'
  },
  {
    symbol: 'MGYR',
    name: 'Magyar Bancorp Inc'
  },
  {
    symbol: 'MH-P-A',
    name: 'Maiden Holdings Ltd'
  },
  {
    symbol: 'MH-P-C',
    name: 'Maiden Holdings Ltd'
  },
  {
    symbol: 'MH-P-D',
    name: 'Maiden Holdings Ltd'
  },
  {
    symbol: 'MHH',
    name: 'Mastech Digital Inc'
  },
  {
    symbol: 'MHK',
    name: 'Mohawk Industries Inc'
  },
  {
    symbol: 'MHLA',
    name: 'Maiden Holdings Ltd 6625 Notes due 2046'
  },
  {
    symbol: 'MHLD',
    name: 'Maiden Holdings Ltd'
  },
  {
    symbol: 'MHNC',
    name: 'Maiden Holdings North American Ltd 775 Nts 12012043'
  },
  {
    symbol: 'MHO',
    name: 'MI Homes Inc'
  },
  {
    symbol: 'MHUA',
    name: 'Meihua International Medical Technologies Co Ltd'
  },
  {
    symbol: 'MIC',
    name: 'Macquarie Infrastructure Holdings LLC'
  },
  {
    symbol: 'MICS',
    name: 'Singing Machine Co. Inc'
  },
  {
    symbol: 'MICT',
    name: 'MICT Inc'
  },
  {
    symbol: 'MIDD',
    name: 'Middleby Corp'
  },
  {
    symbol: 'MIGI',
    name: 'Mawson Infrastructure Group Inc'
  },
  {
    symbol: 'MILE',
    name: 'Metromile Inc'
  },
  {
    symbol: 'MILEW',
    name: 'Metromile Inc - Warrants (09/02/2026)'
  },
  {
    symbol: 'MIMO',
    name: 'Airspan Networks Holdings Inc'
  },
  {
    symbol: 'MIMO-WS',
    name: 'Airspan Networks Holdings Inc - Warrants (01/11/2026)'
  },
  {
    symbol: 'MIND',
    name: 'MIND Technology Inc'
  },
  {
    symbol: 'MINDP',
    name: 'MIND Technology Inc'
  },
  {
    symbol: 'MINM',
    name: 'Minim Inc'
  },
  {
    symbol: 'MIO',
    name: 'Pioneer Municipal High Income Opportunities Fund Inc'
  },
  {
    symbol: 'MIR',
    name: 'Mirion Technologies Inc - Class A'
  },
  {
    symbol: 'MIR-WS',
    name: 'Mirion Technologies Inc - Warrants (30/06/2027)'
  },
  {
    symbol: 'MIRM',
    name: 'Mirum Pharmaceuticals Inc'
  },
  {
    symbol: 'MIRO',
    name: 'Miromatrix Medical Inc'
  },
  {
    symbol: 'MIST',
    name: 'Milestone Pharmaceuticals Inc'
  },
  {
    symbol: 'MIT',
    name: 'Mason Industrial Technology Inc - Class A'
  },
  {
    symbol: 'MIT-U',
    name: 'Mason Industrial Technology Inc - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'MIT-WS',
    name: 'Mason Industrial Technology Inc - Warrants (01/01/9999)'
  },
  {
    symbol: 'MITA',
    name: 'Coliseum Acquisition Corp - Class A'
  },
  {
    symbol: 'MITAU',
    name: 'Coliseum Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'MITAW',
    name: 'Coliseum Acquisition Corp - Warrants (02/04/2028)'
  },
  {
    symbol: 'MITC',
    name: 'Meattech 3D Ltd'
  },
  {
    symbol: 'MITK',
    name: 'Mitek Systems Inc'
  },
  {
    symbol: 'MITO',
    name: 'Stealth BioTherapeutics Corp'
  },
  {
    symbol: 'MITQ',
    name: 'Moving iMage Technologies Inc'
  },
  {
    symbol: 'MITT',
    name: 'AG Mortgage Investment Trust Inc'
  },
  {
    symbol: 'MITT-P-A',
    name: 'AG Mortgage Investment Trust Inc'
  },
  {
    symbol: 'MITT-P-B',
    name: 'AG Mortgage Investment Trust Inc'
  },
  {
    symbol: 'MITT-P-C',
    name: 'AG Mortgage Investment Trust Inc'
  },
  {
    symbol: 'MIXT',
    name: 'MiX Telematics Ltd'
  },
  {
    symbol: 'MKC',
    name: 'McCormick & Co. Inc (Non Voting)'
  },
  {
    symbol: 'MKC-V',
    name: 'McCormick & Co. Inc'
  },
  {
    symbol: 'MKD',
    name: 'Molecular Data Inc'
  },
  {
    symbol: 'MKFG',
    name: 'Markforged Holding Corporation'
  },
  {
    symbol: 'MKFG-WS',
    name: 'Markforged Holding Corporation - Warrants (17/08/2025)'
  },
  {
    symbol: 'MKL',
    name: 'Markel Corp'
  },
  {
    symbol: 'MKSI',
    name: 'MKS Instruments Inc'
  },
  {
    symbol: 'MKTW',
    name: 'Marketwise Inc - Class A'
  },
  {
    symbol: 'MKTWW',
    name: 'Marketwise Inc - Warrants (19/07/2026)'
  },
  {
    symbol: 'MKTX',
    name: 'MarketAxess Holdings Inc'
  },
  {
    symbol: 'ML',
    name: 'MoneyLion Inc - Class A'
  },
  {
    symbol: 'ML-WS',
    name: 'MoneyLion Inc - Warrants (01/06/2027)'
  },
  {
    symbol: 'MLAB',
    name: 'Mesa Laboratories Inc'
  },
  {
    symbol: 'MLAC',
    name: 'Malacca Straits Acquisition Co Ltd - Class A'
  },
  {
    symbol: 'MLACU',
    name: 'Malacca Straits Acquisition Co Ltd - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'MLACW',
    name: 'Malacca Straits Acquisition Co Ltd - Warrants (30/06/2027)'
  },
  {
    symbol: 'MLAI',
    name: 'McLaren Technology Acquisition Corp - Class A'
  },
  {
    symbol: 'MLAIU',
    name: 'McLaren Technology Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'MLAIW',
    name: 'McLaren Technology Acquisition Corp - Warrants (01/11/2026)'
  },
  {
    symbol: 'MLCO',
    name: 'Melco Resorts & Entertainment Ltd'
  },
  {
    symbol: 'MLI',
    name: 'Mueller Industries Inc'
  },
  {
    symbol: 'MLKN',
    name: 'MillerKnoll Inc'
  },
  {
    symbol: 'MLM',
    name: 'Martin Marietta Materials Inc'
  },
  {
    symbol: 'MLNK',
    name: 'MeridianLink Inc'
  },
  {
    symbol: 'MLP',
    name: 'Maui Land & Pineapple Co. Inc'
  },
  {
    symbol: 'MLPR',
    name: 'UBS AG London Branch'
  },
  {
    symbol: 'MLR',
    name: 'Miller Industries Inc'
  },
  {
    symbol: 'MLSS',
    name: 'Milestone Scientific Inc'
  },
  {
    symbol: 'MLTX',
    name: 'MoonLake Immunotherapeutics - Class A'
  },
  {
    symbol: 'MLVF',
    name: 'Malvern Bancorp Inc'
  },
  {
    symbol: 'MMAT',
    name: 'Meta Materials Inc'
  },
  {
    symbol: 'MMC',
    name: 'Marsh & McLennan Cos. Inc'
  },
  {
    symbol: 'MMI',
    name: 'Marcus & Millichap Inc'
  },
  {
    symbol: 'MMLP',
    name: 'Martin Midstream Partners LP'
  },
  {
    symbol: 'MMM',
    name: '3M Company'
  },
  {
    symbol: 'MMMB',
    name: 'MamaMancini`s Holdings Inc'
  },
  {
    symbol: 'MMP',
    name: 'Magellan Midstream Partners L.P.'
  },
  {
    symbol: 'MMS',
    name: 'Maximus Inc'
  },
  {
    symbol: 'MMSI',
    name: 'Merit Medical Systems Inc'
  },
  {
    symbol: 'MMX',
    name: 'Maverix Metals Inc'
  },
  {
    symbol: 'MMYT',
    name: 'MakeMyTrip Ltd'
  },
  {
    symbol: 'MN',
    name: 'Manning & Napier Inc - Class A'
  },
  {
    symbol: 'MNDO',
    name: 'Mind C.T.I Ltd'
  },
  {
    symbol: 'MNDT',
    name: 'Mandiant Inc'
  },
  {
    symbol: 'MNDY',
    name: 'Monday.Com Ltd'
  },
  {
    symbol: 'MNKD',
    name: 'Mannkind Corp'
  },
  {
    symbol: 'MNMD',
    name: 'Mind Medicine Inc'
  },
  {
    symbol: 'MNOV',
    name: 'Medicinova Inc'
  },
  {
    symbol: 'MNPR',
    name: 'Monopar Therapeutics Inc'
  },
  {
    symbol: 'MNRL',
    name: 'Brigham Minerals Inc - Class A'
  },
  {
    symbol: 'MNRO',
    name: 'Monro Inc'
  },
  {
    symbol: 'MNSB',
    name: 'MainStreet Bancshares Inc'
  },
  {
    symbol: 'MNSBP',
    name: 'MainStreet Bancshares Inc'
  },
  {
    symbol: 'MNSO',
    name: 'MINISO Group Holding Ltd'
  },
  {
    symbol: 'MNST',
    name: 'Monster Beverage Corp'
  },
  {
    symbol: 'MNTK',
    name: 'Montauk Renewables Inc'
  },
  {
    symbol: 'MNTN',
    name: 'Everest Consolidator Acquisition Corp - Class A'
  },
  {
    symbol: 'MNTN-U',
    name: 'Everest Consolidator Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'MNTN-WS',
    name: 'Everest Consolidator Acquisition Corporation Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50'
  },
  {
    symbol: 'MNTS',
    name: 'Momentus Inc - Class A'
  },
  {
    symbol: 'MNTSW',
    name: 'Momentus Inc - Warrants (12/08/2026)'
  },
  {
    symbol: 'MNTV',
    name: 'Momentive Global Inc'
  },
  {
    symbol: 'MNTX',
    name: 'Manitex International Inc'
  },
  {
    symbol: 'MO',
    name: 'Altria Group Inc'
  },
  {
    symbol: 'MOBQ',
    name: 'Mobiquity Technologies Inc'
  },
  {
    symbol: 'MOBQW',
    name: 'Mobiquity Technologies Inc - Warrants (30/11/2026)'
  },
  {
    symbol: 'MOD',
    name: 'Modine Manufacturing Company'
  },
  {
    symbol: 'MODD',
    name: 'Modular Medical Inc'
  },
  {
    symbol: 'MODN',
    name: 'Model N Inc'
  },
  {
    symbol: 'MODV',
    name: 'ModivCare Inc'
  },
  {
    symbol: 'MOFG',
    name: 'MidWestOne Financial Group Inc'
  },
  {
    symbol: 'MOG-A',
    name: 'Moog Inc - Class A'
  },
  {
    symbol: 'MOG-B',
    name: 'Moog Inc - Class B'
  },
  {
    symbol: 'MOGO',
    name: 'Mogo Inc (Sub Voting)'
  },
  {
    symbol: 'MOGU',
    name: 'MOGU Inc'
  },
  {
    symbol: 'MOH',
    name: 'Molina Healthcare Inc'
  },
  {
    symbol: 'MOHO',
    name: 'ECMOHO Ltd'
  },
  {
    symbol: 'MOLN',
    name: 'Molecular Partners AG'
  },
  {
    symbol: 'MOMO',
    name: 'Hello Group Inc'
  },
  {
    symbol: 'MON',
    name: 'Monument Circle Acquisition Corp - Class A'
  },
  {
    symbol: 'MONCU',
    name: 'Monument Circle Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'MONCW',
    name: 'Monument Circle Acquisition Corp - Warrants (14/01/2026)'
  },
  {
    symbol: 'MOR',
    name: 'Morphosys AG'
  },
  {
    symbol: 'MORF',
    name: 'Morphic Holding Inc'
  },
  {
    symbol: 'MORN',
    name: 'Morningstar Inc'
  },
  {
    symbol: 'MOS',
    name: 'Mosaic Company'
  },
  {
    symbol: 'MOSC',
    name: 'Mosaic Acquisition Corp. Class A'
  },
  {
    symbol: 'MOSC-U',
    name: 'Mosaic Acquisition Corp Units each consisting of one Class A Ordinary Share and onethird of one Warrant'
  },
  {
    symbol: 'MOSC-WS',
    name: 'Mosaic Acquisition Corp Warrants each exercisable for one Class A Ordinary Share at an exercise price of 1150 per share'
  },
  {
    symbol: 'MOTS',
    name: 'Motus GI Holdings Inc'
  },
  {
    symbol: 'MOTV-U',
    name: 'Motive Capital Corp Units each consisting of one Class A ordinary share and onethird of one redeemable warrant'
  },
  {
    symbol: 'MOV',
    name: 'Movado Group Inc'
  },
  {
    symbol: 'MOVE',
    name: 'Movano Inc'
  },
  {
    symbol: 'MOXC',
    name: 'Moxian (BVI) Inc'
  },
  {
    symbol: 'MP',
    name: 'MP Materials Corporation - Class A'
  },
  {
    symbol: 'MPAA',
    name: 'Motorcar Parts of America Inc'
  },
  {
    symbol: 'MPAC',
    name: 'Model Performance Acquisition Corp - Class A'
  },
  {
    symbol: 'MPACR',
    name: 'Model Performance Acquisition Corp'
  },
  {
    symbol: 'MPACU',
    name: 'Model Performance Acquisition Corp - Units (1 Ord Class A 1/2 War 1 Rts)'
  },
  {
    symbol: 'MPB',
    name: 'Mid Penn Bancorp Inc'
  },
  {
    symbol: 'MPC',
    name: 'Marathon Petroleum Corp'
  },
  {
    symbol: 'MPLN',
    name: 'MultiPlan Corp - Class A'
  },
  {
    symbol: 'MPLN-WS',
    name: 'MultiPlan Corp - Warrants (01/03/2027)'
  },
  {
    symbol: 'MPLX',
    name: 'MPLX LP'
  },
  {
    symbol: 'MPRA',
    name: 'Mercato Partners Acquisition Corp - Class A'
  },
  {
    symbol: 'MPRAU',
    name: 'Mercato Partners Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'MPRAW',
    name: 'Mercato Partners Acquisition Corp - Warrants - (29/10/2026)'
  },
  {
    symbol: 'MPW',
    name: 'Medical Properties Trust Inc'
  },
  {
    symbol: 'MPWR',
    name: 'Monolithic Power System Inc'
  },
  {
    symbol: 'MPX',
    name: 'Marine Products Corp'
  },
  {
    symbol: 'MQ',
    name: 'Marqeta Inc - Class A'
  },
  {
    symbol: 'MRAI',
    name: 'Marpai Inc Class A'
  },
  {
    symbol: 'MRAM',
    name: 'Everspin Technologies Inc'
  },
  {
    symbol: 'MRBK',
    name: 'Meridian Corp'
  },
  {
    symbol: 'MRC',
    name: 'MRC Global Inc'
  },
  {
    symbol: 'MRCC',
    name: 'Monroe Capital Corp'
  },
  {
    symbol: 'MRCY',
    name: 'Mercury Systems Inc'
  },
  {
    symbol: 'MREO',
    name: 'Mereo Biopharma Group Plc'
  },
  {
    symbol: 'MRIN',
    name: 'Marin Software Inc'
  },
  {
    symbol: 'MRK',
    name: 'Merck & Co Inc'
  },
  {
    symbol: 'MRK-W',
    name: 'Merck & Company Inc ExDistribution When Issued'
  },
  {
    symbol: 'MRKR',
    name: 'Marker Therapeutics Inc'
  },
  {
    symbol: 'MRM',
    name: 'MEDIROM Healthcare Technologies Inc'
  },
  {
    symbol: 'MRNA',
    name: 'Moderna Inc'
  },
  {
    symbol: 'MRNS',
    name: 'Marinus Pharmaceuticals Inc'
  },
  {
    symbol: 'MRO',
    name: 'Marathon Oil Corporation'
  },
  {
    symbol: 'MRSN',
    name: 'Mersana Therapeutics Inc'
  },
  {
    symbol: 'MRTN',
    name: 'Marten Transport Ltd'
  },
  {
    symbol: 'MRTX',
    name: 'Mirati Therapeutics Inc'
  },
  {
    symbol: 'MRUS',
    name: 'Merus N.V'
  },
  {
    symbol: 'MRVI',
    name: 'Maravai LifeSciences Holdings Inc - Class A'
  },
  {
    symbol: 'MRVL',
    name: 'Marvell Technology Inc'
  },
  {
    symbol: 'MS',
    name: 'Morgan Stanley'
  },
  {
    symbol: 'MS-P-A',
    name: 'Morgan Stanley'
  },
  {
    symbol: 'MS-P-E',
    name: 'Morgan Stanley'
  },
  {
    symbol: 'MS-P-F',
    name: 'Morgan Stanley'
  },
  {
    symbol: 'MS-P-G',
    name: 'Morgan Stanley Depositary Shares Series G'
  },
  {
    symbol: 'MS-P-G-CL',
    name: ''
  },
  {
    symbol: 'MS-P-I',
    name: 'Morgan Stanley'
  },
  {
    symbol: 'MS-P-K',
    name: 'Morgan Stanley'
  },
  {
    symbol: 'MS-P-L',
    name: 'Morgan Stanley'
  },
  {
    symbol: 'MSA',
    name: 'MSA Safety Inc'
  },
  {
    symbol: 'MSAC',
    name: 'Medicus Sciences Acquisition Corp - Class A'
  },
  {
    symbol: 'MSACW',
    name: 'Medicus Sciences Acquisition Corp - Warrants (12/02/2026)'
  },
  {
    symbol: 'MSB',
    name: 'Mesabi Trust'
  },
  {
    symbol: 'MSBI',
    name: 'Midland States Bancorp Inc'
  },
  {
    symbol: 'MSC',
    name: 'Studio City International Holdings Ltd'
  },
  {
    symbol: 'MSCI',
    name: 'MSCI Inc'
  },
  {
    symbol: 'MSDA',
    name: 'MSD Acquisition Corp - Class A'
  },
  {
    symbol: 'MSDAU',
    name: 'MSD Acquisition Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'MSDAW',
    name: 'MSD Acquisition Corp - Warrants (25/03/2026)'
  },
  {
    symbol: 'MSEX',
    name: 'Middlesex Water Company'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation'
  },
  {
    symbol: 'MSGE',
    name: 'Madison Square Garden Entertainment Corp - Class A'
  },
  {
    symbol: 'MSGM',
    name: 'Motorsport Games Inc - Class A'
  },
  {
    symbol: 'MSGS',
    name: 'Madison Square Garden Sports Corp - Class A'
  },
  {
    symbol: 'MSI',
    name: 'Motorola Solutions Inc'
  },
  {
    symbol: 'MSM',
    name: 'MSC Industrial Direct Co. Inc - Class A'
  },
  {
    symbol: 'MSN',
    name: 'Emerson Radio Corp'
  },
  {
    symbol: 'MSPR',
    name: 'MSP Recovery Inc - Class A'
  },
  {
    symbol: 'MSPRV',
    name: 'MSP Recovery Inc Warrant'
  },
  {
    symbol: 'MSPRW',
    name: 'MSP Recovery Inc - Warrants -New (23/05/2027)'
  },
  {
    symbol: 'MSPRZ',
    name: 'MSP Recovery Inc - Warrants (23/05/2027)'
  },
  {
    symbol: 'MSSA',
    name: 'Metal Sky Star Acquisition Corp'
  },
  {
    symbol: 'MSSAR',
    name: 'Metal Sky Star Acquisition Corp'
  },
  {
    symbol: 'MSSAU',
    name: 'Metal Sky Star Acquisition Corp - Units (1 Ord 1 Rts & 1 War)'
  },
  {
    symbol: 'MSSAW',
    name: 'Metal Sky Star Acquisition Corp - Warrants (31/03/2027)'
  },
  {
    symbol: 'MSTR',
    name: 'Microstrategy Inc - Class A'
  },
  {
    symbol: 'MSVB',
    name: 'Mid-Southern Bancorp Inc'
  },
  {
    symbol: 'MT',
    name: 'ArcelorMittal'
  },
  {
    symbol: 'MTA',
    name: 'Metalla Royalty and Streaming Ltd'
  },
  {
    symbol: 'MTAC',
    name: 'MedTech Acquisition Corp - Class A'
  },
  {
    symbol: 'MTACU',
    name: 'MedTech Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'MTACW',
    name: 'MedTech Acquisition Corp - Warrants (18/12/2025)'
  },
  {
    symbol: 'MTAL',
    name: 'Metals Acquisition Corp - Class A'
  },
  {
    symbol: 'MTAL-U',
    name: 'Metals Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'MTAL-WS',
    name: 'Metals Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'MTB',
    name: 'M & T Bank Corp'
  },
  {
    symbol: 'MTB-P-H',
    name: 'M & T Bank Corp'
  },
  {
    symbol: 'MTBC',
    name: 'CareCloud Inc'
  },
  {
    symbol: 'MTBCO',
    name: 'CareCloud Inc'
  },
  {
    symbol: 'MTBCP',
    name: 'CareCloud Inc'
  },
  {
    symbol: 'MTC',
    name: 'Mmtec Inc'
  },
  {
    symbol: 'MTCH',
    name: 'Match Group Inc - New'
  },
  {
    symbol: 'MTCN',
    name: 'ArcelorMittal'
  },
  {
    symbol: 'MTCR',
    name: 'Metacrine Inc'
  },
  {
    symbol: 'MTD',
    name: 'Mettler-Toledo International Inc'
  },
  {
    symbol: 'MTDR',
    name: 'Matador Resources Company'
  },
  {
    symbol: 'MTEK',
    name: 'Maris Tech Ltd'
  },
  {
    symbol: 'MTEKW',
    name: 'Maris Tech Ltd - Warrant (06/01/2027)'
  },
  {
    symbol: 'MTEM',
    name: 'Molecular Templates Inc'
  },
  {
    symbol: 'MTEST',
    name: ''
  },
  {
    symbol: 'MTEX',
    name: 'Mannatech Inc'
  },
  {
    symbol: 'MTFBW',
    name: 'Motif Bio plc Warrant'
  },
  {
    symbol: 'MTG',
    name: 'MGIC Investment Corp'
  },
  {
    symbol: 'MTGP',
    name: 'WISDOMTREE MORTGAGE PLUS BOND FUND N/A'
  },
  {
    symbol: 'MTH',
    name: 'Meritage Homes Corp'
  },
  {
    symbol: 'MTL',
    name: 'Mechel PJSC'
  },
  {
    symbol: 'MTL-P',
    name: 'Mechel PJSC'
  },
  {
    symbol: 'MTLS',
    name: 'Materialise Nv'
  },
  {
    symbol: 'MTMT',
    name: 'Mega Matrix Corp'
  },
  {
    symbol: 'MTN',
    name: 'Vail Resorts Inc'
  },
  {
    symbol: 'MTNB',
    name: 'Matinas Biopharma Holdings Inc'
  },
  {
    symbol: 'MTOR',
    name: 'Meritor Inc'
  },
  {
    symbol: 'MTP',
    name: 'Midatech Pharma Plc'
  },
  {
    symbol: 'MTR',
    name: 'Mesa Royalty Trust'
  },
  {
    symbol: 'MTRN',
    name: 'Materion Corp'
  },
  {
    symbol: 'MTRX',
    name: 'Matrix Service Company'
  },
  {
    symbol: 'MTRY',
    name: 'Monterey Bio Acquisition Corp'
  },
  {
    symbol: 'MTRYU',
    name: 'Monterey Bio Acquisition Corp - Units (1 Ord Share & 1 War)'
  },
  {
    symbol: 'MTRYW',
    name: 'Monterey Bio Acquisition Corp - Warrants (30/09/2026)'
  },
  {
    symbol: 'MTSI',
    name: 'MACOM Technology Solutions Holdings Inc'
  },
  {
    symbol: 'MTTR',
    name: 'Matterport Inc - Class A'
  },
  {
    symbol: 'MTUL',
    name: 'UBS AG London Branch'
  },
  {
    symbol: 'MTVC',
    name: 'Motive Capital Corp II - Class A'
  },
  {
    symbol: 'MTVC-U',
    name: 'Motive Capital Corp II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'MTVC-WS',
    name: 'Motive Capital Corp II - Warrants (01/01/9999)'
  },
  {
    symbol: 'MTW',
    name: 'Manitowoc Co. Inc'
  },
  {
    symbol: 'MTX',
    name: 'Minerals Technologies Inc'
  },
  {
    symbol: 'MTZ',
    name: 'Mastec Inc'
  },
  {
    symbol: 'MU',
    name: 'Micron Technology Inc'
  },
  {
    symbol: 'MUDS',
    name: 'Mudrick Capital Acquisition Corp II - Class A'
  },
  {
    symbol: 'MUDSU',
    name: 'Mudrick Capital Acquisition Corp II - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'MUDSW',
    name: 'Mudrick Capital Acquisition Corp II - Warrants (08/12/2025)'
  },
  {
    symbol: 'MUFG',
    name: 'Mitsubishi UFJ Financial Group Inc'
  },
  {
    symbol: 'MULG',
    name: 'Muliang Viagoo Technology Inc'
  },
  {
    symbol: 'MULN',
    name: 'Mullen Automotive Inc'
  },
  {
    symbol: 'MUR',
    name: 'Murphy Oil Corp'
  },
  {
    symbol: 'MURF',
    name: 'Murphy Canyon Acquisition Corp - Class A'
  },
  {
    symbol: 'MURFU',
    name: 'Murphy Canyon Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'MURFW',
    name: 'Murphy Canyon Acquisition Corp - Warrants (25/01/2027)'
  },
  {
    symbol: 'MUSA',
    name: 'Murphy USA Inc'
  },
  {
    symbol: 'MUX',
    name: 'McEwen Mining Inc'
  },
  {
    symbol: 'MVBF',
    name: 'MVB Financial Corp'
  },
  {
    symbol: 'MVIS',
    name: 'Microvision Inc'
  },
  {
    symbol: 'MVO',
    name: 'MV Oil Trust'
  },
  {
    symbol: 'MVRL',
    name: 'UBS AG London Branch'
  },
  {
    symbol: 'MVST',
    name: 'Microvast Holdings Inc'
  },
  {
    symbol: 'MVSTW',
    name: 'Microvast Holdings Inc - Warrants (23/07/2026)'
  },
  {
    symbol: 'MWA',
    name: 'Mueller Water Products Inc - Series A'
  },
  {
    symbol: 'MX',
    name: 'MagnaChip Semiconductor Corp'
  },
  {
    symbol: 'MXC',
    name: 'Mexco Energy Corp'
  },
  {
    symbol: 'MXCT',
    name: 'MaxCyte Inc'
  },
  {
    symbol: 'MXL',
    name: 'MaxLinear Inc'
  },
  {
    symbol: 'MYE',
    name: 'Myers Industries Inc'
  },
  {
    symbol: 'MYFW',
    name: 'First Western Financial Inc'
  },
  {
    symbol: 'MYGN',
    name: 'Myriad Genetics Inc'
  },
  {
    symbol: 'MYMD',
    name: 'MyMD Pharmaceuticals Inc'
  },
  {
    symbol: 'MYNA',
    name: 'Mynaric AG'
  },
  {
    symbol: 'MYNZ',
    name: 'Mainz Biomed B.V.'
  },
  {
    symbol: 'MYO',
    name: 'Myomo Inc'
  },
  {
    symbol: 'MYOV',
    name: 'Myovant Sciences Ltd'
  },
  {
    symbol: 'MYPS',
    name: 'PLAYSTUDIOS Inc - Class A'
  },
  {
    symbol: 'MYPSW',
    name: 'PLAYSTUDIOS Inc - Warrants (17/06/2026)'
  },
  {
    symbol: 'MYRG',
    name: 'MYR Group Inc'
  },
  {
    symbol: 'MYSZ',
    name: 'My Size Inc'
  },
  {
    symbol: 'MYTE',
    name: 'MYT Netherlands Parent BV'
  },
  {
    symbol: 'NAAC',
    name: 'North Atlantic Acquisition Corp - Class A'
  },
  {
    symbol: 'NAACU',
    name: 'North Atlantic Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'NAACW',
    name: 'North Atlantic Acquisition Corp - Warrants (20/10/2025)'
  },
  {
    symbol: 'NAAS',
    name: 'Naas Technology Inc'
  },
  {
    symbol: 'NABL',
    name: 'N-able Inc'
  },
  {
    symbol: 'NABL-W',
    name: 'Nable Inc When Issued'
  },
  {
    symbol: 'NAII',
    name: 'Natural Alternatives International Inc'
  },
  {
    symbol: 'NAK',
    name: 'Northern Dynasty Minerals Ltd'
  },
  {
    symbol: 'NAOV',
    name: 'NanoVibronix Inc'
  },
  {
    symbol: 'NAPA',
    name: 'Duckhorn Portfolio Inc (The)'
  },
  {
    symbol: 'NARI',
    name: 'Inari Medical Inc'
  },
  {
    symbol: 'NAT',
    name: 'Nordic American Tankers Ltd'
  },
  {
    symbol: 'NATH',
    name: 'Nathan`s Famous Inc'
  },
  {
    symbol: 'NATI',
    name: 'National Instruments Corp'
  },
  {
    symbol: 'NATR',
    name: 'Nature`s Sunshine Products Inc'
  },
  {
    symbol: 'NAUT',
    name: 'Nautilus Biotechnology Inc'
  },
  {
    symbol: 'NAV-P-D',
    name: 'Navistar International Corporation Preferred Stock'
  },
  {
    symbol: 'NAVB',
    name: 'Navidea Biopharmaceuticals Inc'
  },
  {
    symbol: 'NAVI',
    name: 'Navient Corp'
  },
  {
    symbol: 'NBEV',
    name: 'NewAge Inc'
  },
  {
    symbol: 'NBHC',
    name: 'National Bank Holdings Corp - Class A'
  },
  {
    symbol: 'NBIX',
    name: 'Neurocrine Biosciences Inc'
  },
  {
    symbol: 'NBN',
    name: 'Northeast Bank'
  },
  {
    symbol: 'NBR',
    name: 'Nabors Industries Ltd'
  },
  {
    symbol: 'NBRV',
    name: 'Nabriva Therapeutics Plc'
  },
  {
    symbol: 'NBSE',
    name: 'NeuBase Therapeutics Inc'
  },
  {
    symbol: 'NBST',
    name: 'Newbury Street Acquisition Corp'
  },
  {
    symbol: 'NBSTU',
    name: 'Newbury Street Acquisition Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'NBSTW',
    name: 'Newbury Street Acquisition Corp - Warrants (30/04/2028)'
  },
  {
    symbol: 'NBTB',
    name: 'NBT Bancorp. Inc'
  },
  {
    symbol: 'NBTX',
    name: 'Nanobiotix'
  },
  {
    symbol: 'NBXG',
    name: 'Neuberger Berman Next Generation Connectivity Fund Inc'
  },
  {
    symbol: 'NBY',
    name: 'Novabay Pharmaceuticals Inc'
  },
  {
    symbol: 'NC',
    name: 'Nacco Industries Inc - Class A'
  },
  {
    symbol: 'NCAC',
    name: 'Newcourt Acquisition Corp - Class A'
  },
  {
    symbol: 'NCACU',
    name: 'Newcourt Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'NCACW',
    name: 'Newcourt Acquisition Corp - Warrants (13/10/2026)'
  },
  {
    symbol: 'NCBS',
    name: 'Nicolet Bankshares Inc'
  },
  {
    symbol: 'NCLH',
    name: 'Norwegian Cruise Line Holdings Ltd'
  },
  {
    symbol: 'NCMI',
    name: 'National Cinemedia Inc'
  },
  {
    symbol: 'NCNA',
    name: 'NuCana plc'
  },
  {
    symbol: 'NCNO',
    name: 'Ncino Inc'
  },
  {
    symbol: 'NCR',
    name: 'NCR Corp'
  },
  {
    symbol: 'NCRA',
    name: 'Nocera Inc'
  },
  {
    symbol: 'NCSM',
    name: 'NCS Multistage Holdings Inc'
  },
  {
    symbol: 'NCTY',
    name: 'The9 Ltd'
  },
  {
    symbol: 'NCV-P-A',
    name: 'Virtus Convertible & Income Fund'
  },
  {
    symbol: 'NCZ-P-A',
    name: 'Virtus Convertible & Income Fund II'
  },
  {
    symbol: 'NDAC',
    name: 'NightDragon Acquisition Corp - Class A'
  },
  {
    symbol: 'NDACU',
    name: 'NightDragon Acquisition Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'NDACW',
    name: 'NightDragon Acquisition Corp - Warrants (26/02/2026)'
  },
  {
    symbol: 'NDAQ',
    name: 'Nasdaq Inc - 144A'
  },
  {
    symbol: 'NDLS',
    name: 'Noodles & Company - Class A'
  },
  {
    symbol: 'NDMO',
    name: 'Nuveen Dynamic Municipal Opportunities Fund'
  },
  {
    symbol: 'NDRA',
    name: 'ENDRA Life Sciences Inc'
  },
  {
    symbol: 'NDSN',
    name: 'Nordson Corp'
  },
  {
    symbol: 'NE',
    name: 'Noble Corp'
  },
  {
    symbol: 'NEBUU',
    name: 'Nebula Acquisition Corp Units 1 Cls A Ord 13 War'
  },
  {
    symbol: 'NEBUW',
    name: 'Nebula Acquisition Corporation Warrant'
  },
  {
    symbol: 'NECB',
    name: 'NorthEast Community Bancorp Inc'
  },
  {
    symbol: 'NEE',
    name: 'NextEra Energy Inc'
  },
  {
    symbol: 'NEE 6.219',
    name: 'NextEra Energy Inc'
  },
  {
    symbol: 'NEE-P-P',
    name: ''
  },
  {
    symbol: 'NEE-P-Q',
    name: 'NextEra Energy Inc. Corporate Units'
  },
  {
    symbol: 'NEEPN',
    name: 'NextEra Energy Capital Holdings Inc'
  },
  {
    symbol: 'NEGG',
    name: 'Newegg Commerce Inc'
  },
  {
    symbol: 'NEM',
    name: 'Newmont Corp'
  },
  {
    symbol: 'NEN',
    name: 'New England Realty Associates LP'
  },
  {
    symbol: 'NEO',
    name: 'Neogenomics Inc'
  },
  {
    symbol: 'NEOG',
    name: 'Neogen Corp'
  },
  {
    symbol: 'NEON',
    name: 'Neonode Inc'
  },
  {
    symbol: 'NEOV',
    name: 'NeoVolta Inc'
  },
  {
    symbol: 'NEP',
    name: 'NextEra Energy Partners LP'
  },
  {
    symbol: 'NEPH',
    name: 'Nephros Inc'
  },
  {
    symbol: 'NEPT',
    name: 'Neptune Wellness Solutions Inc'
  },
  {
    symbol: 'NERV',
    name: 'Minerva Neurosciences Inc'
  },
  {
    symbol: 'NESR',
    name: 'National Energy Services Reunited Corp'
  },
  {
    symbol: 'NESRW',
    name: 'National Energy Services Reunited Corp - Warrants(05/05/2022)'
  },
  {
    symbol: 'NET',
    name: 'Cloudflare Inc - Class A'
  },
  {
    symbol: 'NETC',
    name: 'Nabors Energy Transition Corp - Class A'
  },
  {
    symbol: 'NETC-U',
    name: 'Nabors Energy Transition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'NETC-WS',
    name: 'Nabors Energy Transition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'NETI',
    name: 'Eneti Inc'
  },
  {
    symbol: 'NEU',
    name: 'NewMarket Corp'
  },
  {
    symbol: 'NEWP',
    name: 'New Pacific Metals Corp - New'
  },
  {
    symbol: 'NEWR',
    name: 'New Relic Inc'
  },
  {
    symbol: 'NEWT',
    name: 'Newtek Business Services Corp'
  },
  {
    symbol: 'NEWTL',
    name: 'Newtek Business Services Corp'
  },
  {
    symbol: 'NEWTZ',
    name: 'Newtek Business Services Corp'
  },
  {
    symbol: 'NEX',
    name: 'NexTier Oilfield Solutions Inc'
  },
  {
    symbol: 'NEXA',
    name: 'Nexa Resources S.A.'
  },
  {
    symbol: 'NEXI',
    name: 'Neximmune Inc'
  },
  {
    symbol: 'NEXT',
    name: 'NextDecade Corporation'
  },
  {
    symbol: 'NFBK',
    name: 'Northfield Bancorp Inc'
  },
  {
    symbol: 'NFC',
    name: 'New Frontier Corporation Class A'
  },
  {
    symbol: 'NFC-U',
    name: 'New Frontier Corporation Units each consisting of one Class A Ordinary Share and one half of one Warrant'
  },
  {
    symbol: 'NFC-WS',
    name: 'New Frontier Corporation Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 1150 per share'
  },
  {
    symbol: 'NFE',
    name: 'New Fortress Energy Inc - Class A'
  },
  {
    symbol: 'NFG',
    name: 'National Fuel Gas Company'
  },
  {
    symbol: 'NFGC',
    name: 'New Found Gold Corp'
  },
  {
    symbol: 'NFLX',
    name: 'Netflix Inc'
  },
  {
    symbol: 'NFNT',
    name: 'Infinite Acquisition Corp - Class A'
  },
  {
    symbol: 'NFNT-U',
    name: 'Infinite Acquisition Corp Units each consisting of one Class A ordinary share and onehalf of one redeemable warrant'
  },
  {
    symbol: 'NFNT-WS',
    name: 'Infinite Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'NFYS',
    name: 'Enphys Acquisition Corp - Class A'
  },
  {
    symbol: 'NFYS-U',
    name: 'Enphys Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'NFYS-WS',
    name: 'Enphys Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'NG',
    name: 'Novagold Resources Inc'
  },
  {
    symbol: 'NGC',
    name: 'Northern Genesis Acquisition Corp III'
  },
  {
    symbol: 'NGC-U',
    name: 'Northern Genesis Acquisition Corp III - Units (1 Ord Share & 1/4 War)'
  },
  {
    symbol: 'NGC-WS',
    name: 'Northern Genesis Acquisition Corp III - Warrants (31/12/2027)'
  },
  {
    symbol: 'NGD',
    name: 'New Gold Inc'
  },
  {
    symbol: 'NGG',
    name: 'National Grid Plc'
  },
  {
    symbol: 'NGL',
    name: 'NGL Energy Partners LP'
  },
  {
    symbol: 'NGL-P-B',
    name: 'NGL ENERGY PARTNERS LP 900 Class B FixedtoFloating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partnership interests'
  },
  {
    symbol: 'NGL-P-C',
    name: 'NGL ENERGY PARTNERS LP 9625 Class C FixedtoFloating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests'
  },
  {
    symbol: 'NGM',
    name: 'Ngm Biopharmaceuticals Inc'
  },
  {
    symbol: 'NGMS',
    name: 'NeoGames SA'
  },
  {
    symbol: 'NGS',
    name: 'Natural Gas Services Group Inc'
  },
  {
    symbol: 'NGVC',
    name: 'Natural Grocers by Vitamin Cottage Inc'
  },
  {
    symbol: 'NGVT',
    name: 'Ingevity Corp'
  },
  {
    symbol: 'NH',
    name: 'NantHealth Inc'
  },
  {
    symbol: 'NHC',
    name: 'National Healthcare Corp'
  },
  {
    symbol: 'NHI',
    name: 'National Health Investors Inc'
  },
  {
    symbol: 'NHIC',
    name: 'NewHold Investment Corp II - Class A'
  },
  {
    symbol: 'NHICU',
    name: 'NewHold Investment Corp II - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'NHICW',
    name: 'NewHold Investment Corp II - Warrants (21/10/2026)'
  },
  {
    symbol: 'NHTC',
    name: 'Natural Health Trends Corp'
  },
  {
    symbol: 'NHWK',
    name: 'NightHawk Biosciences Inc'
  },
  {
    symbol: 'NI',
    name: 'NiSource Inc'
  },
  {
    symbol: 'NI-P-B',
    name: 'NiSource Inc'
  },
  {
    symbol: 'NIC',
    name: 'Nicolet Bankshares Inc'
  },
  {
    symbol: 'NICE',
    name: 'NICE Ltd'
  },
  {
    symbol: 'NICK',
    name: 'Nicholas Financial Inc'
  },
  {
    symbol: 'NILE',
    name: 'BitNile Holdings Inc'
  },
  {
    symbol: 'NILE-P-D',
    name: 'BitNile Holdings Inc'
  },
  {
    symbol: 'NIMC',
    name: 'NiSource Inc'
  },
  {
    symbol: 'NINE',
    name: 'Nine Energy Service Inc'
  },
  {
    symbol: 'NIO',
    name: 'NIO Inc'
  },
  {
    symbol: 'NISN',
    name: 'NiSun International Enterprise Development Group Co Ltd - Class A'
  },
  {
    symbol: 'NIU',
    name: 'Niu Technologies'
  },
  {
    symbol: 'NJR',
    name: 'New Jersey Resources Corporation'
  },
  {
    symbol: 'NKE',
    name: 'Nike Inc - Class B'
  },
  {
    symbol: 'NKLA',
    name: 'Nikola Corporation'
  },
  {
    symbol: 'NKSH',
    name: 'National Bankshares Inc'
  },
  {
    symbol: 'NKTR',
    name: 'Nektar Therapeutics'
  },
  {
    symbol: 'NKTX',
    name: 'Nkarta Inc'
  },
  {
    symbol: 'NL',
    name: 'NL Industries Inc'
  },
  {
    symbol: 'NLIT',
    name: 'Northern Lights Acquisition Corp - Class A'
  },
  {
    symbol: 'NLITU',
    name: 'Northern Lights Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'NLITW',
    name: 'Northern Lights Acquisition Corp - Warrants (01/11/2027)'
  },
  {
    symbol: 'NLOK',
    name: 'NortonLifeLock Inc'
  },
  {
    symbol: 'NLS',
    name: 'Nautilus Inc'
  },
  {
    symbol: 'NLSN',
    name: 'Nielsen Holdings plc'
  },
  {
    symbol: 'NLSP',
    name: 'NLS Pharmaceutics Ltd'
  },
  {
    symbol: 'NLSPW',
    name: 'NLS Pharmaceutics Ltd - Warrants (25/09/2025)'
  },
  {
    symbol: 'NLTX',
    name: 'Neoleukin Therapeutics Inc'
  },
  {
    symbol: 'NLY',
    name: 'Annaly Capital Management Inc'
  },
  {
    symbol: 'NLY-P-F',
    name: 'Annaly Capital Management Inc 695 Series F'
  },
  {
    symbol: 'NLY-P-G',
    name: 'Annaly Capital Management Inc 650 Series G FixedtoFloating Rate Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'NLY-P-I',
    name: 'Annaly Capital Management Inc FXDFR PRF PERPETUAL USD 25 Ser I'
  },
  {
    symbol: 'NM',
    name: 'Navios Maritime Holdings Inc'
  },
  {
    symbol: 'NMAI',
    name: 'Nuveen Multi-Asset Income Fund'
  },
  {
    symbol: 'NMCO',
    name: 'Nuveen Municipal Credit Opportunities Fund'
  },
  {
    symbol: 'NMFC',
    name: 'New Mountain Finance Corp'
  },
  {
    symbol: 'NMG',
    name: 'Nouveau Monde Graphite Inc'
  },
  {
    symbol: 'NMIH',
    name: 'NMI Holdings Inc - Class A'
  },
  {
    symbol: 'NMK-P-B',
    name: 'Niagara Mohawk Power Corp'
  },
  {
    symbol: 'NMK-P-C',
    name: 'Niagara Mohawk Power Corp'
  },
  {
    symbol: 'NMM',
    name: 'Navios Maritime Partners L.P.'
  },
  {
    symbol: 'NMMC',
    name: 'North Mountain Merger Corp - Class A'
  },
  {
    symbol: 'NMMCU',
    name: 'North Mountain Merger Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'NMMCW',
    name: 'North Mountain Merger Corp - Warrants (16/09/2025)'
  },
  {
    symbol: 'NMPRG',
    name: 'Navios Maritime Holdings Inc'
  },
  {
    symbol: 'NMPRH',
    name: 'Navios Maritime Holdings Inc'
  },
  {
    symbol: 'NMR',
    name: 'Nomura Holdings Inc'
  },
  {
    symbol: 'NMRD',
    name: 'Nemaura Medical Inc'
  },
  {
    symbol: 'NMRK',
    name: 'Newmark Group Inc - Class A'
  },
  {
    symbol: 'NMTC',
    name: 'NeuroOne Medical Technologies Corp'
  },
  {
    symbol: 'NMTR',
    name: '9 Meters Biopharma Inc'
  },
  {
    symbol: 'NN',
    name: 'NextNav Inc'
  },
  {
    symbol: 'NNAVW',
    name: 'NextNav Inc - Warrants (28/10/2026)'
  },
  {
    symbol: 'NNBR',
    name: 'NN Inc'
  },
  {
    symbol: 'NNDM',
    name: 'Nano Dimension Ltd'
  },
  {
    symbol: 'NNI',
    name: 'Nelnet Inc - Class A'
  },
  {
    symbol: 'NNN',
    name: 'National Retail Properties Inc'
  },
  {
    symbol: 'NNOX',
    name: 'Nano X Imaging Ltd'
  },
  {
    symbol: 'NNVC',
    name: 'NanoViricides Inc'
  },
  {
    symbol: 'NOA',
    name: 'North American Construction Group Ltd'
  },
  {
    symbol: 'NOAC',
    name: 'Natural Order Acquisition Corp'
  },
  {
    symbol: 'NOACU',
    name: 'Natural Order Acquisition Corp - Units (1 Ord & 1 War)'
  },
  {
    symbol: 'NOACW',
    name: 'Natural Order Acquisition Corp - Warrants (15/09/2025)'
  },
  {
    symbol: 'NOAH',
    name: 'Noah Holdings Ltd'
  },
  {
    symbol: 'NOC',
    name: 'Northrop Grumman Corp'
  },
  {
    symbol: 'NODK',
    name: 'NI Holdings Inc'
  },
  {
    symbol: 'NOG',
    name: 'Northern Oil and Gas Inc'
  },
  {
    symbol: 'NOK',
    name: 'Nokia Corp'
  },
  {
    symbol: 'NOMD',
    name: 'Nomad Foods Ltd'
  },
  {
    symbol: 'NOTV',
    name: 'Inotiv Inc'
  },
  {
    symbol: 'NOV',
    name: 'NOV Inc'
  },
  {
    symbol: 'NOVA',
    name: 'Sunnova Energy International Inc'
  },
  {
    symbol: 'NOVN',
    name: 'Novan Inc'
  },
  {
    symbol: 'NOVT',
    name: 'Novanta Inc'
  },
  {
    symbol: 'NOVV',
    name: 'Nova Vision Acquisition Corp'
  },
  {
    symbol: 'NOVVR',
    name: 'Nova Vision Acquisition Corp'
  },
  {
    symbol: 'NOVVU',
    name: 'Nova Vision Acquisition Corp - Unit (1 Ordinary share 1 Wrt & 1 Rts)'
  },
  {
    symbol: 'NOVVW',
    name: 'Nova Vision Acquisition Corp - Warrants (31/12/2028)'
  },
  {
    symbol: 'NOW',
    name: 'ServiceNow Inc'
  },
  {
    symbol: 'NP',
    name: 'Neenah Inc'
  },
  {
    symbol: 'NPAB',
    name: 'New Providence Acquisition Corp II - Class A'
  },
  {
    symbol: 'NPABU',
    name: 'New Providence Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'NPABW',
    name: 'New Providence Acquisition Corp II - Warrants - (04/11/2026)'
  },
  {
    symbol: 'NPCE',
    name: 'NeuroPace Inc'
  },
  {
    symbol: 'NPCT',
    name: 'Nuveen Core Plus Impact Fund'
  },
  {
    symbol: 'NPFD',
    name: 'Nuveen Variable Rate Preferred & Income Fund'
  },
  {
    symbol: 'NPK',
    name: 'National Presto Industries Inc'
  },
  {
    symbol: 'NPO',
    name: 'EnPro Industries Inc'
  },
  {
    symbol: 'NPTN',
    name: 'NeoPhotonics Corporation'
  },
  {
    symbol: 'NR',
    name: 'Newpark Resources Inc'
  },
  {
    symbol: 'NRAC',
    name: 'Noble Rock Acquisition Corp - Class A'
  },
  {
    symbol: 'NRACU',
    name: 'Noble Rock Acquisition Corp - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'NRACW',
    name: 'Noble Rock Acquisition Corp - Warrants (31/01/2028)'
  },
  {
    symbol: 'NRBO',
    name: 'NeuroBo Pharmaceuticals Inc'
  },
  {
    symbol: 'NRC',
    name: 'National Research Corp'
  },
  {
    symbol: 'NRDS',
    name: 'Nerdwallet Inc - Class A'
  },
  {
    symbol: 'NRDY',
    name: 'Nerdy Inc - Class A'
  },
  {
    symbol: 'NRDY-WS',
    name: 'Nerdy Inc Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50 per share'
  },
  {
    symbol: 'NREF',
    name: 'NexPoint Real Estate Finance Inc'
  },
  {
    symbol: 'NREF-P-A',
    name: 'NexPoint Real Estate Finance Inc'
  },
  {
    symbol: 'NRG',
    name: 'NRG Energy Inc'
  },
  {
    symbol: 'NRGD',
    name: 'Bank of Montreal'
  },
  {
    symbol: 'NRGU',
    name: 'Bank of Montreal'
  },
  {
    symbol: 'NRGV',
    name: 'Energy Vault Holdings Inc'
  },
  {
    symbol: 'NRGV-WS',
    name: 'Energy Vault Holdings Inc Wt Exp 01112027'
  },
  {
    symbol: 'NRGX',
    name: 'PIMCO Energy and Tactical Credit Opportunities Fund'
  },
  {
    symbol: 'NRIM',
    name: 'Northrim Bancorp Inc'
  },
  {
    symbol: 'NRIX',
    name: 'Nurix Therapeutics Inc'
  },
  {
    symbol: 'NRP',
    name: 'Natural Resource Partners LP'
  },
  {
    symbol: 'NRSN',
    name: 'NeuroSense Therapeutics Ltd'
  },
  {
    symbol: 'NRSNW',
    name: 'NeuroSense Therapeutics Ltd - Warrants (09/11/2026)'
  },
  {
    symbol: 'NRT',
    name: 'North European Oil Royalty Trust'
  },
  {
    symbol: 'NRUC',
    name: 'National Rural Utilities Coop Finance Corp'
  },
  {
    symbol: 'NRXP',
    name: 'NRX Pharmaceuticals Inc'
  },
  {
    symbol: 'NRXPW',
    name: 'NRX Pharmaceuticals Inc - Warrants (24/05/2026)'
  },
  {
    symbol: 'NRZ',
    name: 'New Residential Investment Corp'
  },
  {
    symbol: 'NRZ-P-A',
    name: 'New Residential Investment Corp FXDFR PRF PERPETUAL USD 25 Ser A'
  },
  {
    symbol: 'NRZ-P-B',
    name: 'New Residential Investment Corp'
  },
  {
    symbol: 'NRZ-P-C',
    name: 'New Residential Investment Corp'
  },
  {
    symbol: 'NRZ-P-D',
    name: 'New Residential Investment Corp'
  },
  {
    symbol: 'NS',
    name: 'Nustar Energy L P'
  },
  {
    symbol: 'NS-P-A',
    name: 'Nustar Energy LP 850 Series A FixedtoFloating Rate Cumulative Redeemable Perpetual Preferred Units'
  },
  {
    symbol: 'NS-P-B',
    name: 'Nustar Energy LP 7625 Series B FixedtoFloating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests'
  },
  {
    symbol: 'NS-P-C',
    name: 'Nustar Energy LP 900 Series C FixedtoFloating Rate Cumulative Redeemable Perpetual Preferred Units'
  },
  {
    symbol: 'NSA',
    name: 'National Storage Affiliates Trust'
  },
  {
    symbol: 'NSA-P-A',
    name: 'National Storage Affiliates Trust'
  },
  {
    symbol: 'NSC',
    name: 'Norfolk Southern Corp'
  },
  {
    symbol: 'NSIT',
    name: 'Insight Enterprises Inc'
  },
  {
    symbol: 'NSP',
    name: 'Insperity Inc'
  },
  {
    symbol: 'NSPR',
    name: 'InspireMD Inc'
  },
  {
    symbol: 'NSR',
    name: 'Nomad Royalty Company Ltd'
  },
  {
    symbol: 'NSS',
    name: 'NuStar Logistics LP'
  },
  {
    symbol: 'NSSC',
    name: 'NAPCO Security Technologies Inc'
  },
  {
    symbol: 'NSTB',
    name: 'Northern Star Investment Corp II - Class A'
  },
  {
    symbol: 'NSTB-U',
    name: 'Northern Star Investment Corp II - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'NSTB-WS',
    name: 'Northern Star Investment Corp II - Warrants (31/01/2028)'
  },
  {
    symbol: 'NSTC',
    name: 'Northern Star Investment Corp III - Class A'
  },
  {
    symbol: 'NSTC-U',
    name: 'Northern Star Investment Corp III - Units (1 Ord Share Class A & 1/6 War)'
  },
  {
    symbol: 'NSTC-WS',
    name: 'Northern Star Investment Corp III - Warrants (01/01/9999)'
  },
  {
    symbol: 'NSTD',
    name: 'Northern Star Investment Corp IV - Class A'
  },
  {
    symbol: 'NSTD-U',
    name: 'Northern Star Investment Corp IV - Units (1 Ord Share Class A & 1/6 War)'
  },
  {
    symbol: 'NSTD-WS',
    name: 'Northern Star Investment Corp IV - Warrants (01/01/9999)'
  },
  {
    symbol: 'NSTG',
    name: 'Nanostring Technologies Inc'
  },
  {
    symbol: 'NSTS',
    name: 'NSTS Bancorp Inc'
  },
  {
    symbol: 'NSYS',
    name: 'Nortech Systems Inc'
  },
  {
    symbol: 'NTAP',
    name: 'Netapp Inc'
  },
  {
    symbol: 'NTB',
    name: 'Bank of N T Butterfield & Son Ltd'
  },
  {
    symbol: 'NTCO',
    name: 'Natura &Co Holding S.A.'
  },
  {
    symbol: 'NTCT',
    name: 'Netscout Systems Inc'
  },
  {
    symbol: 'NTES',
    name: 'NetEase Inc'
  },
  {
    symbol: 'NTEST',
    name: 'NTEST'
  },
  {
    symbol: 'NTEST-A',
    name: 'NTESTA'
  },
  {
    symbol: 'NTEST-B',
    name: 'NTESTB'
  },
  {
    symbol: 'NTEST-C',
    name: 'NTESTC'
  },
  {
    symbol: 'NTEST-G',
    name: ''
  },
  {
    symbol: 'NTEST-H',
    name: ''
  },
  {
    symbol: 'NTEST-I',
    name: ''
  },
  {
    symbol: 'NTEST-J',
    name: ''
  },
  {
    symbol: 'NTEST-K',
    name: ''
  },
  {
    symbol: 'NTEST-L',
    name: ''
  },
  {
    symbol: 'NTEST-M',
    name: ''
  },
  {
    symbol: 'NTEST-N',
    name: ''
  },
  {
    symbol: 'NTEST-O',
    name: ''
  },
  {
    symbol: 'NTEST-P',
    name: ''
  },
  {
    symbol: 'NTEST-Q',
    name: ''
  },
  {
    symbol: 'NTEST-Y',
    name: ''
  },
  {
    symbol: 'NTEST-Z',
    name: ''
  },
  {
    symbol: 'NTGR',
    name: 'Netgear Inc'
  },
  {
    symbol: 'NTIC',
    name: 'Northern Technologies International Corp'
  },
  {
    symbol: 'NTIP',
    name: 'Network-1 Technologies Inc'
  },
  {
    symbol: 'NTLA',
    name: 'Intellia Therapeutics Inc'
  },
  {
    symbol: 'NTNX',
    name: 'Nutanix Inc - Class A'
  },
  {
    symbol: 'NTP',
    name: 'Nam Tai Property Inc'
  },
  {
    symbol: 'NTR',
    name: 'Nutrien Ltd'
  },
  {
    symbol: 'NTRA',
    name: 'Natera Inc'
  },
  {
    symbol: 'NTRB',
    name: 'Nutriband Inc'
  },
  {
    symbol: 'NTRBW',
    name: 'Nutriband Inc - Warrants (30/09/2026)'
  },
  {
    symbol: 'NTRS',
    name: 'Northern Trust Corp'
  },
  {
    symbol: 'NTRSO',
    name: 'Northern Trust Corp. PRF PERPETUAL USD DpSh Rp11000th Sr E'
  },
  {
    symbol: 'NTRSP',
    name: 'Northern Trust Corp'
  },
  {
    symbol: 'NTST',
    name: 'Netstreit Corp'
  },
  {
    symbol: 'NTUS',
    name: 'Natus Medical Inc'
  },
  {
    symbol: 'NTWK',
    name: 'Netsol Technologies Inc'
  },
  {
    symbol: 'NTZ',
    name: 'Natuzzi S.P.A.'
  },
  {
    symbol: 'NU',
    name: 'Nu Holdings Ltd Class A'
  },
  {
    symbol: 'NUBI',
    name: 'Nubia Brand International Corp - Class A'
  },
  {
    symbol: 'NUBIU',
    name: 'Nubia Brand International Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'NUBIW',
    name: 'Nubia Brand International Corp - Warrants(16/11/2026)'
  },
  {
    symbol: 'NUE',
    name: 'Nucor Corp'
  },
  {
    symbol: 'NURO',
    name: 'Neurometrix Inc'
  },
  {
    symbol: 'NUS',
    name: 'Nu Skin Enterprises Inc - Class A'
  },
  {
    symbol: 'NUTX',
    name: 'Nutex Health Inc'
  },
  {
    symbol: 'NUVA',
    name: 'Nuvasive Inc'
  },
  {
    symbol: 'NUVB',
    name: 'Nuvation Bio Inc - Class A'
  },
  {
    symbol: 'NUVB-WS',
    name: 'Nuvation Bio Inc - Warrants (07/07/2027)'
  },
  {
    symbol: 'NUVL',
    name: 'Nuvalent Inc - Class A'
  },
  {
    symbol: 'NUWE',
    name: 'Nuwellis Inc'
  },
  {
    symbol: 'NUZE',
    name: 'Nuzee Inc'
  },
  {
    symbol: 'NVAC',
    name: 'NorthView Acquisition Corp'
  },
  {
    symbol: 'NVACR',
    name: 'NorthView Acquisition Corp'
  },
  {
    symbol: 'NVACW',
    name: 'NorthView Acquisition Corp - Warrants (02/08/2027)'
  },
  {
    symbol: 'NVAX',
    name: 'Novavax Inc'
  },
  {
    symbol: 'NVCN',
    name: 'Neovasc Inc'
  },
  {
    symbol: 'NVCR',
    name: 'NovoCure Ltd'
  },
  {
    symbol: 'NVCT',
    name: 'Nuvectis Pharma Inc'
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corp'
  },
  {
    symbol: 'NVEC',
    name: 'NVE Corp'
  },
  {
    symbol: 'NVEE',
    name: 'NV5 Global Inc'
  },
  {
    symbol: 'NVEI',
    name: 'Nuvei Corporation (Sub Voting)'
  },
  {
    symbol: 'NVFY',
    name: 'Nova Lifestyle Inc'
  },
  {
    symbol: 'NVGS',
    name: 'Navigator Holdings Ltd'
  },
  {
    symbol: 'NVIV',
    name: 'InVivo Therapeutics Holdings Corp'
  },
  {
    symbol: 'NVMI',
    name: 'Nova Ltd'
  },
  {
    symbol: 'NVNO',
    name: 'enVVeno Medical Corporation'
  },
  {
    symbol: 'NVNOW',
    name: 'enVVeno Medical Corporation - Warrants (30/05/2023)'
  },
  {
    symbol: 'NVO',
    name: 'Novo Nordisk'
  },
  {
    symbol: 'NVOS',
    name: 'Novo Integrated Sciences Inc'
  },
  {
    symbol: 'NVR',
    name: 'NVR Inc'
  },
  {
    symbol: 'NVRO',
    name: 'Nevro Corp'
  },
  {
    symbol: 'NVS',
    name: 'Novartis AG'
  },
  {
    symbol: 'NVSA',
    name: 'New Vista Acquisition Corp - Class A'
  },
  {
    symbol: 'NVSAU',
    name: 'New Vista Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'NVSAW',
    name: 'New Vista Acquisition Corp - Warrants (01/02/2026)'
  },
  {
    symbol: 'NVST',
    name: 'Envista Holdings Corp'
  },
  {
    symbol: 'NVT',
    name: 'nVent Electric plc'
  },
  {
    symbol: 'NVTA',
    name: 'Invitae Corp'
  },
  {
    symbol: 'NVTS',
    name: 'Navitas Semiconductor Corp'
  },
  {
    symbol: 'NVVE',
    name: 'Nuvve Holding Corp'
  },
  {
    symbol: 'NVVEW',
    name: 'Nuvve Holding Corp - Warrants (19/03/2026)'
  },
  {
    symbol: 'NVX',
    name: 'Novonix Ltd'
  },
  {
    symbol: 'NWBI',
    name: 'Northwest Bancshares Inc'
  },
  {
    symbol: 'NWE',
    name: 'Northwestern Corp'
  },
  {
    symbol: 'NWFL',
    name: 'Norwood Financial Corp'
  },
  {
    symbol: 'NWG',
    name: 'NatWest Group Plc'
  },
  {
    symbol: 'NWL',
    name: 'Newell Brands Inc'
  },
  {
    symbol: 'NWLI',
    name: 'National Western Life Group Inc - Class A'
  },
  {
    symbol: 'NWN',
    name: 'Northwest Natural Holding Company'
  },
  {
    symbol: 'NWPX',
    name: 'Northwest Pipe Company'
  },
  {
    symbol: 'NWS',
    name: 'News Corp - Class B'
  },
  {
    symbol: 'NWSA',
    name: 'News Corp - Class A'
  },
  {
    symbol: 'NX',
    name: 'Quanex Building Products Corp'
  },
  {
    symbol: 'NXDT',
    name: 'NexPoint Diversified Real Estate Trust'
  },
  {
    symbol: 'NXDT-P-A',
    name: 'NexPoint Diversified Real Estate Trust'
  },
  {
    symbol: 'NXE',
    name: 'NexGen Energy Ltd'
  },
  {
    symbol: 'NXGL',
    name: 'Nexgel Inc'
  },
  {
    symbol: 'NXGLW',
    name: 'Nexgel Inc - Warrants (17/12/2026)'
  },
  {
    symbol: 'NXGN',
    name: 'NextGen Healthcare Inc'
  },
  {
    symbol: 'NXMD',
    name: 'Nexeon MedSystems Inc'
  },
  {
    symbol: 'NXPI',
    name: 'NXP Semiconductors NV'
  },
  {
    symbol: 'NXPL',
    name: 'NextPlat Corp'
  },
  {
    symbol: 'NXPLW',
    name: 'NextPlat Corp - Warrants (29/04/2026)'
  },
  {
    symbol: 'NXRT',
    name: 'NexPoint Residential Trust Inc'
  },
  {
    symbol: 'NXST',
    name: 'Nexstar Media Group Inc - Class A'
  },
  {
    symbol: 'NXTC',
    name: 'Nextcure Inc'
  },
  {
    symbol: 'NXTP',
    name: 'NextPlay Technologies Inc'
  },
  {
    symbol: 'NYC',
    name: 'New York City REIT Inc - Class A'
  },
  {
    symbol: 'NYCB',
    name: 'New York Community Bancorp Inc'
  },
  {
    symbol: 'NYCB-P-A',
    name: 'New York Community Bancorp Inc'
  },
  {
    symbol: 'NYCB-P-U',
    name: 'New York Community Bancorp Inc Capital Tr V BONUSES'
  },
  {
    symbol: 'NYMT',
    name: 'New York Mortgage Trust Inc'
  },
  {
    symbol: 'NYMTL',
    name: 'New York Mortgage Trust Inc'
  },
  {
    symbol: 'NYMTM',
    name: 'New York Mortgage Trust Inc'
  },
  {
    symbol: 'NYMTN',
    name: 'New York Mortgage Trust Inc'
  },
  {
    symbol: 'NYMTZ',
    name: 'New York Mortgage Trust Inc'
  },
  {
    symbol: 'NYMX',
    name: 'Nymox Pharmaceutical Corp'
  },
  {
    symbol: 'NYT',
    name: 'New York Times Co. - Class A'
  },
  {
    symbol: 'NYXH',
    name: 'Nyxoah SA'
  },
  {
    symbol: 'O',
    name: 'Realty Income Corp'
  },
  {
    symbol: 'OAC-U',
    name: 'Oaktree Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'OAK-P-A',
    name: 'Oaktree Capital Group LLC'
  },
  {
    symbol: 'OAK-P-B',
    name: 'Oaktree Capital Group LLC'
  },
  {
    symbol: 'OB',
    name: 'Outbrain Inc'
  },
  {
    symbol: 'OBCI',
    name: 'Ocean Bio-Chem Inc'
  },
  {
    symbol: 'OBE',
    name: 'Obsidian Energy Ltd'
  },
  {
    symbol: 'OBLG',
    name: 'Oblong Inc'
  },
  {
    symbol: 'OBNK',
    name: 'Origin Bancorp Inc'
  },
  {
    symbol: 'OBSV',
    name: 'ObsEva SA.'
  },
  {
    symbol: 'OBT',
    name: 'Orange County Bancorp Inc'
  },
  {
    symbol: 'OC',
    name: 'Owens Corning'
  },
  {
    symbol: 'OCAX',
    name: 'OCA Acquisition Corp - Class A'
  },
  {
    symbol: 'OCAXU',
    name: 'OCA Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'OCAXW',
    name: 'OCA Acquisition Corp - Warrants (14/01/2026)'
  },
  {
    symbol: 'OCC',
    name: 'Optical Cable Corp'
  },
  {
    symbol: 'OCCI',
    name: 'OFS Credit Company Inc'
  },
  {
    symbol: 'OCCIN',
    name: 'OFS Credit Company Inc'
  },
  {
    symbol: 'OCCIO',
    name: 'OFS Credit Company Inc'
  },
  {
    symbol: 'OCDX',
    name: 'Ortho Clinical Diagnostics Holdings plc'
  },
  {
    symbol: 'OCFC',
    name: 'OceanFirst Financial Corp'
  },
  {
    symbol: 'OCFCP',
    name: 'OceanFirst Financial Corp. FXDFR PRF PERPETUAL USD 25 Ser A'
  },
  {
    symbol: 'OCFT',
    name: 'Oneconnect Financial Technology Co Ltd'
  },
  {
    symbol: 'OCG',
    name: 'Oriental Culture Holding Ltd'
  },
  {
    symbol: 'OCGN',
    name: 'Ocugen Inc'
  },
  {
    symbol: 'OCN',
    name: 'Ocwen Financial Corp'
  },
  {
    symbol: 'OCSL',
    name: 'Oaktree Specialty Lending Corp'
  },
  {
    symbol: 'OCSLL',
    name: 'Oaktree Specialty Lending Corporation 6125 senior notes due 2028'
  },
  {
    symbol: 'OCUL',
    name: 'Ocular Therapeutix Inc'
  },
  {
    symbol: 'OCUP',
    name: 'Ocuphire Pharma Inc'
  },
  {
    symbol: 'OCX',
    name: 'Oncocyte Corporation'
  },
  {
    symbol: 'ODC',
    name: 'Oil-Dri Corp Of America'
  },
  {
    symbol: 'ODFL',
    name: 'Old Dominion Freight Line Inc'
  },
  {
    symbol: 'ODP',
    name: 'ODP Corporation (The)'
  },
  {
    symbol: 'ODTC',
    name: 'Odonate Therapeutics Inc'
  },
  {
    symbol: 'ODV',
    name: 'Osisko Development Corp'
  },
  {
    symbol: 'OEC',
    name: 'Orion Engineered Carbons S.A.'
  },
  {
    symbol: 'OEG',
    name: 'Orbital Energy Group Inc'
  },
  {
    symbol: 'OEPW',
    name: 'One Equity Partners Open Water I Corp - Class A'
  },
  {
    symbol: 'OEPWU',
    name: 'One Equity Partners Open Water I Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'OEPWW',
    name: 'One Equity Partners Open Water I Corp - Warrants (14/01/2026)'
  },
  {
    symbol: 'OESX',
    name: 'Orion Energy Systems Inc'
  },
  {
    symbol: 'OFC',
    name: 'Corporate Office Properties Trust'
  },
  {
    symbol: 'OFED',
    name: 'Oconee Federal Financial Corp'
  },
  {
    symbol: 'OFG',
    name: 'OFG Bancorp'
  },
  {
    symbol: 'OFIX',
    name: 'Orthofix Medical Inc'
  },
  {
    symbol: 'OFLX',
    name: 'Omega Flex Inc'
  },
  {
    symbol: 'OFS',
    name: 'OFS Capital Corp'
  },
  {
    symbol: 'OFSSH',
    name: 'OFS Capital Corp'
  },
  {
    symbol: 'OG',
    name: 'Onion Global Ltd'
  },
  {
    symbol: 'OGCP',
    name: 'Empire State Realty OP LP'
  },
  {
    symbol: 'OGE',
    name: 'Oge Energy Corp'
  },
  {
    symbol: 'OGEN',
    name: 'Oragenics Inc'
  },
  {
    symbol: 'OGI',
    name: 'OrganiGram Holdings Inc'
  },
  {
    symbol: 'OGN',
    name: 'Organon & Company'
  },
  {
    symbol: 'OGN-W',
    name: 'Organon & Co. When Issued'
  },
  {
    symbol: 'OGS',
    name: 'ONE Gas Inc'
  },
  {
    symbol: 'OHAA',
    name: 'OPY Acquisition Corp I - Class A'
  },
  {
    symbol: 'OHAAU',
    name: 'OPY Acquisition Corp I - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'OHAAW',
    name: 'OPY Acquisition Corp I - Warrants (22/09/2026)'
  },
  {
    symbol: 'OHI',
    name: 'Omega Healthcare Investors Inc'
  },
  {
    symbol: 'OHPA',
    name: 'Orion Acquisition Corp - Class A'
  },
  {
    symbol: 'OHPAU',
    name: 'Orion Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'OHPAW',
    name: 'Orion Acquisition Corp - Warrants (19/02/2026)'
  },
  {
    symbol: 'OI',
    name: 'O-I Glass Inc'
  },
  {
    symbol: 'OII',
    name: 'Oceaneering International Inc'
  },
  {
    symbol: 'OIIM',
    name: 'O2 Micro International'
  },
  {
    symbol: 'OIL',
    name: 'iPath Pure Beta Crude Oil ETN'
  },
  {
    symbol: 'OIS',
    name: 'Oil States International Inc'
  },
  {
    symbol: 'OKE',
    name: 'Oneok Inc'
  },
  {
    symbol: 'OKTA',
    name: 'Okta Inc - Class A'
  },
  {
    symbol: 'OKYO',
    name: 'OKYO Pharma Ltd'
  },
  {
    symbol: 'OLB',
    name: 'OLB Group Inc'
  },
  {
    symbol: 'OLED',
    name: 'Universal Display Corp'
  },
  {
    symbol: 'OLIT',
    name: 'OmniLit Acquisition Corp - Class A'
  },
  {
    symbol: 'OLITU',
    name: 'OmniLit Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'OLITW',
    name: 'OmniLit Acquisition Corp - Warrants (08/11/2026)'
  },
  {
    symbol: 'OLK',
    name: 'Olink Holding AB (publ)'
  },
  {
    symbol: 'OLLI',
    name: 'Ollies Bargain Outlet Holdings Inc'
  },
  {
    symbol: 'OLMA',
    name: 'Olema Pharmaceuticals Inc'
  },
  {
    symbol: 'OLN',
    name: 'Olin Corp'
  },
  {
    symbol: 'OLO',
    name: 'Olo Inc - Class A'
  },
  {
    symbol: 'OLP',
    name: 'One Liberty Properties Inc'
  },
  {
    symbol: 'OLPX',
    name: 'Olaplex Holdings Inc'
  },
  {
    symbol: 'OM',
    name: 'Outset Medical Inc'
  },
  {
    symbol: 'OMAB',
    name: 'Grupo Aeroportuario del Centro Norte S.A.B de C.V.'
  },
  {
    symbol: 'OMC',
    name: 'Omnicom Group Inc'
  },
  {
    symbol: 'OMCL',
    name: 'Omnicell Inc'
  },
  {
    symbol: 'OMEG',
    name: 'Omega Alpha SPAC - Class A'
  },
  {
    symbol: 'OMER',
    name: 'Omeros Corporation'
  },
  {
    symbol: 'OMEX',
    name: 'Odyssey Marine Exploration Inc'
  },
  {
    symbol: 'OMF',
    name: 'OneMain Holdings Inc'
  },
  {
    symbol: 'OMGA',
    name: 'Omega Therapeutics Inc'
  },
  {
    symbol: 'OMI',
    name: 'Owens & Minor Inc'
  },
  {
    symbol: 'OMIC',
    name: 'Singular Genomics Systems Inc'
  },
  {
    symbol: 'OMQS',
    name: 'OMNIQ Corp'
  },
  {
    symbol: 'ON',
    name: 'ON Semiconductor Corp'
  },
  {
    symbol: 'ONB',
    name: 'Old National Bancorp'
  },
  {
    symbol: 'ONBPO',
    name: 'Old National Bancorp'
  },
  {
    symbol: 'ONBPP',
    name: 'Old National Bancorp'
  },
  {
    symbol: 'ONCR',
    name: 'Oncorus Inc'
  },
  {
    symbol: 'ONCS',
    name: 'OncoSec Medical Inc'
  },
  {
    symbol: 'ONCT',
    name: 'Oncternal Therapeutics Inc'
  },
  {
    symbol: 'ONCY',
    name: 'Oncolytics Biotech Inc'
  },
  {
    symbol: 'ONDS',
    name: 'Ondas Holdings Inc'
  },
  {
    symbol: 'ONEM',
    name: '1life Healthcare Inc'
  },
  {
    symbol: 'ONEW',
    name: 'Onewater Marine Inc - Class A'
  },
  {
    symbol: 'ONL',
    name: 'Orion Office REIT Inc'
  },
  {
    symbol: 'ONL-W',
    name: 'Orion Office REIT Inc WhenIssued'
  },
  {
    symbol: 'ONON',
    name: 'On Holding AG Class A'
  },
  {
    symbol: 'ONTF',
    name: 'ON24 Inc'
  },
  {
    symbol: 'ONTO',
    name: 'Onto Innovation Inc'
  },
  {
    symbol: 'ONTX',
    name: 'Onconova Therapeutics Inc'
  },
  {
    symbol: 'ONVO',
    name: 'Organovo Holdings Inc'
  },
  {
    symbol: 'ONYX',
    name: 'Onyx Acquisition Co I - Class A'
  },
  {
    symbol: 'ONYXU',
    name: 'Onyx Acquisition Co I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ONYXW',
    name: 'Onyx Acquisition Co I - Warrants (30/11/2028)'
  },
  {
    symbol: 'OOMA',
    name: 'Ooma Inc'
  },
  {
    symbol: 'OP',
    name: 'OceanPal Inc'
  },
  {
    symbol: 'OPA',
    name: 'Magnum Opus Acquisition Ltd - Class A'
  },
  {
    symbol: 'OPA-U',
    name: 'Magnum Opus Acquisition Ltd - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'OPA-WS',
    name: 'Magnum Opus Acquisition Ltd - Warrants (06/03/2026)'
  },
  {
    symbol: 'OPAD',
    name: 'Offerpad Solutions Inc - Class A'
  },
  {
    symbol: 'OPAD-WS',
    name: 'Offerpad Solutions Inc - Warrants (16/10/2025)'
  },
  {
    symbol: 'OPBK',
    name: 'OP Bancorp'
  },
  {
    symbol: 'OPCH',
    name: 'Option Care Health Inc'
  },
  {
    symbol: 'OPEN',
    name: 'Opendoor Technologies Inc'
  },
  {
    symbol: 'OPFI',
    name: 'OppFi Inc - Class A'
  },
  {
    symbol: 'OPFI-WS',
    name: 'OppFi Inc - Warrants (20/07/2026)'
  },
  {
    symbol: 'OPGN',
    name: 'Opgen Inc'
  },
  {
    symbol: 'OPHC',
    name: 'Optimumbank Holdings Inc'
  },
  {
    symbol: 'OPI',
    name: 'Office Properties Income Trust'
  },
  {
    symbol: 'OPINL',
    name: 'Office Properties Income Trust'
  },
  {
    symbol: 'OPK',
    name: 'Opko Health Inc'
  },
  {
    symbol: 'OPNT',
    name: 'Opiant Pharmaceuticals Inc'
  },
  {
    symbol: 'OPOF',
    name: 'Old Point Financial Corp'
  },
  {
    symbol: 'OPP-P-A',
    name: 'RiverNorth/DoubleLine Strategic opportunity fund Inc'
  },
  {
    symbol: 'OPP-P-B',
    name: 'RiverNorth/DoubleLine Strategic opportunity fund Inc'
  },
  {
    symbol: 'OPP-R-W',
    name: 'RiverNorthDoubleLine Strategic Opportunity Fund Inc Rights expiring October 1 2020'
  },
  {
    symbol: 'OPRA',
    name: 'Opera Ltd'
  },
  {
    symbol: 'OPRT',
    name: 'Oportun Financial Corp'
  },
  {
    symbol: 'OPRX',
    name: 'OptimizeRx Corp'
  },
  {
    symbol: 'OPT',
    name: 'Opthea Ltd'
  },
  {
    symbol: 'OPTN',
    name: 'OptiNose Inc'
  },
  {
    symbol: 'OPTT',
    name: 'Ocean Power Technologies - Reg S'
  },
  {
    symbol: 'OPY',
    name: 'Oppenheimer Holdings Inc - Class A'
  },
  {
    symbol: 'OR',
    name: 'Osisko Gold Royalties Ltd'
  },
  {
    symbol: 'ORA',
    name: 'Ormat Technologies Inc'
  },
  {
    symbol: 'ORAN',
    name: 'Orange.'
  },
  {
    symbol: 'ORC',
    name: 'Orchid Island Capital Inc'
  },
  {
    symbol: 'ORCC',
    name: 'Owl Rock Capital Corp'
  },
  {
    symbol: 'ORCL',
    name: 'Oracle Corp'
  },
  {
    symbol: 'ORGN',
    name: 'Origin Materials Inc'
  },
  {
    symbol: 'ORGNW',
    name: 'Origin Materials Inc - Warrants (23/06/2026)'
  },
  {
    symbol: 'ORGO',
    name: 'Organogenesis Holdings Inc - Class A'
  },
  {
    symbol: 'ORGS',
    name: 'Orgenesis Inc'
  },
  {
    symbol: 'ORI',
    name: 'Old Republic International Corp'
  },
  {
    symbol: 'ORIA',
    name: 'Orion Biotech Opportunities Corp - Class A'
  },
  {
    symbol: 'ORIAU',
    name: 'Orion Biotech Opportunities Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'ORIAW',
    name: 'Orion Biotech Opportunities Corp - Warrants (15/04/2025)'
  },
  {
    symbol: 'ORIC',
    name: 'ORIC Pharmaceuticals Inc'
  },
  {
    symbol: 'ORLA',
    name: 'Orla Mining Ltd'
  },
  {
    symbol: 'ORLY',
    name: 'O`Reilly Automotive Inc'
  },
  {
    symbol: 'ORMP',
    name: 'Oramed Pharmaceuticals Inc'
  },
  {
    symbol: 'ORN',
    name: 'Orion Group Holdings Inc'
  },
  {
    symbol: 'ORRF',
    name: 'Orrstown Financial Services Inc'
  },
  {
    symbol: 'ORTX',
    name: 'Orchard Therapeutics plc'
  },
  {
    symbol: 'OSBC',
    name: 'Old Second Bancorporation Inc'
  },
  {
    symbol: 'OSCR',
    name: 'Oscar Health Inc - Class A'
  },
  {
    symbol: 'OSG',
    name: 'Overseas Shipholding Group Inc - Class A'
  },
  {
    symbol: 'OSH',
    name: 'Oak Street Health Inc'
  },
  {
    symbol: 'OSI',
    name: 'Osiris Acquisition Corp - Class A'
  },
  {
    symbol: 'OSI-U',
    name: 'Osiris Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'OSI-WS',
    name: 'Osiris Acquisition Corp - Warrants (01/05/2028)'
  },
  {
    symbol: 'OSIS',
    name: 'OSI Systems Inc'
  },
  {
    symbol: 'OSK',
    name: 'Oshkosh Corp'
  },
  {
    symbol: 'OSLE',
    name: 'Oaktree Specialty Lending Corporation 5875 Senior Notes due 2024'
  },
  {
    symbol: 'OSLE-CL',
    name: ''
  },
  {
    symbol: 'OSPN',
    name: 'OneSpan Inc'
  },
  {
    symbol: 'OSS',
    name: 'One Stop Systems Inc'
  },
  {
    symbol: 'OST',
    name: 'Ostin Technology Group Co Ltd'
  },
  {
    symbol: 'OSTK',
    name: 'Overstock.com Inc'
  },
  {
    symbol: 'OSTR',
    name: 'Oyster Enterprises Acquisition Corp - Class A'
  },
  {
    symbol: 'OSTRU',
    name: 'Oyster Enterprises Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'OSTRW',
    name: 'Oyster Enterprises Acquisition Corp - Warrants (20/01/2026)'
  },
  {
    symbol: 'OSUR',
    name: 'Orasure Technologies Inc'
  },
  {
    symbol: 'OSW',
    name: 'OneSpaWorld Holdings Ltd'
  },
  {
    symbol: 'OTEC',
    name: 'OceanTech Acquisitions I Corp - Class A'
  },
  {
    symbol: 'OTECU',
    name: 'OceanTech Acquisitions I Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'OTECW',
    name: 'OceanTech Acquisitions I Corp - Warrants (12/05/2026)'
  },
  {
    symbol: 'OTEX',
    name: 'Open Text Corp'
  },
  {
    symbol: 'OTIC',
    name: 'Otonomy Inc'
  },
  {
    symbol: 'OTIS',
    name: 'Otis Worldwide Corp'
  },
  {
    symbol: 'OTLK',
    name: 'Outlook Therapeutics Inc'
  },
  {
    symbol: 'OTLY',
    name: 'Oatly Group AB'
  },
  {
    symbol: 'OTMO',
    name: 'Otonomo Technologies Ltd'
  },
  {
    symbol: 'OTMOW',
    name: 'Otonomo Technologies Ltd - Warrants (13/08/2026)'
  },
  {
    symbol: 'OTRK',
    name: 'Ontrak Inc'
  },
  {
    symbol: 'OTRKP',
    name: 'Ontrak Inc'
  },
  {
    symbol: 'OTTR',
    name: 'Otter Tail Corporation'
  },
  {
    symbol: 'OUST',
    name: 'Ouster Inc - Class A'
  },
  {
    symbol: 'OUST-WS',
    name: 'Ouster Inc - Warrants (31/08/2027)'
  },
  {
    symbol: 'OUT',
    name: 'Outfront Media Inc'
  },
  {
    symbol: 'OVBC',
    name: 'Ohio Valley Banc Corp'
  },
  {
    symbol: 'OVID',
    name: 'Ovid Therapeutics Inc'
  },
  {
    symbol: 'OVLY',
    name: 'Oak Valley Bancorp'
  },
  {
    symbol: 'OVV',
    name: 'Ovintiv Inc'
  },
  {
    symbol: 'OWL',
    name: 'Blue Owl Capital Inc - Class A'
  },
  {
    symbol: 'OWL-WS',
    name: 'Blue Owl Capital Inc Redeemable Warrants'
  },
  {
    symbol: 'OWLT',
    name: 'Owlet Inc - Class A'
  },
  {
    symbol: 'OWLT-WS',
    name: 'Owlet Inc - Warrants(14/09/2027)'
  },
  {
    symbol: 'OXAC',
    name: 'Oxbridge Acquisition Corp - Class A'
  },
  {
    symbol: 'OXACU',
    name: 'Oxbridge Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'OXACW',
    name: 'Oxbridge Acquisition Corp - Warrants (04/08/2026)'
  },
  {
    symbol: 'OXBR',
    name: 'Oxbridge Re Holdings Ltd'
  },
  {
    symbol: 'OXBRW',
    name: 'Oxbridge Re Holdings Ltd - Warrants (26/03/2024)'
  },
  {
    symbol: 'OXLCL',
    name: 'Oxford Lane Capital Corp'
  },
  {
    symbol: 'OXLCM',
    name: 'Oxford Lane Capital Corp'
  },
  {
    symbol: 'OXLCN',
    name: 'Oxford Lane Capital Corp'
  },
  {
    symbol: 'OXLCO',
    name: 'Oxford Lane Capital Corp'
  },
  {
    symbol: 'OXLCP',
    name: 'Oxford Lane Capital Corp'
  },
  {
    symbol: 'OXLCZ',
    name: 'Oxford Lane Capital Corp'
  },
  {
    symbol: 'OXM',
    name: 'Oxford Industries Inc'
  },
  {
    symbol: 'OXSQ',
    name: 'Oxford Square Capital Corp'
  },
  {
    symbol: 'OXSQG',
    name: 'Oxford Square Capital Corp'
  },
  {
    symbol: 'OXSQL',
    name: 'Oxford Square Capital Corp'
  },
  {
    symbol: 'OXSQZ',
    name: 'Oxford Square Capital Corp'
  },
  {
    symbol: 'OXUS',
    name: 'Oxus Acquisition Corp - Class A'
  },
  {
    symbol: 'OXUSU',
    name: 'Oxus Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'OXUSW',
    name: 'Oxus Acquisition Corp - Warrants (26/08/2026)'
  },
  {
    symbol: 'OXY',
    name: 'Occidental Petroleum Corp'
  },
  {
    symbol: 'OXY-WS',
    name: 'Occidental Petroleum Corp - Warrants (03/08/2027)'
  },
  {
    symbol: 'OXY-WS-W',
    name: 'Occidental Petroleum Corporation Warrants When Issued'
  },
  {
    symbol: 'OXY-WSW',
    name: 'Occidental Petroleum Corporation Warrants When Issued'
  },
  {
    symbol: 'OYST',
    name: 'Oyster Point Pharma Inc'
  },
  {
    symbol: 'OZ',
    name: 'Belpointe REIT Inc'
  },
  {
    symbol: 'OZK',
    name: 'Bank OZK'
  },
  {
    symbol: 'OZKAP',
    name: 'Bank OZK'
  },
  {
    symbol: 'OZON',
    name: 'Ozon Holdings PLC'
  },
  {
    symbol: 'PAA',
    name: 'Plains All American Pipeline LP'
  },
  {
    symbol: 'PAACR',
    name: 'Pacific Special Acquisition Corp Rt'
  },
  {
    symbol: 'PAACW',
    name: 'PAACW'
  },
  {
    symbol: 'PAAS',
    name: 'Pan American Silver Corp'
  },
  {
    symbol: 'PAC',
    name: 'Grupo Aeroportuario Del Pacifico SAB de CV'
  },
  {
    symbol: 'PACB',
    name: 'Pacific Biosciences of California Inc'
  },
  {
    symbol: 'PACI',
    name: 'PROOF Acquisition Corp I - Class A'
  },
  {
    symbol: 'PACI-U',
    name: 'PROOF Acquisition Corp I Units each consisting of one share of Class A common stock 0.0001 par value and onehalf of one redeemable warrant'
  },
  {
    symbol: 'PACI-WS',
    name: 'PROOF Acquisition Corp I - Warrants (01/01/9999)'
  },
  {
    symbol: 'PACK',
    name: 'Ranpak Holdings Corp - Class A'
  },
  {
    symbol: 'PACW',
    name: 'Pacwest Bancorp'
  },
  {
    symbol: 'PACX',
    name: 'Pioneer Merger Corp - Class A'
  },
  {
    symbol: 'PACXU',
    name: 'Pioneer Merger Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PACXW',
    name: 'Pioneer Merger Corp - Warrants(07/01/2026)'
  },
  {
    symbol: 'PAFO',
    name: 'Pacifico Acquisition Corp'
  },
  {
    symbol: 'PAFOR',
    name: 'Pacifico Acquisition Corp'
  },
  {
    symbol: 'PAFOU',
    name: 'Pacifico Acquisition Corp - Units (1 Ord Share & 1 Right)'
  },
  {
    symbol: 'PAG',
    name: 'Penske Automotive Group Inc'
  },
  {
    symbol: 'PAGP',
    name: 'Plains GP Holdings LP - Class A'
  },
  {
    symbol: 'PAGS',
    name: 'PagSeguro Digital Ltd - Class A'
  },
  {
    symbol: 'PAHC',
    name: 'Phibro Animal Health Corp - Class A'
  },
  {
    symbol: 'PALI',
    name: 'Palisade Bio Inc'
  },
  {
    symbol: 'PALT',
    name: 'Paltalk Inc'
  },
  {
    symbol: 'PANA',
    name: 'Panacea Acquisition Corp II - Class A'
  },
  {
    symbol: 'PANL',
    name: 'Pangaea Logistics Solutions Ltd'
  },
  {
    symbol: 'PANW',
    name: 'Palo Alto Networks Inc'
  },
  {
    symbol: 'PAQC',
    name: 'Provident Acquisition Corp - Class A'
  },
  {
    symbol: 'PAQCU',
    name: 'Provident Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'PAQCW',
    name: 'Provident Acquisition Corp - Warrants (08/01/2026)'
  },
  {
    symbol: 'PAR',
    name: 'Par Technology Corp'
  },
  {
    symbol: 'PARA',
    name: 'Paramount Global - Class B'
  },
  {
    symbol: 'PARAA',
    name: 'Paramount Global - Class A'
  },
  {
    symbol: 'PARAP',
    name: 'Paramount Global Conv Pfd'
  },
  {
    symbol: 'PARR',
    name: 'Par Pacific Holdings Inc'
  },
  {
    symbol: 'PASG',
    name: 'Passage Bio Inc'
  },
  {
    symbol: 'PATH',
    name: 'UiPath Inc - Class A'
  },
  {
    symbol: 'PATI',
    name: 'Patriot Transportation Holding Inc'
  },
  {
    symbol: 'PATK',
    name: 'Patrick Industries Inc'
  },
  {
    symbol: 'PAVM',
    name: 'PAVmed Inc'
  },
  {
    symbol: 'PAVMZ',
    name: 'PAVmed Inc - Warrants - Series Z (30/04/2024)'
  },
  {
    symbol: 'PAX',
    name: 'Patria Investments Ltd - Class A'
  },
  {
    symbol: 'PAXS',
    name: 'PIMCO Access Income Fund'
  },
  {
    symbol: 'PAY',
    name: 'Paymentus Holdings Inc - Class A'
  },
  {
    symbol: 'PAYA',
    name: 'Paya Holdings Inc - Class A'
  },
  {
    symbol: 'PAYC',
    name: 'Paycom Software Inc'
  },
  {
    symbol: 'PAYO',
    name: 'Payoneer Global Inc'
  },
  {
    symbol: 'PAYOW',
    name: 'Payoneer Global Inc - Warrants (25/06/2026)'
  },
  {
    symbol: 'PAYS',
    name: 'PaySign Inc'
  },
  {
    symbol: 'PAYX',
    name: 'Paychex Inc'
  },
  {
    symbol: 'PB',
    name: 'Prosperity Bancshares Inc'
  },
  {
    symbol: 'PBA',
    name: 'Pembina Pipeline Corporation'
  },
  {
    symbol: 'PBAX',
    name: 'Phoenix Biotech Acquisition Corp - Class A'
  },
  {
    symbol: 'PBAXU',
    name: 'Phoenix Biotech Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'PBAXW',
    name: 'Phoenix Biotech Acquisition Corp - Warrants (01/09/2026)'
  },
  {
    symbol: 'PBBK',
    name: 'PB Bankshares Inc'
  },
  {
    symbol: 'PBF',
    name: 'PBF Energy Inc - Class A'
  },
  {
    symbol: 'PBFS',
    name: 'Pioneer Bancorp Inc'
  },
  {
    symbol: 'PBFX',
    name: 'Pbf Logistics Lp'
  },
  {
    symbol: 'PBH',
    name: 'Prestige Consumer Healthcare Inc'
  },
  {
    symbol: 'PBHC',
    name: 'Pathfinder Bancorp Inc'
  },
  {
    symbol: 'PBI',
    name: 'Pitney Bowes Inc'
  },
  {
    symbol: 'PBI-P-B',
    name: 'Pitney Bowes Inc 670 Notes Due 2043'
  },
  {
    symbol: 'PBLA',
    name: 'Panbela Therapeutics Inc'
  },
  {
    symbol: 'PBPB',
    name: 'Potbelly Corp'
  },
  {
    symbol: 'PBR',
    name: 'Petroleo Brasileiro S.A. Petrobras'
  },
  {
    symbol: 'PBR-A',
    name: 'Petroleo Brasileiro S.A. Petrobras'
  },
  {
    symbol: 'PBT',
    name: 'Permian Basin Royalty Trust'
  },
  {
    symbol: 'PBTS',
    name: 'Powerbridge Technologies Co Ltd'
  },
  {
    symbol: 'PBUG',
    name: 'Barclays Bank PLC'
  },
  {
    symbol: 'PBYI',
    name: 'Puma Biotechnology Inc'
  },
  {
    symbol: 'PCAR',
    name: 'Paccar Inc'
  },
  {
    symbol: 'PCB',
    name: 'PCB Bancorp.'
  },
  {
    symbol: 'PCCT',
    name: 'Perception Capital Corp II - Class A'
  },
  {
    symbol: 'PCCTU',
    name: 'Perception Capital Corp II - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'PCCTW',
    name: 'Perception Capital Corp II - Warrants (25/10/2026)'
  },
  {
    symbol: 'PCG',
    name: 'PG&E Corp'
  },
  {
    symbol: 'PCG-P-A',
    name: 'Pacific Gas & Electric Company'
  },
  {
    symbol: 'PCG-P-B',
    name: 'Pacific Gas & Electric Company'
  },
  {
    symbol: 'PCG-P-C',
    name: 'Pacific Gas & Electric Company'
  },
  {
    symbol: 'PCG-P-D',
    name: 'Pacific Gas & Electric Company'
  },
  {
    symbol: 'PCG-P-E',
    name: 'Pacific Gas & Electric Company'
  },
  {
    symbol: 'PCG-P-G',
    name: 'Pacific Gas & Electric Company'
  },
  {
    symbol: 'PCG-P-H',
    name: 'Pacific Gas & Electric Company'
  },
  {
    symbol: 'PCG-P-I',
    name: 'Pacific Gas & Electric Company'
  },
  {
    symbol: 'PCGU',
    name: 'PG&E Corp'
  },
  {
    symbol: 'PCH',
    name: 'PotlatchDeltic Corp'
  },
  {
    symbol: 'PCOR',
    name: 'Procore Technologies Inc'
  },
  {
    symbol: 'PCPC',
    name: 'Periphas Capital Partnering Corp - Class A'
  },
  {
    symbol: 'PCPC-U',
    name: 'Periphas Capital Partnering Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'PCPC-WS',
    name: 'Periphas Capital Partnering Corp - Warrants (10/12/2028)'
  },
  {
    symbol: 'PCPL-U',
    name: 'E2open Parent Holdings Inc - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PCRX',
    name: 'Pacira BioSciences Inc'
  },
  {
    symbol: 'PCSA',
    name: 'Processa Pharmaceuticals Inc'
  },
  {
    symbol: 'PCSB',
    name: 'PCSB Financial Corp'
  },
  {
    symbol: 'PCT',
    name: 'PureCycle Technologies Inc'
  },
  {
    symbol: 'PCTI',
    name: 'PCTEL Inc'
  },
  {
    symbol: 'PCTTU',
    name: 'PureCycle Technologies Inc - Units (1 Ord Class A & 3/4 War)'
  },
  {
    symbol: 'PCTTW',
    name: 'PureCycle Technologies Inc - Warrants (17/03/2026)'
  },
  {
    symbol: 'PCTY',
    name: 'Paylocity Holding Corp'
  },
  {
    symbol: 'PCVX',
    name: 'Vaxcyte Inc'
  },
  {
    symbol: 'PCX',
    name: 'Parsec Capital Acquisitions Corp - Class A'
  },
  {
    symbol: 'PCXCU',
    name: 'Parsec Capital Acquisitions Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'PCXCW',
    name: 'Parsec Capital Acquisitions Corp - Warrants (05/10/2026)'
  },
  {
    symbol: 'PCYG',
    name: 'Park City Group Inc'
  },
  {
    symbol: 'PCYO',
    name: 'Pure Cycle Corp'
  },
  {
    symbol: 'PD',
    name: 'Pagerduty Inc'
  },
  {
    symbol: 'PDCE',
    name: 'PDC Energy Inc'
  },
  {
    symbol: 'PDCO',
    name: 'Patterson Companies Inc'
  },
  {
    symbol: 'PDD',
    name: 'Pinduoduo Inc'
  },
  {
    symbol: 'PDEX',
    name: 'Pro-Dex Inc (co)'
  },
  {
    symbol: 'PDFS',
    name: 'PDF Solutions Inc'
  },
  {
    symbol: 'PDLB',
    name: 'Ponce Financial Group Inc'
  },
  {
    symbol: 'PDM',
    name: 'Piedmont Office Realty Trust Inc - Class A'
  },
  {
    symbol: 'PDO',
    name: 'PIMCO Dynamic Income Opportunities Fund'
  },
  {
    symbol: 'PDOT',
    name: 'Peridot Acquisition Corp II - Class A'
  },
  {
    symbol: 'PDOT-U',
    name: 'Peridot Acquisition Corp II - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'PDOT-WS',
    name: 'Peridot Acquisition Corp II - Warrants (30/04/2028)'
  },
  {
    symbol: 'PDS',
    name: 'Precision Drilling Corp'
  },
  {
    symbol: 'PDSB',
    name: 'PDS Biotechnology Corporation'
  },
  {
    symbol: 'PEAK',
    name: 'Healthpeak Properties Inc'
  },
  {
    symbol: 'PEAR',
    name: 'Pear Therapeutics Inc - Class A'
  },
  {
    symbol: 'PEARW',
    name: 'Pear Therapeutics Inc - Warrants (01/12/2026)'
  },
  {
    symbol: 'PEB',
    name: 'Pebblebrook Hotel Trust'
  },
  {
    symbol: 'PEB-P-E',
    name: 'Pebblebrook Hotel Trust 6375 PRF PERPETUAL USD Ser E'
  },
  {
    symbol: 'PEB-P-F',
    name: 'Pebblebrook Hotel Trust 630 PRF PERPETUAL USD Ser F'
  },
  {
    symbol: 'PEB-P-G',
    name: 'Pebblebrook Hotel Trust'
  },
  {
    symbol: 'PEB-P-H',
    name: 'Pebblebrook Hotel Trust'
  },
  {
    symbol: 'PEBK',
    name: 'Peoples Bancorp Of North Carolina Inc'
  },
  {
    symbol: 'PEBO',
    name: 'Peoples Bancorp Inc (Marietta OH)'
  },
  {
    symbol: 'PECO',
    name: 'Phillips Edison & Company Inc - New'
  },
  {
    symbol: 'PED',
    name: 'PEDEVCO Corp'
  },
  {
    symbol: 'PEG',
    name: 'Public Service Enterprise Group Inc'
  },
  {
    symbol: 'PEGA',
    name: 'Pegasystems Inc'
  },
  {
    symbol: 'PEGR',
    name: 'Project Energy Reimagined Acquisition Corp - Class A'
  },
  {
    symbol: 'PEGRU',
    name: 'Project Energy Reimagined Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'PEGRW',
    name: 'Project Energy Reimagined Acquisition Corp - Warrants (28/10/2026)'
  },
  {
    symbol: 'PEGY',
    name: 'Pineapple Energy Inc'
  },
  {
    symbol: 'PEI',
    name: 'Pennsylvania Real Estate Investment Trust'
  },
  {
    symbol: 'PEI-P-B',
    name: 'Pennsylvania Real Estate Investment Trust Cumulative Redeemable Perpetual Preferred Shares Series B'
  },
  {
    symbol: 'PEI-P-C',
    name: 'Pennsylvania Real Estate Investment Trust 720 Series C Cumulative Redeemable Perpetual Preferred Shares'
  },
  {
    symbol: 'PEI-P-D',
    name: 'Pennsylvania Real Estate Investment Trust 6875 Series D Cumulative Redeemable Perpetual Preferred Shares'
  },
  {
    symbol: 'PEN',
    name: 'Penumbra Inc'
  },
  {
    symbol: 'PENN',
    name: 'Penn National Gaming Inc'
  },
  {
    symbol: 'PEP',
    name: 'PepsiCo Inc'
  },
  {
    symbol: 'PEPG',
    name: 'PepGen Inc'
  },
  {
    symbol: 'PEPL',
    name: 'PepperLime Health Acquisition Corp - Class A'
  },
  {
    symbol: 'PEPLU',
    name: 'PepperLime Health Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'PEPLW',
    name: 'PepperLime Health Acquisition Corp - Warrants (01/10/2026)'
  },
  {
    symbol: 'PERI',
    name: 'Perion Network Ltd'
  },
  {
    symbol: 'PESI',
    name: 'Perma-Fix Environmental Services Inc'
  },
  {
    symbol: 'PETQ',
    name: 'PetIQ Inc - Class A'
  },
  {
    symbol: 'PETS',
    name: 'Petmed Express Inc'
  },
  {
    symbol: 'PETV',
    name: 'PetVivo Holdings Inc'
  },
  {
    symbol: 'PETVW',
    name: 'PetVivo Holdings Inc - Warrants (15/04/2026)'
  },
  {
    symbol: 'PETZ',
    name: 'TDH Holdings Inc'
  },
  {
    symbol: 'PEV',
    name: 'Phoenix Motor Inc'
  },
  {
    symbol: 'PFBC',
    name: 'Preferred Bank'
  },
  {
    symbol: 'PFC',
    name: 'Premier Financial Corp'
  },
  {
    symbol: 'PFDR',
    name: 'Pathfinder Acquisition Corp - Class A'
  },
  {
    symbol: 'PFDRU',
    name: 'Pathfinder Acquisition Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'PFDRW',
    name: 'Pathfinder Acquisition Corp - Warrants (17/02/2026)'
  },
  {
    symbol: 'PFE',
    name: 'Pfizer Inc'
  },
  {
    symbol: 'PFE-W',
    name: 'Pfizer Inc ExDistribution When Issued'
  },
  {
    symbol: 'PFG',
    name: 'Principal Financial Group Inc'
  },
  {
    symbol: 'PFGC',
    name: 'Performance Food Group Company'
  },
  {
    symbol: 'PFH',
    name: 'Prudential Financial Inc'
  },
  {
    symbol: 'PFHC',
    name: 'ProFrac Holding Corp Class A'
  },
  {
    symbol: 'PFHD',
    name: 'Professional Holding Corp - Class A'
  },
  {
    symbol: 'PFIE',
    name: 'Profire Energy Inc'
  },
  {
    symbol: 'PFIN',
    name: 'P & F Industries Inc - Class A'
  },
  {
    symbol: 'PFIS',
    name: 'Peoples Financial Services Corp'
  },
  {
    symbol: 'PFLT',
    name: 'PennantPark Floating Rate Capital Ltd'
  },
  {
    symbol: 'PFMT',
    name: 'Performant Financial Corp'
  },
  {
    symbol: 'PFS',
    name: 'Provident Financial Services Inc'
  },
  {
    symbol: 'PFSI',
    name: 'PennyMac Financial Services Inc'
  },
  {
    symbol: 'PFSW',
    name: 'PFSWEB Inc'
  },
  {
    symbol: 'PFTA',
    name: 'Portage Fintech Acquisition Corp - Class A'
  },
  {
    symbol: 'PFTAU',
    name: 'Portage Fintech Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PFTAW',
    name: 'Portage Fintech Acquisition Corp - Warrants (08/07/2026)'
  },
  {
    symbol: 'PFXNL',
    name: 'PhenixFIN Corp'
  },
  {
    symbol: 'PFXNZ',
    name: 'PhenixFIN Corp'
  },
  {
    symbol: 'PG',
    name: 'Procter & Gamble Company'
  },
  {
    symbol: 'PGC',
    name: 'Peapack-Gladstone Financial Corp'
  },
  {
    symbol: 'PGEN',
    name: 'Precigen Inc'
  },
  {
    symbol: 'PGNY',
    name: 'Progyny Inc'
  },
  {
    symbol: 'PGR',
    name: 'Progressive Corp'
  },
  {
    symbol: 'PGRE',
    name: 'Paramount Group Inc'
  },
  {
    symbol: 'PGRU',
    name: 'PropertyGuru Group Ltd'
  },
  {
    symbol: 'PGRW',
    name: 'Progress Acquisition Corp - Class A'
  },
  {
    symbol: 'PGRWU',
    name: 'Progress Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'PGRWW',
    name: 'Progress Acquisition Corp - Warrants (11/11/2027)'
  },
  {
    symbol: 'PGSS',
    name: 'Pegasus Digital Mobility Acquisition Corp - Class A'
  },
  {
    symbol: 'PGSS-U',
    name: 'Pegasus Digital Mobility Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'PGSS-WS',
    name: 'Pegasus Digital Mobility Acquisition Corp - Warrants(01/01/9999)'
  },
  {
    symbol: 'PGTI',
    name: 'PGT Innovations Inc'
  },
  {
    symbol: 'PGY',
    name: 'Pagaya Technologies Ltd - Class A'
  },
  {
    symbol: 'PGYWW',
    name: 'Pagaya Technologies Ltd - Warrants(01/09/2027)'
  },
  {
    symbol: 'PH',
    name: 'Parker-Hannifin Corp'
  },
  {
    symbol: 'PHAR',
    name: 'Pharming Group N.V.'
  },
  {
    symbol: 'PHAS',
    name: 'PhaseBio Pharmaceuticals Inc'
  },
  {
    symbol: 'PHAT',
    name: 'Phathom Pharmaceuticals Inc'
  },
  {
    symbol: 'PHCF',
    name: 'Puhui Wealth Investment Management Co Ltd'
  },
  {
    symbol: 'PHG',
    name: 'Koninklijke Philips N.V.'
  },
  {
    symbol: 'PHGE',
    name: 'BiomX Inc'
  },
  {
    symbol: 'PHGE-U',
    name: 'BiomX Inc - Units (1 Ord & 1 War)'
  },
  {
    symbol: 'PHGE-WS',
    name: 'BiomX Inc - Warrants (13/12/2023)'
  },
  {
    symbol: 'PHI',
    name: 'PLDT Inc'
  },
  {
    symbol: 'PHIC',
    name: 'Population Health Investment Co Inc - Class A'
  },
  {
    symbol: 'PHICU',
    name: 'Population Health Investment Co Inc - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PHICW',
    name: 'Population Health Investment Co Inc - Warrants (01/10/2025)'
  },
  {
    symbol: 'PHIO',
    name: 'Phio Pharmaceuticals Corp'
  },
  {
    symbol: 'PHM',
    name: 'PulteGroup Inc'
  },
  {
    symbol: 'PHR',
    name: 'Phreesia Inc'
  },
  {
    symbol: 'PHUN',
    name: 'Phunware Inc'
  },
  {
    symbol: 'PHUNW',
    name: 'Phunware Inc - Warrants (11/08/2021)'
  },
  {
    symbol: 'PHVS',
    name: 'Pharvaris NV'
  },
  {
    symbol: 'PHX',
    name: 'PHX Minerals Inc - Class A'
  },
  {
    symbol: 'PHYT',
    name: 'Pyrophyte Acquisition Corp - Class A'
  },
  {
    symbol: 'PHYT-U',
    name: 'Pyrophyte Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'PHYT-WS',
    name: 'Pyrophyte Acquisition Corp - Warrants(01/01/9999)'
  },
  {
    symbol: 'PI',
    name: 'Impinj Inc'
  },
  {
    symbol: 'PIAI',
    name: 'Prime Impact Acquisition I - Class A'
  },
  {
    symbol: 'PIAI-U',
    name: 'Prime Impact Acquisition I - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PIAI-WS',
    name: 'Prime Impact Acquisition I - Warrants (01/10/2030)'
  },
  {
    symbol: 'PIC-U',
    name: 'XL Fleet Corporation - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PICC',
    name: 'Pivotal Investment Corp III - Class A'
  },
  {
    symbol: 'PICC-U',
    name: 'Pivotal Investment Corp III - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'PICC-WS',
    name: 'Pivotal Investment Corp III - Warrants (28/01/2028)'
  },
  {
    symbol: 'PII',
    name: 'Polaris Inc'
  },
  {
    symbol: 'PIII',
    name: 'P3 Health Partners Inc - Class A'
  },
  {
    symbol: 'PIIIW',
    name: 'P3 Health Partners Inc - Warrants (19/11/2026)'
  },
  {
    symbol: 'PIK',
    name: 'Kidpik Corp'
  },
  {
    symbol: 'PINC',
    name: 'Premier Inc - Class A'
  },
  {
    symbol: 'PINE',
    name: 'Alpine Income Property Trust Inc'
  },
  {
    symbol: 'PING',
    name: 'Ping Identity Holding Corp'
  },
  {
    symbol: 'PINS',
    name: 'Pinterest Inc - Class A'
  },
  {
    symbol: 'PIPP',
    name: 'Pine Island Acquisition Corp - Class A'
  },
  {
    symbol: 'PIPP-U',
    name: 'Pine Island Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PIPP-WS',
    name: 'Pine Island Acquisition Corp Redeemable warrants each whole warrant exercisable for one share of Class A common stock at an exercise price of 11.50'
  },
  {
    symbol: 'PIPR',
    name: 'Piper Sandler Co`s'
  },
  {
    symbol: 'PIRS',
    name: 'Pieris Pharmaceuticals Inc'
  },
  {
    symbol: 'PIXY',
    name: 'ShiftPixy Inc'
  },
  {
    symbol: 'PIY',
    name: 'Preferred Plus Trust Ser CZN Preferred Plus Trust Ser CZN1 Tr Ctf 8375 Maturity 10012046'
  },
  {
    symbol: 'PJT',
    name: 'PJT Partners Inc - Class A'
  },
  {
    symbol: 'PK',
    name: 'Park Hotels & Resorts Inc'
  },
  {
    symbol: 'PKBK',
    name: 'Parke Bancorp Inc'
  },
  {
    symbol: 'PKD',
    name: 'Parker Drilling Company'
  },
  {
    symbol: 'PKE',
    name: 'Park Aerospace Corp'
  },
  {
    symbol: 'PKG',
    name: 'Packaging Corp Of America'
  },
  {
    symbol: 'PKI',
    name: 'Perkinelmer Inc'
  },
  {
    symbol: 'PKOH',
    name: 'Park-Ohio Holdings Corp'
  },
  {
    symbol: 'PKX',
    name: 'POSCO Holdings Inc'
  },
  {
    symbol: 'PL',
    name: 'Protective Life Corp'
  },
  {
    symbol: 'PL-WS',
    name: 'Planet Labs PBC - Warrants (06/12/2026)'
  },
  {
    symbol: 'PLAB',
    name: 'Photronics Inc'
  },
  {
    symbol: 'PLAG',
    name: 'Planet Green Holdings Corp'
  },
  {
    symbol: 'PLAO',
    name: 'Patria Latin American Opportunity Acquisition Corp - Class A'
  },
  {
    symbol: 'PLAOU',
    name: 'Patria Latin American Opportunity Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'PLAOW',
    name: 'Patria Latin American Opportunity Acquisition Corp - Warrants (23/02/2027)'
  },
  {
    symbol: 'PLAY',
    name: 'Dave & Buster`s Entertainment Inc'
  },
  {
    symbol: 'PLBC',
    name: 'Plumas Bancorp.'
  },
  {
    symbol: 'PLCE',
    name: 'Childrens Place Inc'
  },
  {
    symbol: 'PLD',
    name: 'Prologis Inc'
  },
  {
    symbol: 'PLG',
    name: 'Platinum Group Metals Ltd'
  },
  {
    symbol: 'PLL',
    name: 'Piedmont Lithium Inc'
  },
  {
    symbol: 'PLM',
    name: 'Polymet Mining Corp'
  },
  {
    symbol: 'PLMI',
    name: 'Plum Acquisition Corp I - Class A'
  },
  {
    symbol: 'PLMIU',
    name: 'Plum Acquisition Corp I - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'PLMIW',
    name: 'Plum Acquisition Corp I - Warrants (15/03/2026)'
  },
  {
    symbol: 'PLMR',
    name: 'Palomar Holdings Inc'
  },
  {
    symbol: 'PLNT',
    name: 'Planet Fitness Inc - Class A'
  },
  {
    symbol: 'PLOW',
    name: 'Douglas Dynamics Inc'
  },
  {
    symbol: 'PLPC',
    name: 'Preformed Line Products Company'
  },
  {
    symbol: 'PLRX',
    name: 'Pliant Therapeutics Inc'
  },
  {
    symbol: 'PLSE',
    name: 'Pulse Biosciences Inc'
  },
  {
    symbol: 'PLTK',
    name: 'Playtika Holding Corp'
  },
  {
    symbol: 'PLTR',
    name: 'Palantir Technologies Inc - Class A'
  },
  {
    symbol: 'PLUG',
    name: 'Plug Power Inc'
  },
  {
    symbol: 'PLUS',
    name: 'ePlus Inc'
  },
  {
    symbol: 'PLX',
    name: 'Protalix BioTherapeutics Inc'
  },
  {
    symbol: 'PLXP',
    name: 'PLx Pharma Inc'
  },
  {
    symbol: 'PLXS',
    name: 'Plexus Corp'
  },
  {
    symbol: 'PLYA',
    name: 'Playa Hotels & Resorts N.V.'
  },
  {
    symbol: 'PLYM',
    name: 'Plymouth Industrial Reit Inc'
  },
  {
    symbol: 'PLYM-P-A',
    name: 'Plymouth Industrial REIT Inc 750 Series A Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'PM',
    name: 'Philip Morris International Inc'
  },
  {
    symbol: 'PMCB',
    name: 'PharmaCyte Biotech Inc'
  },
  {
    symbol: 'PMD',
    name: 'Psychemedics Corp'
  },
  {
    symbol: 'PME',
    name: 'Pingtan Marine Enterprise Ltd'
  },
  {
    symbol: 'PMGM',
    name: 'Priveterra Acquisition Corp - Class A'
  },
  {
    symbol: 'PMGMU',
    name: 'Priveterra Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PMGMW',
    name: 'Priveterra Acquisition Corp - Warrants (28/02/2028)'
  },
  {
    symbol: 'PMN',
    name: 'ProMIS Neurosciences Inc'
  },
  {
    symbol: 'PMT',
    name: 'Pennymac Mortgage Investment Trust'
  },
  {
    symbol: 'PMT-P-A',
    name: 'Pennymac Mortgage Investment Trust'
  },
  {
    symbol: 'PMT-P-B',
    name: 'Pennymac Mortgage Investment Trust'
  },
  {
    symbol: 'PMT-P-C',
    name: 'Pennymac Mortgage Investment Trust'
  },
  {
    symbol: 'PMTS',
    name: 'CPI Card Group Inc'
  },
  {
    symbol: 'PMVC',
    name: 'PMV Consumer Acquisition Corp - Class A'
  },
  {
    symbol: 'PMVC-U',
    name: 'PMV Consumer Acquisition Corp - Units (1 Ord share Class A & 1/2 War)'
  },
  {
    symbol: 'PMVC-WS',
    name: 'PMV Consumer Acquisition Corp - Warrants (31/08/2027)'
  },
  {
    symbol: 'PMVP',
    name: 'PMV Pharmaceuticals Inc'
  },
  {
    symbol: 'PNAC',
    name: 'Prime Number Acquisition I Corp - Class A'
  },
  {
    symbol: 'PNACR',
    name: 'Prime Number Acquisition I Corp'
  },
  {
    symbol: 'PNACU',
    name: 'Prime Number Acquisition I Corp - Units (1 Ord Class A 1/2 War & 1 Right)'
  },
  {
    symbol: 'PNACW',
    name: 'Prime Number Acquisition I Corp - Warrants(31/07/2027)'
  },
  {
    symbol: 'PNBK',
    name: 'Patriot National Bancorp Inc'
  },
  {
    symbol: 'PNC',
    name: 'PNC Financial Services Group Inc'
  },
  {
    symbol: 'PNC-P-P',
    name: 'PNC Financial Services Group Inc'
  },
  {
    symbol: 'PNFP',
    name: 'Pinnacle Financial Partners Inc'
  },
  {
    symbol: 'PNFPP',
    name: 'Pinnacle Financial Partners Inc'
  },
  {
    symbol: 'PNM',
    name: 'PNM Resources Inc'
  },
  {
    symbol: 'PNNT',
    name: 'PennantPark Investment Corporation'
  },
  {
    symbol: 'PNR',
    name: 'Pentair plc'
  },
  {
    symbol: 'PNRG',
    name: 'PrimeEnergy Resources Corp'
  },
  {
    symbol: 'PNT',
    name: 'POINT Biopharma Global Inc'
  },
  {
    symbol: 'PNTG',
    name: 'Pennant Group Inc'
  },
  {
    symbol: 'PNTM',
    name: 'Pontem Corp - Class A'
  },
  {
    symbol: 'PNTM-U',
    name: 'Pontem Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PNTM-WS',
    name: 'Pontem Corp - Warrants (05/01/2026)'
  },
  {
    symbol: 'PNW',
    name: 'Pinnacle West Capital Corp'
  },
  {
    symbol: 'POAI',
    name: 'Predictive Oncology Inc'
  },
  {
    symbol: 'PODD',
    name: 'Insulet Corporation'
  },
  {
    symbol: 'POET',
    name: 'POET Technologies Inc'
  },
  {
    symbol: 'POLA',
    name: 'Polar Power Inc'
  },
  {
    symbol: 'POLY',
    name: 'Plantronics Inc'
  },
  {
    symbol: 'POND',
    name: 'Angel Pond Holdings Corp - Class A'
  },
  {
    symbol: 'POND-U',
    name: 'Angel Pond Holdings Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'POND-WS',
    name: 'Angel Pond Holdings Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'PONO',
    name: 'PONO Capital Corp - Class A'
  },
  {
    symbol: 'PONOU',
    name: 'PONO Capital Corp - Units (1 Ord Share Class A & 3/4 War)'
  },
  {
    symbol: 'PONOW',
    name: 'PONO Capital Corp - Warrants(11/08/2026)'
  },
  {
    symbol: 'POOL',
    name: 'Pool Corporation'
  },
  {
    symbol: 'POPM',
    name: 'PopmailCom Inc'
  },
  {
    symbol: 'POR',
    name: 'Portland General Electric Company'
  },
  {
    symbol: 'PORT',
    name: 'Southport Acquisition Corp - Class A'
  },
  {
    symbol: 'PORT-U',
    name: 'Southport Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'PORT-WS',
    name: 'Southport Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'POSH',
    name: 'Poshmark Inc - Class A'
  },
  {
    symbol: 'POST',
    name: 'Post Holdings Inc'
  },
  {
    symbol: 'POST-W',
    name: 'Post Holdings Inc WhenIssued'
  },
  {
    symbol: 'POW',
    name: 'Powered Brands - Class A'
  },
  {
    symbol: 'POWI',
    name: 'Power Integrations Inc'
  },
  {
    symbol: 'POWL',
    name: 'Powell Industries Inc'
  },
  {
    symbol: 'POWRU',
    name: 'Powered Brands - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'POWRW',
    name: 'Powered Brands - Warrants (07/01/2025)'
  },
  {
    symbol: 'POWW',
    name: 'AMMO Inc'
  },
  {
    symbol: 'POWWP',
    name: 'AMMO Inc'
  },
  {
    symbol: 'PPBI',
    name: 'Pacific Premier Bancorp Inc'
  },
  {
    symbol: 'PPBT',
    name: 'Purple Biotech Ltd'
  },
  {
    symbol: 'PPC',
    name: 'Pilgrim`s Pride Corp'
  },
  {
    symbol: 'PPD',
    name: 'PPD Inc'
  },
  {
    symbol: 'PPG',
    name: 'PPG Industries Inc'
  },
  {
    symbol: 'PPHP',
    name: 'PHP Ventures Acquisition Corp - Class A'
  },
  {
    symbol: 'PPHPR',
    name: 'PHP Ventures Acquisition Corp'
  },
  {
    symbol: 'PPHPU',
    name: 'PHP Ventures Acquisition Corp - Units (1 Ord Class A & 1/2 War & 1 Right)'
  },
  {
    symbol: 'PPHPW',
    name: 'PHP Ventures Acquisition Corp - Warrants (01/01/2023)'
  },
  {
    symbol: 'PPIH',
    name: 'Perma-Pipe International Holdings Inc'
  },
  {
    symbol: 'PPL',
    name: 'PPL Corp'
  },
  {
    symbol: 'PPSI',
    name: 'Pioneer Power Solutions Inc'
  },
  {
    symbol: 'PPTA',
    name: 'Perpetua Resources Corp Com'
  },
  {
    symbol: 'PPYA',
    name: 'Papaya Growth Opportunity Corp I - Class A'
  },
  {
    symbol: 'PPYAU',
    name: 'Papaya Growth Opportunity Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'PPYAW',
    name: 'Papaya Growth Opportunity Corp I - Warrants (31/12/2028)'
  },
  {
    symbol: 'PRA',
    name: 'Proassurance Corporation'
  },
  {
    symbol: 'PRAA',
    name: 'PRA Group Inc'
  },
  {
    symbol: 'PRAX',
    name: 'Praxis Precision Medicines Inc'
  },
  {
    symbol: 'PRBM',
    name: 'Parabellum Acquisition Corp - Class A'
  },
  {
    symbol: 'PRBM-U',
    name: 'Parabellum Acquisition Corp - Units (1 Ord Share Class A & 3/4 War)'
  },
  {
    symbol: 'PRBM-WS',
    name: 'Parabellum Acquisition Corp - Warrants(01/01/9999)'
  },
  {
    symbol: 'PRCH',
    name: 'Porch Group Inc - Class A'
  },
  {
    symbol: 'PRCT',
    name: 'Procept BioRobotics Corp'
  },
  {
    symbol: 'PRDO',
    name: 'Perdoceo Education Corporation'
  },
  {
    symbol: 'PRDS',
    name: 'Pardes Biosciences Inc'
  },
  {
    symbol: 'PRE',
    name: 'Prenetics Global Ltd - Class A'
  },
  {
    symbol: 'PRE-P-J',
    name: 'PartnerRe Ltd 4.875 Fixed Rate NonCumulative Redeemable Preferred Shares Series J'
  },
  {
    symbol: 'PRENW',
    name: 'Prenetics Global Ltd - Warrants(17/05/2027)'
  },
  {
    symbol: 'PRFT',
    name: 'Perficient Inc'
  },
  {
    symbol: 'PRFX',
    name: 'PainReform Ltd'
  },
  {
    symbol: 'PRG',
    name: 'PROG Holdings Inc'
  },
  {
    symbol: 'PRG-W',
    name: 'PROG Holdings Inc ExDistribution When Issued'
  },
  {
    symbol: 'PRGO',
    name: 'Perrigo Company plc'
  },
  {
    symbol: 'PRGS',
    name: 'Progress Software Corp'
  },
  {
    symbol: 'PRI',
    name: 'Primerica Inc'
  },
  {
    symbol: 'PRIF-P-A',
    name: 'Priority Income Fund Inc 6375 Series A Term Preferred Stock due 2025'
  },
  {
    symbol: 'PRIF-P-D',
    name: 'Priority Income Fund Inc 700 Series D Term Preferred Stock due 2029'
  },
  {
    symbol: 'PRIF-P-F',
    name: ''
  },
  {
    symbol: 'PRIF-P-G',
    name: 'Priority Income Fund Inc'
  },
  {
    symbol: 'PRIF-P-H',
    name: 'Priority Income Fund Inc'
  },
  {
    symbol: 'PRIF-P-I',
    name: 'Priority Income Fund Inc'
  },
  {
    symbol: 'PRIF-P-J',
    name: 'Priority Income Fund Inc'
  },
  {
    symbol: 'PRIF-P-K',
    name: 'Priority Income Fund Inc'
  },
  {
    symbol: 'PRIF-P-L',
    name: 'Priority Income Fund Inc 6.375 Series L Term Preferred Stock Due 2029'
  },
  {
    symbol: 'PRIM',
    name: 'Primoris Services Corp'
  },
  {
    symbol: 'PRK',
    name: 'Park National Corp'
  },
  {
    symbol: 'PRLB',
    name: 'Proto Labs Inc'
  },
  {
    symbol: 'PRLD',
    name: 'Prelude Therapeutics Inc'
  },
  {
    symbol: 'PRLH',
    name: 'Pearl Holdings Acquisition Corp - Class A'
  },
  {
    symbol: 'PRLHU',
    name: 'Pearl Holdings Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'PRLHW',
    name: 'Pearl Holdings Acquisition Corp - Warrants (15/12/2026)'
  },
  {
    symbol: 'PRM',
    name: 'Perimeter Solutions SA'
  },
  {
    symbol: 'PRMW',
    name: 'Primo Water Corporation'
  },
  {
    symbol: 'PRO',
    name: 'Pros Holdings Inc'
  },
  {
    symbol: 'PROC',
    name: 'Procaps Group S.A'
  },
  {
    symbol: 'PROCW',
    name: 'Procaps Group S.A - Warrants (29/09/2026)'
  },
  {
    symbol: 'PROF',
    name: 'Profound Medical Corp'
  },
  {
    symbol: 'PROV',
    name: 'Provident Financial Holdings Inc'
  },
  {
    symbol: 'PRPB',
    name: 'CC Neuberger Principal Holdings II - Class A'
  },
  {
    symbol: 'PRPB-U',
    name: 'CC Neuberger Principal Holdings II - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'PRPB-WS',
    name: 'CC Neuberger Principal Holdings II - Warrants (29/07/2025)'
  },
  {
    symbol: 'PRPC',
    name: 'CC Neuberger Principal Holdings III - Class A'
  },
  {
    symbol: 'PRPC-U',
    name: 'CC Neuberger Principal Holdings III - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'PRPC-WS',
    name: 'CC Neuberger Principal Holdings III - Warrants (01/01/9999)'
  },
  {
    symbol: 'PRPH',
    name: 'ProPhase Labs Inc'
  },
  {
    symbol: 'PRPL',
    name: 'Purple Innovation Inc - Class A'
  },
  {
    symbol: 'PRPO',
    name: 'Precipio Inc'
  },
  {
    symbol: 'PRQR',
    name: 'ProQR Therapeutics N.V'
  },
  {
    symbol: 'PRS',
    name: 'Prudential Financial Inc'
  },
  {
    symbol: 'PRSO',
    name: 'Peraso Inc'
  },
  {
    symbol: 'PRSR',
    name: 'Prospector Capital Corp - Class A'
  },
  {
    symbol: 'PRSRU',
    name: 'Prospector Capital Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PRSRW',
    name: 'Prospector Capital Corp - Warrants (01/01/2025)'
  },
  {
    symbol: 'PRT',
    name: 'PermRock Royalty Trust'
  },
  {
    symbol: 'PRTA',
    name: 'Prothena Corporation plc'
  },
  {
    symbol: 'PRTC',
    name: 'PureTech Health Plc'
  },
  {
    symbol: 'PRTG',
    name: 'Portage Biotech Inc'
  },
  {
    symbol: 'PRTH',
    name: 'Priority Technology Holdings Inc'
  },
  {
    symbol: 'PRTK',
    name: 'Paratek Pharmaceuticals Inc'
  },
  {
    symbol: 'PRTS',
    name: 'CarParts.com Inc'
  },
  {
    symbol: 'PRTY',
    name: 'Party City Holdco Inc'
  },
  {
    symbol: 'PRU',
    name: 'Prudential Financial Inc'
  },
  {
    symbol: 'PRVA',
    name: 'Privia Health Group Inc'
  },
  {
    symbol: 'PRVB',
    name: 'Provention Bio Inc'
  },
  {
    symbol: 'PSA',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-A',
    name: 'Public Storage Depositary Shares Series A'
  },
  {
    symbol: 'PSA-P-F',
    name: 'Public Storage Depositary Shares Series F'
  },
  {
    symbol: 'PSA-P-G',
    name: 'Public Storage Depositary Shares Series G'
  },
  {
    symbol: 'PSA-P-H',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-I',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-J',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-K',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-L',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-M',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-N',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-O',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-P',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-Q',
    name: 'Public Storage Depositary Shares Series Q'
  },
  {
    symbol: 'PSA-P-R',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-S',
    name: 'Public Storage'
  },
  {
    symbol: 'PSA-P-V',
    name: 'Public Storage Dep Shs Repstg 11000th Pfd Sh Ben Int Ser V'
  },
  {
    symbol: 'PSA-P-V-CL',
    name: 'Public Storage Dep Shs Repstg 11000th Pfd Sh Ben Int Ser V'
  },
  {
    symbol: 'PSAG',
    name: 'Property Solutions Acquisition Corp II - Class A'
  },
  {
    symbol: 'PSAGU',
    name: 'Property Solutions Acquisition Corp II - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'PSAGW',
    name: 'Property Solutions Acquisition Corp II - Warrants (01/03/2026)'
  },
  {
    symbol: 'PSB',
    name: 'PS Business Parks Inc'
  },
  {
    symbol: 'PSB-P-U',
    name: 'PS Business Parks Inc Dep Shs Repstg 11000 Pfd Ser U'
  },
  {
    symbol: 'PSB-P-V',
    name: 'PS Business Parks Inc Depositary Shares Series V'
  },
  {
    symbol: 'PSB-P-X',
    name: 'PS Business Parks Inc'
  },
  {
    symbol: 'PSB-P-Y',
    name: 'PS Business Parks Inc'
  },
  {
    symbol: 'PSB-P-Z',
    name: 'PS Business Parks Inc'
  },
  {
    symbol: 'PSEC',
    name: 'Prospect Capital Corp'
  },
  {
    symbol: 'PSEC-P-A',
    name: 'Prospect Capital Corp'
  },
  {
    symbol: 'PSFE',
    name: 'Paysafe Ltd - Class A'
  },
  {
    symbol: 'PSFE-WS',
    name: 'Paysafe Ltd - Warrants (11/08/2025)'
  },
  {
    symbol: 'PSHG',
    name: 'Performance Shipping Inc'
  },
  {
    symbol: 'PSMT',
    name: 'Pricesmart Inc'
  },
  {
    symbol: 'PSN',
    name: 'Parsons Corp'
  },
  {
    symbol: 'PSNL',
    name: 'Personalis Inc'
  },
  {
    symbol: 'PSNY',
    name: 'Polestar Automotive Holding UK PLC'
  },
  {
    symbol: 'PSNYW',
    name: 'Polestar Automotive Holding UK PLC'
  },
  {
    symbol: 'PSO',
    name: 'Pearson plc'
  },
  {
    symbol: 'PSPC',
    name: 'Post Holdings Partnering Corp - Class A'
  },
  {
    symbol: 'PSPC-U',
    name: 'Post Holdings Partnering Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PSPC-WS',
    name: 'Post Holdings Partnering Corp - Warrants (12/04/2026)'
  },
  {
    symbol: 'PSTG',
    name: 'Pure Storage Inc - Class A'
  },
  {
    symbol: 'PSTH',
    name: 'Pershing Square Tontine Holdings Ltd - Class A'
  },
  {
    symbol: 'PSTH-WS',
    name: 'Pershing Square Tontine Holdings Ltd - Warrants (24/07/2025)'
  },
  {
    symbol: 'PSTI',
    name: 'Pluristem Therapeutics Inc'
  },
  {
    symbol: 'PSTL',
    name: 'Postal Realty Trust Inc Cls A'
  },
  {
    symbol: 'PSTV',
    name: 'Plus Therapeutics Inc'
  },
  {
    symbol: 'PSTX',
    name: 'Poseida Therapeutics Inc'
  },
  {
    symbol: 'PSX',
    name: 'Phillips 66'
  },
  {
    symbol: 'PT',
    name: 'Pintec Technology Holdings Ltd'
  },
  {
    symbol: 'PTA',
    name: 'Cohen & Steers Tax-Advantaged Preferred Securities & Income Fund'
  },
  {
    symbol: 'PTC',
    name: 'PTC Inc'
  },
  {
    symbol: 'PTCT',
    name: 'PTC Therapeutics Inc'
  },
  {
    symbol: 'PTE',
    name: 'PolarityTE Inc'
  },
  {
    symbol: 'PTEN',
    name: 'Patterson-UTI Energy Inc'
  },
  {
    symbol: 'PTEST',
    name: 'PTEST'
  },
  {
    symbol: 'PTEST-A',
    name: ''
  },
  {
    symbol: 'PTEST-W',
    name: ''
  },
  {
    symbol: 'PTEST-X',
    name: ''
  },
  {
    symbol: 'PTEST-Y',
    name: ''
  },
  {
    symbol: 'PTGX',
    name: 'Protagonist Therapeutics Inc'
  },
  {
    symbol: 'PTIC',
    name: 'PropTech Investment Corp II - Class A'
  },
  {
    symbol: 'PTICU',
    name: 'PropTech Investment Corp II - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'PTICW',
    name: 'PropTech Investment Corp II - Warrants (08/12/2027)'
  },
  {
    symbol: 'PTIX',
    name: 'Protagenic Therapeutics Inc'
  },
  {
    symbol: 'PTIXW',
    name: 'Protagenic Therapeutics Inc - Warrants (13/04/2025)'
  },
  {
    symbol: 'PTLO',
    name: 'Portillos Inc - Class A'
  },
  {
    symbol: 'PTMN',
    name: 'Portman Ridge Finance Corp'
  },
  {
    symbol: 'PTN',
    name: 'Palatin Technologies Inc'
  },
  {
    symbol: 'PTNR',
    name: 'Partner Communications Company'
  },
  {
    symbol: 'PTOC',
    name: 'Pine Technology Acquisition Corp - Class A'
  },
  {
    symbol: 'PTOCU',
    name: 'Pine Technology Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'PTOCW',
    name: 'Pine Technology Acquisition Corp - Warrants (31/03/2028)'
  },
  {
    symbol: 'PTON',
    name: 'Peloton Interactive Inc - Class A'
  },
  {
    symbol: 'PTPI',
    name: 'Petros Pharmaceuticals Inc'
  },
  {
    symbol: 'PTR',
    name: 'PetroChina Co. Ltd'
  },
  {
    symbol: 'PTRA',
    name: 'Proterra Inc'
  },
  {
    symbol: 'PTRS',
    name: 'Partners Bancorp'
  },
  {
    symbol: 'PTSI',
    name: 'P.A.M. Transportation Services Inc'
  },
  {
    symbol: 'PTVE',
    name: 'Pactiv Evergreen Inc'
  },
  {
    symbol: 'PUBM',
    name: 'PubMatic Inc - Class A'
  },
  {
    symbol: 'PUCK',
    name: 'Goal Acquisitions Corp'
  },
  {
    symbol: 'PUCKU',
    name: 'Goal Acquisitions Corp - Units (1 Ord & 1 War)'
  },
  {
    symbol: 'PUCKW',
    name: 'Goal Acquisitions Corp - Warrants (11/02/2026)'
  },
  {
    symbol: 'PUK',
    name: 'Prudential plc'
  },
  {
    symbol: 'PUK-P',
    name: ''
  },
  {
    symbol: 'PUK-W',
    name: 'Prudential Public Ltd Company American Depositary Shares Exdistribution Whenissued'
  },
  {
    symbol: 'PULM',
    name: 'Pulmatrix Inc'
  },
  {
    symbol: 'PUMP',
    name: 'ProPetro Holding Corp'
  },
  {
    symbol: 'PUYI',
    name: 'Puyi Inc'
  },
  {
    symbol: 'PV',
    name: 'Primavera Capital Acquisition Corporation - Class A'
  },
  {
    symbol: 'PV-U',
    name: 'Primavera Capital Acquisition Corporation - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'PV-WS',
    name: 'Primavera Capital Acquisition Corporation - Warrants (19/01/2026)'
  },
  {
    symbol: 'PVBC',
    name: 'Provident Bancorp Inc'
  },
  {
    symbol: 'PVH',
    name: 'PVH Corp'
  },
  {
    symbol: 'PVL',
    name: 'Permianville Royalty Trust'
  },
  {
    symbol: 'PVT',
    name: 'PROVIDENT COMPANIES INC'
  },
  {
    symbol: 'PVT-U',
    name: 'Pivotal Acquisition Corp Units each consisting of one share of Class A Common Stock and one redeemable Warrant'
  },
  {
    symbol: 'PVT-WS',
    name: 'Pivotal Acquisition Corp Redeemable Warrants exercisable for shares of Class A Common Stock at an exercise price of 1150 per share'
  },
  {
    symbol: 'PW',
    name: 'Power REIT'
  },
  {
    symbol: 'PW-P-A',
    name: 'Power REIT 775 Series A Cumulative Perpetual Preferred Stock'
  },
  {
    symbol: 'PWFL',
    name: 'PowerFleet Inc'
  },
  {
    symbol: 'PWOD',
    name: 'Penns Woods Bancorp Inc'
  },
  {
    symbol: 'PWP',
    name: 'Perella Weinberg Partners - Class A'
  },
  {
    symbol: 'PWPPW',
    name: 'Perella Weinberg Partners - Warrants (23/06/2026)'
  },
  {
    symbol: 'PWR',
    name: 'Quanta Services Inc'
  },
  {
    symbol: 'PWSC',
    name: 'PowerSchool Holdings Inc Class A'
  },
  {
    symbol: 'PWUP',
    name: 'PowerUp Acquisition Corp - Class A'
  },
  {
    symbol: 'PWUPU',
    name: 'PowerUp Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'PWUPW',
    name: 'PowerUp Acquisition Corp - Warrants (31/03/2028)'
  },
  {
    symbol: 'PX',
    name: 'P10 Inc - Class A'
  },
  {
    symbol: 'PXD',
    name: 'Pioneer Natural Resources Company'
  },
  {
    symbol: 'PXLW',
    name: 'Pixelworks Inc'
  },
  {
    symbol: 'PXS',
    name: 'Pyxis Tankers Inc'
  },
  {
    symbol: 'PXSAP',
    name: 'Pyxis Tankers Inc'
  },
  {
    symbol: 'PXSAW',
    name: 'Pyxis Tankers Inc - Warrants (19/08/2025)'
  },
  {
    symbol: 'PYCR',
    name: 'Paycor HCM Inc'
  },
  {
    symbol: 'PYPD',
    name: 'Polypid Ltd'
  },
  {
    symbol: 'PYPL',
    name: 'PayPal Holdings Inc'
  },
  {
    symbol: 'PYR',
    name: 'PyroGenesis Canada Inc'
  },
  {
    symbol: 'PYS',
    name: 'Pplus Trust Series RRD-1'
  },
  {
    symbol: 'PYT',
    name: 'PPLUS Trust Series GSC-2'
  },
  {
    symbol: 'PYXS',
    name: 'Pyxis Oncology Inc'
  },
  {
    symbol: 'PZG',
    name: 'Paramount Gold Nevada Corp'
  },
  {
    symbol: 'PZN',
    name: 'Pzena Investment Management Inc - Class A'
  },
  {
    symbol: 'PZZA',
    name: 'Papa John`s International Inc'
  },
  {
    symbol: 'QCOM',
    name: 'Qualcomm Inc'
  },
  {
    symbol: 'QCRH',
    name: 'QCR Holding Inc'
  },
  {
    symbol: 'QD',
    name: 'Qudian Inc'
  },
  {
    symbol: 'QDEL',
    name: 'QuidelOrtho Corporation'
  },
  {
    symbol: 'QFIN',
    name: '360 DigiTech Inc'
  },
  {
    symbol: 'QFTA',
    name: 'Quantum Fintech Acquisition Corp'
  },
  {
    symbol: 'QFTA-U',
    name: 'Quantum Fintech Acquisition Corp - Unit (1 Ordinary share & 1 Wrt)'
  },
  {
    symbol: 'QFTA-WS',
    name: 'Quantum Fintech Acquisition Corp - Warrants (30/01/2026)'
  },
  {
    symbol: 'QGEN',
    name: 'Qiagen NV'
  },
  {
    symbol: 'QH',
    name: 'Quhuo Ltd'
  },
  {
    symbol: 'QIPT',
    name: 'Quipt Home Medical Corp'
  },
  {
    symbol: 'QIWI',
    name: 'QIWI plc'
  },
  {
    symbol: 'QK',
    name: 'Q&K International Group Ltd'
  },
  {
    symbol: 'QLGN',
    name: 'Qualigen Therapeutics Inc'
  },
  {
    symbol: 'QLI',
    name: 'Qilian International Holding Group Ltd'
  },
  {
    symbol: 'QLV',
    name: 'FlexShares US Quality Low Volatility Index Fund'
  },
  {
    symbol: 'QLVD',
    name: 'FlexShares Developed Markets ex-US Quality Low Volatility Index Fund'
  },
  {
    symbol: 'QLVE',
    name: 'FLEXSHARES EMERGING MARKETS QUALITY LOW VOLATILITY INDEX FUND '
  },
  {
    symbol: 'QLYS',
    name: 'Qualys Inc'
  },
  {
    symbol: 'QMCO',
    name: 'Quantum Corp'
  },
  {
    symbol: 'QNGY',
    name: 'Quanergy Systems Inc'
  },
  {
    symbol: 'QNGY-WS',
    name: 'Quanergy Systems Inc - Warrants (17/01/2027)'
  },
  {
    symbol: 'QNRX',
    name: 'Quoin Pharmaceuticals Ltd'
  },
  {
    symbol: 'QNST',
    name: 'QuinStreet Inc'
  },
  {
    symbol: 'QRHC',
    name: 'Quest Resource Holding Corp'
  },
  {
    symbol: 'QRTAV',
    name: 'Qurate Retail Inc'
  },
  {
    symbol: 'QRTEA',
    name: 'Qurate Retail Inc - Series A'
  },
  {
    symbol: 'QRTEB',
    name: 'Qurate Retail Inc - Series B'
  },
  {
    symbol: 'QRTEP',
    name: 'Qurate Retail Inc'
  },
  {
    symbol: 'QRTEV',
    name: 'Qurate Retail Inc 8.0 Fixed Rate Cumulative Redeemable Preferred Stock When Issued'
  },
  {
    symbol: 'QRVO',
    name: 'Qorvo Inc'
  },
  {
    symbol: 'QS',
    name: 'QuantumScape Corp - Class A'
  },
  {
    symbol: 'QS-WS',
    name: 'QuantumScape Corp Wt Exp 2025'
  },
  {
    symbol: 'QSAM',
    name: 'QSAM Biosciences Inc'
  },
  {
    symbol: 'QSI',
    name: 'Quantum-Si Incorporated - Class A'
  },
  {
    symbol: 'QSIAW',
    name: 'Quantum-Si Incorporated - Warrants (10/06/2026)'
  },
  {
    symbol: 'QSR',
    name: 'Restaurant Brands International Inc'
  },
  {
    symbol: 'QTEK',
    name: 'QualTek Services Inc - Class A'
  },
  {
    symbol: 'QTEKW',
    name: 'QualTek Services Inc - Warrants (14/02/2027)'
  },
  {
    symbol: 'QTNT',
    name: 'Quotient Ltd'
  },
  {
    symbol: 'QTRX',
    name: 'Quanterix Corp'
  },
  {
    symbol: 'QTT',
    name: 'Qutoutiao Inc'
  },
  {
    symbol: 'QTWO',
    name: 'Q2 Holdings Inc'
  },
  {
    symbol: 'QUAD',
    name: 'Quad/Graphics Inc - Class A'
  },
  {
    symbol: 'QUBT',
    name: 'Quantum Computing Inc'
  },
  {
    symbol: 'QUIK',
    name: 'Quicklogic Corp'
  },
  {
    symbol: 'QULL',
    name: 'UBS AG London Branch'
  },
  {
    symbol: 'QUMU',
    name: 'Qumu Corp'
  },
  {
    symbol: 'QUOT',
    name: 'Quotient Technology Inc'
  },
  {
    symbol: 'QURE',
    name: 'uniQure N.V.'
  },
  {
    symbol: 'QVCC',
    name: 'QVC Inc'
  },
  {
    symbol: 'QVCD',
    name: 'QVC Inc'
  },
  {
    symbol: 'R',
    name: 'Ryder System Inc'
  },
  {
    symbol: 'RAAS',
    name: 'Cloopen Group Holding Ltd'
  },
  {
    symbol: 'RACB',
    name: 'Research Alliance Corp II - Class A'
  },
  {
    symbol: 'RACE',
    name: 'Ferrari N.V.'
  },
  {
    symbol: 'RACY',
    name: 'Relativity Acquisition Corp - Class A'
  },
  {
    symbol: 'RACYU',
    name: 'Relativity Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'RACYW',
    name: 'Relativity Acquisition Corp - Warrants(10/02/2027)'
  },
  {
    symbol: 'RAD',
    name: 'Rite Aid Corp'
  },
  {
    symbol: 'RADA',
    name: 'Rada Electronic Industries'
  },
  {
    symbol: 'RADI',
    name: 'Radius Global Infrastructure Inc - Class A'
  },
  {
    symbol: 'RAIL',
    name: 'FreightCar America Inc'
  },
  {
    symbol: 'RAIN',
    name: 'Rain Therapeutics Inc'
  },
  {
    symbol: 'RAM',
    name: 'Aries I Acquisition Corp - Class A'
  },
  {
    symbol: 'RAMMU',
    name: 'Aries I Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'RAMMW',
    name: 'Aries I Acquisition Corp - Warrants (18/03/2026)'
  },
  {
    symbol: 'RAMP',
    name: 'LiveRamp Holdings Inc'
  },
  {
    symbol: 'RAND',
    name: 'Rand Capital Corp'
  },
  {
    symbol: 'RANI',
    name: 'Rani Therapeutics Holdings Inc Class A'
  },
  {
    symbol: 'RAPT',
    name: 'RAPT Therapeutics Inc'
  },
  {
    symbol: 'RARE',
    name: 'Ultragenyx Pharmaceutical Inc'
  },
  {
    symbol: 'RAVE',
    name: 'Rave Restaurant Group Inc'
  },
  {
    symbol: 'RBA',
    name: 'Ritchie Bros Auctioneers Inc'
  },
  {
    symbol: 'RBAC',
    name: 'RedBall Acquisition Corp - Class A'
  },
  {
    symbol: 'RBAC-U',
    name: 'RedBall Acquisition Corp - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'RBAC-WS',
    name: 'RedBall Acquisition Corp - Warrants(17/08/2022)'
  },
  {
    symbol: 'RBB',
    name: 'RBB Bancorp'
  },
  {
    symbol: 'RBBN',
    name: 'Ribbon Communications Inc - New'
  },
  {
    symbol: 'RBC-W',
    name: 'Regal Beloit Corporation Additional Shares WhenIssued'
  },
  {
    symbol: 'RBCAA',
    name: 'Republic Bancorp Inc (KY) - Class A'
  },
  {
    symbol: 'RBCN',
    name: 'Rubicon Technology Inc'
  },
  {
    symbol: 'RBKB',
    name: 'Rhinebeck Bancorp Inc'
  },
  {
    symbol: 'RBLX',
    name: 'Roblox Corporation - Class A'
  },
  {
    symbol: 'RBOT',
    name: 'Vicarious Surgical Inc - Class A'
  },
  {
    symbol: 'RBOT-WS',
    name: 'Vicarious Surgical Inc - Warrants (05/08/2027)'
  },
  {
    symbol: 'RBS',
    name: ''
  },
  {
    symbol: 'RC',
    name: 'Ready Capital Corp'
  },
  {
    symbol: 'RC-P-C',
    name: 'Ready Capital Corp'
  },
  {
    symbol: 'RC-P-E',
    name: 'Ready Capital Corp'
  },
  {
    symbol: 'RCA',
    name: 'Ready Capital Corporation 700 Convertible Senior Notes due 2023'
  },
  {
    symbol: 'RCAC',
    name: 'Revelstone Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'RCACU',
    name: 'Revelstone Capital Acquisition Corp - Units (1 Ord ShareClass A & 1/2 War)'
  },
  {
    symbol: 'RCACW',
    name: 'Revelstone Capital Acquisition Corp - Warrants (15/09/2026)'
  },
  {
    symbol: 'RCAT',
    name: 'Red Cat Holdings Inc'
  },
  {
    symbol: 'RCB',
    name: 'Ready Capital Corp'
  },
  {
    symbol: 'RCC',
    name: 'Ready Capital Corp'
  },
  {
    symbol: 'RCEL',
    name: 'AVITA Medical Inc'
  },
  {
    symbol: 'RCF-U',
    name: 'RCF Acquisition Corp Units each consisting of one Class A ordinary share and onehalf of one redeemable warrant'
  },
  {
    symbol: 'RCFA',
    name: 'RCF Acquisition Corp - Class A'
  },
  {
    symbol: 'RCFA-U',
    name: 'RCF Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'RCFA-WS',
    name: 'RCF Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'RCHG',
    name: 'Recharge Acquisition Corp - Class A'
  },
  {
    symbol: 'RCHGU',
    name: 'Recharge Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'RCHGW',
    name: 'Recharge Acquisition Corp - Warrants (23/09/2025)'
  },
  {
    symbol: 'RCI',
    name: 'Rogers Communications Inc - Class B'
  },
  {
    symbol: 'RCII',
    name: 'Rent-a-Center Inc'
  },
  {
    symbol: 'RCKT',
    name: 'Rocket Pharmaceuticals Inc'
  },
  {
    symbol: 'RCKY',
    name: 'Rocky Brands Inc'
  },
  {
    symbol: 'RCL',
    name: 'Royal Caribbean Group'
  },
  {
    symbol: 'RCLF',
    name: 'Rosecliff Acquisition Corp I - Class A'
  },
  {
    symbol: 'RCLFU',
    name: 'Rosecliff Acquisition Corp I - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'RCLFW',
    name: 'Rosecliff Acquisition Corp I - Warrants (11/02/2026)'
  },
  {
    symbol: 'RCM',
    name: 'R1 RCM Inc'
  },
  {
    symbol: 'RCMT',
    name: 'RCM Technologies Inc'
  },
  {
    symbol: 'RCON',
    name: 'Recon Technology Ltd - Class A'
  },
  {
    symbol: 'RCOR',
    name: 'Renovacor Inc'
  },
  {
    symbol: 'RCOR-WS',
    name: 'Renovacor Inc - Warrants (05/03/2025)'
  },
  {
    symbol: 'RCRT',
    name: 'Recruiter.com Group Inc'
  },
  {
    symbol: 'RCRTW',
    name: 'Recruiter.com Group Inc - Warrants (15/06/2026)'
  },
  {
    symbol: 'RCUS',
    name: 'Arcus Biosciences Inc'
  },
  {
    symbol: 'RDBX',
    name: 'Redbox Entertainment Inc - Class A'
  },
  {
    symbol: 'RDBXW',
    name: 'Redbox Entertainment Inc - Warrants (22/10/2026)'
  },
  {
    symbol: 'RDCM',
    name: 'Radcom'
  },
  {
    symbol: 'RDFN',
    name: 'Redfin Corp'
  },
  {
    symbol: 'RDHL',
    name: 'Redhill Biopharma'
  },
  {
    symbol: 'RDI',
    name: 'Reading International Inc - Class A'
  },
  {
    symbol: 'RDIB',
    name: 'Reading International Inc - Class B'
  },
  {
    symbol: 'RDN',
    name: 'Radian Group Inc'
  },
  {
    symbol: 'RDNT',
    name: 'Radnet Inc'
  },
  {
    symbol: 'RDS-A',
    name: 'Shell Plc ADR (Representing - Class A)'
  },
  {
    symbol: 'RDUS',
    name: 'Radius Health Inc'
  },
  {
    symbol: 'RDVT',
    name: 'Red Violet Inc'
  },
  {
    symbol: 'RDW',
    name: 'Redwire Corporation'
  },
  {
    symbol: 'RDW-WS',
    name: 'Redwire Corporation - Warrants(27/05/2027)'
  },
  {
    symbol: 'RDWR',
    name: 'Radware'
  },
  {
    symbol: 'RDY',
    name: 'Dr. Reddy`s Laboratories Ltd'
  },
  {
    symbol: 'RE',
    name: 'Everest Re Group Ltd'
  },
  {
    symbol: 'REAL',
    name: 'Therealreal Inc'
  },
  {
    symbol: 'REAX',
    name: 'The Real Brokerage Inc'
  },
  {
    symbol: 'REDU',
    name: ''
  },
  {
    symbol: 'REE',
    name: 'REE Automotive Ltd - Class A'
  },
  {
    symbol: 'REEAW',
    name: 'REE Automotive Ltd - Warrants (22/07/2026)'
  },
  {
    symbol: 'REED',
    name: 'Reeds Inc'
  },
  {
    symbol: 'REFI',
    name: 'Chicago Atlantic Real Estate Finance Inc'
  },
  {
    symbol: 'REFR',
    name: 'Research Frontiers Inc'
  },
  {
    symbol: 'REG',
    name: 'Regency Centers Corporation'
  },
  {
    symbol: 'REGI',
    name: 'Renewable Energy Group Inc'
  },
  {
    symbol: 'REGN',
    name: 'Regeneron Pharmaceuticals Inc'
  },
  {
    symbol: 'REI',
    name: 'Ring Energy Inc'
  },
  {
    symbol: 'REKR',
    name: 'Rekor Systems Inc'
  },
  {
    symbol: 'RELI',
    name: 'Reliance Global Group Inc'
  },
  {
    symbol: 'RELIW',
    name: 'Reliance Global Group Inc - Warrants - Series A (01/02/2026)'
  },
  {
    symbol: 'RELL',
    name: 'Richardson Electronics Ltd'
  },
  {
    symbol: 'RELX',
    name: 'RELX Plc'
  },
  {
    symbol: 'RELY',
    name: 'Remitly Global Inc'
  },
  {
    symbol: 'RENE',
    name: 'Cartesian Growth Corp II - Class A'
  },
  {
    symbol: 'RENEU',
    name: 'Cartesian Growth Corp II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'RENEW',
    name: 'Cartesian Growth Corp II - Warrants(12/07/2028)'
  },
  {
    symbol: 'RENN',
    name: 'Renren Inc'
  },
  {
    symbol: 'RENT',
    name: 'Rent the Runway Inc - Class A'
  },
  {
    symbol: 'REPL',
    name: 'Replimune Group Inc'
  },
  {
    symbol: 'REPX',
    name: 'Riley Exploration Permian Inc'
  },
  {
    symbol: 'RERE',
    name: 'ATRenew Inc'
  },
  {
    symbol: 'RES',
    name: 'RPC Inc'
  },
  {
    symbol: 'RETA',
    name: 'Reata Pharmaceuticals Inc - Class A'
  },
  {
    symbol: 'RETO',
    name: 'ReTo Eco-Solutions Inc'
  },
  {
    symbol: 'REV',
    name: 'Revlon Inc - Class A'
  },
  {
    symbol: 'REVB',
    name: 'Revelation Biosciences Inc'
  },
  {
    symbol: 'REVBU',
    name: 'Revelation Biosciences Inc - Units (1 Ord share & 1 War)'
  },
  {
    symbol: 'REVBW',
    name: 'Revelation Biosciences Inc - Warrants(10/01/2027)'
  },
  {
    symbol: 'REVE',
    name: 'Alpine Acquisition Corp'
  },
  {
    symbol: 'REVEU',
    name: 'Alpine Acquisition Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'REVEW',
    name: 'Alpine Acquisition Corp - Warrants (01/05/2026)'
  },
  {
    symbol: 'REVG',
    name: 'REV Group Inc'
  },
  {
    symbol: 'REVH',
    name: 'Revolution Healthcare Acquisition Corp - Class A'
  },
  {
    symbol: 'REVHU',
    name: 'Revolution Healthcare Acquisition Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'REVHW',
    name: 'Revolution Healthcare Acquisition Corp - Warrants (17/03/2026)'
  },
  {
    symbol: 'REX',
    name: 'REX American Resources Corp'
  },
  {
    symbol: 'REXR',
    name: 'Rexford Industrial Realty Inc'
  },
  {
    symbol: 'REXR-P-B',
    name: 'Rexford Industrial Realty Inc 5875 Series B Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'REXR-P-C',
    name: 'Rexford Industrial Realty Inc 5.625 PRF PERPETUAL USD 25 Ser C'
  },
  {
    symbol: 'REYN',
    name: 'Reynolds Consumer Products Inc'
  },
  {
    symbol: 'REZI',
    name: 'Resideo Technologies Inc'
  },
  {
    symbol: 'RF',
    name: 'Regions Financial Corp'
  },
  {
    symbol: 'RF-P-B',
    name: 'Regions Financial Corp'
  },
  {
    symbol: 'RF-P-C',
    name: 'Regions Financial Corp'
  },
  {
    symbol: 'RF-P-E',
    name: 'Regions Financial Corp'
  },
  {
    symbol: 'RFAC',
    name: 'RF Acquisition Corp - Class A'
  },
  {
    symbol: 'RFACR',
    name: 'RF Acquisition Corp'
  },
  {
    symbol: 'RFACU',
    name: 'RF Acquisition Corp - Units (1 Ord Class A & 1 War & 1 Right )'
  },
  {
    symbol: 'RFACW',
    name: 'RF Acquisition Corp - Warrants (01/05/2028)'
  },
  {
    symbol: 'RFIL',
    name: 'RF Industries Ltd'
  },
  {
    symbol: 'RFL',
    name: 'Rafael Holdings Inc - Class B'
  },
  {
    symbol: 'RFM',
    name: 'RiverNorth Flexible Municipal Income Fund Inc'
  },
  {
    symbol: 'RFMZ',
    name: 'RiverNorth Flexible Municipal Income Fund II Inc'
  },
  {
    symbol: 'RFP',
    name: 'Resolute Forest Products Inc'
  },
  {
    symbol: 'RGA',
    name: 'Reinsurance Group Of America Inc'
  },
  {
    symbol: 'RGC',
    name: 'Regencell Bioscience Holdings Ltd'
  },
  {
    symbol: 'RGCO',
    name: 'RGC Resources Inc'
  },
  {
    symbol: 'RGEN',
    name: 'Repligen Corp'
  },
  {
    symbol: 'RGF',
    name: 'Real Good Food Company Inc (The) - Class A'
  },
  {
    symbol: 'RGLD',
    name: 'Royal Gold Inc'
  },
  {
    symbol: 'RGLS',
    name: 'Regulus Therapeutics Inc'
  },
  {
    symbol: 'RGNX',
    name: 'Regenxbio Inc'
  },
  {
    symbol: 'RGP',
    name: 'Resources Connection Inc'
  },
  {
    symbol: 'RGR',
    name: 'Sturm Ruger & Co. Inc'
  },
  {
    symbol: 'RGS',
    name: 'Regis Corp'
  },
  {
    symbol: 'RGTI',
    name: 'Rigetti Computing Inc'
  },
  {
    symbol: 'RGTIW',
    name: 'Rigetti Computing Inc - Warrants (01/01/9999)'
  },
  {
    symbol: 'RH',
    name: 'RH - Class A'
  },
  {
    symbol: 'RHE',
    name: 'Regional Health Properties Inc'
  },
  {
    symbol: 'RHE-P-A',
    name: 'Regional Health Properties Inc'
  },
  {
    symbol: 'RHI',
    name: 'Robert Half International Inc'
  },
  {
    symbol: 'RHP',
    name: 'Ryman Hospitality Properties Inc'
  },
  {
    symbol: 'RIBT',
    name: 'RiceBran Technologies'
  },
  {
    symbol: 'RICK',
    name: 'RCI Hospitality Holdings Inc'
  },
  {
    symbol: 'RICO',
    name: 'Agrico Acquisition Corp - Class A'
  },
  {
    symbol: 'RICOU',
    name: 'Agrico Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'RICOW',
    name: 'Agrico Acquisition Corp - Warrants (08/07/2026)'
  },
  {
    symbol: 'RIDE',
    name: 'Lordstown Motors Corp - Class A'
  },
  {
    symbol: 'RIG',
    name: 'Transocean Ltd'
  },
  {
    symbol: 'RIGL',
    name: 'Rigel Pharmaceuticals'
  },
  {
    symbol: 'RILY',
    name: 'B. Riley Financial Inc'
  },
  {
    symbol: 'RILYG',
    name: 'B. Riley Financial Inc'
  },
  {
    symbol: 'RILYK',
    name: 'B. Riley Financial Inc'
  },
  {
    symbol: 'RILYL',
    name: 'B. Riley Financial Inc'
  },
  {
    symbol: 'RILYM',
    name: 'B. Riley Financial Inc'
  },
  {
    symbol: 'RILYN',
    name: 'B. Riley Financial Inc'
  },
  {
    symbol: 'RILYO',
    name: 'B. Riley Financial Inc'
  },
  {
    symbol: 'RILYP',
    name: 'B. Riley Financial Inc'
  },
  {
    symbol: 'RILYT',
    name: 'B. Riley Financial Inc'
  },
  {
    symbol: 'RILYZ',
    name: 'B. Riley Financial Inc'
  },
  {
    symbol: 'RIO',
    name: 'Rio Tinto plc'
  },
  {
    symbol: 'RIOT',
    name: 'Riot Blockchain Inc'
  },
  {
    symbol: 'RIV-P-A',
    name: 'RiverNorth Opportunities Fund Inc 6.00 Series A Perpetual Preferred Stock'
  },
  {
    symbol: 'RIV-R-W',
    name: 'RiverNorth Opportunities Fund Inc Rights expiring November 5 2021 WhenIssued'
  },
  {
    symbol: 'RIVN',
    name: 'Rivian Automotive Inc - Class A'
  },
  {
    symbol: 'RJAC',
    name: 'Jackson Acquisition Co - Class A'
  },
  {
    symbol: 'RJAC-U',
    name: 'Jackson Acquisition Co - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'RJAC-WS',
    name: 'Jackson Acquisition Co - Warrants (01/01/9999)'
  },
  {
    symbol: 'RJF',
    name: 'Raymond James Financial Inc'
  },
  {
    symbol: 'RJF-P-A',
    name: 'Raymond James Financial Inc'
  },
  {
    symbol: 'RJF-P-B',
    name: 'Raymond James Financial Inc'
  },
  {
    symbol: 'RKDA',
    name: 'Arcadia Biosciences Inc'
  },
  {
    symbol: 'RKLB',
    name: 'Rocket Lab USA Inc'
  },
  {
    symbol: 'RKLY',
    name: 'Rockley Photonics Holdings Ltd'
  },
  {
    symbol: 'RKLY-WS',
    name: 'Rockley Photonics Holdings Ltd - Warrants (01/01/9999)'
  },
  {
    symbol: 'RKT',
    name: 'Rocket Companies Inc Class A'
  },
  {
    symbol: 'RKTA',
    name: 'Rocket Internet Growth Opportunities Corp - Class A'
  },
  {
    symbol: 'RKTA-U',
    name: 'Rocket Internet Growth Opportunities Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'RKTA-WS',
    name: 'Rocket Internet Growth Opportunities Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'RL',
    name: 'Ralph Lauren Corp - Class A'
  },
  {
    symbol: 'RLAY',
    name: 'Relay Therapeutics Inc'
  },
  {
    symbol: 'RLGT',
    name: 'Radiant Logistics Inc'
  },
  {
    symbol: 'RLI',
    name: 'RLI Corp'
  },
  {
    symbol: 'RLJ',
    name: 'RLJ Lodging Trust'
  },
  {
    symbol: 'RLJ-P-A',
    name: 'RLJ Lodging Trust'
  },
  {
    symbol: 'RLMD',
    name: 'Relmada Therapeutics Inc'
  },
  {
    symbol: 'RLTY',
    name: 'Cohen & Steers Real Estate Opportunities and Income Fund'
  },
  {
    symbol: 'RLX',
    name: 'RLX Technology Inc'
  },
  {
    symbol: 'RLYB',
    name: 'Rallybio Corp'
  },
  {
    symbol: 'RM',
    name: 'Regional Management Corp'
  },
  {
    symbol: 'RMAX',
    name: 'RE/MAX Holdings Inc - Class A'
  },
  {
    symbol: 'RMBI',
    name: 'Richmond Mutual Bancorporation Inc'
  },
  {
    symbol: 'RMBL',
    name: 'RumbleON Inc - Class B'
  },
  {
    symbol: 'RMBS',
    name: 'Rambus Inc'
  },
  {
    symbol: 'RMCF',
    name: 'Rocky Mountain Chocolate Factory Inc'
  },
  {
    symbol: 'RMD',
    name: 'Resmed Inc'
  },
  {
    symbol: 'RMED',
    name: 'Ra Medical Systems Inc'
  },
  {
    symbol: 'RMG-U',
    name: 'Romeo Power Inc - Unit (1 Ord Cls A & 0.33 Wrt)'
  },
  {
    symbol: 'RMGC',
    name: 'RMG Acquisition Corp III - Class A'
  },
  {
    symbol: 'RMGCU',
    name: 'RMG Acquisition Corp III - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'RMGCW',
    name: 'RMG Acquisition Corp III - Warrants (08/02/2026)'
  },
  {
    symbol: 'RMI',
    name: 'RiverNorth Opportunistic Municipal Income Fund Inc'
  },
  {
    symbol: 'RMM',
    name: 'RiverNorth Managed Duration Municipal Income Fund Inc'
  },
  {
    symbol: 'RMMZ',
    name: 'RiverNorth Managed Duration Municipal Income Fund II Inc'
  },
  {
    symbol: 'RMNI',
    name: 'Rimini Street Inc'
  },
  {
    symbol: 'RMO',
    name: 'Romeo Power Inc - Class A'
  },
  {
    symbol: 'RMO-WS',
    name: 'Romeo Power Inc Warrants'
  },
  {
    symbol: 'RMPL-P',
    name: 'RiverNorth Marketplace Lending Corporation 5875 Series A Term Preferred Stock Due 2024'
  },
  {
    symbol: 'RMR',
    name: 'RMR Group Inc (The) - Class A'
  },
  {
    symbol: 'RMTI',
    name: 'Rockwell Medical Inc'
  },
  {
    symbol: 'RNA',
    name: 'Avidity Biosciences Inc'
  },
  {
    symbol: 'RNAZ',
    name: 'TransCode Therapeutics Inc'
  },
  {
    symbol: 'RNDB',
    name: 'Randolph Bancorp Inc'
  },
  {
    symbol: 'RNER',
    name: 'Mount Rainier Acquisition Corp - Class A'
  },
  {
    symbol: 'RNERU',
    name: 'Mount Rainier Acquisition Corp - Unit (1 Ordinary share & 1 Wrt)'
  },
  {
    symbol: 'RNERW',
    name: 'Mount Rainier Acquisition Corp - Warrants (27/11/2026)'
  },
  {
    symbol: 'RNG',
    name: 'RingCentral Inc - Class A'
  },
  {
    symbol: 'RNGR',
    name: 'Ranger Energy Services Inc - Class A'
  },
  {
    symbol: 'RNLX',
    name: 'Renalytix Plc'
  },
  {
    symbol: 'RNR',
    name: 'RenaissanceRe Holdings Ltd'
  },
  {
    symbol: 'RNR-P-C',
    name: 'RenaissanceRe Holdings Ltd 608 Series C Preference Shares'
  },
  {
    symbol: 'RNR-P-C-CL',
    name: 'RenaissanceRe Holdings Ltd. 6.08 Series C Preference Shares'
  },
  {
    symbol: 'RNR-P-F',
    name: 'RenaissanceRe Holdings Ltd'
  },
  {
    symbol: 'RNR-P-G',
    name: 'RenaissanceRe Holdings Ltd Depositary Shares Series G'
  },
  {
    symbol: 'RNST',
    name: 'Renasant Corp'
  },
  {
    symbol: 'RNW',
    name: 'ReNew Energy Global plc - Class A'
  },
  {
    symbol: 'RNWK',
    name: 'Realnetworks Inc'
  },
  {
    symbol: 'RNWWW',
    name: 'ReNew Energy Global plc - Warrants (23/08/2026)'
  },
  {
    symbol: 'RNXT',
    name: 'RenovoRx Inc'
  },
  {
    symbol: 'ROAD',
    name: 'Construction Partners Inc - Class A'
  },
  {
    symbol: 'ROC',
    name: 'ROC Energy Acquisition Corp'
  },
  {
    symbol: 'ROCAR',
    name: 'ROC Energy Acquisition Corp'
  },
  {
    symbol: 'ROCAU',
    name: 'ROC Energy Acquisition Corp - Units (1 Ord Share & 1 Right)'
  },
  {
    symbol: 'ROCC',
    name: 'Ranger Oil Corp - Class A'
  },
  {
    symbol: 'ROCG',
    name: 'Roth CH Acquisition IV Company'
  },
  {
    symbol: 'ROCGU',
    name: 'Roth CH Acquisition IV Co - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'ROCGW',
    name: 'Roth CH Acquisition IV Co - Warrants (01/07/2026)'
  },
  {
    symbol: 'ROCK',
    name: 'Gibraltar Industries Inc'
  },
  {
    symbol: 'ROCL',
    name: 'Roth CH Acquisition V Company'
  },
  {
    symbol: 'ROCLU',
    name: 'Roth CH Acquisition V Co - Unit (1 Ordinary share & 1/2 Wrt)'
  },
  {
    symbol: 'ROCLW',
    name: 'Roth CH Acquisition V Co - Warrants (10/12/2026)'
  },
  {
    symbol: 'ROCR',
    name: 'QualTek Services Inc'
  },
  {
    symbol: 'ROG',
    name: 'Rogers Corp'
  },
  {
    symbol: 'ROIC',
    name: 'Retail Opportunity Investments Corp'
  },
  {
    symbol: 'ROIV',
    name: 'Roivant Sciences Ltd'
  },
  {
    symbol: 'ROIVW',
    name: 'Roivant Sciences Ltd - Warrants (30/09/2026)'
  },
  {
    symbol: 'ROK',
    name: 'Rockwell Automation Inc'
  },
  {
    symbol: 'ROKU',
    name: 'Roku Inc - Class A'
  },
  {
    symbol: 'ROL',
    name: 'Rollins Inc'
  },
  {
    symbol: 'ROLL',
    name: 'RBC Bearings Inc'
  },
  {
    symbol: 'ROLLP',
    name: 'RBC Bearings Inc'
  },
  {
    symbol: 'RONI',
    name: 'Rice Acquisition Corp II - Class A'
  },
  {
    symbol: 'RONI-U',
    name: 'Rice Acquisition Corp II - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'RONI-WS',
    name: 'Rice Acquisition Corp II - Warrants (01/01/9999)'
  },
  {
    symbol: 'ROOT',
    name: 'Root Inc - Class A'
  },
  {
    symbol: 'ROP',
    name: 'Roper Technologies Inc'
  },
  {
    symbol: 'ROSE',
    name: 'Rose Hill Acquisition Corp - Class A'
  },
  {
    symbol: 'ROSEU',
    name: 'Rose Hill Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'ROSEW',
    name: 'Rose Hill Acquisition Corp - Warrants (07/10/2026)'
  },
  {
    symbol: 'ROSS',
    name: 'Ross Acquisition Corp II - Class A'
  },
  {
    symbol: 'ROSS-U',
    name: 'Ross Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'ROSS-WS',
    name: 'Ross Acquisition Corp II - Warrants (01/02/2026)'
  },
  {
    symbol: 'ROST',
    name: 'Ross Stores Inc'
  },
  {
    symbol: 'ROVR',
    name: 'Rover Group Inc - Class A'
  },
  {
    symbol: 'RPAY',
    name: 'Repay Holdings Corporation - Class A'
  },
  {
    symbol: 'RPD',
    name: 'Rapid7 Inc'
  },
  {
    symbol: 'RPHM',
    name: 'Reneo Pharmaceuticals Inc'
  },
  {
    symbol: 'RPID',
    name: 'Rapid Micro Biosystems Inc - Class A'
  },
  {
    symbol: 'RPM',
    name: 'RPM International Inc'
  },
  {
    symbol: 'RPRX',
    name: 'Royalty Pharma plc - Class A'
  },
  {
    symbol: 'RPT',
    name: 'RPT Realty'
  },
  {
    symbol: 'RPT-P-D',
    name: 'RPT Realty'
  },
  {
    symbol: 'RPTX',
    name: 'Repare Therapeutics Inc'
  },
  {
    symbol: 'RRAC',
    name: 'Rigel Resource Acquisition Corp - Class A'
  },
  {
    symbol: 'RRAC-U',
    name: 'Rigel Resource Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'RRAC-WS',
    name: 'Rigel Resource Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'RRBI',
    name: 'Red River Bancshares Inc'
  },
  {
    symbol: 'RRC',
    name: 'Range Resources Corp'
  },
  {
    symbol: 'RRGB',
    name: 'Red Robin Gourmet Burgers Inc'
  },
  {
    symbol: 'RRR',
    name: 'Red Rock Resorts Inc - Class A'
  },
  {
    symbol: 'RRX',
    name: 'Regal Rexnord Corp'
  },
  {
    symbol: 'RS',
    name: 'Reliance Steel & Aluminum Company'
  },
  {
    symbol: 'RSG',
    name: 'Republic Services Inc'
  },
  {
    symbol: 'RSI',
    name: 'Rush Street Interactive Inc - Class A'
  },
  {
    symbol: 'RSKD',
    name: 'Riskified Ltd - Class A'
  },
  {
    symbol: 'RSLS',
    name: 'ReShape Lifesciences Inc'
  },
  {
    symbol: 'RSSS',
    name: 'Research Solutions Inc'
  },
  {
    symbol: 'RSVR',
    name: 'Reservoir Media Inc'
  },
  {
    symbol: 'RSVRW',
    name: 'Reservoir Media Inc - Warrants (28/07/2026)'
  },
  {
    symbol: 'RTIX',
    name: 'Surgalign Holdings'
  },
  {
    symbol: 'RTL',
    name: 'Necessity Retail REIT Inc (The) - Class A'
  },
  {
    symbol: 'RTLPO',
    name: 'Necessity Retail REIT Inc (The)'
  },
  {
    symbol: 'RTLPP',
    name: 'Necessity Retail REIT Inc (The)'
  },
  {
    symbol: 'RTLR',
    name: 'Rattler Midstream Lp'
  },
  {
    symbol: 'RTX',
    name: 'Raytheon Technologies Corporation'
  },
  {
    symbol: 'RUBI',
    name: 'Rubicon Project'
  },
  {
    symbol: 'RUBY',
    name: 'Rubius Therapeutics Inc'
  },
  {
    symbol: 'RUN',
    name: 'Sunrun Inc'
  },
  {
    symbol: 'RUSHA',
    name: 'Rush Enterprises Inc - Class A'
  },
  {
    symbol: 'RUSHB',
    name: 'Rush Enterprises Inc - Class B'
  },
  {
    symbol: 'RUTH',
    name: 'Ruths Hospitality Group Inc'
  },
  {
    symbol: 'RVAC',
    name: 'Riverview Acquisition Corp - Class A'
  },
  {
    symbol: 'RVACU',
    name: 'Riverview Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'RVACW',
    name: 'Riverview Acquisition Corp - Warrants(29/07/2026)'
  },
  {
    symbol: 'RVLP',
    name: 'RVL Pharmaceuticals plc'
  },
  {
    symbol: 'RVLV',
    name: 'Revolve Group Inc - Class A'
  },
  {
    symbol: 'RVMD',
    name: 'Revolution Medicines Inc'
  },
  {
    symbol: 'RVNC',
    name: 'Revance Therapeutics Inc'
  },
  {
    symbol: 'RVP',
    name: 'Retractable Technologies Inc'
  },
  {
    symbol: 'RVPH',
    name: 'Reviva Pharmaceuticals Holdings Inc'
  },
  {
    symbol: 'RVPHW',
    name: 'Reviva Pharmaceuticals Holdings Inc - Warrants (25/12/2025)'
  },
  {
    symbol: 'RVSB',
    name: 'Riverview Bancorp Inc'
  },
  {
    symbol: 'RVSN',
    name: 'Rail Vision Ltd'
  },
  {
    symbol: 'RVSNW',
    name: 'Rail Vision Ltd - Warrants (27/03/2027)'
  },
  {
    symbol: 'RWAY',
    name: 'Runway Growth Finance Corp'
  },
  {
    symbol: 'RWGE-U',
    name: 'Regalwood Global Energy Ltd Units'
  },
  {
    symbol: 'RWLK',
    name: 'Rewalk Robotics Ltd'
  },
  {
    symbol: 'RWOD',
    name: 'Redwoods Acquisition Corp'
  },
  {
    symbol: 'RWODR',
    name: 'Redwoods Acquisition Corp'
  },
  {
    symbol: 'RWODU',
    name: 'Redwoods Acquisition Corp - Units (1 Ord 1 War & 1 Right )'
  },
  {
    symbol: 'RWODW',
    name: 'Redwoods Acquisition Corp - Warrants(15/03/2027)'
  },
  {
    symbol: 'RWT',
    name: 'Redwood Trust Inc'
  },
  {
    symbol: 'RXDX',
    name: 'Prometheus Biosciences Inc'
  },
  {
    symbol: 'RXN-W',
    name: 'Rexnord Corporation ExDistribution WhenIssued'
  },
  {
    symbol: 'RXRA',
    name: 'RXR Acquisition Corp - Class A'
  },
  {
    symbol: 'RXRAU',
    name: 'RXR Acquisition Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'RXRAW',
    name: 'RXR Acquisition Corp - Warrants (01/01/2025)'
  },
  {
    symbol: 'RXRX',
    name: 'Recursion Pharmaceuticals Inc - Class A'
  },
  {
    symbol: 'RXST',
    name: 'RxSight Inc'
  },
  {
    symbol: 'RXT',
    name: 'Rackspace Technology Inc'
  },
  {
    symbol: 'RY',
    name: 'Royal Bank Of Canada'
  },
  {
    symbol: 'RY-P-T',
    name: 'Royal Bank Of Canada'
  },
  {
    symbol: 'RYAAY',
    name: 'Ryanair Holdings Plc'
  },
  {
    symbol: 'RYAM',
    name: 'Rayonier Advanced Materials Inc'
  },
  {
    symbol: 'RYAN',
    name: 'Ryan Specialty Group Holdings Inc Class A'
  },
  {
    symbol: 'RYCE',
    name: 'Amira Nature Foods Ltd'
  },
  {
    symbol: 'RYI',
    name: 'Ryerson Holding Corp'
  },
  {
    symbol: 'RYN',
    name: 'Rayonier Inc'
  },
  {
    symbol: 'RYTM',
    name: 'Rhythm Pharmaceuticals Inc'
  },
  {
    symbol: 'RZA',
    name: 'Reinsurance Group Of America Inc'
  },
  {
    symbol: 'RZB',
    name: 'Reinsurance Group Of America Inc'
  },
  {
    symbol: 'RZLT',
    name: 'Rezolute Inc'
  },
  {
    symbol: 'S',
    name: 'SentinelOne Inc - Class A'
  },
  {
    symbol: 'SA',
    name: 'Seabridge Gold Inc'
  },
  {
    symbol: 'SAB',
    name: 'Grupo Casa Saba SA De CV'
  },
  {
    symbol: 'SAB-CL',
    name: ''
  },
  {
    symbol: 'SABR',
    name: 'Sabre Corp'
  },
  {
    symbol: 'SABRP',
    name: 'Sabre Corp'
  },
  {
    symbol: 'SABS',
    name: 'SAB Biotherapeutics Inc'
  },
  {
    symbol: 'SABSW',
    name: 'SAB Biotherapeutics Inc - Warrants (25/07/2027)'
  },
  {
    symbol: 'SACC',
    name: 'Sachem Capital Corp'
  },
  {
    symbol: 'SACH',
    name: 'Sachem Capital Corp'
  },
  {
    symbol: 'SACH-P-A',
    name: 'Sachem Capital Corp 7.75 Series A Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'SAFE',
    name: 'Safehold Inc'
  },
  {
    symbol: 'SAFM',
    name: 'Sanderson Farms Inc'
  },
  {
    symbol: 'SAFT',
    name: 'Safety Insurance Group Inc'
  },
  {
    symbol: 'SAGA',
    name: 'Sagaliam Acquisition Corp - Class A'
  },
  {
    symbol: 'SAGAR',
    name: 'Sagaliam Acquisition Corp'
  },
  {
    symbol: 'SAGAU',
    name: 'Sagaliam Acquisition Corp - Units (1 Class A & 1 Right)'
  },
  {
    symbol: 'SAGE',
    name: 'Sage Therapeutics Inc'
  },
  {
    symbol: 'SAH',
    name: 'Sonic Automotive Inc - Class A'
  },
  {
    symbol: 'SAI',
    name: 'SAI.TECH Global Corporation - Class A'
  },
  {
    symbol: 'SAIA',
    name: 'Saia Inc'
  },
  {
    symbol: 'SAIC',
    name: 'Science Applications International Corp'
  },
  {
    symbol: 'SAIL',
    name: 'SailPoint Technologies Holdings Inc'
  },
  {
    symbol: 'SAITW',
    name: 'SAI.TECH Global Corporation - Warrants (29/04/2027)'
  },
  {
    symbol: 'SAK',
    name: 'Saratoga Investment Corp 7.25 Notes due 2025'
  },
  {
    symbol: 'SAL',
    name: 'Salisbury Bancorp Inc'
  },
  {
    symbol: 'SALM',
    name: 'Salem Media Group Inc - Class A'
  },
  {
    symbol: 'SAM',
    name: 'Boston Beer Co. Inc - Class A'
  },
  {
    symbol: 'SAMA',
    name: 'Schultze Special Purpose Acquisition Corp II - Class A'
  },
  {
    symbol: 'SAMAU',
    name: 'Schultze Special Purpose Acquisition Corp II - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'SAMAW',
    name: 'Schultze Special Purpose Acquisition Corp II - Warrants (25/03/2028)'
  },
  {
    symbol: 'SAMG',
    name: 'Silvercrest Asset Management Group Inc - Class A'
  },
  {
    symbol: 'SAN',
    name: 'Banco Santander S.A.'
  },
  {
    symbol: 'SANA',
    name: 'Sana Biotechnology Inc'
  },
  {
    symbol: 'SANB',
    name: 'Sanaby Health Acquisition Corp I - Class A'
  },
  {
    symbol: 'SANBU',
    name: 'Sanaby Health Acquisition Corp I - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'SANBW',
    name: 'Sanaby Health Acquisition Corp I - Warrants (30/07/2028)'
  },
  {
    symbol: 'SAND',
    name: 'Sandstorm Gold Ltd'
  },
  {
    symbol: 'SANG',
    name: 'SANGSTAT MEDICAL CORP'
  },
  {
    symbol: 'SANM',
    name: 'Sanmina Corp'
  },
  {
    symbol: 'SANW',
    name: 'S&W Seed Company'
  },
  {
    symbol: 'SAP',
    name: 'Sap SE'
  },
  {
    symbol: 'SAR',
    name: 'Saratoga Investment Corp'
  },
  {
    symbol: 'SASI',
    name: 'Sigma Labs Inc'
  },
  {
    symbol: 'SASR',
    name: 'Sandy Spring Bancorp'
  },
  {
    symbol: 'SAT',
    name: 'Saratoga Investment Corp'
  },
  {
    symbol: 'SATL',
    name: 'Satellogic Inc - Class A'
  },
  {
    symbol: 'SATLW',
    name: 'Satellogic Inc - Warrants (25/01/2027)'
  },
  {
    symbol: 'SATS',
    name: 'EchoStar Corp - Class A'
  },
  {
    symbol: 'SAVA',
    name: 'Cassava Sciences Inc'
  },
  {
    symbol: 'SAVE',
    name: 'Spirit Airlines Inc'
  },
  {
    symbol: 'SB',
    name: 'Safe Bulkers Inc'
  },
  {
    symbol: 'SB-P-C',
    name: 'Safe Bulkers Inc'
  },
  {
    symbol: 'SB-P-D',
    name: 'Safe Bulkers Inc'
  },
  {
    symbol: 'SBAC',
    name: 'SBA Communications Corp - Class A'
  },
  {
    symbol: 'SBBA',
    name: 'Scorpio Tankers Inc'
  },
  {
    symbol: 'SBCF',
    name: 'Seacoast Banking Corp Of Florida'
  },
  {
    symbol: 'SBE-U',
    name: 'ChargePoint Holdings Inc - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'SBET',
    name: 'SharpLink Gaming Ltd'
  },
  {
    symbol: 'SBEV',
    name: 'Splash Beverage Group Inc'
  },
  {
    symbol: 'SBEV-WS',
    name: 'Splash Beverage Group Inc - Warrants (01/01/9999)'
  },
  {
    symbol: 'SBFG',
    name: 'SB Financial Group Inc'
  },
  {
    symbol: 'SBFM',
    name: 'Sunshine Biopharma Inc'
  },
  {
    symbol: 'SBFMW',
    name: 'Sunshine Biopharma Inc - Warrants (15/02/2027)'
  },
  {
    symbol: 'SBG-WS',
    name: 'Sandbridge Acquisition Corporation Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50'
  },
  {
    symbol: 'SBGI',
    name: 'Sinclair Broadcast Group Inc - Class A'
  },
  {
    symbol: 'SBH',
    name: 'Sally Beauty Holdings Inc'
  },
  {
    symbol: 'SBIG',
    name: 'SpringBig Holdings Inc'
  },
  {
    symbol: 'SBIGW',
    name: 'SpringBig Holdings Inc - Warrants (14/06/2027)'
  },
  {
    symbol: 'SBII',
    name: 'Sandbridge X2 Corp - Class A'
  },
  {
    symbol: 'SBII-U',
    name: 'Sandbridge X2 Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'SBII-WS',
    name: 'Sandbridge X2 Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'SBLK',
    name: 'Star Bulk Carriers Corp'
  },
  {
    symbol: 'SBNY',
    name: 'Signature Bank'
  },
  {
    symbol: 'SBNYP',
    name: 'Signature Bank'
  },
  {
    symbol: 'SBOW',
    name: 'SilverBow Resources Inc'
  },
  {
    symbol: 'SBR',
    name: 'Sabine Royalty Trust'
  },
  {
    symbol: 'SBRA',
    name: 'Sabra Healthcare REIT Inc'
  },
  {
    symbol: 'SBS',
    name: 'Companhia de Saneamento Basico do Estado de Sao Paulo.'
  },
  {
    symbol: 'SBSI',
    name: 'Southside Bancshares Inc'
  },
  {
    symbol: 'SBSW',
    name: 'Sibanye Stillwater Ltd'
  },
  {
    symbol: 'SBT',
    name: 'Sterling Bancorp Inc'
  },
  {
    symbol: 'SBTX',
    name: 'Silverback Therapeutics Inc'
  },
  {
    symbol: 'SBUX',
    name: 'Starbucks Corp'
  },
  {
    symbol: 'SCAQ',
    name: 'Stratim Cloud Acquisition Corp - Class A'
  },
  {
    symbol: 'SCAQU',
    name: 'Stratim Cloud Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'SCAQW',
    name: 'Stratim Cloud Acquisition Corp - Warrants (05/03/2026)'
  },
  {
    symbol: 'SCCB',
    name: 'Sachem Capital Corp'
  },
  {
    symbol: 'SCCC',
    name: 'Sachem Capital Corp'
  },
  {
    symbol: 'SCCD',
    name: 'Sachem Capital Corp'
  },
  {
    symbol: 'SCCE',
    name: 'Sachem Capital Corp'
  },
  {
    symbol: 'SCCF',
    name: 'Sachem Capital Corp'
  },
  {
    symbol: 'SCCO',
    name: 'Southern Copper Corporation'
  },
  {
    symbol: 'SCDL',
    name: 'UBS AG London Branch'
  },
  {
    symbol: 'SCE-P-G',
    name: 'SCE Trust II Trust Preferred Securities'
  },
  {
    symbol: 'SCE-P-H',
    name: 'SCE Trust III FixedFloating Rate Trust Preference Securities'
  },
  {
    symbol: 'SCE-P-J',
    name: 'Southern California Edison Company 5375 FixedtoFloating Rate Trust Preference Securities'
  },
  {
    symbol: 'SCE-P-K',
    name: 'Southern California Edison Company 545 FixedtoFloating Rate Trust Preference Securities'
  },
  {
    symbol: 'SCE-P-L',
    name: 'SCE TRUST VI'
  },
  {
    symbol: 'SCHL',
    name: 'Scholastic Corp'
  },
  {
    symbol: 'SCHN',
    name: 'Schnitzer Steel Industries Inc - Class A'
  },
  {
    symbol: 'SCHW',
    name: 'Charles Schwab Corp'
  },
  {
    symbol: 'SCHW-P-D',
    name: 'Charles Schwab Corp'
  },
  {
    symbol: 'SCHW-P-J',
    name: 'Charles Schwab Corp'
  },
  {
    symbol: 'SCI',
    name: 'Service Corp International'
  },
  {
    symbol: 'SCKT',
    name: 'Socket Mobile Inc'
  },
  {
    symbol: 'SCL',
    name: 'Stepan Company'
  },
  {
    symbol: 'SCLE',
    name: 'Broadscale Acquisition Corp - Class A'
  },
  {
    symbol: 'SCLEU',
    name: 'Broadscale Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'SCLEW',
    name: 'Broadscale Acquisition Corp - Warrants (02/02/2026)'
  },
  {
    symbol: 'SCM',
    name: 'Stellus Capital Investment Corp'
  },
  {
    symbol: 'SCMA',
    name: 'Seaport Calibre Materials Acquisition Corp - Class A'
  },
  {
    symbol: 'SCMAU',
    name: 'Seaport Calibre Materials Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'SCMAW',
    name: 'Seaport Calibre Materials Acquisition Corp - Warrants (28/10/2026)'
  },
  {
    symbol: 'SCOA',
    name: 'ScION Tech Growth I - Class A'
  },
  {
    symbol: 'SCOAU',
    name: 'ScION Tech Growth I - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'SCOAW',
    name: 'ScION Tech Growth I - Warrants (01/11/2025)'
  },
  {
    symbol: 'SCOB',
    name: 'ScION Tech Growth II - Class A'
  },
  {
    symbol: 'SCOBU',
    name: 'ScION Tech Growth II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'SCOBW',
    name: 'ScION Tech Growth II - Warrants (09/02/2026)'
  },
  {
    symbol: 'SCOR',
    name: 'Comscore Inc'
  },
  {
    symbol: 'SCPE-U',
    name: 'SC Health Corporation Units'
  },
  {
    symbol: 'SCPH',
    name: 'scPharmaceuticals Inc'
  },
  {
    symbol: 'SCPL',
    name: 'Sciplay Corp - Class A'
  },
  {
    symbol: 'SCPS',
    name: 'Scopus Biopharma Inc'
  },
  {
    symbol: 'SCRM',
    name: 'Screaming Eagle Acquisition Corp - Class A'
  },
  {
    symbol: 'SCRMU',
    name: 'Screaming Eagle Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'SCRMW',
    name: 'Screaming Eagle Acquisition Corp - Warrants (05/01/2027)'
  },
  {
    symbol: 'SCS',
    name: 'Steelcase Inc - Class A'
  },
  {
    symbol: 'SCSC',
    name: 'Scansource Inc'
  },
  {
    symbol: 'SCTL',
    name: 'Societal CDMO Inc'
  },
  {
    symbol: 'SCU',
    name: 'Sculptor Capital Management Inc - Class A'
  },
  {
    symbol: 'SCUA',
    name: 'Sculptor Acquisition Corp I - Class A'
  },
  {
    symbol: 'SCUA-U',
    name: 'Sculptor Acquisition Corp I - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'SCUA-WS',
    name: 'Sculptor Acquisition Corp I - Warrants (01/01/9999)'
  },
  {
    symbol: 'SCVL',
    name: 'Shoe Carnival Inc'
  },
  {
    symbol: 'SCVX-U',
    name: 'SCVX Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SCWO',
    name: '374Water Inc'
  },
  {
    symbol: 'SCWX',
    name: 'SecureWorks Corp - Class A'
  },
  {
    symbol: 'SCX',
    name: 'L.S. Starrett Co. - Class A'
  },
  {
    symbol: 'SCYX',
    name: 'Scynexis Inc'
  },
  {
    symbol: 'SD',
    name: 'Sandridge Energy Inc New'
  },
  {
    symbol: 'SDAC',
    name: 'Sustainable Development Acquisition I Corp - Class A'
  },
  {
    symbol: 'SDACU',
    name: 'Sustainable Development Acquisition I Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SDACW',
    name: 'Sustainable Development Acquisition I Corp - Warrants (05/02/2026)'
  },
  {
    symbol: 'SDC',
    name: 'Smiledirectclub Inc - Class A'
  },
  {
    symbol: 'SDGR',
    name: 'Schrodinger Inc'
  },
  {
    symbol: 'SDH',
    name: 'Global Internet of People Inc'
  },
  {
    symbol: 'SDHY',
    name: 'PGIM Short Duration High Yield Opportunities Fund'
  },
  {
    symbol: 'SDIG',
    name: 'Stronghold Digital Mining Inc - Class A'
  },
  {
    symbol: 'SDPI',
    name: 'Superior Drilling Products Inc'
  },
  {
    symbol: 'SE',
    name: 'Sea Ltd'
  },
  {
    symbol: 'SEAC',
    name: 'Seachange International Inc'
  },
  {
    symbol: 'SEAL-P-A',
    name: 'Seapeak LLC'
  },
  {
    symbol: 'SEAL-P-B',
    name: 'Seapeak LLC'
  },
  {
    symbol: 'SEAS',
    name: 'SeaWorld Entertainment Inc'
  },
  {
    symbol: 'SEAT',
    name: 'Vivid Seats Inc - Class A'
  },
  {
    symbol: 'SEB',
    name: 'Seaboard Corp'
  },
  {
    symbol: 'SECO',
    name: 'Secoo Holding Ltd'
  },
  {
    symbol: 'SEDA',
    name: 'SDCL EDGE Acquisition Corp - Class A'
  },
  {
    symbol: 'SEDA-U',
    name: 'SDCL EDGE Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'SEDA-WS',
    name: 'SDCL EDGE Acquisition Corporation Redeemable warrants each whole warrant exercisable for one share of Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'SEDG',
    name: 'Solaredge Technologies Inc'
  },
  {
    symbol: 'SEE',
    name: 'Sealed Air Corp'
  },
  {
    symbol: 'SEED',
    name: 'Origin Agritech Ltd'
  },
  {
    symbol: 'SEEL',
    name: 'Seelos Therapeutics Inc'
  },
  {
    symbol: 'SEER',
    name: 'Seer Inc - Class A'
  },
  {
    symbol: 'SEIC',
    name: 'SEI Investments Company'
  },
  {
    symbol: 'SELB',
    name: 'Selecta Biosciences Inc'
  },
  {
    symbol: 'SELF',
    name: 'Global Self Storage Inc'
  },
  {
    symbol: 'SEM',
    name: 'Select Medical Holdings Corporation'
  },
  {
    symbol: 'SEMR',
    name: 'SEMrush Holdings Inc - Class A'
  },
  {
    symbol: 'SENEA',
    name: 'Seneca Foods Corp - Class A'
  },
  {
    symbol: 'SENEB',
    name: 'Seneca Foods Corp - Class B'
  },
  {
    symbol: 'SENS',
    name: 'Senseonics Holdings Inc'
  },
  {
    symbol: 'SERA',
    name: 'Sera Prognostics Inc Class A'
  },
  {
    symbol: 'SES',
    name: 'SES AI Corporation - Class A'
  },
  {
    symbol: 'SES-WS',
    name: 'SES AI Corporation - Warrants (08/01/2026)'
  },
  {
    symbol: 'SESN',
    name: 'Sesen Bio Inc'
  },
  {
    symbol: 'SEV',
    name: 'Sono Group N.V.'
  },
  {
    symbol: 'SEVN',
    name: 'Seven Hills Realty Trust .'
  },
  {
    symbol: 'SF',
    name: 'Stifel Financial Corp'
  },
  {
    symbol: 'SF-P-B',
    name: 'Stifel Financial'
  },
  {
    symbol: 'SF-P-C',
    name: ''
  },
  {
    symbol: 'SF-P-D',
    name: 'Stifel Financial Corporation Depositary Shares Series D'
  },
  {
    symbol: 'SFB',
    name: 'Stifel Financial Corporation 520 Senior Notes due 2047'
  },
  {
    symbol: 'SFBC',
    name: 'Sound Financial Bancorp Inc'
  },
  {
    symbol: 'SFBS',
    name: 'ServisFirst Bancshares Inc'
  },
  {
    symbol: 'SFE',
    name: 'Safeguard Scientifics Inc'
  },
  {
    symbol: 'SFET',
    name: 'Safe-T Group Ltd'
  },
  {
    symbol: 'SFIX',
    name: 'Stitch Fix Inc - Class A'
  },
  {
    symbol: 'SFL',
    name: 'SFL Corporation Ltd'
  },
  {
    symbol: 'SFM',
    name: 'Sprouts Farmers Market Inc'
  },
  {
    symbol: 'SFNC',
    name: 'Simmons First National Corp - Class A'
  },
  {
    symbol: 'SFST',
    name: 'Southern First Bancshares Inc'
  },
  {
    symbol: 'SFT',
    name: 'Shift Technologies Inc - Class A'
  },
  {
    symbol: 'SFTW-U',
    name: 'BlackSky Technology Inc - Units (1 Ord Class A & 1/2 Warr)'
  },
  {
    symbol: 'SG',
    name: 'Sweetgreen Inc - Class A'
  },
  {
    symbol: 'SGA',
    name: 'Saga Communications Inc - Class A'
  },
  {
    symbol: 'SGAM',
    name: ''
  },
  {
    symbol: 'SGBX',
    name: 'SG Blocks Inc'
  },
  {
    symbol: 'SGC',
    name: 'Superior Group of Companies Inc.'
  },
  {
    symbol: 'SGEN',
    name: 'Seagen Inc'
  },
  {
    symbol: 'SGFY',
    name: 'Signify Health Inc - Class A'
  },
  {
    symbol: 'SGH',
    name: 'SMART Global Holdings Inc'
  },
  {
    symbol: 'SGHC',
    name: 'Super Group (SGHC) Ltd'
  },
  {
    symbol: 'SGHC-WS',
    name: 'Super Group SGHC Ltd Redeemable Warrants each whole Warrant exercisable for one Ordinary Share each at an exercise price of 11.50 per share'
  },
  {
    symbol: 'SGHL',
    name: 'Signal Hill Acquisition Corp - Class A'
  },
  {
    symbol: 'SGHLU',
    name: 'Signal Hill Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SGHLW',
    name: 'Signal Hill Acquisition Corp - Warrants (10/02/2027)'
  },
  {
    symbol: 'SGHT',
    name: 'Sight Sciences Inc'
  },
  {
    symbol: 'SGII',
    name: 'Seaport Global Acquisition II Corp - Class A'
  },
  {
    symbol: 'SGIIU',
    name: 'Seaport Global Acquisition II Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SGIIW',
    name: 'Seaport Global Acquisition II Corp - Warrants (17/11/2026)'
  },
  {
    symbol: 'SGLY',
    name: 'Singularity Future Technology Ltd'
  },
  {
    symbol: 'SGMA',
    name: 'Sigmatron International Inc'
  },
  {
    symbol: 'SGML',
    name: 'Sigma Lithium Corporation'
  },
  {
    symbol: 'SGMO',
    name: 'Sangamo Therapeutics Inc'
  },
  {
    symbol: 'SGRP',
    name: 'Spar Group Inc'
  },
  {
    symbol: 'SGRY',
    name: 'Surgery Partners Inc'
  },
  {
    symbol: 'SGTX',
    name: 'Sigilon Therapeutics Inc'
  },
  {
    symbol: 'SGU',
    name: 'Star Group L.P.'
  },
  {
    symbol: 'SHAC',
    name: 'SCP & CO Healthcare Acquisition Co - Class A'
  },
  {
    symbol: 'SHACU',
    name: 'SCP & CO Healthcare Acquisition Co - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SHACW',
    name: 'SCP & CO Healthcare Acquisition Co - Warrants (27/10/2025)'
  },
  {
    symbol: 'SHAK',
    name: 'Shake Shack Inc - Class A'
  },
  {
    symbol: 'SHAP',
    name: 'Spree Acquisition Corp 1 Ltd - Class A'
  },
  {
    symbol: 'SHAP-U',
    name: 'Spree Acquisition Corp 1 Ltd - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SHAP-WS',
    name: 'Spree Acquisition Corp 1 Ltd - Warrants (22/12/2028)'
  },
  {
    symbol: 'SHBI',
    name: 'Shore Bancshares Inc'
  },
  {
    symbol: 'SHC',
    name: 'Sotera Health Company'
  },
  {
    symbol: 'SHCA',
    name: 'Spindletop Health Acquisition Corp - Class A'
  },
  {
    symbol: 'SHCAU',
    name: 'Spindletop Health Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'SHCAW',
    name: 'Spindletop Health Acquisition Corp - Warrants (04/11/2026)'
  },
  {
    symbol: 'SHCR',
    name: 'Sharecare Inc - Class A'
  },
  {
    symbol: 'SHCRW',
    name: 'Sharecare Inc - Warrants (01/07/2026)'
  },
  {
    symbol: 'SHEL',
    name: 'Shell Plc ADR (Representing - )'
  },
  {
    symbol: 'SHEL-W',
    name: 'Royal Dutch Shell PLC American Depositary Shares each representing two 2 WhenIssued'
  },
  {
    symbol: 'SHEN',
    name: 'Shenandoah Telecommunications Company'
  },
  {
    symbol: 'SHG',
    name: 'Shinhan Financial Group Co. Ltd'
  },
  {
    symbol: 'SHI',
    name: 'Sinopec Shanghai Petrochemical Co. Ltd'
  },
  {
    symbol: 'SHIP',
    name: 'Seanergy Maritime Holdings Corp'
  },
  {
    symbol: 'SHIPW',
    name: 'Seanergy Maritime Holdings Corp - Warrants - Class A (07/12/2021)'
  },
  {
    symbol: 'SHLL-U',
    name: 'Hyliion Holdings Corporation - Unit (1 Ordinary share Cls A & 1/2 Wrt)'
  },
  {
    symbol: 'SHLS',
    name: 'Shoals Technologies Group Inc - Class A'
  },
  {
    symbol: 'SHLX',
    name: 'Shell Midstream Partners L.P.'
  },
  {
    symbol: 'SHO',
    name: 'Sunstone Hotel Investors Inc'
  },
  {
    symbol: 'SHO-P-H',
    name: 'Sunstone Hotel Investors Inc'
  },
  {
    symbol: 'SHO-P-I',
    name: 'Sunstone Hotel Investors Inc'
  },
  {
    symbol: 'SHOO',
    name: 'Steven Madden Ltd'
  },
  {
    symbol: 'SHOP',
    name: 'Shopify Inc - Class A'
  },
  {
    symbol: 'SHPW',
    name: 'Shapeways Holdings Inc'
  },
  {
    symbol: 'SHPW-WS',
    name: 'Shapeways Holdings Inc Redeemable Warrants each whole warrant exercisable for one share of Common Stock at an exercise price of 11.50'
  },
  {
    symbol: 'SHQA',
    name: 'Shelter Acquisition Corp I - Class A'
  },
  {
    symbol: 'SHQAU',
    name: 'Shelter Acquisition Corp I - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'SHQAW',
    name: 'Shelter Acquisition Corp I - Warrants (25/02/2026)'
  },
  {
    symbol: 'SHUA',
    name: 'SHUAA Partners Acquisition Corp I - Class A'
  },
  {
    symbol: 'SHUAU',
    name: 'SHUAA Partners Acquisition Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SHUAW',
    name: 'SHUAA Partners Acquisition Corp I - Warrants (24/02/2027)'
  },
  {
    symbol: 'SHW',
    name: 'Sherwin-Williams Company'
  },
  {
    symbol: 'SHYF',
    name: 'Shyft Group Inc (The)'
  },
  {
    symbol: 'SI',
    name: 'Silvergate Capital Corp - Class A'
  },
  {
    symbol: 'SI-P-A',
    name: 'Silvergate Capital Corp'
  },
  {
    symbol: 'SIBN',
    name: 'SI-BONE Inc'
  },
  {
    symbol: 'SIC',
    name: 'Select Interior Concepts Inc - Class A'
  },
  {
    symbol: 'SID',
    name: 'Companhia Siderurgica Nacional'
  },
  {
    symbol: 'SIDU',
    name: 'Sidus Space Inc - Class A'
  },
  {
    symbol: 'SIEB',
    name: 'Siebert Financial Corp'
  },
  {
    symbol: 'SIEN',
    name: 'Sientra Inc'
  },
  {
    symbol: 'SIER',
    name: 'Sierra Lake Acquisition Corp - Class A'
  },
  {
    symbol: 'SIERU',
    name: 'Sierra Lake Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'SIERW',
    name: 'Sierra Lake Acquisition Corp - Warrants (31/03/2028)'
  },
  {
    symbol: 'SIF',
    name: 'SIFCO Industries Inc'
  },
  {
    symbol: 'SIFY',
    name: 'Sify Technologies Ltd'
  },
  {
    symbol: 'SIG',
    name: 'Signet Jewelers Ltd'
  },
  {
    symbol: 'SIGA',
    name: 'SIGA Technologies Inc'
  },
  {
    symbol: 'SIGI',
    name: 'Selective Insurance Group Inc'
  },
  {
    symbol: 'SIGIP',
    name: 'Selective Insurance Group Inc Depositary Shares each representing a 11000th interest in a share of 4.60 NonCumulative Preferred Stock Series B'
  },
  {
    symbol: 'SII',
    name: 'Sprott Inc'
  },
  {
    symbol: 'SILC',
    name: 'Silicom Ltd'
  },
  {
    symbol: 'SILK',
    name: 'Silk Road Medical Inc'
  },
  {
    symbol: 'SILV',
    name: 'SilverCrest Metals Inc'
  },
  {
    symbol: 'SIM',
    name: 'Grupo Simec S.A.B. de C.V.'
  },
  {
    symbol: 'SIMO',
    name: 'Silicon Motion Technology Corp'
  },
  {
    symbol: 'SINT',
    name: 'SINTX Technologies Inc'
  },
  {
    symbol: 'SIOX',
    name: 'Sio Gene Therapies Inc'
  },
  {
    symbol: 'SIRE',
    name: 'Sisecam Resources LP'
  },
  {
    symbol: 'SIRI',
    name: 'Sirius XM Holdings Inc'
  },
  {
    symbol: 'SISI',
    name: 'Shineco Inc'
  },
  {
    symbol: 'SITC',
    name: 'SITE Centers Corp'
  },
  {
    symbol: 'SITC-P-A',
    name: 'SITE Centers Corp 6375 Class A Preferred Shares'
  },
  {
    symbol: 'SITE',
    name: 'SiteOne Landscape Supply Inc'
  },
  {
    symbol: 'SITM',
    name: 'SiTime Corp'
  },
  {
    symbol: 'SIVB',
    name: 'SVB Financial Group'
  },
  {
    symbol: 'SIVBP',
    name: 'SVB Financial Group'
  },
  {
    symbol: 'SIX',
    name: 'Six Flags Entertainment Corp'
  },
  {
    symbol: 'SJ',
    name: 'Scienjoy Holding Corporation - Class A'
  },
  {
    symbol: 'SJI',
    name: 'South Jersey Industries Inc'
  },
  {
    symbol: 'SJIJ',
    name: 'South Jersey Industries Inc. 5.625 NT REDEEM 16092079 USD 25'
  },
  {
    symbol: 'SJIV',
    name: 'South Jersey Industries Inc'
  },
  {
    symbol: 'SJM',
    name: 'J.M. Smucker Company'
  },
  {
    symbol: 'SJR',
    name: 'Shaw Communications Inc - Class B'
  },
  {
    symbol: 'SJT',
    name: 'San Juan Basin Royalty Trust'
  },
  {
    symbol: 'SJW',
    name: 'SJW Group'
  },
  {
    symbol: 'SKE',
    name: 'Skeena Resources Ltd'
  },
  {
    symbol: 'SKGRU',
    name: 'SK Growth Opportunities Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SKIL',
    name: 'Skillsoft Corp - Class A'
  },
  {
    symbol: 'SKIL-WS',
    name: 'Skillsoft Corp New Wt Exp 06112026'
  },
  {
    symbol: 'SKIN',
    name: 'Beauty Health Company (The) - Class A'
  },
  {
    symbol: 'SKLZ',
    name: 'Skillz Inc - Class A'
  },
  {
    symbol: 'SKM',
    name: 'SK Telecom Co Ltd'
  },
  {
    symbol: 'SKT',
    name: 'Tanger Factory Outlet Centers Inc'
  },
  {
    symbol: 'SKX',
    name: 'Skechers U S A Inc - Class A'
  },
  {
    symbol: 'SKY',
    name: 'Skyline Champion Corp'
  },
  {
    symbol: 'SKYA',
    name: 'Skydeck Acquisition Corp - Class A'
  },
  {
    symbol: 'SKYAU',
    name: 'Skydeck Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'SKYAW',
    name: 'Skydeck Acquisition Corp - Warrants (13/05/2026)'
  },
  {
    symbol: 'SKYH',
    name: 'Sky Harbour Group Corporation - Class A'
  },
  {
    symbol: 'SKYH-WS',
    name: 'Sky Harbour Group Corporation - Warrants (22/10/2025)'
  },
  {
    symbol: 'SKYT',
    name: 'SkyWater Technology Inc'
  },
  {
    symbol: 'SKYW',
    name: 'Skywest Inc'
  },
  {
    symbol: 'SKYX',
    name: 'SKYX Platforms Corp'
  },
  {
    symbol: 'SLAB',
    name: 'Silicon Laboratories Inc'
  },
  {
    symbol: 'SLAC',
    name: 'Social Leverage Acquisition Corp I - Class A'
  },
  {
    symbol: 'SLAC-U',
    name: 'Social Leverage Acquisition Corp I - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'SLAC-WS',
    name: 'Social Leverage Acquisition Corp I - Warrants (17/02/2028)'
  },
  {
    symbol: 'SLAM',
    name: 'Slam Corp - Class A'
  },
  {
    symbol: 'SLAMU',
    name: 'Slam Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'SLAMW',
    name: 'Slam Corp - Warrants (23/02/2026)'
  },
  {
    symbol: 'SLB',
    name: 'Schlumberger Ltd'
  },
  {
    symbol: 'SLCA',
    name: 'U.S. Silica Holdings Inc'
  },
  {
    symbol: 'SLCR',
    name: 'Silver Crest Acquisition Corp - Class A'
  },
  {
    symbol: 'SLCRU',
    name: 'Silver Crest Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SLCRW',
    name: 'Silver Crest Acquisition Corp - Warrants (15/12/2025)'
  },
  {
    symbol: 'SLDB',
    name: 'Solid Biosciences Inc'
  },
  {
    symbol: 'SLDP',
    name: 'Solid Power Inc - Class A'
  },
  {
    symbol: 'SLDPW',
    name: 'Solid Power Inc - Warrants (08/12/2026)'
  },
  {
    symbol: 'SLF',
    name: 'Sun Life Financial Inc'
  },
  {
    symbol: 'SLG',
    name: 'SL Green Realty Corp'
  },
  {
    symbol: 'SLG-P-I',
    name: 'SL Green Realty Corporation Preferred Series I'
  },
  {
    symbol: 'SLGC',
    name: 'SomaLogic Inc - Class A'
  },
  {
    symbol: 'SLGCW',
    name: 'SomaLogic Inc - Warrants (31/08/2026)'
  },
  {
    symbol: 'SLGG',
    name: 'Super League Gaming Inc'
  },
  {
    symbol: 'SLGL',
    name: 'Sol-Gel Technologies Ltd'
  },
  {
    symbol: 'SLGN',
    name: 'Silgan Holdings Inc'
  },
  {
    symbol: 'SLHG',
    name: 'Skylight Health Group Inc'
  },
  {
    symbol: 'SLHGP',
    name: 'Skylight Health Group Inc'
  },
  {
    symbol: 'SLI',
    name: 'Standard Lithium Ltd'
  },
  {
    symbol: 'SLM',
    name: 'SLM Corp'
  },
  {
    symbol: 'SLMBP',
    name: 'SLM Corporation Floating Rate NonCumulative Preferred Stock Series B'
  },
  {
    symbol: 'SLN',
    name: 'Silence Therapeutics Plc'
  },
  {
    symbol: 'SLNG',
    name: 'Stabilis Solutions Inc'
  },
  {
    symbol: 'SLNH',
    name: 'Soluna Holdings Inc'
  },
  {
    symbol: 'SLNHP',
    name: 'Soluna Holdings Inc'
  },
  {
    symbol: 'SLNO',
    name: 'Soleno Therapeutics Inc'
  },
  {
    symbol: 'SLP',
    name: 'Simulations Plus Inc'
  },
  {
    symbol: 'SLQT',
    name: 'SelectQuote Inc'
  },
  {
    symbol: 'SLRC',
    name: 'SLR Investment Corp'
  },
  {
    symbol: 'SLRX',
    name: 'Salarius Pharmaceuticals Inc'
  },
  {
    symbol: 'SLS',
    name: 'SELLAS Life Sciences Group Inc'
  },
  {
    symbol: 'SLVM',
    name: 'Sylvamo Corp'
  },
  {
    symbol: 'SLVM-W',
    name: 'Sylvamo Corporation When Issued'
  },
  {
    symbol: 'SLVR',
    name: 'SilverSPAC Inc - Class A'
  },
  {
    symbol: 'SLVRU',
    name: 'SilverSPAC Inc - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'SLVRW',
    name: 'SilverSPAC Inc - Warrants (09/09/2026)'
  },
  {
    symbol: 'SM',
    name: 'SM Energy Company'
  },
  {
    symbol: 'SMAP',
    name: 'SportsMap Tech Acquisition Corp'
  },
  {
    symbol: 'SMAPU',
    name: 'SportsMap Tech Acquisition Corp - Units (1 Ord Share & 3/4 War)'
  },
  {
    symbol: 'SMAPW',
    name: 'SportsMap Tech Acquisition Corp - Warrants - (01/09/2027)'
  },
  {
    symbol: 'SMAR',
    name: 'Smartsheet Inc - Class A'
  },
  {
    symbol: 'SMBC',
    name: 'Southern Missouri Bancorp Inc'
  },
  {
    symbol: 'SMBK',
    name: 'SmartFinancial Inc'
  },
  {
    symbol: 'SMCI',
    name: 'Super Micro Computer Inc'
  },
  {
    symbol: 'SMED',
    name: 'Sharps Compliance Corp'
  },
  {
    symbol: 'SMFG',
    name: 'Sumitomo Mitsui Financial Group Inc'
  },
  {
    symbol: 'SMFL',
    name: 'Smart for Life Inc'
  },
  {
    symbol: 'SMFR',
    name: 'Sema4 Holdings Corp - Class A'
  },
  {
    symbol: 'SMFRW',
    name: 'Sema4 Holdings Corp - Warrants (22/07/2026)'
  },
  {
    symbol: 'SMG',
    name: 'Scotts Miracle-Gro Company - Class A'
  },
  {
    symbol: 'SMHI',
    name: 'SEACOR Marine Holdings Inc'
  },
  {
    symbol: 'SMID',
    name: 'Smith-Midland Corp'
  },
  {
    symbol: 'SMIH',
    name: 'Summit Healthcare Acquisition Corp - Class A'
  },
  {
    symbol: 'SMIHU',
    name: 'Summit Healthcare Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SMIHW',
    name: 'Summit Healthcare Acquisition Corp - Warrants (03/06/2026)'
  },
  {
    symbol: 'SMIT',
    name: 'Schmitt Industries Inc'
  },
  {
    symbol: 'SMLP',
    name: 'Summit Midstream Partners LP'
  },
  {
    symbol: 'SMLR',
    name: 'Semler Scientific Inc'
  },
  {
    symbol: 'SMMF',
    name: 'Summit Financial Group Inc'
  },
  {
    symbol: 'SMMT',
    name: 'Summit Therapeutics Inc'
  },
  {
    symbol: 'SMP',
    name: 'Standard Motor Products Inc'
  },
  {
    symbol: 'SMPL',
    name: 'Simply Good Foods Company'
  },
  {
    symbol: 'SMR',
    name: 'NuScale Power Corporation - Class A'
  },
  {
    symbol: 'SMR-WS',
    name: 'NuScale Power Corporation - Warrants (11/11/2025)'
  },
  {
    symbol: 'SMRT',
    name: 'SmartRent Inc - Class A'
  },
  {
    symbol: 'SMSI',
    name: 'Smith Micro Software Inc'
  },
  {
    symbol: 'SMTC',
    name: 'Semtech Corp'
  },
  {
    symbol: 'SMTI',
    name: 'Sanara MedTech Inc'
  },
  {
    symbol: 'SMTS',
    name: 'Sierra Metals Inc'
  },
  {
    symbol: 'SMWB',
    name: 'Similarweb Ltd'
  },
  {
    symbol: 'SNA',
    name: 'Snap-on Inc'
  },
  {
    symbol: 'SNAP',
    name: 'Snap Inc - Class A'
  },
  {
    symbol: 'SNAX',
    name: 'Stryve Foods Inc - Class A'
  },
  {
    symbol: 'SNAXW',
    name: 'Stryve Foods Inc - Warrants (20/07/2026)'
  },
  {
    symbol: 'SNBR',
    name: 'Sleep Number Corp'
  },
  {
    symbol: 'SNCE',
    name: 'Science 37 Holdings Inc'
  },
  {
    symbol: 'SNCR',
    name: 'Synchronoss Technologies Inc'
  },
  {
    symbol: 'SNCRL',
    name: 'Synchronoss Technologies Inc'
  },
  {
    symbol: 'SNCY',
    name: 'Sun Country Airlines Holdings Inc'
  },
  {
    symbol: 'SND',
    name: 'Smart Sand Inc'
  },
  {
    symbol: 'SNDA',
    name: 'Sonida Senior Living Inc'
  },
  {
    symbol: 'SNDL',
    name: 'Sundial Growers Inc'
  },
  {
    symbol: 'SNDR',
    name: 'Schneider National Inc - Class B'
  },
  {
    symbol: 'SNDX',
    name: 'Syndax Pharmaceuticals Inc'
  },
  {
    symbol: 'SNES',
    name: 'SenesTech Inc'
  },
  {
    symbol: 'SNEX',
    name: 'StoneX Group Inc'
  },
  {
    symbol: 'SNFCA',
    name: 'Security National Financial Corp - Class A'
  },
  {
    symbol: 'SNGX',
    name: 'Soligenix Inc'
  },
  {
    symbol: 'SNMP',
    name: 'Evolve Transition Infrastructure LP'
  },
  {
    symbol: 'SNN',
    name: 'Smith & Nephew plc'
  },
  {
    symbol: 'SNOA',
    name: 'Sonoma Pharmaceuticals Inc'
  },
  {
    symbol: 'SNOAW',
    name: 'Sonoma Pharmaceuticals Inc Warrants'
  },
  {
    symbol: 'SNOW',
    name: 'Snowflake Inc - Class A'
  },
  {
    symbol: 'SNP',
    name: 'China Petroleum & Chemical Corp'
  },
  {
    symbol: 'SNPO',
    name: 'Snap One Holdings Corp'
  },
  {
    symbol: 'SNPS',
    name: 'Synopsys Inc'
  },
  {
    symbol: 'SNPX',
    name: 'Synaptogenix Inc'
  },
  {
    symbol: 'SNRH',
    name: 'Senior Connect Acquisition Corp I - Class A'
  },
  {
    symbol: 'SNRHU',
    name: 'Senior Connect Acquisition Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SNRHW',
    name: 'Senior Connect Acquisition Corp I - Warrants (09/12/2025)'
  },
  {
    symbol: 'SNSE',
    name: 'Sensei Biotherapeutics Inc'
  },
  {
    symbol: 'SNT',
    name: 'Senstar Technologies Ltd'
  },
  {
    symbol: 'SNTG',
    name: 'Sentage Holdings Inc'
  },
  {
    symbol: 'SNTI',
    name: 'Senti Biosciences Inc'
  },
  {
    symbol: 'SNV',
    name: 'Synovus Financial Corp'
  },
  {
    symbol: 'SNV-P-D',
    name: 'Synovus Financial Corp'
  },
  {
    symbol: 'SNV-P-E',
    name: 'Synovus Financial Corp'
  },
  {
    symbol: 'SNX',
    name: 'TD Synnex Corp'
  },
  {
    symbol: 'SNY',
    name: 'Sanofi'
  },
  {
    symbol: 'SO',
    name: 'Southern Company'
  },
  {
    symbol: 'SO 6.75 08-01-22',
    name: 'Southern Company Unit Series A 2019'
  },
  {
    symbol: 'SOAC-U',
    name: 'Sustainable Opportunities Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SOBR',
    name: 'Sobr Safe Inc'
  },
  {
    symbol: 'SOFI',
    name: 'SoFi Technologies Inc'
  },
  {
    symbol: 'SOFO',
    name: 'Sonic Foundry Inc'
  },
  {
    symbol: 'SOHO',
    name: 'Sotherly Hotels Inc'
  },
  {
    symbol: 'SOHOB',
    name: 'Sotherly Hotels Inc'
  },
  {
    symbol: 'SOHON',
    name: 'Sotherly Hotels Inc Perp Pfd Ser D'
  },
  {
    symbol: 'SOHOO',
    name: 'Sotherly Hotels Inc 7875 Series C Cumulative Redeemable Perpetual Preferred Stock'
  },
  {
    symbol: 'SOHU',
    name: 'Sohu.com Ltd'
  },
  {
    symbol: 'SOI',
    name: 'Solaris Oilfield Infrastructure Inc - Class A'
  },
  {
    symbol: 'SOJB',
    name: 'Southern Company'
  },
  {
    symbol: 'SOJC',
    name: 'Southern Company'
  },
  {
    symbol: 'SOJD',
    name: ''
  },
  {
    symbol: 'SOJE',
    name: 'Southern Company'
  },
  {
    symbol: 'SOL',
    name: 'Renesola'
  },
  {
    symbol: 'SOLO',
    name: 'Electrameccanica Vehicles Corp'
  },
  {
    symbol: 'SOLOW',
    name: 'Electrameccanica Vehicles Corp - Warrants (03/08/2023)'
  },
  {
    symbol: 'SON',
    name: 'Sonoco Products Company'
  },
  {
    symbol: 'SOND',
    name: 'Sonder Holdings Inc - Class A'
  },
  {
    symbol: 'SONDW',
    name: 'Sonder Holdings Inc - Warrants (18/01/2027)'
  },
  {
    symbol: 'SONM',
    name: 'Sonim Technologies Inc'
  },
  {
    symbol: 'SONN',
    name: 'Sonnet BioTherapeutics Holdings Inc'
  },
  {
    symbol: 'SONO',
    name: 'Sonos Inc'
  },
  {
    symbol: 'SONX',
    name: 'Sonendo Inc'
  },
  {
    symbol: 'SONY',
    name: 'Sony Group Corporation'
  },
  {
    symbol: 'SOPA',
    name: 'Society Pass Inc'
  },
  {
    symbol: 'SOPH',
    name: 'SOPHiA Genetics SA'
  },
  {
    symbol: 'SOQ',
    name: 'Sonde Resources Corp'
  },
  {
    symbol: 'SOS',
    name: 'SOS Ltd'
  },
  {
    symbol: 'SOTK',
    name: 'Sono-Tek Corp'
  },
  {
    symbol: 'SOUN',
    name: 'SoundHound AI Inc - Class A'
  },
  {
    symbol: 'SOUNW',
    name: 'SoundHound AI Inc - Warrants (26/04/2027)'
  },
  {
    symbol: 'SOVO',
    name: 'Sovos Brands Inc'
  },
  {
    symbol: 'SP',
    name: 'SP Plus Corp'
  },
  {
    symbol: 'SPB',
    name: 'Spectrum Brands Holdings Inc'
  },
  {
    symbol: 'SPCB',
    name: 'SuperCom Ltd'
  },
  {
    symbol: 'SPCE',
    name: 'Virgin Galactic Holdings Inc - Class A'
  },
  {
    symbol: 'SPCE-WS',
    name: ''
  },
  {
    symbol: 'SPCM',
    name: 'Sound Point Acquisition Corp I Ltd - Class A'
  },
  {
    symbol: 'SPCMU',
    name: 'Sound Point Acquisition Corp I Ltd - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SPCMW',
    name: 'Sound Point Acquisition Corp I Ltd - Warrants (25/02/2027)'
  },
  {
    symbol: 'SPE-P-C',
    name: 'Special Opportunities Fund Inc'
  },
  {
    symbol: 'SPE-R-W',
    name: 'Special Opportunities Fund Inc Rights expiring January 21 2022 Rights when issued'
  },
  {
    symbol: 'SPFI',
    name: 'South Plains Financial Inc'
  },
  {
    symbol: 'SPG',
    name: 'Simon Property Group Inc'
  },
  {
    symbol: 'SPG-P-J',
    name: 'Simon Property Group Inc'
  },
  {
    symbol: 'SPGI',
    name: 'S&P Global Inc'
  },
  {
    symbol: 'SPGS',
    name: 'Simon Property Group Acquisition Holdings Inc - Class A'
  },
  {
    symbol: 'SPGS-U',
    name: 'Simon Property Group Acquisition Holdings Inc - Units (1 Ord Class A & 1/5 War)'
  },
  {
    symbol: 'SPGS-WS',
    name: 'Simon Property Group Acquisition Holdings Inc - Warrants (04/02/2026)'
  },
  {
    symbol: 'SPH',
    name: 'Suburban Propane Partners LP'
  },
  {
    symbol: 'SPI',
    name: 'SPI Energy Co Ltd'
  },
  {
    symbol: 'SPIR',
    name: 'Spire Global Inc - Class A'
  },
  {
    symbol: 'SPIR-WS',
    name: 'Spire Global Inc Warrants'
  },
  {
    symbol: 'SPK',
    name: 'SPK Acquisition Corp'
  },
  {
    symbol: 'SPKAR',
    name: 'SPK Acquisition Corp'
  },
  {
    symbol: 'SPKAU',
    name: 'SPK Acquisition Corp - Units (1 Ord & 1 Right)'
  },
  {
    symbol: 'SPKB',
    name: 'Silver Spike Acquisition Corp II - Class A'
  },
  {
    symbol: 'SPKBU',
    name: 'Silver Spike Acquisition Corp II - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'SPKBW',
    name: 'Silver Spike Acquisition Corp II - Warrants (26/02/2026)'
  },
  {
    symbol: 'SPLK',
    name: 'Splunk Inc'
  },
  {
    symbol: 'SPLP',
    name: 'Steel Partners Holdings LP'
  },
  {
    symbol: 'SPLP-P-A',
    name: 'Steel Partners Holdings LP'
  },
  {
    symbol: 'SPNE',
    name: 'SeaSpine Holdings Corp'
  },
  {
    symbol: 'SPNS',
    name: 'Sapiens International Corp NV'
  },
  {
    symbol: 'SPNT',
    name: 'SiriusPoint Ltd'
  },
  {
    symbol: 'SPNT-P-B',
    name: 'SiriusPoint Ltd'
  },
  {
    symbol: 'SPOK',
    name: 'Spok Holdings Inc'
  },
  {
    symbol: 'SPOT',
    name: 'Spotify Technology S.A.'
  },
  {
    symbol: 'SPPI',
    name: 'Spectrum Pharmaceuticals Inc'
  },
  {
    symbol: 'SPR',
    name: 'Spirit Aerosystems Holdings Inc - Class A'
  },
  {
    symbol: 'SPRB',
    name: 'Spruce Biosciences Inc'
  },
  {
    symbol: 'SPRC',
    name: 'SciSparc Ltd'
  },
  {
    symbol: 'SPRO',
    name: 'Spero Therapeutics Inc'
  },
  {
    symbol: 'SPSC',
    name: 'SPS Commerce Inc'
  },
  {
    symbol: 'SPT',
    name: 'Sprout Social Inc Class A'
  },
  {
    symbol: 'SPTK',
    name: 'SportsTek Acquisition Corp - Class A'
  },
  {
    symbol: 'SPTKU',
    name: 'SportsTek Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SPTKW',
    name: 'SportsTek Acquisition Corp - Warrants (16/02/2028)'
  },
  {
    symbol: 'SPTN',
    name: 'SpartanNash Company'
  },
  {
    symbol: 'SPWH',
    name: 'Sportsman`s Warehouse Holdings Inc'
  },
  {
    symbol: 'SPWR',
    name: 'Sunpower Corp'
  },
  {
    symbol: 'SPXC',
    name: 'SPX Corp'
  },
  {
    symbol: 'SQ',
    name: 'Block Inc - Class A'
  },
  {
    symbol: 'SQFT',
    name: 'Presidio Property Trust Inc - Class A'
  },
  {
    symbol: 'SQFTP',
    name: 'Presidio Property Trust Inc'
  },
  {
    symbol: 'SQFTW',
    name: 'Presidio Property Trust Inc - Warrants (24/01/2027)'
  },
  {
    symbol: 'SQL',
    name: 'SeqLL Inc'
  },
  {
    symbol: 'SQLLW',
    name: 'SeqLL Inc - Warrants (06/08/2026)'
  },
  {
    symbol: 'SQM',
    name: 'Sociedad Quimica Y Minera de Chile S.A.'
  },
  {
    symbol: 'SQM-R',
    name: 'Sociedad Quimica y Minera S.A. Rights expires April 19 2021'
  },
  {
    symbol: 'SQM-R-W',
    name: 'Sociedad Quimica y Minera S.A. Rights expires April 19 2021 When Issued'
  },
  {
    symbol: 'SQNS',
    name: 'Sequans Communications S.A'
  },
  {
    symbol: 'SQSP',
    name: 'Squarespace Inc - Class A'
  },
  {
    symbol: 'SQZ',
    name: 'SQZ Biotechnologies Company'
  },
  {
    symbol: 'SR',
    name: 'Spire Inc'
  },
  {
    symbol: 'SR-P-A',
    name: 'Spire Inc Depositary Shares Series A'
  },
  {
    symbol: 'SRAD',
    name: 'Sportradar Group AG - Class A'
  },
  {
    symbol: 'SRAX',
    name: 'SRAX Inc - Class A'
  },
  {
    symbol: 'SRC',
    name: 'Spirit Realty Capital Inc'
  },
  {
    symbol: 'SRC-P-A',
    name: 'Spirit Realty Capital Inc'
  },
  {
    symbol: 'SRCE',
    name: '1st Source Corp'
  },
  {
    symbol: 'SRCL',
    name: 'Stericycle Inc'
  },
  {
    symbol: 'SRDX',
    name: 'Surmodics Inc'
  },
  {
    symbol: 'SRE',
    name: 'Sempra Energy'
  },
  {
    symbol: 'SREA',
    name: 'Sempra Energy'
  },
  {
    symbol: 'SREV',
    name: 'ServiceSource International Inc'
  },
  {
    symbol: 'SRG',
    name: 'Seritage Growth Properties - Class A'
  },
  {
    symbol: 'SRG-P-A',
    name: 'Seritage Growth Properties'
  },
  {
    symbol: 'SRGA',
    name: 'Surgalign Holdings Inc'
  },
  {
    symbol: 'SRI',
    name: 'Stoneridge Inc'
  },
  {
    symbol: 'SRL',
    name: 'Scully Royalty Ltd'
  },
  {
    symbol: 'SRLP',
    name: 'Sprague Resources LP'
  },
  {
    symbol: 'SRNE',
    name: 'Sorrento Therapeutics Inc'
  },
  {
    symbol: 'SRPT',
    name: 'Sarepta Therapeutics Inc'
  },
  {
    symbol: 'SRRK',
    name: 'Scholar Rock Holding Corp'
  },
  {
    symbol: 'SRSA',
    name: 'Sarissa Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'SRSAU',
    name: 'Sarissa Capital Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'SRSAW',
    name: 'Sarissa Capital Acquisition Corp - Warrants (20/10/2025)'
  },
  {
    symbol: 'SRT',
    name: 'Startek Inc'
  },
  {
    symbol: 'SRTS',
    name: 'Sensus Healthcare Inc'
  },
  {
    symbol: 'SRZN',
    name: 'Surrozen Inc'
  },
  {
    symbol: 'SRZNW',
    name: 'Surrozen Inc - Warrants (01/08/2026)'
  },
  {
    symbol: 'SSAA',
    name: 'Science Strategic Acquisition Corp Alpha - Class A'
  },
  {
    symbol: 'SSAAU',
    name: 'Science Strategic Acquisition Corp Alpha - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'SSAAW',
    name: 'Science Strategic Acquisition Corp Alpha - Warrants (20/01/2026)'
  },
  {
    symbol: 'SSB',
    name: 'SouthState Corporation'
  },
  {
    symbol: 'SSBI',
    name: 'Summit State Bank'
  },
  {
    symbol: 'SSBK',
    name: 'Southern States Bancshares Inc'
  },
  {
    symbol: 'SSD',
    name: 'Simpson Manufacturing Co. Inc'
  },
  {
    symbol: 'SSIC',
    name: 'Silver Spike Investment Corp'
  },
  {
    symbol: 'SSKN',
    name: 'STRATA Skin Sciences Inc'
  },
  {
    symbol: 'SSL',
    name: 'Sasol Ltd'
  },
  {
    symbol: 'SSNC',
    name: 'SS&C Technologies Holdings Inc'
  },
  {
    symbol: 'SSNT',
    name: 'SilverSun Technologies Inc'
  },
  {
    symbol: 'SSP',
    name: 'E.W. Scripps Co. - Class A'
  },
  {
    symbol: 'SSRM',
    name: 'SSR Mining Inc'
  },
  {
    symbol: 'SSSS',
    name: 'SuRo Capital Corp'
  },
  {
    symbol: 'SSSSL',
    name: 'SuRo Capital Corp'
  },
  {
    symbol: 'SST',
    name: 'System1 Inc - Class A'
  },
  {
    symbol: 'SST-WS',
    name: 'System1 Inc - Warrants (01/01/9999)'
  },
  {
    symbol: 'SSTI',
    name: 'ShotSpotter Inc'
  },
  {
    symbol: 'SSTK',
    name: 'Shutterstock Inc'
  },
  {
    symbol: 'SSU',
    name: 'SIGNA Sports United N.V.'
  },
  {
    symbol: 'SSU-WS',
    name: 'SIGNA Sports United N.V. - Warrants (06/08/2025)'
  },
  {
    symbol: 'SSWA',
    name: 'Seaspan Corporation 7125 Notes due 2027'
  },
  {
    symbol: 'SSY',
    name: 'Sunlink Health Systems Inc'
  },
  {
    symbol: 'SSYS',
    name: 'Stratasys Ltd'
  },
  {
    symbol: 'ST',
    name: 'Sensata Technologies Holding Plc'
  },
  {
    symbol: 'STAA',
    name: 'Staar Surgical Company'
  },
  {
    symbol: 'STAB',
    name: 'Statera BioPharma Inc'
  },
  {
    symbol: 'STAF',
    name: 'Staffing 360 Solutions Inc'
  },
  {
    symbol: 'STAG',
    name: 'STAG Industrial Inc'
  },
  {
    symbol: 'STAR',
    name: 'iStar Inc'
  },
  {
    symbol: 'STAR-P-D',
    name: 'iStar Inc'
  },
  {
    symbol: 'STAR-P-G',
    name: 'iStar Inc Series G Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'STAR-P-I',
    name: 'iStar Inc Series I Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'STBA',
    name: 'S & T Bancorp Inc'
  },
  {
    symbol: 'STC',
    name: 'Stewart Information Services Corp'
  },
  {
    symbol: 'STCN',
    name: 'Steel Connect Inc'
  },
  {
    symbol: 'STE',
    name: 'Steris Plc'
  },
  {
    symbol: 'STEM',
    name: 'Stem Inc - Class A'
  },
  {
    symbol: 'STEM-WS',
    name: 'Stem Inc Wt Exp'
  },
  {
    symbol: 'STEP',
    name: 'StepStone Group Inc - Class A'
  },
  {
    symbol: 'STER',
    name: 'Sterling Check Corp'
  },
  {
    symbol: 'STET',
    name: 'ST Energy Transition I Ltd - Class A'
  },
  {
    symbol: 'STET-U',
    name: 'ST Energy Transition I Ltd - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'STET-WS',
    name: 'ST Energy Transition I Ltd - Warrants (02/12/2026)'
  },
  {
    symbol: 'STEW',
    name: 'SRH Total Return Fund Inc'
  },
  {
    symbol: 'STG',
    name: 'Sunlands Technology Group'
  },
  {
    symbol: 'STGW',
    name: 'Stagwell Inc - Class A'
  },
  {
    symbol: 'STIM',
    name: 'Neuronetics Inc'
  },
  {
    symbol: 'STKL',
    name: 'Sunopta Inc'
  },
  {
    symbol: 'STKS',
    name: 'ONE Group Hospitality Inc'
  },
  {
    symbol: 'STLA',
    name: 'Stellantis N.V'
  },
  {
    symbol: 'STLD',
    name: 'Steel Dynamics Inc'
  },
  {
    symbol: 'STM',
    name: 'ST Microelectronics'
  },
  {
    symbol: 'STN',
    name: 'Stantec Inc'
  },
  {
    symbol: 'STNE',
    name: 'StoneCo Ltd - Class A'
  },
  {
    symbol: 'STNEV',
    name: 'StoneCo Ltd'
  },
  {
    symbol: 'STNG',
    name: 'Scorpio Tankers Inc'
  },
  {
    symbol: 'STOK',
    name: 'Stoke Therapeutics Inc'
  },
  {
    symbol: 'STON',
    name: 'StoneMor Inc'
  },
  {
    symbol: 'STOR',
    name: 'Store Capital Corp'
  },
  {
    symbol: 'STR',
    name: 'Sitio Royalties Corporation - Class A'
  },
  {
    symbol: 'STR-WS',
    name: 'Sitio Royalties Corporation - Warrants(21/07/2022)'
  },
  {
    symbol: 'STRA',
    name: 'Strategic Education Inc'
  },
  {
    symbol: 'STRC',
    name: 'Sarcos Technology and Robotics Corporation'
  },
  {
    symbol: 'STRCW',
    name: 'Sarcos Technology and Robotics Corporation - Warrants (24/09/2026)'
  },
  {
    symbol: 'STRDW',
    name: 'Sitio Royalties Corp Wt 08232023'
  },
  {
    symbol: 'STRE',
    name: 'Supernova Partners Acquisition Co III Ltd - Class A'
  },
  {
    symbol: 'STRE-U',
    name: 'Supernova Partners Acquisition Co III Ltd - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'STRE-WS',
    name: 'Supernova Partners Acquisition Co III Ltd - Warrants (01/01/9999)'
  },
  {
    symbol: 'STRL',
    name: 'Sterling Infrastructure Inc'
  },
  {
    symbol: 'STRM',
    name: 'Streamline Health Solutions Inc'
  },
  {
    symbol: 'STRN',
    name: 'Stran & Company Inc'
  },
  {
    symbol: 'STRNW',
    name: 'Stran & Company Inc - Warrants (01/11/2026)'
  },
  {
    symbol: 'STRO',
    name: 'Sutro Biopharma Inc'
  },
  {
    symbol: 'STRR',
    name: 'Star Equity Holdings Inc'
  },
  {
    symbol: 'STRRP',
    name: 'Star Equity Holdings Inc'
  },
  {
    symbol: 'STRS',
    name: 'Stratus Properties Inc'
  },
  {
    symbol: 'STRT',
    name: 'Strattec Security Corp'
  },
  {
    symbol: 'STRY',
    name: 'Starry Group Holdings Inc - Class A'
  },
  {
    symbol: 'STSA',
    name: 'Satsuma Pharmaceuticals Inc'
  },
  {
    symbol: 'STSS',
    name: 'Sharps Technology Inc'
  },
  {
    symbol: 'STSSW',
    name: 'Sharps Technology Inc - Warrants (13/04/2027)'
  },
  {
    symbol: 'STT',
    name: 'State Street Corp'
  },
  {
    symbol: 'STT-P-C',
    name: 'State Street Corporation Dep Shs Representing 14000 Ownership Int In Sh Non Cum Perpertual Pfd Stk Ser C'
  },
  {
    symbol: 'STT-P-C-CL',
    name: 'State Street Corporation Dep Shs'
  },
  {
    symbol: 'STT-P-D',
    name: 'State Street Corp'
  },
  {
    symbol: 'STT-P-G',
    name: 'State Street Corp'
  },
  {
    symbol: 'STTK',
    name: 'Shattuck Labs Inc'
  },
  {
    symbol: 'STVN',
    name: 'Stevanato Group Spa'
  },
  {
    symbol: 'STWD',
    name: 'Starwood Property Trust Inc'
  },
  {
    symbol: 'STWO',
    name: 'ESS Tech Inc - Class A'
  },
  {
    symbol: 'STX',
    name: 'Seagate Technology Holdings Plc'
  },
  {
    symbol: 'STXS',
    name: 'Stereotaxis Inc'
  },
  {
    symbol: 'STZ',
    name: 'Constellation Brands Inc - Class A'
  },
  {
    symbol: 'STZ-B',
    name: 'Constellation Brands Inc - Class B'
  },
  {
    symbol: 'SU',
    name: 'Suncor Energy Inc'
  },
  {
    symbol: 'SUAC',
    name: 'ShoulderUp Technology Acquisition Corp - Class A'
  },
  {
    symbol: 'SUAC-U',
    name: 'ShoulderUp Technology Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SUAC-WS',
    name: 'ShoulderUp Technology Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'SUI',
    name: 'Sun Communities Inc'
  },
  {
    symbol: 'SUM',
    name: 'Summit Materials Inc - Class A'
  },
  {
    symbol: 'SUMO',
    name: 'Sumo Logic Inc'
  },
  {
    symbol: 'SUN',
    name: 'Sunoco LP'
  },
  {
    symbol: 'SUNL',
    name: 'Sunlight Financial Holdings Inc - Class A'
  },
  {
    symbol: 'SUNL-WS',
    name: 'Sunlight Financial Holdings Inc Wt Exp 11282025'
  },
  {
    symbol: 'SUNW',
    name: 'Sunworks Inc'
  },
  {
    symbol: 'SUP',
    name: 'Superior Industries International Inc'
  },
  {
    symbol: 'SUPN',
    name: 'Supernus Pharmaceuticals Inc'
  },
  {
    symbol: 'SUPV',
    name: 'Grupo Supervielle S.A.'
  },
  {
    symbol: 'SURF',
    name: 'Surface Oncology Inc'
  },
  {
    symbol: 'SURG',
    name: 'Surgepays Inc'
  },
  {
    symbol: 'SURGW',
    name: 'Surgepays Inc - Warrants (22/10/2024)'
  },
  {
    symbol: 'SUZ',
    name: 'Suzano S.A.'
  },
  {
    symbol: 'SVA',
    name: 'Sinovac Biotech Ltd'
  },
  {
    symbol: 'SVC',
    name: 'Service Properties Trust'
  },
  {
    symbol: 'SVFA',
    name: 'SVF Investment Corp - Class A'
  },
  {
    symbol: 'SVFAU',
    name: 'SVF Investment Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'SVFAW',
    name: 'SVF Investment Corp - Warrants (20/12/2025)'
  },
  {
    symbol: 'SVFB',
    name: 'SVF Investment Corp 2 - Class A'
  },
  {
    symbol: 'SVFD',
    name: 'Save Foods Inc'
  },
  {
    symbol: 'SVM',
    name: 'Silvercorp Metals Inc'
  },
  {
    symbol: 'SVNA',
    name: '7 Acquisition Corp - Class A'
  },
  {
    symbol: 'SVNAU',
    name: '7 Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'SVNAW',
    name: '7 Acquisition Corp - Warrants (05/11/2026)'
  },
  {
    symbol: 'SVOK',
    name: ''
  },
  {
    symbol: 'SVRA',
    name: 'Savara Inc'
  },
  {
    symbol: 'SVRE',
    name: 'SaverOne 2014 Ltd'
  },
  {
    symbol: 'SVREW',
    name: 'SaverOne 2014 Ltd - Warrants(04/05/2027)'
  },
  {
    symbol: 'SVT',
    name: 'Servotronics Inc'
  },
  {
    symbol: 'SVVC',
    name: 'Firsthand Technology Value Fund Inc'
  },
  {
    symbol: 'SWAG',
    name: 'Software Acquisition Group Inc III - Class A'
  },
  {
    symbol: 'SWAGU',
    name: 'Software Acquisition Group Inc III - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'SWAGW',
    name: 'Software Acquisition Group Inc III - Warrants (01/03/2028)'
  },
  {
    symbol: 'SWAV',
    name: 'ShockWave Medical Inc'
  },
  {
    symbol: 'SWBI',
    name: 'Smith & Wesson Brands Inc'
  },
  {
    symbol: 'SWBIV',
    name: 'Smith & Wesson Brands Inc'
  },
  {
    symbol: 'SWCH',
    name: 'Switch Inc - Class A'
  },
  {
    symbol: 'SWET',
    name: 'Athlon Acquisition Corp - Class A'
  },
  {
    symbol: 'SWETU',
    name: 'Athlon Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'SWETW',
    name: 'Athlon Acquisition Corp - Warrants (12/01/2026)'
  },
  {
    symbol: 'SWI',
    name: 'SolarWinds Corp'
  },
  {
    symbol: 'SWI-W',
    name: 'SolarWinds Corporation ExDistribution When Issued'
  },
  {
    symbol: 'SWIM',
    name: 'Latham Group Inc'
  },
  {
    symbol: 'SWIR',
    name: 'Sierra Wireless Inc'
  },
  {
    symbol: 'SWJ-CL',
    name: 'Stanley Black Decker Inc 575 Junior Subordinated Debenture due 2052'
  },
  {
    symbol: 'SWK',
    name: 'Stanley Black & Decker Inc'
  },
  {
    symbol: 'SWKH',
    name: 'Swk Holdings Corp'
  },
  {
    symbol: 'SWKS',
    name: 'Skyworks Solutions Inc'
  },
  {
    symbol: 'SWN',
    name: 'Southwestern Energy Company'
  },
  {
    symbol: 'SWP',
    name: 'Stanley Black Decker Inc Corporate Units'
  },
  {
    symbol: 'SWSS',
    name: 'Springwater Special Situations Corp'
  },
  {
    symbol: 'SWSSU',
    name: 'Springwater Special Situations Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'SWSSW',
    name: 'Springwater Special Situations Corp - Warrants (01/12/2027)'
  },
  {
    symbol: 'SWT',
    name: 'Stanley Black & Decker Inc - Unit'
  },
  {
    symbol: 'SWTX',
    name: 'SpringWorks Therapeutics Inc'
  },
  {
    symbol: 'SWVL',
    name: 'Swvl Holdings Corp - Class A'
  },
  {
    symbol: 'SWVLW',
    name: 'Swvl Holdings Corp - Warrants (31/03/2027)'
  },
  {
    symbol: 'SWX',
    name: 'Southwest Gas Holdings Inc'
  },
  {
    symbol: 'SXC',
    name: 'SunCoke Energy Inc'
  },
  {
    symbol: 'SXI',
    name: 'Standex International Corp'
  },
  {
    symbol: 'SXT',
    name: 'Sensient Technologies Corp'
  },
  {
    symbol: 'SXTC',
    name: 'China SXT Pharmaceuticals Inc'
  },
  {
    symbol: 'SY',
    name: 'So-Young International Inc'
  },
  {
    symbol: 'SYBT',
    name: 'Stock Yards Bancorp Inc'
  },
  {
    symbol: 'SYBX',
    name: 'Synlogic Inc'
  },
  {
    symbol: 'SYF',
    name: 'Synchrony Financial'
  },
  {
    symbol: 'SYF-P-A',
    name: 'Synchrony Financial'
  },
  {
    symbol: 'SYK',
    name: 'Stryker Corp'
  },
  {
    symbol: 'SYM',
    name: 'Symbotic Inc - Class A'
  },
  {
    symbol: 'SYN',
    name: 'Synthetic Biologics Inc'
  },
  {
    symbol: 'SYNA',
    name: 'Synaptics Inc'
  },
  {
    symbol: 'SYNH',
    name: 'Syneos Health Inc - Class A'
  },
  {
    symbol: 'SYNL',
    name: 'Synalloy Corp'
  },
  {
    symbol: 'SYPR',
    name: 'Sypris Solutions Inc'
  },
  {
    symbol: 'SYRS',
    name: 'Syros Pharmaceuticals Inc'
  },
  {
    symbol: 'SYTA',
    name: 'Siyata Mobile Inc'
  },
  {
    symbol: 'SYTAW',
    name: 'Siyata Mobile Inc - Warrants (25/09/2025)'
  },
  {
    symbol: 'SYY',
    name: 'Sysco Corp'
  },
  {
    symbol: 'SZZL',
    name: 'Sizzle Acquisition Corp'
  },
  {
    symbol: 'SZZLW',
    name: 'Sizzle Acquisition Corp - Warrants (02/11/2026)'
  },
  {
    symbol: 'T',
    name: 'AT&T Inc'
  },
  {
    symbol: 'T-P-A',
    name: 'AT&T Inc'
  },
  {
    symbol: 'T-P-C',
    name: 'AT&T Inc'
  },
  {
    symbol: 'TA',
    name: 'TravelCenters of America Inc'
  },
  {
    symbol: 'TAC',
    name: 'Transalta Corp'
  },
  {
    symbol: 'TACA-U',
    name: 'Trepont Acquisition Corp I Units each consisting of one Class A ordinary share and onehalf of one redeemable warrant'
  },
  {
    symbol: 'TACT',
    name: 'Transact Technologies Inc'
  },
  {
    symbol: 'TAIT',
    name: 'Taitron Components Inc - Class A'
  },
  {
    symbol: 'TAK',
    name: 'Takeda Pharmaceutical Company'
  },
  {
    symbol: 'TAL',
    name: 'TAL Education Group'
  },
  {
    symbol: 'TALK',
    name: 'Talkspace Inc'
  },
  {
    symbol: 'TALKW',
    name: 'Talkspace Inc - Warrants (21/06/2025)'
  },
  {
    symbol: 'TALO',
    name: 'Talos Energy Inc'
  },
  {
    symbol: 'TALS',
    name: 'Talaris Therapeutics Inc'
  },
  {
    symbol: 'TANH',
    name: 'Tantech Holdings Ltd'
  },
  {
    symbol: 'TANNI',
    name: 'TravelCenters of America Inc'
  },
  {
    symbol: 'TANNL',
    name: 'TravelCenters of America Inc'
  },
  {
    symbol: 'TANNZ',
    name: 'TravelCenters of America Inc'
  },
  {
    symbol: 'TAOP',
    name: 'Taoping Inc'
  },
  {
    symbol: 'TAP',
    name: 'Molson Coors Beverage Company - Class B'
  },
  {
    symbol: 'TAP-A',
    name: 'Molson Coors Beverage Company - Class A'
  },
  {
    symbol: 'TARA',
    name: 'Protara Therapeutics Inc'
  },
  {
    symbol: 'TARO',
    name: 'Taro Pharmaceutical Industries'
  },
  {
    symbol: 'TARS',
    name: 'Tarsus Pharmaceuticals Inc'
  },
  {
    symbol: 'TASK',
    name: 'TaskUs Inc Class A'
  },
  {
    symbol: 'TAST',
    name: 'Carrols Restaurant Group Inc'
  },
  {
    symbol: 'TATT',
    name: 'Tat Technologies'
  },
  {
    symbol: 'TAYD',
    name: 'Taylor Devices Inc'
  },
  {
    symbol: 'TBB',
    name: 'AT&T Inc'
  },
  {
    symbol: 'TBBK',
    name: 'Bancorp Inc (The)'
  },
  {
    symbol: 'TBC',
    name: 'AT&T Inc'
  },
  {
    symbol: 'TBCP',
    name: 'Thunder Bridge Capital Partners III Inc - Class A'
  },
  {
    symbol: 'TBCPU',
    name: 'Thunder Bridge Capital Partners III Inc - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'TBCPW',
    name: 'Thunder Bridge Capital Partners III Inc - Warrants (01/02/2025)'
  },
  {
    symbol: 'TBI',
    name: 'TrueBlue Inc'
  },
  {
    symbol: 'TBK',
    name: 'Triumph Bancorp Inc'
  },
  {
    symbol: 'TBKCP',
    name: 'Triumph Bancorp Inc'
  },
  {
    symbol: 'TBLA',
    name: 'Taboola.com Ltd'
  },
  {
    symbol: 'TBLD',
    name: 'Thornburg Income Builder Opportunities Trust'
  },
  {
    symbol: 'TBLT',
    name: 'Toughbuilt Industries Inc'
  },
  {
    symbol: 'TBLTW',
    name: 'Toughbuilt Industries Inc - Warrants - Series A (09/11/2023)'
  },
  {
    symbol: 'TBNK',
    name: 'Territorial Bancorp Inc'
  },
  {
    symbol: 'TBPH',
    name: 'Theravance Biopharma Inc'
  },
  {
    symbol: 'TBSA',
    name: 'TB SA Acquisition Corp - Class A'
  },
  {
    symbol: 'TBSAU',
    name: 'TB SA Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'TBSAW',
    name: 'TB SA Acquisition Corp - Warrants (01/03/2028)'
  },
  {
    symbol: 'TC',
    name: 'TuanChe Ltd'
  },
  {
    symbol: 'TCBC',
    name: 'TC Bancshares Inc'
  },
  {
    symbol: 'TCBI',
    name: 'Texas Capital Bancshares Inc'
  },
  {
    symbol: 'TCBIO',
    name: 'Texas Capital Bancshares Inc'
  },
  {
    symbol: 'TCBK',
    name: 'Trico Bancshares'
  },
  {
    symbol: 'TCBP',
    name: 'TC BioPharm (Holdings) plc'
  },
  {
    symbol: 'TCBPW',
    name: 'TC BioPharm (Holdings) plc - Warrants (08/02/2027)'
  },
  {
    symbol: 'TCBS',
    name: 'Texas Community Bancshares Inc'
  },
  {
    symbol: 'TCBX',
    name: 'Third Coast Bancshares Inc'
  },
  {
    symbol: 'TCDA',
    name: 'Tricida Inc'
  },
  {
    symbol: 'TCFC',
    name: 'Community Financial Corp'
  },
  {
    symbol: 'TCI',
    name: 'Transcontinental Realty Investors Inc'
  },
  {
    symbol: 'TCMD',
    name: 'Tactile Systems Technology Inc'
  },
  {
    symbol: 'TCN',
    name: 'Tricon Residential Inc'
  },
  {
    symbol: 'TCOA',
    name: 'Trajectory Alpha Acquisition Corp - Class A'
  },
  {
    symbol: 'TCOA-U',
    name: 'Trajectory Alpha Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'TCOA-WS',
    name: 'Trajectory Alpha Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'TCOM',
    name: 'Trip.com Group Ltd'
  },
  {
    symbol: 'TCON',
    name: 'TRACON Pharmaceuticals Inc'
  },
  {
    symbol: 'TCPC',
    name: 'BlackRock TCP Capital Corp'
  },
  {
    symbol: 'TCRR',
    name: 'Tcr2 Therapeutics Inc'
  },
  {
    symbol: 'TCRT',
    name: 'Alaunos Therapeutics Inc'
  },
  {
    symbol: 'TCRX',
    name: 'Tscan Therapeutics Inc'
  },
  {
    symbol: 'TCS',
    name: 'Container Store Group Inc'
  },
  {
    symbol: 'TCVA',
    name: 'TCV Acquisition Corp - Class A'
  },
  {
    symbol: 'TCX',
    name: 'Tucows Inc - Class A'
  },
  {
    symbol: 'TD',
    name: 'Toronto Dominion Bank'
  },
  {
    symbol: 'TDAC',
    name: ''
  },
  {
    symbol: 'TDC',
    name: 'Teradata Corp'
  },
  {
    symbol: 'TDCX',
    name: 'TDCX Inc'
  },
  {
    symbol: 'TDG',
    name: 'Transdigm Group Incorporated'
  },
  {
    symbol: 'TDOC',
    name: 'Teladoc Health Inc'
  },
  {
    symbol: 'TDS',
    name: 'Telephone And Data Systems Inc'
  },
  {
    symbol: 'TDS-P-U',
    name: 'Telephone And Data Systems Inc'
  },
  {
    symbol: 'TDS-P-V',
    name: 'Telephone And Data Systems Inc'
  },
  {
    symbol: 'TDUP',
    name: 'ThredUp Inc - Class A'
  },
  {
    symbol: 'TDW',
    name: 'Tidewater Inc - New'
  },
  {
    symbol: 'TDW-WS',
    name: 'Tidewater Inc - Warrants (24/11/2024)'
  },
  {
    symbol: 'TDW-WS-A',
    name: 'Tidewater Inc - Warrants - Class A (31/07/2023)'
  },
  {
    symbol: 'TDW-WS-B',
    name: 'Tidewater Inc - Warrants - Class B (31/07/2023)'
  },
  {
    symbol: 'TDY',
    name: 'Teledyne Technologies Inc'
  },
  {
    symbol: 'TEAF',
    name: 'Ecofin Sustainable and Social Impact Term Fund'
  },
  {
    symbol: 'TEAM',
    name: 'Atlassian Corporation Plc - Class A'
  },
  {
    symbol: 'TECH',
    name: 'Bio-Techne Corp'
  },
  {
    symbol: 'TECK',
    name: 'Teck Resources Ltd - Class B'
  },
  {
    symbol: 'TECTP',
    name: 'Tectonic Financial Inc'
  },
  {
    symbol: 'TEDU',
    name: 'Tarena International Inc'
  },
  {
    symbol: 'TEF',
    name: 'Telefonica S.A'
  },
  {
    symbol: 'TEKK',
    name: 'Tekkorp Digital Acquisition Corp - Class A'
  },
  {
    symbol: 'TEKKU',
    name: 'Tekkorp Digital Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'TEKKW',
    name: 'Tekkorp Digital Acquisition Corp - Warrants(26/10/2027)'
  },
  {
    symbol: 'TEL',
    name: 'TE Connectivity Ltd'
  },
  {
    symbol: 'TELA',
    name: 'TELA Bio Inc'
  },
  {
    symbol: 'TELL',
    name: 'Tellurian Inc'
  },
  {
    symbol: 'TELZ',
    name: 'Tellurian Inc'
  },
  {
    symbol: 'TEN',
    name: 'Tenneco Inc - Class A'
  },
  {
    symbol: 'TENB',
    name: 'Tenable Holdings Inc'
  },
  {
    symbol: 'TENX',
    name: 'Tenax Therapeutics Inc'
  },
  {
    symbol: 'TEO',
    name: 'Telecom Argentina S.A.'
  },
  {
    symbol: 'TER',
    name: 'Teradyne Inc'
  },
  {
    symbol: 'TERN',
    name: 'Terns Pharmaceuticals Inc'
  },
  {
    symbol: 'TESS',
    name: 'Tessco Technologies Inc'
  },
  {
    symbol: 'TETC',
    name: 'Tech and Energy Transition Corp - Class A'
  },
  {
    symbol: 'TETCU',
    name: 'Tech and Energy Transition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'TETCW',
    name: 'Tech and Energy Transition Corp - Warrants (31/03/2028)'
  },
  {
    symbol: 'TETE',
    name: 'Technology & Telecommunication Acquisition Corp - Class A'
  },
  {
    symbol: 'TETEU',
    name: 'Technology & Telecommunication Acquisition Corp - Units (1 Ord Class A & 1 War)'
  },
  {
    symbol: 'TETEW',
    name: 'Technology & Telecommunication Acquisition Corp - Warrants (13/01/2027)'
  },
  {
    symbol: 'TEVA',
    name: 'Teva- Pharmaceutical Industries Ltd'
  },
  {
    symbol: 'TEX',
    name: 'Terex Corp'
  },
  {
    symbol: 'TFC',
    name: 'Truist Financial Corporation'
  },
  {
    symbol: 'TFC-P-I',
    name: 'Truist Financial Corporation'
  },
  {
    symbol: 'TFC-P-O',
    name: 'Truist Financial Corporation'
  },
  {
    symbol: 'TFC-P-R',
    name: 'Truist Financial Corporation'
  },
  {
    symbol: 'TFFP',
    name: 'Tff Pharmaceuticals Inc'
  },
  {
    symbol: 'TFII',
    name: 'TFI International Inc'
  },
  {
    symbol: 'TFSA',
    name: 'Terra Income Fund 6 Inc'
  },
  {
    symbol: 'TFSL',
    name: 'TFS Financial Corporation'
  },
  {
    symbol: 'TFX',
    name: 'Teleflex Incorporated'
  },
  {
    symbol: 'TG',
    name: 'Tredegar Corp'
  },
  {
    symbol: 'TGA',
    name: 'Transglobe Energy Corp'
  },
  {
    symbol: 'TGAA',
    name: 'Target Global Acquisition I Corp - Class A'
  },
  {
    symbol: 'TGAAU',
    name: 'Target Global Acquisition I Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'TGAAW',
    name: 'Target Global Acquisition I Corp - Warrants (09/03/2026)'
  },
  {
    symbol: 'TGAN',
    name: 'Transphorm Inc'
  },
  {
    symbol: 'TGB',
    name: 'Taseko Mines Ltd'
  },
  {
    symbol: 'TGH',
    name: 'Textainer Group Holdings Ltd'
  },
  {
    symbol: 'TGH-P-A',
    name: 'Textainer Group Holdings Ltd'
  },
  {
    symbol: 'TGH-P-B',
    name: 'Textainer Group Holdings Ltd'
  },
  {
    symbol: 'TGI',
    name: 'Triumph Group Inc'
  },
  {
    symbol: 'TGLS',
    name: 'Tecnoglass Inc'
  },
  {
    symbol: 'TGNA',
    name: 'TEGNA Inc'
  },
  {
    symbol: 'TGR',
    name: 'Kimbell Tiger Acquisition Corp - Class A'
  },
  {
    symbol: 'TGR-U',
    name: 'Kimbell Tiger Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'TGR-WS',
    name: 'Kimbell Tiger Acquisition Corporation Warrants each whole warrant exercisable for one share of Class A common stock at an exercise price of 11.50 per share'
  },
  {
    symbol: 'TGS',
    name: 'Transportadora de Gas del Sur'
  },
  {
    symbol: 'TGT',
    name: 'Target Corp'
  },
  {
    symbol: 'TGTX',
    name: 'TG Therapeutics Inc'
  },
  {
    symbol: 'TGVC',
    name: 'TG Venture Acquisition Corp - Class A'
  },
  {
    symbol: 'TGVCU',
    name: 'TG Venture Acquisition Corp - Units (1 Ord Share Class A & 1 War)'
  },
  {
    symbol: 'TGVCW',
    name: 'TG Venture Acquisition Corp - Warrants (15/08/2028)'
  },
  {
    symbol: 'TH',
    name: 'Target Hospitality Corp - Class A'
  },
  {
    symbol: 'THAC',
    name: 'Thrive Acquisition Corp - Class A'
  },
  {
    symbol: 'THACU',
    name: 'Thrive Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'THACW',
    name: 'Thrive Acquisition Corp - Warrants (31/10/2028)'
  },
  {
    symbol: 'THBRU',
    name: 'Thunder Bridge Acquisition II Ltd Units 1 Ord Share Class A & 12 War'
  },
  {
    symbol: 'THBRW',
    name: 'Thunder Bridge Acquisition II Ltd Wt 11302026'
  },
  {
    symbol: 'THC',
    name: 'Tenet Healthcare Corp'
  },
  {
    symbol: 'THCA',
    name: 'Tuscan Holdings Corp II'
  },
  {
    symbol: 'THCAU',
    name: 'Tuscan Holdings Corp II - Units (1 Ord shares & 1/2 Wrt)'
  },
  {
    symbol: 'THCAW',
    name: 'Tuscan Holdings Corp II - Warrants (01/04/2026)'
  },
  {
    symbol: 'THCP',
    name: 'Thunder Bridge Capital Partners IV Inc - Class A'
  },
  {
    symbol: 'THCPU',
    name: 'Thunder Bridge Capital Partners IV Inc - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'THCPW',
    name: 'Thunder Bridge Capital Partners IV Inc - Warrants (30/06/2026)'
  },
  {
    symbol: 'THFF',
    name: 'First Financial Corp - Indiana'
  },
  {
    symbol: 'THG',
    name: 'Hanover Insurance Group Inc'
  },
  {
    symbol: 'THM',
    name: 'International Tower Hill Mines Ltd'
  },
  {
    symbol: 'THMO',
    name: 'ThermoGenesis Holdings Inc'
  },
  {
    symbol: 'THO',
    name: 'Thor Industries Inc'
  },
  {
    symbol: 'THR',
    name: 'Thermon Group Holdings Inc'
  },
  {
    symbol: 'THRM',
    name: 'Gentherm Inc - Class A'
  },
  {
    symbol: 'THRN',
    name: 'Thorne Healthtech Inc'
  },
  {
    symbol: 'THRX',
    name: 'Theseus Pharmaceuticals Inc'
  },
  {
    symbol: 'THRY',
    name: 'Thryv Holdings Inc'
  },
  {
    symbol: 'THS',
    name: 'Treehouse Foods Inc'
  },
  {
    symbol: 'THTX',
    name: 'Theratechnologies Inc'
  },
  {
    symbol: 'THWWW',
    name: 'Target Hospitality Corp - Warrants (15/03/2024)'
  },
  {
    symbol: 'TIG',
    name: 'Trean Insurance Group Inc'
  },
  {
    symbol: 'TIGO',
    name: 'Millicom International Cellular S.A.'
  },
  {
    symbol: 'TIGR',
    name: 'UP Fintech Holding Ltd'
  },
  {
    symbol: 'TIL',
    name: 'Instil Bio Inc'
  },
  {
    symbol: 'TILE',
    name: 'Interface Inc'
  },
  {
    symbol: 'TIMB',
    name: 'TIM SA'
  },
  {
    symbol: 'TIMB-W',
    name: 'TIM S.A. American Depositary Shares Each representing 5 When Issued'
  },
  {
    symbol: 'TINV',
    name: 'Tiga Acquisition Corp - Class A'
  },
  {
    symbol: 'TINV-U',
    name: 'Tiga Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'TINV-WS',
    name: 'Tiga Acquisition Corp - Warrants (06/11/2025)'
  },
  {
    symbol: 'TIOA',
    name: 'Tio Tech A - Class A'
  },
  {
    symbol: 'TIOAU',
    name: 'Tio Tech A - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'TIOAW',
    name: 'Tio Tech A - Warrants (31/03/2028)'
  },
  {
    symbol: 'TIPT',
    name: 'Tiptree Inc'
  },
  {
    symbol: 'TIRX',
    name: 'Tian Ruixiang Holdings Ltd - Class A'
  },
  {
    symbol: 'TISI',
    name: 'Team Inc'
  },
  {
    symbol: 'TITN',
    name: 'Titan Machinery Inc'
  },
  {
    symbol: 'TIVC',
    name: 'Tivic Health Systems Inc'
  },
  {
    symbol: 'TIXT',
    name: 'TELUS International (Cda) Inc (Sub Voting)'
  },
  {
    symbol: 'TJX',
    name: 'TJX Companies Inc'
  },
  {
    symbol: 'TK',
    name: 'Teekay Corp'
  },
  {
    symbol: 'TKAT',
    name: 'Takung Art Co Ltd'
  },
  {
    symbol: 'TKC',
    name: 'Turkcell Iletisim Hizmetleri A.S.'
  },
  {
    symbol: 'TKLF',
    name: 'Yoshitsu Co Ltd'
  },
  {
    symbol: 'TKNO',
    name: 'Alpha Teknova Inc'
  },
  {
    symbol: 'TKR',
    name: 'Timken Company'
  },
  {
    symbol: 'TLGA',
    name: 'TLG Acquisition One Corp - Class A'
  },
  {
    symbol: 'TLGA-U',
    name: 'TLG Acquisition One Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'TLGA-WS',
    name: 'TLG Acquisition One Corp - Warrants (25/01/2028)'
  },
  {
    symbol: 'TLGY',
    name: 'TLGY Acquisition Corp - Class A'
  },
  {
    symbol: 'TLGYU',
    name: 'TLGY Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'TLGYW',
    name: 'TLGY Acquisition Corp - Warrants (09/11/2026)'
  },
  {
    symbol: 'TLIS',
    name: 'Talis Biomedical Corp'
  },
  {
    symbol: 'TLK',
    name: 'PT Telkom Indonesia (Persero) Tbk'
  },
  {
    symbol: 'TLRY',
    name: 'Tilray Brands Inc - Class 2'
  },
  {
    symbol: 'TLS',
    name: 'Telos Corp'
  },
  {
    symbol: 'TLSA',
    name: 'Tiziana Life Sciences Ltd'
  },
  {
    symbol: 'TLYS',
    name: 'Tillys Inc - Class A'
  },
  {
    symbol: 'TM',
    name: 'Toyota Motor Corporation'
  },
  {
    symbol: 'TMAC',
    name: 'Music Acquisition Corporation - Series A'
  },
  {
    symbol: 'TMAC-U',
    name: 'Music Acquisition Corporation - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'TMAC-WS',
    name: 'Music Acquisition Corporation - Warrants (05/02/2028)'
  },
  {
    symbol: 'TMBR',
    name: 'Timber Pharmaceuticals Inc'
  },
  {
    symbol: 'TMC',
    name: 'TMC the metals company Inc'
  },
  {
    symbol: 'TMCI',
    name: 'Treace Medical Concepts Inc'
  },
  {
    symbol: 'TMCWW',
    name: 'TMC the metals company Inc - Warrants (09/09/2026)'
  },
  {
    symbol: 'TMDI',
    name: 'Titan Medical Inc'
  },
  {
    symbol: 'TMDX',
    name: 'Transmedics Group Inc'
  },
  {
    symbol: 'TME',
    name: 'Tencent Music Entertainment Group'
  },
  {
    symbol: 'TMHC',
    name: 'Taylor Morrison Home Corp'
  },
  {
    symbol: 'TMKR',
    name: 'Tastemaker Acquisition Corp - Class A'
  },
  {
    symbol: 'TMKRU',
    name: 'Tastemaker Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'TMKRW',
    name: 'Tastemaker Acquisition Corp - Warrants (02/12/2025)'
  },
  {
    symbol: 'TMO',
    name: 'Thermo Fisher Scientific Inc'
  },
  {
    symbol: 'TMP',
    name: 'Tompkins Financial Corp'
  },
  {
    symbol: 'TMPM',
    name: 'Turmeric Acquisition Corp - Class A'
  },
  {
    symbol: 'TMPMU',
    name: 'Turmeric Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'TMPMW',
    name: 'Turmeric Acquisition Corp - Warrants (20/10/2025)'
  },
  {
    symbol: 'TMQ',
    name: 'Trilogy Metals Inc'
  },
  {
    symbol: 'TMST',
    name: 'TimkenSteel Corp'
  },
  {
    symbol: 'TMUS',
    name: 'T-Mobile US Inc'
  },
  {
    symbol: 'TMUSR',
    name: 'TMobile US Inc Tradeable Rights June 2020'
  },
  {
    symbol: 'TMX',
    name: 'Terminix Global Holdings Inc'
  },
  {
    symbol: 'TNC',
    name: 'Tennant Company'
  },
  {
    symbol: 'TNDM',
    name: 'Tandem Diabetes Care Inc'
  },
  {
    symbol: 'TNET',
    name: 'TriNet Group Inc'
  },
  {
    symbol: 'TNGX',
    name: 'Tango Therapeutics Inc'
  },
  {
    symbol: 'TNK',
    name: 'Teekay Tankers Ltd - Class A'
  },
  {
    symbol: 'TNL',
    name: 'Travel+Leisure Company'
  },
  {
    symbol: 'TNON',
    name: 'Tenon Medical Inc'
  },
  {
    symbol: 'TNP',
    name: 'Tsakos Energy Navigation Ltd'
  },
  {
    symbol: 'TNP-P-D',
    name: 'Tsakos Energy Navigation Ltd'
  },
  {
    symbol: 'TNP-P-E',
    name: 'Tsakos Energy Navigation Ltd'
  },
  {
    symbol: 'TNP-P-F',
    name: 'Tsakos Energy Navigation Ltd'
  },
  {
    symbol: 'TNXP',
    name: 'Tonix Pharmaceuticals Holding Corp'
  },
  {
    symbol: 'TNYA',
    name: 'Tenaya Therapeutics Inc'
  },
  {
    symbol: 'TOAC',
    name: 'Talon 1 Acquisition Corp - Class A'
  },
  {
    symbol: 'TOACU',
    name: 'Talon 1 Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'TOACW',
    name: 'Talon 1 Acquisition Corp - Warrants (02/11/2026)'
  },
  {
    symbol: 'TOI',
    name: 'Oncology Institute Inc (The)'
  },
  {
    symbol: 'TOIIW',
    name: 'Oncology Institute Inc (The) - Warrants (15/11/2026)'
  },
  {
    symbol: 'TOL',
    name: 'Toll Brothers Inc'
  },
  {
    symbol: 'TOMZ',
    name: 'TOMI Environmental Solutions Inc'
  },
  {
    symbol: 'TOP',
    name: 'Zhong Yang Financial Group Ltd'
  },
  {
    symbol: 'TOPS',
    name: 'Top Ships Inc'
  },
  {
    symbol: 'TOST',
    name: 'Toast Inc - Class A'
  },
  {
    symbol: 'TOUR',
    name: 'Tuniu Corp'
  },
  {
    symbol: 'TOWN',
    name: 'Townebank Portsmouth VA'
  },
  {
    symbol: 'TPAY',
    name: 'ECOFIN DIGITAL PAYMENTS INFRASTRUCTURE FUND '
  },
  {
    symbol: 'TPB',
    name: 'Turning Point Brands Inc'
  },
  {
    symbol: 'TPBA',
    name: 'TPB Acquisition Corp I - Class A'
  },
  {
    symbol: 'TPBAU',
    name: 'TPB Acquisition Corp I - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'TPBAW',
    name: 'TPB Acquisition Corp I - Warrants (09/08/2026)'
  },
  {
    symbol: 'TPC',
    name: 'Tutor Perini Corp'
  },
  {
    symbol: 'TPG',
    name: 'TPG Inc - Class A'
  },
  {
    symbol: 'TPGY',
    name: 'TPG Pace Beneficial Finance Corp - Class A'
  },
  {
    symbol: 'TPGY-U',
    name: 'TPG Pace Beneficial Finance Corp - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'TPGY-WS',
    name: 'TPG Pace Beneficial Finance Corp - Warrants (10/09/2027)'
  },
  {
    symbol: 'TPH',
    name: 'Tri Pointe Homes Inc'
  },
  {
    symbol: 'TPHS',
    name: 'Trinity Place Holdings Inc'
  },
  {
    symbol: 'TPIC',
    name: 'TPI Composites Inc'
  },
  {
    symbol: 'TPL',
    name: 'Texas Pacific Land Corporation'
  },
  {
    symbol: 'TPR',
    name: 'Tapestry Inc'
  },
  {
    symbol: 'TPST',
    name: 'Tempest Therapeutics Inc'
  },
  {
    symbol: 'TPTA',
    name: 'Terra Property Trust Inc'
  },
  {
    symbol: 'TPTX',
    name: 'Turning Point Therapeutics Inc'
  },
  {
    symbol: 'TPVG',
    name: 'TriplePoint Venture Growth BDC Corp'
  },
  {
    symbol: 'TPX',
    name: 'Tempur Sealy International Inc'
  },
  {
    symbol: 'TR',
    name: 'Tootsie Roll Industries Inc'
  },
  {
    symbol: 'TRAQ',
    name: 'Trine II Acquisition Corp - Class A'
  },
  {
    symbol: 'TRAQ-U',
    name: 'Trine II Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'TRAQ-WS',
    name: 'Trine II Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'TRC',
    name: 'Tejon Ranch Company'
  },
  {
    symbol: 'TRCA',
    name: 'Twin Ridge Capital Acquisition Corp - Class A'
  },
  {
    symbol: 'TRCA-U',
    name: 'Twin Ridge Capital Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'TRCA-WS',
    name: 'Twin Ridge Capital Acquisition Corp Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'TRDA',
    name: 'Entrada Therapeutics Inc'
  },
  {
    symbol: 'TREE',
    name: 'LendingTree Inc'
  },
  {
    symbol: 'TREX',
    name: 'TREX Co. Inc'
  },
  {
    symbol: 'TRGP',
    name: 'Targa Resources Corp'
  },
  {
    symbol: 'TRHC',
    name: 'Tabula Rasa HealthCare Inc'
  },
  {
    symbol: 'TRI',
    name: 'Thomson-Reuters Corp'
  },
  {
    symbol: 'TRIB',
    name: 'Trinity Biotech Plc'
  },
  {
    symbol: 'TRIN',
    name: 'Trinity Capital Inc'
  },
  {
    symbol: 'TRIP',
    name: 'TripAdvisor Inc'
  },
  {
    symbol: 'TRIS',
    name: 'Tristar Acquisition I Corp - Class A'
  },
  {
    symbol: 'TRIS-U',
    name: 'Tristar Acquisition I Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'TRIS-WS',
    name: 'Tristar Acquisition I Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'TRKA',
    name: 'Troika Media Group Inc'
  },
  {
    symbol: 'TRKAW',
    name: 'Troika Media Group Inc - Warrants (13/04/2024)'
  },
  {
    symbol: 'TRMB',
    name: 'Trimble Inc'
  },
  {
    symbol: 'TRMD',
    name: 'Torm Plc - Class A'
  },
  {
    symbol: 'TRMK',
    name: 'Trustmark Corp'
  },
  {
    symbol: 'TRMR',
    name: 'Tremor International Ltd'
  },
  {
    symbol: 'TRN',
    name: 'Trinity Industries Inc'
  },
  {
    symbol: 'TRNE-U',
    name: 'Desktop Metal Inc - Unit (1 Ord share Cls A & 1/2 Wrt)'
  },
  {
    symbol: 'TRNO',
    name: 'Terreno Realty Corp'
  },
  {
    symbol: 'TRNS',
    name: 'Transcat Inc'
  },
  {
    symbol: 'TRON',
    name: 'Corner Growth Acquisition Corp 2 - Class A'
  },
  {
    symbol: 'TRONU',
    name: 'Corner Growth Acquisition Corp 2 - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'TRONW',
    name: 'Corner Growth Acquisition Corp 2 - Warrants (09/04/2026)'
  },
  {
    symbol: 'TROO',
    name: 'TROOPS Inc'
  },
  {
    symbol: 'TROW',
    name: 'T. Rowe Price Group Inc'
  },
  {
    symbol: 'TROX',
    name: 'Tronox Holdings plc - Class A'
  },
  {
    symbol: 'TRP',
    name: 'TC Energy Corporation'
  },
  {
    symbol: 'TRQ',
    name: 'Turquoise Hill Resources Ltd'
  },
  {
    symbol: 'TRS',
    name: 'Trimas Corporation'
  },
  {
    symbol: 'TRST',
    name: 'Trustco Bank Corp'
  },
  {
    symbol: 'TRT',
    name: 'Trio-Tech International'
  },
  {
    symbol: 'TRTL',
    name: 'TortoiseEcofin Acquisition Corp III - Class A'
  },
  {
    symbol: 'TRTL-U',
    name: 'TortoiseEcofin Acquisition Corp III - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'TRTL-WS',
    name: 'TortoiseEcofin Acquisition Corp III - Warrants (01/01/9999)'
  },
  {
    symbol: 'TRTN',
    name: 'Triton International Ltd'
  },
  {
    symbol: 'TRTN-P-A',
    name: 'Triton International Limited 8.50 Series A Cumulative Redeemable Perpetual Preference Shares'
  },
  {
    symbol: 'TRTN-P-B',
    name: 'Triton International Ltd 8 PRF PERPETUAL USD 25 Ser B'
  },
  {
    symbol: 'TRTN-P-C',
    name: 'Triton International Ltd'
  },
  {
    symbol: 'TRTN-P-D',
    name: 'Triton International Ltd'
  },
  {
    symbol: 'TRTN-P-E',
    name: 'Triton International Ltd'
  },
  {
    symbol: 'TRTX',
    name: 'TPG RE Finance Trust Inc'
  },
  {
    symbol: 'TRTX-P-C',
    name: 'TPG RE Finance Trust Inc'
  },
  {
    symbol: 'TRU',
    name: 'TransUnion'
  },
  {
    symbol: 'TRUE',
    name: 'Truecar Inc'
  },
  {
    symbol: 'TRUP',
    name: 'Trupanion Inc'
  },
  {
    symbol: 'TRV',
    name: 'Travelers Companies Inc'
  },
  {
    symbol: 'TRVG',
    name: 'Trivago NV'
  },
  {
    symbol: 'TRVI',
    name: 'Trevi Therapeutics Inc'
  },
  {
    symbol: 'TRVN',
    name: 'Trevena Inc'
  },
  {
    symbol: 'TRX',
    name: 'TRX Gold Corp'
  },
  {
    symbol: 'TS',
    name: 'Tenaris S.A.'
  },
  {
    symbol: 'TSAT',
    name: 'Telesat Corp - Class A'
  },
  {
    symbol: 'TSBK',
    name: 'Timberland Bancorp Inc'
  },
  {
    symbol: 'TSCAP',
    name: 'Tristate Capital Holdings Inc'
  },
  {
    symbol: 'TSCO',
    name: 'Tractor Supply Company'
  },
  {
    symbol: 'TSE',
    name: 'Trinseo PLC'
  },
  {
    symbol: 'TSEM',
    name: 'Tower Semiconductor Ltd'
  },
  {
    symbol: 'TSHA',
    name: 'Taysha Gene Therapies Inc'
  },
  {
    symbol: 'TSIB',
    name: 'Tishman Speyer Innovation Corp II - Class A'
  },
  {
    symbol: 'TSIBU',
    name: 'Tishman Speyer Innovation Corp II - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'TSIBW',
    name: 'Tishman Speyer Innovation Corp II - Warrants (11/02/2026)'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc'
  },
  {
    symbol: 'TSLX',
    name: 'Sixth Street Specialty Lending Inc'
  },
  {
    symbol: 'TSM',
    name: 'Taiwan Semiconductor Manufacturing'
  },
  {
    symbol: 'TSN',
    name: 'Tyson Foods Inc - Class A'
  },
  {
    symbol: 'TSP',
    name: 'TuSimple Holdings Inc - Class A'
  },
  {
    symbol: 'TSPQ',
    name: 'TCW Special Purpose Acquisition Corp - Class A'
  },
  {
    symbol: 'TSPQ-U',
    name: 'TCW Special Purpose Acquisition Corp - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'TSPQ-WS',
    name: 'TCW Special Purpose Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'TSQ',
    name: 'Townsquare Media Inc - Class A'
  },
  {
    symbol: 'TSRI',
    name: 'TSR Inc'
  },
  {
    symbol: 'TSVT',
    name: '2seventy bio Inc'
  },
  {
    symbol: 'TSVTV',
    name: '2seventy bio Inc'
  },
  {
    symbol: 'TT',
    name: 'Trane Technologies plc - Class A'
  },
  {
    symbol: 'TTC',
    name: 'Toro Company'
  },
  {
    symbol: 'TTCF',
    name: 'Tattooed Chef Inc - Class A'
  },
  {
    symbol: 'TTD',
    name: 'Trade Desk Inc - Class A'
  },
  {
    symbol: 'TTE',
    name: 'TotalEnergies SE'
  },
  {
    symbol: 'TTEC',
    name: 'TTEC Holdings Inc'
  },
  {
    symbol: 'TTEK',
    name: 'Tetra Tech Inc'
  },
  {
    symbol: 'TTGT',
    name: 'Techtarget Inc'
  },
  {
    symbol: 'TTI',
    name: 'Tetra Technologies Inc'
  },
  {
    symbol: 'TTM',
    name: 'Tata Motors Ltd'
  },
  {
    symbol: 'TTMI',
    name: 'TTM Technologies Inc'
  },
  {
    symbol: 'TTNP',
    name: 'Titan Pharmaceuticals Inc (de)'
  },
  {
    symbol: 'TTOO',
    name: 'T2 Biosystems Inc'
  },
  {
    symbol: 'TTSH',
    name: 'Tile Shop Hldgs Inc'
  },
  {
    symbol: 'TTWO',
    name: 'Take-Two Interactive Software Inc'
  },
  {
    symbol: 'TU',
    name: 'Telus Corp'
  },
  {
    symbol: 'TUEM',
    name: 'Tuesday Morning Corp - New'
  },
  {
    symbol: 'TUFN',
    name: 'Tufin Software Technologies Ltd'
  },
  {
    symbol: 'TUP',
    name: 'Tupperware Brands Corporation'
  },
  {
    symbol: 'TURN',
    name: '180 Degree Capital Corp'
  },
  {
    symbol: 'TUSK',
    name: 'Mammoth Energy Services Inc'
  },
  {
    symbol: 'TUYA',
    name: 'Tuya Inc'
  },
  {
    symbol: 'TV',
    name: 'Grupo Televisa SAB'
  },
  {
    symbol: 'TVC',
    name: 'Tennessee Valley Authority'
  },
  {
    symbol: 'TVE',
    name: 'Tennessee Valley Authority'
  },
  {
    symbol: 'TVTX',
    name: 'Travere Therapeutics Inc'
  },
  {
    symbol: 'TW',
    name: 'Tradeweb Markets Inc Cls A'
  },
  {
    symbol: 'TWCB',
    name: 'Bilander Acquisition Corp - Class A'
  },
  {
    symbol: 'TWCBU',
    name: 'Bilander Acquisition Corp - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'TWCBW',
    name: 'Bilander Acquisition Corp - Warrants (19/05/2026)'
  },
  {
    symbol: 'TWI',
    name: 'Titan International Inc'
  },
  {
    symbol: 'TWIN',
    name: 'Twin Disc Incorporated'
  },
  {
    symbol: 'TWKS',
    name: 'Thoughtworks Holding Inc'
  },
  {
    symbol: 'TWLO',
    name: 'Twilio Inc Class A'
  },
  {
    symbol: 'TWLV',
    name: 'Twelve Seas Investment Co II - Class A'
  },
  {
    symbol: 'TWLVU',
    name: 'Twelve Seas Investment Co II - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'TWND',
    name: 'Tailwind Acquisition Corp - Class A'
  },
  {
    symbol: 'TWND-U',
    name: 'Tailwind Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'TWND-WS',
    name: 'Tailwind Acquisition Corp Redeemable Warrants each whole warrant exercisable for one share of Class A common stock at an exercise price of 11.50'
  },
  {
    symbol: 'TWNI',
    name: 'Tailwind International Acquisition Corp - Class A'
  },
  {
    symbol: 'TWNI-U',
    name: 'Tailwind International Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'TWNI-WS',
    name: 'Tailwind International Acquisition Corp - Warrants (01/03/2028)'
  },
  {
    symbol: 'TWNK',
    name: 'Hostess Brands Inc - Class A'
  },
  {
    symbol: 'TWNT-WS',
    name: 'Tailwind Two Acquisition Corp Redeemable warrants included as part of the units each whole warrant exercisable for one Class A ordinary share at an exercise pr'
  },
  {
    symbol: 'TWO',
    name: 'Two Harbors Investment Corp'
  },
  {
    symbol: 'TWO-P-A',
    name: 'Two Harbors Investments Corp 8125 Series A FixedtoFloating Rate Cumulative Redeemable Preferred Stock 2500 liquidation preference per share'
  },
  {
    symbol: 'TWO-P-B',
    name: 'Two Harbors Investments Corp 7625 Series B FixedtoFloating Rate Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'TWO-P-C',
    name: 'Two Harbors Investments Corp 725 Series C FixedtoFloating Rate Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'TWOA',
    name: 'two - Class A'
  },
  {
    symbol: 'TWOU',
    name: '2U Inc'
  },
  {
    symbol: 'TWST',
    name: 'Twist Bioscience Corp'
  },
  {
    symbol: 'TWTR',
    name: 'Twitter Inc'
  },
  {
    symbol: 'TX',
    name: 'Ternium S.A.'
  },
  {
    symbol: 'TXG',
    name: '10x Genomics Inc - Class A'
  },
  {
    symbol: 'TXMD',
    name: 'TherapeuticsMD Inc'
  },
  {
    symbol: 'TXN',
    name: 'Texas Instruments Inc'
  },
  {
    symbol: 'TXRH',
    name: 'Texas Roadhouse Inc'
  },
  {
    symbol: 'TXT',
    name: 'Textron Inc'
  },
  {
    symbol: 'TY-P',
    name: 'Tri-Continental Corp'
  },
  {
    symbol: 'TYDE',
    name: 'Cryptyde Inc'
  },
  {
    symbol: 'TYDEV',
    name: 'Cryptyde Inc'
  },
  {
    symbol: 'TYL',
    name: 'Tyler Technologies Inc'
  },
  {
    symbol: 'TYME',
    name: 'Tyme Technologies Inc'
  },
  {
    symbol: 'TYRA',
    name: 'Tyra Biosciences Inc'
  },
  {
    symbol: 'TZOO',
    name: 'Travelzoo'
  },
  {
    symbol: 'TZPS',
    name: 'TZP Strategies Acquisition Corp - Class A'
  },
  {
    symbol: 'TZPSU',
    name: 'TZP Strategies Acquisition Corp - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'TZPSW',
    name: 'TZP Strategies Acquisition Corp - Warrants (06/01/2026)'
  },
  {
    symbol: 'U',
    name: 'Unity Software Inc'
  },
  {
    symbol: 'UA',
    name: 'Under Armour Inc - Class C'
  },
  {
    symbol: 'UAA',
    name: 'Under Armour Inc - Class A'
  },
  {
    symbol: 'UAL',
    name: 'United Airlines Holdings Inc'
  },
  {
    symbol: 'UAMY',
    name: 'United States Antimony Corp'
  },
  {
    symbol: 'UAN',
    name: 'CVR Partners LP'
  },
  {
    symbol: 'UAVS',
    name: 'AgEagle Aerial Systems Inc'
  },
  {
    symbol: 'UBA',
    name: 'Urstadt Biddle Properties Inc - Class A'
  },
  {
    symbol: 'UBCP',
    name: 'United Bancorp Inc (Martins Ferry OH)'
  },
  {
    symbol: 'UBER',
    name: 'Uber Technologies Inc'
  },
  {
    symbol: 'UBFO',
    name: 'United Security Bancshares (CA)'
  },
  {
    symbol: 'UBOH',
    name: 'United Bancshares Inc (OH)'
  },
  {
    symbol: 'UBP',
    name: 'Urstadt Biddle Properties Inc'
  },
  {
    symbol: 'UBP-P-H',
    name: 'Urstadt Biddle Properties Inc 6250 Series H Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'UBP-P-K',
    name: 'Urstadt Biddle Properties Inc'
  },
  {
    symbol: 'UBS',
    name: 'UBS Group AG'
  },
  {
    symbol: 'UBSI',
    name: 'United Bankshares Inc'
  },
  {
    symbol: 'UBX',
    name: 'Unity Biotechnology Inc'
  },
  {
    symbol: 'UCBI',
    name: 'United Community Banks Inc'
  },
  {
    symbol: 'UCBIO',
    name: 'United Community Banks Inc'
  },
  {
    symbol: 'UCL',
    name: 'Ucloudlink Group Inc'
  },
  {
    symbol: 'UCTT',
    name: 'Ultra Clean Hldgs Inc'
  },
  {
    symbol: 'UDMY',
    name: 'Udemy Inc'
  },
  {
    symbol: 'UDR',
    name: 'UDR Inc'
  },
  {
    symbol: 'UE',
    name: 'Urban Edge Properties'
  },
  {
    symbol: 'UEC',
    name: 'Uranium Energy Corp'
  },
  {
    symbol: 'UEIC',
    name: 'Universal Electronics Inc'
  },
  {
    symbol: 'UFAB',
    name: 'Unique Fabricating Inc'
  },
  {
    symbol: 'UFCS',
    name: 'United Fire Group Inc'
  },
  {
    symbol: 'UFI',
    name: 'UNIFI Inc'
  },
  {
    symbol: 'UFPI',
    name: 'UFP Industries Inc'
  },
  {
    symbol: 'UFPT',
    name: 'UFP Technologies Inc'
  },
  {
    symbol: 'UG',
    name: 'United-Guardian Inc'
  },
  {
    symbol: 'UGI',
    name: 'UGI Corp'
  },
  {
    symbol: 'UGIC',
    name: 'UGI Corp'
  },
  {
    symbol: 'UGP',
    name: 'Ultrapar Participacoes S.A.'
  },
  {
    symbol: 'UGRO',
    name: 'Urban-gro Inc'
  },
  {
    symbol: 'UHAL',
    name: 'Amerco'
  },
  {
    symbol: 'UHS',
    name: 'Universal Health Services Inc - Class B'
  },
  {
    symbol: 'UHT',
    name: 'Universal Health Realty Income Trust'
  },
  {
    symbol: 'UI',
    name: 'Ubiquiti Inc'
  },
  {
    symbol: 'UIHC',
    name: 'United Insurance Holdings Corp'
  },
  {
    symbol: 'UIS',
    name: 'Unisys Corp'
  },
  {
    symbol: 'UK',
    name: 'Ucommune International Ltd - Class A'
  },
  {
    symbol: 'UKOMW',
    name: 'Ucommune International Ltd - Warrants (17/11/2025)'
  },
  {
    symbol: 'UL',
    name: 'Unilever plc'
  },
  {
    symbol: 'ULBI',
    name: 'Ultralife Corp'
  },
  {
    symbol: 'ULCC',
    name: 'Frontier Group Holdings Inc'
  },
  {
    symbol: 'ULH',
    name: 'Universal Logistics Holdings Inc'
  },
  {
    symbol: 'ULTA',
    name: 'Ulta Beauty Inc'
  },
  {
    symbol: 'UMBF',
    name: 'UMB Financial Corp'
  },
  {
    symbol: 'UMC',
    name: 'United Micro Electronics'
  },
  {
    symbol: 'UMH',
    name: 'UMH Properties Inc'
  },
  {
    symbol: 'UMH-P-C',
    name: 'UMH Properties Inc 675 Series C Cumulative Redeemable Preferred Stock Liquidation Preference 25 per share'
  },
  {
    symbol: 'UMH-P-D',
    name: 'UMH Properties Inc 6375 Series D Cumulative Redeemable Preferred Stock Liquidation Preference 25 per share'
  },
  {
    symbol: 'UMPQ',
    name: 'Umpqua Holdings Corp'
  },
  {
    symbol: 'UNAM',
    name: 'Unico American Corp'
  },
  {
    symbol: 'UNB',
    name: 'Union Bankshares Inc'
  },
  {
    symbol: 'UNCY',
    name: 'Unicycive Therapeutics Inc'
  },
  {
    symbol: 'UNF',
    name: 'Unifirst Corp'
  },
  {
    symbol: 'UNFI',
    name: 'United Natural Foods Inc'
  },
  {
    symbol: 'UNH',
    name: 'Unitedhealth Group Inc'
  },
  {
    symbol: 'UNIT',
    name: 'Uniti Group Inc'
  },
  {
    symbol: 'UNM',
    name: 'Unum Group'
  },
  {
    symbol: 'UNMA',
    name: 'Unum Group 6250 Junior Subordinated Notes due 2058'
  },
  {
    symbol: 'UNP',
    name: 'Union Pacific Corp'
  },
  {
    symbol: 'UNTY',
    name: 'Unity Bancorp Inc'
  },
  {
    symbol: 'UNVR',
    name: 'Univar Solutions Inc'
  },
  {
    symbol: 'UONE',
    name: 'Urban One Inc - Class A'
  },
  {
    symbol: 'UONEK',
    name: 'Urban One Inc - Class D'
  },
  {
    symbol: 'UP',
    name: 'Wheels Up Experience Inc - Class A'
  },
  {
    symbol: 'UP-WS',
    name: 'Wheels Up Experience Inc - Warrants (19/09/2025)'
  },
  {
    symbol: 'UPC',
    name: 'Universe Pharmaceuticals Inc'
  },
  {
    symbol: 'UPH',
    name: 'UpHealth Inc'
  },
  {
    symbol: 'UPH-WS',
    name: 'UpHealth Inc Warrants'
  },
  {
    symbol: 'UPLD',
    name: 'Upland Software Inc'
  },
  {
    symbol: 'UPS',
    name: 'United Parcel Service Inc - Class B'
  },
  {
    symbol: 'UPST',
    name: 'Upstart Holdings Inc'
  },
  {
    symbol: 'UPTD',
    name: 'TradeUP Acquisition Corp'
  },
  {
    symbol: 'UPTDU',
    name: 'TradeUP Acquisition Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'UPTDW',
    name: 'TradeUP Acquisition Corp - Warrants (15/10/2027)'
  },
  {
    symbol: 'UPWK',
    name: 'Upwork Inc'
  },
  {
    symbol: 'URBN',
    name: 'Urban Outfitters Inc'
  },
  {
    symbol: 'URG',
    name: 'Ur-Energy Inc'
  },
  {
    symbol: 'URGN',
    name: 'UroGen Pharma Ltd'
  },
  {
    symbol: 'URI',
    name: 'United Rentals Inc'
  },
  {
    symbol: 'UROY',
    name: 'Uranium Royalty Corp'
  },
  {
    symbol: 'USAC',
    name: 'USA Compression Partners LP'
  },
  {
    symbol: 'USAK',
    name: 'USA Truck Inc'
  },
  {
    symbol: 'USAP',
    name: 'Universal Stainless & Alloy Products Inc'
  },
  {
    symbol: 'USAS',
    name: 'Americas Gold and Silver Corp'
  },
  {
    symbol: 'USAU',
    name: 'U.S. Gold Corp'
  },
  {
    symbol: 'USB',
    name: 'U.S. Bancorp.'
  },
  {
    symbol: 'USB-P-A',
    name: 'U.S. Bancorp.'
  },
  {
    symbol: 'USB-P-H',
    name: 'US Bancorp Depositary Shares repstg 11000th Pfd Ser B'
  },
  {
    symbol: 'USB-P-P',
    name: 'US Bancorp Depositary Shares Series K'
  },
  {
    symbol: 'USB-P-Q',
    name: 'U.S. Bancorp.'
  },
  {
    symbol: 'USB-P-R',
    name: 'U.S. Bancorp.'
  },
  {
    symbol: 'USB-P-S',
    name: 'U.S. Bancorp.'
  },
  {
    symbol: 'USCB',
    name: 'USCB Financial Holdings Inc - Class A'
  },
  {
    symbol: 'USCT',
    name: 'Tkb Critical Technologies 1 - Class A'
  },
  {
    symbol: 'USCTU',
    name: 'Tkb Critical Technologies 1 - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'USCTW',
    name: 'Tkb Critical Technologies 1 - Warrants (20/10/2026)'
  },
  {
    symbol: 'USDP',
    name: 'USD Partners LP'
  },
  {
    symbol: 'USEA',
    name: 'United Maritime Corp'
  },
  {
    symbol: 'USEG',
    name: 'U.S. Energy Corp'
  },
  {
    symbol: 'USER',
    name: 'UserTesting Inc'
  },
  {
    symbol: 'USFD',
    name: 'US Foods Holding Corp'
  },
  {
    symbol: 'USIO',
    name: 'Usio Inc'
  },
  {
    symbol: 'USLM',
    name: 'United States Lime & Minerals Inc'
  },
  {
    symbol: 'USM',
    name: 'United States Cellular Corporation'
  },
  {
    symbol: 'USNA',
    name: 'Usana Health Sciences Inc'
  },
  {
    symbol: 'USPH',
    name: 'U.S. Physical Therapy Inc'
  },
  {
    symbol: 'USWS',
    name: 'U.S. Well Services Inc - Class A'
  },
  {
    symbol: 'USWSW',
    name: 'U.S. Well Services Inc - Warrants (15/03/2024)'
  },
  {
    symbol: 'USX',
    name: 'U.S. Xpress Enterprises Inc - Class A'
  },
  {
    symbol: 'UTAA',
    name: 'UTA Acquisition Corp - Class A'
  },
  {
    symbol: 'UTAAU',
    name: 'UTA Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'UTAAW',
    name: 'UTA Acquisition Corp - Warrants (30/10/2026)'
  },
  {
    symbol: 'UTHR',
    name: 'United Therapeutics Corp'
  },
  {
    symbol: 'UTI',
    name: 'Universal Technical Institute Inc'
  },
  {
    symbol: 'UTL',
    name: 'Unitil Corp'
  },
  {
    symbol: 'UTMD',
    name: 'Utah Medical Products Inc'
  },
  {
    symbol: 'UTME',
    name: 'UTime Ltd'
  },
  {
    symbol: 'UTRS',
    name: 'Minerva Surgical Inc'
  },
  {
    symbol: 'UTSI',
    name: 'UTStarcom Holdings Corp'
  },
  {
    symbol: 'UTX-W',
    name: 'United Technologies Corporation ExDistribution When Issued'
  },
  {
    symbol: 'UTZ',
    name: 'Utz Brands Inc - Class A'
  },
  {
    symbol: 'UTZ-WS',
    name: 'Utz Brands Inc - Warrants (28/08/2025)'
  },
  {
    symbol: 'UUU',
    name: 'Universal Security Instruments Inc'
  },
  {
    symbol: 'UUUU',
    name: 'Energy Fuels Inc'
  },
  {
    symbol: 'UVE',
    name: 'Universal Insurance Holdings Inc'
  },
  {
    symbol: 'UVSP',
    name: 'Univest Financial Corp'
  },
  {
    symbol: 'UVV',
    name: 'Universal Corp'
  },
  {
    symbol: 'UWMC',
    name: 'UWM Holdings Corporation Class A'
  },
  {
    symbol: 'UWMC-WS',
    name: 'UWM Holdings Corporation Warrant'
  },
  {
    symbol: 'UXIN',
    name: 'Uxin Ltd'
  },
  {
    symbol: 'UZD',
    name: 'United States Cellular Corporation'
  },
  {
    symbol: 'UZE',
    name: 'United States Cellular Corporation'
  },
  {
    symbol: 'UZF',
    name: 'United States Cellular Corporation'
  },
  {
    symbol: 'V',
    name: 'Visa Inc - Class A'
  },
  {
    symbol: 'VABK',
    name: 'Virginia National Bankshares Corp'
  },
  {
    symbol: 'VAC',
    name: 'Marriott Vacations Worldwide Corp'
  },
  {
    symbol: 'VACC',
    name: 'Vaccitech plc'
  },
  {
    symbol: 'VAL',
    name: 'Valaris Ltd'
  },
  {
    symbol: 'VAL-WS',
    name: 'Valaris Ltd - Warrants (29/04/2028)'
  },
  {
    symbol: 'VALE',
    name: 'Vale S.A.'
  },
  {
    symbol: 'VALN',
    name: 'Valneva SE'
  },
  {
    symbol: 'VALU',
    name: 'Value Line Inc'
  },
  {
    symbol: 'VAM',
    name: 'The Vivaldi Opportunities Fund'
  },
  {
    symbol: 'VAPO',
    name: 'Vapotherm Inc'
  },
  {
    symbol: 'VAQC',
    name: 'Vector Acquisition Corp II - Class A'
  },
  {
    symbol: 'VATE',
    name: 'Innovate Corp'
  },
  {
    symbol: 'VAXX',
    name: 'Vaxxinity Inc - Class A'
  },
  {
    symbol: 'VBFC',
    name: 'Village Bank & Trust Financial Corporation'
  },
  {
    symbol: 'VBIV',
    name: 'VBI Vaccines Inc'
  },
  {
    symbol: 'VBLT',
    name: 'Vascular Biogenics Ltd'
  },
  {
    symbol: 'VBNK',
    name: 'VILLAGE BANCORP INC'
  },
  {
    symbol: 'VBOC',
    name: 'Viscogliosi Brothers Acquisition Corp'
  },
  {
    symbol: 'VBOCU',
    name: 'Viscogliosi Brothers Acquisition Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'VBOCW',
    name: 'Viscogliosi Brothers Acquisition Corp - Warrants (18/03/2027)'
  },
  {
    symbol: 'VBTX',
    name: 'Veritex Holdings Inc'
  },
  {
    symbol: 'VC',
    name: 'Visteon Corp'
  },
  {
    symbol: 'VCEL',
    name: 'Vericel Corp'
  },
  {
    symbol: 'VCKA',
    name: 'Vickers Vantage Corp I'
  },
  {
    symbol: 'VCKAU',
    name: 'Vickers Vantage Corp I - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'VCKAW',
    name: 'Vickers Vantage Corp I - Warrants (15/09/2027)'
  },
  {
    symbol: 'VCNX',
    name: 'Vaccinex Inc'
  },
  {
    symbol: 'VCSA',
    name: 'Vacasa Inc - Class A'
  },
  {
    symbol: 'VCTR',
    name: 'Victory Capital Holdings Inc - Class A'
  },
  {
    symbol: 'VCXA',
    name: '10X Capital Venture Acquisition Corp II - Class A'
  },
  {
    symbol: 'VCXAU',
    name: '10X Capital Venture Acquisition Corp II - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'VCXAW',
    name: '10X Capital Venture Acquisition Corp II - Warrants (19/04/2028)'
  },
  {
    symbol: 'VCXB',
    name: '10X Capital Venture Acquisition Corp III - Class A'
  },
  {
    symbol: 'VCXB-U',
    name: '10X Capital Venture Acquisition Corp III - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'VCXB-WS',
    name: '10X Capital Venture Acquisition Corp III - Warrants (30/06/2028)'
  },
  {
    symbol: 'VCYT',
    name: 'Veracyte Inc'
  },
  {
    symbol: 'VECO',
    name: 'Veeco Instruments Inc'
  },
  {
    symbol: 'VECT',
    name: 'VectivBio Holding AG'
  },
  {
    symbol: 'VEDU',
    name: 'Visionary Education Technology Holdings Group Inc'
  },
  {
    symbol: 'VEEE',
    name: 'Twin Vee PowerCats Company'
  },
  {
    symbol: 'VEEV',
    name: 'Veeva Systems Inc - Class A'
  },
  {
    symbol: 'VEL',
    name: 'Velocity Financial Inc'
  },
  {
    symbol: 'VELO',
    name: 'Velocity Acquisition Corp - Class A'
  },
  {
    symbol: 'VELOU',
    name: 'Velocity Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'VELOW',
    name: 'Velocity Acquisition Corp - Warrants (24/02/2028)'
  },
  {
    symbol: 'VENA',
    name: 'Venus Acquisition Corp'
  },
  {
    symbol: 'VENAR',
    name: 'Venus Acquisition Corp'
  },
  {
    symbol: 'VENAU',
    name: 'Venus Acquisition Corp - Units (1 Ord 1 Right & 1 War)'
  },
  {
    symbol: 'VENAW',
    name: 'Venus Acquisition Corp - Warrants (30/04/2027)'
  },
  {
    symbol: 'VEON',
    name: 'VEON Ltd'
  },
  {
    symbol: 'VER-P-F',
    name: 'VEREIT Inc'
  },
  {
    symbol: 'VERA',
    name: 'Vera Therapeutics Inc - Class A'
  },
  {
    symbol: 'VERB',
    name: 'Verb Technology Company Inc'
  },
  {
    symbol: 'VERBW',
    name: 'Verb Technology Company Inc - Warrants (14/03/2024)'
  },
  {
    symbol: 'VERI',
    name: 'Veritone Inc'
  },
  {
    symbol: 'VERO',
    name: 'Venus Concept Inc'
  },
  {
    symbol: 'VERU',
    name: 'Veru Inc'
  },
  {
    symbol: 'VERV',
    name: 'Verve Therapeutics Inc'
  },
  {
    symbol: 'VERX',
    name: 'Vertex Inc Class A'
  },
  {
    symbol: 'VERY',
    name: 'Vericity Inc'
  },
  {
    symbol: 'VET',
    name: 'Vermilion Energy Inc'
  },
  {
    symbol: 'VEV',
    name: 'Vicinity Motor Corp'
  },
  {
    symbol: 'VFC',
    name: 'VF Corp'
  },
  {
    symbol: 'VFF',
    name: 'Village Farms International Inc'
  },
  {
    symbol: 'VG',
    name: 'Vonage Holdings Corp'
  },
  {
    symbol: 'VGFC',
    name: 'The Very Good Food Company Inc'
  },
  {
    symbol: 'VGII-WS',
    name: 'Virgin Group Acquisition Corp II Redeemable Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'VGR',
    name: 'Vector Group Ltd'
  },
  {
    symbol: 'VGZ',
    name: 'Vista Gold Corp'
  },
  {
    symbol: 'VHAQ',
    name: 'Viveon Health Acquisition Corp'
  },
  {
    symbol: 'VHAQ-U',
    name: 'Viveon Health Acquisition Corp - Units (1 Ord 1 War & 1 Right )'
  },
  {
    symbol: 'VHAQ-WS',
    name: 'Viveon Health Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'VHC',
    name: 'Virnetx Holding Corp'
  },
  {
    symbol: 'VHI',
    name: 'Valhi Inc'
  },
  {
    symbol: 'VHNA',
    name: 'Vahanna Tech Edge Acquisition I Corp - Class A'
  },
  {
    symbol: 'VHNAU',
    name: 'Vahanna Tech Edge Acquisition I Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'VHNAW',
    name: 'Vahanna Tech Edge Acquisition I Corp - Warrants (30/11/2028)'
  },
  {
    symbol: 'VIA',
    name: 'Via Renewables Inc - Class A'
  },
  {
    symbol: 'VIACP',
    name: 'ViacomCBS Inc'
  },
  {
    symbol: 'VIAO',
    name: 'VIA optronics AG'
  },
  {
    symbol: 'VIASP',
    name: 'Via Renewables Inc'
  },
  {
    symbol: 'VIAV',
    name: 'Viavi Solutions Inc'
  },
  {
    symbol: 'VICI',
    name: 'VICI Properties Inc'
  },
  {
    symbol: 'VICR',
    name: 'Vicor Corp'
  },
  {
    symbol: 'VIEW',
    name: 'View Inc - Class A'
  },
  {
    symbol: 'VIEWW',
    name: 'View Inc - Warrants (08/03/2026)'
  },
  {
    symbol: 'VIGL',
    name: 'Vigil Neuroscience Inc'
  },
  {
    symbol: 'VII',
    name: '7GC & Co Holdings Inc - Class A'
  },
  {
    symbol: 'VIIAU',
    name: '7GC & Co Holdings Inc - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'VIIAW',
    name: '7GC & Co Holdings Inc - Warrants (23/12/2025)'
  },
  {
    symbol: 'VINC',
    name: 'Vincerx Pharma Inc'
  },
  {
    symbol: 'VINE',
    name: 'Fresh Vine Wine Inc'
  },
  {
    symbol: 'VINO',
    name: 'Gaucho Group Holdings Inc'
  },
  {
    symbol: 'VINP',
    name: 'Vinci Partners Investments Ltd - Class A'
  },
  {
    symbol: 'VIOT',
    name: 'Viomi Technology Co Ltd'
  },
  {
    symbol: 'VIPS',
    name: 'Vipshop Holdings Ltd'
  },
  {
    symbol: 'VIR',
    name: 'Vir Biotechnology Inc'
  },
  {
    symbol: 'VIRC',
    name: 'Virco Manufacturing Corp'
  },
  {
    symbol: 'VIRI',
    name: 'Virios Therapeutics Inc'
  },
  {
    symbol: 'VIRT',
    name: 'Virtu Financial Inc - Class A'
  },
  {
    symbol: 'VIRX',
    name: 'Viracta Therapeutics Inc'
  },
  {
    symbol: 'VISL',
    name: 'Vislink Technologies Inc'
  },
  {
    symbol: 'VIST',
    name: 'Vista Energy S.A.B. de C.V'
  },
  {
    symbol: 'VITL',
    name: 'Vital Farms Inc'
  },
  {
    symbol: 'VIV',
    name: 'Telefonica Brasil S.A.'
  },
  {
    symbol: 'VIV-W',
    name: 'Telefonica Brasil S.A. American Depositary Shares Each representing One When Issued'
  },
  {
    symbol: 'VIVE',
    name: 'Viveve Medical Inc'
  },
  {
    symbol: 'VIVK',
    name: 'Vivakor Inc'
  },
  {
    symbol: 'VIVO',
    name: 'Meridian Bioscience Inc'
  },
  {
    symbol: 'VJET',
    name: 'Voxeljet AG'
  },
  {
    symbol: 'VKTX',
    name: 'Viking Therapeutics Inc'
  },
  {
    symbol: 'VLAT',
    name: 'Valor Latitude Acquisition Corp - Class A'
  },
  {
    symbol: 'VLATU',
    name: 'Valor Latitude Acquisition Corp - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'VLATW',
    name: 'Valor Latitude Acquisition Corp - Warrants (02/04/2026)'
  },
  {
    symbol: 'VLCN',
    name: 'Volcon Inc'
  },
  {
    symbol: 'VLD',
    name: 'Velo3D Inc - New'
  },
  {
    symbol: 'VLD-WS',
    name: 'Velo3D Inc Redeemable warrants each whole warrant exercisable for one share of Common Stock at an exercise price of 11.50'
  },
  {
    symbol: 'VLDR',
    name: 'Velodyne Lidar Inc'
  },
  {
    symbol: 'VLDRW',
    name: 'Velodyne Lidar Inc Warrant'
  },
  {
    symbol: 'VLGEA',
    name: 'Village Super Market Inc - Class A'
  },
  {
    symbol: 'VLN',
    name: 'Valens Semiconductor Ltd'
  },
  {
    symbol: 'VLN-WS',
    name: 'Valens Semiconductor Ltd Warrants each warrant to purchase onehalf of one Ordinary Share'
  },
  {
    symbol: 'VLNS',
    name: 'Valens Company Inc (The)'
  },
  {
    symbol: 'VLO',
    name: 'Valero Energy Corp'
  },
  {
    symbol: 'VLON',
    name: 'Vallon Pharmaceuticals Inc'
  },
  {
    symbol: 'VLRS',
    name: 'Controladora Vuela Cia De Aviacion'
  },
  {
    symbol: 'VLTA',
    name: 'Volta Inc - Class A'
  },
  {
    symbol: 'VLTA-WS',
    name: 'Volta Inc - Warrants(14/06/2027)'
  },
  {
    symbol: 'VLY',
    name: 'Valley National Bancorp'
  },
  {
    symbol: 'VLYPO',
    name: 'Valley National Bancorp 55 Fixed to Floating Rate Series B NonCumulative Perpetual Preferred Stock'
  },
  {
    symbol: 'VLYPP',
    name: 'Valley National Bancorp 625 FixedtoFloating Rate Series A NonCumulative Perpetual Preferred Stock'
  },
  {
    symbol: 'VMAR',
    name: 'Vision Marine Technologies Inc'
  },
  {
    symbol: 'VMC',
    name: 'Vulcan Materials Company'
  },
  {
    symbol: 'VMCA',
    name: 'Valuence Merger Corp I - Class A'
  },
  {
    symbol: 'VMCAU',
    name: 'Valuence Merger Corp I - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'VMCAW',
    name: 'Valuence Merger Corp I - Warrants (18/02/2027)'
  },
  {
    symbol: 'VMD',
    name: 'Viemed Healthcare Inc'
  },
  {
    symbol: 'VMEO',
    name: 'Vimeo Inc'
  },
  {
    symbol: 'VMGA',
    name: 'VMG Consumer Acquisition Corp - Class A'
  },
  {
    symbol: 'VMGAU',
    name: 'VMG Consumer Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'VMGAW',
    name: 'VMG Consumer Acquisition Corp - Warrants (08/11/2026)'
  },
  {
    symbol: 'VMI',
    name: 'Valmont Industries Inc'
  },
  {
    symbol: 'VMW',
    name: 'Vmware Inc - Class A'
  },
  {
    symbol: 'VMW-W',
    name: 'VMware Inc Class A'
  },
  {
    symbol: 'VNCE',
    name: 'Vince Holding Corp'
  },
  {
    symbol: 'VNDA',
    name: 'Vanda Pharmaceuticals Inc'
  },
  {
    symbol: 'VNET',
    name: 'VNET Group Inc'
  },
  {
    symbol: 'VNO',
    name: 'Vornado Realty Trust'
  },
  {
    symbol: 'VNO-P-L',
    name: 'Vornado Realty Trust Pfd Ser L'
  },
  {
    symbol: 'VNO-P-M',
    name: 'Vornado Realty Trust 525 Series M Cumulative Redeemable Preferred Shares of Beneficial Interest liquidation preference 2500 per share no par value per share'
  },
  {
    symbol: 'VNO-P-N',
    name: 'Vornado Realty Trust'
  },
  {
    symbol: 'VNO-P-O',
    name: 'Vornado Realty Trust 4.45 Series O Cumulative Redeemable Preferred Shares Liquidation Preference 25.00 Per Share'
  },
  {
    symbol: 'VNOM',
    name: 'Viper Energy Partners LP'
  },
  {
    symbol: 'VNRX',
    name: 'VolitionRX Ltd'
  },
  {
    symbol: 'VNT',
    name: 'Vontier Corporation'
  },
  {
    symbol: 'VNT-W',
    name: 'Vontier Corporation When Issued'
  },
  {
    symbol: 'VNTR',
    name: 'Venator Materials PLC'
  },
  {
    symbol: 'VOC',
    name: 'VOC Energy Trust'
  },
  {
    symbol: 'VOD',
    name: 'Vodafone Group plc'
  },
  {
    symbol: 'VOR',
    name: 'Vor Biopharma Inc'
  },
  {
    symbol: 'VORB',
    name: 'Virgin Orbit Holdings Inc'
  },
  {
    symbol: 'VORBW',
    name: 'Virgin Orbit Holdings Inc - Warrants (29/12/2026)'
  },
  {
    symbol: 'VOXX',
    name: 'VOXX International Corp - Class A'
  },
  {
    symbol: 'VOYA',
    name: 'Voya Financial Inc'
  },
  {
    symbol: 'VOYA-P-B',
    name: 'Voya Financial Inc'
  },
  {
    symbol: 'VPCB',
    name: 'VPC Impact Acquisition Holdings II - Class A'
  },
  {
    symbol: 'VPCBU',
    name: 'VPC Impact Acquisition Holdings II - Units (1 Ord Share Class A & 1/4 War)'
  },
  {
    symbol: 'VPCBW',
    name: 'VPC Impact Acquisition Holdings II - Warrants (05/03/2026)'
  },
  {
    symbol: 'VPG',
    name: 'Vishay Precision Group Inc'
  },
  {
    symbol: 'VQS',
    name: 'VIQ Solutions Inc'
  },
  {
    symbol: 'VRA',
    name: 'Vera Bradley Inc'
  },
  {
    symbol: 'VRAR',
    name: 'Glimpse Group Inc (The)'
  },
  {
    symbol: 'VRAY',
    name: 'ViewRay Inc'
  },
  {
    symbol: 'VRCA',
    name: 'Verrica Pharmaceuticals Inc'
  },
  {
    symbol: 'VRDN',
    name: 'Viridian Therapeutics Inc'
  },
  {
    symbol: 'VRE',
    name: 'Veris Residential Inc'
  },
  {
    symbol: 'VREX',
    name: 'Varex Imaging Corp'
  },
  {
    symbol: 'VRM',
    name: 'Vroom Inc'
  },
  {
    symbol: 'VRME',
    name: 'VerifyMe Inc'
  },
  {
    symbol: 'VRMEW',
    name: 'VerifyMe Inc - Warrants (17/06/2025)'
  },
  {
    symbol: 'VRNA',
    name: 'Verona Pharma Plc'
  },
  {
    symbol: 'VRNS',
    name: 'Varonis Systems Inc'
  },
  {
    symbol: 'VRNT',
    name: 'Verint Systems Inc'
  },
  {
    symbol: 'VRPX',
    name: 'Virpax Pharmaceuticals Inc'
  },
  {
    symbol: 'VRRM',
    name: 'Verra Mobility Corp - Class A'
  },
  {
    symbol: 'VRSK',
    name: 'Verisk Analytics Inc'
  },
  {
    symbol: 'VRSN',
    name: 'Verisign Inc'
  },
  {
    symbol: 'VRT',
    name: 'Vertiv Holdings Co - Class A'
  },
  {
    symbol: 'VRTS',
    name: 'Virtus Investment Partners Inc'
  },
  {
    symbol: 'VRTV',
    name: 'Veritiv Corp'
  },
  {
    symbol: 'VRTX',
    name: 'Vertex Pharmaceuticals Inc'
  },
  {
    symbol: 'VS',
    name: 'Versus Systems Inc'
  },
  {
    symbol: 'VSAC',
    name: 'Vision Sensing Acquisition Corp - Class A'
  },
  {
    symbol: 'VSACU',
    name: 'Vision Sensing Acquisition Corp - Units (1 Ord Class A & 3/4 War)'
  },
  {
    symbol: 'VSACW',
    name: 'Vision Sensing Acquisition Corp - Warrants (21/10/2026)'
  },
  {
    symbol: 'VSAT',
    name: 'Viasat Inc'
  },
  {
    symbol: 'VSCO',
    name: 'Victoria`s Secret & Company'
  },
  {
    symbol: 'VSCO-W',
    name: 'Victorias Secret & Co. WhenIssued'
  },
  {
    symbol: 'VSEC',
    name: 'VSE Corp'
  },
  {
    symbol: 'VSH',
    name: 'Vishay Intertechnology Inc'
  },
  {
    symbol: 'VSSYW',
    name: 'Versus Systems Inc - Warrants- Unit A (17/12/2025)'
  },
  {
    symbol: 'VST',
    name: 'Vistra Corp'
  },
  {
    symbol: 'VST-WS-A',
    name: 'Vistra Corp - Warrants (02/02/2024)'
  },
  {
    symbol: 'VSTA',
    name: 'Vasta Platform Ltd Class A'
  },
  {
    symbol: 'VSTM',
    name: 'Verastem Inc'
  },
  {
    symbol: 'VSTO',
    name: 'Vista Outdoor Inc'
  },
  {
    symbol: 'VTAQ',
    name: 'Ventoux CCM Acquisition Corp'
  },
  {
    symbol: 'VTAQR',
    name: 'Ventoux CCM Acquisition Corp'
  },
  {
    symbol: 'VTAQU',
    name: 'Ventoux CCM Acquisition Corp - Units (1 Ord 1Right & 1 War)'
  },
  {
    symbol: 'VTAQW',
    name: 'Ventoux CCM Acquisition Corp - Warrants (30/09/2025)'
  },
  {
    symbol: 'VTEX',
    name: 'Vtex - Class A'
  },
  {
    symbol: 'VTGN',
    name: 'VistaGen Therapeutics Inc'
  },
  {
    symbol: 'VTIQ',
    name: 'VectoIQ Acquisition Corp II - Class A'
  },
  {
    symbol: 'VTIQU',
    name: 'VectoIQ Acquisition Corp II - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'VTIQW',
    name: 'VectoIQ Acquisition Corp II - Warrants(07/01/2028)'
  },
  {
    symbol: 'VTNR',
    name: 'Vertex Energy Inc'
  },
  {
    symbol: 'VTOL',
    name: 'Bristow Group Inc'
  },
  {
    symbol: 'VTR',
    name: 'Ventas Inc'
  },
  {
    symbol: 'VTRS',
    name: 'Viatris Inc'
  },
  {
    symbol: 'VTRSV',
    name: 'Viatris Inc'
  },
  {
    symbol: 'VTRU',
    name: 'Vitru Ltd'
  },
  {
    symbol: 'VTSI',
    name: 'VirTra Inc'
  },
  {
    symbol: 'VTVT',
    name: 'vTv Therapeutics Inc - Class A'
  },
  {
    symbol: 'VTYX',
    name: 'Ventyx Biosciences Inc'
  },
  {
    symbol: 'VUZI',
    name: 'Vuzix Corporation'
  },
  {
    symbol: 'VVI',
    name: 'Viad Corp'
  },
  {
    symbol: 'VVNT',
    name: 'Vivint Smart Home Inc - Class A'
  },
  {
    symbol: 'VVOS',
    name: 'Vivos Therapeutics Inc'
  },
  {
    symbol: 'VVPR',
    name: 'VivoPower International PLC'
  },
  {
    symbol: 'VVV',
    name: 'Valvoline Inc'
  },
  {
    symbol: 'VVX',
    name: 'V2X Inc Com'
  },
  {
    symbol: 'VWE',
    name: 'Vintage Wine Estates Inc'
  },
  {
    symbol: 'VWEWW',
    name: 'Vintage Wine Estates Inc - Warrants (16/08/2027)'
  },
  {
    symbol: 'VXRT',
    name: 'Vaxart Inc'
  },
  {
    symbol: 'VYGG',
    name: 'Vy Global Growth - Class A'
  },
  {
    symbol: 'VYGG-U',
    name: 'Vy Global Growth - Units (1 Ord Share Class A & 1/5 War)'
  },
  {
    symbol: 'VYGG-WS',
    name: 'Vy Global Growth - Warrants (30/01/2030)'
  },
  {
    symbol: 'VYGR',
    name: 'Voyager Therapeutics Inc'
  },
  {
    symbol: 'VYNE',
    name: 'VYNE Therapeutics Inc'
  },
  {
    symbol: 'VYNT',
    name: 'Vyant Bio Inc'
  },
  {
    symbol: 'VZ',
    name: 'Verizon Communications Inc'
  },
  {
    symbol: 'VZIO',
    name: 'VIZIO Holding Corp - Class A'
  },
  {
    symbol: 'VZLA',
    name: 'Vizsla Silver Corp'
  },
  {
    symbol: 'W',
    name: 'Wayfair Inc - Class A'
  },
  {
    symbol: 'WAB',
    name: 'Westinghouse Air Brake Technologies Corp'
  },
  {
    symbol: 'WABC',
    name: 'Westamerica Bancorporation'
  },
  {
    symbol: 'WAFD',
    name: 'Washington Federal Inc'
  },
  {
    symbol: 'WAFDP',
    name: 'Washington Federal Inc'
  },
  {
    symbol: 'WAFU',
    name: 'Wah Fu Education Group Ltd'
  },
  {
    symbol: 'WAL',
    name: 'Western Alliance Bancorp'
  },
  {
    symbol: 'WAL-P-A',
    name: 'Western Alliance Bancorporation Depositary Shares Series A'
  },
  {
    symbol: 'WALD',
    name: 'Waldencast Acquisition Corp - Class A'
  },
  {
    symbol: 'WALDU',
    name: 'Waldencast Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'WALDW',
    name: 'Waldencast Acquisition Corp - Warrants (11/03/2026)'
  },
  {
    symbol: 'WARR',
    name: 'Warrior Technologies Acquisition Co - Class A'
  },
  {
    symbol: 'WARR-U',
    name: 'Warrior Technologies Acquisition Co - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'WARR-WS',
    name: 'Warrior Technologies Acquisition Co - Warrants (31/03/2028)'
  },
  {
    symbol: 'WASH',
    name: 'Washington Trust Bancorp Inc'
  },
  {
    symbol: 'WAT',
    name: 'Waters Corp'
  },
  {
    symbol: 'WATT',
    name: 'Energous Corp'
  },
  {
    symbol: 'WAVC',
    name: 'Waverley Capital Acquisition Corp 1 - Class A'
  },
  {
    symbol: 'WAVC-U',
    name: 'Waverley Capital Acquisition Corp 1 - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'WAVC-WS',
    name: 'Waverley Capital Acquisition Corp 1 - Warrants (01/01/9999)'
  },
  {
    symbol: 'WAVD',
    name: 'WaveDancer Inc'
  },
  {
    symbol: 'WAVE',
    name: 'Eco Wave Power Global AB'
  },
  {
    symbol: 'WAVS',
    name: 'Western Acquisition Ventures Corp'
  },
  {
    symbol: 'WAVSU',
    name: 'Western Acquisition Ventures Corp - Unit (1 Ordinary share & 1 Wrt)'
  },
  {
    symbol: 'WAVSW',
    name: 'Western Acquisition Ventures Corp - Warrants (16/12/2026)'
  },
  {
    symbol: 'WB',
    name: 'Weibo Corp'
  },
  {
    symbol: 'WBA',
    name: 'Walgreens Boots Alliance Inc'
  },
  {
    symbol: 'WBD',
    name: 'Warner Bros. Discovery Inc - Class A'
  },
  {
    symbol: 'WBDWV',
    name: 'Warner Bros Discovery Inc Com Ser A'
  },
  {
    symbol: 'WBEV',
    name: 'Winc Inc'
  },
  {
    symbol: 'WBS',
    name: 'Webster Financial Corp'
  },
  {
    symbol: 'WBS-P-F',
    name: 'Webster Financial Corp'
  },
  {
    symbol: 'WBS-P-G',
    name: 'Webster Financial Corp'
  },
  {
    symbol: 'WBT',
    name: 'Welbilt Inc'
  },
  {
    symbol: 'WBX',
    name: 'Wallbox N.V - Class A'
  },
  {
    symbol: 'WBX-WS',
    name: 'Wallbox N.V - Warrants(01/01/9999)'
  },
  {
    symbol: 'WCC',
    name: 'Wesco International Inc'
  },
  {
    symbol: 'WCC-P-A',
    name: 'Wesco International Inc'
  },
  {
    symbol: 'WCLD',
    name: 'WisdomTree Cloud Computing Fund'
  },
  {
    symbol: 'WCN',
    name: 'Waste Connections Inc'
  },
  {
    symbol: 'WD',
    name: 'Walker & Dunlop Inc'
  },
  {
    symbol: 'WDAY',
    name: 'Workday Inc - Class A'
  },
  {
    symbol: 'WDC',
    name: 'Western Digital Corp'
  },
  {
    symbol: 'WDFC',
    name: 'WD-40 Company'
  },
  {
    symbol: 'WDH',
    name: 'Waterdrop Inc'
  },
  {
    symbol: 'WDI',
    name: 'Western Asset Diversified Income Fund'
  },
  {
    symbol: 'WDS',
    name: 'Woodside Energy Group Ltd'
  },
  {
    symbol: 'WE',
    name: 'WeWork Inc - Class A'
  },
  {
    symbol: 'WE-WS',
    name: 'WeWork Inc Redeemable Warrants each whole warrant exercisable for one share of Class A common stock at an exercise price of 11.50 per share'
  },
  {
    symbol: 'WEAV',
    name: 'Weave Communications Inc'
  },
  {
    symbol: 'WEBL',
    name: 'Direxion Daily Dow Jones Internet Bull 3X Shares'
  },
  {
    symbol: 'WEBR',
    name: 'Weber Inc - Class A'
  },
  {
    symbol: 'WEBS',
    name: 'Direxion Daily Dow Jones Internet Bear -3X Shares'
  },
  {
    symbol: 'WEC',
    name: 'WEC Energy Group Inc'
  },
  {
    symbol: 'WEJO',
    name: 'Wejo Group Ltd'
  },
  {
    symbol: 'WEJOW',
    name: 'Wejo Group Ltd - Warrants (18/11/2026)'
  },
  {
    symbol: 'WEL',
    name: 'Integrated Wellness Acquisition Corp - Class A'
  },
  {
    symbol: 'WEL-U',
    name: 'Integrated Wellness Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'WEL-WS',
    name: 'Integrated Wellness Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'WELL',
    name: 'Welltower Inc'
  },
  {
    symbol: 'WEN',
    name: 'Wendy`s Co - Class A'
  },
  {
    symbol: 'WERN',
    name: 'Werner Enterprises Inc'
  },
  {
    symbol: 'WES',
    name: 'Western Midstream Partners LP'
  },
  {
    symbol: 'WETF',
    name: 'Wisdomtree Investments Inc'
  },
  {
    symbol: 'WEX',
    name: 'WEX Inc'
  },
  {
    symbol: 'WEYS',
    name: 'Weyco Group Inc'
  },
  {
    symbol: 'WF',
    name: 'Woori Financial Group Inc'
  },
  {
    symbol: 'WFC',
    name: 'Wells Fargo & Company'
  },
  {
    symbol: 'WFC-P-A',
    name: 'Wells Fargo & Company'
  },
  {
    symbol: 'WFC-P-C',
    name: 'Wells Fargo & Company'
  },
  {
    symbol: 'WFC-P-D',
    name: 'Wells Fargo & Company'
  },
  {
    symbol: 'WFC-P-L',
    name: 'Wells Fargo & Company'
  },
  {
    symbol: 'WFC-P-Q',
    name: 'Wells Fargo & Company'
  },
  {
    symbol: 'WFC-P-R',
    name: 'Wells Fargo & Company'
  },
  {
    symbol: 'WFC-P-Y',
    name: 'Wells Fargo & Company'
  },
  {
    symbol: 'WFC-P-Z',
    name: ''
  },
  {
    symbol: 'WFCF',
    name: 'Where Food Comes From Inc'
  },
  {
    symbol: 'WFE-P-A',
    name: 'Wells Fargo Company Cumulative Perpetual Preferred Stock Series A Liquidation Preference 25 per share'
  },
  {
    symbol: 'WFG',
    name: 'West Fraser Timber Co. Ltd'
  },
  {
    symbol: 'WFRD',
    name: 'Weatherford International plc - New'
  },
  {
    symbol: 'WGO',
    name: 'Winnebago Industries Inc'
  },
  {
    symbol: 'WH',
    name: 'Wyndham Hotels & Resorts Inc'
  },
  {
    symbol: 'WHD',
    name: 'Cactus Inc - Class A'
  },
  {
    symbol: 'WHF',
    name: 'WhiteHorse Finance Inc'
  },
  {
    symbol: 'WHG',
    name: 'Westwood Holdings Group Inc'
  },
  {
    symbol: 'WHLM',
    name: 'Wilhelmina International Inc'
  },
  {
    symbol: 'WHLR',
    name: 'Wheeler Real Estate Investment Trust Inc'
  },
  {
    symbol: 'WHLRD',
    name: 'Wheeler Real Estate Investment Trust Inc'
  },
  {
    symbol: 'WHLRL',
    name: 'Wheeler Real Estate Investment Trust Inc'
  },
  {
    symbol: 'WHLRP',
    name: 'Wheeler Real Estate Investment Trust Inc'
  },
  {
    symbol: 'WHR',
    name: 'Whirlpool Corp'
  },
  {
    symbol: 'WILC',
    name: 'G. Willi-Food International Ltd'
  },
  {
    symbol: 'WIMI',
    name: 'Wimi Hologram Cloud Inc'
  },
  {
    symbol: 'WINA',
    name: 'Winmark Corporation'
  },
  {
    symbol: 'WING',
    name: 'Wingstop Inc'
  },
  {
    symbol: 'WINT',
    name: 'Windtree Therapeutics Inc'
  },
  {
    symbol: 'WINV',
    name: 'WinVest Acquisition Corp'
  },
  {
    symbol: 'WINVR',
    name: 'WinVest Acquisition Corp'
  },
  {
    symbol: 'WINVU',
    name: 'WinVest Acquisition Corp - Units (1 1 Rights & 1 War)'
  },
  {
    symbol: 'WINVW',
    name: 'WinVest Acquisition Corp - Warrants (09/08/2026)'
  },
  {
    symbol: 'WIRE',
    name: 'Encore Wire Corp'
  },
  {
    symbol: 'WISA',
    name: 'WiSA Technologies Inc'
  },
  {
    symbol: 'WISH',
    name: 'ContextLogic Inc - Class A'
  },
  {
    symbol: 'WIT',
    name: 'Wipro Ltd'
  },
  {
    symbol: 'WIX',
    name: 'Wix.com Ltd'
  },
  {
    symbol: 'WK',
    name: 'Workiva Inc - Class A'
  },
  {
    symbol: 'WKEY',
    name: 'WISeKey International Holding Ltd'
  },
  {
    symbol: 'WKHS',
    name: 'Workhorse Group Inc'
  },
  {
    symbol: 'WKME',
    name: 'WalkMe Ltd'
  },
  {
    symbol: 'WKSP',
    name: 'Worksport Ltd'
  },
  {
    symbol: 'WKSPW',
    name: 'Worksport Ltd - Warrants (01/06/2026)'
  },
  {
    symbol: 'WLDN',
    name: 'Willdan Group Inc'
  },
  {
    symbol: 'WLFC',
    name: 'Willis Lease Finance Corp'
  },
  {
    symbol: 'WLK',
    name: 'Westlake Corporation'
  },
  {
    symbol: 'WLKP',
    name: 'Westlake Chemical Partners LP'
  },
  {
    symbol: 'WLMS',
    name: 'Williams Industrial Services Group Inc'
  },
  {
    symbol: 'WLY',
    name: 'John Wiley & Sons Inc - Class A'
  },
  {
    symbol: 'WLYB',
    name: 'John Wiley & Sons Inc - Class B'
  },
  {
    symbol: 'WM',
    name: 'Waste Management Inc'
  },
  {
    symbol: 'WMB',
    name: 'Williams Cos Inc'
  },
  {
    symbol: 'WMC',
    name: 'Western Asset Mortgage Capital Corp'
  },
  {
    symbol: 'WMG',
    name: 'Warner Music Group Corp - Class A'
  },
  {
    symbol: 'WMK',
    name: 'Weis Markets Inc'
  },
  {
    symbol: 'WMPN',
    name: 'William Penn Bancorporation'
  },
  {
    symbol: 'WMS',
    name: 'Advanced Drainage Systems Inc'
  },
  {
    symbol: 'WMT',
    name: 'Walmart Inc'
  },
  {
    symbol: 'WNC',
    name: 'Wabash National Corp'
  },
  {
    symbol: 'WNEB',
    name: 'Western New England Bancorp Inc'
  },
  {
    symbol: 'WNNR',
    name: 'Andretti Acquisition Corp - Class A'
  },
  {
    symbol: 'WNNR-U',
    name: 'Andretti Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'WNNR-WS',
    name: 'Andretti Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'WNS',
    name: 'WNS Holdings Ltd'
  },
  {
    symbol: 'WNW',
    name: 'Meiwu Technology Company Ltd'
  },
  {
    symbol: 'WOLF',
    name: 'Wolfspeed Inc'
  },
  {
    symbol: 'WOOF',
    name: 'Petco Health and Wellness Co Inc - Class A'
  },
  {
    symbol: 'WOR',
    name: 'Worthington Industries Inc'
  },
  {
    symbol: 'WORX',
    name: 'SCWorx Corp'
  },
  {
    symbol: 'WOW',
    name: 'WideOpenWest Inc'
  },
  {
    symbol: 'WPC',
    name: 'W. P. Carey Inc'
  },
  {
    symbol: 'WPCA',
    name: 'Warburg Pincus Capital Corp I A - Class A'
  },
  {
    symbol: 'WPCA-U',
    name: 'Warburg Pincus Capital Corp I A - Units (1 Ord Class A & 1/5 War)'
  },
  {
    symbol: 'WPCA-WS',
    name: 'Warburg Pincus Capital Corp I A - Warrants (01/01/9999)'
  },
  {
    symbol: 'WPCB',
    name: 'Warburg Pincus Capital Corp I B - Class A'
  },
  {
    symbol: 'WPCB-U',
    name: 'Warburg Pincus Capital Corp I B - Units (1 Ord Class A & 1/5 War)'
  },
  {
    symbol: 'WPCB-WS',
    name: 'Warburg Pincus Capital Corporation IB Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of 11.50'
  },
  {
    symbol: 'WPM',
    name: 'Wheaton Precious Metals Corp'
  },
  {
    symbol: 'WPP',
    name: 'WPP Plc.'
  },
  {
    symbol: 'WPRT',
    name: 'Westport Fuel Systems Inc'
  },
  {
    symbol: 'WQGA',
    name: 'World Quantum Growth Acquisition Corp - Class A'
  },
  {
    symbol: 'WQGA-U',
    name: 'World Quantum Growth Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'WQGA-WS',
    name: 'World Quantum Growth Acquisition Corp - Warrants (04/08/2026)'
  },
  {
    symbol: 'WRAC',
    name: 'Williams Rowland Acquisition Corp'
  },
  {
    symbol: 'WRAC-U',
    name: 'Williams Rowland Acquisition Corp - Units (1 Ord & 1/2 War)'
  },
  {
    symbol: 'WRAC-WS',
    name: 'Williams Rowland Acquisition Corp - Warrants (11/12/2026)'
  },
  {
    symbol: 'WRAP',
    name: 'Wrap Technologies Inc'
  },
  {
    symbol: 'WRB',
    name: 'W.R. Berkley Corp'
  },
  {
    symbol: 'WRB-P-E',
    name: 'W.R. Berkley Corp'
  },
  {
    symbol: 'WRB-P-F',
    name: 'W.R. Berkley Corp'
  },
  {
    symbol: 'WRB-P-G',
    name: 'W.R. Berkley Corp'
  },
  {
    symbol: 'WRB-P-H',
    name: 'W.R. Berkley Corp'
  },
  {
    symbol: 'WRBY',
    name: 'Warby Parker Inc - Class A'
  },
  {
    symbol: 'WRE',
    name: 'Washington Real Estate Investment Trust'
  },
  {
    symbol: 'WRK',
    name: 'WestRock Company'
  },
  {
    symbol: 'WRLD',
    name: 'World Acceptance Corp'
  },
  {
    symbol: 'WRLSR',
    name: 'Pensare Acquisition Corp Right'
  },
  {
    symbol: 'WRLSU',
    name: 'Pensare Acquisition Corp Unit'
  },
  {
    symbol: 'WRN',
    name: 'Western Copper & Gold Corp'
  },
  {
    symbol: 'WSBC',
    name: 'Wesbanco Inc'
  },
  {
    symbol: 'WSBCP',
    name: 'Wesbanco Inc'
  },
  {
    symbol: 'WSBF',
    name: 'Waterstone Financial Inc'
  },
  {
    symbol: 'WSC',
    name: 'WillScot Mobile Mini Holdings Corp'
  },
  {
    symbol: 'WSFS',
    name: 'WSFS Financial Corp'
  },
  {
    symbol: 'WSM',
    name: 'Williams-Sonoma Inc'
  },
  {
    symbol: 'WSO',
    name: 'Watsco Inc - Class A'
  },
  {
    symbol: 'WSO-B',
    name: 'Watsco Inc - Class B'
  },
  {
    symbol: 'WSR',
    name: 'Whitestone REIT'
  },
  {
    symbol: 'WST',
    name: 'West Pharmaceutical Services Inc'
  },
  {
    symbol: 'WSTG',
    name: 'Wayside Technology Group Inc'
  },
  {
    symbol: 'WTBA',
    name: 'West Bancorporation'
  },
  {
    symbol: 'WTER',
    name: 'Alkaline Water Company Inc (The)'
  },
  {
    symbol: 'WTFC',
    name: 'Wintrust Financial Corp'
  },
  {
    symbol: 'WTFCM',
    name: 'Wintrust Financial Corp'
  },
  {
    symbol: 'WTFCP',
    name: ''
  },
  {
    symbol: 'WTI',
    name: 'W & T Offshore Inc'
  },
  {
    symbol: 'WTM',
    name: 'White Mountains Insurance Group Ltd'
  },
  {
    symbol: 'WTMA',
    name: 'Welsbach Technology Metals Acquisition Corp'
  },
  {
    symbol: 'WTMAR',
    name: 'Welsbach Technology Metals Acquisition Corp'
  },
  {
    symbol: 'WTMAU',
    name: 'Welsbach Technology Metals Acquisition Corp - Units (1 Ord & 1 Right)'
  },
  {
    symbol: 'WTRG',
    name: 'Essential Utilities Inc'
  },
  {
    symbol: 'WTRH',
    name: 'Waitr Holdings Inc'
  },
  {
    symbol: 'WTS',
    name: 'Watts Water Technologies Inc - Class A'
  },
  {
    symbol: 'WTT',
    name: 'Wireless Telecom Group Inc'
  },
  {
    symbol: 'WTTR',
    name: 'Select Energy Services Inc - Class A'
  },
  {
    symbol: 'WTW',
    name: 'Willis Towers Watson Public Ltd Company'
  },
  {
    symbol: 'WU',
    name: 'Western Union Company'
  },
  {
    symbol: 'WULF',
    name: 'TeraWulf Inc'
  },
  {
    symbol: 'WVE',
    name: 'Wave Life Sciences Ltd'
  },
  {
    symbol: 'WVVI',
    name: 'Willamette Valley Vineyard Inc'
  },
  {
    symbol: 'WVVIP',
    name: 'Willamette Valley Vineyard Inc'
  },
  {
    symbol: 'WW',
    name: 'WW International Inc'
  },
  {
    symbol: 'WWAC',
    name: 'Worldwide Webb Acquisition Corp - Class A'
  },
  {
    symbol: 'WWACU',
    name: 'Worldwide Webb Acquisition Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'WWACW',
    name: 'Worldwide Webb Acquisition Corp - Warrants (20/10/2026)'
  },
  {
    symbol: 'WWD',
    name: 'Woodward Inc'
  },
  {
    symbol: 'WWE',
    name: 'World Wrestling Entertainment Inc - Class A'
  },
  {
    symbol: 'WWR',
    name: 'Westwater Resources Inc'
  },
  {
    symbol: 'WWW',
    name: 'Wolverine World Wide Inc'
  },
  {
    symbol: 'WY',
    name: 'Weyerhaeuser Company'
  },
  {
    symbol: 'WYNN',
    name: 'Wynn Resorts Ltd'
  },
  {
    symbol: 'WYY',
    name: 'Widepoint Corp'
  },
  {
    symbol: 'X',
    name: 'United States Steel Corp'
  },
  {
    symbol: 'XAIR',
    name: 'Beyond Air Inc'
  },
  {
    symbol: 'XBIO',
    name: 'Xenetic Biosciences Inc'
  },
  {
    symbol: 'XBIOW',
    name: 'Xenetic Biosciences Inc - Warrants (19/07/2024)'
  },
  {
    symbol: 'XBIT',
    name: 'XBiotech Inc'
  },
  {
    symbol: 'XBITV',
    name: 'XBiotech Inc'
  },
  {
    symbol: 'XCUR',
    name: 'Exicure Inc'
  },
  {
    symbol: 'XEL',
    name: 'Xcel Energy Inc'
  },
  {
    symbol: 'XELA',
    name: 'Exela Technologies Inc'
  },
  {
    symbol: 'XELAP',
    name: 'Exela Technologies Inc'
  },
  {
    symbol: 'XELB',
    name: 'Xcel Brands Inc'
  },
  {
    symbol: 'XENE',
    name: 'Xenon Pharmaceuticals Inc'
  },
  {
    symbol: 'XERS',
    name: 'Xeris Biopharma Holdings Inc'
  },
  {
    symbol: 'XFIN',
    name: 'ExcelFin Acquisition Corp - Class A'
  },
  {
    symbol: 'XFINU',
    name: 'ExcelFin Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'XFINW',
    name: 'ExcelFin Acquisition Corp - Warrants (25/10/2028)'
  },
  {
    symbol: 'XFLT-P-A',
    name: 'XAI Octagon Floating Rate & Alternative Income Term Trust'
  },
  {
    symbol: 'XFOR',
    name: 'X4 Pharmaceuticals Inc'
  },
  {
    symbol: 'XGN',
    name: 'Exagen Inc'
  },
  {
    symbol: 'XHR',
    name: 'Xenia Hotels & Resorts Inc'
  },
  {
    symbol: 'XIN',
    name: 'Xinyuan Real Estate Co. Ltd'
  },
  {
    symbol: 'XL',
    name: 'XL Fleet Corporation - Class A'
  },
  {
    symbol: 'XL-WS',
    name: 'XL Fleet Corp Wt Exp 06012025'
  },
  {
    symbol: 'XLO',
    name: 'Xilio Therapeutics Inc'
  },
  {
    symbol: 'XM',
    name: 'Qualtrics International Inc - Class A'
  },
  {
    symbol: 'XMTR',
    name: 'Xometry Inc - Class A'
  },
  {
    symbol: 'XNCR',
    name: 'Xencor Inc'
  },
  {
    symbol: 'XNET',
    name: 'Xunlei Ltd'
  },
  {
    symbol: 'XOM',
    name: 'Exxon Mobil Corp'
  },
  {
    symbol: 'XOMA',
    name: 'XOMA Corp'
  },
  {
    symbol: 'XOMAO',
    name: 'XOMA Corp'
  },
  {
    symbol: 'XOMAP',
    name: 'XOMA Corp'
  },
  {
    symbol: 'XOS',
    name: 'Xos Inc'
  },
  {
    symbol: 'XOSWW',
    name: 'Xos Inc - Warrants (20/08/2026)'
  },
  {
    symbol: 'XP',
    name: 'XP Inc - Class A'
  },
  {
    symbol: 'XPAX',
    name: 'XPAC Acquisition Corp - Class A'
  },
  {
    symbol: 'XPAXU',
    name: 'XPAC Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'XPAXW',
    name: 'XPAC Acquisition Corp - Warrants (01/01/9999)'
  },
  {
    symbol: 'XPDB',
    name: 'Power & Digital Infrastructure Acquisition II Corp - Class A'
  },
  {
    symbol: 'XPDBU',
    name: 'Power & Digital Infrastructure Acquisition II Corp - Units (1 Ord Class A & 1/2 War)'
  },
  {
    symbol: 'XPDBW',
    name: 'Power & Digital Infrastructure Acquisition II Corp - Warrants (09/12/2026)'
  },
  {
    symbol: 'XPEL',
    name: 'XPEL Inc - Reg S'
  },
  {
    symbol: 'XPER',
    name: 'Xperi Holding Corp'
  },
  {
    symbol: 'XPEV',
    name: 'XPeng Inc'
  },
  {
    symbol: 'XPL',
    name: 'Solitario Zinc Corp'
  },
  {
    symbol: 'XPO',
    name: 'XPO Logistics Inc'
  },
  {
    symbol: 'XPO-W',
    name: 'XPO Logistics Inc ExDistribution Whenissued'
  },
  {
    symbol: 'XPOA',
    name: 'DPCM Capital Inc - Class A'
  },
  {
    symbol: 'XPOA-U',
    name: 'DPCM Capital Inc - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'XPOA-WS',
    name: 'DPCM Capital Inc Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of 11.50'
  },
  {
    symbol: 'XPOF',
    name: 'Xponential Fitness Inc - Class A'
  },
  {
    symbol: 'XPON',
    name: 'Expion360 Inc'
  },
  {
    symbol: 'XPRO',
    name: 'Expro Group Holdings N.V.'
  },
  {
    symbol: 'XPVVV',
    name: 'XP Inc'
  },
  {
    symbol: 'XRAY',
    name: 'DENTSPLY Sirona Inc'
  },
  {
    symbol: 'XRTX',
    name: 'XORTX Therapeutics Inc'
  },
  {
    symbol: 'XRX',
    name: 'Xerox Holdings Corp'
  },
  {
    symbol: 'XSPA',
    name: 'XpresSpa Group Inc'
  },
  {
    symbol: 'XTLB',
    name: 'X.T.L. Biopharmaceuticals Ltd'
  },
  {
    symbol: 'XTNT',
    name: 'Xtant Medical Holdings Inc'
  },
  {
    symbol: 'XXII',
    name: '22nd Century Group Inc'
  },
  {
    symbol: 'XYF',
    name: 'X Financial'
  },
  {
    symbol: 'XYL',
    name: 'Xylem Inc'
  },
  {
    symbol: 'Y',
    name: 'Alleghany Corp'
  },
  {
    symbol: 'YALA',
    name: 'Yalla Group Ltd'
  },
  {
    symbol: 'YCBD',
    name: 'cbdMD Inc'
  },
  {
    symbol: 'YCBD-P-A',
    name: 'cbdMD Inc'
  },
  {
    symbol: 'YELL',
    name: 'Yellow Corporation'
  },
  {
    symbol: 'YELP',
    name: 'Yelp Inc'
  },
  {
    symbol: 'YETI',
    name: 'YETI Holdings Inc'
  },
  {
    symbol: 'YEXT',
    name: 'Yext Inc'
  },
  {
    symbol: 'YGMZ',
    name: 'MingZhu Logistics Holdings Ltd'
  },
  {
    symbol: 'YI',
    name: '111 Inc'
  },
  {
    symbol: 'YJ',
    name: 'Yunji Inc'
  },
  {
    symbol: 'YMAB',
    name: 'Y-Mabs Therapeutics Inc'
  },
  {
    symbol: 'YMM',
    name: 'Full Truck Alliance Co Ltd'
  },
  {
    symbol: 'YMTX',
    name: 'Yumanity Therapeutics Inc'
  },
  {
    symbol: 'YNDX',
    name: 'Yandex NV - Class A'
  },
  {
    symbol: 'YORW',
    name: 'York Water Company'
  },
  {
    symbol: 'YOTA',
    name: 'Yotta Acquisition Corp'
  },
  {
    symbol: 'YOTAR',
    name: 'Yotta Acquisition Corp'
  },
  {
    symbol: 'YOTAU',
    name: 'Yotta Acquisition Corp - Units (1 Ord 1 War & 1 Right)'
  },
  {
    symbol: 'YOTAW',
    name: 'Yotta Acquisition Corp - Warrants(15/03/2027)'
  },
  {
    symbol: 'YOU',
    name: 'Clear Secure Inc Class A'
  },
  {
    symbol: 'YPF',
    name: 'YPF'
  },
  {
    symbol: 'YQ',
    name: '17 Education & Technology Group Inc'
  },
  {
    symbol: 'YRD',
    name: 'Yiren Digital Ltd'
  },
  {
    symbol: 'YSAC-U',
    name: 'Yellowstone Acquisition Company Units'
  },
  {
    symbol: 'YSG',
    name: 'Yatsen Holding Ltd'
  },
  {
    symbol: 'YTEN',
    name: 'Yield10 Bioscience Inc'
  },
  {
    symbol: 'YTPG',
    name: 'TPG Pace Beneficial II Corp - Class A'
  },
  {
    symbol: 'YTRA',
    name: 'Yatra Online Inc'
  },
  {
    symbol: 'YUM',
    name: 'Yum Brands Inc'
  },
  {
    symbol: 'YUMC',
    name: 'Yum China Holdings Inc'
  },
  {
    symbol: 'YVR',
    name: 'Liquid Media Group Ltd'
  },
  {
    symbol: 'YYINZ',
    name: 'JOYY Inc'
  },
  {
    symbol: 'Z',
    name: 'Zillow Group Inc - Class C'
  },
  {
    symbol: 'ZAZZT',
    name: 'ZAZZT'
  },
  {
    symbol: 'ZBH',
    name: 'Zimmer Biomet Holdings Inc'
  },
  {
    symbol: 'ZBRA',
    name: 'Zebra Technologies Corp - Class A'
  },
  {
    symbol: 'ZBZX',
    name: 'Bats Listed Test'
  },
  {
    symbol: 'ZBZZT',
    name: 'ZBZZT'
  },
  {
    symbol: 'ZCMD',
    name: 'Zhongchao Inc - Class A'
  },
  {
    symbol: 'ZCZZT',
    name: 'Super Montage IPO X Tst Security SM IPO X 3'
  },
  {
    symbol: 'ZD',
    name: 'Ziff Davis Inc'
  },
  {
    symbol: 'ZDGE',
    name: 'Zedge Inc - Class B'
  },
  {
    symbol: 'ZDVSV',
    name: 'j2 Global Inc'
  },
  {
    symbol: 'ZEAL',
    name: 'Zealand Pharma A/S.'
  },
  {
    symbol: 'ZEN',
    name: 'Zendesk Inc'
  },
  {
    symbol: 'ZENV',
    name: 'Zenvia Inc - Class A'
  },
  {
    symbol: 'ZEPP',
    name: 'Zepp Health Corporation'
  },
  {
    symbol: 'ZEST',
    name: 'Ecoark Holdings Inc'
  },
  {
    symbol: 'ZETA',
    name: 'Zeta Global Holdings Corp - Class A'
  },
  {
    symbol: 'ZEUS',
    name: 'Olympic Steel Inc'
  },
  {
    symbol: 'ZEV',
    name: 'Lightning eMotors Inc'
  },
  {
    symbol: 'ZEV-WS',
    name: 'Lightning eMotors Inc Wt Exp 05182025'
  },
  {
    symbol: 'ZG',
    name: 'Zillow Group Inc - Class A'
  },
  {
    symbol: 'ZGN',
    name: 'Ermenegildo Zegna N.V.'
  },
  {
    symbol: 'ZGN-WS',
    name: 'Ermenegildo Zegna N.V. - Warrants (17/12/2026)'
  },
  {
    symbol: 'ZH',
    name: 'Zhihu Inc'
  },
  {
    symbol: 'ZI',
    name: 'ZoomInfo Technologies Inc'
  },
  {
    symbol: 'ZIM',
    name: 'Zim Integrated Shipping Services Ltd'
  },
  {
    symbol: 'ZIMV',
    name: 'ZimVie Inc'
  },
  {
    symbol: 'ZIMVV',
    name: 'ZimVie Inc'
  },
  {
    symbol: 'ZING',
    name: 'FTAC Zeus Acquisition Corp - Class A'
  },
  {
    symbol: 'ZINGU',
    name: 'FTAC Zeus Acquisition Corp - Units (1 Ord Share Class A & 1/2 War)'
  },
  {
    symbol: 'ZINGW',
    name: 'FTAC Zeus Acquisition Corp - Warrants (15/04/2026)'
  },
  {
    symbol: 'ZION',
    name: 'Zions Bancorporation N.A'
  },
  {
    symbol: 'ZIONL',
    name: 'Zions Bancorporation NA 695 FixedtoFloating Rate Subordinated Notes due September 15 2028'
  },
  {
    symbol: 'ZIONN',
    name: 'Zions Bancorporation N.A'
  },
  {
    symbol: 'ZIONO',
    name: 'Zions Bancorporation N.A'
  },
  {
    symbol: 'ZIONP',
    name: 'Zions Bancorporation N.A'
  },
  {
    symbol: 'ZIP',
    name: 'ZipRecruiter Inc - Class A'
  },
  {
    symbol: 'ZIVO',
    name: 'Zivo Bioscience Inc'
  },
  {
    symbol: 'ZIVOW',
    name: 'Zivo Bioscience Inc - Warrants (29/04/2026)'
  },
  {
    symbol: 'ZJZZT',
    name: 'NASDAQ TEST STOCK'
  },
  {
    symbol: 'ZKIN',
    name: 'ZK International Group Co Ltd'
  },
  {
    symbol: 'ZLAB',
    name: 'Zai Lab Ltd'
  },
  {
    symbol: 'ZM',
    name: 'Zoom Video Communications Inc - Class A'
  },
  {
    symbol: 'ZNH',
    name: 'China Southern Airlines Company Ltd'
  },
  {
    symbol: 'ZNTE',
    name: ''
  },
  {
    symbol: 'ZNTL',
    name: 'Zentalis Pharmaceuticals Inc'
  },
  {
    symbol: 'ZOM',
    name: 'Zomedica Corp'
  },
  {
    symbol: 'ZS',
    name: 'Zscaler Inc'
  },
  {
    symbol: 'ZT',
    name: 'Zimmer Energy Transition Acquisition Corp - Class A'
  },
  {
    symbol: 'ZTAQU',
    name: 'Zimmer Energy Transition Acquisition Corp - Units (1 Ord Share Class A & 1/3 War)'
  },
  {
    symbol: 'ZTAQW',
    name: 'Zimmer Energy Transition Acquisition Corp - Warrants (16/06/2026)'
  },
  {
    symbol: 'ZTEK',
    name: 'Zentek Ltd'
  },
  {
    symbol: 'ZTEST',
    name: ''
  },
  {
    symbol: 'ZTO',
    name: 'ZTO Express (Cayman) Inc'
  },
  {
    symbol: 'ZTS',
    name: 'Zoetis Inc - Class A'
  },
  {
    symbol: 'ZTST',
    name: ''
  },
  {
    symbol: 'ZUMZ',
    name: 'Zumiez Inc'
  },
  {
    symbol: 'ZUO',
    name: 'Zuora Inc - Class A'
  },
  {
    symbol: 'ZVIA',
    name: 'Zevia PBC - Class A'
  },
  {
    symbol: 'ZVO',
    name: 'Zovio Inc'
  },
  {
    symbol: 'ZVV',
    name: 'LISTED TEST SYMBOL'
  },
  {
    symbol: 'ZVZZC',
    name: 'ZVZZC'
  },
  {
    symbol: 'ZVZZT',
    name: 'NASDAQ TEST STOCK'
  },
  {
    symbol: 'ZWRK',
    name: 'Z-Work Acquisition Corp - Class A'
  },
  {
    symbol: 'ZWRKU',
    name: 'Z-Work Acquisition Corp - Units (1 Ord Class A & 1/3 War)'
  },
  {
    symbol: 'ZWRKW',
    name: 'Z-Work Acquisition Corp - Warrants (29/01/2026)'
  },
  {
    symbol: 'ZWS',
    name: 'Zurn Elkay Water Solutions Corp'
  },
  {
    symbol: 'ZWZZT',
    name: 'NASDAQ TEST STOCK'
  },
  {
    symbol: 'ZXYZ-A',
    name: 'NASDAQ SYMBOLOGY TEST'
  },
  {
    symbol: 'ZXZZT',
    name: 'NASDAQ TEST STOCK'
  },
  {
    symbol: 'ZY',
    name: 'Zymergen Inc'
  },
  {
    symbol: 'ZYME',
    name: 'Zymeworks Inc'
  },
  {
    symbol: 'ZYNE',
    name: 'Zynerba Pharmaceuticals Inc'
  },
  {
    symbol: 'ZYXI',
    name: 'Zynex Inc'
  },
  {
    symbol: 'ZZK',
    name: ''
  },
  {
    symbol: 'ZZZ',
    name: 'TEST TICKER FOR UTP'
  }
];

export default stockOptions;
