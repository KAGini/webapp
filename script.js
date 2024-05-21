let tg = window.Telegram.WebApp;
tg.MainButton.disable();
tg.MainButton.text = "Закончить";

const allPairs = [["машина", "автомобиль"], ["пөхтә", "аккуратно"], ["актив", "активный"], ["әлифба", "алфавит"], ["әфлисун", "апельсин"], ["әби", "бабушка"], ["бәла", "беда"], ["ярлы", "бедный"], ["ак", "белый"], ["яр", "берег"], ["әңгәмә", "беседа"], ["китапханә", "библиотека"], ["билет", "билет"], ["рәхмәт", "спасибо"], ["намуслы", "честный"], ["агарынган", "бледный"], ["ялтыравыклы", "блестящий"], ["якынрак", "поближе"], ["якын", "близкий"], ["якында", "близко"], ["алла", "бог"], ["байлык", "богатство"], ["бай", "богатый"], ["шат", "рад"], ["хәрби", "боевой"], ["сугышчы", "воин"], ["сугыш", "война"], ["ян", "бок"], ["зуррак", "больше"], ["авыру", "больной"], ["саз", "болото"], ["авырту", "боль"], ["хастаханә", "больница"], ["авырта", "больно"], ["күпчелек", "большинство"], ["зур", "небольшой"], ["көрәш", "борьба"], ["ботинка", "ботинки"], ["абый", "дядя"], ["каш", "бровь"], ["гүя", "будто"], ["киләчәк", "будущий"], ["хәреф", "буква"], ["кәгазь", "бумажный"], ["давыллы", "бурный"], ["шешә", "бутылка"], ["булган", "бывший"], ["үгез", "бык"], ["тиз", "скорый"], ["көнкүреш", "быт"], ["1.", "в"], ["кәпрәеп", "важно"], ["мөһим", "важный"], ["өскә", "вверх"], ["буенча", "вдоль"], ["кинәт", "резко"], ["бит", "страница"], ["һәркайда", "всюду"], ["алып", "убрать"], ["гасыр", "век"], ["бөек", "великий"], ["ышану", "доверие"], ["бау", "веревка"], ["турылыклы", "верный"], ["түбә", "крыша"], ["өске", "верхний"], ["атланып", "верховой"], ["күңелле", "весело"], ["язгы", "весенний"], ["яз", "весна"], ["язын", "весной"], ["хәбәр", "сообщение"], ["бөтен", "целый"], ["бик", "срочно"], ["ботак", "ветка"], ["жил", "ветер"], ["кич", "вечер"], ["кичке", "ужин"], ["кичен", "вечером"], ["әйбер", "вещь"], ["дулкынланган", "взволнованный"], ["(күз)", "взгляд"], ["сискәнеп", "вздрогнуть"], ["олы", "старший"], ["алынган", "полученный"], ["күренеш", "вид"], ["күрәсең", "очевидно"], ["күренә", "видно"], ["күренекле", "видный"], ["гаепле", "виноватый"], ["асылынып", "висеть"], ["тәм", "вкус"], ["тәмле", "вкусный"], ["власть", "власть"], ["йогынты", "влияние"], ["бергә", "вместе"], ["башта", "сначала"], ["аска", "вниз"], ["аста", "внизу"], ["дикъкать", "внимание"], ["дикъкатьле", "внимательный"], ["яңадан", "снова"], ["эчке", "внутренний"], ["бөтенләй", "совсем"], ["су", "вода"], ["гаскәри", "военный"], ["җитәкче", "руководитель"], ["кире", "обратно"], ["һава", "погода"], ["янында", "у"], ["мөмкин", "невозможно"], ["мөмкинлек", "возможность"], ["килеп", "получиться"], ["каршы", "против"], ["яшь", "юный"], ["гаскәр", "войско"], ["дулкын", "волна"], ["чәч", "волос"], ["ихтыяр", "воля"], ["кит", "вон"], ["гомумән", "вообще"], ["сорау", "просьба"], ["капка", "ворота"], ["якшәмбе", "воскресенье"], ["тәрбия", "воспитание"], ["тәрбияле", "воспитанный"], ["искә", "напомнить"], ["шәрык", "восток"], ["сигезенче", "восьмой"], ["менә", "полезть"], ["беренче", "впервые"], ["алда", "предстоять"], ["тәэсир", "впечатление"], ["тулысынча", "вполне"], ["ләкин", "впрочем"], ["дошман", "противник"], ["табиб", "врач"], ["вакыт", "срок"], ["шикелле", "подобно"], ["һәрвакыт", "постоянно"], ["барысы", "всего"], ["бөтендөнья", "всемирный"], ["шулай", "тоже"], ["тиздән", "вскоре"], ["сикереп", "выскочить"], ["артыннан", "следовать"], ["кычкырып", "закричать"], ["очрашу", "встреча"], ["һәрбер", "всякий"], ["икенче", "второй"], ["керү", "вход"], ["керә", "входной"], ["кичә", "вчера"], ["йөгереп", "пробежать"], ["сайлау", "выбор"], ["сайлаулар", "выборы"], ["чыгып", "торчать"], ["чакыру", "вызов"], ["чакырып", "вызывать"], ["үтәү", "выполнение"], ["үтәлгән", "выполненный"], ["чыгарылыш", "выпускной"], ["әйтем", "выражение"], ["үсеп", "вырасти"], ["алга", "вырваться"], ["биек", "высокий"], ["югары", "выше"], ["суырып", "высосать"], ["биеклек", "уровень"], ["күргәзмә", "выставка"], ["чыгу", "выход"], ["тәрбияләп", "выходить"], ["газет", "газета"], ["герой", "герой"], ["гадәттән", "необычайный"], ["башлык", "начальник"], ["төп", "основной"], ["фигыль", "глагол"], ["күз", "глаз"], ["тирәнлек", "глубина"], ["тирән", "глубоко"], ["ахмак", "глупый"], ["чукрак", "глухой"], ["ел", "ежегодный"], ["яраклы", "пригодный"], ["еллык", "годовщина"], ["баш", "отказываться"], ["тавыш", "шум"], ["зәңгәр", "голубой"], ["күгәрчен", "голубь"], ["ялангач", "голый"], ["тау", "горный"], ["күп", "многочисленный"], ["горурлык", "гордость"], ["горур", "гордый"], ["кайгы", "горе"], ["офык", "горизонт"], ["тамак", "горло"], ["шәһәр", "город"], ["кызу", "жаркий"], ["әфәнде", "господин"], ["кунакханә", "гостиница"], ["кунак", "гость"], ["дәүләт", "государство"], ["чик", "рубеж"], ["тупас", "грубый"], ["күкрәк", "грудь"], ["йөк", "груз"], ["күңелсез", "скучный"], ["ирен", "губа"], ["куе", "густой"], ["әйе", "да"], ["күптән", "недавно"], ["хәтта", "даже"], ["аннары", "потом"], ["ерак", "недалеко"], ["ераграк", "дальше"], ["бирелгән", "данный"], ["ишек", "двор"], ["хәрәкәт", "действие"], ["сарай", "сарай"], ["кыз", "сестра"], ["бабай", "дед"], ["дежур", "дежурный"], ["чын", "действительный"], ["эш", "трудовой"], ["бүлү", "отделение"], ["акча", "деньги"], ["авыл", "сельский"], ["агач", "дерево"], ["аерым", "отдельный"], ["балалар", "ребята"], ["балачак", "детство"], ["тәртип", "распорядок"], ["озынлык", "длина"], ["озын", "длинный"], ["көндәлек", "дневник"], ["көндез", "днем"], ["яхшы", "хорошо"], ["озак", "долго"], ["йорт", "дом"], ["такта", "доска"], ["борынгы", "старинный"], ["вакланма", "дробь"], ["утын", "дрова"], ["дус", "приятель"], ["дуслык", "дружба"], ["юләр", "дурак"], ["җан", "душа"], ["төтен", "дым"], ["сулыш", "дышать"], ["көчкә", "едва"], ["бердәнбер", "единственный"], ["бердәм", "усилие"], ["көн", "ежедневно"], ["әгәр", "если"], ["тагы", "подучить"], ["кызганыч", "сожаление"], ["эссе", "жарко"], ["теләк", "желание"], ["тимер", "железо"], ["сары", "желтый"], ["хатын", "жена"], ["ым", "жест"], ["каты", "твердый"], ["хайван", "животное"], ["тормыш", "жизнь"], ["торучы", "житель"], ["койма", "забор"], ["кайгырту", "забота"], ["кайгыртучан", "заботливый"], ["бәйле", "зависеть"], ["яулап", "завоевать"], ["иртәгә", "завтра"], ["иртәнге", "завтрак"], ["иртәгәге", "завтрашний"], ["сөйли", "заговорить"], ["куып", "загонять"], ["яна", "загораться"], ["бирем", "задание"], ["мәсьәлә", "задача"], ["арткы", "задний"], ["уйланып", "задумчиво"], ["куянкай", "зайчик"], ["йомгак", "итог"], ["закон", "закон"], ["законлы", "законный"], ["ябык", "закрытый"], ["тарта", "закурить"], ["урынбасар", "заместитель"], ["күренеп", "показаться"], ["гүзәл", "замечательный"], ["күреп", "увидев"], ["пәрдә", "занавес"], ["бурычка", "занимать"], ["дәрес", "урок"], ["буш", "слабо"], ["көнбатыш(тагы)", "западный"], ["ис", "удивленно"], ["җырлый", "запеть"], ["язып", "записать"], ["язу", "записка"], ["истә", "запомнить"], ["алдан", "заранее"], ["утырыш", "заседание"], ["атказанган", "заслуженный"], ["көлеп", "смеясь"], ["мәҗбур", "заставить"], ["туры", "прямой"], ["аннан", "оттуда"], ["аның", "зато"], ["онытылып", "зачитаться"], ["яклау", "защита"], ["гариза", "заявление"], ["исем", "называть"], ["йолдыз", "звезда"], ["йолдызчык", "звездочка"], ["боҗра", "звено"], ["ерткыч", "зверь"], ["звонок", "звонок"], ["аваз", "звук"], ["бина", "помещение"], ["монда", "сюда"], ["сау", "здоровый"], ["саулык", "здоровье"], ["исән", "здравствовать"], ["яшел", "зеленый"], ["җир", "земной"], ["көзге", "осенний"], ["бөртек", "зерно"], ["кыш", "зима"], ["кышкы", "зимний"], ["кышын", "зимой"], ["усал", "злой"], ["билге", "знак"], ["таныш", "известный"], ["атаклы", "славный"], ["байрак", "флаг"], ["белем", "знание"], ["алтын", "золотой"], ["тамашачы", "зритель"], ["юкка", "недаром"], ["теш", "зуб"], ["һәм", "и"], ["чөнки", "ибо"], ["уен", "игра"], ["уенчык", "игрушка"], ["билгеле", "разумеется"], ["гафу", "прощать"], ["ерактан", "издали"], ["яки", "или"], ["ия", "иметь"], ["башкача", "иначе"], ["инициатива", "инициатива"], ["кайчакта", "порой"], ["бүтән", "иной"], ["чит", "иностранный"], ["корал", "оружие"], ["кызыксыну", "интерес"], ["кызыклы", "интересный"], ["ясалма", "искусственный"], ["сәнгать", "искусство"], ["сынау", "испытание"], ["тарихи", "исторический"], ["тарих", "история"], ["чишмә", "источник"], ["башлангыч", "исходный"], ["тырнап", "исцарапать"], ["кара", "черный"], ["һәр", "каждый"], ["ничек", "каков"], ["таш", "камень"], ["капиталь", "капитальный"], ["тамчы", "капля"], ["кесә", "карман"], ["карта", "карта"], ["рәсем", "снимок"], ["сыйфат", "качество"], ["квадрат", "квадратный"], ["квартир", "квартира"], ["селкеп", "кивнуть"], ["класс", "классный"], ["читлек", "клетка"], ["ачкыч", "ключ"], ["китап", "книжный"], ["кемне", "кого"], ["тире", "кожа"], ["тез", "колено"], ["көпчәк", "колесо"], ["сан", "число"], ["бүлмә", "комната"], ["оч", "конец"], ["шиксез", "конечно"], ["контроль", "контрольный"], ["карават", "кровать"], ["түгәрәк", "круглый"], ["болдыр", "крыльцо"], ["урынлы", "кстати"], ["мәдәният", "культура"], ["сатып", "покупать"], ["куртка", "куртка"], ["кисәк", "кусок"], ["куак", "куст"], ["аш", "столовая"], ["ярый", "ладно"], ["уч", "ладонь"], ["тәпи", "лапа"], ["ачык", "явный"], ["сул", "левый"], ["җиңел", "просто"], ["җиңелрәк", "легче"], ["боз", "ледяной"], ["тасма", "полоса"], ["урман", "лесной"], ["очып", "лететь"], ["җәй", "летом"], ["очучы", "летчик"], ["я", "ну"], ["сызык", "черта"], ["яфрак", "листок"], ["әдәбият", "литература"], ["әдәби", "литературный"], ["үзе", "лично"], ["шәхси", "личный"], ["артык", "лишний"], ["бары", "только"], ["маңгай", "лоб"], ["көймә", "лодка"], ["терсәк", "локоть"], ["көрәк", "лопата"], ["ат", "лошадь"], ["ай", "месяц"], ["нур", "луч"], ["яхшырак", "лучший"], ["яраткан", "любимый"], ["мәхәббәт", "любовь"], ["теләсә", "любой"], ["кызыксынучанлык", "любопытство"], ["кешеләр", "люди"], ["кибет", "магазин"], ["кечкенә", "окошко"], ["аз", "чуть"], ["малай", "мальчик"], ["әни", "мама"], ["май", "масло"], ["һөнәр", "мастерство"], ["матди", "материальный"], ["ана", "мать"], ["болгап", "махнуть"], ["әкрен", "тихонько"], ["акрын", "медленный"], ["арасында", "среди"], ["шәһәрара", "междугородний"], ["халыкара", "международный"], ["вак", "мелочь"], ["кимрәк", "менее"], ["кечерәк", "меньше"], ["үле", "мертвый"], ["урын", "постель"], ["җирле", "местный"], ["металл", "металлический"], ["метод", "метод"], ["методик", "методический"], ["механика", "механический"], ["хыял", "мечта"], ["капчык", "мешок"], ["мизгел", "миг"], ["сөйкемле", "милый"], ["министрлык", "министерство"], ["тынычлык", "мир"], ["тыныч", "спокойный"], ["дөньякүләм", "мировой"], ["кече", "младший"], ["уй", "раздумье"], ["күп(ләр)", "многие"], ["көчле", "сильный"], ["минем", "мой"], ["юеш", "мокрый"], ["яшьләр", "молодежь"], ["егет", "парень"], ["яшьлек", "юношеский"], ["сөт", "молоко"], ["чүкеч", "молоток"], ["тынлык", "тишина"], ["момент", "момент"], ["диңгез", "морской"], ["суык", "холодно"], ["моряк", "моряк"], ["мәскәү", "московский"], ["күпер", "мост"], ["куәт", "мощность"], ["куәтле", "мощный"], ["ир", "муж"], ["ирлек", "мужество"], ["кырмыска", "муравей"], ["фикер", "судить"], ["йомшак", "уязвимый"], ["ит", "мясо"], ["туп", "мяч"], ["мөгаен", "наверно"], ["мәңгегә", "навсегда"], ["өстендә", "над"], ["өмет", "надежда"], ["ясап", "наделать"], ["кирәк", "пригодиться"], ["борчучан", "надоедливый"], ["борчып", "надоесть"], ["язма", "надпись"], ["аталган", "названный"], ["билгеләү", "назначение"], ["...дип", "называемый"], ["бигрәк", "особенно"], ["ниһаять", "наконец"], ["киресенчә", "наоборот"], ["басылган", "напечатанный"], ["язылган", "написанный"], ["юнәлеш", "направление"], ["уңга", "направо"], ["мәсәлән", "например"], ["каршыда", "напротив"], ["киеренке", "напряженный"], ["халык", "толпа"], ["матур", "художественный"], ["никадәр", "насколько"], ["мыскыл", "насмешливо"], ["кешедән", "насмешливый"], ["шулкадәр", "столько"], ["хәзерге", "нынешний"], ["кәеф", "настроение"], ["турында", "про"], ["фән", "наука"], ["фәнни", "научный"], ["милли", "национальный"], ["түрәләр", "начальство"], ["безнең", "наш"], ["күк", "синий"], ["ихтыярсыз", "невольно"], ["атна", "неделя"], ["канәгатьсез", "недовольный"], ["җитмәү", "недостаток"], ["ягымлы", "нежный"], ["ят", "неизвестный"], ["билгесез", "неизвестно"], ["кайсыбер", "некоторый"], ["барыр", "некуда"], ["байтак", "немало"], ["хәзер", "теперь"], ["немец", "немецкий"], ["бераз", "посидеть"], ["тиеш", "обязанный"], ["кирәкле", "необходимый"], ["гадәти", "необычный"], ["көтмәгәндә", "неожиданно"], ["көтелмәгән", "неожиданный"], ["начар", "плохой"], ["аңлашылмый", "непонятный"], ["әлбәттә", "непременно"], ["күнегелмәгән", "непривычный"], ["берничә", "несколько"], ["юк", "нечего"], ["чынлап", "неужели"], ["бер...дә", "ни"], ["бер", "полтора"], ["тәбәнәгрәк", "ниже"], ["түбән", "низкий"], ["берничек", "никак"], ["бернинди", "никакой"], ["беркайчан", "никогда"], ["һичкем", "никто"], ["беркая", "никуда"], ["ярыйсы", "ничего"], ["һичбер", "ничто"], ["яңалык", "новость"], ["яңа", "свежий"], ["аяк", "ножка"], ["пычак", "нож"], ["номер", "номер"], ["борын", "нос"], ["төн", "ночь"], ["төнлә", "ночью"], ["әхлакый", "нравственный"], ["ярлылык", "нужда"], ["ике", "обе"], ["төшке", "обедать"], ["тәэмин", "обеспечить"], ["вәгьдә", "обещать"], ["хәтер", "память"], ["күңелгә", "обидно"], ["болыт", "туча"], ["өлкә", "область"], ["йөз", "облик"], ["җиһаз", "обстановка"], ["сурәт", "образ"], ["мәгърифәт", "образование"], ["мәгърифәтле", "образованный"], ["мөрәҗәгать", "обратиться"], ["тулай", "общежитие"], ["иҗтимагый", "общественный"], ["җәмгыять", "общество"], ["гомуми", "общий"], ["гадәттәге", "обычный"], ["гадәттә", "обычно"], ["бурыч", "обязательство"], ["һичшиксез", "обязательно"], ["борылып", "отвернуться"], ["ут", "огонь"], ["яшелчә", "огород"], ["кием", "одежда"], ["киеме", "одетый"], ["юрган", "одеяло"], ["бервакыт", "однажды"], ["көтү", "ожидание"], ["күл", "озеро"], ["тәрәзә", "окно"], ["бетү", "окончание"], ["чолгап", "окружающий"], ["ул", "тогда"], ["алар", "они"], ["куркыныч", "страшный"], ["тәҗрибә", "опыт"], ["тәҗрибәле", "опытный"], ["тагын", "опять"], ["оешма", "организация"], ["тәртипле", "организованный"], ["азат", "свободный"], ["көз", "осень"], ["көзен", "осенью"], ["күздән", "осмотреть"], ["нигез", "основа"], ["үзенчәлекле", "особенный"], ["калганы", "остальной"], ["тукталыш", "остановка"], ["саклык", "осторожно"], ["утрау", "остров"], ["үткен", "острый"], ["җавап", "отозваться"], ["җаваплылык", "ответственность"], ["җаваплы", "ответственный"], ["бүлек", "отдел"], ["ял", "отдыхать"], ["әти", "папа"], ["ватан", "отечественный"], ["ачыш", "открытие"], ["кайдан", "откуда"], ["мөнәсәбәт", "отношение"], ["отпуск", "отпуск"], ["отряд", "отряд"], ["артта", "отстать"], ["моннан", "отсюда"], ["нигә", "отчего"], ["аучы", "охотник"], ["чираттагы", "очередной"], ["чират", "очередь"], ["күзләр", "очи"], ["күзлек", "очки"], ["ялгыш", "ошибка"], ["штраф", "оштрафовать"], ["тойгы", "чувство"], ["чатыр", "палатка"], ["бармак", "палец"], ["таяк", "палка"], ["һәйкәл", "памятник"], ["юлчы", "пассажир"], ["пауза", "пауза"], ["бирү", "сдать"], ["алгы", "передовой"], ["баштан", "пережить"], ["үзгәреш", "перемена"], ["өзеклек", "перерыв"], ["чор", "период"], ["каурый", "перо"], ["ком", "песок"], ["кайгылы", "печальный"], ["мич", "печь"], ["җәяү", "пешком"], ["язучы", "писатель"], ["хат", "письмо"], ["ялкын", "пламя"], ["яулык", "платок"], ["күлмәк", "рубашка"], ["иңбаш", "плечо"], ["плитә", "плита"], ["җимеш", "плод"], ["тыгыз", "тесно"], ["мәйданчык", "площадка"], ["мәйдан", "площадь"], ["буйлап", "по"], ["җиңү", "победа"], ["җиңүче", "победитель"], ["җиңеп", "победить"], ["йөгерә", "побежать"], ["барып", "сходить"], ["өс", "поверхность"], ["сылтау", "повод"], ["әйләнеш", "поворот"], ["күтәрү", "подъем"], ["арырак", "подальше"], ["бүләк", "подарок"], ["ияк", "подбородок"], ["уңайсыз", "подвести"], ["батырлык", "подвиг"], ["хәзерләп", "подготовить"], ["хәзерлек", "подготовка"], ["күтәреп", "поднять"], ["меңгереп", "поднятый"], ["охшаш", "подобный"], ["кул", "рука"], ["тулы", "подробно"], ["әйтеп", "подсказать"], ["уйлап", "придумать"], ["мендәр", "подушка"], ["эләктереп", "подхватить"], ["юл", "строчка"], ["ахрысы", "пожалуй"], ["зинһар", "пожалуйста"], ["артында", "позади"], ["рөхсәт", "разрешить"], ["соң", "поздний"], ["тәбрик", "поздравить"], ["соңрак", "позже"], ["эзләү", "поиски"], ["әлегә", "пока"], ["күрсәтеп", "показывать"], ["замандаш", "современный"], ["кызарып", "покраснеть"], ["капланган", "покрытый"], ["идән", "пол"], ["...", "почти"], ["кыр", "полевой"], ["файдалы", "полезный"], ["сәяси", "политический"], ["шүрлек", "полка"], ["ярты", "полчаса"], ["торыш", "положение"], ["куелган", "установленный"], ["озынча", "полоска"], ["киндер", "полотно"], ["файда", "польза"], ["эндәшми", "помолчать"], ["ярдәм", "помощь"], ["ярдәмче", "помощник"], ["аңлаешлы", "понятный"], ["татып", "попробовать"], ["бусага", "порог"], ["йомыш", "поручение"], ["поселок", "поселок"], ["тизрәк", "скорее"], ["соңыннан", "после"], ["соңгы", "последний"], ["сүз", "условие"], ["киңәш", "советовать"], ["пост", "пост"], ["өзлексез", "постоянный"], ["басып", "постоять"], ["төзелгән", "созданный"], ["кыланыш", "поступок"], ["гөрләвек", "поток"], ["түшәм", "потолок"], ["шул", "тот"], ["поход", "поход"], ["охшашлы", "похожий"], ["туфрак", "почва"], ["мактаулы", "почетный"], ["шагыйрь", "поэт"], ["шунлыктан", "поэтому"], ["билбау", "пояс"], ["хаклы", "прав"], ["дөрес", "правильный"], ["кагыйдә", "правило"], ["хөкүмәт", "правительство"], ["идарә", "управление"], ["хокук", "право"], ["уң", "правый"], ["бәйрәм", "праздник"], ["бәйрәмчә", "праздничный"], ["практика", "практика"], ["тәкъдим", "предложение"], ["рәис", "председатель"], ["вәкил", "представитель"], ["тамаша", "представление"], ["вәкиле", "представлять"], ["элекке", "прежний"], ["премия", "премия"], ["укытучы", "учитель"], ["прибор", "прибор"], ["гадәт", "привычка"], ["алу", "прием"], ["приказ", "приказать"], ["үрнәк", "пример"], ["якынча", "примерно"], ["шәп", "примерный"], ["кабул", "принятый"], ["табигать", "природа"], ["колак", "ухо"], ["өстәвенә", "причем"], ["сәбәп", "причина"], ["рәхәт", "удовольствие"], ["сынап", "пробовать"], ["үткәрелгән", "проведенный"], ["дәвам", "продолжать"], ["нәтиҗә", "результат"], ["үтә", "прозрачный"], ["әсәр", "произведение"], ["җитештерүчән", "производительный"], ["җитештерү", "производство"], ["чыгыш", "происхождение"], ["промышленность", "промышленность"], ["гади", "простой"], ["киңлек", "ширина"], ["киң", "широко"], ["пространство", "пространство"], ["белгечлек", "специальность"], ["башка", "чужой"], ["нык", "уверенный"], ["ышанычлы", "прочный"], ["узган", "прошлый"], ["сикереш", "прыжок"], ["кош", "птица"], ["чүл", "пустыня"], ["ярар", "пусть"], ["путевка", "путевка"], ["сәяхәт", "странствие"], ["тузан", "пыль"], ["хезмәткәр", "работник"], ["эшче", "рабочий"], ["бердәй", "равно"], ["илтифатсыз", "равнодушно"], ["ваемсыз", "равнодушный"], ["бертигез", "равномерно"], ["тигез", "ровный"], ["өчен", "чтоб"], ["шатланып", "радостно"], ["сөенечле", "радостный"], ["шатлык", "радость"], ["тапкыр", "раз"], ["ватылган", "разбитый"], ["тикшерү", "разбор"], ["эзләүче", "разведчик"], ["илтеп", "развести"], ["үсеш", "развитие"], ["таза", "развитой"], ["карап", "разглядывать"], ["сөйләү", "речь"], ["һәртөрле", "разнообразный"], ["зурлык", "размер"], ["төрле", "разный"], ["хәл", "состояние"], ["төркем", "разряд"], ["акыл", "ум"], ["район", "районный"], ["яраланган", "раненый"], ["иртән", "утром"], ["иртә", "утро"], ["элегрәк", "раньше"], ["урнашкан", "расположенный"], ["боерык", "распоряжение"], ["хикәя", "рассказ"], ["ара", "расстояние"], ["үсемлек", "растение"], ["аптырап", "растерянно"], ["исәпләү", "расчет"], ["реаль", "реальный"], ["бала", "ребенок"], ["редакцияләү", "редакция"], ["сирәк", "редко"], ["резина", "резиновый"], ["кискен", "резкий"], ["елга", "река"], ["ремонт", "ремонт"], ["республика", "республиканский"], ["чишү", "решение"], ["чишелгән", "решенный"], ["кыю", "сметь"], ["кыюсыз", "робко"], ["ыру", "род"], ["туган", "родной"], ["туу", "рождение"], ["ал", "розовый"], ["роль", "роль"], ["үсү", "рост"], ["авыз", "рот"], ["(бер)", "рубль"], ["җиң", "рукав"], ["җитәкчелек", "руководство"], ["рус", "русский"], ["каләм", "ручка"], ["балык", "рыба"], ["балыкчы", "рыбак"], ["җирән", "рыжий"], ["рәт", "ряд"], ["янәшә", "составить"], ["бакча", "сад"], ["үзем", "сам"], ["үзешчәнлек", "самодеятельность"], ["самолет", "самолет"], ["бәйсезлек", "самостоятельность"], ["мөстәкыйль", "самостоятельный"], ["нәкъ", "точно"], ["итек", "сапоги"], ["җыю", "уборка"], ["мәгълүмат", "сведение"], ["ялтырап", "сверкающий"], ["югарыдан", "сверху"], ["яктылык", "свет"], ["якты", "ясный"], ["күрешү", "свидание"], ["ирек", "свобода"], ["иркен", "свободно"], ["үзенә", "своеобразный"], ["үз", "свой"], ["бәйләнгән", "связанный"], ["бәйләнеш", "связь"], ["ясалган", "сделанный"], ["үземне", "себя"], ["төньяк", "северный"], ["бүген", "сегодня"], ["бүгенге", "сегодняшний"], ["чал", "седой"], ["бу", "этот"], ["сер", "тайна"], ["сәркатип", "секретарь"], ["секунд", "секунда"], ["сельдь", "сельдь"], ["гаилә", "семья"], ["печән", "сено"], ["ачуланып", "сердито"], ["ачулы", "сердитый"], ["йөрәк", "сердце"], ["урта", "средний"], ["соры", "серый"], ["җитди", "серьезный"], ["арттан", "сзади"], ["көч", "сила"], ["система", "система"], ["әйтелгән", "сказанный"], ["әкият", "сказка"], ["эскәмия", "скамейка"], ["үтәли", "сквозь"], ["өелеп", "складываться"], ["күпме", "сколько"], ["тизлек", "скорость"], ["тыйнак", "скромный"], ["көчсез", "слабый"], ["дан", "слава"], ["эз", "след"], ["бара", "следующий"], ["кебек", "словно"], ["кыскасы", "словом"], ["өеп", "сложить"], ["катлаулы", "сложный"], ["катлам", "слой"], ["хезмәт", "трудящийся"], ["вакыйга", "случай"], ["очраклы", "случайный"], ["ишетелә", "слышный"], ["алмашыну", "смена"], ["үлем", "смерть"], ["көлке", "смешной"], ["оялып", "смущенно"], ["мәгънә", "смысл"], ["кар", "снежный"], ["эт", "собака"], ["җыелыш", "собрание"], ["чынында", "собственно"], ["вөҗдан", "совесть"], ["киңәшмә", "совещание"], ["риза", "согласиться"], ["эчтәлек", "содержание"], ["булдыру", "создание"], ["аң", "сознание"], ["кояш", "солнце"], ["шик", "сомнение"], ["шикле", "сомнительный"], ["йокы", "сон"], ["ярыш", "соревнование"], ["күрше", "соседний"], ["нарат", "сосна"], ["союз", "союз"], ["элек", "сперва"], ["белгеч", "специалист"], ["махсус", "специальный"], ["арка", "спина"], ["бәхәс", "спор"], ["спорт", "спортивный"], ["спортчы", "спортсмен"], ["ысул", "способ"], ["сәләт", "способность"], ["сәләтле", "способный"], ["уңнан", "справа"], ["гадел", "честно"], ["булдыра", "суметь"], ["үткәч", "спустя"], ["юлдаш", "спутник"], ["шунда", "туда"], ["чара", "средство"], ["карт", "старый"], ["карчык", "старуха"], ["мәкалә", "статья"], ["пыяла", "стекло"], ["дала", "степь"], ["шигырь", "стих"], ["өстәл", "стол"], ["багана", "столб"], ["башкала", "столица"], ["як", "сторона"], ["торган", "стоявший"], ["кораллы", "стража"], ["ил", "страна"], ["гаҗәп", "чудесно"], ["курку", "ужас"], ["ашыгып", "торопливо"], ["омтылыш", "стремление"], ["таләпчән", "строгий"], ["таләпчәнлек", "строго"], ["төзү", "стройка"], ["төзүче", "строитель"], ["төзелеш", "устройство"], ["үзеңә", "строиться"], ["саф", "строй"], ["шакылдау", "стук"], ["урындык", "стул"], ["оят", "стыдно"], ["суд", "суд"], ["язмыш", "судьба"], ["букча", "сумка"], ["кырыс", "суровый"], ["тәүлек", "сутки"], ["коры", "сухой"], ["зат", "существо"], ["тотып", "схватить"], ["сәхнә", "сцена"], ["бәхетле", "счастливый"], ["бәхет", "счастье"], ["санау", "счет"], ["съезд", "съезд"], ["шундый", "такой"], ["анда", "там"], ["бию", "танец"], ["тәлинкә", "тарелка"], ["татар", "татарский"], ["колагына", "твердить"], ["синең", "твой"], ["иҗади", "творческий"], ["иҗат", "творчество"], ["ягъни", "то"], ["тән", "тело"], ["караңгы", "темный"], ["караңгылык", "темнота"], ["күләгә", "тень"], ["җылы", "теплый"], ["территория", "территория"], ["дәфтәр", "тетрадь"], ["апа", "тетя"], ["техник", "технический"], ["агым", "течение"], ["тип", "тип"], ["акрынрак", "тише"], ["иптәш", "товарищ"], ["калын", "толстый"], ["тон", "тон"], ["юка", "тонкий"], ["тантаналы", "торжественный"], ["тантана", "торжество"], ["ашыгучан", "торопливый"], ["сагыну", "тоска"], ["нокта", "точка"], ["төгәл", "точный"], ["үлән", "трава"], ["тракторчы", "тракторист"], ["таләп", "требоваться"], ["борчулы", "тревожно"], ["шомлы,тревога", "тревожный"], ["өчпочмак", "треугольник"], ["торба", "труба"], ["трубка", "трубка"], ["авыр", "тяжелый"], ["авырлык", "трудность"], ["томан", "туман"], ["биредә", "тут"], ["ныклап", "тщательно"], ["син", "ты"], ["арт", "тыл"], ["ышандырырлык", "убедительный"], ["хөрмәтле", "уважаемый"], ["ихтирам", "уважать"], ["хөрмәт", "уважение"], ["ышанып", "уверенно"], ["ышанганлык", "уверенность"], ["почмак", "уголок"], ["күмер", "уголь"], ["күнелсез", "угрюмо"], ["уңышлы", "успешный"], ["бәрү", "удар"], ["гаҗәеп", "удивительный"], ["уңайлы", "удобно"], ["уңай", "удобный"], ["инде", "уже"], ["тар", "узкий"], ["белеп", "узнав"], ["урам", "улица"], ["елмаеп", "улыбаясь"], ["елмаю", "улыбка"], ["оста", "умелый"], ["белү", "умение"], ["акыллы", "умный"], ["уңыш", "успех"], ["йокыга", "уснуть"], ["арыган", "усталый"], ["телдән", "устно"], ["китү", "уход"], ["катнашу", "участие"], ["катнашучы", "участник"], ["участок", "участок"], ["укучы", "школьник"], ["уку", "учебный"], ["дәреслек", "учебник"], ["тәгълимат", "учение"], ["галим", "ученый"], ["укытучылар", "учительская"], ["укытучы...", "учительский"], ["уңайлылык", "уют"], ["мисал", "факт"], ["сын", "фигура"], ["физика", "физический"], ["форма", "форма"], ["фотография", "фотография"], ["җөмлә", "фраза"], ["характер", "характер"], ["койрык", "хвост"], ["химия", "химический"], ["икмәк", "хлеб"], ["йөреш", "ходьба"], ["хуҗа", "хозяин"], ["хуҗалык", "хозяйство"], ["салкын", "холодный"], ["хор", "хор"], ["булса", "хотя"], ["рәссам", "художник"], ["начаррак", "хуже"], ["төс", "цвет"], ["төсле", "цветной"], ["чәчәк", "цветок"], ["чирәм", "целина"], ["максат", "цель"], ["кыйммәтле", "ценный"], ["үзәк", "центр"], ["үзәктәге", "центральный"], ["чылбыр", "цепь"], ["чеби", "цыпленок"], ["чәй", "чай"], ["сәгать", "часы"], ["еш", "часто"], ["өлеш", "часть"], ["ешрак", "чаще"], ["кемнеке", "чей"], ["кеше", "человек"], ["кешегә", "человеческий"], ["кешелек", "человечество"], ["караганда", "чем"], ["аркылы", "через"], ["шайтан", "черт"], ["намус", "честь"], ["чирек", "четверть"], ["чиста", "чистый"], ["чисталык", "чистота"], ["әгъза", "член"], ["нәрсә", "что"], ["таң", "чудесный"], ["адым", "шаг"], ["атлап", "шагнуть"], ["бүрек", "шапка"], ["пышылдап", "шепотом"], ["муен", "шея"], ["мәктәп", "школьный"], ["эшләпә", "шляпа"], ["данә", "штука"], ["шаулап", "шумно"], ["шаярту", "шутка"], ["яңак", "щека"], ["көчек", "щенок"], ["щи", "щи"], ["имтихан", "экзаменовать"], ["нөсхә", "экземпляр"], ["икътисад", "экономика"], ["экономия", "экономия"], ["электр", "электростанция"], ["гайрәтләнеп", "энергично"], ["энергия", "энергия"], ["кат", "этаж"], ["тәэсирле", "эффективный"], ["их", "эх"], ["кайтаваз", "эхо"], ["көньяк", "юг"], ["көньяктагы", "южный"], ["яшүсмер", "юноша"], ["мин", "я"], ["алма", "яблочный"], ["алмагач", "яблоня"], ["тел", "язык"], ["йомырка", "яйцо"], ["гыйнвар", "январь"], ["карчыга", "ястреб"], ["тартма", "ящик"]];


function randInt(l, r) {
    return Math.floor(Math.random() * (r - l) + l);
}

function intDiv(a, b) {
   return Math.floor(a / b);
}

let wordPairs = [];

let n = allPairs.length;
const totalRounds = 5; // Общее количество раундов
for (let i = 0; i < totalRounds; ++i) {
    let l = intDiv(i * n, totalRounds);
    let r = intDiv((i + 1) * n, totalRounds) - 1;
    wordPairs.push(allPairs[randInt(l, r)]);
}

let currentPair = null;
let isTatarToRussian = true; // Начинаем с перевода с татарского на русский
let correctAnswersCount = 0; // Счетчик правильных ответов
let currentPairId = 0;

function displayWord(word) {
    const wordDiv = document.getElementById("word");
    wordDiv.textContent = word;
}

function displayMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
}

function updateScore() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Правильных ответов: ${correctAnswersCount}/${totalRounds}`;
}

function handleGreenButton() {
    const userInput = document.getElementById("input").value.trim();
    if (currentPair) {
        if (isTatarToRussian) {
            if (userInput.toLowerCase() === currentPair[1].toLowerCase()) {
                correctAnswersCount++;
                displayMessage("Правильно!");
                updateScore();
                setTimeout(() => {
                    displayMessage("");
                    if (correctAnswersCount >= totalRounds) {
                        endGame();
                    } else {
                        isTatarToRussian = !isTatarToRussian;
                        startNewRound();
                    }
                }, 400);
            } else {
                displayMessage(`Неправильно! (${currentPair[1]})`);
                setTimeout(() => {
                    displayMessage("");
                    isTatarToRussian = !isTatarToRussian;
                    startNewRound();
                }, 1000);
            }
        } else {
            if (userInput.toLowerCase() === currentPair[0].toLowerCase()) {
                correctAnswersCount++;
                displayMessage("Правильно!");
                updateScore();
                setTimeout(() => {
                    displayMessage("");
                    if (correctAnswersCount >= totalRounds) {
                        endGame();
                    } else {
                        isTatarToRussian = !isTatarToRussian;
                        startNewRound();
                    }
                }, 400);
            } else {
                displayMessage(`Неправильно! (${currentPair[0]})`);
                setTimeout(() => {
                    displayMessage("");
                    isTatarToRussian = !isTatarToRussian;
                    startNewRound();
                }, 1000);
            }
        }
    }
}

function startNewRound() {
    if (currentPairId == totalRounds) {
        endGame();
    }
    currentPair = wordPairs[currentPairId];
    if (isTatarToRussian) {
        displayWord(currentPair[0]); // Показываем татарское слово
    } else {
        displayWord(currentPair[1]); // Показываем русское слово
    }
    document.getElementById("input").value = '';
    displayMessage("");
    currentPairId++;
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(correctAnswersCount);
    tg.close();
});

function endGame() {
    console.log("End");
    if (correctAnswersCount >= totalRounds) {
	displayMessage(`Поздравляем! Вы правильно ответили на ${totalRounds} вопросов!`);
    }
    displayWord('');
    document.getElementById("input").value = '';
    document.getElementById("input").disabled = true;
    document.querySelector('.green-button').disabled = true;
    document.querySelector('.red-button').disabled = true;
    tg.MainButton.enable();
}

// Начать первый раунд
startNewRound();
