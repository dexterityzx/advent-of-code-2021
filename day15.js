const input = [
  "7972981688791317719199958278997414998179291159137739671791196521896458715667859893489494984749526918",
  "9532858629894993869576297994641994933688189976199278681919954768569994891767999646466898737767561868",
  "6991814593381551676989159939876168525786213469248388949163238697116799929291989716834954479558899298",
  "7929171758998986654981999998999778979181893699729659774798983562969998888924568849786711788119677938",
  "9114998519799653895637268338556759817893676954789349888867927892799523994937329958884998792992177121",
  "9883197979858373547134449157856122868499673939817889671971982934399773978957711881521677738989969929",
  "9998583883249861869899965649292883934818919167778113761343256691829279199335517987868992671938581596",
  "9957693486912954985937679939964997729991426989979938888181871294426999896947911959897399792824324968",
  "9179476898336757796864987729359977297555898655592864936587166992948189595131397971429299991684879739",
  "7458757822282746834651787269785993198988839516534748934656297681959918246759599198867941999679891575",
  "2926126985212525396261885774917929888969798911759799699276359317182941116868378997911893447693895936",
  "8957989687383928743996595914298491789135118646698693613885897918891994979936755954658198795919127994",
  "4499565268822787118967959595385698483899895444597594751114717855445238139869796949492497894962129155",
  "8969858684877183888898327776961718645196159794618825918139992786619692899879255293849882171979997695",
  "9957756384961559693279977943488986889925615995899789948568769995184179157928799571919219865692881999",
  "6711539712387789965399753712988789658259593995936924996995297547549386816699356991612997918478769959",
  "1719739798295187383968731267955996783568446485962966459839538797894961523386933531991786599159787296",
  "6927972864823469717889989894869847819377186461791182679962889148599945991571618993867169578949989698",
  "1297492936164454854752179569725888267677944165513971988788985397786776157868937392993586959319497716",
  "5194771477263948568796992849985111255692947858764796959928549946337478699988929979989991869883895797",
  "4621545186379993189767797479895196991896822691974976949569663815799623758987916379298168488727798779",
  "6215673966986751228989973999945995835981992187614677919411896499998473698216999999364488591239192469",
  "8828453287969548128682899894999927499596686183688853591761222892859285946735978556916171276578119794",
  "8524999986799224328699699196199971484258499897944563847817999219579898387118973254982682893896647931",
  "8839918962959284572279224499894318439995177959999787791827819959977996894684716679971599495287848458",
  "1978749158572535255916894979155517886992833896119812289957427294113996336817282791199996995968619494",
  "1992689543619929886346969617959329911829196587866989763799999199897694966679825917769975868916747395",
  "1993176289758271797415749419899196791994315969585191636917137289142878493699614619329777997789182979",
  "7482191158998159799958288964857297879899522953787196999359493894395515881915997244276225559568251929",
  "6912987965483892992569269844298129527993566744794773189826844982297997473419915118859327977166199897",
  "8869989399549548581285852962699471827159639773592723998619693768991989778392591952882499539711981859",
  "2686989839995855216873113268979976972987988734891998597847778119946894387914933662972429819599397896",
  "4847798797955545829488162338854591813749399998933689994879844289784992773997996993567899795999779598",
  "7159229988158572725497789848788289197879868981869699886797953928998192946929759298498669691799281946",
  "1762789976291599472518687864897792635953515477886937171849699913872349774739594475599313549172278999",
  "9486193639979594791731697698793998988799952698489119999998779394949247811312998689994197829968177926",
  "5988572979219984936289998844666342759719649996952255728649331179949299894993595411968379956917896377",
  "8162853899892899399993999978914725972286976517242229885881926997296966996948676967399326798886441411",
  "9145975999457566997918819916976423829587283646989921998228926587862471499369674798189934879872189641",
  "7959998473864692897976899669576959463591166993846698467419728672696829899299958782494714736878938713",
  "6635128424989289996339791939787878968794299867585889898834919589784969189179478719799999228279639499",
  "9311883882881825449893731699759842445737885779861563789793145867974539689877769792816959748595397783",
  "9189228119199394126899992681387197989715856193468645317617789597787598795595845967839773811367166675",
  "4883811597729149316199848136288949954885869929993288968768873476649693878818268393929796954886553886",
  "7756999996839989983992952378888711895249483559537447886939854911919792215997492987361587499919938898",
  "1695828739926926197447851569319942989117987459376589875159941699729731219578992895885518793586368316",
  "7942575619285675799499248272931828998222699898998379848683959982733817797192259789849189448277278426",
  "7775918498596913918819983117941688791377598469192179446943971789986689991958888919738973939236954483",
  "7791538199936862397498389193937579148169937938884967387996688879988498373152542785993954985148976189",
  "9587593774921949879479627995316992987796679969785199813929968973579299887788529767287599898881958489",
  "8754991976679864828996956981898849969897916698599952987937611458445846376939797974993754799995788993",
  "9983635799768957949616678967369471489333587926182943864724989979996967557878118376968879968338119712",
  "6461793458142379117459697975919896139373988759458881758938247787667987397869845312937946991572991895",
  "7277886939311752817966284848862936612934139633917719949837993493995497959526616318991627947799748518",
  "1399999988831693489136994544449218517872188878811777982327992916192697985178956717578527948815594419",
  "9256727391869549969792689792359974354156916961958886893989992899786891299498956571796181999266819326",
  "6999899992691966892997844225527938573878979798588989979339979498778296791685716665891987784686999121",
  "4756926866836866616988289379858589557718875132895697619817964175991329719729487986976998481677217893",
  "8239988955988569639922779178697485969397859799928268956747739951529499871991697938264198892196281611",
  "9155125999218875761486541796428998149927659989158599973239432769111453786769998896775842937668385325",
  "4125426918979348896889726519999668484699587853938998956699769977719842798539986956718324981569692923",
  "5499267869798712889949792499989891682331771992857948867849949913669989398889691959751979968615217989",
  "7839797389938895595797997791454859875939157968938951699563177639773739689174897998813561698999681821",
  "2935799995925419647189799128842196239899446792975263999177791169979399717673558796173878189249899984",
  "1686178738586743559939446979997218281187328913844935398189895914554994585131899988996818433749626784",
  "4939811594579171229558857429769918686638388897681788996199972292378966699787541714179997928794392749",
  "8697887148958672432827198465966879919845512587682619819579696138389782988677839979996645992828853699",
  "5982395749968931948657258887779198588638298684988821459748598989896281719619582957799551967913391635",
  "4797198895795999972213958697191965912451755995597998456915651189149895994519919815892277299791289897",
  "8896945717456289696872791633691978498892169647799398991976919848893952921678758151888759888367185699",
  "1177357719411625793479496935989999837519898867915886769229781695749798768974235662727693991767996562",
  "1398939999597319119155958249574347816538428952941957818454486749985469188999497883949971199287973727",
  "7999584844692654817729491996867385147295965144986197298498339985673499699872736959549252931929785773",
  "9598389163779276167512273899889915977889969867859139895519174869127189976928985883799757679938719889",
  "8995999215667998859647895169798496928848588889788622983225999899196865769851414575481599588478977692",
  "9486489563589695749184659999773329399168668917894178981919769999696948677761688119154937979697436967",
  "8886966777199629396986687284862835948855138187719191992933277891162516263965627628399124769611717817",
  "6888583495998624899789888939869753379626884968266128588993938268442396727878958678169519895885993798",
  "3768499479388988474846972615896978628819971989994567985619995673964789167695378811691898959848565659",
  "8299533791997817939113818549299818959394984993899199276999958919187975272999979958426698519234889138",
  "4888469478988631349828519856996739898365379949512175979964859833989989126896136238796997889732999165",
  "9856959118788747794681917957843589151997228919728135658625376926894519815689981999498988918863429482",
  "5178896819595272968889696827781239944897495688792978748749137877628959191628952177945918559224871275",
  "9518481797329898999997969924898951989619215999287611821811871588916798867297653189198271869599644986",
  "8591629687552878388667111775994629577989442893749699991196966567438899545464739599927619874991865347",
  "5479886669281929987981341689379681789181549186956488898867979999938979591997918959726818999934168697",
  "8799994325191781992128487195168469514469894938459754867657197798819655999173917388967918969918816849",
  "9165249883488854389172791186998976468789984819579891691812923199686499468926579787947657697783821888",
  "8189397499192919871499953288749191698978978159878998984957115546243984599154456759754811944573729678",
  "6798155886834398499853988121399548898841934699817967841944971791687698599888688968521369189916499913",
  "9169699289686488891291979968869593187741955246629644799995488792569958755997666697925154798853115939",
  "9995981797817685268998992859991879922459239449597189898719599959128399571895598771772472495195696663",
  "7984983981139977286176399311798679389677399261487889599885286799499929849662756992591912674289388858",
  "9169492491989753181936932519719184685938965911913363788777476173499945999256859987955639676488414779",
  "1624746996898125989973699999798168939911759891698899911919123897319784286359819273497944987847219738",
  "4627969389899256989991177556667768779281199291393613184916928795417671319998669978798296195198999988",
  "9111674498599738119679991743599699899952948788778995547956769398992937819498893679986199685886791686",
  "7299289185683873975716787789399959411967812247999496269159827657839991799199597567982585798364477889",
  "9969769988864956956695789272676987869979978689199281894466598789993968997695258419878889317893549999",
  "9719793994268511977579876978967922859186998976111971264297823188565997199715889244194987485994343489",
];

const riskMap = input.map((r) => r.split("").map((c) => parseInt(c)));

const MinRiskQueue = function (q = []) {
  this.q = q;

  const queue = (risk, r, c) => {
    this.q.push([risk, r, c]);
    // we should not do this, since it will make each queue N*logN and if we have N element
    // the time complexity will be N*N*LogN. Since I don't care the execuation time, I did to simplify the code.
    this.q.sort((a, b) => b[0] - a[0]); 
  };

  const dequeue = () => {
    if (this.q.length === 0) return null;
    return this.q.pop();
  };

  const hasNext = () => {
    return this.q.length > 0;
  };
  return {
    queue,
    dequeue,
    hasNext,
  };
};

// https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
// Use Dijkstra’s shortest path algorithm
const findMinRisk = (riskMap) => {
  const queue = [];
  const minRiskQueue = MinRiskQueue(queue);

  const R = riskMap.length;
  const C = riskMap[0].length;

  const getKey = (r, c) => r + "_" + c;

  const isValid = (r, c) => 0 <= r && r < R && 0 <= c && c < C;

  const minRiskMap = new Map();

  const visited = new Set();
  const direction = [1, 0, -1, 0, 1];
  minRiskQueue.queue(0, 0, 0);

  while (minRiskQueue.hasNext()) {
    const next = minRiskQueue.dequeue();
    const risk = next[0];
    const r = next[1];
    const c = next[2];
    const key = getKey(r, c);
    if (visited.has(key)) continue;
    minRiskMap.set(key, risk + riskMap[r][c]);
    visited.add(key);

    for (let i = 0; i < 4; i++) {
      const nextR = r + direction[i];
      const nextC = c + direction[i + 1];
      if (isValid(nextR, nextC))
        minRiskQueue.queue(risk + riskMap[r][c], nextR, nextC);
    }
  }

  return minRiskMap.get(getKey(R - 1, C - 1)) - riskMap[0][0];
};

// part 1
console.log(findMinRisk(riskMap));

// part 2
const increaseNumber = (n, m) => {
  while (m-- > 0) {
    n = (n + 1) % 10;
    if (n === 0) n++;
  }
  return n;
};

const increaseBlock = (map, startR, startC, baseR, baseC, increament) => {
  for (let r = startR; r < startR + baseR; r++)
    for (let c = startC; c < startC + baseC; c++) {
      map[r][c] = increaseNumber(map[r][c], increament);
    }
};

const expandMap = (map, n) => {
  const baseR = map.length;
  const baseC = map[0].length;

  const newMap = new Array(baseR * n)
    .fill(0)
    .map((_, rowIndex) => new Array(n).fill(map[rowIndex % baseR]).flat());

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const startR = i * baseR;
      const startC = j * baseC;
      increaseBlock(newMap, startR, startC, baseR, baseC, i + j);
    }
  }

  return newMap;
};

console.log(findMinRisk(expandMap(riskMap, 5)));